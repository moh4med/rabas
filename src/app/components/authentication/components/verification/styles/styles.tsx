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
  textContainer: {
    flex: 2
  },
  primaryText: {
    fontWeight: "bold",
    color: theme.colors.darkgrey,
    marginTop: 15,
    textAlign: "left"
  },
  secondaryText: {
    color: theme.colors.darkgrey,
    marginTop: 15,
    textAlign: "left"
  },
  codeContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
  },
  codeInput: {
    fontSize: 20,
    borderColor: theme.colors.transparent,
    borderWidth: 0
  },
  codeInputContainer: {
    borderColor: theme.colors.darkgrey,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonContainer: {
    flex: 4,
    marginTop: 20
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
    textAlign: "left"
  }
});
