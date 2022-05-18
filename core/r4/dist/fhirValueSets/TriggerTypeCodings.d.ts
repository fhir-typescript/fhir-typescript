import { Coding } from '../fhir/Coding.js';
/**
 * The type of trigger.
 */
export declare const TriggerTypeCodings: {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    readonly DataAccessEnded: Coding;
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    readonly DataAccessed: Coding;
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    readonly DataAdded: Coding;
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    readonly DataChanged: Coding;
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    readonly DataUpdated: Coding;
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    readonly DataRemoved: Coding;
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    readonly NamedEvent: Coding;
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    readonly Periodic: Coding;
};
/**
 * The type of trigger.
 */
export declare type TriggerTypeCodingType = typeof TriggerTypeCodings;
//# sourceMappingURL=TriggerTypeCodings.d.ts.map