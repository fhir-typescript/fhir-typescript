// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-direction-codes|3.0.2

/**
 * The type of direction to use for assertion.
 */
export const AssertDirectionCodes = {
  /**
   * request: The assertion is evaluated on the request.
   */
  Request: "request",
  /**
   * response: The assertion is evaluated on the response. This is the default value.
   */
  Response: "response",
} as const;

/**
 * The type of direction to use for assertion.
 */
export type AssertDirectionCodeType = typeof AssertDirectionCodes[keyof typeof AssertDirectionCodes];
