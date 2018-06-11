
/**
 * iAction.tsx
 */
// tslint:disable-next-line:interface-over-type-literal
export interface IAction<T> {
    payload: T;
    type: string;
}
