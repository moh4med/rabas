/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../../../styles/theme";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 30
  },
  logoContainer: {
    alignItems: "center",
    flex: 2
  },
  logoImage: {
    height: 180,
    resizeMode: "contain",
    width: 180
  },
  inputContainer: {
    flex: 3
  },

  switchContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",

  },
  switchButton: {
    flex: 1,
    justifyContent: "flex-end"
  },
  termsAndConditionsText: {
    flex: 2,
    textDecorationLine: "underline",
    color: theme.colors.darkgrey,
    marginBottom: 5,
    textAlign: "left",
    alignItems: "flex-start",

  },
  buttonContainer: {
    flex: 2,
  },
  button: {
    alignItems: "center",
    backgroundColor: theme.colors.lightblue,
    borderRadius: 5,
    height: 40,
    justifyContent: "center"
  },
  buttonText: {
    color: theme.colors.white
  },
  footerText: {
    color: theme.colors.darkgrey,
    marginBottom: 15,
    marginTop: 15,
    textAlign: "left",
    textDecorationLine: "underline",
  }

});
