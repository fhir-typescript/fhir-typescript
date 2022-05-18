import { Coding } from '../fhir/Coding.js';
/**
 * How an entity was used in an activity.
 */
export declare const ProvenanceEntityRoleCodings: {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
     */
    readonly Derivation: Coding;
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
     */
    readonly Quotation: Coding;
    /**
     * removal: A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
     */
    readonly Removal: Coding;
    /**
     * revision: A derivation for which the resulting entity is a revised version of some original.
     */
    readonly Revision: Coding;
    /**
     * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    readonly Source: Coding;
};
/**
 * How an entity was used in an activity.
 */
export declare type ProvenanceEntityRoleCodingType = typeof ProvenanceEntityRoleCodings;
//# sourceMappingURL=ProvenanceEntityRoleCodings.d.ts.map