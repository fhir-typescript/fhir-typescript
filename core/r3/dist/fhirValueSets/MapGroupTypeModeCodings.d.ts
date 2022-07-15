import { CodingArgs } from '../fhir/Coding.js';
/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export declare type MapGroupTypeModeCodingType = {
    /**
     * none: This group is not a default group for the types
     */
    NotADefault: CodingArgs;
    /**
     * type-and-types: This group is a default mapping group for the specified types
     */
    DefaultForTypePlusCombination: CodingArgs;
    /**
     * types: This group is a default mapping group for the specified types and for the primary source type
     */
    DefaultForTypeCombination: CodingArgs;
};
/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export declare const MapGroupTypeModeCodings: MapGroupTypeModeCodingType;
//# sourceMappingURL=MapGroupTypeModeCodings.d.ts.map