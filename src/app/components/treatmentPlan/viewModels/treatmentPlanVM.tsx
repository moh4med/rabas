/**
 * treatmentPlanVM.tsx
 */

import { TreatmentPlanEntryVM } from "./treatmentPlanEntryVM";

export class TreatmentPlanVM {
    public CaseId: number;
    public TreatmentSuccessIndicator: number; // TreatmentPlan Success Indicator Enum
    public TreatmentPlanEntries: TreatmentPlanEntryVM[];
}
