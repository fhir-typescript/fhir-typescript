/**
 * How an entity was used in an activity.
 */
export declare const ProvenanceEntityRoleCodes: {
    /**
     * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a preexisting entity.
     */
    readonly Derivation: "derivation";
    /**
     * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who may or may not be its original author.
     */
    readonly Quotation: "quotation";
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