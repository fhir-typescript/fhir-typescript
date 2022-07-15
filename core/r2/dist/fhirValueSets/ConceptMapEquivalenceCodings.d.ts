import { CodingArgs } from '../fhir/Coding.js';
/**
 * The degree of equivalence between concepts.
 */
export declare type ConceptMapEquivalenceCodingType = {
    /**
     * disjoint: This is an explicit assertion that there is no mapping between the source and target concept.
     */
    Disjoint: CodingArgs;
    /**
     * equal: The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
     */
    Equal: CodingArgs;
    /**
     * equivalent: The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
     */
    Equivalent: CodingArgs;
    /**
     * inexact: The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Inexact: CodingArgs;
    /**
     * narrower: The target mapping is narrower in meaning that the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Narrower: CodingArgs;
    /**
     * specializes: The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
     */
    Specializes: CodingArgs;
    /**
     * subsumes: The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
     */
    Subsumes: CodingArgs;
    /**
     * unmatched: There is no match for this concept in the destination concept system.
     */
    Unmatched: CodingArgs;
    /**
     * wider: The target mapping is wider in meaning than the source concept.
     */
    Wider: CodingArgs;
};
/**
 * The degree of equivalence between concepts.
 */
export declare const ConceptMapEquivalenceCodings: ConceptMapEquivalenceCodingType;
//# sourceMappingURL=ConceptMapEquivalenceCodings.d.ts.map