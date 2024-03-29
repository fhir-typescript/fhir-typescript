// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The validation status of the target
 */
export type VerificationresultStatusCodingType = {
  /**
   * attested: ***TODO***
   */
  Attested: CodingArgs;
  /**
   * in-process: ***TODO***
   */
  InProcess: CodingArgs;
  /**
   * req-revalid: ***TODO***
   */
  RequiresRevalidation: CodingArgs;
  /**
   * reval-fail: ***TODO***
   */
  ReValidationFailed: CodingArgs;
  /**
   * val-fail: ***TODO***
   */
  ValidationFailed: CodingArgs;
  /**
   * validated: ***TODO***
   */
  Validated: CodingArgs;
}

/**
 * The validation status of the target
 */
export const VerificationresultStatusCodings:VerificationresultStatusCodingType = {
  /**
   * attested: ***TODO***
   */
  Attested: {
    display: "Attested",
    code: "attested",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
  /**
   * in-process: ***TODO***
   */
  InProcess: {
    display: "In process",
    code: "in-process",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
  /**
   * req-revalid: ***TODO***
   */
  RequiresRevalidation: {
    display: "Requires revalidation",
    code: "req-revalid",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
  /**
   * reval-fail: ***TODO***
   */
  ReValidationFailed: {
    display: "Re-Validation failed",
    code: "reval-fail",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
  /**
   * val-fail: ***TODO***
   */
  ValidationFailed: {
    display: "Validation failed",
    code: "val-fail",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
  /**
   * validated: ***TODO***
   */
  Validated: {
    display: "Validated",
    code: "validated",
    system: "http://hl7.org/fhir/verificationresult-status",
  },
} as const;
