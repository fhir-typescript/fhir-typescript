// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinical-impression-status|3.0.2

/**
 * The workflow state of a clinical impression.
 */
export const ClinicalImpressionStatusCodes = {
  /**
   * completed: The assessment is done and the results are final.
   */
  Completed: "completed",
  /**
   * draft: The assessment is still on-going and results are not yet final.
   */
  InProgress: "draft",
  /**
   * entered-in-error: This assessment was never actually done and the record is erroneous (e.g. Wrong patient).
   */
  EnteredInError: "entered-in-error",
} as const;

/**
 * The workflow state of a clinical impression.
 */
export type ClinicalImpressionStatusCodeType = typeof ClinicalImpressionStatusCodes[keyof typeof ClinicalImpressionStatusCodes];
