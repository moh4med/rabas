/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 3,
    backgroundColor: theme.colors.lightblue
  },
  logoContainer: {
    alignItems: "center",
    flex: 2,
    // justifyContent: "center"
  },
  logoImage: {
    height: 200,
    resizeMode: "contain",
    width: 200
  },
});
