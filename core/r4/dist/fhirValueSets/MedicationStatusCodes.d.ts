/**
 * Medication Status Codes
 */
export declare const MedicationStatusCodes: {
    /**
     * active: The medication is available for use.
     */
    readonly Active: "active";
    /**
     * entered-in-error: The medication was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * inactive: The medication is not available for use.
     */
    readonly Inactive: "inactive";
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatusCodeType = typeof MedicationStatusCodes[keyof typeof MedicationStatusCodes];
//# sourceMappingURL=MedicationStatusCodes.d.ts.map