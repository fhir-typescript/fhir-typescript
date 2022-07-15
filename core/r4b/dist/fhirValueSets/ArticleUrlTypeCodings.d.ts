import { CodingArgs } from '../fhir/Coding.js';
/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export declare type ArticleUrlTypeCodingType = {
    /**
     * abstract: URL to reach the abstract for the article.
     */
    Abstract: CodingArgs;
    /**
     * abstract-version: URL to reach a specific version of the abstract for the article.
     */
    AbstractVersion: CodingArgs;
    /**
     * compressed-file: Compressed archive file (e.g. a zip file) that contains multiple files
     */
    CompressedFile: CodingArgs;
    /**
     * doi-based: URL derived from DOI.
     */
    DOIBased: CodingArgs;
    /**
     * full-text: URL to reach the full-text of the article.
     */
    FullText: CodingArgs;
    /**
     * full-text-version: URL to reach a specific version of the full-text of the article.
     */
    FullTextVersion: CodingArgs;
    /**
     * json: URL to reach computable content in JSON format.
     */
    JSON: CodingArgs;
    /**
     * json-version: URL to reach a specific version of computable content in JSON format.
     */
    JSONVersion: CodingArgs;
    /**
     * not-specified: Used when URL type is not specified, commonly when only a single URL is provided.
     */
    NotSpecified: CodingArgs;
    /**
     * pdf: URL to reach the full-text of the article in PDF form.
     */
    PDF: CodingArgs;
    /**
     * pdf-version: URL to reach a specific version of the full-text of the article in PDF form.
     */
    PDFVersion: CodingArgs;
    /**
     * supplement: Supplement
     */
    Supplement: CodingArgs;
    /**
     * supplementary-file-directory: Supplementary file directory
     */
    SupplementaryFileDirectory: CodingArgs;
    /**
     * webpage: Used when URL type is a webpage, but other codes do not apply.
     */
    Webpage: CodingArgs;
    /**
     * xml: URL to reach computable content in XML format.
     */
    XML: CodingArgs;
    /**
     * xml-version: URL to reach a specific version of computable content in XML format.
     */
    XMLXmlVersion: CodingArgs;
};
/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export declare const ArticleUrlTypeCodings: ArticleUrlTypeCodingType;
//# sourceMappingURL=ArticleUrlTypeCodings.d.ts.map