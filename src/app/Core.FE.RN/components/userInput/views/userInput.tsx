/**
 * userInput.tsx
 */

// tslint:disable:jsx-no-multiline-js
// tslint:disable-next-line:no-require-imports
import * as _ from "lodash";
import * as React from "react";
import {
    Image,
    ImageURISource,
    Picker,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

import DatePicker from "react-native-datepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { ISelectProps, IStateProps } from "../interfaces";
import { UserInputStyles } from "../styles/styles";

// tslint:disable-next-line:import-name
const RadioForm = require("react-native-simple-radio-button");

export class UserInput extends React.Component<IStateProps, any> {
    constructor(props: IStateProps) {
        super(props);
        if (props.onDebounceChange && props.debounceDuration) {
            this.debounce = _.debounce(props.onDebounceChange, props.debounceDuration);
            this.invalidText = "";
        }
    }
    private debounce: (value: any, index?: any) => any;
    private invalidText: string;
    // tslint:disable-next-line:max-func-body-length
    public render() {
        const styles = UserInputStyles(this.props);

        const listSelectOptions = (props: IStateProps) => {
            if (props.listItems && props.listItems.length > 0) {
                return props.listItems.map((item: ISelectProps, index: number) => {
                    return (<Picker.Item color={props.textColor} label={item.label} value={item.value} key={index} />);
                });
            }
        };

        const listRadioOptions = (props: IStateProps) => {
            if (props.listItems && props.listItems.length > 0) {
                return props.listItems.map((item: ISelectProps, index: number) => {
                    return (<RadioForm.RadioButton labelHorizontal={true} key={index} >
                        <RadioForm.RadioButtonInput
                            obj={item}
                            index={index}
                            isSelected={props.value === item.value}
                            onPress={props.onChange}
                            borderWidth={1}
                            buttonInnerColor={props.buttonColor}
                            buttonOuterColor={props.value === item.value ? props.buttonColor : props.placeholderColor}
                            buttonSize={10}
                            buttonOuterSize={20}
                            buttonStyle={{}}
                            buttonWrapStyle={{ marginLeft: 0 }}
                        />
                        <RadioForm.RadioButtonLabel
                            obj={item}
                            index={index}
                            labelHorizontal={true}
                            onPress={props.onChange}
                            labelStyle={styles.radioLabel}
                            labelWrapStyle={{}}
                        />
                    </RadioForm.RadioButton>
                    );
                });
            }

        };

        const renderIcon = (props: IStateProps) => {
            let element = null;
            if (props.iconType) {
                switch (props.iconType) {
                    case "fa-icon":
                        element = (<Text style={styles.inlineIcon}>
                            <Icon name={props.source || ""}
                                size={props.iconSize}
                                color={props.iconColor} />
                        </Text>);
                        break;
                    case "img":
                        element = (<Image style={styles.inlineImg} source={props.source || ""} />);
                        break;

                    default:
                        throw new Error(`Not implemented: ${props.iconType}`);

                }
            }

            return element;
        };

        const renderInput = (props: IStateProps) => {
            let element = null;

            if (props.inputType) {
                switch (props.inputType) {
                    case "iconText":
                        element = (<TextInput style={styles.iconTextInput}
                            // autoFocus={props.autoFocus || true}
                            ref={props.id}
                            placeholder={props.placeholder}
                            secureTextEntry={props.secureTextEntry}
                            autoCorrect={props.autoCorrect || false}
                            autoCapitalize={props.autoCapitalize || "none"}
                            returnKeyType={props.returnKeyType}
                            placeholderTextColor={props.placeholderColor || "grey"}
                            underlineColorAndroid="transparent"
                            maxLength={props.maxLength || 30}
                            value={props.value}
                            onChangeText={(value: any, index?: any) => {
                                props.onChange(value, index);

                                if (this.debounce) {
                                    this.debounce(value, index);
                                }
                            }} keyboardType={props.keyboardType || "default"} />);
                        break;
                    case "iconDateTime":
                        element = (
                            <View style={styles.iconDateTimeContainer}>
                                <DatePicker
                                    ref={props.id}
                                    style={styles.iconDateTimeInput}
                                    showIcon={false}
                                    date={props.value}
                                    mode={props.dateTimeMode}
                                    placeholder={props.placeholder}
                                    format={props.dateFormat}
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    onDateChange={props.onChange}
                                    customStyles={{
                                        dateInput: {
                                            flex: 1,
                                            height: 40,
                                            borderWidth: 0,
                                            borderColor: "grey",
                                            alignItems: "flex-start",
                                            justifyContent: "center"
                                        },
                                        dateText: {
                                            color: props.textColor
                                        },
                                        placeholderText: {
                                            color: props.placeholderColor
                                        },
                                    }}
                                />
                            </View>);
                        break;
                    case "iconPicker":
                        element = (<View style={styles.pickerContainer}>
                            <Icon name={"chevron-down"}
                                style={styles.pickerIcon}
                                size={15}
                                color={props.placeholderColor} />
                            <Picker style={styles.picker}
                                mode="dialog"
                                selectedValue={props.value}
                                onValueChange={props.onChange}>
                                {listSelectOptions(props)}
                            </Picker>

                        </View>);
                        break;

                    case "titledText":
                    case "titledTextArea":
                        element =
                            (<View>
                                <Text style={styles.titledInput}>{props.title}</Text>
                                {this.invalidText ? (<Text style={styles.inputValidation}>{`* ${this.invalidText}`}</Text>) : (null)}
                                <TextInput style={styles.titledTextInput}
                                    ref={props.id}
                                    // autoFocus={props.autoFocus || true}
                                    placeholder={props.placeholder}
                                    secureTextEntry={props.secureTextEntry}
                                    autoCorrect={props.autoCorrect || false}
                                    autoCapitalize={props.autoCapitalize || "none"}
                                    returnKeyType={props.returnKeyType}
                                    placeholderTextColor={props.placeholderColor || "grey"}
                                    underlineColorAndroid="transparent"
                                    maxLength={!props.multiline ? (props.maxLength || 30) : 250}
                                    multiline={!!props.multiline}
                                    numberOfLines={props.multiline || 1}
                                    value={props.value}
                                    onChangeText={(value: any, index?: any) => {
                                        props.onChange(value, index);
                                        // tslint:disable-next-line:prefer-conditional-expression
                                        this.invalidText = props.validation ? props.validation(value) : "";

                                        if (this.debounce) {
                                            this.debounce(value, index);
                                        }
                                    }}
                                    keyboardType={props.keyboardType || "default"} />
                                {renderPostfix(props)}

                            </View>);
                        break;
                    case "titledDateTime":
                        element = (
                            <View>
                                <Text style={styles.titledInput}>{props.title}</Text>

                                <View style={styles.titledDateTimeContainer}>
                                    <DatePicker
                                        ref={props.id}
                                        style={styles.titledDateTimeInput}
                                        showIcon={false}
                                        date={props.value}
                                        mode={props.dateTimeMode}
                                        placeholder={props.placeholder}
                                        format={props.dateFormat}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        onDateChange={props.onChange}
                                        customStyles={{
                                            dateInput: {
                                                flex: 1,
                                                height: 40,
                                                borderWidth: 0,
                                                borderColor: "grey",
                                                alignItems: "flex-start",
                                                justifyContent: "center"
                                            },
                                            dateText: {
                                                color: props.textColor,
                                                fontSize: 12
                                            },
                                            placeholderText: {
                                                color: props.placeholderColor,
                                                fontSize: 12
                                            }
                                        }}
                                    />
                                </View>
                            </View>);
                        break;

                    case "titledPicker":
                        element =
                            (<View>
                                <Text style={styles.titledInput}>{props.title}</Text>
                                <Picker style={styles.picker}
                                    ref={props.id}
                                    mode="dialog"
                                    selectedValue={props.value}
                                    onValueChange={props.onChange}>
                                    {listSelectOptions(props)}
                                </Picker>
                            </View>
                            );
                        break;
                    case "titledRadio":
                        element =
                            //     <RadioForm
                            //         radio_props={props.listItems}
                            //         onPress={props.onChange}
                            //         buttonColor={props.buttonColor}
                            //         labelColor={props.textColor}
                            //         labelStyle={{ paddingRight: 30 }}
                            //         formHorizontal={true}
                            //         labelHorizontal={true}
                            //     />
                            (<View>
                                <Text style={styles.titledInput}>{props.title}</Text>
                                <RadioForm.default ref={props.id}
                                    formHorizontal={true} animation={true} style={styles.radioContainer}>
                                    {listRadioOptions(props)}
                                </RadioForm.default>
                            </View>);
                        break;

                    default:
                        throw new Error(`Not implemented: ${props.inputType}`);
                    // break;

                }
            }

            return element;

        };

        const renderPostfix = (props: IStateProps) => {
            return props.decimalUnits ? (
                <Text style={styles.inlinePostfixUnit}>
                    {props.decimalUnits}
                </Text>) : null;
        };

        return (
            <View style={styles.userInputWrapper}>
                {renderIcon(this.props)}
                {renderInput(this.props)}

            </View>
        );
    }
}
