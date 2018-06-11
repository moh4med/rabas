/**
 * appStartupReducer.tsx
 */

import { CaseBuilderVM } from "../../../../../components/caseBuilder/viewModels/caseBuilderVM";
import { IAction, IReducer } from "../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const AppStartupReducer: IReducer<IStateProps> = {

    initialState: {
        portalSettings: null,
        lastUpdated: new Date(),
        deviceReady: false,
        splashTimeout: 100,
        entry: null,
        onDidMount: () => { },
        onWillMount: () => { }
    },

    reducer(state: IStateProps = AppStartupReducer.initialState, action: IAction<any>): IStateProps {
        const handlers: any = {
            [Types.INIT_APP_ENTRY]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return {
                    ...state,
                    entry: action.payload.entry,
                    splashTimeout: action.payload.splashTimeout,
                    lastUpdated: new Date()
                };
            },
            [Types.UPDATE_DEVICE_READY]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return {
                    ...state,
                    deviceReady: action.payload.deviceReady,
                    lastUpdated: new Date()
                };
            },
            [Types.INIT_DID_MOUNT]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return {
                    ...state,
                    onDidMount: action.payload.onDidMount,
                    lastUpdated: new Date()
                };
            },
            [Types.INIT_WILL_MOUNT]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                return {
                    ...state,
                    onWillMount: action.payload.onWillMount,
                    lastUpdated: new Date()
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
