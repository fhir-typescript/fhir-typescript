// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0916|2.0.0

/**
 * Value Set of codes that specify additional clinical information about the patient or specimen to report the supporting and/or suspected diagnosis and clinical findings on requests for interpreted diagnostic studies.
 */
export const V20916Codes = {
  /**
   * Code: F
   */
  PatientWasFastingPriorToTheProcedure: "F",
  /**
   * Code: FNA
   */
  FastingNotAskedOfThePatientAtTimeOfProcedure: "FNA",
  /**
   * Code: NF
   */
  ThePatientIndicatedTheyDidNotFastPriorToTheProcedure: "NF",
  /**
   * Code: NG
   */
  NotGivenPatientWasNotAskedAtTheTimeOfTheProcedure: "NG",
} as const;

/**
 * Value Set of codes that specify additional clinical information about the patient or specimen to report the supporting and/or suspected diagnosis and clinical findings on requests for interpreted diagnostic studies.
 */
export type V20916CodeType = typeof V20916Codes[keyof typeof V20916Codes];
