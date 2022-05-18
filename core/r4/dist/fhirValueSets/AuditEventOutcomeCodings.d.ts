import { Coding } from '../fhir/Coding.js';
/**
 * Indicates whether the event succeeded or failed.
 */
export declare const AuditEventOutcomeCodings: {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    readonly Success: Coding;
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    readonly MajorFailure: Coding;
    /**
     * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
     */
    readonly MinorFailure: Coding;
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    readonly SeriousFailure: Coding;
};
/**
 * Indicates whether the event succeeded or failed.
 */
export declare type AuditEventOutcomeCodingType = typeof AuditEventOutcomeCodings;
//# sourceMappingURL=AuditEventOutcomeCodings.d.ts.map