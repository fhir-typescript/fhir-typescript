/**
 * The status of the document reference.
 */
export declare const DocumentReferenceStatusCodes: {
    /**
     * current: This is the current reference for this document.
     */
    readonly Current: "current";
    /**
     * entered-in-error: This reference was created in error.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * superseded: This reference has been superseded by another reference.
     */
    readonly Superseded: "superseded";
};
/**
 * The status of the document reference.
 */
export declare type DocumentReferenceStatusCodeType = typeof DocumentReferenceStatusCodes[keyof typeof DocumentReferenceStatusCodes];
//# sourceMappingURL=DocumentReferenceStatusCodes.d.ts.map