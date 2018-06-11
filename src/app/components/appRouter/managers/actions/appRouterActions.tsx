/**
 * appRouterActions.tsx
 */

import { SubscriptionVM } from "../../../../common/viewModels";
import { Locations } from "../../../../config/locations";
import { BusyIndicatorActions } from "../../../../Core.FE.RN/actions";
import { ActionConst, ActionCreator, Actions, Navigate, Router, Scene } from "../../../../Core.FE.RN/utilities";
import { IStateActions, IStateProps } from "../../interfaces";
import { RouteVM } from "../../viewModels/routeVM";
import { Types } from "./types";

import * as React from "react";
import {
    Image,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { theme } from "../../../../styles/theme";
import { styles } from "../../styles/styles";

import { store } from "../../../../config/store";
import Splash from "../../../../Core.FE.RN/components/splash/views/splash";
import Login from "../../../authentication/components/login/views/login";
import Signup from "../../../authentication/components/signup/views/signup";
import Verification from "../../../authentication/components/verification/views/verification";
import CaseBuilder from "../../../caseBuilder/views/caseBuilder";
import Home from "../../../home/views/home";
import Patient from "../../../patient/views/patient";
import TermsAndConditions from "../../../termsAndConditions/views/termsAndConditions";
import TreatmentPlan from "../../../treatmentPlan/views/treatmentPlan";

const buttonIcons = {
    // back: () => {
    //     const backIcon = require("../../../assets/images/arrow_left.png");

    //     return (
    //         <TouchableHighlight style={styles.backIconStyle} onPress={() =>
    //             Actions.pop()}>
    //             <Icon name="chevron-left" size={15} color={theme.colors.white} />
    //         </TouchableHighlight>

    //     );
    // },
    menu: () => {
        return (
            <TouchableOpacity style={styles.menuIconStyle} onPress={() => console.log("Side menu pressed")}>
                <Icon name="list" size={15} color={theme.colors.white} />
            </TouchableOpacity>

        );
    },
    tabs: (tabIconPath: string) => {
        return (
            <Image source={{ uri: tabIconPath }} style={styles.tabIconStyle} />
        );

    }
};

export const AppRouterActions: IStateActions = {

    updateRoutes(routes: RouteVM[]) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_ROUTES, "routes")(routes));
            dispatch(AppRouterActions.loadAppStructure());
        };
    },
    loadAppStructure() {

        return (dispatch: any) => {
            const { routes } = (store.getState() as any).appRouter;
            const appStructure = (
                <Router>
                    <Scene key="root"
                        headerTintColor={theme.colors.white}
                        navigationBarStyle={styles.navBarStyle}
                        titleStyle={styles.navTitleStyle}>

                        <Scene key={Locations.Splash} initial hideNavBar
                            type={ActionConst.REPLACE}
                            component={Splash} />

                        <Scene key={Locations.Home}
                            type={ActionConst.RESET}
                            renderLeftButton={buttonIcons.menu}
                            component={Home}
                            hideNavBar
                            title={"mplant"} />

                        <Scene key={Locations.Login} hideNavBar
                            type={ActionConst.REPLACE}
                            component={Login} />

                        <Scene key={Locations.Signup} hideNavBar
                            type={ActionConst.REPLACE}
                            component={Signup} />

                        <Scene key={Locations.TermsAndConditions}
                            component={TermsAndConditions}
                            title={"Terms & Conditions"} />

                        <Scene key={Locations.Verification} hideNavBar
                            component={Verification} />

                        <Scene key={Locations.Patient}
                            component={Patient}
                            title={"Build your Case"} />

                        <Scene key={Locations.TreatmentPlan}
                            component={TreatmentPlan}
                            title={"Treatment Plan"}
                            navBarButtonColor={theme.colors.white} />

                        {
                            (routes && routes.length > 0) ?
                                (<Scene key={Locations.CaseTabs} showIcon hideNavBar tabs
                                    indicatorStyle={styles.indicatorStyle}
                                    labelStyle={styles.labelStyle}
                                    tabBarStyle={styles.tabBarStyle}>
                                    {
                                        routes.map((route: RouteVM, index: number) => {
                                            {/* console.log(route);
                                            debugger; */}

                                            return (
                                                <Scene key={route.key} component={CaseBuilder}
                                                    index={index}
                                                    hideNavBar
                                                    tabBarIcon={() => {
                                                        return buttonIcons.tabs(route.icon);
                                                    }} />
                                            );
                                        })
                                    }

                                </Scene>) : <Scene key={Locations.Splash} component={Splash} />
                        }

                    </Scene>

                </Router>
            );

            dispatch(ActionCreator.create(Types.RELOAD_APP_STRUCTURE, "appStructure")(appStructure));

            return appStructure;
        };
    }
};
