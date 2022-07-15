/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare const EncounterAdmitSourceCodes: {
    /**
     * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    readonly BornInHospital: "born";
    /**
     * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    readonly FromAccidentEmergencyDepartment: "emd";
    /**
     * gp: The patient has been admitted due to a referred from a General Practitioner.
     */
    readonly GeneralPractitionerReferral: "gp";
    /**
     * hosp-trans: The Patient has been transferred from another hospital for this encounter.
     */
    readonly TransferredFromOtherHospital: "hosp-trans";
    /**
     * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    readonly MedicalPractitionerPhysicianReferral: "mp";
    /**
     * nursing: The patient has been transferred from a nursing home.
     */
    readonly FromNursingHome: "nursing";
    /**
     * other: The patient has been admitted from a source otherwise not specified here.
     */
    readonly Other: "other";
    /**
     * outp: The patient has been transferred from an outpatient department within the hospital.
     */
    readonly FromOutpatientDepartment: "outp";
    /**
     * psych: The patient has been transferred from a psychiatric facility.
     */
    readonly FromPsychiatricHospital: "psych";
    /**
     * rehab: The patient has been transferred from a rehabilitiation facility or clinic.
     */
    readonly FromRehabilitationFacility: "rehab";
};
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare type EncounterAdmitSourceCodeType = typeof EncounterAdmitSourceCodes[keyof typeof EncounterAdmitSourceCodes];
//# sourceMappingURL=EncounterAdmitSourceCodes.d.ts.map