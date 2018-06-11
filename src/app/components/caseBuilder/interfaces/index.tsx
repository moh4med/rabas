/**
 * index.tsx
 */

import { CaseBuilderVM } from "../viewModels/caseBuilderVM";
import { QuestionAnswerVM } from "../viewModels/questionAnswerVM";

export interface IStateProps extends CaseBuilderVM {
    index?: number;
}

export interface IStateActions {
    caseBuilderLayout(): any;
    buildCase(): any;
    submitCase(): any;
    treatmentPlan(): any;
    adjustQuestionData(data: CaseBuilderVM): any;
    updateQuestionVisibility(QuestionIndex?: number, IsVisible?: boolean): any;
}
