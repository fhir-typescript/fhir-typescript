/**
 * The content or mime type.
 */
export declare const ContentTypeCodes: {
    /**
     * json: JSON content-type corresponding to the application/fhir+json mime-type.
     */
    readonly Json: "json";
    /**
     * none: Prevent the use of the corresponding http header.
     */
    readonly None: "none";
    /**
     * ttl: RDF content-type corresponding to the text/turtle mime-type.
     */
    readonly Ttl: "ttl";
    /**
     * xml: XML content-type corresponding to the application/fhir+xml mime-type.
     */
    readonly Xml: "xml";
};
/**
 * The content or mime type.
 */
export declare type ContentTypeCodeType = typeof ContentTypeCodes[keyof typeof ContentTypeCodes];
//# sourceMappingURL=ContentTypeCodes.d.ts.map