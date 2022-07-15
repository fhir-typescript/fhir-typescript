/**
 * Codes providing the status of an observation.
 */
export declare const ObservationStatusCodes: {
    /**
     * amended: The observation has been modified subsequent to being Final, and is complete and verified by an authorized person.
     */
    readonly Amended: "amended";
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: "cancelled";
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * final: The observation is complete and verified by an authorized person.
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
     * unknown: The observation status is unknown.  Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    readonly UnknownStatus: "unknown";
};
/**
 * Codes providing the status of an observation.
 */
export declare type ObservationStatusCodeType = typeof ObservationStatusCodes[keyof typeof ObservationStatusCodes];
//# sourceMappingURL=ObservationStatusCodes.d.ts.map