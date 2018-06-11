/**
 * loginActions.tsx
 */
import { PostRequestVM, SubscriptionVM } from "../../../../../../common/viewModels";
import { Locations } from "../../../../../../config/locations";
import { ActionCreator, Navigate } from "../../../../../../Core.FE.RN//utilities";
import { BusyIndicatorActions } from "../../../../../../Core.FE.RN/actions";
import { ErrorCodes } from "../../../../../../Core.FE.RN/Core.FE/enums";
import { SessionManager } from "../../../../../../Core.FE.RN/Core.FE/managers";
import { BaseFEGetRequestVM, BaseFEPostRequestVM, UserSessionVM } from "../../../../../../Core.FE.RN/Core.FE/viewModels";
import { AuthenticationActions } from "../../../../../authentication/managers/actions";
import { IStateActions } from "../../interfaces";
import { UserLoginFormVM } from "../../viewModels/userLoginFormVM";
import { LoginManager } from "../loginManager";
import { Types } from "./types";

export const LoginActions: IStateActions = {

    login(userLoginForm: UserLoginFormVM) {
        return (dispatch: any) => {
            BusyIndicatorActions.showLoading();
            dispatch(ActionCreator.create(Types.LOGIN, "data")(userLoginForm));
            dispatch(AuthenticationActions.updateAuthenticationCredentials(userLoginForm.Email, userLoginForm.Password));

            return LoginManager.Instance.login(userLoginForm)
                .then((success) => {
                    dispatch(ActionCreator.create(Types.LOGIN_SUCCESS)());
                    dispatch(AuthenticationActions.updateAuthenticationToken(success.data.Token));
                    // should start session here after successful login
                    SessionManager.Instance.startSession(new UserSessionVM(userLoginForm.Email, success.data.Token));

                    BusyIndicatorActions.hideLoading();
                    dispatch(LoginActions.home());

                },
                (error) => {
                    dispatch(ActionCreator.create(Types.LOGIN_FAIL)());
                    BusyIndicatorActions.hideLoading();

                    if (error.errorCode === ErrorCodes.DeactivatedSubscriber) {
                        dispatch(LoginActions.verification());
                    }
                });

        };
    },
    signup() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_SIGNUP)());
            Navigate(Locations.Signup);
        };
    },
    verification() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_VERIFICATION)());
            Navigate(Locations.Verification);
        };
    },
    home() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_HOME)());
            Navigate(Locations.Home);
        };
    }

};
