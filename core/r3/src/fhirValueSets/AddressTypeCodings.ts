// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/address-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of an address (physical / postal)
 */
export type AddressTypeCodingType = {
  /**
   * both: An address that is both physical and postal.
   */
  PostalAndPhysical: CodingArgs;
  /**
   * physical: A physical address that can be visited.
   */
  Physical: CodingArgs;
  /**
   * postal: Mailing addresses - PO Boxes and care-of addresses.
   */
  Postal: CodingArgs;
}

/**
 * The type of an address (physical / postal)
 */
export const AddressTypeCodings:AddressTypeCodingType = {
  /**
   * both: An address that is both physical and postal.
   */
  PostalAndPhysical: {
    display: "Postal & Physical",
    code: "both",
    system: "http://hl7.org/fhir/address-type",
  },
  /**
   * physical: A physical address that can be visited.
   */
  Physical: {
    display: "Physical",
    code: "physical",
    system: "http://hl7.org/fhir/address-type",
  },
  /**
   * postal: Mailing addresses - PO Boxes and care-of addresses.
   */
  Postal: {
    display: "Postal",
    code: "postal",
    system: "http://hl7.org/fhir/address-type",
  },
} as const;
