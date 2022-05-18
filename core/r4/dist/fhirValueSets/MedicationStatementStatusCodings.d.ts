import { Coding } from '../fhir/Coding.js';
/**
 * Medication Status Codes
 */
export declare const MedicationStatementStatusCodings: {
    /**
     * active: The medication is still being taken.
     */
    readonly Active: Coding;
    /**
     * completed: The medication is no longer being taken.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    readonly EnteredInError: Coding;
    /**
     * intended: The medication may be taken at some time in the future.
     */
    readonly Intended: Coding;
    /**
     * not-taken: The medication was not consumed by the patient
     */
    readonly NotTaken: Coding;
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    readonly OnHold: Coding;
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    readonly Stopped: Coding;
    /**
     * unknown: The state of the medication use is not currently known.
     */
    readonly Unknown: Coding;
};
/**
 * Medication Status Codes
 */
export declare type MedicationStatementStatusCodingType = typeof MedicationStatementStatusCodings;
//# sourceMappingURL=MedicationStatementStatusCodings.d.ts.map