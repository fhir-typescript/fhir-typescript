/**
 * This value set includes a Claim Processing Outcome codes.
 */
export declare const RemittanceOutcomeCodes: {
    /**
     * complete: The processing has completed without errors
     */
    readonly ProcessingComplete: "complete";
    /**
     * error: One or more errors have been detected in the Claim
     */
    readonly Error: "error";
    /**
     * partial: No errors have been detected in the Claim and some of the adjudication has been performed.
     */
    readonly PartialProcessing: "partial";
};
/**
 * This value set includes a Claim Processing Outcome codes.
 */
export declare type RemittanceOutcomeCodeType = typeof RemittanceOutcomeCodes[keyof typeof RemittanceOutcomeCodes];
//# sourceMappingURL=RemittanceOutcomeCodes.d.ts.map