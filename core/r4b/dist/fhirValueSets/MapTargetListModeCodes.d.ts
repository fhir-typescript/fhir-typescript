/**
 * If field is a list, how to manage the production.
 */
export declare const MapTargetListModeCodes: {
    /**
     * collate: re-use the first item in the list, and keep adding content to it.
     */
    readonly Collate: "collate";
    /**
     * first: when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
     */
    readonly First: "first";
    /**
     * last: when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
     */
    readonly Last: "last";
    /**
     * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
     */
    readonly Share: "share";
};
/**
 * If field is a list, how to manage the production.
 */
export declare type MapTargetListModeCodeType = typeof MapTargetListModeCodes[keyof typeof MapTargetListModeCodes];
//# sourceMappingURL=MapTargetListModeCodes.d.ts.map