import { CodingArgs } from '../fhir/Coding.js';
/**
 * The results of executing an action.
 */
export declare type ReportActionResultCodingType = {
    /**
     * error: The action encountered a fatal error and the engine was unable to process.
     */
    Error: CodingArgs;
    /**
     * fail: The action failed.
     */
    Fail: CodingArgs;
    /**
     * pass: The action was successful.
     */
    Pass: CodingArgs;
    /**
     * skip: The action was skipped.
     */
    Skip: CodingArgs;
    /**
     * warning: The action passed but with warnings.
     */
    Warning: CodingArgs;
};
/**
 * The results of executing an action.
 */
export declare const ReportActionResultCodings: ReportActionResultCodingType;
//# sourceMappingURL=ReportActionResultCodings.d.ts.map