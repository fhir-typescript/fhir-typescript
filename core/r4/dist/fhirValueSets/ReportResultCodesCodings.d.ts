import { Coding } from '../fhir/Coding.js';
/**
 * The reported execution result.
 */
export declare const ReportResultCodesCodings: {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    readonly Fail: Coding;
    /**
     * pass: All test operations successfully passed all asserts.
     */
    readonly Pass: Coding;
    /**
     * pending: One or more test operations is pending execution completion.
     */
    readonly Pending: Coding;
};
/**
 * The reported execution result.
 */
export declare type ReportResultCodesCodingType = typeof ReportResultCodesCodings;
//# sourceMappingURL=ReportResultCodesCodings.d.ts.map