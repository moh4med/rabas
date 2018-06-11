/**
 * professionsLookup.tsx
 */

import * as _ from "lodash";
import { ILookup, IStringTMap } from "../../../../../Core.FE.RN/interfaces";

export const ProfessionsLookup: IStringTMap<ILookup> = {
    None: { label: "Select Profession", value: "0" },
    DentalPublicHealth: { label: "Dental Public Health", value: "1" },
    Endodontics: { label: "Endodontics", value: "2" },
    OralandMaxillofacialPathology: { label: "Oral and Maxillofacial Pathology", value: "3" },
    OralandMaxillofacialRadiology: { label: "Oral and Maxillofacial Radiology", value: "4" },
    OralandMaxillofacialSurgery: { label: "Oral and Maxillofacial Surgery", value: "5" },
    OrthodonticsandDentofacialOrthopedics: { label: "Orthodontics and Dentofacial Orthopedics", value: "6" },
    PediatricDentistry: { label: "Pediatric Dentistry", value: "7" },
    Periodontics: { label: "Periodontics", value: "8" },
    Prosthodontics: { label: "Prosthodontics", value: "9" },
    Anesthesiologist: { label: "Anesthesiologist", value: "10" },
    GeneralDentist: { label: "General Dentist", value: "11" },
    Student: { label: "Student", value: "12" }

};

export const ProfessionsList = _.values(ProfessionsLookup);
