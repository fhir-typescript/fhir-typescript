// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-team-status|4.3.0

/**
 * Indicates the status of the care team.
 */
export const CareTeamStatusCodes = {
  /**
   * active: The care team is currently participating in the coordination and delivery of care.
   */
  Active: "active",
  /**
   * entered-in-error: The care team should have never existed.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
   */
  Inactive: "inactive",
  /**
   * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
   */
  Proposed: "proposed",
  /**
   * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
   */
  Suspended: "suspended",
} as const;

/**
 * Indicates the status of the care team.
 */
export type CareTeamStatusCodeType = typeof CareTeamStatusCodes[keyof typeof CareTeamStatusCodes];
