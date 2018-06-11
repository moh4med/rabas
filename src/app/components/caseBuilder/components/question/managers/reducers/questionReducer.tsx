/**
 * questionReducer.tsx
 */

import { ErrorResponseVM, ResponseVM } from "../../../../../../common/viewModels";
import { IAction, IReducer } from "../../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { QuestionAnswerVM } from "../../../../viewModels/questionAnswerVM";
import { QuestionVM } from "../../../../viewModels/questionVM";
import { IStateActions, IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const QuestionReducer: IReducer<IStateProps> = {

    initialState: {
        QuestionAnswer: new QuestionAnswerVM(),
        QuestionAnswers: []
    },

    reducer(state: IStateProps = QuestionReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.UPDATE_QUESTION_ANSWER]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {
                if (state.QuestionAnswers && action.payload.QuestionAnswer) {

                    // copy the array
                    const questionAnswersList = state.QuestionAnswers.slice() || [];

                    // execute the manipulations
                    questionAnswersList[action.payload.QuestionAnswer.QuestionId] = {
                        QuestionId: action.payload.QuestionAnswer.QuestionId,
                        ChoiceId: action.payload.QuestionAnswer.ChoiceId,
                        BoolValue: action.payload.QuestionAnswer.BoolValue,
                        DecimalValue: action.payload.QuestionAnswer.DecimalValue,
                        TextValue: action.payload.QuestionAnswer.TextValue,
                        ToothNumber: action.payload.QuestionAnswer.ToothNumber,
                        IsDeleted: action.payload.QuestionAnswer.IsDeleted
                    };

                    // set the new state
                    return { ...state, QuestionAnswers: questionAnswersList };

                    // return {
                    //     ...state, QuestionAnswers: {
                    //         ...state.QuestionAnswers, [action.payload.QuestionAnswer.QuestionId]: {
                    //             ...state.QuestionAnswers[action.payload.QuestionAnswer.QuestionId],
                    //             QuestionId: action.payload.QuestionAnswer.QuestionId,
                    //             ChoiceId: action.payload.QuestionAnswer.ChoiceId,
                    //             BoolValue: action.payload.QuestionAnswer.BoolValue,
                    //             DecimalValue: action.payload.QuestionAnswer.DecimalValue,
                    //             TextValue: action.payload.QuestionAnswer.TextValue,
                    //             ToothNumber: action.payload.QuestionAnswer.ToothNumber,
                    //             IsDeleted: action.payload.QuestionAnswer.IsDeleted
                    //         }

                    //     }

                    // };
                } else {
                    return state;
                }
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
