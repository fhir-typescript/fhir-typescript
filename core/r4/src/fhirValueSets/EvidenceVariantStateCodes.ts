// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-variant-state|4.0.1

/**
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 */
export const EvidenceVariantStateCodes = {
  /**
   * high-risk: high risk estimate.
   */
  HighRisk: "high-risk",
  /**
   * low-risk: low risk estimate.
   */
  LowRisk: "low-risk",
  /**
   * medium-risk: medium risk estimate.
   */
  MediumRisk: "medium-risk",
} as const;

/**
 * Used for results by exposure in variant states such as low-risk, medium-risk and high-risk states.
 */
export type EvidenceVariantStateCodeType = typeof EvidenceVariantStateCodes[keyof typeof EvidenceVariantStateCodes];
