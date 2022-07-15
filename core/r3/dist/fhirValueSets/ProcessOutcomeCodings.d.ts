import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Process Outcome codes.
 */
export declare type ProcessOutcomeCodingType = {
    /**
     * complete: The requested processing has completed.
     */
    Complete: CodingArgs;
    /**
     * error: The requested processing has terminated with some errors being found.
     */
    Error: CodingArgs;
    /**
     * pended: The requested processing has been suspended.
     */
    Pended: CodingArgs;
};
/**
 * This value set includes sample Process Outcome codes.
 */
export declare const ProcessOutcomeCodings: ProcessOutcomeCodingType;
//# sourceMappingURL=ProcessOutcomeCodings.d.ts.map