import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the diagnostic report as a whole.
 */
export declare type DiagnosticReportStatusCodingType = {
    /**
     * appended: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed.
     */
    Appended: CodingArgs;
    /**
     * cancelled: The report is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: CodingArgs;
    /**
     * corrected: The report has been modified subsequent to being Final, and is complete and verified by an authorized person. New content has been added, but existing content hasn't changed
     */
    Corrected: CodingArgs;
    /**
     * entered-in-error: The report has been withdrawn following a previous final release.
     */
    EnteredInError: CodingArgs;
    /**
     * final: The report is complete and verified by an authorized person.
     */
    Final: CodingArgs;
    /**
     * partial: This is a partial (e.g. initial, interim or preliminary) report: data in the report may be incomplete or unverified.
     */
    Partial: CodingArgs;
    /**
     * registered: The existence of the report is registered, but there is nothing yet available.
     */
    Registered: CodingArgs;
};
/**
 * The status of the diagnostic report as a whole.
 */
export declare const DiagnosticReportStatusCodings: DiagnosticReportStatusCodingType;
//# sourceMappingURL=DiagnosticReportStatusCodings.d.ts.map