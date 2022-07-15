/**
 * The outcome of the processing.
 */
export declare const RemittanceOutcomeCodes: {
    /**
     * complete: The processing completed without errors.
     */
    readonly Complete: "complete";
    /**
     * error: The processing identified errors.
     */
    readonly Error: "error";
    /**
     * partial: No errors have been detected and some of the adjudication has been performed.
     */
    readonly Partial: "partial";
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    readonly Queued: "queued";
};
/**
 * The outcome of the processing.
 */
export declare type RemittanceOutcomeCodeType = typeof RemittanceOutcomeCodes[keyof typeof RemittanceOutcomeCodes];
//# sourceMappingURL=RemittanceOutcomeCodes.d.ts.map