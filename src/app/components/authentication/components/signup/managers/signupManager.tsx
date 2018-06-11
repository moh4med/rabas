
/**
 * signupManager.tsx
 */

import { ErrorResponseVM, PostRequestVM, SubscriptionVM } from "../../../../../common/viewModels";
import { ErrorCodes } from "../../../../../Core.FE.RN/Core.FE/enums";
import { Singleton } from "../../../../../Core.FE.RN/utilities/singleton";
import { AuthenticationManager } from "../../../managers/authenticationManager";
import { UserSignupFormVM } from "../viewModels/userSignupFormVM";

export class SignupManager extends AuthenticationManager {

    public static Instance = Singleton<SignupManager>(SignupManager);

    public createAccount(userSignupForm: UserSignupFormVM) {
        return this.DataService.post<SubscriptionVM>(new PostRequestVM(this.apiName, "Signup", userSignupForm));
    }
}
