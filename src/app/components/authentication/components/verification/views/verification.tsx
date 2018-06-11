/**
 * Verification.tsx
 */
import * as React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

import * as _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Images } from "../../../../../assets/images";
import { store } from "../../../../../config/store";
import { theme } from "../../../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { VerificationActions } from "../managers/actions";
import { styles } from "../styles/styles";

class Verification extends React.Component<IStateProps & IStateActions, any> {

  constructor(props: IStateProps & IStateActions) {
    super(props);
    this.state = (store.getState() as any).verification;

    this.state.code = [];
    for (let i = 0; i < 4; i++) {
      this.state.code[i] = this.state.VerificationCode[i] || "";
    }
  }

  private validateForm(state: IStateProps) {
    const errorMsg = [];
    const verificationCode = _.values(this.state.code).join("");
    if (!verificationCode) { errorMsg.push("Missing verification code"); }

    return errorMsg.join("\n");
  }

  public render() {

    const { Email, Password } = (store.getState() as any).authentication;

    const CodeInput = _.keys(this.state.code).map((k: string) => {

      return (
        <View style={styles.codeInputContainer} key={k}>
          <TextInput style={styles.codeInput} keyboardType={"numeric"} maxLength={1}
            underlineColorAndroid="transparent"
            value={this.state.code[k]} onChangeText={(d) => {
              this.setState({
                ...this.state, code: {
                  ...this.state.code, [k]: d
                }
              });
            }} />
        </View>

      );
    });

    return (
      <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={Images.Logo} style={styles.logoImage} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.primaryText}>
              {`Enter the Code we sent to your e-mail ${Email}`}
            </Text>
            <Text style={styles.secondaryText}>
              {"To make sure it is you, please enter the 4-digits Code below"}
            </Text>

          </View>

          <View style={styles.codeContainer}>
            {CodeInput}
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
                this.props.verify(
                  {
                    Email,
                    Password,
                    VerificationCode: _.values(this.state.code).join("")
                  });
              }
            }}>
              <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>
            <Text style={styles.footerText} onPress={() => {
              this.props.signup();
            }}>
              {"Didn't receive a Code?"}
            </Text>
          </View>

      </ScrollView >

    );
  }

}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.verification };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...VerificationActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(Verification);
