import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes a Claim Processing Outcome codes.
 */
export declare type RemittanceOutcomeCodingType = {
    /**
     * complete: The processing has completed without errors
     */
    ProcessingComplete: CodingArgs;
    /**
     * error: One or more errors have been detected in the Claim
     */
    Error: CodingArgs;
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    PartialProcessing: CodingArgs;
};
/**
 * This value set includes a Claim Processing Outcome codes.
 */
export declare const RemittanceOutcomeCodings: RemittanceOutcomeCodingType;
//# sourceMappingURL=RemittanceOutcomeCodings.d.ts.map