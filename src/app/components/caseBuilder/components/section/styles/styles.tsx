/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  sectionContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  sectionTitle: {
    color: theme.colors.darkgrey,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 20,
    paddingRight: 25,
    flex: 1
  },
  sectionIcon: {
    right: 0,
    position: "absolute",
    top: 20,
    zIndex: 10,
    width: 20,
    height: 20
  }
});
