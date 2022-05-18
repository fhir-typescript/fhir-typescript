import { Coding } from '../fhir/Coding.js';
/**
 * The current status of the test report.
 */
export declare const ReportStatusCodesCodings: {
    /**
     * completed: All test operations have completed.
     */
    readonly Completed: Coding;
    /**
     * entered-in-error: This test report was entered or created in error.
     */
    readonly EnteredInError: Coding;
    /**
     * in-progress: A test operations is currently executing.
     */
    readonly InProgress: Coding;
    /**
     * stopped: The test script execution was manually stopped.
     */
    readonly Stopped: Coding;
    /**
     * waiting: A test operation is waiting for an external client request.
     */
    readonly Waiting: Coding;
};
/**
 * The current status of the test report.
 */
export declare type ReportStatusCodesCodingType = typeof ReportStatusCodesCodings;
//# sourceMappingURL=ReportStatusCodesCodings.d.ts.map