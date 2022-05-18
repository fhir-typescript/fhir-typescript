import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare const EncounterAdmitSourceCodings: {
    /**
     * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    readonly BornInHospital: Coding;
    /**
     * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    readonly FromAccidentEmergencyDepartment: Coding;
    /**
     * gp: The patient has been admitted due to a referred from a General Practitioner.
     */
    readonly GeneralPractitionerReferral: Coding;
    /**
     * hosp-trans: The Patient has been transferred from another hospital for this encounter.
     */
    readonly TransferredFromOtherHospital: Coding;
    /**
     * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    readonly MedicalPractitionerPhysicianReferral: Coding;
    /**
     * nursing: The patient has been transferred from a nursing home.
     */
    readonly FromNursingHome: Coding;
    /**
     * other: The patient has been admitted from a source otherwise not specified here.
     */
    readonly Other: Coding;
    /**
     * outp: The patient has been transferred from an outpatient department within the hospital.
     */
    readonly FromOutpatientDepartment: Coding;
    /**
     * psych: The patient has been transferred from a psychiatric facility.
     */
    readonly FromPsychiatricHospital: Coding;
    /**
     * rehab: The patient has been transferred from a rehabilitation facility or clinic.
     */
    readonly FromRehabilitationFacility: Coding;
};
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare type EncounterAdmitSourceCodingType = typeof EncounterAdmitSourceCodings;
//# sourceMappingURL=EncounterAdmitSourceCodings.d.ts.map