import { CodingArgs } from '../fhir/Coding.js';
/**
 * Codes providing the status of an observation.
 */
export declare type ObservationStatusCodingType = {
    /**
     * amended: The observation has been modified subsequent to being Final, and is complete and verified by an authorized person.
     */
    Amended: CodingArgs;
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: CodingArgs;
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.
     */
    EnteredInError: CodingArgs;
    /**
     * final: The observation is complete and verified by an authorized person.
     */
    Final: CodingArgs;
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    Preliminary: CodingArgs;
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    Registered: CodingArgs;
    /**
     * unknown: The observation status is unknown.  Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    UnknownStatus: CodingArgs;
};
/**
 * Codes providing the status of an observation.
 */
export declare const ObservationStatusCodings: ObservationStatusCodingType;
//# sourceMappingURL=ObservationStatusCodings.d.ts.map