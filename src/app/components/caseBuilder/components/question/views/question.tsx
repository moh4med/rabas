/**
 * question.tsx
 */
// tslint:disable:underscore-consistent-invocation
import * as React from "react";
import {
    Image,
    Text,
    TouchableHighlight,
    View,
    Alert
} from "react-native";

import * as _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../../../config/store";
import { UserInput } from "../../../../../Core.FE.RN/components";
import { theme } from "../../../../../styles/theme";
import { QuestionTypesLookup } from "../../../lookups/questionTypesLookup";
import { ToothNumbersList } from "../../../lookups/toothNumbersLookup";
import { ChoiceVM } from "../../../viewModels/choicesVM";
import { DecimalRangeDependentQuestionVM } from "../../../viewModels/decimalRangeDependentQuestionsVM";
import { QuestionAnswerVM } from "../../../viewModels/questionAnswerVM";
import { QuestionVM } from "../../../viewModels/questionVM";
import { ToothNumberDependentQuestionVM } from "../../../viewModels/toothNumberDependentQuestionVM";
import { IStateActions, IStateProps } from "../interfaces";
import { QuestionActions } from "../managers/actions";
import { styles } from "../styles/styles";

export class Question extends React.Component<IStateProps & IStateActions, any> {
    public constructor(props: IStateProps & IStateActions) {
        super(props);
        this.state = (store.getState() as any).question;
        this.state.QuestionsList = ((store.getState() as any).caseBuilder.Questions) as QuestionVM[];
    }
    private currentAnswer: any;
    private getQuestionById(questionId?: number) {

        return _.find(this.state.QuestionsList, (question: QuestionVM, index: number) => {
            return question.Id === questionId;
        });
    }

    private getQuestionIndexById(questionId?: number) {
        return _.findIndex(this.state.QuestionsList, (question: QuestionVM) => {
            return question.Id === questionId;
        });
    }
    private getAnswerIndexById(questionId?: number) {
        return _.findIndex(this.state.QuestionAnswers, (answer: QuestionAnswerVM) => {
            return answer.QuestionId === questionId;
        });
    }

    private getChoiceByChoiceId(question: QuestionVM, choiceId: number) {
        return _.find(question.Choices, (choice: ChoiceVM) => {
            return choice.Id === choiceId;
        });
    }

    private getRangeByRangeValue(question: QuestionVM, decimalValue: number) {
        return _.find(question.DecimalRangeDependentQuestions, (decimalRange: DecimalRangeDependentQuestionVM) => {
            return decimalValue >= decimalRange.From && decimalValue <= decimalRange.To;
        });
    }

    private getToothByToothNumber(question: QuestionVM, toothNumber: number) {
        return _.find(question.ToothNumberDependentQuestions, (tooth: ToothNumberDependentQuestionVM) => {
            return tooth.ToothNumber === toothNumber;
        });
    }

    private updateQuestion(question?: QuestionVM, value?: any, forceVisibility?: boolean) {
        // if question becomes visible it should recursivley show all its children
        // if question becomes invisible it should recursivley hide all its children
        // if question visibility is set to false and the question has an answer in the list,
        // remove them from the answers list if found
        if (question) {
            // check if question will terminate
            if (value === undefined || value === null) {
                // const temp = this.state.QuestionAnswers;
                // this.state.QuestionAnswers = (store.getState() as any).question.QuestionAnswers;
                // const answer = this.state.QuestionAnswers[question.Id];
                // let val = null;
                // if (answer) {
                //     switch (question.Type) {
                //         case QuestionTypesLookup.Single.value:
                //             val = answer.ChoiceId;
                //             break;
                //         case QuestionTypesLookup.Decimal.value:
                //             val = answer.DecimalValue;
                //             break;
                //         case QuestionTypesLookup.Bool.value:
                //             val = answer.BoolValue;
                //             break;
                //         case QuestionTypesLookup.Text.value:
                //             val = answer.ToothNumber;
                //             break;
                //         case QuestionTypesLookup.ToothNumber.value:
                //             val = answer.TextValue;
                //             break;
                //         default: break;
                //     }
                // console.log("has answer");
                // this.props.updateAnswerDeletion()
                //     this.updateQuestion(question, val, forceVisibility);
                // }

                this.props.updateQuestionVisibility(this.getQuestionIndexById(question.Id), forceVisibility);
                if (question.NextQuestionId) {
                    this.updateQuestion(this.getQuestionById(question.NextQuestionId), undefined, forceVisibility);
                }

                return null;

            } else {

                this.currentAnswer = undefined;

                switch (question.Type) {
                    case QuestionTypesLookup.Single.value:
                        const selectedChoice = this.getChoiceByChoiceId(question, value);
                        if (selectedChoice && selectedChoice.TerminatesCase) {
                            this.terminationQuestion(() => {
                                this.props.updateChoiceQuestionAnswer(question.Id, value, false);
                                this.props.submitCase();
                            }, () => {
                                this.clearAnswer();
                            });

                            return;
                        }

                        _.each(question.Choices, (choice: ChoiceVM) => {
                            const visibility = selectedChoice && selectedChoice.Id === choice.Id;
                            if (visibility) {
                                this.currentAnswer = choice;
                            } else {
                                this.updateQuestion(this.getQuestionById(choice.NextQuestionId), undefined, false);
                            }
                        });

                        if (this.currentAnswer) {
                            this.props.updateChoiceQuestionAnswer(question.Id, value, false);
                            this.updateQuestion(this.getQuestionById(this.currentAnswer.NextQuestionId), undefined, true);

                        }

                        break;
                    case QuestionTypesLookup.Decimal.value:
                        const selectedRange = this.getRangeByRangeValue(question, parseFloat(value));
                        if (selectedRange && selectedRange.TerminatesCase) {
                            this.terminationQuestion(() => {
                                this.props.updateDecimalQuestionAnswer(question.Id, parseFloat(value), false);
                                this.props.submitCase();
                            }, () => {
                                this.clearAnswer();
                            });

                            return;
                        }

                        _.each(question.DecimalRangeDependentQuestions, (decimalRange: DecimalRangeDependentQuestionVM) => {
                            const visibility = selectedRange && selectedRange.From === decimalRange.From && selectedRange.To === decimalRange.To;
                            if (visibility) {
                                this.currentAnswer = decimalRange;

                            } else {
                                this.updateQuestion(this.getQuestionById(decimalRange.NextQuestionId), undefined, false);
                            }

                        });

                        if (this.currentAnswer) {
                            this.props.updateDecimalQuestionAnswer(question.Id, parseFloat(value), false);
                            this.updateQuestion(this.getQuestionById(this.currentAnswer.NextQuestionId), undefined, true);
                        }

                        break;
                    case QuestionTypesLookup.ToothNumber.value:
                        const selectedTooth = this.getToothByToothNumber(question, parseInt(value, undefined));

                        _.each(question.ToothNumberDependentQuestions, (tooth: ToothNumberDependentQuestionVM) => {
                            const visibility = selectedTooth && selectedTooth.ToothNumber === tooth.ToothNumber;
                            if (visibility) {
                                this.currentAnswer = tooth;
                            } else {
                                this.updateQuestion(this.getQuestionById(tooth.NextQuestionId), undefined, false);
                            }

                        });

                        if (this.currentAnswer) {

                            this.props.updateToothQuestionAnswer(question.Id, parseInt(value, undefined), false);
                            this.updateQuestion(this.getQuestionById(this.currentAnswer.NextQuestionId), undefined, true);
                        }

                        break;

                    case QuestionTypesLookup.Text.value:
                        this.props.updateTextQuestionAnswer(question.Id, value, true);
                        this.updateQuestion(question, undefined, true);

                        break;
                    case QuestionTypesLookup.Bool.value:
                        this.props.updateBoolQuestionAnswer(question.Id, value, true);
                        this.updateQuestion(question, undefined, true);
                        break;
                    default:
                        break;
                }

            }

            return null;
        }
    }

    private terminationQuestion(success: () => void, fail: () => void) {
        Alert.alert(
            "Terminate",
            "Your case will be terminated",
            [
                {
                    text: "Cancel",
                    onPress: () => {
                        console.log("Cancel Pressed");
                        fail();

                    },
                    style: "cancel"
                },
                {
                    text: "Ok",
                    onPress: () => {
                        console.log("OK Pressed");
                        success();
                    }
                }],
            { cancelable: false }
        );

    }

    private clearAnswer() {
        this.setState({
            ...this.state, QuestionAnswer: {
                ...this.state.QuestionAnswer,
                TextValue: undefined,
                DecimalValue: undefined,
                ChoiceId: undefined,
                ToothNumber: undefined,
                BoolValue: undefined,

            }
        });

    }
    public renderQuestion(questionId?: number) {

        let element = null;
        const question = this.getQuestionById(this.props.questionId);

        if (question && questionId) {

            switch (question.Type) {
                case QuestionTypesLookup.Single.value:
                    if (!question.Choices || question.Choices.length < 1) {
                        break;
                    }
                    element = (
                        <UserInput inputType={"titledRadio"}
                            id={question.Id.toString()}
                            ref={question.Id.toString()}
                            title={question.Header}
                            placeholder={question.Header}
                            buttonColor={theme.colors.lightblue}
                            returnKeyType={"next"}
                            placeholderColor={theme.colors.lightgrey}
                            textColor={theme.colors.darkgrey}
                            listItems={question.Choices.map((choice: ChoiceVM) => {
                                return { label: choice.Text, value: choice.Id };
                            })}
                            value={this.state.QuestionAnswer.ChoiceId}
                            onChange={(ChoiceId: number) => {
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        ChoiceId
                                    }
                                });
                                this.updateQuestion(question, ChoiceId);
                            }} />
                    );

                    break;
                case QuestionTypesLookup.Text.value:
                    element = (
                        <UserInput inputType={"titledText"}
                            id={question.Id.toString()}
                            ref={question.Id.toString()}
                            title={question.Header}
                            placeholder={"Enter Text"}
                            returnKeyType={"next"}
                            autoCapitalize={"words"}
                            placeholderColor={theme.colors.lightgrey}
                            textColor={theme.colors.darkgrey}
                            value={this.state.QuestionAnswer.TextValue}
                            validation={(value) => {
                                console.log(value);

                                return value === "" ? "This field is required" : "";
                            }}
                            onChange={(TextValue: string) => {
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        TextValue
                                    }
                                });
                                this.updateQuestion(question, TextValue);
                            }} />);

                    break;

                case QuestionTypesLookup.Decimal.value:
                    element = (
                        <UserInput inputType={"titledText"}
                            id={question.Id.toString()}
                            ref={question.Id.toString()}
                            title={question.Header}
                            placeholder={"Enter Decimal Number"}
                            returnKeyType={"next"}
                            autoCapitalize={"words"}
                            placeholderColor={theme.colors.lightgrey}
                            textColor={theme.colors.darkgrey}
                            decimalUnits={"mm"}
                            value={this.state.QuestionAnswer.DecimalValue}
                            debounceDuration={1000}
                            validation={(value) => {
                                console.log(value);

                                return value === "" ? "This field is required" : "";

                            }}
                            onDebounceChange={(DecimalValue) => {
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        DecimalValue
                                    }
                                });
                                this.updateQuestion(question, DecimalValue);
                            }}
                            onChange={(DecimalValue) => {
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        DecimalValue
                                    }
                                });
                            }} />);

                    break;

                case QuestionTypesLookup.Bool.value:
                    element = (
                        <UserInput inputType={"titledRadio"}
                            id={question.Id.toString()}
                            ref={question.Id.toString()}
                            title={question.Header}
                            placeholder={question.Header}
                            buttonColor={theme.colors.lightblue}
                            returnKeyType={"next"}
                            placeholderColor={theme.colors.lightgrey}
                            textColor={theme.colors.darkgrey}
                            listItems={[{ label: "Yes", value: true }, { label: "No", value: false }]}
                            value={this.state.QuestionAnswer.BoolValue}
                            onChange={(BoolValue: boolean) => {
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        BoolValue
                                    }
                                });
                                this.updateQuestion(question, BoolValue);
                            }} />);

                    break;
                case QuestionTypesLookup.ToothNumber.value:
                    element = (
                        <UserInput inputType={"titledPicker"}
                            id={question.Id.toString()}
                            ref={question.Id.toString()}
                            title={question.Header}
                            placeholder={question.Header}
                            placeholderColor={theme.colors.lightgrey}
                            textColor={theme.colors.darkgrey}
                            listItems={ToothNumbersList}
                            value={this.state.QuestionAnswer.ToothNumber}
                            onChange={(ToothNumber) => {
                                console.log(ToothNumber);
                                this.setState({
                                    ...this.state, QuestionAnswer: {
                                        ...this.state.QuestionAnswer,
                                        ToothNumber
                                    }
                                });
                                this.updateQuestion(question, ToothNumber);
                            }} />);

                    // element = (
                    //     <UserInput inputType={"titledText"}
                    //         id={question.Id.toString()}
                    //         ref={question.Id.toString()}
                    //         title={question.Header}
                    //         placeholder={"Enter Tooth Number"}
                    //         returnKeyType={"next"}
                    //         keyboardType={"numeric"}
                    //         autoCapitalize={"words"}
                    //         placeholderColor={theme.colors.lightgrey}
                    //         textColor={theme.colors.darkgrey}
                    //         value={this.state.QuestionAnswer.ToothNumber}
                    //         validation={(value) => {
                    //             console.log(value);

                    //             return value === 0 ? "error tooth#" : "";
                    //         }}
                    //         onChange={(ToothNumber: number) => {
                    //             console.log(ToothNumber);
                    //             this.setState({
                    //                 ...this.state, QuestionAnswer: {
                    //                     ...this.state.QuestionAnswer,
                    //                     ToothNumber
                    //                 }
                    //             });
                    //             this.updateQuestion(question, ToothNumber);
                    //         }} />);

                    break;

                default:
                    break;
            }

            return (<View style={styles.container}>
                {/* <Text>{questionId}</Text> */}
                {element}
            </View>);
        } else {
            return null;
        }

    }

    public render() {
        return (
            <View style={styles.container} >
                {
                    this.props.questionId ? this.renderQuestion(this.props.questionId) : null
                }
            </View >
        );
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return { ...state.question };
};

const mapDispatchToProps = (dispatch: any) => {
    return { ...bindActionCreators({ ...QuestionActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, IStateProps>(null, mapDispatchToProps)(Question);
