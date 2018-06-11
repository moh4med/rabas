/**
 * patientActions.tsx
 */

import { Alert } from "react-native";
import { ErrorResponseVM, PostRequestVM, SubscriptionVM } from "../../../../common/viewModels";
import { CaseBuilderActions } from "../../../../components/caseBuilder/managers/actions";
import { Locations } from "../../../../config/locations";
import { BusyIndicatorActions } from "../../../../Core.FE.RN/actions";
import { ErrorCodes } from "../../../../Core.FE.RN/Core.FE/enums";
import { ActionCreator, Navigate, ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateActions } from "../../interfaces";
import { UserPatientFormVM } from "../../viewModels/userPatientFormVM";
import { PatientManager } from "../patientManager";
import { Types } from "./types";

export const PatientActions: IStateActions = {

    addPatient(userPatientForm: UserPatientFormVM) {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();

            dispatch(ActionCreator.create(Types.ADD_PATIENT, "data")(userPatientForm));

            return PatientManager.Instance.addPatient(userPatientForm)
                .then((success) => {
                    dispatch(ActionCreator.create(Types.ADD_PATIENT_SUCCESS, "data")(success.data));
                    dispatch(CaseBuilderActions.caseBuilderLayout());
                },
                (error: ErrorResponseVM) => {
                    BusyIndicatorActions.hideLoading();
                    dispatch(ActionCreator.create(Types.ADD_PATIENT_FAIL)());

                });

        };
    }
};
