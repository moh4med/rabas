/**
 * signupReducer.tsx
 */
import { SubscriptionVM } from "../../../../../../common/viewModels";
import { ErrorResponseVM, ResponseVM } from "../../../../../../common/viewModels";
import { IAction, IReducer } from "../../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { UserSignupFormVM } from "../../../../components/signup/viewModels/userSignupFormVM";
import { IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const SignupReducer: IReducer<IStateProps> = {

    initialState: {
        Id: 0,
        Name: "",
        Dob: "",
        Location: "",
        Profession: 0,
        Email: "",
        Password: "",
        RepeatPassword: "",
        AgreeOnTermsAndConditions: false
    },

    reducer(state: IStateProps = SignupReducer.initialState, action: IAction<any>) {
        const handlers: any = {

            [Types.CREATE_ACCOUNT]: (state: IStateProps, action: IAction<ResponseVM<UserSignupFormVM>>): IStateProps => {

                return {
                    ...state,
                    Name: action.payload.data.Name,
                    Dob: action.payload.data.Dob,
                    Location: action.payload.data.Location,
                    Profession: action.payload.data.Profession,
                    Email: action.payload.data.Email,
                    Password: action.payload.data.Password,
                    RepeatPassword: action.payload.data.RepeatPassword,
                    AgreeOnTermsAndConditions: action.payload.data.AgreeOnTermsAndConditions,

                };
            },
            [Types.CREATE_ACCOUNT_SUCCESS]: (state: IStateProps, action: IAction<ResponseVM<SubscriptionVM>>): IStateProps => {

                return {
                    ...state,
                    Id: action.payload.data.Id
                };
            },
            [Types.CREATE_ACCOUNT_FAIL]: (state: IStateProps, action: IAction<ResponseVM<SubscriptionVM>>): IStateProps => {

                return state;
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
