import { Coding } from '../fhir/Coding.js';
/**
 * How resource references can be aggregated.
 */
export declare const ResourceAggregationModeCodings: {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    readonly Bundled: Coding;
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    readonly Contained: Coding;
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    readonly Referenced: Coding;
};
/**
 * How resource references can be aggregated.
 */
export declare type ResourceAggregationModeCodingType = typeof ResourceAggregationModeCodings;
//# sourceMappingURL=ResourceAggregationModeCodings.d.ts.map