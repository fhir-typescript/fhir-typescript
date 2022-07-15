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
};
/**
 * The outcome of the processing.
 */
export declare type RemittanceOutcomeCodeType = typeof RemittanceOutcomeCodes[keyof typeof RemittanceOutcomeCodes];
//# sourceMappingURL=RemittanceOutcomeCodes.d.ts.map