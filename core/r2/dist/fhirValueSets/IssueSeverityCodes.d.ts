/**
 * How the issue affects the success of the action.
 */
export declare const IssueSeverityCodes: {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    readonly Error: "error";
    /**
     * fatal: The issue caused the action to fail, and no further checking could be performed.
     */
    readonly Fatal: "fatal";
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    readonly Information: "information";
    /**
     * warning: The issue is not important enough to cause the action to fail, but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    readonly Warning: "warning";
};
/**
 * How the issue affects the success of the action.
 */
export declare type IssueSeverityCodeType = typeof IssueSeverityCodes[keyof typeof IssueSeverityCodes];
//# sourceMappingURL=IssueSeverityCodes.d.ts.map