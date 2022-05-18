// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/special-values|4.0.1

/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export const SpecialValuesCodes = {
  /**
   * false: Boolean false.
   */
  False: "false",
  /**
   * nil-known: The are no known applicable values in this context.
   */
  NilKnown: "nil-known",
  /**
   * sufficient: The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
   */
  SufficientQuantity: "sufficient",
  /**
   * trace: The content is greater than zero, but too small to be quantified.
   */
  TraceAmountDetected: "trace",
  /**
   * true: Boolean true.
   */
  True: "true",
  /**
   * withdrawn: The value is no longer available.
   */
  ValueWithdrawn: "withdrawn",
} as const;

/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
export type SpecialValuesCodeType = typeof SpecialValuesCodes[keyof typeof SpecialValuesCodes];
