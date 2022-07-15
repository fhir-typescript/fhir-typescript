// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/clinical-impression-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The workflow state of a clinical impression.
 */
export type ClinicalImpressionStatusCodingType = {
  /**
   * completed: The assessment is done and the results are final.
   */
  Completed: CodingArgs;
  /**
   * entered-in-error: This assessment was never actually done and the record is erroneous (e.g. Wrong patient).
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: The assessment is still on-going and results are not yet final.
   */
  InProgress: CodingArgs;
}

/**
 * The workflow state of a clinical impression.
 */
export const ClinicalImpressionStatusCodings:ClinicalImpressionStatusCodingType = {
  /**
   * completed: The assessment is done and the results are final.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/clinical-impression-status",
  },
  /**
   * entered-in-error: This assessment was never actually done and the record is erroneous (e.g. Wrong patient).
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/clinical-impression-status",
  },
  /**
   * in-progress: The assessment is still on-going and results are not yet final.
   */
  InProgress: {
    display: "In progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/clinical-impression-status",
  },
} as const;
