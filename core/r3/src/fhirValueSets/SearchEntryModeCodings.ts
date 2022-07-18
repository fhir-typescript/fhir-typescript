// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-entry-mode|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement.
 */
export type SearchEntryModeCodingType = {
  /**
   * include: This resource is returned because it is referred to from another resource in the search set.
   */
  Include: CodingArgs;
  /**
   * match: This resource matched the search specification.
   */
  Match: CodingArgs;
  /**
   * outcome: An OperationOutcome that provides additional information about the processing of a search.
   */
  Outcome: CodingArgs;
}

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement.
 */
export const SearchEntryModeCodings:SearchEntryModeCodingType = {
  /**
   * include: This resource is returned because it is referred to from another resource in the search set.
   */
  Include: {
    display: "Include",
    code: "include",
    system: "http://hl7.org/fhir/search-entry-mode",
  },
  /**
   * match: This resource matched the search specification.
   */
  Match: {
    display: "Match",
    code: "match",
    system: "http://hl7.org/fhir/search-entry-mode",
  },
  /**
   * outcome: An OperationOutcome that provides additional information about the processing of a search.
   */
  Outcome: {
    display: "Outcome",
    code: "outcome",
    system: "http://hl7.org/fhir/search-entry-mode",
  },
} as const;