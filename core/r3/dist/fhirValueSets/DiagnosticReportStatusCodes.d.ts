/**
 * The status of the diagnostic report as a whole.
 */
export declare const DiagnosticReportStatusCodes: {
    /**
     * amended: Subsequent to being final, the report has been modified.  This includes any change in the results, diagnosis, narrative text, or other content of a report that has been issued.
     */
    readonly Amended: "amended";
    /**
     * appended: Subsequent to being final, the report has been modified by adding new content. The existing content is unchanged.
     */
    readonly Appended: "appended";
    /**
     * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: "cancelled";
    /**
     * corrected: Subsequent to being final, the report has been modified  to correct an error in the report or referenced results.
     */
    readonly Corrected: "corrected";
    /**
     * entered-in-error: The report has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
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
     * preliminary: Verified early results are available, but not all  results are final.
     */
    readonly Preliminary: "preliminary";
    /**
     * registered: The existence of the report is registered, but there is nothing yet available.
     */
    readonly Registered: "registered";
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: "unknown";
};
/**
 * The status of the diagnostic report as a whole.
 */
export declare type DiagnosticReportStatusCodeType = typeof DiagnosticReportStatusCodes[keyof typeof DiagnosticReportStatusCodes];
//# sourceMappingURL=DiagnosticReportStatusCodes.d.ts.map