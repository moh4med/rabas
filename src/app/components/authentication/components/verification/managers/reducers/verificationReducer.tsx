/**
 * verificationReducer.tsx
 */
import { ResponseVM } from "../../../../../../common/viewModels";
import { IAction, IReducer } from "../../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { UserVerificationFormVM } from "../../viewModels/userVerificationFormVM";
import { Types } from "../actions/types";

export const VerificationReducer: IReducer<IStateProps> = {

    initialState: {
        Email: "",
        Password: "",
        VerificationCode: ""
    },

    reducer(state: IStateProps = VerificationReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.VERIFY]: (state: any, action: IAction<ResponseVM<UserVerificationFormVM>>): IStateProps => {

                return {
                    ...state,
                    Email: action.payload.data.Email,
                    Password: action.payload.data.Password,
                    VerificationCode: action.payload.data.VerificationCode
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
