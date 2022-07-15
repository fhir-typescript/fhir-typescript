// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/request-priority|4.3.0

/**
 * Identifies the level of importance to be assigned to actioning the request.
 */
export const RequestPriorityCodes = {
  /**
   * asap: The request should be actioned as soon as possible - higher priority than urgent.
   */
  ASAP: "asap",
  /**
   * routine: The request has normal priority.
   */
  Routine: "routine",
  /**
   * stat: The request should be actioned immediately - highest possible priority.  E.g. an emergency.
   */
  STAT: "stat",
  /**
   * urgent: The request should be actioned promptly - higher priority than routine.
   */
  Urgent: "urgent",
} as const;

/**
 * Identifies the level of importance to be assigned to actioning the request.
 */
export type RequestPriorityCodeType = typeof RequestPriorityCodes[keyof typeof RequestPriorityCodes];
