import { Coding } from '../fhir/Coding.js';
/**
 * The results of executing an action.
 */
export declare const ReportActionResultCodesCodings: {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    readonly Error: Coding;
    /**
     * fail: The action failed.
     */
    readonly Fail: Coding;
    /**
     * pass: The action was successful.
     */
    readonly Pass: Coding;
    /**
     * skip: The action was skipped.
     */
    readonly Skip: Coding;
    /**
     * warning: The action passed but with warnings.
     */
    readonly Warning: Coding;
};
/**
 * The results of executing an action.
 */
export declare type ReportActionResultCodesCodingType = typeof ReportActionResultCodesCodings;
//# sourceMappingURL=ReportActionResultCodesCodings.d.ts.map