import { CodingArgs } from '../fhir/Coding.js';
/**
 * The outcome of the processing.
 */
export declare type RemittanceOutcomeCodingType = {
    /**
     * complete: The processing completed without errors.
     */
    Complete: CodingArgs;
    /**
     * error: The processing identified errors.
     */
    Error: CodingArgs;
    /**
     * partial: No errors have been detected and some of the adjudication has been performed.
     */
    Partial: CodingArgs;
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    Queued: CodingArgs;
};
/**
 * The outcome of the processing.
 */
export declare const RemittanceOutcomeCodings: RemittanceOutcomeCodingType;
//# sourceMappingURL=RemittanceOutcomeCodings.d.ts.map