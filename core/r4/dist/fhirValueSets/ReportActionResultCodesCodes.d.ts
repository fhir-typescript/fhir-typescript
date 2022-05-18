/**
 * The results of executing an action.
 */
export declare const ReportActionResultCodesCodes: {
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
export declare type ReportActionResultCodesCodeType = typeof ReportActionResultCodesCodes[keyof typeof ReportActionResultCodesCodes];
//# sourceMappingURL=ReportActionResultCodesCodes.d.ts.map