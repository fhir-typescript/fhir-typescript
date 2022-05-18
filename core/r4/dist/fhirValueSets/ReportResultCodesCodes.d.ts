/**
 * The reported execution result.
 */
export declare const ReportResultCodesCodes: {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    readonly Fail: "fail";
    /**
     * pass: All test operations successfully passed all asserts.
     */
    readonly Pass: "pass";
    /**
     * pending: One or more test operations is pending execution completion.
     */
    readonly Pending: "pending";
};
/**
 * The reported execution result.
 */
export declare type ReportResultCodesCodeType = typeof ReportResultCodesCodes[keyof typeof ReportResultCodesCodes];
//# sourceMappingURL=ReportResultCodesCodes.d.ts.map