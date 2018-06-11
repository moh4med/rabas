/**
 * login.tsx
 */
import * as React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Images } from "../../../../../assets/images";
import { store } from "../../../../../config/store";
import { UserInput } from "../../../../../Core.FE.RN/components";
import { theme } from "../../../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { LoginActions } from "../managers/actions";
import { styles } from "../styles/styles";

class Login extends React.Component<IStateActions & IStateProps, any> {

  constructor(props: IStateActions & IStateProps) {
    super(props);
    this.state = (store.getState() as any).login;
  }

  private validateForm(state: IStateProps) {
    const errorMsg = [];

    if (!state.Email) { errorMsg.push("Missing email"); }
    if (!state.Password) { errorMsg.push("Missing password"); }

    return errorMsg.join("\n");
  }

  public render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.Logo} style={styles.logoImage} />
        </View>

        <View style={styles.inputContainer}>
          <UserInput iconType={"fa-icon"}
            inputType={"iconText"}
            source={"envelope"}
            iconSize={12}
            iconColor={theme.colors.lightblue}
            placeholder="Email"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Email} onChange={(Email) => {
              this.setState({ ...this.state, Email });
            }}
          />

          <UserInput iconType={"fa-icon"}
            inputType={"iconText"}
            source={"lock"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType={"go"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Password} onChange={(Password) => {
              this.setState({ ...this.state, Password });
            }} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
            const errorMsg: string = this.validateForm(this.state);
            if (errorMsg) {
              Alert.alert(
                "Invalid input",
                errorMsg,
                [
                  { text: "OK", onPress: () => { } },
                ],
                { cancelable: true }
              );
            } else {
              this.props.login(this.state);
            }
          }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.footerText} onPress={() => {
            this.props.signup();
          }}>
            {"Don't have an account? Sign Up"}
          </Text>
        </View>

      </ScrollView >

    );
  }

}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.login };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ...bindActionCreators({ ...LoginActions }, dispatch)
  };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(Login);
