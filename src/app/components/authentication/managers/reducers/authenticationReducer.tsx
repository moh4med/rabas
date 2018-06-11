/**
 * authenticationReducer.tsx
 */

import { ResponseVM } from "../../../../common/viewModels";
import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const AuthenticationReducer: IReducer<IStateProps> = {

    initialState: {
        Email: "",
        Password: "",
        Token: "",
        LastUpdated: new Date()
    },

    reducer(state: IStateProps = AuthenticationReducer.initialState, action: IAction<any>): IStateProps {
        const handlers: any = {
            [Types.UPDATE_AUTHENTICATION_CREDENTIALS]: (state: IStateProps, action: IAction<ResponseVM<IStateProps>>): IStateProps => {
                return {
                    ...state,
                    Email: action.payload.data.Email,
                    Password: action.payload.data.Password,
                    LastUpdated: new Date()
                };
            },

            [Types.UPDATE_AUTHENTICATION_TOKEN]: (state: IStateProps, action: IAction<ResponseVM<IStateProps>>): IStateProps => {
                return {
                    ...state,
                    Token: action.payload.data.Token,
                    LastUpdated: new Date()
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
