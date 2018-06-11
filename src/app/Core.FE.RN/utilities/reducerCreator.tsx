/**
 * reducerCreator.tsx
 */
import { IAction } from "../interfaces";

export const ReducerCreator = {
    create<T>(handlers: any = {}) {

        return (state: T, action: IAction<any>): T => {

            if (handlers.hasOwnProperty(action.type)) {
                console.log(action);

                return handlers[action.type](state, action);
            } else {

                return state;
            }
        };
    }
};
