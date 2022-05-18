// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/search-entry-mode|4.0.1

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export const SearchEntryModeCodes = {
  /**
   * include: This resource is returned because it is referred to from another resource in the search set.
   */
  Include: "include",
  /**
   * match: This resource matched the search specification.
   */
  Match: "match",
  /**
   * outcome: An OperationOutcome that provides additional information about the processing of a search.
   */
  Outcome: "outcome",
} as const;

/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export type SearchEntryModeCodeType = typeof SearchEntryModeCodes[keyof typeof SearchEntryModeCodes];
