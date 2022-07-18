// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-clinical|1.0.2

/**
 * Preferred value set for Condition Clinical Status.
 */
export const ConditionClinicalCodes = {
  /**
   * active: The subject is currently experiencing the symptoms of the condition.
   */
  Active: "active",
  /**
   * relapse: The subject is re-experiencing the symptoms of the condition after a period of remission or presumed resolution.
   */
  Relapse: "relapse",
  /**
   * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
   */
  Remission: "remission",
  /**
   * resolved: The subject is no longer experiencing the symptoms of the condition and there is no perceived risk of the symptoms returning.
   */
  Resolved: "resolved",
} as const;

/**
 * Preferred value set for Condition Clinical Status.
 */
export type ConditionClinicalCodeType = typeof ConditionClinicalCodes[keyof typeof ConditionClinicalCodes];