// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-group-type-mode|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export const MapGroupTypeModeCodings = {
  /**
   * none: This group is not a default group for the types.
   */
  NotADefault: new Coding({
    display: "Not a Default",
    code: "none",
    system: "http://hl7.org/fhir/map-group-type-mode",
  }),
  /**
   * type-and-types: This group is a default mapping group for the specified types.
   */
  DefaultForTypePlusCombination: new Coding({
    display: "Default for type + combination",
    code: "type-and-types",
    system: "http://hl7.org/fhir/map-group-type-mode",
  }),
  /**
   * types: This group is a default mapping group for the specified types and for the primary source type.
   */
  DefaultForTypeCombination: new Coding({
    display: "Default for Type Combination",
    code: "types",
    system: "http://hl7.org/fhir/map-group-type-mode",
  }),
} as const;

/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export type MapGroupTypeModeCodingType = typeof MapGroupTypeModeCodings;
