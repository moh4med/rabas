/**
 * patientReducer.tsx
 */

import { ErrorResponseVM, ResponseVM } from "../../../../common/viewModels";
import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { PatientVM } from "../../viewModels/patientVM";
import { UserPatientFormVM } from "../../viewModels/userPatientFormVM";
import { Types } from "../actions/types";

export const PatientReducer: IReducer<IStateProps> = {

    initialState: {
        PatientId: 0,
        FirstName: "",
        LastName: "",
        Dob: "",
        Gender: 0,
    },

    reducer(state: IStateProps = PatientReducer.initialState, action: IAction<any>) {
        const handlers: any = {

            [Types.ADD_PATIENT]: (state: IStateProps, action: IAction<ResponseVM<UserPatientFormVM>>): IStateProps => {

                return {
                    ...state,
                    FirstName: action.payload.data.FirstName,
                    LastName: action.payload.data.LastName,
                    Dob: action.payload.data.Dob,

                };
            },
            [Types.ADD_PATIENT_SUCCESS]: (state: IStateProps, action: IAction<ResponseVM<PatientVM>>): IStateProps => {

                return {
                    ...state,
                    PatientId: action.payload.data.PatientId
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
