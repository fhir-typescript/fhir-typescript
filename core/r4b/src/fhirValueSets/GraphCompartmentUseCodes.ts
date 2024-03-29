// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/graph-compartment-use|4.3.0

/**
 * Defines how a compartment rule is used.
 */
export const GraphCompartmentUseCodes = {
  /**
   * condition: This compartment rule is a condition for whether the rule applies.
   */
  Condition: "condition",
  /**
   * requirement: This compartment rule is enforced on any relationships that meet the conditions.
   */
  Requirement: "requirement",
} as const;

/**
 * Defines how a compartment rule is used.
 */
export type GraphCompartmentUseCodeType = typeof GraphCompartmentUseCodes[keyof typeof GraphCompartmentUseCodes];
