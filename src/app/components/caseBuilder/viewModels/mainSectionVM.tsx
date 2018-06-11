/**
 * mainSectionsVM.tsx
 */

import { ImageVM } from "../../../Core.FE.RN/Core.FE/viewModels";
import { SectionVM } from "./sectionVM";

export class MainSectionVM {
    public Id: number;
    public Title: string;
    public Image: ImageVM;
    public Sections: SectionVM[];
    public QuestionIds: number[];
}
