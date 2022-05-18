import { Coding } from '../fhir/Coding.js';
/**
 * Current state of the encounter.
 */
export declare const EncounterStatusCodings: {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    readonly Arrived: Coding;
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    readonly Cancelled: Coding;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: Coding;
    /**
     * finished: The Encounter has ended.
     */
    readonly Finished: Coding;
    /**
     * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    readonly InProgress: Coding;
    /**
     * onleave: The Encounter has begun, but the patient is temporarily on leave.
     */
    readonly OnLeave: Coding;
    /**
     * planned: The Encounter has not yet started.
     */
    readonly Planned: Coding;
    /**
     * triaged: The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    readonly Triaged: Coding;
    /**
     * unknown: The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    readonly Unknown: Coding;
};
/**
 * Current state of the encounter.
 */
export declare type EncounterStatusCodingType = typeof EncounterStatusCodings;
//# sourceMappingURL=EncounterStatusCodings.d.ts.map