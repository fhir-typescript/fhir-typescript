// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/operation-parameter-use|1.0.2

/**
 * Whether an operation parameter is an input or an output parameter.
 */
export const OperationParameterUseCodes = {
  /**
   * in: This is an input parameter.
   */
  In: "in",
  /**
   * out: This is an output parameter.
   */
  Out: "out",
} as const;

/**
 * Whether an operation parameter is an input or an output parameter.
 */
export type OperationParameterUseCodeType = typeof OperationParameterUseCodes[keyof typeof OperationParameterUseCodes];
