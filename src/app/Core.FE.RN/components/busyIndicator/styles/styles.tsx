/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../../utilities";

export const styles = StyleSheet.create({
    absoluteContainer: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000000,
        backgroundColor: theme.opacity(theme.colors.black, 0.2)

    },
    centerContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: DEVICE_HEIGHT
    },
    activityIndicator: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: theme.opacity(theme.colors.black, 0.8),

    },
    text: {
        textAlign: "center"
    }

});
