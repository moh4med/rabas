/**
 * signup.tsx
 */
import * as React from "react";
import {
  Alert,
  Image,
  Picker,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import * as moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Images } from "../../../../../assets/images";
import { store } from "../../../../../config/store";
import { UserInput } from "../../../../../Core.FE.RN/components";
import { theme } from "../../../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { ProfessionsList, ProfessionsLookup } from "../lookups/professionsLookup";
import { SignupActions } from "../managers/actions";
import { styles } from "../styles/styles";

class Signup extends React.Component<IStateActions & IStateProps, any> {

  constructor(props: IStateActions & IStateProps) {
    super(props);
    this.state = (store.getState() as any).signup;
  }

  private serverDatetime(datetime: string) {
    return (moment as any).default(datetime, "YYYY-MM-DD").format("DDMMYYYY");
  }

  private validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  private validateForm(state: IStateProps) {
    const errorMsg = [];

    if (!state.Name) { errorMsg.push("Missing name"); }
    if (!state.Dob) { errorMsg.push("Missing date of birth"); }
    if (!state.Location) { errorMsg.push("Missing location address"); }
    if (!state.Profession) { errorMsg.push("Missing profession"); }
    if (!state.Email) { errorMsg.push("Missing email"); }
    if (this.validateEmail(state.Email)) { errorMsg.push("Invalid email format"); }
    if (!state.Password) { errorMsg.push("Missing password"); }
    if (!state.RepeatPassword) { errorMsg.push("Missing repeat password"); }
    if (state.Password && state.RepeatPassword && state.Password !== state.RepeatPassword) { errorMsg.push("Passwords mismatch"); }

    if (!state.AgreeOnTermsAndConditions) { errorMsg.push("Missing agreement on terms and conditions"); }

    // missing checks on formats AND ranges

    return errorMsg.join("\n");
  }

  // tslint:disable-next-line:max-func-body-length
  public render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Images.Logo} style={styles.logoImage} />
        </View>
        <View style={styles.inputContainer}>
          <UserInput inputType={"iconText"}
            iconType={"fa-icon"}
            source={"user"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            placeholder="Name"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Name}
            onChange={(Name) => { this.setState({ ...this.state, Name }); }} />

          <UserInput inputType={"iconDateTime"}
            iconType={"fa-icon"}
            source={"gift"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            placeholder="Date of Birth"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.DobLabel}
            dateFormat={"YYYY-MM-DD"}
            dateTimeMode="date"
            onChange={(DobLabel) => {
              this.setState({ ...this.state, DobLabel, Dob: this.serverDatetime(DobLabel) });
            }} />
          <UserInput inputType={"iconText"}
            iconType={"fa-icon"}
            source={"map-marker"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            placeholder="Location"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Location}
            onChange={(Location) => { this.setState({ ...this.state, Location }); }} />

          <UserInput inputType={"iconPicker"}
            iconType={"fa-icon"}
            source={"user"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            placeholder="Profession"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            listItems={ProfessionsList}
            value={this.state.Profession}
            onChange={(Profession) => { this.setState({ ...this.state, Profession }); }} />

          <UserInput inputType={"iconText"}
            iconType={"fa-icon"}
            source={"envelope"}
            iconSize={12}
            iconColor={theme.colors.lightblue}
            placeholder="Email"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Email}
            onChange={(Email) => { this.setState({ ...this.state, Email }); }} />

          <UserInput inputType={"iconText"}
            iconType={"fa-icon"}
            source={"lock"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.Password}
            onChange={(Password) => { this.setState({ ...this.state, Password }); }} />

          <UserInput inputType={"iconText"}
            iconType={"fa-icon"}
            source={"lock"}
            iconSize={15}
            iconColor={theme.colors.lightblue}
            secureTextEntry={true}
            placeholder="Repeat Password"
            returnKeyType={"go"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.RepeatPassword}
            onChange={(RepeatPassword) => { this.setState({ ...this.state, RepeatPassword }); }} />

        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.footerText} onPress={() => { this.props.termsAndConditions(); }}>
            I agree to the <Text style={styles.termsAndConditionsText}> terms and conditions</Text>
          </Text>

          <Switch style={styles.switchButton}
            onValueChange={(AgreeOnTermsAndConditions) => {
              this.setState({ ...this.state, AgreeOnTermsAndConditions });
            }}
            onTintColor={theme.colors.lightblue}
            tintColor={theme.colors.lightgrey}
            value={this.state.AgreeOnTermsAndConditions} />
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button}
            onPress={() => {
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
                this.props.createAccount(this.state);
              }
            }}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <Text style={styles.footerText} onPress={() => {
            this.props.login();
          }}>
            Already have an account? Login
            </Text>
        </View>

      </ScrollView>
    );
  }

}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.signup };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...SignupActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(Signup);
