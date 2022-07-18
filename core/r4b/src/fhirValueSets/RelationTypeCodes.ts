// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/relation-type|4.3.0

/**
 * The type of relations between entries.
 */
export const RelationTypeCodes = {
  /**
   * is-replaced-by: the related entry represents an item that replaces the current retired item.
   */
  ReplacedBy: "is-replaced-by",
  /**
   * triggers: the related entry represents an activity that may be triggered by the current item.
   */
  Triggers: "triggers",
} as const;

/**
 * The type of relations between entries.
 */
export type RelationTypeCodeType = typeof RelationTypeCodes[keyof typeof RelationTypeCodes];