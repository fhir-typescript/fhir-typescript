// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason|2014-03-26

/**
 * No Description Provided
 */
export const V3SubstanceAdminSubstitutionReasonCodes = {
  /**
   * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
   */
  ContinuingTherapy: "CT",
  /**
   * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
   */
  FormularyPolicy: "FP",
  /**
   * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
   */
  OutOfStock: "OS",
  /**
   * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
   */
  RegulatoryRequirement: "RR",
} as const;

/**
 * No Description Provided
 */
export type V3SubstanceAdminSubstitutionReasonCodeType = typeof V3SubstanceAdminSubstitutionReasonCodes[keyof typeof V3SubstanceAdminSubstitutionReasonCodes];
