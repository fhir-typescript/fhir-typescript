import { CodingArgs } from '../fhir/Coding.js';
/**
 * The current status of the test report.
 */
export declare type ReportStatusCodingType = {
    /**
     * completed: All test operations have completed
     */
    Completed: CodingArgs;
    /**
     * entered-in-error: This test report was entered or created in error
     */
    EnteredInError: CodingArgs;
    /**
     * in-progress: A test operations is currently executing
     */
    InProgress: CodingArgs;
    /**
     * stopped: The test script execution was manually stopped
     */
    Stopped: CodingArgs;
    /**
     * waiting: A test operation is waiting for an external client request
     */
    Waiting: CodingArgs;
};
/**
 * The current status of the test report.
 */
export declare const ReportStatusCodings: ReportStatusCodingType;
//# sourceMappingURL=ReportStatusCodings.d.ts.map