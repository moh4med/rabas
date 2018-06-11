/**
 * questionTypesLookup.tsx
 */

import * as _ from "lodash";
import { ILookup, IStringTMap } from "../../../Core.FE.RN/interfaces";

export const QuestionTypesLookup: IStringTMap<ILookup> = {
    Single: { label: "Single", value: 0 },
    Text: { label: "Text", value: 1 },
    Decimal: { label: "Decimal", value: 2 },
    Bool: { label: "Bool", value: 3 },
    ToothNumber: { label: "ToothNumber", value: 4 }

};

export const QuestionTypesList = _.values(QuestionTypesLookup);
