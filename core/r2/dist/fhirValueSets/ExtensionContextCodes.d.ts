/**
 * How an extension context is interpreted.
 */
export declare const ExtensionContextCodes: {
    /**
     * datatype: The context is all nodes matching a particular data type element path (root or repeating element) or all elements referencing a particular primitive data type (expressed as the datatype name).
     */
    readonly Datatype: "datatype";
    /**
     * extension: The context is a particular extension from a particular profile, a uri that identifies the extension definition.
     */
    readonly Extension: "extension";
    /**
     * mapping: The context is all nodes whose mapping to a specified reference model corresponds to a particular mapping structure.  The context identifies the mapping target. The mapping should clearly identify where such an extension could be used.
     */
    readonly Mapping: "mapping";
    /**
     * resource: The context is all elements matching a particular resource element path.
     */
    readonly Resource: "resource";
};
/**
 * How an extension context is interpreted.
 */
export declare type ExtensionContextCodeType = typeof ExtensionContextCodes[keyof typeof ExtensionContextCodes];
//# sourceMappingURL=ExtensionContextCodes.d.ts.map