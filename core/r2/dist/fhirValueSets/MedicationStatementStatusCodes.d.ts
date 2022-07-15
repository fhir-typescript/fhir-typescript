/**
 * A set of codes indicating the current status of a MedicationStatement.
 */
export declare const MedicationStatementStatusCodes: {
    /**
     * active: The medication is still being taken.
     */
    readonly Active: "active";
    /**
     * completed: The medication is no longer being taken.
     */
    readonly Completed: "completed";
    /**
     * entered-in-error: The statement was entered in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * intended: The medication may be taken at some time in the future.
     */
    readonly Intended: "intended";
};
/**
 * A set of codes indicating the current status of a MedicationStatement.
 */
export declare type MedicationStatementStatusCodeType = typeof MedicationStatementStatusCodes[keyof typeof MedicationStatementStatusCodes];
//# sourceMappingURL=MedicationStatementStatusCodes.d.ts.map