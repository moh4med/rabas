
/**
 * store.mock.tsx
 */
import { GetRequestVM, PostRequestVM } from "../../../../app/common/viewModels";
import { store } from "../../../../app/config/store";
import { RequestMock } from "./request.mock";

export const StoreMock = {
    dispatch(callback: (...args: any[]) => any, ...args: any[]) {

        return store.dispatch(callback(...args));
    },
    dispatchAsyncGet(callback: (param: any) => any, request: GetRequestVM, expectedData: any) {

        if (callback) {
            RequestMock.init("GET", request, expectedData);

            return store.dispatch(callback(request.params));

        }
    },
    dispatchAsyncPost(callback: (body: any) => any, request: PostRequestVM, expectedData: any) {

        if (callback) {
            RequestMock.init("POST", request, expectedData);

            return store.dispatch(callback(request.body));
        }
    },
    getState(): any { return store.getState(); },

};
