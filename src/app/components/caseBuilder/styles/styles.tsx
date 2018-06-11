/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingBottom: 10,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20
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
});
