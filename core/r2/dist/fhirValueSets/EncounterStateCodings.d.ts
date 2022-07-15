import { CodingArgs } from '../fhir/Coding.js';
/**
 * Current state of the encounter
 */
export declare type EncounterStateCodingType = {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    Arrived: CodingArgs;
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    Cancelled: CodingArgs;
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
};
/**
 * Current state of the encounter
 */
export declare const EncounterStateCodings: EncounterStateCodingType;
//# sourceMappingURL=EncounterStateCodings.d.ts.map