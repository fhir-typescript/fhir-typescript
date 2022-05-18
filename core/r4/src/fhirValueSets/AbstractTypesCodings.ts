// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/abstract-types|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.
 */
export const AbstractTypesCodings = {
  /**
   * Any: A place holder that means any kind of resource
   */
  Any: new Coding({
    display: "Any",
    code: "Any",
    system: "http://hl7.org/fhir/abstract-types",
  }),
  /**
   * Type: A place holder that means any kind of data type
   */
  Type: new Coding({
    display: "Type",
    code: "Type",
    system: "http://hl7.org/fhir/abstract-types",
  }),
} as const;

/**
 * A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.
 */
export type AbstractTypesCodingType = typeof AbstractTypesCodings;
