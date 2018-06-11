/**
 * storageManager.tsx
 */
import { ApplicationManager, SessionManager } from "../../Core.FE/managers";
import { PersistenceCodes } from "../enums/persistenceCodes";
import { IStorage } from "../interfaces";
import { BaseFERequestVM, BaseFEServerResponseVM } from "../viewModels";

export class StorageManager implements IStorage {

    private StorageProvider: IStorage;
    private userFolder: string = "user";
    private appFolder: string = "app";
    private apiFolder: string = "api";
    private customFolder: string = "custom";

    constructor(storageProvider: IStorage) {
        this.StorageProvider = storageProvider;
    }

    public getItem<T>(key: string) {
        return this.StorageProvider.getItem<T>(this.generateCustomStorageKey(key));
    }

    public getItemAsync<T>(key: string): Promise<T> {
        return this.StorageProvider.getItemAsync<T>(this.generateCustomStorageKey(key));
    }

    public setItem(key: string, data: object) {
        return this.StorageProvider.setItem(this.generateCustomStorageKey(key), data);
    }

    public setItemAsync(key: string, data: any): Promise<void> {
        return this.StorageProvider.setItemAsync(this.generateCustomStorageKey(key), data);
    }

    public deleteItem(key: string) {
        return this.StorageProvider.deleteItem(this.generateCustomStorageKey(key));
    }

    public deleteAll(key: string) {
        return this.StorageProvider.deleteAll(this.generateCustomStorageKey(key));
    }

    public getItemAsyncByRequest<T>(request: BaseFERequestVM): Promise<BaseFEServerResponseVM<T>> {

        return this.StorageProvider.getItemAsync<T>(this.generateStorageKeyByRequest(request)).then((data: T) => {
            // check In Storage if data exists
            if (data) {
                // tslint:disable-next-line:prefer-type-cast
                const response = data as any;
                // tslint:disable-next-line:prefer-type-cast
                // If found
                // check expiry
                if (!response.expiration.last_updated) {
                    return null;
                }
                const lastTime = new Date(response.expiration.last_updated).getTime();
                const currentTime = new Date().getTime();
                // duration difference needs to be recalculated
                if (currentTime - lastTime > (response.expiration.duration * 60)) {
                    // if expired
                    // return null and make request from server
                    return null;
                } else {
                    // if not expired
                    // return data
                    return response;

                }
            } else {
                // If not found
                // return null and request from server
                return null;
            }

        }, (error) => {
            return error;

        });
    }

    public setItemAsyncByRequest(request: BaseFERequestVM, data: BaseFEServerResponseVM<any>): Promise<void> {
        data.expiration.last_updated = new Date();

        return this.StorageProvider.setItemAsync(this.generateStorageKeyByRequest(request), data);
    }

    private generateStorageKeyByRequest(request: BaseFERequestVM) {

        const key = [ApplicationManager.Instance.getServerInfo().baseApiUrl,
        request.apiController, request.actionMethod].join("/");

        return this.generateStorageKey(this.apiFolder, key);
    }

    private generateCustomStorageKey(key: string) {
        return this.generateStorageKey(this.customFolder, key);
    }

    private generateStorageKey(folder: string, key: string) {
        let path: string;
        const currentServiceId = ApplicationManager.Instance.getApplicationInfo().defaultServiceId;

        if (SessionManager.Instance.isAnonymousSession()) {// || persistenceScope === PersistenceCodes.APP) {
            // app Level = 0
            path = [currentServiceId, this.appFolder, folder].join("/");

        } else {
            // user Level = 1
            path = [currentServiceId, this.userFolder,
                SessionManager.Instance.getCurrentSession().uid, folder].join("/");
        }

        return [path, key].join("/");

    }

}
