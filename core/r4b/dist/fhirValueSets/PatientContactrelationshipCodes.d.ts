/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare const PatientContactrelationshipCodes: {
    /**
     * Code: BP
     */
    readonly BillingContactPerson: "BP";
    /**
     * Code: C
     */
    readonly EmergencyContact: "C";
    /**
     * Code: CP
     */
    readonly ContactPerson: "CP";
    /**
     * Code: E
     */
    readonly Employer: "E";
    /**
     * Code: EP
     */
    readonly EmergencyContactPerson: "EP";
    /**
     * Code: F
     */
    readonly FederalAgency: "F";
    /**
     * Code: I
     */
    readonly InsuranceCompany: "I";
    /**
     * Code: N
     */
    readonly NextOfKin: "N";
    /**
     * Code: PR
     */
    readonly PersonPreparingReferral: "PR";
    /**
     * Code: S
     */
    readonly StateAgency: "S";
    /**
     * Code: U
     */
    readonly Unknown: "U";
};
/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare type PatientContactrelationshipCodeType = typeof PatientContactrelationshipCodes[keyof typeof PatientContactrelationshipCodes];
//# sourceMappingURL=PatientContactrelationshipCodes.d.ts.map