/**
 * dataService.tsx
 */
import { DataSourceCodes, ErrorCodes } from "../enums";
import { INetwork, IRouter, IStorage, IView } from "../interfaces";
import {
    BaseFEErrorResponseVM, BaseFEGetRequestVM,
    BaseFENetworkResponseVM, BaseFEPostRequestVM, BaseFERequestVM,
    BaseFEResponseVM,
    BaseFEServerResponseVM
} from "../viewModels";
import { NetworkManager } from "./networkManager";
import { StorageManager } from "./storageManager";

export class DataService {
    public NetworkManager: NetworkManager;
    public StorageManager: StorageManager;
    public View: IView;

    constructor(storageManager: StorageManager, networkManager: NetworkManager, viewHandler: IView) {
        this.NetworkManager = networkManager;
        this.StorageManager = storageManager;
        this.View = viewHandler;
    }

    public get<T>(request: BaseFEGetRequestVM, dataSource?: DataSourceCodes, businessErrors?: number[]): Promise<BaseFEResponseVM<T>> {
        switch (dataSource) {
            // dataSource is LOCAL
            case 1: {
                return this.StorageManager.getItemAsyncByRequest<T>(request).then((data) => {
                        return this.successResponseHandler<T>(request, data || new BaseFEServerResponseVM<T>(), false, businessErrors);
                });
            }

            // dataSource is REMOTE
            case 2: {
                return this.remoteRequest<T>(request, businessErrors);
            }

            // dataSource is Auto ; check in local storage . if not found get from remote
            default: {
                return this.StorageManager.getItemAsyncByRequest<T>(request).then((data) => {
                    if (data) {
                        return this.successResponseHandler<T>(request, data, false, businessErrors);
                    } else {
                        return this.remoteRequest<T>(request, businessErrors);
                    }
                });
            }
        }
    }

    public post<T>(request: BaseFEPostRequestVM, businessErrors?: number[]): Promise<BaseFEResponseVM<T>> {

        // return this.StorageManager.getItemAsyncByRequest<BaseFEResponseVM<T>>(request).then((data) => {
        //     if (data) {
        //         return data;
        //     } else {
        return this.NetworkManager.post<T>(request).then((responseJson: BaseFEServerResponseVM<T>) => {
            return this.successResponseHandler<T>(request, responseJson, false, businessErrors);
        }, (errorJson) => {
            return this.networkFailureHandler<T>(errorJson, true);
        });
        // }

        // });
    }

    private successResponseHandler<T>(request: BaseFERequestVM, responseJson: BaseFEServerResponseVM<T>, isCachable: boolean, businessErrors: number[] = []): BaseFEResponseVM<T> {
        if (responseJson.error_code === ErrorCodes.NoError) {
            if (isCachable) {
                this.StorageManager.setItemAsyncByRequest(request, responseJson);
            }
        } else if (businessErrors && businessErrors.forEach((errorCode) => {
            return responseJson.error_code === errorCode;
        })) {
            this.serverFailure<T>(responseJson, false);
        } else {
            this.serverFailure<T>(responseJson, true);
        }

        return new BaseFEResponseVM<T>(responseJson);

    }

    private networkFailureHandler<T>(errorJson: BaseFENetworkResponseVM, showAlert?: boolean): any {
        const error = new BaseFEErrorResponseVM(ErrorCodes.NetworkError, "Network Error", errorJson.message, errorJson.name);

        if (showAlert === true) {
            this.View.alert(error.errorMessage, error.errorDetails);
        }
        throw error;
    }

    private serverFailure<T>(responseJson: BaseFEServerResponseVM<T>, showAlert?: boolean): any {
        const error = new BaseFEErrorResponseVM(responseJson.error_code, "Server Error", responseJson.error_msg, responseJson.error_details);

        if (showAlert === true) {
            this.View.alert(error.errorMessage, error.errorDetails);
        }
        throw error;
    }

    // the below code is to force getting data from the server
    private remoteRequest<T>(request: BaseFEGetRequestVM, businessErrors?: number[]): Promise<BaseFEResponseVM<T>> {
        return this.NetworkManager.get<T>(request).then((responseJson: BaseFEServerResponseVM<T>) => {
            return this.successResponseHandler<T>(request, responseJson, true, businessErrors);
        }, (errorJson) => {
            return this.networkFailureHandler<T>(errorJson, true);
        });
    }

}
