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
    flex: 4
  },
  logoImage: {
    height: 180,
    resizeMode: "contain",
    width: 180
  },
  inputContainer: {
    flex: 2,
    marginTop: 30
  },
  buttonContainer: {
    flex: 4,
    marginTop: 40,
    marginBottom: 20
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
    marginTop: 15,
    textAlign: "left",
    textDecorationLine: "underline",
  }

});
