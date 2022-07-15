import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of relationship between documents.
 */
export declare type DocumentRelationshipTypeCodingType = {
    /**
     * appends: This document adds additional information to the target document.
     */
    Appends: CodingArgs;
    /**
     * replaces: This document logically replaces or supersedes the target document.
     */
    Replaces: CodingArgs;
    /**
     * signs: This document is a signature of the target document.
     */
    Signs: CodingArgs;
    /**
     * transforms: This document was generated by transforming the target document (e.g. format or language conversion).
     */
    Transforms: CodingArgs;
};
/**
 * The type of relationship between documents.
 */
export declare const DocumentRelationshipTypeCodings: DocumentRelationshipTypeCodingType;
//# sourceMappingURL=DocumentRelationshipTypeCodings.d.ts.map