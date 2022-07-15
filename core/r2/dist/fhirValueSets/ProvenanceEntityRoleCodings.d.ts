import { CodingArgs } from '../fhir/Coding.js';
/**
 * How an entity was used in an activity.
 */
export declare type ProvenanceEntityRoleCodingType = {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a preexisting entity.
     */
    Derivation: CodingArgs;
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author.
     */
    Quotation: CodingArgs;
    /**
     * revision: A derivation for which the resulting entity is a revised version of some original.
     */
    Revision: CodingArgs;
    /**
     * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    Source: CodingArgs;
};
/**
 * How an entity was used in an activity.
 */
export declare const ProvenanceEntityRoleCodings: ProvenanceEntityRoleCodingType;
//# sourceMappingURL=ProvenanceEntityRoleCodings.d.ts.map