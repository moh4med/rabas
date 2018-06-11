/**
 * index.tsx
 */

import { TreatmentPlanVM } from "../viewModels/treatmentPlanVM";

export interface IStateProps extends TreatmentPlanVM {
}

export interface IStateActions {
    updateTreatmentPlan(treatmentPlan: TreatmentPlanVM): any;
}
