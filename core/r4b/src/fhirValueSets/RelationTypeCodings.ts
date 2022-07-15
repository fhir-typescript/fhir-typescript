// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/relation-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of relations between entries.
 */
export type RelationTypeCodingType = {
  /**
   * is-replaced-by: the related entry represents an item that replaces the current retired item.
   */
  ReplacedBy: CodingArgs;
  /**
   * triggers: the related entry represents an activity that may be triggered by the current item.
   */
  Triggers: CodingArgs;
}

/**
 * The type of relations between entries.
 */
export const RelationTypeCodings:RelationTypeCodingType = {
  /**
   * is-replaced-by: the related entry represents an item that replaces the current retired item.
   */
  ReplacedBy: {
    display: "Replaced By",
    code: "is-replaced-by",
    system: "http://hl7.org/fhir/relation-type",
  },
  /**
   * triggers: the related entry represents an activity that may be triggered by the current item.
   */
  Triggers: {
    display: "Triggers",
    code: "triggers",
    system: "http://hl7.org/fhir/relation-type",
  },
} as const;
