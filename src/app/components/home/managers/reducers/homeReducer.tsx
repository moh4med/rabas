/**
 * homeReducer.tsx
 */
import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const HomeReducer: IReducer<IStateProps> = {

    initialState: {
        isShowCasesHistory: false
    },
    reducer(state: any = HomeReducer.initialState, action: IAction<any>) {

        const handlers: any = {
            [Types.GOTO_CASES_HISTORY]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return state;
            },

            [Types.GOTO_ADD_PATIENT]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return state;
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
