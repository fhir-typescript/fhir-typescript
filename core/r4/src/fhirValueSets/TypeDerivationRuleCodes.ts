// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/type-derivation-rule|4.0.1

/**
 * How a type relates to its baseDefinition.
 */
export const TypeDerivationRuleCodes = {
  /**
   * constraint: This definition adds additional rules to an existing concrete type.
   */
  Constraint: "constraint",
  /**
   * specialization: This definition defines a new type that adds additional elements to the base type.
   */
  Specialization: "specialization",
} as const;

/**
 * How a type relates to its baseDefinition.
 */
export type TypeDerivationRuleCodeType = typeof TypeDerivationRuleCodes[keyof typeof TypeDerivationRuleCodes];
