/**
 * verificationManager.tsx
 */

import { PostRequestVM } from "../../../../../common/viewModels";
import { Singleton } from "../../../../../Core.FE.RN/utilities/singleton";
import { AuthenticationManager } from "../../../managers/authenticationManager";
import { UserVerificationFormVM } from "../viewModels/userVerificationFormVM";

export class VerificationManager extends AuthenticationManager {

    public static Instance = Singleton<VerificationManager>(VerificationManager);

    public Verify(userVerificationForm: UserVerificationFormVM) {
        return this.DataService.post<boolean>(new PostRequestVM(this.apiName, "VerifyAccount", userVerificationForm));
    }

    public ResendCode(userVerificationForm: UserVerificationFormVM) {
        return this.DataService.post<boolean>(new PostRequestVM(this.apiName, "ResendVerificationCode", { Email: userVerificationForm.Email }));

    }
}
