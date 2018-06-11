/**
 * home.tsx
 */
import * as React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Images } from "../../../assets/images";
import { store } from "../../../config/store";
import { theme } from "../../../styles/theme";
import { IStateActions, IStateProps } from "../interfaces";
import { HomeActions } from "../managers/actions";
import { styles } from "../styles/styles";

class Home extends React.Component<IStateProps & IStateActions, any> {

  constructor(props: IStateProps & IStateActions) {
    super(props);
    this.state = (store.getState() as any).home;
  }

  public render() {

    return (
      <ScrollView style={styles.mainContainer} >
        <View style={styles.headerBar}>
          <View style={styles.menuIconContainer}>
            <TouchableOpacity style={styles.menuIconStyle} onPress={() => console.log("Side menu pressed")}>
              <Icon name="list" size={15} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoContainer}>
            <Image source={Images.Title} style={styles.logoImage} />
          </View>
        </View>
        {/* <View style={styles.drawerBarTextContainer} >
          <Text style={styles.drawerBarText}> Cases History </Text>
        </View>
        <View style={styles.drawerBarIconContainer}>
          <Text style={styles.drawerBarIcon} onPress={() => {
            this.props.casesHistory();

          }} >
            <Icon name={"chevron-down"} size={15} color={theme.colors.darkgrey}
            />
          </Text>
        </View> */}
        <View style={styles.container}>
          <Text style={styles.textContainer}>
            Welcome to mplant ™
                 </Text>
        </View>

        <View style={styles.container}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.props.buildCase();
            }}>
              <Text style={styles.buttonText}>Build your Case</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {
              this.props.addPatient();
            }}>
              <Text style={styles.buttonText}>Add Patient</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroupContainer}>
            <View style={[styles.smallButtonContainer, styles.marginRight]}>
              <TouchableOpacity style={styles.smallButton} onPress={() => {

              }}>
                <Text style={styles.smallButtonText}>Fail Not</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.smallButtonContainer, styles.marginLeft]}>
              <TouchableOpacity style={styles.smallButton} onPress={() => {

              }}>
                <Text style={styles.smallButtonText}>Faculty Consult </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonGroupContainer}>
            <View style={[styles.smallButtonContainer, styles.marginRight]}>
              <TouchableOpacity style={styles.smallButton} onPress={() => {

              }}>
                <Text style={styles.smallButtonText}>mplant Academy</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.smallButtonContainer, styles.marginLeft]}>
              <TouchableOpacity style={styles.smallButton} onPress={() => {

              }}>
                <Text style={styles.smallButtonText}>mplant Experience </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonGroupContainer}>
            <View style={styles.smallButtonContainer}>
              <TouchableOpacity style={styles.smallButton} onPress={() => {
              }}>
                <Text style={styles.smallButtonText}>Store</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any): IStateProps => {
  return { ...state.home };
};

const mapDispatchToProps = (dispatch: any) => {
  return { ...bindActionCreators({ ...HomeActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(Home);
