/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare const MessageReasonEncounterCodes: {
    /**
     * absent: The patient has temporarily left the institution.
     */
    readonly Absent: "absent";
    /**
     * admit: The patient has been admitted.
     */
    readonly Admit: "admit";
    /**
     * discharge: The patient has been discharged.
     */
    readonly Discharge: "discharge";
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    readonly Edit: "edit";
    /**
     * moved: The patient has been moved to a new location.
     */
    readonly Moved: "moved";
    /**
     * return: The patient has returned from a temporary absence.
     */
    readonly Returned: "return";
};
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export declare type MessageReasonEncounterCodeType = typeof MessageReasonEncounterCodes[keyof typeof MessageReasonEncounterCodes];
//# sourceMappingURL=MessageReasonEncounterCodes.d.ts.map