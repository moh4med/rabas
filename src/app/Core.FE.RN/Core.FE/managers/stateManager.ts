/**
 * stateManager.tsx
 */

import { IState } from "../interfaces";

export class StateManager {

    private StateProvider: IState;

    constructor() {
    }

    public getItem(key: string) {
        return this.StateProvider.getItem(key);
    }
    public setItem(key: string, data: any) {
        return this.StateProvider.setItem(key, data);
    }
    public deleteItem(key: string) {
        return this.StateProvider.deleteItem(key);
    }
    public deleteAll(key: string) {
        return this.StateProvider.deleteAll(key);
    }

}
