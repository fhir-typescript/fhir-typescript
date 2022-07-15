/**
 * The type of link between this patient resource and another patient resource.
 */
export declare const LinkTypeCodes: {
    /**
     * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
     */
    readonly Refer: "refer";
    /**
     * replace: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
     */
    readonly Replace: "replace";
    /**
     * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
     */
    readonly SeeAlso: "seealso";
};
/**
 * The type of link between this patient resource and another patient resource.
 */
export declare type LinkTypeCodeType = typeof LinkTypeCodes[keyof typeof LinkTypeCodes];
//# sourceMappingURL=LinkTypeCodes.d.ts.map