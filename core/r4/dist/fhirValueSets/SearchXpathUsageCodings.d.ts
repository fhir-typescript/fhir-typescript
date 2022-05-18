import { Coding } from '../fhir/Coding.js';
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare const SearchXpathUsageCodings: {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    readonly Distance: Coding;
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    readonly Nearby: Coding;
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    readonly Normal: Coding;
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    readonly Other: Coding;
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    readonly Phonetic: Coding;
};
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare type SearchXpathUsageCodingType = typeof SearchXpathUsageCodings;
//# sourceMappingURL=SearchXpathUsageCodings.d.ts.map