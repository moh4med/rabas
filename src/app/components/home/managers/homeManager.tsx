/**
 * homeManager.tsx
 */

import { BaseMplantManager } from "../../../common/managers";
import { Singleton } from "../../../Core.FE.RN/utilities/singleton";

export class HomeManager extends BaseMplantManager {

    public static Instance = Singleton<HomeManager>(HomeManager);
}
