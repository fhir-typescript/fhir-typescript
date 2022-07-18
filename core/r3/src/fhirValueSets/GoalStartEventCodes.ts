// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-start-event|3.0.2

/**
 * Identifies types of events that might trigger the start of a goal.
 */
export const GoalStartEventCodes = {
  /**
   * Code: 308283009
   */
  DischargeFromHospital: "308283009",
  /**
   * Code: 32485007
   */
  AdmissionToHospital: "32485007",
  /**
   * Code: 386216000
   */
  Childbirth: "386216000",
  /**
   * Code: 442137000
   */
  CompletionTimeOfProcedure: "442137000",
} as const;

/**
 * Identifies types of events that might trigger the start of a goal.
 */
export type GoalStartEventCodeType = typeof GoalStartEventCodes[keyof typeof GoalStartEventCodes];