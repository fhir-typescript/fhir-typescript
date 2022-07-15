/**
 * How a dependency is represented when the guide is published.
 */
export declare const GuideDependencyTypeCodes: {
    /**
     * inclusion: The guide is embedded in this guide when published.
     */
    readonly Inclusion: "inclusion";
    /**
     * reference: The guide is referred to by URL.
     */
    readonly Reference: "reference";
};
/**
 * How a dependency is represented when the guide is published.
 */
export declare type GuideDependencyTypeCodeType = typeof GuideDependencyTypeCodes[keyof typeof GuideDependencyTypeCodes];
//# sourceMappingURL=GuideDependencyTypeCodes.d.ts.map