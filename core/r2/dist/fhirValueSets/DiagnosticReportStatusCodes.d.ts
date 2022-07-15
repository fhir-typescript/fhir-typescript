/**
 * The status of the diagnostic report as a whole.
 */
export declare const DiagnosticReportStatusCodes: {
    /**
     * appended: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed.
     */
    readonly Appended: "appended";
    /**
     * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: "cancelled";
    /**
     * corrected: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed
     */
    readonly Corrected: "corrected";
    /**
     * entered-in-error: The report has been withdrawn following a previous final release.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * final: The report is complete and verified by an authorized person.
     */
    readonly Final: "final";
    /**
     * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    readonly Partial: "partial";
    /**
     * registered: The existence of the report is registered, but there is nothing yet available.
     */
    readonly Registered: "registered";
};
/**
 * The status of the diagnostic report as a whole.
 */
export declare type DiagnosticReportStatusCodeType = typeof DiagnosticReportStatusCodes[keyof typeof DiagnosticReportStatusCodes];
//# sourceMappingURL=DiagnosticReportStatusCodes.d.ts.map