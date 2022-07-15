/**
 * The results of executing an action.
 */
export declare const ReportActionResultCodes: {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    readonly Error: "error";
    /**
     * fail: The action failed.
     */
    readonly Fail: "fail";
    /**
     * pass: The action was successful.
     */
    readonly Pass: "pass";
    /**
     * skip: The action was skipped.
     */
    readonly Skip: "skip";
    /**
     * warning: The action passed but with warnings.
     */
    readonly Warning: "warning";
};
/**
 * The results of executing an action.
 */
export declare type ReportActionResultCodeType = typeof ReportActionResultCodes[keyof typeof ReportActionResultCodes];
//# sourceMappingURL=ReportActionResultCodes.d.ts.map