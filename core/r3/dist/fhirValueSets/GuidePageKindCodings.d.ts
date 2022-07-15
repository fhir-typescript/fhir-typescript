import { CodingArgs } from '../fhir/Coding.js';
/**
 * The kind of an included page.
 */
export declare type GuidePageKindCodingType = {
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
};
/**
 * The kind of an included page.
 */
export declare const GuidePageKindCodings: GuidePageKindCodingType;
//# sourceMappingURL=GuidePageKindCodings.d.ts.map