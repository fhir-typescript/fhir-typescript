import { CodingArgs } from '../fhir/Coding.js';
/**
 * Indicates whether the event succeeded or failed
 */
export declare type AuditEventOutcomeCodingType = {
    /**
     * 0: The operation completed successfully (whether with warnings or not).
     */
    Success: CodingArgs;
    /**
     * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
     */
    MajorFailure: CodingArgs;
    /**
     * 4: The action was not successful due to some kind of catered for error (often equivalent to an HTTP 400 response).
     */
    MinorFailure: CodingArgs;
    /**
     * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
     */
    SeriousFailure: CodingArgs;
};
/**
 * Indicates whether the event succeeded or failed
 */
export declare const AuditEventOutcomeCodings: AuditEventOutcomeCodingType;
//# sourceMappingURL=AuditEventOutcomeCodings.d.ts.map