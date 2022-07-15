import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of trigger
 */
export declare type TriggerTypeCodingType = {
    /**
     * data-access-ended: The trigger occurs whenever access to data of a particular type is completed
     */
    DataAccessEnded: CodingArgs;
    /**
     * data-accessed: The trigger occurs whenever data of a particular type is accessed
     */
    DataAccessed: CodingArgs;
    /**
     * data-added: The trigger occurs whenever data of a particular type is added
     */
    DataAdded: CodingArgs;
    /**
     * data-modified: The trigger occurs whenever data of a particular type is modified
     */
    DataModified: CodingArgs;
    /**
     * data-removed: The trigger occurs whenever data of a particular type is removed
     */
    DataRemoved: CodingArgs;
    /**
     * named-event: The trigger occurs in response to a specific named event
     */
    NamedEvent: CodingArgs;
    /**
     * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule
     */
    Periodic: CodingArgs;
};
/**
 * The type of trigger
 */
export declare const TriggerTypeCodings: TriggerTypeCodingType;
//# sourceMappingURL=TriggerTypeCodings.d.ts.map