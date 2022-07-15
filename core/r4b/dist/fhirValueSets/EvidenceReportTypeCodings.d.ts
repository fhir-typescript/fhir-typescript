import { CodingArgs } from '../fhir/Coding.js';
/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export declare type EvidenceReportTypeCodingType = {
    /**
     * classification: The report is primarily a listing of classifiers about the report subject.
     */
    Classification: CodingArgs;
    /**
     * resources-compiled: The report is a composition containing one or more FHIR resources in the content.
     */
    ResourceCompilation: CodingArgs;
    /**
     * search-results: The report is a composition of results generated in response to a search query.
     */
    SearchResults: CodingArgs;
    /**
     * text-structured: The report is a structured representation of text.
     */
    StructuredText: CodingArgs;
};
/**
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 */
export declare const EvidenceReportTypeCodings: EvidenceReportTypeCodingType;
//# sourceMappingURL=EvidenceReportTypeCodings.d.ts.map