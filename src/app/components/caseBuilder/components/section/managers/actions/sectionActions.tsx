/**
 * sectionActions.tsx
 */

import { ActionCreator } from "../../../../../../Core.FE.RN/utilities";
import { CaseBuilderActions } from "../../../../managers/actions";
import { SectionVM } from "../../../../viewModels/sectionVM";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const SectionActions: IStateActions = {
    updateCollapsibleSection(sectionId: number, isCollapsed: boolean) {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.UPDATE_COLLAPSIBLE_SECTION, "sectionId", "isCollapsed")({ sectionId, isCollapsed }));

        };
    }
};
