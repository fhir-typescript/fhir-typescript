import { CodingArgs } from '../fhir/Coding.js';
/**
 * The content or mime type.
 */
export declare type ContentTypeCodingType = {
    /**
     * json: JSON content-type corresponding to the application/fhir+json mime-type.
     */
    Json: CodingArgs;
    /**
     * none: Prevent the use of the corresponding http header.
     */
    None: CodingArgs;
    /**
     * ttl: RDF content-type corresponding to the text/turtle mime-type.
     */
    Ttl: CodingArgs;
    /**
     * xml: XML content-type corresponding to the application/fhir+xml mime-type.
     */
    Xml: CodingArgs;
};
/**
 * The content or mime type.
 */
export declare const ContentTypeCodings: ContentTypeCodingType;
//# sourceMappingURL=ContentTypeCodings.d.ts.map