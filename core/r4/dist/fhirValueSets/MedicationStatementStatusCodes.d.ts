/**
 * Medication Status Codes
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
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * intended: The medication may be taken at some time in the future.
     */
    readonly Intended: "intended";
    /**
     * not-taken: The medication was not consumed by the patient
     */
    readonly NotTaken: "not-taken";
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    readonly OnHold: "on-hold";
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    readonly Stopped: "stopped";
    /**
     * unknown: The state of the medication use is not currently known.
     */
    readonly Unknown: "unknown";
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatementStatusCodeType = typeof MedicationStatementStatusCodes[keyof typeof MedicationStatementStatusCodes];
//# sourceMappingURL=MedicationStatementStatusCodes.d.ts.map