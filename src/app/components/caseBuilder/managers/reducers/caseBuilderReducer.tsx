/**
 * caseBuilderReducer.tsx
 */

import { ErrorResponseVM, ResponseVM } from "../../../../common/viewModels";
import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateActions, IStateProps } from "../../interfaces";
import { CaseBuilderVM } from "../../viewModels/caseBuilderVM";
import { SectionVM } from "../../viewModels/sectionVM";
import { Types } from "../actions/types";

export const CaseBuilderReducer: IReducer<IStateProps> = {

    initialState: {
        Questions: [],
        Structure: {
            MainSections: []
        },

    },

    reducer(state: IStateProps = CaseBuilderReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.BUILD_CASE_LAYOUT]: (state: IStateProps, action: IAction<ResponseVM<IStateProps>>): IStateProps => {

                return state;
            },

            [Types.BUILD_CASE_LAYOUT_SUCCESS]: (state: IStateProps, action: IAction<ResponseVM<CaseBuilderVM>>): IStateProps => {

                return {
                    ...state,
                    Questions: action.payload.data.Questions,
                    Structure: action.payload.data.Structure

                };
            },
            [Types.BUILD_CASE_LAYOUT_FAIL]: (state: IStateProps, action: IAction<ErrorResponseVM>): IStateProps => {

                return state;
            },
            [Types.SUBMIT_CASE]: (state: IStateProps, action: IAction<any>): IStateProps => {

                return state;
            },
            [Types.SUBMIT_CASE_SUCCESS]: (state: IStateProps, action: IAction<any>): IStateProps => {

                return state;
            },
            [Types.SUBMIT_CASE_FAIL]: (state: IStateProps, action: IAction<any>): IStateProps => {

                return state;
            },
            [Types.UPDATE_QUESTION_VISIBILITY]: (state: IStateProps, action: IAction<any>): IStateProps => {

                if (state.Questions && action.payload.questionIndex > -1) {

                    // copy the array
                    const questionsList = state.Questions.slice() || [];

                    // execute the manipulations
                    questionsList[action.payload.questionIndex].IsVisible = action.payload.isVisible;

                    // set the new state
                    return { ...state, Questions: questionsList };

                    // return {
                    //     ...state, Questions: {
                    //         ...state.Questions, [action.payload.questionIndex.toString()]: {
                    //             ...state.Questions[action.payload.questionIndex.toString()],
                    //             IsVisible: action.payload.isVisible
                    //         }
                    //     }
                    // };
                } else {

                    return state;
                }
            },
            [Types.GOTO_TREATMENT_PLAN]: (state: IStateProps, action: IAction<any>): IStateProps => {
                return state;
            }

        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
