// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0092|2.9

import { Coding } from '../fhir/Coding.js'

/**
 * FHIR Value set/code system definition for HL7 v2 table 0092 ( RE-ADMISSION INDICATOR)
 */
export const V20092Codings = {
  /**
   * Code: R
   */
  ReAdmission: new Coding({
    display: "Re-admission",
    code: "R",
    system: "http://terminology.hl7.org/CodeSystem/v2-0092",
  }),
} as const;

/**
 * FHIR Value set/code system definition for HL7 v2 table 0092 ( RE-ADMISSION INDICATOR)
 */
export type V20092CodingType = typeof V20092Codings;
