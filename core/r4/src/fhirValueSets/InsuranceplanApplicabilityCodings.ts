// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/insuranceplan-applicability|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export const InsuranceplanApplicabilityCodings = {
  /**
   * in-network: Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
   */
  InNetwork: new Coding({
    display: "In Network",
    code: "in-network",
    system: "http://terminology.hl7.org/CodeSystem/applicability",
  }),
  /**
   * other: Other applicability
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/applicability",
  }),
  /**
   * out-of-network: Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
   */
  OutOfNetwork: new Coding({
    display: "Out of Network",
    code: "out-of-network",
    system: "http://terminology.hl7.org/CodeSystem/applicability",
  }),
} as const;

/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export type InsuranceplanApplicabilityCodingType = typeof InsuranceplanApplicabilityCodings;
