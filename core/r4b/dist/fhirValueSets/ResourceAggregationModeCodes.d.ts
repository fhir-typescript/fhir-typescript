/**
 * How resource references can be aggregated.
 */
export declare const ResourceAggregationModeCodes: {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    readonly Bundled: "bundled";
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    readonly Contained: "contained";
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    readonly Referenced: "referenced";
};
/**
 * How resource references can be aggregated.
 */
export declare type ResourceAggregationModeCodeType = typeof ResourceAggregationModeCodes[keyof typeof ResourceAggregationModeCodes];
//# sourceMappingURL=ResourceAggregationModeCodes.d.ts.map