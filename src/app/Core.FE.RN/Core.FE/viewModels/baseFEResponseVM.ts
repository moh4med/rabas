/**
 * baseFEResponseVM.tsx
 */
// tslint:disable:max-classes-per-file
// tslint:disable:variable-name

import { BaseFERequestVM } from "../viewModels/baseFERequestVM";
import { BaseFEServerExpirationVM, BaseFEServerPersistenceVM, BaseFEServerResponseVM } from "../viewModels/baseFEServerResponse";

export class BaseFEErrorResponseVM {
    constructor(errorCode: number, errorMessage: string, errorDetails: string, moreDetails?: string) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.errorDetails = errorDetails;
        this.moreDetails = moreDetails;
    }
    public errorCode: number;
    public errorDetails: string;
    public errorMessage: string;
    public moreDetails?: string;

}

export class BaseFEResponseVM<T>{

    public data: T;
    public expiration: BaseFEExpirationVM;
    public persistence: BaseFEPersistenceVM;
    // public request: BaseFERequestVM;

    constructor(response: BaseFEServerResponseVM<T>) {
        this.data = response.data;
        this.persistence = new BaseFEPersistenceVM(response.persistence);
        this.expiration = new BaseFEExpirationVM(response.expiration);
    }
}

export class BaseFEExpirationVM {

    constructor(expiration: BaseFEServerExpirationVM) {
        this.duration = expiration.duration;
        this.isAllowed = expiration.is_allowed;
        this.isSessionExpiry = expiration.is_session_expiry;
        this.method = expiration.method;
        this.mode = expiration.mode;
        this.lastUpdated = new Date();
    }
    public isAllowed: boolean;
    public duration: number;
    public method: number;
    public mode: number;
    public isSessionExpiry: true;
    public lastUpdated: Date;
}

export class BaseFEPersistenceVM {
    constructor(persistence: BaseFEServerPersistenceVM) {
        this.scope = persistence.scope;
        this.isEncrypted = persistence.is_encrypted;
    }

    public scope: number;
    public isEncrypted: boolean;
}
