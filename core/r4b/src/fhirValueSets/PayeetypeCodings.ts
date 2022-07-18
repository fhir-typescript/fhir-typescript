// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payeetype|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Payee Type codes.
 */
export type PayeetypeCodingType = {
  /**
   * other: Any benefit payable will be paid to a third party such as a guarrantor.
   */
  Provider: CodingArgs;
  /**
   * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
   */
  ProviderProvider: CodingArgs;
  /**
   * subscriber: The subscriber (policy holder) will be reimbursed.
   */
  Subscriber: CodingArgs;
}

/**
 * This value set includes sample Payee Type codes.
 */
export const PayeetypeCodings:PayeetypeCodingType = {
  /**
   * other: Any benefit payable will be paid to a third party such as a guarrantor.
   */
  Provider: {
    display: "Provider",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/payeetype",
  },
  /**
   * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
   */
  ProviderProvider: {
    display: "Provider",
    code: "provider",
    system: "http://terminology.hl7.org/CodeSystem/payeetype",
  },
  /**
   * subscriber: The subscriber (policy holder) will be reimbursed.
   */
  Subscriber: {
    display: "Subscriber",
    code: "subscriber",
    system: "http://terminology.hl7.org/CodeSystem/payeetype",
  },
} as const;