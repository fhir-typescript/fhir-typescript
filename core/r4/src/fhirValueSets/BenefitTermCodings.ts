// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-term|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Benefit Term codes.
 */
export const BenefitTermCodings = {
  /**
   * annual: Annual, renewing on the anniversary
   */
  Annual: new Coding({
    display: "Annual",
    code: "annual",
    system: "http://terminology.hl7.org/CodeSystem/benefit-term",
  }),
  /**
   * day: Per day
   */
  Day: new Coding({
    display: "Day",
    code: "day",
    system: "http://terminology.hl7.org/CodeSystem/benefit-term",
  }),
  /**
   * lifetime: For the total term, lifetime, of the policy or coverage
   */
  Lifetime: new Coding({
    display: "Lifetime",
    code: "lifetime",
    system: "http://terminology.hl7.org/CodeSystem/benefit-term",
  }),
} as const;

/**
 * This value set includes a smattering of Benefit Term codes.
 */
export type BenefitTermCodingType = typeof BenefitTermCodings;
