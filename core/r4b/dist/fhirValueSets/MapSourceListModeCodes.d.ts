/**
 * If field is a list, how to manage the source.
 */
export declare const MapSourceListModeCodes: {
    /**
     * first: Only process this rule for the first in the list.
     */
    readonly First: "first";
    /**
     * last: Only process this rule for the last in the list.
     */
    readonly Last: "last";
    /**
     * not_first: Process this rule for all but the first.
     */
    readonly AllButTheFirst: "not_first";
    /**
     * not_last: Process this rule for all but the last.
     */
    readonly AllButTheLast: "not_last";
    /**
     * only_one: Only process this rule is there is only item.
     */
    readonly EnforceOnlyOne: "only_one";
};
/**
 * If field is a list, how to manage the source.
 */
export declare type MapSourceListModeCodeType = typeof MapSourceListModeCodes[keyof typeof MapSourceListModeCodes];
//# sourceMappingURL=MapSourceListModeCodes.d.ts.map