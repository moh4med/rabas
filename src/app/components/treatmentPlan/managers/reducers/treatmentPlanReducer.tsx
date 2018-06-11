/**
 * treatmentPlanReducer.tsx
 */

import { ResponseVM } from "../../../../common/viewModels";
import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { TreatmentPlanVM } from "../../viewModels/treatmentPlanVM";
import { Types } from "../actions/types";

export const TreatmentPlanReducer: IReducer<IStateProps> = {

    initialState: {
        CaseId: 0,
        TreatmentPlanEntries: [],
        TreatmentSuccessIndicator: 0
    },

    reducer(state: IStateProps = TreatmentPlanReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.UPDATE_TREATMENT_PLAN]: (state: IStateProps, action: IAction<ResponseVM<TreatmentPlanVM>>): IStateProps => {

                return {
                    ...state,
                    CaseId: action.payload.data.CaseId,
                    TreatmentPlanEntries: action.payload.data.TreatmentPlanEntries,
                    TreatmentSuccessIndicator: action.payload.data.TreatmentSuccessIndicator,

                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
