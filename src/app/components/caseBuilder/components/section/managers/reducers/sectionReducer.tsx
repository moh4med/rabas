/**
 * sectionReducer.tsx
 */

import { ErrorResponseVM, ResponseVM } from "../../../../../../common/viewModels";
import { IAction, IReducer } from "../../../../../../Core.FE.RN/interfaces";
import { ReducerCreator } from "../../../../../../Core.FE.RN/utilities";
import { SectionVM } from "../../../../viewModels/sectionVM";
import { IStateActions, IStateProps } from "../../interfaces";
import { Types } from "../actions/types";

export const SectionReducer: IReducer<IStateProps> = {

    initialState: {
        collapsedSections: []
    },

    reducer(state: IStateProps = SectionReducer.initialState, action: IAction<any>) {
        const handlers: any = {
            [Types.UPDATE_COLLAPSIBLE_SECTION]: (state: IStateProps, action: IAction<IStateProps>): IStateProps => {

                if (state.collapsedSections && action.payload.sectionId) {

                    return {
                        ...state, collapsedSections: {
                            ...state.collapsedSections, [action.payload.sectionId.toString()]: action.payload.isCollapsed
                        }
                    };
                } else {

                    return state;
                }
            }
        };

        return ReducerCreator.create<IStateProps>(handlers)(state, action);

    }
};
