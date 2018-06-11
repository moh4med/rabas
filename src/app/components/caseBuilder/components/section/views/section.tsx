/**
 * section.tsx
 */
// tslint:disable:underscore-consistent-invocation
import * as React from "react";
import {
    Animated,
    Image,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";

import * as _ from "lodash";
import Collapsible from "react-native-collapsible";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../../../config/store";
import { theme } from "../../../../../styles/theme";
import { CaseBuilderActions } from "../../../managers/actions";
import { QuestionVM } from "../../../viewModels/questionVM";
import { SectionVM } from "../../../viewModels/sectionVM";
import Question from "../../question/views/question";
import { IStateActions, IStateProps } from "../interfaces";
import { SectionActions } from "../managers/actions";
import { styles } from "../styles/styles";

export class Section extends React.Component<IStateProps & IStateActions, any> {
    public constructor(props: IStateProps & IStateActions) {
        super(props);
        this.state = (store.getState() as any).section;
        this.state.content = this.renderContent(this.props.section);
        this.state.QuestionsList = (store.getState() as any).caseBuilder.Questions;

        this.state.isCollapsed = this.props.sectionId ?
            this.state.collapsedSections[this.props.sectionId] || true : true;

    }
    private getQuestionById(questionId?: number) {

        return _.find(this.state.QuestionsList, (question: QuestionVM, index: number) => {
            return question.Id === questionId;
        });
    }

    private renderHeader(section?: SectionVM) {

        return (section ?
            (<View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    const toggle = !this.state.isCollapsed;
                    this.setState({
                        ...this.state, isCollapsed: toggle
                    });
                    this.props.updateCollapsibleSection(section.Id, toggle);
                }}>
                    <Icon name={this.state.isCollapsed ? "chevron-down" : "chevron-up"}
                        style={styles.sectionIcon}
                        size={15}
                        color={theme.colors.darkgrey} />
                    <Text style={[styles.sectionTitle, { color: this.state.isCollapsed ? theme.colors.darkgrey : theme.colors.lightblue }]}>
                        {section.Title || "test"}
                    </Text>
                </TouchableOpacity>
            </View>
            ) : null
        );
    }

    private renderContent(section?: SectionVM) {
        let FirstQuestionId: number = -1;
        this.state.visibleQuestions = (store.getState() as any).caseBuilder.visibleQuestions;

        if (section && section.QuestionIds) {
            FirstQuestionId = _.head(section.QuestionIds) || -1;
        }

        return (section && section.QuestionIds ?
            (
                <View style={styles.container}>
                    {
                        section.QuestionIds.map((questionId: number, index: number) => {
                            const question = this.getQuestionById(questionId);

                            if (question) {

                                return (<Question questionId={questionId} key={index} />);
                            } else {
                                console.log(question);

                                return null;
                            }
                        })}
                </View>) : null
        );
    }

    public render() {

        return (
            <View style={styles.container}>
                {this.renderHeader(this.props.section)}
                <View style={{ height: this.state.isCollapsed ? 0 : "auto" }}>
                    <ScrollView style={styles.sectionContainer}>
                        {this.renderContent(this.props.section)}
                    </ScrollView >
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state: any): IStateProps => {
    return { ...state.section };
};

const mapDispatchToProps = (dispatch: any) => {
    return { ...bindActionCreators({ ...SectionActions }, dispatch) };
};

export default connect<{}, IStateProps & IStateActions, IStateProps>(mapStateToProps, mapDispatchToProps)(Section);
