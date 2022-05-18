import { Coding } from '../fhir/Coding.js';
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare const PatientContactrelationshipCodings: {
    /**
     * Code: C
     */
    readonly EmergencyContact: Coding;
    /**
     * Code: E
     */
    readonly Employer: Coding;
    /**
     * Code: F
     */
    readonly FederalAgency: Coding;
    /**
     * Code: I
     */
    readonly InsuranceCompany: Coding;
    /**
     * Code: N
     */
    readonly NextOfKin: Coding;
    /**
     * Code: S
     */
    readonly StateAgency: Coding;
    /**
     * Code: U
     */
    readonly Unknown: Coding;
};
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare type PatientContactrelationshipCodingType = typeof PatientContactrelationshipCodings;
//# sourceMappingURL=PatientContactrelationshipCodings.d.ts.map