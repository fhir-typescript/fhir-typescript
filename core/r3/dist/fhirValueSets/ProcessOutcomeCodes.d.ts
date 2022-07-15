/**
 * This value set includes sample Process Outcome codes.
 */
export declare const ProcessOutcomeCodes: {
    /**
     * complete: The requested processing has completed.
     */
    readonly Complete: "complete";
    /**
     * error: The requested processing has terminated with some errors being found.
     */
    readonly Error: "error";
    /**
     * pended: The requested processing has been suspended.
     */
    readonly Pended: "pended";
};
/**
 * This value set includes sample Process Outcome codes.
 */
export declare type ProcessOutcomeCodeType = typeof ProcessOutcomeCodes[keyof typeof ProcessOutcomeCodes];
//# sourceMappingURL=ProcessOutcomeCodes.d.ts.map