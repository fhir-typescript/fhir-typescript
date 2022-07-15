import { CodingArgs } from '../fhir/Coding.js';
/**
 * The reported execution result.
 */
export declare type ReportResultCodingType = {
    /**
     * fail: One or more test operations failed one or more asserts.
     */
    Fail: CodingArgs;
    /**
     * pass: All test operations successfully passed all asserts.
     */
    Pass: CodingArgs;
    /**
     * pending: One or more test operations is pending execution completion.
     */
    Pending: CodingArgs;
};
/**
 * The reported execution result.
 */
export declare const ReportResultCodings: ReportResultCodingType;
//# sourceMappingURL=ReportResultCodings.d.ts.map