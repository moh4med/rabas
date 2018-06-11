/**
 * loginReducer.tsx
 */

import { ErrorResponseVM, ResponseVM } from "../../../../../../common/viewModels";
import { IAction, IReducer } from "../../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { UserLoginFormVM } from "../../viewModels/userLoginFormVM";
import { Types } from "../actions/types";

export const LoginReducer: IReducer<IStateProps> = {

    initialState: {
        Email: "",
        Password: ""
        // Email: "tarekn@emeint.net",
        // Password: "emeint123"
    },

    reducer(state: IStateProps = LoginReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.LOGIN]: (state: IStateProps, action: IAction<ResponseVM<UserLoginFormVM>>): IStateProps => {

                return {
                    ...state,
                    Email: action.payload.data.Email,
                    Password: action.payload.data.Password
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
