// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contributor-type|4.0.1

/**
 * The type of contributor.
 */
export const ContributorTypeCodes = {
  /**
   * author: An author of the content of the module.
   */
  Author: "author",
  /**
   * editor: An editor of the content of the module.
   */
  Editor: "editor",
  /**
   * endorser: An endorser of the content of the module.
   */
  Endorser: "endorser",
  /**
   * reviewer: A reviewer of the content of the module.
   */
  Reviewer: "reviewer",
} as const;

/**
 * The type of contributor.
 */
export type ContributorTypeCodeType = typeof ContributorTypeCodes[keyof typeof ContributorTypeCodes];
