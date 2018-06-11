/**
 * splash.tsx
 */
import * as React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { Images } from "../../../../assets/images";
import { styles } from "../styles/styles";

export default class Splash extends React.Component<any, any> {

  public render() {

    return (
      <View style={styles.mainContainer} >
        <View style={styles.logoContainer}>
          <Image source={Images.Icon} style={styles.logoImage} />
        </View>
      </View>
    );
  }
}
