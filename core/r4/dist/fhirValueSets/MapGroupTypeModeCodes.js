/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-group-type-mode|4.0.1
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
var MapGroupTypeModeCodes = {
    /**
     * none: This group is not a default group for the types.
     */
    NotADefault: "none",
    /**
     * type-and-types: This group is a default mapping group for the specified types.
     */
    DefaultForTypePlusCombination: "type-and-types",
    /**
     * types: This group is a default mapping group for the specified types and for the primary source type.
     */
    DefaultForTypeCombination: "types",
};

export { MapGroupTypeModeCodes };
//# sourceMappingURL=MapGroupTypeModeCodes.js.map
