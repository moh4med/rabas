/**
 * busyIndicatorReducer.tsx
 */

import { IAction, IReducer } from "../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../Core.FE.RN/utilities";
import { IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const BusyIndicatorReducer: IReducer<IStateProps> = {

    initialState: {
        color: "",
        isVisible: false,
        size: "small",
        text: ""
    },

    reducer(state: IStateProps = BusyIndicatorReducer.initialState, action: IAction<IStateProps>) {
        const handlers: any = {
            [Types.INIT_LOADING]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

                return {
                    ...state,
                    text: action.payload.text,
                    color: action.payload.color,
                    size: action.payload.size,
                    isVisible: action.payload.isVisible
                };
            },

            [Types.SHOW_LOADING]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

                return {
                    ...state,
                    isVisible: action.payload.isVisible,
                    text: action.payload.text ? action.payload.text : state.text

                };
            },
            [Types.HIDE_LOADING]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

                return {
                    ...state,
                    isVisible: action.payload.isVisible,
                    text: ""
                };
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
