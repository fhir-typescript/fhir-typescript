import { Coding } from '../fhir/Coding.js';
/**
 * The degree of equivalence between concepts.
 */
export declare const ConceptMapEquivalenceCodings: {
    /**
     * disjoint: This is an explicit assertion that there is no mapping between the source and target concept.
     */
    readonly Disjoint: Coding;
    /**
     * equal: The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
     */
    readonly Equal: Coding;
    /**
     * equivalent: The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
     */
    readonly Equivalent: Coding;
    /**
     * inexact: The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    readonly Inexact: Coding;
    /**
     * narrower: The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    readonly Narrower: Coding;
    /**
     * relatedto: The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.
     */
    readonly RelatedTo: Coding;
    /**
     * specializes: The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
     */
    readonly Specializes: Coding;
    /**
     * subsumes: The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
     */
    readonly Subsumes: Coding;
    /**
     * unmatched: There is no match for this concept in the target code system.
     */
    readonly Unmatched: Coding;
    /**
     * wider: The target mapping is wider in meaning than the source concept.
     */
    readonly Wider: Coding;
};
/**
 * The degree of equivalence between concepts.
 */
export declare type ConceptMapEquivalenceCodingType = typeof ConceptMapEquivalenceCodings;
//# sourceMappingURL=ConceptMapEquivalenceCodings.d.ts.map