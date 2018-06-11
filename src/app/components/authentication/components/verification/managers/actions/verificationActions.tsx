/**
 * verificationActions.tsx
 */

import { ErrorResponseVM, PostRequestVM} from "../../../../../../common/viewModels";
import { Locations } from "../../../../../../config/locations";
import { store } from "../../../../../../config/store";
import { BusyIndicatorActions } from "../../../../../../Core.FE.RN/actions";
import { ActionCreator, Navigate, ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { LoginActions } from "../../../login/managers/actions";
import { IStateActions } from "../../../verification/interfaces";
import { UserVerificationFormVM } from "../../viewModels/userVerificationFormVM";
import { VerificationManager } from "../verificationManager";
import { Types } from "./types";

export const VerificationActions: IStateActions = {

    verify(userVerificationForm: UserVerificationFormVM) {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.VERIFY, "data")(userVerificationForm));

            return VerificationManager.Instance.Verify(userVerificationForm)
                .then((success) => {
                    dispatch(ActionCreator.create(Types.VERIFICATION_SUCCESS)());
                    dispatch(LoginActions.login(userVerificationForm));
                },
                (error: ErrorResponseVM) => {
                    BusyIndicatorActions.hideLoading();
                    dispatch(ActionCreator.create(Types.VERIFICATION_FAIL)());
                });

        };
    },
    resendCode(userVerificationForm: UserVerificationFormVM) {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.RESEND_CODE)());

            return VerificationManager.Instance.ResendCode(userVerificationForm)
                .then((success) => {
                    dispatch(ActionCreator.create(Types.RESEND_CODE_SUCCESS)());
                },
                (error: ErrorResponseVM) => {
                    BusyIndicatorActions.hideLoading();
                    dispatch(ActionCreator.create(Types.RESEND_CODE_FAIL)());
                });

        };
    },
    signup() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_SIGNUP)());
            Navigate(Locations.Signup);
        };
    }
};
