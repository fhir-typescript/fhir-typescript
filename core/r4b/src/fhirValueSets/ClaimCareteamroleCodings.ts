// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-careteamrole|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export type ClaimCareteamroleCodingType = {
  /**
   * assist: Assisting care provider.
   */
  AssistingProvider: CodingArgs;
  /**
   * other: Other role on the care team.
   */
  Other: CodingArgs;
  /**
   * primary: The primary care provider.
   */
  PrimaryProvider: CodingArgs;
  /**
   * supervisor: Supervising care provider.
   */
  SupervisingProvider: CodingArgs;
}

/**
 * This value set includes sample Claim Care Team Role codes.
 */
export const ClaimCareteamroleCodings:ClaimCareteamroleCodingType = {
  /**
   * assist: Assisting care provider.
   */
  AssistingProvider: {
    display: "Assisting Provider",
    code: "assist",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  },
  /**
   * other: Other role on the care team.
   */
  Other: {
    display: "Other",
    code: "other",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  },
  /**
   * primary: The primary care provider.
   */
  PrimaryProvider: {
    display: "Primary provider",
    code: "primary",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  },
  /**
   * supervisor: Supervising care provider.
   */
  SupervisingProvider: {
    display: "Supervising Provider",
    code: "supervisor",
    system: "http://terminology.hl7.org/CodeSystem/claimcareteamrole",
  },
} as const;
