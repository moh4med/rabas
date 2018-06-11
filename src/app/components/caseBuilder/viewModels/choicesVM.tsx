/**
 * choicesVM.tsx
 */

import { ImageVM } from "../../../Core.FE.RN/Core.FE/viewModels";

export class ChoiceVM {
    public Id: number;
    public Text: string;
    // public Image: ImageVM;
    // public TreatmentSuccessIndicator: number;
    public NextQuestionId: number;
    public TerminatesCase: boolean;
}
