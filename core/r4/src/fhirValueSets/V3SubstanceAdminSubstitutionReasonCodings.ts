// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-SubstanceAdminSubstitutionReason|2014-03-26

import { Coding } from '../fhir/Coding.js'

/**
 * No Description Provided
 */
export const V3SubstanceAdminSubstitutionReasonCodings = {
  /**
   * CT: Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
   */
  ContinuingTherapy: new Coding({
    display: "continuing therapy",
    code: "CT",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  }),
  /**
   * FP: Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
   */
  FormularyPolicy: new Coding({
    display: "formulary policy",
    code: "FP",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  }),
  /**
   * OS: In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
   */
  OutOfStock: new Coding({
    display: "out of stock",
    code: "OS",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  }),
  /**
   * RR: Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
   */
  RegulatoryRequirement: new Coding({
    display: "regulatory requirement",
    code: "RR",
    system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
  }),
} as const;

/**
 * No Description Provided
 */
export type V3SubstanceAdminSubstitutionReasonCodingType = typeof V3SubstanceAdminSubstitutionReasonCodings;