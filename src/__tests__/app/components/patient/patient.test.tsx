/**
 * patient.test.tsx
 */
// tslint:disable:no-import-side-effect

import * as React from "react";
import "react-native";

import { Provider } from "react-redux";
import { PostRequestVM } from "../../../../app/common/viewModels";
import { PatientActions } from "../../../../app/components/patient/managers/actions";
import Patient from "../../../../app/components/patient/views/patient";
import { store } from "../../../../app/config/store";
import { StoreMock } from "../../common/utilities/store.mock";
import { UserPatientFormMock } from "../patient/viewModels/userPatientForm.mock";
import { PatientMock } from "./viewModels/patient.mock";

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

describe("patient.tsx:", () => {
    it("Renders Patient Component Correctly", () => {

        ApplicationManager.Instance.init(
            new ApplicationVM(APP_NAME, SERVICE_ID, DEFAULT_LANGUAGE, VERSION),
            new TerminalVM(TER),
            new ServerVM(BASE_SERVER_URL, BASE_SERVER_PORT, IS_SECURE, BASE_API_URL));

        SessionManager.Instance.startSession(new UserSessionVM("mockUser", "123"));

        const tree = renderer.create(
            <Provider store={store}>
                <Patient />
            </Provider>
        );
    });

    it("Runs Patient Dispatcher Correctly", async () => {

        try {
            await StoreMock.dispatchAsyncPost(PatientActions.addPatient,
                new PostRequestVM("Cases", "AddPatient", UserPatientFormMock), PatientMock);

        } catch (e) {
            // console.log(e);
        } finally {

            expect(StoreMock.getState().patient).toMatchObject(UserPatientFormMock);
        }

    });
});
