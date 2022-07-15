/**
 * The status of the measure report.
 */
export declare const MeasureReportStatusCodes: {
    /**
     * complete: The report is complete and ready for use.
     */
    readonly Complete: "complete";
    /**
     * error: An error occurred attempting to generate the report.
     */
    readonly Error: "error";
    /**
     * pending: The report is currently being generated.
     */
    readonly Pending: "pending";
};
/**
 * The status of the measure report.
 */
export declare type MeasureReportStatusCodeType = typeof MeasureReportStatusCodes[keyof typeof MeasureReportStatusCodes];
//# sourceMappingURL=MeasureReportStatusCodes.d.ts.map