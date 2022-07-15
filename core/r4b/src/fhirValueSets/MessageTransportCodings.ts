// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-transport|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The protocol used for message transport.
 */
export type MessageTransportCodingType = {
  /**
   * ftp: The application sends or receives messages using File Transfer Protocol.
   */
  FTP: CodingArgs;
  /**
   * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
   */
  HTTP: CodingArgs;
  /**
   * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
   */
  MLLP: CodingArgs;
}

/**
 * The protocol used for message transport.
 */
export const MessageTransportCodings:MessageTransportCodingType = {
  /**
   * ftp: The application sends or receives messages using File Transfer Protocol.
   */
  FTP: {
    display: "FTP",
    code: "ftp",
    system: "http://terminology.hl7.org/CodeSystem/message-transport",
  },
  /**
   * http: The application sends or receives messages using HTTP POST (may be over http: or https:).
   */
  HTTP: {
    display: "HTTP",
    code: "http",
    system: "http://terminology.hl7.org/CodeSystem/message-transport",
  },
  /**
   * mllp: The application sends or receives messages using HL7's Minimal Lower Level Protocol.
   */
  MLLP: {
    display: "MLLP",
    code: "mllp",
    system: "http://terminology.hl7.org/CodeSystem/message-transport",
  },
} as const;
