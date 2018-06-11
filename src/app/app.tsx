/**
 * app.tsx
 */
import {
    APP_NAME, BASE_API_URL,
    BASE_SERVER_PORT,
    BASE_SERVER_URL,
    DEFAULT_LANGUAGE,
    IS_SECURE,
    SERVICE_ID,
    TER,
    VERSION
} from "./config/server";

import * as React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import AppRouter from "./components/appRouter/views/appRouter";
import { CaseBuilderActions } from "./components/caseBuilder/managers/actions";
import { Locations } from "./config/locations";

import { store } from "./config/store";
import { AppStartupActions, BusyIndicatorActions } from "./Core.FE.RN/actions";
import { AppStartup, BusyIndicator } from "./Core.FE.RN/components";
import { TerminalCodes } from "./Core.FE.RN/Core.FE/enums";
import { ApplicationManager } from "./Core.FE.RN/Core.FE/managers";
import { ApplicationVM, ServerVM, TerminalVM } from "./Core.FE.RN/Core.FE/viewModels";
import { Navigate } from "./Core.FE.RN/utilities";
import { theme } from "./styles/theme";

export class App extends React.Component<any, any> {
    public render() {

        ApplicationManager.Instance.init(
            new ApplicationVM(APP_NAME, SERVICE_ID, DEFAULT_LANGUAGE, VERSION),
            new TerminalVM(TER),
            new ServerVM(BASE_SERVER_URL, BASE_SERVER_PORT, IS_SECURE, BASE_API_URL));

        BusyIndicatorActions.initLoading(theme.colors.lightblue, "small", false);

        AppStartupActions.componentDidMount(() => {

            if ((store.getState() as any).authentication.Token) {
                // initialize session here in case of silent login
                Navigate(Locations.Home);

            } else {
                Navigate(Locations.Login);
            }
            BusyIndicatorActions.hideLoading();
        });

        AppStartupActions.componentWillMount(AppRouter, 1000);

        return (
            <Provider store={store}>
                <AppStartup />
            </Provider >

        );
    }
}
