// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contributor-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of contributor.
 */
export type ContributorTypeCodingType = {
  /**
   * author: An author of the content of the module.
   */
  Author: CodingArgs;
  /**
   * editor: An editor of the content of the module.
   */
  Editor: CodingArgs;
  /**
   * endorser: An endorser of the content of the module.
   */
  Endorser: CodingArgs;
  /**
   * reviewer: A reviewer of the content of the module.
   */
  Reviewer: CodingArgs;
}

/**
 * The type of contributor.
 */
export const ContributorTypeCodings:ContributorTypeCodingType = {
  /**
   * author: An author of the content of the module.
   */
  Author: {
    display: "Author",
    code: "author",
    system: "http://hl7.org/fhir/contributor-type",
  },
  /**
   * editor: An editor of the content of the module.
   */
  Editor: {
    display: "Editor",
    code: "editor",
    system: "http://hl7.org/fhir/contributor-type",
  },
  /**
   * endorser: An endorser of the content of the module.
   */
  Endorser: {
    display: "Endorser",
    code: "endorser",
    system: "http://hl7.org/fhir/contributor-type",
  },
  /**
   * reviewer: A reviewer of the content of the module.
   */
  Reviewer: {
    display: "Reviewer",
    code: "reviewer",
    system: "http://hl7.org/fhir/contributor-type",
  },
} as const;