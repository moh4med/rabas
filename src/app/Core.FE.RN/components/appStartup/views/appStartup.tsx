/**
 * appStartup.tsx
 */
import * as React from "react";
import {
    Alert,
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Locations } from "../../../../config/locations";
import { store } from "../../../../config/store";
import { theme } from "../../../../styles/theme";
import { AppStartupActions, BusyIndicatorActions } from "../../../actions";
import { BusyIndicator, Splash } from "../../../components";
import { Navigate } from "../../../utilities";
import { IStateActions, IStateProps } from "../interfaces";

class AppStartup extends React.Component<IStateActions & IStateProps, any> {

    constructor(props: IStateActions & IStateProps) {
        super(props);
    }

    public componentWillMount() {
        Navigate(Locations.Splash);
        this.props.onWillMount();
    }

    public componentDidMount() {
        setTimeout(() => {
            this.props.onDidMount();
        }, this.props.splashTimeout);
    }

    public componentDidUpdate() {

    }

    public render() {
        const { deviceReady } = this.props;
        const Entry = this.props.entry;

        return (
            <View style={{ flex: 1 }}>
                <Entry />
                <BusyIndicator />
            </View>

        );
    }

}

const mapStateToProps = (state: any): IStateProps => {
    return { ...state.appStartup };
};

const mapDispatchToProps = (dispatch: any) => {
    return { ...bindActionCreators({ ...AppStartupActions }, dispatch) };
};

export default connect<any, IStateProps & IStateActions, any>(mapStateToProps, mapDispatchToProps)(AppStartup);
