/**
 * The type of trigger
 */
export declare const TriggerTypeCodes: {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed
     */
    readonly DataAccessEnded: "data-access-ended";
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed
     */
    readonly DataAccessed: "data-accessed";
    /**
     * data-added: The trigger occurs whenever data of a particular type is added
     */
    readonly DataAdded: "data-added";
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified
     */
    readonly DataModified: "data-modified";
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed
     */
    readonly DataRemoved: "data-removed";
    /**
     * named-event: The trigger occurs in response to a specific named event
     */
    readonly NamedEvent: "named-event";
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule
     */
    readonly Periodic: "periodic";
};
/**
 * The type of trigger
 */
export declare type TriggerTypeCodeType = typeof TriggerTypeCodes[keyof typeof TriggerTypeCodes];
//# sourceMappingURL=TriggerTypeCodes.d.ts.map