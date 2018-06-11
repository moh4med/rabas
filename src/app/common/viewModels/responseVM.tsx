/**
 * requestVM.tsx
 */

// tslint:disable:max-classes-per-file

import { BaseFEErrorResponseVM, BaseFENetworkResponseVM, BaseFEResponseVM, BaseFEServerResponseVM } from "../../Core.FE.RN/Core.FE/viewModels";

export class ErrorResponseVM extends BaseFEErrorResponseVM {
    constructor(errorCode: number, errorMessage: string, errorDetails: string, moreDetails?: string) {
        super(errorCode, errorMessage, errorDetails, moreDetails);
    }
}

export class ResponseVM<T> extends BaseFEResponseVM<T> {

    constructor(response: ServerResponseVM<T>) {
        super(response);
    }
}

export class ServerResponseVM<T> extends BaseFEServerResponseVM<T> {
}

export class NetworkResponseVM extends BaseFENetworkResponseVM {
}
