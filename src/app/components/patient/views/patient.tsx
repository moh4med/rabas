/**
 * patient.tsx
 */

import * as moment from "moment";
import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
// tslint:disable-next-line:ordered-imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../config/store";
import { UserInput } from "../../../Core.FE.RN/components";
import { theme } from "../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { GendersList } from "../lookups/genderLookup";
import { PatientActions } from "../managers/actions";
import { styles } from "../styles/styles";

class Patient extends React.Component<IStateProps & IStateActions, any> {

  constructor(props: IStateProps & IStateActions) {
    super(props);
    this.state = (store.getState() as any).patient;
  }
  private serverDatetime(datetime: string) {
    return (moment as any).default(datetime, "YYYY-MM-DD").format("DDMMYYYY");
  }
  private validateForm(state: IStateProps) {
    const errorMsg = [];

    if (!state.FirstName) { errorMsg.push("Missing first name initial"); }
    if (!state.LastName) { errorMsg.push("Missing last name initial"); }
    if (!state.Dob) { errorMsg.push("Missing date of birth"); }
    if (!state.Gender) { errorMsg.push("Missing gender"); }

    return errorMsg.join("\n");

  }

  public render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <UserInput inputType={"titledText"}
            title="First Name Initial"
            placeholder="Enter Letter"
            autoCapitalize={"words"}
            returnKeyType={"next"}
            maxLength={1}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.FirstName}
            onChange={(FirstName) => { this.setState({ ...this.state, FirstName }); }} />

          <UserInput inputType={"titledText"}
            title={"Last Name Initial"}
            placeholder={"Enter Letter"}
            returnKeyType={"next"}
            maxLength={1}
            autoCapitalize={"words"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.LastName}
            onChange={(LastName) => { this.setState({ ...this.state, LastName }); }} />

          <UserInput inputType={"titledDateTime"}
            title={"Date of Birth"}
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

          <UserInput inputType={"titledRadio"}
            title={"Gender"}
            placeholder="Gender"
            buttonColor={theme.colors.lightblue}
            returnKeyType={"next"}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            listItems={GendersList}
            value={this.state.Gender}
            onChange={(Gender) => { this.setState({ ...this.state, Gender }); }} />
          {/* <UserInput inputType={"titledTextArea"}
            title="Significant Medical History"
            placeholder="Type Here"
            returnKeyType={"go"}
            multiline={4}
            placeholderColor={theme.colors.lightgrey}
            textColor={theme.colors.darkgrey}
            value={this.state.MedicalHistory}
            onChange={(MedicalHistory) => { this.setState({ ...this.state, MedicalHistory }); }} /> */}

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

              this.props.addPatient(this.state);
            }

          }}>
            <Text style={styles.buttonText}>Add Patient</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }

}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.patient };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...PatientActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(Patient);
