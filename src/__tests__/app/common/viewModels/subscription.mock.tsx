/**
 * subscriptionVM.tsx
 */

// tslint:disable:object-literal-key-quotes

import { SubscriptionVM } from "../../../../app/common/viewModels";
import { BaseFEServerResponseVM } from "../../../../app/Core.FE.RN/Core.FE/viewModels";

export const SubscriptionMock: BaseFEServerResponseVM<SubscriptionVM> = {
    data: {
        Id: 1,
        Token: "sample string 1"
    },
    error_code: 0,
    error_details: "",
    error_msg: "",
    more_details: "",
    expiration: {
        duration: 0,
        is_allowed: false,
        is_session_expiry: true,
        method: 0,
        mode: 0,
        last_updated: new Date()
    },
    persistence: {
        scope: 0,
        is_encrypted: false
    }
};
