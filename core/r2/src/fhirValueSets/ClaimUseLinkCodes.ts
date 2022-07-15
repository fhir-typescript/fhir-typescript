// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-use-link|1.0.2

/**
 * Complete, proposed, exploratory, other.
 */
export const ClaimUseLinkCodes = {
  /**
   * complete: The treatment is complete and this represents a Claim for the services.
   */
  Complete: "complete",
  /**
   * exploratory: The treatment is proposed and this represents a Pre-determination for the services.
   */
  Exploratory: "exploratory",
  /**
   * other: A locally defined or otherwise resolved status.
   */
  Other: "other",
  /**
   * proposed: The treatment is proposed and this represents a Pre-authorization for the services.
   */
  Proposed: "proposed",
} as const;

/**
 * Complete, proposed, exploratory, other.
 */
export type ClaimUseLinkCodeType = typeof ClaimUseLinkCodes[keyof typeof ClaimUseLinkCodes];
