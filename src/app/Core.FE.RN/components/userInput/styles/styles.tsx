/**
 * styles.tsx
 */
import { StyleSheet } from "react-native";
import { IStateProps } from "../interfaces";

export const UserInputStyles = (props: IStateProps) => {

    return StyleSheet.create({
        inlineIcon: {
            left: 0,
            position: "absolute",
            top: 13,
            zIndex: 10
        },
        inlinePostfixUnit: {
            position: "absolute",
            right: 0,
            bottom: 5,
            zIndex: 10,
            color: props.textColor || "black",
            fontSize: 12

        },
        inlineImg: {
            height: 22,
            left: 0,
            position: "absolute",
            resizeMode: "contain",
            top: 5,
            width: 22,
            zIndex: 10
        },
        pickerContainer: {
            backgroundColor: props.backgroundColor || "transparent",
            borderBottomColor: props.placeholderColor,
            borderBottomWidth: 1,
            borderRadius: 0,
            marginHorizontal: 0

        },
        picker: {
            backgroundColor: props.backgroundColor || "transparent",
            // color: props.textColor || "black",
            height: 40,
            marginHorizontal: 12,
            marginTop: 0,
            paddingBottom: 0,
            paddingLeft: 20
        },
        pickerIcon: {
            right: 0,
            position: "absolute",
            top: 15,
            zIndex: 10,
            width: 20,
            height: 20
        },
        radioContainer: {
            paddingTop: 10
        },
        radioLabel:
        {
            fontSize: 12,
            color: props.textColor,
            paddingLeft: 5,
            paddingRight: 20,
            paddingBottom: 5
        },
        titledInput: {
            color: props.textColor || "black",
            fontWeight: "bold",
            marginTop: 10
        },
        titledTextInput: {
            backgroundColor: props.backgroundColor || "transparent",
            borderBottomColor: props.placeholderColor,
            borderBottomWidth: 1,
            borderRadius: 0,
            color: props.textColor || "black",
            marginHorizontal: 0,
            paddingBottom: 5,
            paddingRight: 40,
            paddingLeft: 0,
            textAlignVertical: "bottom",
            fontSize: 12
        },
        iconTextInput: {
            backgroundColor: props.backgroundColor || "transparent",
            borderBottomColor: props.placeholderColor,
            borderBottomWidth: 1,
            borderRadius: 0,
            color: props.textColor || "black",
            height: 40,
            marginHorizontal: 0,
            paddingBottom: 10,
            paddingLeft: 20,
            textAlignVertical: "bottom",
            fontSize: 15
        },
        iconDateTimeContainer: {
            backgroundColor: props.backgroundColor || "transparent",
            borderBottomColor: props.placeholderColor,
            borderBottomWidth: 1,
            borderRadius: 0,
            height: 40,
            marginHorizontal: 0,
            paddingBottom: 10,
            paddingLeft: 20,
        },
        iconDateTimeInput: {
            width: 500,
        },
        titledDateTimeContainer: {
            backgroundColor: props.backgroundColor || "transparent",
            borderBottomColor: props.placeholderColor,
            borderBottomWidth: 1,
            borderRadius: 0,
            height: 40,
            marginHorizontal: 0,
            paddingBottom: 10,
            paddingLeft: 0
        },
        titledDateTimeInput: {
            width: 500
        },
        userInputWrapper: {
            flex: 1
        },
        inputValidation: {
            color: props.validationColor || "red"
        }
    });
};
