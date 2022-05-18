import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare const RemittanceOutcomeCodings: {
    /**
     * complete: The processing has completed without errors
     */
    readonly ProcessingComplete: Coding;
    /**
     * error: One or more errors have been detected in the Claim
     */
    readonly Error: Coding;
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    readonly PartialProcessing: Coding;
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    readonly Queued: Coding;
};
/**
 * This value set includes Claim Processing Outcome codes.
 */
export declare type RemittanceOutcomeCodingType = typeof RemittanceOutcomeCodings;
//# sourceMappingURL=RemittanceOutcomeCodings.d.ts.map