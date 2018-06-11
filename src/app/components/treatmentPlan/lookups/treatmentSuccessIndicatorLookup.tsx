/**
 * treatmentSuccessIndicatorLookup.tsx
 */

import * as _ from "lodash";
import { ILookup, IStringTMap } from "../../../Core.FE.RN/interfaces";

export const TreatmentSuccessIndicatorLookup: IStringTMap<ILookup> = {
    Poor: { label: "Poor", value: 0 },
    Fair: { label: "Fair", value: 1 },
    Good: { label: "Good", value: 2 }

};

export const TreatmentSuccessIndicatorsList = _.values(TreatmentSuccessIndicatorLookup);
