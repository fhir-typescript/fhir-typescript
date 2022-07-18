// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-network|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Network type codes.
 */
export type BenefitNetworkCodingType = {
  /**
   * in: Services rendered by a Network provider
   */
  InNetwork: CodingArgs;
  /**
   * out: Services rendered by a provider who is not in the Network
   */
  OutOfNetwork: CodingArgs;
}

/**
 * This value set includes a smattering of Network type codes.
 */
export const BenefitNetworkCodings:BenefitNetworkCodingType = {
  /**
   * in: Services rendered by a Network provider
   */
  InNetwork: {
    display: "In Network",
    code: "in",
    system: "http://hl7.org/fhir/benefit-network",
  },
  /**
   * out: Services rendered by a provider who is not in the Network
   */
  OutOfNetwork: {
    display: "Out of Network",
    code: "out",
    system: "http://hl7.org/fhir/benefit-network",
  },
} as const;