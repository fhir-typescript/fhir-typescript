// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActEncounterCode|2.0.0

/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export const V3ActEncounterCodes = {
  /**
   * Code: ACUTE
   */
  InpatientAcute: "ACUTE",
  /**
   * Code: AMB
   */
  Ambulatory: "AMB",
  /**
   * Code: EMER
   */
  Emergency: "EMER",
  /**
   * Code: FLD
   */
  Field: "FLD",
  /**
   * Code: HH
   */
  HomeHealth: "HH",
  /**
   * Code: IMP
   */
  InpatientEncounter: "IMP",
  /**
   * Code: NONAC
   */
  InpatientNonAcute: "NONAC",
  /**
   * Code: OBSENC
   */
  ObservationEncounter: "OBSENC",
  /**
   * Code: PRENC
   */
  PreAdmission: "PRENC",
  /**
   * Code: SS
   */
  ShortStay: "SS",
  /**
   * Code: VR
   */
  Virtual: "VR",
} as const;

/**
 * Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export type V3ActEncounterCodeType = typeof V3ActEncounterCodes[keyof typeof V3ActEncounterCodes];