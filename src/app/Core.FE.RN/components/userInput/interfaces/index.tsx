/**
 * index.tsx
 */

import { ImageURISource } from "react-native";

export interface IStateProps {
    id?: string;
    autoCapitalize?: "none" | "sentences" | "words" | undefined;
    autoCorrect?: boolean | undefined;
    // autoFocus?: boolean;
    backgroundColor?: string;
    iconColor?: string;
    iconSize?: number;
    placeholder: string;
    placeholderColor: string;
    validationColor?: string;
    returnKeyType?: "none" | "search" | "default" | "done" | "go" | "next" | "send" | "previous" | "google" | "join";
    secureTextEntry?: boolean | undefined;
    source?: ImageURISource & string;
    textColor?: string;
    iconType?: "img" | "fa-icon";
    inputType: "iconText" | "iconPicker" | "iconDateTime" | "titledText" | "titledTextArea" | "titledDateTime" | "titledPicker" | "titledRadio";
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad";
    value?: any;
    onChange(value: any, index?: any): any;
    listItems?: any[];
    title?: string;
    multiline?: number;
    maxLength?: number;
    dateTimeMode?: "date" | "time" | "datetime";
    dateFormat?: "YYYY-MM-DD" | "DDMMYYYY";
    dateRange?: string[];
    buttonColor?: string;
    decimalUnits?: string;
    onDebounceChange?(value: any, index?: any): any;
    debounceDuration?: number;
    validation?(value: any): string;
}

export interface ISelectProps {
    label: string;
    value: string;

}
