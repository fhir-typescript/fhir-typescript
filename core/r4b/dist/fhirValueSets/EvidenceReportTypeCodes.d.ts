/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export declare const EvidenceReportTypeCodes: {
    /**
     * classification: The report is primarily a listing of classifiers about the report subject.
     */
    readonly Classification: "classification";
    /**
     * resources-compiled: The report is a composition containing one or more FHIR resources in the content.
     */
    readonly ResourceCompilation: "resources-compiled";
    /**
     * search-results: The report is a composition of results generated in response to a search query.
     */
    readonly SearchResults: "search-results";
    /**
     * text-structured: The report is a structured representation of text.
     */
    readonly StructuredText: "text-structured";
};
/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export declare type EvidenceReportTypeCodeType = typeof EvidenceReportTypeCodes[keyof typeof EvidenceReportTypeCodes];
//# sourceMappingURL=EvidenceReportTypeCodes.d.ts.map