import { CodingArgs } from '../fhir/Coding.js';
/**
 * How resource references can be aggregated.
 */
export declare type ResourceAggregationModeCodingType = {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    Bundled: CodingArgs;
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    Contained: CodingArgs;
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    Referenced: CodingArgs;
};
/**
 * How resource references can be aggregated.
 */
export declare const ResourceAggregationModeCodings: ResourceAggregationModeCodingType;
//# sourceMappingURL=ResourceAggregationModeCodings.d.ts.map