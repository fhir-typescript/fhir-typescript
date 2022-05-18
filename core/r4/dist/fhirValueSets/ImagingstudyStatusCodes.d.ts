/**
 * The status of the ImagingStudy.
 */
export declare const ImagingstudyStatusCodes: {
    /**
     * available: At least one instance has been associated with this imaging study.
     */
    readonly Available: "available";
    /**
     * cancelled: The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: "cancelled";
    /**
     * entered-in-error: The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * registered: The existence of the imaging study is registered, but there is nothing yet available.
     */
    readonly Registered: "registered";
    /**
     * unknown: The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: "unknown";
};
/**
 * The status of the ImagingStudy.
 */
export declare type ImagingstudyStatusCodeType = typeof ImagingstudyStatusCodes[keyof typeof ImagingstudyStatusCodes];
//# sourceMappingURL=ImagingstudyStatusCodes.d.ts.map