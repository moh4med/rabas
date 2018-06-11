/**
 * authenticationActions.tsx
 */

import { store } from "../../../../config/store";
import { ActionCreator } from "../../../../Core.FE.RN/utilities/actionCreator";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const AuthenticationActions: IStateActions = {

    updateAuthenticationCredentials(email: string, password: string) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_AUTHENTICATION_CREDENTIALS, "data")
                ({ Email: email, Password: password }));
        };
    },

    updateAuthenticationToken(token: string) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_AUTHENTICATION_TOKEN, "data")({ Token: token }));
        };
    },

    authenticationRequired(token: string) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.AUTHENTICATION_REQUIRED)());
        };
    }
};
