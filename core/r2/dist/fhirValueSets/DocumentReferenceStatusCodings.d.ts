import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the document reference.
 */
export declare type DocumentReferenceStatusCodingType = {
    /**
     * current: This is the current reference for this document.
     */
    Current: CodingArgs;
    /**
     * entered-in-error: This reference was created in error.
     */
    EnteredInError: CodingArgs;
    /**
     * superseded: This reference has been superseded by another reference.
     */
    Superseded: CodingArgs;
};
/**
 * The status of the document reference.
 */
export declare const DocumentReferenceStatusCodings: DocumentReferenceStatusCodingType;
//# sourceMappingURL=DocumentReferenceStatusCodings.d.ts.map