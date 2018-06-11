/**
 * busyIndicator.tsx
 */

import * as React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View
} from "react-native";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";
import { store } from "../../../../config/store";
import { theme } from "../../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { BusyIndicatorActions } from "../managers/actions";
import { styles } from "../styles/styles";

class BusyIndicator extends React.Component<IStateProps & IStateActions, any> {
  constructor(props: IStateProps & IStateActions) {
    super(props);
  }

  public render() {
    const { isVisible, color, size, text } = this.props;

    return (

      <View style={styles.absoluteContainer}>
        {
          isVisible ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator
                animating={isVisible}
                color={color}
                size={size}
                style={styles.activityIndicator} />
              <Text style={styles.text}>{this.props.text}</Text>
            </View >
          ) : null
        }

      </View >
    );
  }
}

const mapStateToProps = (state: any): IStateProps => {

  return { ...state.busyIndicator };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...BusyIndicatorActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(BusyIndicator);
