/**
 * genderLookup.tsx
 */

import * as _ from "lodash";

import { ILookup, IStringTMap } from "../../../Core.FE.RN/interfaces";

export const GenderLookup: IStringTMap<ILookup> = {
    Male: { label: "Male", value: "0" },
    Female: { label: "Female", value: "1" }

};

export const GendersList = _.values(GenderLookup);
