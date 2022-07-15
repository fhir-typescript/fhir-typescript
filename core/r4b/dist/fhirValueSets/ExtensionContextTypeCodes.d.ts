/**
 * How an extension context is interpreted.
 */
export declare const ExtensionContextTypeCodes: {
    /**
     * element: The context is any element that has an ElementDefinition.id that matches that found in the expression. This includes ElementDefinition Ids that have slicing identifiers. The full path for the element is [url]#[elementid]. If there is no #, the Element id is one defined in the base specification.
     */
    readonly ElementID: "element";
    /**
     * extension: The context is a particular extension from a particular StructureDefinition, and the expression is just a uri that identifies the extension.
     */
    readonly ExtensionURL: "extension";
    /**
     * fhirpath: The context is all elements that match the FHIRPath query found in the expression.
     */
    readonly FHIRPath: "fhirpath";
};
/**
 * How an extension context is interpreted.
 */
export declare type ExtensionContextTypeCodeType = typeof ExtensionContextTypeCodes[keyof typeof ExtensionContextTypeCodes];
//# sourceMappingURL=ExtensionContextTypeCodes.d.ts.map