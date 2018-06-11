/**
 * appRouterReducer.tsx
 */

import { IAction, IReducer } from "../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../Core.FE.RN/utilities";
import { IStateActions, IStateProps } from "../../interfaces";
import { RouteVM } from "../../viewModels/routeVM";
import { Types } from "../actions/types";

export const AppRouterReducer: IReducer<IStateProps> = {

    initialState: {
        routes: [],
        appStructure: null
    },

    reducer(state: IStateProps = AppRouterReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.UPDATE_ROUTES]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

                return {
                    ...state,
                    routes: action.payload.routes
                };
            }
            // [Types.RELOAD_APP_STRUCTURE]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

            //     console.log(action.payload);

            //     return {
            //         ...state,
            //         appStructure: action.payload.appStructure
            //     };
            // }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
