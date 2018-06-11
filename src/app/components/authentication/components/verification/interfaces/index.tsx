/**
 * index.tsx
 */
import { UserVerificationFormVM } from "../viewModels/userVerificationFormVM";

export interface IStateProps extends UserVerificationFormVM {}

export interface IStateActions {
    verify(userVerificationForm: UserVerificationFormVM): any;
    resendCode(userVerificationForm: UserVerificationFormVM): any;
    signup(): any;
}
