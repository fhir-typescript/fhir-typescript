/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
export declare const EncounterDischargeDispositionCodes: {
    /**
     * aadvice: The patient self discharged against medical advice.
     */
    readonly LeftAgainstAdvice: "aadvice";
    /**
     * alt-home: The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home.
     */
    readonly AlternativeHome: "alt-home";
    /**
     * exp: The patient has deceased during this encounter.
     */
    readonly Expired: "exp";
    /**
     * home: The patient was dicharged and has indicated that they are going to return home afterwards.
     */
    readonly Home: "home";
    /**
     * hosp: The patient has been discharged into palliative care.
     */
    readonly Hospice: "hosp";
    /**
     * long: The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care.
     */
    readonly LongTermCare: "long";
    /**
     * oth: The discharge disposition has not otherwise defined.
     */
    readonly Other: "oth";
    /**
     * other-hcf: The patient was transferred to another healthcare facility.
     */
    readonly OtherHealthcareFacility: "other-hcf";
    /**
     * psy: The patient has been transferred to a psychiatric facility.
     */
    readonly PsychiatricHospital: "psy";
    /**
     * rehab: The patient was discharged and is to receive post acute care rehabilitation services.
     */
    readonly Rehabilitation: "rehab";
    /**
     * snf: The patient has been discharged to a skilled nursing facility for the patient to receive additional care.
     */
    readonly SkilledNursingFacility: "snf";
};
/**
 * This value set defines a set of codes that can be used to where the patient left the hospital.
 */
export declare type EncounterDischargeDispositionCodeType = typeof EncounterDischargeDispositionCodes[keyof typeof EncounterDischargeDispositionCodes];
//# sourceMappingURL=EncounterDischargeDispositionCodes.d.ts.map