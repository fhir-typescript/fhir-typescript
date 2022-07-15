import { CodingArgs } from '../fhir/Coding.js';
/**
 * A coded concept indicating the current status of a MedicationStatement.
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
     * entered-in-error: The statement was recorded incorrectly.
     */
    EnteredInError: CodingArgs;
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: CodingArgs;
    /**
     * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
     */
    OnHold: CodingArgs;
    /**
     * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
     */
    Stopped: CodingArgs;
};
/**
 * A coded concept indicating the current status of a MedicationStatement.
 */
export declare const MedicationStatementStatusCodings: MedicationStatementStatusCodingType;
//# sourceMappingURL=MedicationStatementStatusCodings.d.ts.map