/**
 * busyIndicatorActions.tsx
 */
import { store } from "../../../../../config/store";
import { ActionCreator } from "../../../../utilities/actionCreator";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const BusyIndicatorActions: IStateActions = {

    initLoading(color: string, size?: number | "small" | "large", isVisible?: boolean, text?: string) {

        store.dispatch(ActionCreator.create(Types.INIT_LOADING, "color", "size", "isVisible", "text")
            (color, size || "small", isVisible || false, text));
    },

    showLoading(text?: string) {
        store.dispatch(ActionCreator.create(Types.SHOW_LOADING, "isVisible", "text")(true, text));
    },

    hideLoading() {
        store.dispatch(ActionCreator.create(Types.HIDE_LOADING, "isVisible")(false));
    }
};
