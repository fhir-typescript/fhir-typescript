/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare const SearchXpathUsageCodes: {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    readonly Distance: "distance";
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    readonly Nearby: "nearby";
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    readonly Normal: "normal";
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    readonly Other: "other";
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    readonly Phonetic: "phonetic";
};
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare type SearchXpathUsageCodeType = typeof SearchXpathUsageCodes[keyof typeof SearchXpathUsageCodes];
//# sourceMappingURL=SearchXpathUsageCodes.d.ts.map