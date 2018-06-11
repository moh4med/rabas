/**
 * storageProvider.tsx
 */
import { AsyncStorage } from "react-native";
import { IStorage } from "../Core.FE/interfaces";

export class StorageProvider implements IStorage {

    public getItem<T>(key: string): T {
        throw new Error("Method not implemented.");
    }

    public getItemAsync<T>(key: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            AsyncStorage.getItem(key).then((data: string) => {
                resolve(JSON.parse(data));
            },
                (error) => {
                    reject(null);

                });
        });
    }

    public setItemAsync(key: string, data: object): Promise<void> {
        return AsyncStorage.setItem(key, JSON.stringify(data));
    }

    public setItem(key: string, data: object) {
        throw new Error("Method not implemented.");
    }
    public deleteItem(key: string) {
        throw new Error("Method not implemented.");
    }
    public deleteAll(key: string) {
        throw new Error("Method not implemented.");
    }

}
