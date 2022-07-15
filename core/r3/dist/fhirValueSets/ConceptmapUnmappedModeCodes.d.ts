/**
 * Defines which action to take if there is no match in the group.
 */
export declare const ConceptmapUnmappedModeCodes: {
    /**
     * fixed: Use the code explicitly provided in the group.unmapped
     */
    readonly FixedCode: "fixed";
    /**
     * other-map: Use the map identified by the canonical URL in URL
     */
    readonly OtherMap: "other-map";
    /**
     * provided: Use the code as provided in the $translate request
     */
    readonly ProvidedCode: "provided";
};
/**
 * Defines which action to take if there is no match in the group.
 */
export declare type ConceptmapUnmappedModeCodeType = typeof ConceptmapUnmappedModeCodes[keyof typeof ConceptmapUnmappedModeCodes];
//# sourceMappingURL=ConceptmapUnmappedModeCodes.d.ts.map