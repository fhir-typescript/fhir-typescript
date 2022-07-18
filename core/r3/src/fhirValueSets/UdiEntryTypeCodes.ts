// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/udi-entry-type|3.0.2

/**
 * Codes to identify how UDI data was entered
 */
export const UdiEntryTypeCodes = {
  /**
   * barcode: A Barcode scanner captured the data from the device label
   */
  BarCode: "barcode",
  /**
   * card: The data originated from a patient's implant card and read by an operator.
   */
  Card: "card",
  /**
   * manual: The data was read from the label by a person and manually entered. (e.g.  via a keyboard)
   */
  Manual: "manual",
  /**
   * rfid: An RFID chip reader captured the data from the device label
   */
  RFID: "rfid",
  /**
   * self-reported: The data originated from a patient source and not directly scanned or read from a label or card.
   */
  SelfReported: "self-reported",
  /**
   * unknown: The method of data capture has not been determined
   */
  Unknown: "unknown",
} as const;

/**
 * Codes to identify how UDI data was entered
 */
export type UdiEntryTypeCodeType = typeof UdiEntryTypeCodes[keyof typeof UdiEntryTypeCodes];