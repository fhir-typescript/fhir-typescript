// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/verificationresult-status|4.3.0

/**
 * The validation status of the target
 */
export const VerificationresultStatusCodes = {
  /**
   * attested: ***TODO***
   */
  Attested: "attested",
  /**
   * in-process: ***TODO***
   */
  InProcess: "in-process",
  /**
   * req-revalid: ***TODO***
   */
  RequiresRevalidation: "req-revalid",
  /**
   * reval-fail: ***TODO***
   */
  ReValidationFailed: "reval-fail",
  /**
   * val-fail: ***TODO***
   */
  ValidationFailed: "val-fail",
  /**
   * validated: ***TODO***
   */
  Validated: "validated",
} as const;

/**
 * The validation status of the target
 */
export type VerificationresultStatusCodeType = typeof VerificationresultStatusCodes[keyof typeof VerificationresultStatusCodes];