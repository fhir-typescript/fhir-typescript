// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-network|4.3.0

/**
 * This value set includes a smattering of Network type codes.
 */
export const BenefitNetworkCodes = {
  /**
   * in: Services rendered by a Network provider
   */
  InNetwork: "in",
  /**
   * out: Services rendered by a provider who is not in the Network
   */
  OutOfNetwork: "out",
} as const;

/**
 * This value set includes a smattering of Network type codes.
 */
export type BenefitNetworkCodeType = typeof BenefitNetworkCodes[keyof typeof BenefitNetworkCodes];