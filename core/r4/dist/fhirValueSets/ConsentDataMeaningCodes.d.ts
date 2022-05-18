/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare const ConsentDataMeaningCodes: {
    /**
     * authoredby: The consent applies to instances of resources that are authored by.
     */
    readonly AuthoredBy: "authoredby";
    /**
     * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
     */
    readonly Dependents: "dependents";
    /**
     * instance: The consent applies directly to the instance of the resource.
     */
    readonly Instance: "instance";
    /**
     * related: The consent applies directly to the instance of the resource and instances it refers to.
     */
    readonly Related: "related";
};
/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export declare type ConsentDataMeaningCodeType = typeof ConsentDataMeaningCodes[keyof typeof ConsentDataMeaningCodes];
//# sourceMappingURL=ConsentDataMeaningCodes.d.ts.map