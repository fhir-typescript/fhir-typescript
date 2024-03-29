// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reason-medication-not-taken-codes|3.0.2

/**
 * This value set includes some not taken reason codes from SNOMED CT - provided as an exemplar
 */
export const ReasonMedicationNotTakenCodes = {
  /**
   * Code: 182862001
   */
  DrugNotTakenDislikeTaste: "182862001",
  /**
   * Code: 182863006
   */
  DrugNotTakenDislikeForm: "182863006",
  /**
   * Code: 182864000
   */
  DrugNotTakenSideEffects: "182864000",
  /**
   * Code: 182865004
   */
  DrugNotTakenInconvenient: "182865004",
  /**
   * Code: 182867007
   */
  DrugNotTakenPatDisbelief: "182867007",
  /**
   * Code: 182868002
   */
  TreatmentStoppedAlternativeTherapyUndertaken: "182868002",
  /**
   * Code: 182869005
   */
  DrugNotTakenPatientLostTablets: "182869005",
  /**
   * Code: 182870006
   */
  DrugDiscontinuedReasonUnknown: "182870006",
  /**
   * Code: 182871005
   */
  DrugDiscontinuedPatientFearRisk: "182871005",
  /**
   * Code: 182872003
   */
  DrugDiscontinuedTooExpensive: "182872003",
  /**
   * Code: 182873008
   */
  DrugTreatmentStoppedPatientRanOutOfTablets: "182873008",
  /**
   * Code: 182874002
   */
  TreatmentStoppedPatientUnableToConcentrate: "182874002",
  /**
   * Code: 266711001
   */
  DrugNotTakenProblemSwallowing: "266711001",
  /**
   * Code: 275929009
   */
  TabletsTooLargeToSwallow: "275929009",
} as const;

/**
 * This value set includes some not taken reason codes from SNOMED CT - provided as an exemplar
 */
export type ReasonMedicationNotTakenCodeType = typeof ReasonMedicationNotTakenCodes[keyof typeof ReasonMedicationNotTakenCodes];
