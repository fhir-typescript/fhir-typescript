/**
 * The type of trigger.
 */
export declare const TriggerTypeCodes: {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    readonly DataAccessEnded: "data-access-ended";
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    readonly DataAccessed: "data-accessed";
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    readonly DataAdded: "data-added";
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    readonly DataChanged: "data-changed";
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    readonly DataUpdated: "data-modified";
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    readonly DataRemoved: "data-removed";
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    readonly NamedEvent: "named-event";
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    readonly Periodic: "periodic";
};
/**
 * The type of trigger.
 */
export declare type TriggerTypeCodeType = typeof TriggerTypeCodes[keyof typeof TriggerTypeCodes];
//# sourceMappingURL=TriggerTypeCodes.d.ts.map