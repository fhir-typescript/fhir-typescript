import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the measure report.
 */
export declare type MeasureReportStatusCodingType = {
    /**
     * complete: The report is complete and ready for use.
     */
    Complete: CodingArgs;
    /**
     * error: An error occurred attempting to generate the report.
     */
    Error: CodingArgs;
    /**
     * pending: The report is currently being generated.
     */
    Pending: CodingArgs;
};
/**
 * The status of the measure report.
 */
export declare const MeasureReportStatusCodings: MeasureReportStatusCodingType;
//# sourceMappingURL=MeasureReportStatusCodings.d.ts.map