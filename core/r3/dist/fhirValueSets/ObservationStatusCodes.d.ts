/**
 * Codes providing the status of an observation.
 */
export declare const ObservationStatusCodes: {
    /**
     * amended: Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.
     */
    readonly Amended: "amended";
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: "cancelled";
    /**
     * corrected: Subsequent to being Final, the observation has been modified to correct an error in the test result.
     */
    readonly Corrected: "corrected";
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".)
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * final: The observation is complete.
     */
    readonly Final: "final";
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    readonly Preliminary: "preliminary";
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    readonly Registered: "registered";
    /**
     * unknown: The authoring system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring system does not know which.
     */
    readonly Unknown: "unknown";
};
/**
 * Codes providing the status of an observation.
 */
export declare type ObservationStatusCodeType = typeof ObservationStatusCodes[keyof typeof ObservationStatusCodes];
//# sourceMappingURL=ObservationStatusCodes.d.ts.map