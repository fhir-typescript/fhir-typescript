/**
 * Current state of the encounter.
 */
export declare const EncounterStatusCodes: {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    readonly Arrived: "arrived";
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    readonly Cancelled: "cancelled";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * finished: The Encounter has ended.
     */
    readonly Finished: "finished";
    /**
     * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    readonly InProgress: "in-progress";
    /**
     * onleave: The Encounter has begun, but the patient is temporarily on leave.
     */
    readonly OnLeave: "onleave";
    /**
     * planned: The Encounter has not yet started.
     */
    readonly Planned: "planned";
    /**
     * triaged: The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    readonly Triaged: "triaged";
    /**
     * unknown: The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    readonly Unknown: "unknown";
};
/**
 * Current state of the encounter.
 */
export declare type EncounterStatusCodeType = typeof EncounterStatusCodes[keyof typeof EncounterStatusCodes];
//# sourceMappingURL=EncounterStatusCodes.d.ts.map