import { CodingArgs } from '../fhir/Coding.js';
/**
 * Medication Status Codes
 */
export declare type MedicationStatementStatusCodingType = {
    /**
     * active: The medication is still being taken.
     */
    Active: CodingArgs;
    /**
     * completed: The medication is no longer being taken.
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: Some of the actions that are implied by the medication statement may have occurred.  For example, the patient may have taken some of the medication.  Clinical decision support systems should take this status into account.
     */
    EnteredInError: CodingArgs;
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: CodingArgs;
    /**
     * not-taken: The medication was not consumed by the patient
     */
    NotTaken: CodingArgs;
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called 'suspended'.
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred. This should not be used if the statement was entered in error.
     */
    Stopped: CodingArgs;
    /**
     * unknown: The state of the medication use is not currently known.
     */
    Unknown: CodingArgs;
};
/**
 * Medication Status Codes
 */
export declare const MedicationStatementStatusCodings: MedicationStatementStatusCodingType;
//# sourceMappingURL=MedicationStatementStatusCodings.d.ts.map