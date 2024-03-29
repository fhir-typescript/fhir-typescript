// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guide-page-kind|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The kind of an included page.
 */
export type GuidePageKindCodingType = {
  /**
   * dictionary: This is a page that creates the listed resources as a dictionary.
   */
  Dictionary: CodingArgs;
  /**
   * directory: This is a page that lists the resources of a given type, and also creates pages for all the listed types as other pages in the section.
   */
  Directory: CodingArgs;
  /**
   * example: This is a page that represents a human readable rendering of an example.
   */
  Example: CodingArgs;
  /**
   * include: This is a page showing where an included guide is injected.
   */
  Include: CodingArgs;
  /**
   * list: This is a page that represents a list of resources of one or more types.
   */
  List: CodingArgs;
  /**
   * page: This is a page of content that is included in the implementation guide. It has no particular function.
   */
  Page: CodingArgs;
  /**
   * resource: This is a page that represents a presented resource. This is typically used for generated conformance resource presentations.
   */
  Resource: CodingArgs;
  /**
   * toc: This is a generated page that contains the table of contents.
   */
  TableOfContents: CodingArgs;
}

/**
 * The kind of an included page.
 */
export const GuidePageKindCodings:GuidePageKindCodingType = {
  /**
   * dictionary: This is a page that creates the listed resources as a dictionary.
   */
  Dictionary: {
    display: "Dictionary",
    code: "dictionary",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * directory: This is a page that lists the resources of a given type, and also creates pages for all the listed types as other pages in the section.
   */
  Directory: {
    display: "Directory",
    code: "directory",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * example: This is a page that represents a human readable rendering of an example.
   */
  Example: {
    display: "Example",
    code: "example",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * include: This is a page showing where an included guide is injected.
   */
  Include: {
    display: "Include",
    code: "include",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * list: This is a page that represents a list of resources of one or more types.
   */
  List: {
    display: "List",
    code: "list",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * page: This is a page of content that is included in the implementation guide. It has no particular function.
   */
  Page: {
    display: "Page",
    code: "page",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * resource: This is a page that represents a presented resource. This is typically used for generated conformance resource presentations.
   */
  Resource: {
    display: "Resource",
    code: "resource",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
  /**
   * toc: This is a generated page that contains the table of contents.
   */
  TableOfContents: {
    display: "Table Of Contents",
    code: "toc",
    system: "http://hl7.org/fhir/guide-page-kind",
  },
} as const;
