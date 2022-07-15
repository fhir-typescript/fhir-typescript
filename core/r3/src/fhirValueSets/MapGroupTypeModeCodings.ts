// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-group-type-mode|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export type MapGroupTypeModeCodingType = {
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
}

/**
 * If this is the default rule set to apply for the source type, or this combination of types
 */
export const MapGroupTypeModeCodings:MapGroupTypeModeCodingType = {
  /**
   * none: This group is not a default group for the types
   */
  NotADefault: {
    display: "Not a Default",
    code: "none",
    system: "http://hl7.org/fhir/map-group-type-mode",
  },
  /**
   * type-and-types: This group is a default mapping group for the specified types
   */
  DefaultForTypePlusCombination: {
    display: "Default for type + combination",
    code: "type-and-types",
    system: "http://hl7.org/fhir/map-group-type-mode",
  },
  /**
   * types: This group is a default mapping group for the specified types and for the primary source type
   */
  DefaultForTypeCombination: {
    display: "Default for Type Combination",
    code: "types",
    system: "http://hl7.org/fhir/map-group-type-mode",
  },
} as const;
