/**
 * appStartupActions.tsx
 */

import { ErrorResponseVM } from "../../../../../common/viewModels";
import { store } from "../../../../../config/store";
import { ActionCreator } from "../../../../utilities";
import { BusyIndicatorActions } from "../../../busyIndicator/managers/actions";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const AppStartupActions: IStateActions = {
    componentWillMount(entry: any, splashTimeout: number, onComponentWillMount?: () => Promise<any>) {

        store.dispatch(ActionCreator.create(Types.INIT_APP_ENTRY, "entry", "splashTimeout")(entry, splashTimeout));
        store.dispatch(ActionCreator.create(Types.INIT_WILL_MOUNT, "onWillMount")(() => {
            if (onComponentWillMount) {
                onComponentWillMount()
                    .then(() => {
                        store.dispatch(ActionCreator.create(Types.RUN_WILL_MOUNT_SUCCESS)());

                    }, (error: ErrorResponseVM) => {
                        store.dispatch(ActionCreator.create(Types.RUN_WILL_MOUNT_FAIL)());

                    });
            } else {
                store.dispatch(ActionCreator.create(Types.RUN_WILL_MOUNT_SUCCESS)());
            }
        }));

    },
    componentDidMount(onDidMountMethod: () => any) {
        store.dispatch(ActionCreator.create(Types.INIT_DID_MOUNT, "onDidMount")(() => {
            store.dispatch(ActionCreator.create(Types.UPDATE_DEVICE_READY, "deviceReady")(true));
            onDidMountMethod();
            store.dispatch(ActionCreator.create(Types.RUN_DID_MOUNT_SUCCESS)());
        }));
    }
};
