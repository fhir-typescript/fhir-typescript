// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/article-url-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export type ArticleUrlTypeCodingType = {
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
}

/**
 * Code the reason for different URLs, eg abstract and full-text.
 */
export const ArticleUrlTypeCodings:ArticleUrlTypeCodingType = {
  /**
   * abstract: URL to reach the abstract for the article.
   */
  Abstract: {
    display: "Abstract",
    code: "abstract",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * abstract-version: URL to reach a specific version of the abstract for the article.
   */
  AbstractVersion: {
    display: "Abstract Version",
    code: "abstract-version",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * compressed-file: Compressed archive file (e.g. a zip file) that contains multiple files
   */
  CompressedFile: {
    display: "Compressed file",
    code: "compressed-file",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * doi-based: URL derived from DOI.
   */
  DOIBased: {
    display: "DOI Based",
    code: "doi-based",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * full-text: URL to reach the full-text of the article.
   */
  FullText: {
    display: "Full-Text",
    code: "full-text",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * full-text-version: URL to reach a specific version of the full-text of the article.
   */
  FullTextVersion: {
    display: "Full-Text Version",
    code: "full-text-version",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * json: URL to reach computable content in JSON format.
   */
  JSON: {
    display: "JSON",
    code: "json",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * json-version: URL to reach a specific version of computable content in JSON format.
   */
  JSONVersion: {
    display: "JSON Version",
    code: "json-version",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * not-specified: Used when URL type is not specified, commonly when only a single URL is provided.
   */
  NotSpecified: {
    display: "Not Specified",
    code: "not-specified",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * pdf: URL to reach the full-text of the article in PDF form.
   */
  PDF: {
    display: "PDF",
    code: "pdf",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * pdf-version: URL to reach a specific version of the full-text of the article in PDF form.
   */
  PDFVersion: {
    display: "PDF Version",
    code: "pdf-version",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * supplement: Supplement
   */
  Supplement: {
    display: "Supplement",
    code: "supplement",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * supplementary-file-directory: Supplementary file directory
   */
  SupplementaryFileDirectory: {
    display: "Supplementary file directory",
    code: "supplementary-file-directory",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * webpage: Used when URL type is a webpage, but other codes do not apply.
   */
  Webpage: {
    display: "Webpage",
    code: "webpage",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * xml: URL to reach computable content in XML format.
   */
  XML: {
    display: "XML",
    code: "xml",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
  /**
   * xml-version: URL to reach a specific version of computable content in XML format.
   */
  XMLXmlVersion: {
    display: "XML",
    code: "xml-version",
    system: "http://terminology.hl7.org/CodeSystem/article-url-type",
  },
} as const;