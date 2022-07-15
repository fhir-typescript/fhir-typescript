/**
 * How an element value is interpreted when discrimination is evaluated
 */
export declare const DiscriminatorTypeCodes: {
    /**
     * exists: The slices are differentiated by the presence or absence of the nominated element
     */
    readonly Exists: "exists";
    /**
     * pattern: The slices have different values in the nominated element, as determined by testing them against the applicable ElementDefinition.pattern[x]
     */
    readonly Pattern: "pattern";
    /**
     * profile: The slices are differentiated by conformance of the nominated element to a specifed profile
     */
    readonly Profile: "profile";
    /**
     * type: The slices are differentiated by type of the nominated element to a specifed profile
     */
    readonly Type: "type";
    /**
     * value: The slices have different values in the nominated element
     */
    readonly Value: "value";
};
/**
 * How an element value is interpreted when discrimination is evaluated
 */
export declare type DiscriminatorTypeCodeType = typeof DiscriminatorTypeCodes[keyof typeof DiscriminatorTypeCodes];
//# sourceMappingURL=DiscriminatorTypeCodes.d.ts.map