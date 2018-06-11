/**
 * index.tsx
 */

// import { UserLoginFormVM } from "../viewModels/userLoginFormVM";

export interface IStateProps {
    isShowCasesHistory: boolean;
}

export interface IStateActions {
    casesHistory(): any;
    buildCase(): any;
    addPatient(): any;
}
