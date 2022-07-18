// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/address-type|4.3.0

/**
 * The type of an address (physical / postal).
 */
export const AddressTypeCodes = {
  /**
   * both: An address that is both physical and postal.
   */
  PostalAndPhysical: "both",
  /**
   * physical: A physical address that can be visited.
   */
  Physical: "physical",
  /**
   * postal: Mailing addresses - PO Boxes and care-of addresses.
   */
  Postal: "postal",
} as const;

/**
 * The type of an address (physical / postal).
 */
export type AddressTypeCodeType = typeof AddressTypeCodes[keyof typeof AddressTypeCodes];