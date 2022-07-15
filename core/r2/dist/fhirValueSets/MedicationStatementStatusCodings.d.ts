import { CodingArgs } from '../fhir/Coding.js';
/**
 * A set of codes indicating the current status of a MedicationStatement.
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
     * entered-in-error: The statement was entered in error.
     */
    EnteredInError: CodingArgs;
    /**
     * intended: The medication may be taken at some time in the future.
     */
    Intended: CodingArgs;
};
/**
 * A set of codes indicating the current status of a MedicationStatement.
 */
export declare const MedicationStatementStatusCodings: MedicationStatementStatusCodingType;
//# sourceMappingURL=MedicationStatementStatusCodings.d.ts.map