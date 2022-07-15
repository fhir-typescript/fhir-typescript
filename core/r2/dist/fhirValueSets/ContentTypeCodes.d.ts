/**
 * The content or mime type.
 *
 * The content type or mime type to be specified in Accept or Content-Type header.
 */
export declare const ContentTypeCodes: {
    /**
     * json: JSON content-type corresponding to the application/json+fhir mime-type.
     */
    readonly Json: "json";
    /**
     * xml: XML content-type corresponding to the application/xml+fhir mime-type.
     */
    readonly Xml: "xml";
};
/**
 * The content or mime type.
 *
 * The content type or mime type to be specified in Accept or Content-Type header.
 */
export declare type ContentTypeCodeType = typeof ContentTypeCodes[keyof typeof ContentTypeCodes];
//# sourceMappingURL=ContentTypeCodes.d.ts.map