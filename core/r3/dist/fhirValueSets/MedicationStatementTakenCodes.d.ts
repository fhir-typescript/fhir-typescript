/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export declare const MedicationStatementTakenCodes: {
    /**
     * n: Negative assertion that patient has not taken medication
     */
    readonly No: "n";
    /**
     * na: Patient reporting does not apply
     */
    readonly NotApplicable: "na";
    /**
     * unk: Unknown assertion if patient has taken medication
     */
    readonly Unknown: "unk";
    /**
     * y: Positive assertion that patient has taken medication
     */
    readonly Yes: "y";
};
/**
 * A coded concept identifying level of certainty if patient has taken or has not taken the medication
 */
export declare type MedicationStatementTakenCodeType = typeof MedicationStatementTakenCodes[keyof typeof MedicationStatementTakenCodes];
//# sourceMappingURL=MedicationStatementTakenCodes.d.ts.map