/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export declare const MapGroupTypeModeCodes: {
    /**
     * none: This group is not a default group for the types
     */
    readonly NotADefault: "none";
    /**
     * type-and-types: This group is a default mapping group for the specified types
     */
    readonly DefaultForTypePlusCombination: "type-and-types";
    /**
     * types: This group is a default mapping group for the specified types and for the primary source type
     */
    readonly DefaultForTypeCombination: "types";
};
/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export declare type MapGroupTypeModeCodeType = typeof MapGroupTypeModeCodes[keyof typeof MapGroupTypeModeCodes];
//# sourceMappingURL=MapGroupTypeModeCodes.d.ts.map