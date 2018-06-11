/**
 * treatmentPlantActions.tsx
 */

import { BusyIndicatorActions } from "../../../../Core.FE.RN/actions";
import { ActionCreator, Navigate, ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateActions } from "../../interfaces";
import { TreatmentPlanVM } from "../../viewModels/treatmentPlanVM";
import { Types } from "./types";

export const TreatmentPlanActions: IStateActions = {
    updateTreatmentPlan(treatmentPlan: TreatmentPlanVM) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_TREATMENT_PLAN, "data")(treatmentPlan));
            BusyIndicatorActions.hideLoading();
        };
    }
};
