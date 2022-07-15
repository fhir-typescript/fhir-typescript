// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-state-codes|4.3.0

/**
 * Indicates the state of the consent.
 */
export const ConsentStateCodes = {
  /**
   * active: The consent is to be followed and enforced.
   */
  Active: "active",
  /**
   * draft: The consent is in development or awaiting use but is not yet intended to be acted upon.
   */
  Pending: "draft",
  /**
   * entered-in-error: The consent was created wrongly (e.g. wrong patient) and should be ignored.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The consent is terminated or replaced.
   */
  Inactive: "inactive",
  /**
   * proposed: The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
   */
  Proposed: "proposed",
  /**
   * rejected: The consent has been rejected by one or more of the parties.
   */
  Rejected: "rejected",
} as const;

/**
 * Indicates the state of the consent.
 */
export type ConsentStateCodeType = typeof ConsentStateCodes[keyof typeof ConsentStateCodes];
