/**
 * Indicates whether the event succeeded or failed.
 */
export declare const AuditEventOutcomeCodes: {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    readonly Success: "0";
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    readonly MajorFailure: "12";
    /**
     * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    readonly MinorFailure: "4";
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    readonly SeriousFailure: "8";
};
/**
 * Indicates whether the event succeeded or failed.
 */
export declare type AuditEventOutcomeCodeType = typeof AuditEventOutcomeCodes[keyof typeof AuditEventOutcomeCodes];
//# sourceMappingURL=AuditEventOutcomeCodes.d.ts.map