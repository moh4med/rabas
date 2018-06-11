/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  /*casesHistoryContainer: {
    flex: 1,
    left: 0,
    right: 0,
    position: "absolute",
    zIndex: 10,
  },
  drawerBarTextContainer: {
    backgroundColor: theme.colors.lightgrey,
    height: 30,
    alignItems: "center",
    justifyContent: "center"

  },
  drawerBarText: {
    alignItems: "center",
    justifyContent: "center"
  },
  drawerBarIconContainer: {
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.white
  },
  drawerBarIcon: {
    position: "absolute",
    alignItems: "center",
    zIndex: 99,
    top: -15,
    padding: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.lightgrey
  },*/
  headerBar: {
    backgroundColor: theme.colors.lightblue,
    flex: 1,
    flexDirection: "column",
    // height: 56
  },
  menuIconContainer: {
    flex: 1,
    height: 0
  },
  menuIconStyle: {
    marginLeft: 15,
    top: 10,
    borderWidth: 1,
    borderRadius: 15,
    width: 30,
    height: 30,
    padding: 5,
    borderColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center"

  },
  logoContainer: {
    alignItems: "center",
    top: 0,
    flex: 1
  },
  logoImage: {
    resizeMode: "contain",
    height: 50,
    width: 90
  },
  container: {
    backgroundColor: theme.colors.white,
    flex: 3,
    paddingHorizontal: 30,
    paddingTop: 30
  },
  buttonContainer: {
    flex: 1,
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

  buttonGroupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  smallButtonContainer: {
    flex: 1,
    marginTop: 20
  },
  smallButton: {
    alignItems: "center",
    backgroundColor: theme.colors.lightgrey,
    borderRadius: 5,
    height: 40,
    justifyContent: "center"
  },
  smallButtonText: {
    color: theme.colors.darkgrey
  },
  marginLeft: {
    marginLeft: 10
  },
  marginRight: {
    marginRight: 10
  },

  textContainer: {
    flex: 1,
    fontSize: 25,
    fontWeight: "bold",
    color: theme.colors.darkgrey,
    marginTop: 15,
    textAlign: "center"
  }

});
