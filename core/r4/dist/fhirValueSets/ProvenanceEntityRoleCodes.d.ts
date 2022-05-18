/**
 * How an entity was used in an activity.
 */
export declare const ProvenanceEntityRoleCodes: {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
     */
    readonly Derivation: "derivation";
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
     */
    readonly Quotation: "quotation";
    /**
     * removal: A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
     */
    readonly Removal: "removal";
    /**
     * revision: A derivation for which the resulting entity is a revised version of some original.
     */
    readonly Revision: "revision";
    /**
     * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    readonly Source: "source";
};
/**
 * How an entity was used in an activity.
 */
export declare type ProvenanceEntityRoleCodeType = typeof ProvenanceEntityRoleCodes[keyof typeof ProvenanceEntityRoleCodes];
//# sourceMappingURL=ProvenanceEntityRoleCodes.d.ts.map