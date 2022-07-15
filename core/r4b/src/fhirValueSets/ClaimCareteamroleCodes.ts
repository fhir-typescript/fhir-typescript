// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-careteamrole|4.3.0

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export const ClaimCareteamroleCodes = {
  /**
   * assist: Assisting care provider.
   */
  AssistingProvider: "assist",
  /**
   * other: Other role on the care team.
   */
  Other: "other",
  /**
   * primary: The primary care provider.
   */
  PrimaryProvider: "primary",
  /**
   * supervisor: Supervising care provider.
   */
  SupervisingProvider: "supervisor",
} as const;

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export type ClaimCareteamroleCodeType = typeof ClaimCareteamroleCodes[keyof typeof ClaimCareteamroleCodes];
