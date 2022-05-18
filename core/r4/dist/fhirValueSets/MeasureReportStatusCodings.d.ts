import { Coding } from '../fhir/Coding.js';
/**
 * The status of the measure report.
 */
export declare const MeasureReportStatusCodings: {
    /**
     * complete: The report is complete and ready for use.
     */
    readonly Complete: Coding;
    /**
     * error: An error occurred attempting to generate the report.
     */
    readonly Error: Coding;
    /**
     * pending: The report is currently being generated.
     */
    readonly Pending: Coding;
};
/**
 * The status of the measure report.
 */
export declare type MeasureReportStatusCodingType = typeof MeasureReportStatusCodings;
//# sourceMappingURL=MeasureReportStatusCodings.d.ts.map