/**
 * caseBuilder.tsx
 */
// tslint:disable:underscore-consistent-invocation
import * as React from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    View,
    TouchableOpacity,
    BackHandler,
    Alert
} from "react-native";

import * as _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Locations } from "../../../config/locations";
import { store } from "../../../config/store";
import { ActionConst, Actions, Navigate, Router, Scene } from "../../../Core.FE.RN/utilities";
import { theme } from "../../../styles/theme";
import Question from "../components/question/views/question";
import Section from "../components/section/views/section";
import { IStateActions, IStateProps } from "../interfaces";
import { CaseBuilderActions } from "../managers/actions";
import { styles } from "../styles/styles";
import { QuestionVM } from "../viewModels/questionVM";
import { SectionVM } from "../viewModels/sectionVM";

class CaseBuilder extends React.Component<IStateProps & IStateActions, any> {
    public constructor(props: IStateProps & IStateActions) {
        super(props);
        this.state = (store.getState() as any).caseBuilder;

    }

    private getQuestionById(questionId?: number) {

        return _.find(this.state.QuestionsList, (question: QuestionVM, index: number) => {
            return question.Id === questionId;
        });
    }

    public render() {

        BackHandler.addEventListener("hardwareBackPress", () => {
            const { ActionConst } = require("../../../Core.FE.RN/utilities");

            if (Actions.currentScene === "_Tab0") {
                Alert.alert(
                    "Warning",
                    "If you choose to go back, you will loose all your progress",
                    [
                        {
                            text: "OK, take me back", onPress: () => {
                                console.log("show alert");
                                Actions.pop();
                            }
                        },
                        { text: "Cancel", onPress: () => { } },
                    ],
                    { cancelable: false }
                );

                return true;
            }

            return false;
        });

        this.state = (store.getState() as any).caseBuilder;
        this.state.QuestionsList = this.props.Questions;

        // const visibleQuestions: boolean[] = [];

        const { index, Structure } = this.props;
        let Sections: any = [];
        let Questions: any = [];
        if (index !== undefined) {
            Sections = Structure.MainSections[index].Sections;
            Questions = Structure.MainSections[index].QuestionIds;

        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    {Sections.map((section: SectionVM, index: number) => {
                        return (<Section sectionId={section.Id} section={section} key={index} />);
                    })
                    }

                    {
                        Questions.map((questionId: number, index: number) => {
                            const question = this.getQuestionById(questionId);
                            if (question && question.IsVisible) {
                                console.log(question.Id, true);

                                return (<Question questionId={questionId} key={index} />);
                            } else {
                                console.log((question || { Id: 0 }).Id, false);

                                return null;
                            }

                        })}

                    {
                        index === Structure.MainSections.length - 1 ?
                            (<View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                    console.log((store.getState() as any).question.QuestionAnswers);
                                    this.props.submitCase();
                                }}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>)
                            : null
                    }
                </ScrollView>

            </View>
        );
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return {
        Questions: state.caseBuilder.Questions,
        Structure: state.caseBuilder.Structure
        // visibleQuestions: state.caseBuilder.visibleQuestions,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return { ...bindActionCreators({ ...CaseBuilderActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, {}>(mapStateToProps, mapDispatchToProps)(CaseBuilder);
