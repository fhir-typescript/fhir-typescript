/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export declare const ArticleUrlTypeCodes: {
    /**
     * abstract: URL to reach the abstract for the article.
     */
    readonly Abstract: "abstract";
    /**
     * abstract-version: URL to reach a specific version of the abstract for the article.
     */
    readonly AbstractVersion: "abstract-version";
    /**
     * compressed-file: Compressed archive file (e.g. a zip file) that contains multiple files
     */
    readonly CompressedFile: "compressed-file";
    /**
     * doi-based: URL derived from DOI.
     */
    readonly DOIBased: "doi-based";
    /**
     * full-text: URL to reach the full-text of the article.
     */
    readonly FullText: "full-text";
    /**
     * full-text-version: URL to reach a specific version of the full-text of the article.
     */
    readonly FullTextVersion: "full-text-version";
    /**
     * json: URL to reach computable content in JSON format.
     */
    readonly JSON: "json";
    /**
     * json-version: URL to reach a specific version of computable content in JSON format.
     */
    readonly JSONVersion: "json-version";
    /**
     * not-specified: Used when URL type is not specified, commonly when only a single URL is provided.
     */
    readonly NotSpecified: "not-specified";
    /**
     * pdf: URL to reach the full-text of the article in PDF form.
     */
    readonly PDF: "pdf";
    /**
     * pdf-version: URL to reach a specific version of the full-text of the article in PDF form.
     */
    readonly PDFVersion: "pdf-version";
    /**
     * supplement: Supplement
     */
    readonly Supplement: "supplement";
    /**
     * supplementary-file-directory: Supplementary file directory
     */
    readonly SupplementaryFileDirectory: "supplementary-file-directory";
    /**
     * webpage: Used when URL type is a webpage, but other codes do not apply.
     */
    readonly Webpage: "webpage";
    /**
     * xml: URL to reach computable content in XML format.
     */
    readonly XML: "xml";
    /**
     * xml-version: URL to reach a specific version of computable content in XML format.
     */
    readonly XMLXmlVersion: "xml-version";
};
/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export declare type ArticleUrlTypeCodeType = typeof ArticleUrlTypeCodes[keyof typeof ArticleUrlTypeCodes];
//# sourceMappingURL=ArticleUrlTypeCodes.d.ts.map