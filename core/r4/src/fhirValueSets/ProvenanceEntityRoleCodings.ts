// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-entity-role|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How an entity was used in an activity.
 */
export type ProvenanceEntityRoleCodingType = {
  /**
   * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
   */
  Derivation: CodingArgs;
  /**
   * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
   */
  Quotation: CodingArgs;
  /**
   * removal: A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
   */
  Removal: CodingArgs;
  /**
   * revision: A derivation for which the resulting entity is a revised version of some original.
   */
  Revision: CodingArgs;
  /**
   * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
   */
  Source: CodingArgs;
}

/**
 * How an entity was used in an activity.
 */
export const ProvenanceEntityRoleCodings:ProvenanceEntityRoleCodingType = {
  /**
   * derivation: A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
   */
  Derivation: {
    display: "Derivation",
    code: "derivation",
    system: "http://hl7.org/fhir/provenance-entity-role",
  },
  /**
   * quotation: The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
   */
  Quotation: {
    display: "Quotation",
    code: "quotation",
    system: "http://hl7.org/fhir/provenance-entity-role",
  },
  /**
   * removal: A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
   */
  Removal: {
    display: "Removal",
    code: "removal",
    system: "http://hl7.org/fhir/provenance-entity-role",
  },
  /**
   * revision: A derivation for which the resulting entity is a revised version of some original.
   */
  Revision: {
    display: "Revision",
    code: "revision",
    system: "http://hl7.org/fhir/provenance-entity-role",
  },
  /**
   * source: A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
   */
  Source: {
    display: "Source",
    code: "source",
    system: "http://hl7.org/fhir/provenance-entity-role",
  },
} as const;
