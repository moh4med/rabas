/**
 * index.tsx
 */

import { QuestionAnswerVM } from "../../../viewModels/questionAnswerVM";
import { QuestionVM } from "../../../viewModels/questionVM";

export interface IStateProps {
    index?: number;
    questionId?: number;
    question?: QuestionVM;
    QuestionAnswer?: QuestionAnswerVM;
    QuestionAnswers?: QuestionAnswerVM[];
}

export interface IStateActions {
    submitCase(): any;
    updateQuestionAnswer(QuestionAnswer: QuestionAnswerVM): any;
    updateChoiceQuestionAnswer(QuestionId: number, ChoiceId: number, IsDeleted: boolean): any;
    updateBoolQuestionAnswer(QuestionId: number, BoolValue: boolean, IsDeleted: boolean): any;
    updateDecimalQuestionAnswer(QuestionId: number, DecimalValue: number, IsDeleted: boolean): any;
    updateToothQuestionAnswer(QuestionId: number, ToothNumber: number, IsDeleted: boolean): any;
    updateTextQuestionAnswer(QuestionId: number, TextValue: string, IsDeleted: boolean): any;
    updateQuestionVisibility(QuestionIndex?: number, IsVisible?: boolean): any;
}
