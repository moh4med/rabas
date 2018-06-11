/**
 * verification.test.tsx
 */
// tslint:disable:no-import-side-effect

import * as React from "react";
import "react-native";

import { Provider } from "react-redux";
import { GetRequestVM } from "../../../../app/common/viewModels";
import { VerificationActions } from "../../../../app/components/authentication/components/verification/managers/actions";
import Verification from "../../../../app/components/authentication/components/verification/views/verification";
import { store } from "../../../../app/config/store";
import { StoreMock } from "../../common/utilities/store.mock";
import { SubscriptionMock } from "../../common/viewModels/subscription.mock";
import { UserVerificationFormMock } from "../verification/viewModels/userVerificationForm.mock";

import * as LoginActionCreators from "../../../../app/components/authentication/components/login/managers/actions";

// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";
import {
    APP_NAME, BASE_API_URL,
    BASE_SERVER_PORT,
    BASE_SERVER_URL,
    DEFAULT_LANGUAGE,
    IS_SECURE,
    SERVICE_ID,
    TER,
    VERSION
} from "../../../../app/config/server";
import { ApplicationManager, SessionManager } from "../../../../app/Core.FE.RN/Core.FE/managers";
import { ApplicationVM, ServerVM, TerminalVM, UserSessionVM } from "../../../../app/Core.FE.RN/Core.FE/viewModels";

describe("verification.tsx:", () => {
    it("Renders Verification Component Correctly", () => {

        ApplicationManager.Instance.init(
            new ApplicationVM(APP_NAME, SERVICE_ID, DEFAULT_LANGUAGE, VERSION),
            new TerminalVM(TER),
            new ServerVM(BASE_SERVER_URL, BASE_SERVER_PORT, IS_SECURE, BASE_API_URL));

        SessionManager.Instance.startSession(new UserSessionVM("mockUser", "123"));

        const tree = renderer.create(
            <Provider store={store}>
                <Verification />
            </Provider>
        );
    });

    it("Runs Verification Dispatcher Correctly", async () => {
        try {
            await StoreMock.dispatchAsyncGet(VerificationActions.verify, new GetRequestVM("Authentication", "VerifyAccount", UserVerificationFormMock), SubscriptionMock);
        } catch (e) {
            // console.log(e);
        } finally {

            expect(StoreMock.getState().verification).toMatchObject(UserVerificationFormMock);
        }
    });
});
