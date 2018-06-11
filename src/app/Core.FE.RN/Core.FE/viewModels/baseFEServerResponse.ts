/**
 * baseFEServerResponseVM.tsx
 */
// tslint:disable:max-classes-per-file
// tslint:disable:variable-name

export class BaseFEServerResponseVM<T> {
    public error_code: number;
    public error_details: string;
    public error_msg: string;
    public more_details: string;
    public data: T;
    public expiration: BaseFEServerExpirationVM;
    public persistence: BaseFEServerPersistenceVM;
}

export class BaseFEServerExpirationVM {

    public is_allowed: boolean;
    public duration: number;
    public method: number;
    public mode: number;
    public is_session_expiry: true;
    public last_updated: Date;
}

export class BaseFEServerPersistenceVM {
    public scope: number;
    public is_encrypted: boolean;
}
