/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
import { Coding } from '../fhir/Coding.js';

// <auto-generated/>
/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
var EncounterDischargeDispositionCodings = {
    /**
     * aadvice: The patient self discharged against medical advice.
     */
    LeftAgainstAdvice: new Coding({
        display: "Left against advice",
        code: "aadvice",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * alt-home: The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home.
     */
    AlternativeHome: new Coding({
        display: "Alternative home",
        code: "alt-home",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * exp: The patient has deceased during this encounter.
     */
    Expired: new Coding({
        display: "Expired",
        code: "exp",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * home: The patient was dicharged and has indicated that they are going to return home afterwards.
     */
    Home: new Coding({
        display: "Home",
        code: "home",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * hosp: The patient has been discharged into palliative care.
     */
    Hospice: new Coding({
        display: "Hospice",
        code: "hosp",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * long: The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.
     */
    LongTermCare: new Coding({
        display: "Long-term care",
        code: "long",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * oth: The discharge disposition has not otherwise defined.
     */
    Other: new Coding({
        display: "Other",
        code: "oth",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * other-hcf: The patient was transferred to another healthcare facility.
     */
    OtherHealthcareFacility: new Coding({
        display: "Other healthcare facility",
        code: "other-hcf",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * psy: The patient has been transferred to a psychiatric facility.
     */
    PsychiatricHospital: new Coding({
        display: "Psychiatric hospital",
        code: "psy",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * rehab: The patient was discharged and is to receive post acute care rehabilitation services.
     */
    Rehabilitation: new Coding({
        display: "Rehabilitation",
        code: "rehab",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
    /**
     * snf: The patient has been discharged to a skilled nursing facility for the patient to receive additional care.
     */
    SkilledNursingFacility: new Coding({
        display: "Skilled nursing facility",
        code: "snf",
        system: "http://terminology.hl7.org/CodeSystem/discharge-disposition",
    }),
};

export { EncounterDischargeDispositionCodings };
//# sourceMappingURL=EncounterDischargeDispositionCodings.js.map
