/**
 * authenticationManager.tsx
 */

import { BaseMplantManager } from "../../../common/managers";
import { Singleton } from "../../../Core.FE.RN/utilities/singleton";

export class AuthenticationManager extends BaseMplantManager {
    constructor() {
        super();
        this.apiName = "Authentication";
    }
    public static Instance = Singleton<AuthenticationManager>(AuthenticationManager);

}
