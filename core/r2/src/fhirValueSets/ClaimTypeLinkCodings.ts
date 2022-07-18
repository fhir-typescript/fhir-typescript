// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-type-link|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type or discipline-style of the claim.
 */
export type ClaimTypeLinkCodingType = {
  /**
   * institutional: A claim for Institution based, typically in-patient, goods and services.
   */
  Institutional: CodingArgs;
  /**
   * oral: A claim for Oral Health (Dentist, Denturist, Hygienist) goods and services.
   */
  OralHealth: CodingArgs;
  /**
   * pharmacy: A claim for Pharmacy based goods and services.
   */
  Pharmacy: CodingArgs;
  /**
   * professional: A claim for Professional, typically out-patient, goods and services.
   */
  Professional: CodingArgs;
  /**
   * vision: A claim for Vision (Ophthamologist, Optometrist and Optician) goods and services.
   */
  Vision: CodingArgs;
}

/**
 * The type or discipline-style of the claim.
 */
export const ClaimTypeLinkCodings:ClaimTypeLinkCodingType = {
  /**
   * institutional: A claim for Institution based, typically in-patient, goods and services.
   */
  Institutional: {
    display: "Institutional",
    code: "institutional",
    system: "http://hl7.org/fhir/claim-type-link",
  },
  /**
   * oral: A claim for Oral Health (Dentist, Denturist, Hygienist) goods and services.
   */
  OralHealth: {
    display: "Oral Health",
    code: "oral",
    system: "http://hl7.org/fhir/claim-type-link",
  },
  /**
   * pharmacy: A claim for Pharmacy based goods and services.
   */
  Pharmacy: {
    display: "Pharmacy",
    code: "pharmacy",
    system: "http://hl7.org/fhir/claim-type-link",
  },
  /**
   * professional: A claim for Professional, typically out-patient, goods and services.
   */
  Professional: {
    display: "Professional",
    code: "professional",
    system: "http://hl7.org/fhir/claim-type-link",
  },
  /**
   * vision: A claim for Vision (Ophthamologist, Optometrist and Optician) goods and services.
   */
  Vision: {
    display: "Vision",
    code: "vision",
    system: "http://hl7.org/fhir/claim-type-link",
  },
} as const;