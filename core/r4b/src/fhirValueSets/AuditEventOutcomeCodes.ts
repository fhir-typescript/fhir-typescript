// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/audit-event-outcome|4.3.0

/**
 * Indicates whether the event succeeded or failed.
 */
export const AuditEventOutcomeCodes = {
  /**
   * 0: The operation completed successfully (whether with warnings or not).
   */
  Success: "0",
  /**
   * 12: An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).
   */
  MajorFailure: "12",
  /**
   * 4: The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).
   */
  MinorFailure: "4",
  /**
   * 8: The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).
   */
  SeriousFailure: "8",
} as const;

/**
 * Indicates whether the event succeeded or failed.
 */
export type AuditEventOutcomeCodeType = typeof AuditEventOutcomeCodes[keyof typeof AuditEventOutcomeCodes];
