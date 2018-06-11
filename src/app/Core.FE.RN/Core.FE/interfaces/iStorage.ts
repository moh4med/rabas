/**
 * iStorage.tsx
 */
export interface IStorage {

    getItem<T>(key: string): T;
    getItemAsync<T>(key: string): Promise<T>;
    setItem(key: string, data: object): void;
    setItemAsync(key: string, data: object): Promise<void>;
    deleteItem(key: string): any;
    deleteAll(key: string): any;
}
