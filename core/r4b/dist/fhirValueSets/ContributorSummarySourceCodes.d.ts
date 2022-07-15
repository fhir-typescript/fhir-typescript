/**
 * Used to code the producer or rule for creating the display string.
 */
export declare const ContributorSummarySourceCodes: {
    /**
     * article-copy: Data copied by human from article text.
     */
    readonly CopiedFromArticle: "article-copy";
    /**
     * citation-manager: Data copied by machine from citation manager data.
     */
    readonly ReportedByCitationManager: "citation-manager";
    /**
     * custom: Custom format (may be described in text note).
     */
    readonly CustomFormat: "custom";
    /**
     * publisher-data: Data copied by machine from publisher data.
     */
    readonly PublisherProvided: "publisher-data";
};
/**
 * Used to code the producer or rule for creating the display string.
 */
export declare type ContributorSummarySourceCodeType = typeof ContributorSummarySourceCodes[keyof typeof ContributorSummarySourceCodes];
//# sourceMappingURL=ContributorSummarySourceCodes.d.ts.map