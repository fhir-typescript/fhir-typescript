import { CodingArgs } from '../fhir/Coding.js';
/**
 * The current state of the list
 */
export declare type ListStatusCodingType = {
    /**
     * current: The list is considered to be an active part of the patient's record.
     */
    Current: CodingArgs;
    /**
     * entered-in-error: The list was never accurate.  It is retained for medico-legal purposes only.
     */
    EnteredInError: CodingArgs;
    /**
     * retired: The list is "old" and should no longer be considered accurate or relevant.
     */
    Retired: CodingArgs;
};
/**
 * The current state of the list
 */
export declare const ListStatusCodings: ListStatusCodingType;
//# sourceMappingURL=ListStatusCodings.d.ts.map