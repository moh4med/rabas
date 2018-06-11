/**
 * index.tsx
 */

import { RouteVM } from "../viewModels/routeVM";

export interface IStateProps {
    appStructure: any;
    routes: RouteVM[];
}

export interface IStateActions {
    loadAppStructure(): any;
    updateRoutes(routes: RouteVM[]): any;
}
