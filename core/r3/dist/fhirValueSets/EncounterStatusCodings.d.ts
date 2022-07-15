import { CodingArgs } from '../fhir/Coding.js';
/**
 * Current state of the encounter
 */
export declare type EncounterStatusCodingType = {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    Arrived: CodingArgs;
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    Cancelled: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * finished: The Encounter has ended.
     */
    Finished: CodingArgs;
    /**
     * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    InProgress: CodingArgs;
    /**
     * onleave: The Encounter has begun, but the patient is temporarily on leave.
     */
    OnLeave: CodingArgs;
    /**
     * planned: The Encounter has not yet started.
     */
    Planned: CodingArgs;
    /**
     * triaged: The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    Triaged: CodingArgs;
    /**
     * unknown: The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    Unknown: CodingArgs;
};
/**
 * Current state of the encounter
 */
export declare const EncounterStatusCodings: EncounterStatusCodingType;
//# sourceMappingURL=EncounterStatusCodings.d.ts.map