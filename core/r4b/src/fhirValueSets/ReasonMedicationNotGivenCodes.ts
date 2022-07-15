// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes|4.3.0

/**
 * This value set includes all medication refused, medication not administered, and non-administration of necessary drug or medicine codes from SNOMED CT - provided as an exemplar value set.
 */
export const ReasonMedicationNotGivenCodes = {
  /**
   * Code: 182895007
   */
  DrugDeclinedByPatient: "182895007",
  /**
   * Code: 182896008
   */
  DrugDeclinedByPatientDislikesTaste: "182896008",
  /**
   * Code: 182897004
   */
  DrugDeclinedByPatientSideEffects: "182897004",
  /**
   * Code: 182898009
   */
  DrugDeclinedByPatientInconvenient: "182898009",
  /**
   * Code: 182899001
   */
  DrugDeclinedByPatientProblemSwallowing: "182899001",
  /**
   * Code: 182900006
   */
  DrugDeclinedByPatientPatientBeliefs: "182900006",
  /**
   * Code: 182901005
   */
  DrugDeclinedByPatientAlternativeTherapy: "182901005",
  /**
   * Code: 182902003
   */
  DrugDeclinedByPatientCannotPayScript: "182902003",
  /**
   * Code: 182903008
   */
  DrugDeclinedByPatientReasonUnknown: "182903008",
  /**
   * Code: 242990004
   */
  DrugNotAvailableForAdministration: "242990004",
} as const;

/**
 * This value set includes all medication refused, medication not administered, and non-administration of necessary drug or medicine codes from SNOMED CT - provided as an exemplar value set.
 */
export type ReasonMedicationNotGivenCodeType = typeof ReasonMedicationNotGivenCodes[keyof typeof ReasonMedicationNotGivenCodes];
