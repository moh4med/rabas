/**
 * questionActions.tsx
 */

import { ActionCreator } from "../../../../../../Core.FE.RN/utilities";
import { CaseBuilderActions } from "../../../../managers/actions";
import { QuestionAnswerVM } from "../../../../viewModels/questionAnswerVM";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const QuestionActions: IStateActions = {
    submitCase() {
        return (dispatch: any) => {
            dispatch(CaseBuilderActions.submitCase());
        };
    },

    updateQuestionAnswer(QuestionAnswer: QuestionAnswerVM) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_QUESTION_ANSWER, "QuestionAnswer")(QuestionAnswer));
        };
    },
    updateChoiceQuestionAnswer(QuestionId: number, ChoiceId: number, IsDeleted: boolean) {
        return (dispatch: any) => {
            dispatch(QuestionActions.updateQuestionAnswer({ ...new QuestionAnswerVM(), QuestionId, ChoiceId, IsDeleted }));
        };
    },
    updateBoolQuestionAnswer(QuestionId: number, BoolValue: boolean, IsDeleted: boolean) {
        return (dispatch: any) => {
            dispatch(QuestionActions.updateQuestionAnswer({ ...new QuestionAnswerVM(), QuestionId, BoolValue, IsDeleted }));
        };
    },
    updateDecimalQuestionAnswer(QuestionId: number, DecimalValue: number, IsDeleted: boolean) {
        return (dispatch: any) => {
            dispatch(QuestionActions.updateQuestionAnswer({ ...new QuestionAnswerVM(), QuestionId, DecimalValue, IsDeleted }));
        };
    },
    updateToothQuestionAnswer(QuestionId: number, ToothNumber: number, IsDeleted: boolean) {
        return (dispatch: any) => {
            dispatch(QuestionActions.updateQuestionAnswer({ ...new QuestionAnswerVM(), QuestionId, ToothNumber, IsDeleted }));
        };
    },
    updateTextQuestionAnswer(QuestionId: number, TextValue: string, IsDeleted: boolean) {
        return (dispatch: any) => {
            dispatch(QuestionActions.updateQuestionAnswer({ ...new QuestionAnswerVM(), QuestionId, TextValue, IsDeleted }));
        };
    },
    updateQuestionVisibility(QuestionIndex?: number, IsVisible?: boolean) {
        return (dispatch: any) => {
            dispatch(CaseBuilderActions.updateQuestionVisibility(QuestionIndex, IsVisible));
        };
    },

};
