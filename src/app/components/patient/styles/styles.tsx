/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 15
  },
  inputContainer: {
    flex: 3,
    justifyContent: "flex-start"
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "flex-end",
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
  }
});
