/**
 * appRouter.tsx
 */
import * as React from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";

import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { theme } from "../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { AppRouterActions } from "../managers/actions";

class AppRouter extends React.Component<IStateProps & IStateActions, any> {

    constructor(props: IStateProps & IStateActions) {
        super(props);
       // this.props.loadAppStructure();
    }

    public render() {
        console.log("render", this.props);

        return this.props.loadAppStructure();
        // if (this.props.appStructure) {
        //     return (this.props.appStructure);
        // } else {
        //     return null;
        // }
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return { ...state.appRouter };
};

const mapDispatchToProps = (dispatch: any) => {
    return { ...bindActionCreators({ ...AppRouterActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(AppRouter);
