/**
 * toothNumbersLookup.tsx
 */

import * as _ from "lodash";
import { ILookup, IStringTMap } from "../../../Core.FE.RN/interfaces";

export const ToothNumbersLookup = {
    generate() {
        const toothNumbersList: IStringTMap<ILookup> = {};
        toothNumbersList[0] = { label: "Select Tooth Number", value: 0 };

        for (let i = 3; i <= 31; i++) {
            if (i === 16 || i === 17) {
                // skip
            } else {
                toothNumbersList[i] = { label: i.toString(), value: i };
            }
        }

        return toothNumbersList;
    }
};

export const ToothNumbersList = _.values(ToothNumbersLookup.generate());
