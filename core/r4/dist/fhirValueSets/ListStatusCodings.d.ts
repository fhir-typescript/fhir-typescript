import { Coding } from '../fhir/Coding.js';
/**
 * The current state of the list.
 */
export declare const ListStatusCodings: {
    /**
     * current: The list is considered to be an active part of the patient's record.
     */
    readonly Current: Coding;
    /**
     * entered-in-error: The list was never accurate.  It is retained for medico-legal purposes only.
     */
    readonly EnteredInError: Coding;
    /**
     * retired: The list is "old" and should no longer be considered accurate or relevant.
     */
    readonly Retired: Coding;
};
/**
 * The current state of the list.
 */
export declare type ListStatusCodingType = typeof ListStatusCodings;
//# sourceMappingURL=ListStatusCodings.d.ts.map