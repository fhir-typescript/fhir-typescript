import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare type EncounterAdmitSourceCodingType = {
    /**
     * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    BornInHospital: CodingArgs;
    /**
     * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    FromAccidentEmergencyDepartment: CodingArgs;
    /**
     * gp: The patient has been admitted due to a referred from a General Practitioner.
     */
    GeneralPractitionerReferral: CodingArgs;
    /**
     * hosp-trans: The Patient has been transferred from another hospital for this encounter.
     */
    TransferredFromOtherHospital: CodingArgs;
    /**
     * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    MedicalPractitionerPhysicianReferral: CodingArgs;
    /**
     * nursing: The patient has been transferred from a nursing home.
     */
    FromNursingHome: CodingArgs;
    /**
     * other: The patient has been admitted from a source otherwise not specified here.
     */
    Other: CodingArgs;
    /**
     * outp: The patient has been transferred from an outpatient department within the hospital.
     */
    FromOutpatientDepartment: CodingArgs;
    /**
     * psych: The patient has been transferred from a psychiatric facility.
     */
    FromPsychiatricHospital: CodingArgs;
    /**
     * rehab: The patient has been transferred from a rehabilitiation facility or clinic.
     */
    FromRehabilitationFacility: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export declare const EncounterAdmitSourceCodings: EncounterAdmitSourceCodingType;
//# sourceMappingURL=EncounterAdmitSourceCodings.d.ts.map