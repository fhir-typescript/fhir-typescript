import { Coding } from '../fhir/Coding.js';
/**
 * The status of the document reference.
 */
export declare const DocumentReferenceStatusCodings: {
    /**
     * current: This is the current reference for this document.
     */
    readonly Current: Coding;
    /**
     * entered-in-error: This reference was created in error.
     */
    readonly EnteredInError: Coding;
    /**
     * superseded: This reference has been superseded by another reference.
     */
    readonly Superseded: Coding;
};
/**
 * The status of the document reference.
 */
export declare type DocumentReferenceStatusCodingType = typeof DocumentReferenceStatusCodings;
//# sourceMappingURL=DocumentReferenceStatusCodings.d.ts.map