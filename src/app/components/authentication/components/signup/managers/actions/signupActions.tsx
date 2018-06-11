/**
 * signupActions.tsx
 */

import { Alert } from "react-native";
import { ErrorResponseVM, PostRequestVM, SubscriptionVM } from "../../../../../../common/viewModels";
import { Locations } from "../../../../../../config/locations";
import { BusyIndicatorActions } from "../../../../../../Core.FE.RN/actions";
import { ErrorCodes } from "../../../../../../Core.FE.RN/Core.FE/enums";
import { ActionCreator, Navigate, ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { AuthenticationActions } from "../../../../../authentication/managers/actions";
import { UserSignupFormVM } from "../../../signup/viewModels/userSignupFormVM";
import { IStateActions } from "../../interfaces";
import { SignupManager } from "../signupManager";
import { Types } from "./types";

export const SignupActions: IStateActions = {

    createAccount(userSignupForm: UserSignupFormVM) {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.CREATE_ACCOUNT, "data")(userSignupForm));
            dispatch(AuthenticationActions.updateAuthenticationCredentials(userSignupForm.Email, userSignupForm.Password));

            return SignupManager.Instance.createAccount(userSignupForm).then(
                (success) => {
                    dispatch(ActionCreator.create(Types.CREATE_ACCOUNT_SUCCESS, "data")(success.data));
                    BusyIndicatorActions.hideLoading();
                    dispatch(SignupActions.verification());
                },
                (error: ErrorResponseVM) => {
                    dispatch(ActionCreator.create(Types.CREATE_ACCOUNT_FAIL)());
                    BusyIndicatorActions.hideLoading();
                });

        };
    },

    login() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_LOGIN)());
            Navigate(Locations.Login);
        };
    },
    verification() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_VERIFICATION)());
            Navigate(Locations.Verification);
        };
    },

    termsAndConditions() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_TERMS_AND_CONDITIONS)());
            Navigate(Locations.TermsAndConditions);
        };
    }

};
