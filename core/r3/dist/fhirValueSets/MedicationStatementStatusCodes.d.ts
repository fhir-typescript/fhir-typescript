/**
 * A coded concept indicating the current status of a MedicationStatement.
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
     * entered-in-error: The statement was recorded incorrectly.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * intended: The medication may be taken at some time in the future.
     */
    readonly Intended: "intended";
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    readonly Stopped: "stopped";
};
/**
 * A coded concept indicating the current status of a MedicationStatement.
 */
export declare type MedicationStatementStatusCodeType = typeof MedicationStatementStatusCodes[keyof typeof MedicationStatementStatusCodes];
//# sourceMappingURL=MedicationStatementStatusCodes.d.ts.map