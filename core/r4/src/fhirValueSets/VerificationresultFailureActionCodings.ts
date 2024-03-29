// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-failure-action|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The result if validation fails
 */
export type VerificationresultFailureActionCodingType = {
  /**
   * Code: fatal
   */
  Fatal: CodingArgs;
  /**
   * Code: none
   */
  None: CodingArgs;
  /**
   * Code: rec-only
   */
  RecordOnly: CodingArgs;
  /**
   * Code: warn
   */
  Warning: CodingArgs;
}

/**
 * The result if validation fails
 */
export const VerificationresultFailureActionCodings:VerificationresultFailureActionCodingType = {
  /**
   * Code: fatal
   */
  Fatal: {
    display: "Fatal",
    code: "fatal",
    system: "http://terminology.hl7.org/CodeSystem/failure-action",
  },
  /**
   * Code: none
   */
  None: {
    display: "None",
    code: "none",
    system: "http://terminology.hl7.org/CodeSystem/failure-action",
  },
  /**
   * Code: rec-only
   */
  RecordOnly: {
    display: "Record only",
    code: "rec-only",
    system: "http://terminology.hl7.org/CodeSystem/failure-action",
  },
  /**
   * Code: warn
   */
  Warning: {
    display: "Warning",
    code: "warn",
    system: "http://terminology.hl7.org/CodeSystem/failure-action",
  },
} as const;
