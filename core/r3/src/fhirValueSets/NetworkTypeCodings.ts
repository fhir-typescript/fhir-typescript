// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/network-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of network access point of this agent in the audit event
 */
export type NetworkTypeCodingType = {
  /**
   * 1: The machine name, including DNS name.
   */
  MachineName: CodingArgs;
  /**
   * 2: The assigned Internet Protocol (IP) address.
   */
  IPAddress: CodingArgs;
  /**
   * 3: The assigned telephone number.
   */
  TelephoneNumber: CodingArgs;
  /**
   * 4: The assigned email address.
   */
  EmailAddress: CodingArgs;
  /**
   * 5: URI (User directory, HTTP-PUT, ftp, etc.).
   */
  URI: CodingArgs;
}

/**
 * The type of network access point of this agent in the audit event
 */
export const NetworkTypeCodings:NetworkTypeCodingType = {
  /**
   * 1: The machine name, including DNS name.
   */
  MachineName: {
    display: "Machine Name",
    code: "1",
    system: "http://hl7.org/fhir/network-type",
  },
  /**
   * 2: The assigned Internet Protocol (IP) address.
   */
  IPAddress: {
    display: "IP Address",
    code: "2",
    system: "http://hl7.org/fhir/network-type",
  },
  /**
   * 3: The assigned telephone number.
   */
  TelephoneNumber: {
    display: "Telephone Number",
    code: "3",
    system: "http://hl7.org/fhir/network-type",
  },
  /**
   * 4: The assigned email address.
   */
  EmailAddress: {
    display: "Email address",
    code: "4",
    system: "http://hl7.org/fhir/network-type",
  },
  /**
   * 5: URI (User directory, HTTP-PUT, ftp, etc.).
   */
  URI: {
    display: "URI",
    code: "5",
    system: "http://hl7.org/fhir/network-type",
  },
} as const;
