// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-role|3.0.2

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the role a practitioner may play in the immunization event. This value set is provided as a suggestive example.
 */
export const ImmunizationRoleCodes = {
  /**
   * Code: AP
   */
  AdministeringProvider: "AP",
  /**
   * Code: OP
   */
  OrderingProvider: "OP",
} as const;

/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the role a practitioner may play in the immunization event. This value set is provided as a suggestive example.
 */
export type ImmunizationRoleCodeType = typeof ImmunizationRoleCodes[keyof typeof ImmunizationRoleCodes];
