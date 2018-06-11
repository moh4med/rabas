/**
 * iNetwork.tsx
 */
import { BaseFEGetRequestVM, BaseFEPostRequestVM, BaseFEServerResponseVM, HttpRequest } from "../viewModels";

export interface INetwork {

    get<T>(request: HttpRequest): Promise<BaseFEServerResponseVM<T>>;
    post<T>(request: HttpRequest): Promise<BaseFEServerResponseVM<T>>;

}
