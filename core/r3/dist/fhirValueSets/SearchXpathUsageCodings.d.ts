import { CodingArgs } from '../fhir/Coding.js';
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare type SearchXpathUsageCodingType = {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    Distance: CodingArgs;
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    Nearby: CodingArgs;
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    Normal: CodingArgs;
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    Other: CodingArgs;
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    Phonetic: CodingArgs;
};
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare const SearchXpathUsageCodings: SearchXpathUsageCodingType;
//# sourceMappingURL=SearchXpathUsageCodings.d.ts.map