import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines the types of relationships between actions
 */
export declare type ActionRelationshipTypeCodingType = {
    /**
     * after: The action must be performed after the related action
     */
    After: CodingArgs;
    /**
     * after-end: The action must be performed after the end of the related action
     */
    AfterEnd: CodingArgs;
    /**
     * after-start: The action must be performed after the start of the related action
     */
    AfterStart: CodingArgs;
    /**
     * before: The action must be performed before the related action
     */
    Before: CodingArgs;
    /**
     * before-end: The action must be performed before the end of the related action
     */
    BeforeEnd: CodingArgs;
    /**
     * before-start: The action must be performed before the start of the related action
     */
    BeforeStart: CodingArgs;
    /**
     * concurrent: The action must be performed concurrent with the related action
     */
    Concurrent: CodingArgs;
    /**
     * concurrent-with-end: The action must be performed concurrent with the end of the related action
     */
    ConcurrentWithEnd: CodingArgs;
    /**
     * concurrent-with-start: The action must be performed concurrent with the start of the related action
     */
    ConcurrentWithStart: CodingArgs;
};
/**
 * Defines the types of relationships between actions
 */
export declare const ActionRelationshipTypeCodings: ActionRelationshipTypeCodingType;
//# sourceMappingURL=ActionRelationshipTypeCodings.d.ts.map