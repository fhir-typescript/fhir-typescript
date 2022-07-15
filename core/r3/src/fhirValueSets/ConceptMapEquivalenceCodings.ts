// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/concept-map-equivalence|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The degree of equivalence between concepts.
 */
export type ConceptMapEquivalenceCodingType = {
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
   * narrower: The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
   */
  Narrower: CodingArgs;
  /**
   * relatedto: The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known
   */
  RelatedTo: CodingArgs;
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
}

/**
 * The degree of equivalence between concepts.
 */
export const ConceptMapEquivalenceCodings:ConceptMapEquivalenceCodingType = {
  /**
   * disjoint: This is an explicit assertion that there is no mapping between the source and target concept.
   */
  Disjoint: {
    display: "Disjoint",
    code: "disjoint",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * equal: The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
   */
  Equal: {
    display: "Equal",
    code: "equal",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * equivalent: The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
   */
  Equivalent: {
    display: "Equivalent",
    code: "equivalent",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * inexact: The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
   */
  Inexact: {
    display: "Inexact",
    code: "inexact",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * narrower: The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
   */
  Narrower: {
    display: "Narrower",
    code: "narrower",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * relatedto: The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known
   */
  RelatedTo: {
    display: "Related To",
    code: "relatedto",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * specializes: The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
   */
  Specializes: {
    display: "Specializes",
    code: "specializes",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * subsumes: The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
   */
  Subsumes: {
    display: "Subsumes",
    code: "subsumes",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * unmatched: There is no match for this concept in the destination concept system.
   */
  Unmatched: {
    display: "Unmatched",
    code: "unmatched",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
  /**
   * wider: The target mapping is wider in meaning than the source concept.
   */
  Wider: {
    display: "Wider",
    code: "wider",
    system: "http://hl7.org/fhir/concept-map-equivalence",
  },
} as const;
