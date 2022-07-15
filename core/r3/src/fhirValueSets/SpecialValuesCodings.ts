// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/special-values|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export type SpecialValuesCodingType = {
  /**
   * false: Boolean false.
   */
  False: CodingArgs;
  /**
   * nil-known: The are no known applicable values in this context.
   */
  NilKnown: CodingArgs;
  /**
   * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
   */
  SufficientQuantity: CodingArgs;
  /**
   * trace: The content is greater than zero, but too small to be quantified.
   */
  TraceAmountDetected: CodingArgs;
  /**
   * true: Boolean true.
   */
  True: CodingArgs;
  /**
   * withdrawn: The value is no longer available.
   */
  ValueWithdrawn: CodingArgs;
}

/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export const SpecialValuesCodings:SpecialValuesCodingType = {
  /**
   * false: Boolean false.
   */
  False: {
    display: "false",
    code: "false",
    system: "http://hl7.org/fhir/special-values",
  },
  /**
   * nil-known: The are no known applicable values in this context.
   */
  NilKnown: {
    display: "Nil Known",
    code: "nil-known",
    system: "http://hl7.org/fhir/special-values",
  },
  /**
   * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
   */
  SufficientQuantity: {
    display: "Sufficient Quantity",
    code: "sufficient",
    system: "http://hl7.org/fhir/special-values",
  },
  /**
   * trace: The content is greater than zero, but too small to be quantified.
   */
  TraceAmountDetected: {
    display: "Trace Amount Detected",
    code: "trace",
    system: "http://hl7.org/fhir/special-values",
  },
  /**
   * true: Boolean true.
   */
  True: {
    display: "true",
    code: "true",
    system: "http://hl7.org/fhir/special-values",
  },
  /**
   * withdrawn: The value is no longer available.
   */
  ValueWithdrawn: {
    display: "Value Withdrawn",
    code: "withdrawn",
    system: "http://hl7.org/fhir/special-values",
  },
} as const;
