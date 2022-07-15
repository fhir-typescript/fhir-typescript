/**
 * What Search Comparator Codes are supported in search
 */
export declare const SearchComparatorCodes: {
    /**
     * ap: the value for the parameter in the resource is approximately the same to the provided value.
     */
    readonly Approximately: "ap";
    /**
     * eb: the value for the parameter in the resource ends before the provided value
     */
    readonly EndsBefore: "eb";
    /**
     * eq: the value for the parameter in the resource is equal to the provided value
     */
    readonly Equals: "eq";
    /**
     * ge: the value for the parameter in the resource is greater or equal to the provided value
     */
    readonly GreaterOrEquals: "ge";
    /**
     * gt: the value for the parameter in the resource is greater than the provided value
     */
    readonly GreaterThan: "gt";
    /**
     * le: the value for the parameter in the resource is less or equal to the provided value
     */
    readonly LessOfEqual: "le";
    /**
     * lt: the value for the parameter in the resource is less than the provided value
     */
    readonly LessThen: "lt";
    /**
     * ne: the value for the parameter in the resource is not equal to the provided value
     */
    readonly NotEquals: "ne";
    /**
     * sa: the value for the parameter in the resource starts after the provided value
     */
    readonly StartsAfter: "sa";
};
/**
 * What Search Comparator Codes are supported in search
 */
export declare type SearchComparatorCodeType = typeof SearchComparatorCodes[keyof typeof SearchComparatorCodes];
//# sourceMappingURL=SearchComparatorCodes.d.ts.map