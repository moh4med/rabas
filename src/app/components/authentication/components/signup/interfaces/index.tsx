/**
 * index.tsx
 */

import { UserSignupFormVM } from "../viewModels/userSignupFormVM";

export interface IStateProps extends UserSignupFormVM {}

export interface IStateActions {
    createAccount(userSignupForm: UserSignupFormVM): any;
    login(): any;
    verification(): any;
    termsAndConditions(): any;
}
