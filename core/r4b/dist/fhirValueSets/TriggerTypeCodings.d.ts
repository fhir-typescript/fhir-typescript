import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of trigger.
 */
export declare type TriggerTypeCodingType = {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed.
     */
    DataAccessEnded: CodingArgs;
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed.
     */
    DataAccessed: CodingArgs;
    /**
     * data-added: The trigger occurs whenever data of a particular type is added.
     */
    DataAdded: CodingArgs;
    /**
     * data-changed: The trigger occurs whenever data of a particular type is changed in any way, either added, modified, or removed.
     */
    DataChanged: CodingArgs;
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified.
     */
    DataUpdated: CodingArgs;
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed.
     */
    DataRemoved: CodingArgs;
    /**
     * named-event: The trigger occurs in response to a specific named event, and no other information about the trigger is specified. Named events are completely pre-coordinated, and the formal semantics of the trigger are not provided.
     */
    NamedEvent: CodingArgs;
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule. A periodic event cannot have any data elements, but may have a name assigned as a shorthand for the event.
     */
    Periodic: CodingArgs;
};
/**
 * The type of trigger.
 */
export declare const TriggerTypeCodings: TriggerTypeCodingType;
//# sourceMappingURL=TriggerTypeCodings.d.ts.map