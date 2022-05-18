// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guidance-response-status|4.0.1

/**
 * The status of a guidance response.
 */
export const GuidanceResponseStatusCodes = {
  /**
   * data-requested: The request was processed successfully, but more data may result in a more complete evaluation.
   */
  DataRequested: "data-requested",
  /**
   * data-required: The request was processed, but more data is required to complete the evaluation.
   */
  DataRequired: "data-required",
  /**
   * entered-in-error: The response was entered in error.
   */
  EnteredInError: "entered-in-error",
  /**
   * failure: The request was not processed successfully.
   */
  Failure: "failure",
  /**
   * in-progress: The request is currently being processed.
   */
  InProgress: "in-progress",
  /**
   * success: The request was processed successfully.
   */
  Success: "success",
} as const;

/**
 * The status of a guidance response.
 */
export type GuidanceResponseStatusCodeType = typeof GuidanceResponseStatusCodes[keyof typeof GuidanceResponseStatusCodes];