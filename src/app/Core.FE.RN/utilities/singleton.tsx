/**
 * singlton.tsx
 */
import { IStringTMap } from "../interfaces";
// tslint:disable-next-line:no-stateless-class
const instance: IStringTMap<any> = {};

// tslint:disable-next-line:function-name
export function Singleton<T>(c: { new(): T; }): T {
    if (!instance[c.name]) {
        instance[c.name] = new c();
        // console.log("singleton created: ", c.name);

    }

    return instance[c.name];
}
