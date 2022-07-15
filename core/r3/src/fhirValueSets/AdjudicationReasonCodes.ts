// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-reason|3.0.2

/**
 * This value set includes smattering of Adjudication Reason codes.
 */
export const AdjudicationReasonCodes = {
  /**
   * ar001: Not covered
   */
  NotCovered: "ar001",
  /**
   * ar002: Plan Limit Reached
   */
  PlanLimitReached: "ar002",
} as const;

/**
 * This value set includes smattering of Adjudication Reason codes.
 */
export type AdjudicationReasonCodeType = typeof AdjudicationReasonCodes[keyof typeof AdjudicationReasonCodes];
