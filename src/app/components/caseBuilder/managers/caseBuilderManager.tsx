/**
 * caseBuilderManager.tsx
 */

import { BaseMplantManager } from "../../../common/managers";
import { GetRequestVM, PostRequestVM } from "../../../common/viewModels";
import { Singleton } from "../../../Core.FE.RN/utilities/singleton";
import { CaseAnswerVM } from "../viewModels/caseAnswerVM";
import { CaseBuilderVM } from "../viewModels/caseBuilderVM";

export class CaseBuilderManager extends BaseMplantManager {
    constructor() {
        super();
        this.apiName = "Cases";
    }
    public static Instance = Singleton<CaseBuilderManager>(CaseBuilderManager);

    public caseBuilderLayout() {
        return this.DataService.get<CaseBuilderVM>(new GetRequestVM(this.apiName, "GetCaseBuilder"));

    }

    public submitCase(caseAnswer: CaseAnswerVM) {
        return this.DataService.post<any>(new PostRequestVM(this.apiName, "SubmitCase", caseAnswer));

    }
}
