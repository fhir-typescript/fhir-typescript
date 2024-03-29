// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-validation-type|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * What the target is validated against
 */
export type VerificationresultValidationTypeCodingType = {
  /**
   * Code: multiple
   */
  MultipleSources: CodingArgs;
  /**
   * Code: nothing
   */
  Nothing: CodingArgs;
  /**
   * Code: primary
   */
  PrimarySource: CodingArgs;
}

/**
 * What the target is validated against
 */
export const VerificationresultValidationTypeCodings:VerificationresultValidationTypeCodingType = {
  /**
   * Code: multiple
   */
  MultipleSources: {
    display: "Multiple Sources",
    code: "multiple",
    system: "http://terminology.hl7.org/CodeSystem/validation-type",
  },
  /**
   * Code: nothing
   */
  Nothing: {
    display: "Nothing",
    code: "nothing",
    system: "http://terminology.hl7.org/CodeSystem/validation-type",
  },
  /**
   * Code: primary
   */
  PrimarySource: {
    display: "Primary Source",
    code: "primary",
    system: "http://terminology.hl7.org/CodeSystem/validation-type",
  },
} as const;
