// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/abstract-types|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A type defined by FHIR that is an abstract type
 */
export type AbstractTypesCodingType = {
  /**
   * Any: A place holder that means any kind of resource
   */
  Any: CodingArgs;
  /**
   * Type: A place holder that means any kind of data type
   */
  Type: CodingArgs;
}

/**
 * A type defined by FHIR that is an abstract type
 */
export const AbstractTypesCodings:AbstractTypesCodingType = {
  /**
   * Any: A place holder that means any kind of resource
   */
  Any: {
    display: "Any",
    code: "Any",
    system: "http://hl7.org/fhir/abstract-types",
  },
  /**
   * Type: A place holder that means any kind of data type
   */
  Type: {
    display: "Type",
    code: "Type",
    system: "http://hl7.org/fhir/abstract-types",
  },
} as const;