// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0493|2.9

/**
 * FHIR Value set/code system definition for HL7 v2 table 0493 ( Specimen Condition)
 */
export const V20493Codes = {
  /**
   * Code: AUT
   */
  Autolyzed: "AUT",
  /**
   * Code: CFU
   */
  Centrifuged: "CFU",
  /**
   * Code: CLOT
   */
  Clotted: "CLOT",
  /**
   * Code: CON
   */
  Contaminated: "CON",
  /**
   * Code: COOL
   */
  Cool: "COOL",
  /**
   * Code: FROZ
   */
  Frozen: "FROZ",
  /**
   * Code: HEM
   */
  Hemolyzed: "HEM",
  /**
   * Code: LIVE
   */
  Live: "LIVE",
  /**
   * Code: ROOM
   */
  RoomTemperature: "ROOM",
  /**
   * Code: SNR
   */
  SampleNotReceived: "SNR",
} as const;

/**
 * FHIR Value set/code system definition for HL7 v2 table 0493 ( Specimen Condition)
 */
export type V20493CodeType = typeof V20493Codes[keyof typeof V20493Codes];
