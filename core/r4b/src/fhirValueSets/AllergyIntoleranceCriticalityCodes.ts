// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality|4.3.0

/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export const AllergyIntoleranceCriticalityCodes = {
  /**
   * high: Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.
   */
  HighRisk: "high",
  /**
   * low: Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.
   */
  LowRisk: "low",
  /**
   * unable-to-assess: Unable to assess the worst case result of a future exposure.
   */
  UnableToAssessRisk: "unable-to-assess",
} as const;

/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 */
export type AllergyIntoleranceCriticalityCodeType = typeof AllergyIntoleranceCriticalityCodes[keyof typeof AllergyIntoleranceCriticalityCodes];
