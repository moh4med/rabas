/**
 * stateProvider.tsx
 */

import { IState } from "../Core.FE/interfaces";

export class StateProvider implements IState {
    public getItem(key: string) {
        throw new Error("Method not implemented.");
    }
    public setItem(key: string, data: any) {
        throw new Error("Method not implemented.");
    }
    public deleteItem(key: string) {
        throw new Error("Method not implemented.");
    }
    public deleteAll(key: string) {
        throw new Error("Method not implemented.");
    }

}
