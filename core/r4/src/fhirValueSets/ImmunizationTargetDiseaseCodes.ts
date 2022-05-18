// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-target-disease|4.0.1

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the disease that the dose is being administered against. This value set is provided as a suggestive example and includes the SNOMED CT concepts from the 64572001 (Disease) hierarchy.
 */
export const ImmunizationTargetDiseaseCodes = {
  /**
   * Code: 14189004
   */
  VAL14189004: "14189004",
  /**
   * Code: 1857005
   */
  VAL1857005: "1857005",
  /**
   * Code: 27836007
   */
  VAL27836007: "27836007",
  /**
   * Code: 36653000
   */
  VAL36653000: "36653000",
  /**
   * Code: 36989005
   */
  VAL36989005: "36989005",
  /**
   * Code: 397430003
   */
  VAL397430003: "397430003",
  /**
   * Code: 398102009
   */
  VAL398102009: "398102009",
  /**
   * Code: 709410003
   */
  VAL709410003: "709410003",
  /**
   * Code: 76902006
   */
  VAL76902006: "76902006",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the disease that the dose is being administered against. This value set is provided as a suggestive example and includes the SNOMED CT concepts from the 64572001 (Disease) hierarchy.
 */
export type ImmunizationTargetDiseaseCodeType = typeof ImmunizationTargetDiseaseCodes[keyof typeof ImmunizationTargetDiseaseCodes];
