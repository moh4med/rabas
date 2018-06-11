/**
 * questionVM.tsx
 */

import { ChoiceVM } from "./choicesVM";
import { DecimalRangeDependentQuestionVM } from "./decimalRangeDependentQuestionsVM";
import { ToothNumberDependentQuestionVM } from "./toothNumberDependentQuestionVM";

export class QuestionVM {
    public Id: number;
    public Header: string;
    public Type: number;
    public MainSectionId: number;
    public NextQuestionId: number;
    public Choices: ChoiceVM[];
    public DecimalRangeDependentQuestions: DecimalRangeDependentQuestionVM[];
    public ToothNumberDependentQuestions: ToothNumberDependentQuestionVM[];
    public IsVisible?: boolean;
    // public Path?: string;
}
