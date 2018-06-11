/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";
export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.lightgrey,
    paddingBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 30
  },
  headerInitials: {
    flex: 1
  },
  headerDate: {
    flex: 1
  },
  dateText: {
    color: theme.colors.darkgrey,
    textAlign: "right"
  },
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  progressHeader: {
    flex: 1,
    paddingBottom: 5
  },
  progressContainer: {
    flex: 1,
    paddingBottom: 20
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
  },
  keyValueContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10
  },
  keyContainer: {
    flex: 1,
  },
  valueContainer: {
    flex: 1,
  },
  valueText: {
    color: theme.colors.lightblue,
    textAlign: "right"
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "flex-end",
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
