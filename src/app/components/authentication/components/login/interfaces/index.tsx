/**
 * index.tsx
 */

import { UserLoginFormVM } from "../viewModels/userLoginFormVM";

export interface IStateProps extends UserLoginFormVM { }

export interface IStateActions {
    login(userLoginForm: UserLoginFormVM): any;
    signup(): any;
    home(): any;
    verification(): any;
}
