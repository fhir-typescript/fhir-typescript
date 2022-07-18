// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-report-type|4.3.0

/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export const EvidenceReportTypeCodes = {
  /**
   * classification: The report is primarily a listing of classifiers about the report subject.
   */
  Classification: "classification",
  /**
   * resources-compiled: The report is a composition containing one or more FHIR resources in the content.
   */
  ResourceCompilation: "resources-compiled",
  /**
   * search-results: The report is a composition of results generated in response to a search query.
   */
  SearchResults: "search-results",
  /**
   * text-structured: The report is a structured representation of text.
   */
  StructuredText: "text-structured",
} as const;

/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export type EvidenceReportTypeCodeType = typeof EvidenceReportTypeCodes[keyof typeof EvidenceReportTypeCodes];