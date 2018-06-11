/**
 * signup.test.tsx
 */
// tslint:disable:no-import-side-effect

import * as React from "react";
import "react-native";

import { Provider } from "react-redux";
import { PostRequestVM } from "../../../../app/common/viewModels";
import { SignupActions } from "../../../../app/components/authentication/components/signup/managers/actions";
import Signup from "../../../../app/components/authentication/components/signup/views/signup";
import { store } from "../../../../app/config/store";
import { StoreMock } from "../../common/utilities/store.mock";
import { SubscriptionMock } from "../../common/viewModels/subscription.mock";
import { UserSignupFormMock } from "../signup/viewModels/userSignupForm.mock";

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

describe("signup.tsx:", () => {
    it("Renders Signup Component Correctly", () => {

        ApplicationManager.Instance.init(
            new ApplicationVM(APP_NAME, SERVICE_ID, DEFAULT_LANGUAGE, VERSION),
            new TerminalVM(TER),
            new ServerVM(BASE_SERVER_URL, BASE_SERVER_PORT, IS_SECURE, BASE_API_URL));

        SessionManager.Instance.startSession(new UserSessionVM("mockUser", "123"));

        const tree = renderer.create(
            <Provider store={store}>
                <Signup />
            </Provider>
        );
    });

    it("Runs Signup Dispatcher Correctly", async () => {

        await StoreMock.dispatchAsyncPost(SignupActions.createAccount, new PostRequestVM("Authentication", "Signup", UserSignupFormMock), SubscriptionMock);

        expect(StoreMock.getState().signup).toMatchObject(UserSignupFormMock);

        expect(StoreMock.getState().authentication.Email).toBe(UserSignupFormMock.Email);
        expect(StoreMock.getState().authentication.Password).toBe(UserSignupFormMock.Password);
        expect(StoreMock.getState().authentication.Token).toBeFalsy();
    });
});
