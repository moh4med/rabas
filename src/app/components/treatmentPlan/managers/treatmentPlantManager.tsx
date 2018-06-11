/**
 * treatmentPlantManager.tsx
 */

import { BaseMplantManager } from "../../../common/managers";
import { Singleton } from "../../../Core.FE.RN/utilities/singleton";

export class TreatmentPlantManager extends BaseMplantManager {
    constructor() {
        super();
        this.apiName = "Cases";
    }

    public static Instance = Singleton<TreatmentPlantManager>(TreatmentPlantManager);

}
