/**
 * patientManager.tsx
 */

import { BaseMplantManager } from "../../../common/managers";
import { PostRequestVM } from "../../../common/viewModels";
import { Singleton } from "../../../Core.FE.RN/utilities/singleton";
import { PatientVM } from "../viewModels/patientVM";
import { UserPatientFormVM } from "../viewModels/userPatientFormVM";

export class PatientManager extends BaseMplantManager {
    constructor() {
        super();
        this.apiName = "Cases";
    }

    public static Instance = Singleton<PatientManager>(PatientManager);

    public addPatient(userPatientForm: UserPatientFormVM) {
        return this.DataService.post<PatientVM>(new PostRequestVM(this.apiName, "AddPatient", userPatientForm));

    }
}
