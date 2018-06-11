/**
 * reducers.tsx
 */

import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from "redux";

import { createLogger } from "redux-logger";
// tslint:disable-next-line:import-name
import thunk from "redux-thunk";

import { AppRouterReducer } from "../components/appRouter/managers/reducers";
import { LoginReducer } from "../components/authentication/components/login/managers/reducers";
import { SignupReducer } from "../components/authentication/components/signup/managers/reducers";
import { VerificationReducer } from "../components/authentication/components/verification/managers/reducers";
import { AuthenticationReducer } from "../components/authentication/managers/reducers";
import { QuestionReducer } from "../components/caseBuilder/components/question/managers/reducers";
import { SectionReducer } from "../components/caseBuilder/components/section/managers/reducers";
import { CaseBuilderReducer } from "../components/caseBuilder/managers/reducers";
import { HomeReducer } from "../components/home/managers/reducers";
import { PatientReducer } from "../components/patient/managers/reducers";

import { TreatmentPlanReducer } from "../components/treatmentPlan/managers/reducers";
import { AppStartupReducer } from "../Core.FE.RN/components/appStartup/managers/reducers";
import { BusyIndicatorReducer } from "../Core.FE.RN/components/busyIndicator/managers/reducers";

export const CombinedReducers = {
    appRouter: AppRouterReducer.reducer,
    home: HomeReducer.reducer,
    login: LoginReducer.reducer,
    signup: SignupReducer.reducer,
    verification: VerificationReducer.reducer,
    patient: PatientReducer.reducer,
    caseBuilder: CaseBuilderReducer.reducer,
    question: QuestionReducer.reducer,
    section: SectionReducer.reducer,
    treatmentPlan: TreatmentPlanReducer.reducer,

    appStartup: AppStartupReducer.reducer,
    authentication: AuthenticationReducer.reducer,
    busyIndicator: BusyIndicatorReducer.reducer

};
