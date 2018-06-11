/**
 * iReducer.tsx
 */

import { IAction } from "./iAction";

export interface IReducer<T> {
    initialState: T;
    reducer(state: T | undefined, action: IAction<any>): T;
}
