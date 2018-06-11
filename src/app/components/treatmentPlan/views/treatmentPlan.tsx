/**
 * treatmentPlan.tsx
 */

import * as React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
// tslint:disable-next-line:ordered-imports
import * as moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../config/store";
import { theme } from "../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { TreatmentPlanActions } from "../managers/actions";
import { styles } from "../styles/styles";
import { TreatmentPlanEntryVM } from "../viewModels/treatmentPlanEntryVM";

import {
  TreatmentSuccessIndicatorLookup,
  TreatmentSuccessIndicatorsList
} from "../lookups/treatmentSuccessIndicatorLookup";

const Progress = require("react-native-progress");

class TreatmentPlan extends React.Component<IStateProps & IStateActions, any> {

  constructor(props: IStateProps & IStateActions) {
    super(props);
    this.state = (store.getState() as any).treatmentPlan;
    this.patient = (store.getState() as any).patient;
  }
  private patient: any;

  private treatmentPlanList() {
    return (this.state.TreatmentPlanEntries.map((entry: TreatmentPlanEntryVM, index: number) => {
      return (
        <View key={index} style={styles.listContainer}>
          <View style={styles.keyValueContainer}>
            <View style={styles.keyContainer}>
              <Text>{`${entry.Key}`}</Text>
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.valueText}>{`${entry.Value}`}</Text>
            </View>
          </View>
          {entry.Key === "Bone Graft" ? (<View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={() => {
            }}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>) : null}
        </View>
      );
    }));
  }
  private progressColor(successIndicator: number) {
    let color = null;
    switch (successIndicator) {
      case TreatmentSuccessIndicatorLookup.Poor.value:
        color = theme.colors.red;
        break;
      case TreatmentSuccessIndicatorLookup.Fair.value:
        color = theme.colors.yellow;
        break;
      case TreatmentSuccessIndicatorLookup.Good.value:
        color = theme.colors.green;
        break;
      default:
        break;
    }

    return color;
  }
  private datetime() {
    return (moment as any).default(new Date()).format("DD/MM/YYYY");
  }

  public render() {

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerInitials}>
            <Text>{this.patient.FirstName} {this.patient.LastName}</Text>
          </View>
          <View style={styles.headerDate}>
            <Text style={styles.dateText}>{this.datetime()}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.progressHeader}>
            {TreatmentSuccessIndicatorsList[this.state.TreatmentSuccessIndicator].label}
          </Text>
          <View style={styles.progressContainer}>
            <Progress.Bar progress={1}
              width={null}
              color={this.progressColor(this.state.TreatmentSuccessIndicator)}
              unfilledColor={theme.colors.darkgrey}
              borderColor={theme.colors.darkgrey}
              borderWidth={1}
              borderRadius={5} />
          </View>
          {/* <ProgressBar
          fillStyle={{}}
          backgroundStyle={{ backgroundColor: theme.colors.lightblue, borderRadius: 2 }}
          style={{ marginTop: 10, width: 300 }}
          progress={this.state.TreatmentSuccessIndicator}
        /> */}

          <View>
            {this.treatmentPlanList()}
          </View>
        </View>

      </ScrollView >
    );
  }
}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.treatmentPlan };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...TreatmentPlanActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(TreatmentPlan);
