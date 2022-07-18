// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adjudication-error|3.0.2

/**
 * This value set includes a smattering of adjudication codes.
 */
export const AdjudicationErrorCodes = {
  /**
   * a001: Missing Identifier
   */
  MissingIdentifier: "a001",
  /**
   * a002: Missing Creation Date
   */
  MissingCreationDate: "a002",
} as const;

/**
 * This value set includes a smattering of adjudication codes.
 */
export type AdjudicationErrorCodeType = typeof AdjudicationErrorCodes[keyof typeof AdjudicationErrorCodes];