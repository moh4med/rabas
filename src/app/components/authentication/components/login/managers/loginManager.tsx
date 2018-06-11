
/**
 * loginManager.tsx
 */

import { ErrorResponseVM, PostRequestVM, SubscriptionVM } from "../../../../../common/viewModels";
import { ErrorCodes } from "../../../../../Core.FE.RN/Core.FE/enums";
import { SessionManager } from "../../../../../Core.FE.RN/Core.FE/managers";
import { Singleton } from "../../../../../Core.FE.RN/utilities/singleton";
import { AuthenticationManager } from "../../../managers/authenticationManager";
import { UserLoginFormVM } from "../viewModels/userLoginFormVM";

export class LoginManager extends AuthenticationManager {

    public static Instance = Singleton<LoginManager>(LoginManager);

    public login(userLoginForm: UserLoginFormVM) {

        return this.DataService.post<SubscriptionVM>(
            new PostRequestVM(this.apiName, "Login", userLoginForm),
            [ErrorCodes.DeactivatedSubscriber]);
    }
}
