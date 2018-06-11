/**
 * index.tsx
 */

import { UserPatientFormVM } from "../viewModels/userPatientFormVM";

export interface IStateProps extends UserPatientFormVM {
    DobLabel?: string;
}

export interface IStateActions {
    addPatient(userPatientForm: UserPatientFormVM): any;
}
