/**
 * The nature of the relationship between the patient and the contact person.
 */
export declare const PatientContactrelationshipCodes: {
    /**
     * Code: C
     */
    readonly EmergencyContact: "C";
    /**
     * Code: E
     */
    readonly Employer: "E";
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