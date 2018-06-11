/**
 * actionCreator.tsx
 */
import { IAction } from "../interfaces";

export const ActionCreator = {
    create: (type: string, ...argNames: any[]) => {
        return (...argValues: any[]) => {
            const action: IAction<any> = { type, payload: {} };
            argNames.forEach((arg, index) => {
                action.payload[argNames[index]] = argValues[index];
            });

            return action;
        };
    }
};
