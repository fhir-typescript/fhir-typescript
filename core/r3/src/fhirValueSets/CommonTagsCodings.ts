// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/common-tags|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Common Tag Codes defined by FHIR project
 */
export type CommonTagsCodingType = {
  /**
   * actionable: This request is intended to be acted upon, not merely stored
   */
  Actionable: CodingArgs;
}

/**
 * Common Tag Codes defined by FHIR project
 */
export const CommonTagsCodings:CommonTagsCodingType = {
  /**
   * actionable: This request is intended to be acted upon, not merely stored
   */
  Actionable: {
    display: "Actionable",
    code: "actionable",
    system: "http://hl7.org/fhir/common-tags",
  },
} as const;
