/**
 * IState.tsx
 */
export interface IState {

    getItem(key: string): any;
    setItem(key: string, data: any): any;
    deleteItem(key: string): any;
    deleteAll(key: string): any;
}
