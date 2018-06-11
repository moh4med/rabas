/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
    indicatorStyle: {
        borderColor: theme.colors.lightblue,
        borderWidth: 2
    },
    labelStyle: {
        // color: theme.colors.darkgrey,
        // fontSize: 10,
        color: theme.colors.transparent,
        fontSize: 0,

    },
    tabBarStyle: {
        backgroundColor: theme.colors.lightgrey,
        height: 50
    },
    tabIconStyle: {
        width: 20,
        height: 20,
        resizeMode: "contain"

    },
    backIconStyle: {
        marginLeft: 15,
        top: 2
    },
    menuIconStyle: {
        marginLeft: 15,
        top: 0,
        borderWidth: 1,
        borderRadius: 15,
        width: 25,
        height: 25,
        padding: 5,
        borderColor: theme.colors.white,
        justifyContent: "center",
        alignItems: "center"

    },
    navBarStyle: {
        backgroundColor: theme.colors.lightblue,
        elevation: 0
    },
    navTitleStyle: {
        color: theme.colors.white
    },
    navIconStyle: {
        tintColor: theme.colors.white,
        color: theme.colors.white
    }
});
