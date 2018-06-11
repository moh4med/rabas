/**
 * homeActions.tsx
 */
import { Locations } from "../../../../config/locations";
import { ActionCreator, Navigate } from "../../../../Core.FE.RN/utilities";
import { CaseBuilderActions } from "../../../caseBuilder/managers/actions";
import { IStateActions } from "../../interfaces";
import { Types } from "./types";

export const HomeActions: IStateActions = {

    casesHistory() {
        return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_CASES_HISTORY)());
        };
    },

    buildCase() {
        return (dispatch: any) => {
            dispatch(CaseBuilderActions.caseBuilderLayout());
        };
    },
    addPatient() {
         return (dispatch: any) => {
            dispatch(ActionCreator.create(Types.GOTO_ADD_PATIENT)());
            Navigate(Locations.Patient);
        };
    }
};
