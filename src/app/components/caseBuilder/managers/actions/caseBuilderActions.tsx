/**
 * caseBuilderActions.tsx
 */

import * as _ from "lodash";
import { ErrorResponseVM, GetRequestVM } from "../../../../common/viewModels";
import { Locations } from "../../../../config/locations";
import { store } from "../../../../config/store";
import { BusyIndicatorActions } from "../../../../Core.FE.RN/actions";
import { ApplicationManager, ImageManager } from "../../../../Core.FE.RN/Core.FE/managers";
import { ActionCreator, Actions, Navigate } from "../../../../Core.FE.RN/utilities";
import { AppRouterActions } from "../../../appRouter/managers/actions";
import { RouteVM } from "../../../appRouter/viewModels/routeVM";
import { TreatmentPlanActions } from "../../../treatmentPlan/managers/actions";
import { IStateActions } from "../../interfaces";
import { CaseBuilderVM } from "../../viewModels/caseBuilderVM";
import { MainSectionVM } from "../../viewModels/mainSectionVM";
import { QuestionAnswerVM } from "../../viewModels/questionAnswerVM";
import { QuestionVM } from "../../viewModels/questionVM";
import { SectionVM } from "../../viewModels/sectionVM";
import { CaseBuilderManager } from "../caseBuilderManager";
import { Types } from "./types";

export const CaseBuilderActions: IStateActions = {

    caseBuilderLayout() {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.BUILD_CASE_LAYOUT)());

            return CaseBuilderManager.Instance.caseBuilderLayout().then(
                (success) => {
                    dispatch(ActionCreator.create(Types.BUILD_CASE_LAYOUT_SUCCESS, "data")(CaseBuilderActions.adjustQuestionData(success.data)));
                    const routes = success.data.Structure.MainSections.map((item, index) => {
                        const route = new RouteVM();
                        route.index = index,
                            route.icon = ImageManager.Instance.getImage(item.Image),
                            route.title = item.Title;
                        route.key = `Tab${index}`;

                        return route;
                    });

                    dispatch(AppRouterActions.updateRoutes(routes));
                    dispatch(CaseBuilderActions.buildCase());
                    BusyIndicatorActions.hideLoading();

                },
                (error: ErrorResponseVM) => {
                    dispatch(ActionCreator.create(Types.BUILD_CASE_LAYOUT_FAIL)());
                    BusyIndicatorActions.hideLoading();
                });

        };
    },
    buildCase() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_BUILD_CASE)());
            Navigate(Locations.CaseTabs);

        };
    },
    submitCase() {
        const PatientId: number = (store.getState() as any).patient.PatientId;
        // tslint:disable-next-line:underscore-consistent-invocation
        const QuestionAnswers: QuestionAnswerVM[] = _.filter((store.getState() as any).question.QuestionAnswers, (elem) => elem !== undefined);

        return (dispatch: any) => {
            dispatch(CaseBuilderActions.treatmentPlan());

            return;

            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.SUBMIT_CASE)());

            return CaseBuilderManager.Instance.submitCase({ PatientId, QuestionAnswers }).then(
                (success) => {
                    dispatch(ActionCreator.create(Types.SUBMIT_CASE_SUCCESS, "data")(success.data));
                    dispatch(TreatmentPlanActions.updateTreatmentPlan(success.data));

                    CaseBuilderActions.treatmentPlan();
                    BusyIndicatorActions.hideLoading();

                },
                (error: ErrorResponseVM) => {
                    dispatch(ActionCreator.create(Types.SUBMIT_CASE_FAIL)());
                    BusyIndicatorActions.hideLoading();

                });
        };
    },
    updateQuestionVisibility(QuestionIndex?: number, IsVisible?: boolean) {
        return (dispatch: any) => {
            if (QuestionIndex && QuestionIndex > -1) {
                // if question has next id or answer is selected and has next id
                // set questionsList[next id].isVisible = true
                // this.state.QuestionsList[index].IsVisible = true;
                dispatch(ActionCreator.create(Types.UPDATE_QUESTION_VISIBILITY, "questionIndex", "isVisible")(QuestionIndex, IsVisible));

            }
        };
    },
    treatmentPlan() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_TREATMENT_PLAN)());
            // tslint:disable:object-literal-key-quotes
            dispatch(TreatmentPlanActions.updateTreatmentPlan({
                "CaseId": 1033,
                "TreatmentSuccessIndicator": 2,
                "TreatmentPlanEntries": [
                    {
                        "Key": "Connection",
                        "Value": "Internal"
                    },
                    {
                        "Key": "Bone Graft",
                        "Value": "Recommended"
                    },
                    {
                        "Key": "Ortho/FPD",
                        "Value": "Recommended"
                    }
                ]
            }));

            Actions.pop(); // last tab navigation
            Actions.pop(); // pop tabs view
            Actions.pop(); // pop patient screen
            // Actions.reset(Locations.Home);
            Actions.push(Locations.TreatmentPlan);
        };
    },
    // tslint:disable:underscore-consistent-invocation
    adjustQuestionData(data: CaseBuilderVM) {
        const { Questions, Structure } = data;

        const getQuestionById = (QuestionsList: QuestionVM[], questionId?: number) => {
            return _.find(QuestionsList, (question: QuestionVM, index: number) => {
                return question.Id === questionId;
            });
        };
        const getQuestionIndexById = (QuestionsList: QuestionVM[], questionId?: number) => {

            return _.findIndex(QuestionsList, (question: QuestionVM) => {
                return question.Id === questionId;
            });
        };

        const setVisibility = (QuestionsList: QuestionVM[], questionId: number, path: string) => {
            const question = getQuestionById(QuestionsList, questionId);
            const questionIndex = getQuestionIndexById(QuestionsList, questionId);

            if (question) {
                QuestionsList[questionIndex].IsVisible = true;
                // path = path ? `${path}/${QuestionsList[questionIndex].Id}` : `/${QuestionsList[questionIndex].Id}`;
                // QuestionsList[questionIndex].Path = path;

                if (question.NextQuestionId) {
                    setVisibility(QuestionsList, question.NextQuestionId, path);
                } else {
                    // it doesnt have a next question
                    // but one of the children might have
                    return;
                }
            }

            return;

        };

        _.each(Structure.MainSections, (mainSection: MainSectionVM, mainSectionIndex: number) => {
            // mainSection.QuestionIds

            const msRootQuestion = _.head(mainSection.QuestionIds);
            if (msRootQuestion) {
                const path = "";
                setVisibility(Questions, msRootQuestion, path);
            }
            // const msRootSection = _.head(mainSection.Sections);

            _.each(mainSection.Sections, (section: SectionVM, subSectionIndex: number) => {
                // section.QuestionIds
                const path = "";
                const ssRootQuestion = _.head(section.QuestionIds);
                if (ssRootQuestion) {
                    setVisibility(Questions, ssRootQuestion, path);
                }

            });
        });

        return { Questions, Structure };
    }

};
