// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-report-type|3.0.2

/**
 * The type of the measure report
 */
export const MeasureReportTypeCodes = {
  /**
   * individual: An individual report that provides information on the performance for a given measure with respect to a single patient
   */
  Individual: "individual",
  /**
   * patient-list: A patient list report that includes a listing of patients that satisfied each population criteria in the measure
   */
  PatientList: "patient-list",
  /**
   * summary: A summary report that returns the number of patients in each population criteria for the measure
   */
  Summary: "summary",
} as const;

/**
 * The type of the measure report
 */
export type MeasureReportTypeCodeType = typeof MeasureReportTypeCodes[keyof typeof MeasureReportTypeCodes];