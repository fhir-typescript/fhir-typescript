/**
 * The status of the location.
 */
export declare const EncounterLocationStatusCodes: {
    /**
     * active: The patient is currently at this location, or was between the period specified.
     * A system may update these records when the patient leaves the location to either reserved, or completed
     */
    readonly Active: "active";
    /**
     * completed: The patient was at this location during the period specified.
     * Not to be used when the patient is currently at the location
     */
    readonly Completed: "completed";
    /**
     * planned: The patient is planned to be moved to this location at some point in the future.
     */
    readonly Planned: "planned";
    /**
     * reserved: This location is held empty for this patient.
     */
    readonly Reserved: "reserved";
};
/**
 * The status of the location.
 */
export declare type EncounterLocationStatusCodeType = typeof EncounterLocationStatusCodes[keyof typeof EncounterLocationStatusCodes];
//# sourceMappingURL=EncounterLocationStatusCodes.d.ts.map