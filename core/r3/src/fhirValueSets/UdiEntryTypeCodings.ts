// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/udi-entry-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes to identify how UDI data was entered
 */
export type UdiEntryTypeCodingType = {
  /**
   * barcode: A Barcode scanner captured the data from the device label
   */
  BarCode: CodingArgs;
  /**
   * card: The data originated from a patient's implant card and read by an operator.
   */
  Card: CodingArgs;
  /**
   * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard)
   */
  Manual: CodingArgs;
  /**
   * rfid: An RFID chip reader captured the data from the device label
   */
  RFID: CodingArgs;
  /**
   * self-reported: The data originated from a patient source and not directly scanned or read from a label or card.
   */
  SelfReported: CodingArgs;
  /**
   * unknown: The method of data capture has not been determined
   */
  Unknown: CodingArgs;
}

/**
 * Codes to identify how UDI data was entered
 */
export const UdiEntryTypeCodings:UdiEntryTypeCodingType = {
  /**
   * barcode: A Barcode scanner captured the data from the device label
   */
  BarCode: {
    display: "BarCode",
    code: "barcode",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
  /**
   * card: The data originated from a patient's implant card and read by an operator.
   */
  Card: {
    display: "Card",
    code: "card",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
  /**
   * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard)
   */
  Manual: {
    display: "Manual",
    code: "manual",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
  /**
   * rfid: An RFID chip reader captured the data from the device label
   */
  RFID: {
    display: "RFID",
    code: "rfid",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
  /**
   * self-reported: The data originated from a patient source and not directly scanned or read from a label or card.
   */
  SelfReported: {
    display: "Self Reported",
    code: "self-reported",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
  /**
   * unknown: The method of data capture has not been determined
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/udi-entry-type",
  },
} as const;