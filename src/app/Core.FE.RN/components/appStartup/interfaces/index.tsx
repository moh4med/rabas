/**
 * index.tsx
 */

export interface IStateProps {
    portalSettings: any;
    lastUpdated: Date;
    deviceReady: boolean;
    splashTimeout: number;
    entry: any;
    onDidMount(): any;
    onWillMount(): any;
}

export interface IStateActions {
    componentWillMount(entry: any, splashTimeout: number, onWillMountMethod?: () => Promise<any>): any;
    componentDidMount(onDidMountMethod?: () => any): any;
}
