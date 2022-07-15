/**
 * The kind of an included page.
 */
export declare const GuidePageKindCodes: {
    /**
     * dictionary: This is a page that creates the listed resources as a dictionary.
     */
    readonly Dictionary: "dictionary";
    /**
     * directory: This is a page that lists the resources of a given type, and also creates pages for all the listed types as other pages in the section.
     */
    readonly Directory: "directory";
    /**
     * example: This is a page that represents a human readable rendering of an example.
     */
    readonly Example: "example";
    /**
     * include: This is a page showing where an included guide is injected.
     */
    readonly Include: "include";
    /**
     * list: This is a page that represents a list of resources of one or more types.
     */
    readonly List: "list";
    /**
     * page: This is a page of content that is included in the implementation guide. It has no particular function.
     */
    readonly Page: "page";
    /**
     * resource: This is a page that represents a presented resource. This is typically used for generated conformance resource presentations.
     */
    readonly Resource: "resource";
    /**
     * toc: This is a generated page that contains the table of contents.
     */
    readonly TableOfContents: "toc";
};
/**
 * The kind of an included page.
 */
export declare type GuidePageKindCodeType = typeof GuidePageKindCodes[keyof typeof GuidePageKindCodes];
//# sourceMappingURL=GuidePageKindCodes.d.ts.map