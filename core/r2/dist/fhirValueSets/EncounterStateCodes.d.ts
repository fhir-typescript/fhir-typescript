/**
 * Current state of the encounter
 */
export declare const EncounterStateCodes: {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    readonly Arrived: "arrived";
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    readonly Cancelled: "cancelled";
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
};
/**
 * Current state of the encounter
 */
export declare type EncounterStateCodeType = typeof EncounterStateCodes[keyof typeof EncounterStateCodes];
//# sourceMappingURL=EncounterStateCodes.d.ts.map