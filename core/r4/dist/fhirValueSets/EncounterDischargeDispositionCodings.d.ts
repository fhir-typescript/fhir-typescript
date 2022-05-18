import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
export declare const EncounterDischargeDispositionCodings: {
    /**
     * aadvice: The patient self discharged against medical advice.
     */
    readonly LeftAgainstAdvice: Coding;
    /**
     * alt-home: The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home.
     */
    readonly AlternativeHome: Coding;
    /**
     * exp: The patient has deceased during this encounter.
     */
    readonly Expired: Coding;
    /**
     * home: The patient was dicharged and has indicated that they are going to return home afterwards.
     */
    readonly Home: Coding;
    /**
     * hosp: The patient has been discharged into palliative care.
     */
    readonly Hospice: Coding;
    /**
     * long: The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.
     */
    readonly LongTermCare: Coding;
    /**
     * oth: The discharge disposition has not otherwise defined.
     */
    readonly Other: Coding;
    /**
     * other-hcf: The patient was transferred to another healthcare facility.
     */
    readonly OtherHealthcareFacility: Coding;
    /**
     * psy: The patient has been transferred to a psychiatric facility.
     */
    readonly PsychiatricHospital: Coding;
    /**
     * rehab: The patient was discharged and is to receive post acute care rehabilitation services.
     */
    readonly Rehabilitation: Coding;
    /**
     * snf: The patient has been discharged to a skilled nursing facility for the patient to receive additional care.
     */
    readonly SkilledNursingFacility: Coding;
};
/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
export declare type EncounterDischargeDispositionCodingType = typeof EncounterDischargeDispositionCodings;
//# sourceMappingURL=EncounterDischargeDispositionCodings.d.ts.map