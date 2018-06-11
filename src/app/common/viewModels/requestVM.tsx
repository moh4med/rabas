/**
 * requestVM.tsx
 */

// tslint:disable:max-classes-per-file

import { BASE_API_URL, BASE_SERVER_URL, SERVICE_ID, TER, VERSION } from "../../config/server";
import { store } from "../../config/store";

import { BaseFEGetRequestVM, BaseFEPostRequestVM} from "../../Core.FE.RN/Core.FE/viewModels";

export class GetRequestVM extends BaseFEGetRequestVM {
    constructor(apiController: string, actionMethod: string, params?: any) {
        super(apiController, actionMethod, params);
    }
}

export class PostRequestVM extends BaseFEPostRequestVM {
    constructor(apiController: string, actionMethod: string, body: any) {
        super(apiController, actionMethod, body);
    }
}
