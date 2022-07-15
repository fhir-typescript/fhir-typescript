// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-response-code-types|1.0.2

/**
 * The type of response code to use for assertion.
 * 
 * The response code to expect in the response.
 */
export const AssertResponseCodeTypesCodes = {
  /**
   * bad: Response code is 400.
   */
  Bad: "bad",
  /**
   * conflict: Response code is 409.
   */
  Conflict: "conflict",
  /**
   * created: Response code is 201.
   */
  Created: "created",
  /**
   * forbidden: Response code is 403.
   */
  Forbidden: "forbidden",
  /**
   * gone: Response code is 410.
   */
  Gone: "gone",
  /**
   * methodNotAllowed: Response code is 405.
   */
  MethodNotAllowed: "methodNotAllowed",
  /**
   * noContent: Response code is 204.
   */
  NoContent: "noContent",
  /**
   * notFound: Response code is 404.
   */
  NotFound: "notFound",
  /**
   * notModified: Response code is 304.
   */
  NotModified: "notModified",
  /**
   * okay: Response code is 200.
   */
  Okay: "okay",
  /**
   * preconditionFailed: Response code is 412.
   */
  PreconditionFailed: "preconditionFailed",
  /**
   * unprocessable: Response code is 422.
   */
  Unprocessable: "unprocessable",
} as const;

/**
 * The type of response code to use for assertion.
 * 
 * The response code to expect in the response.
 */
export type AssertResponseCodeTypesCodeType = typeof AssertResponseCodeTypesCodes[keyof typeof AssertResponseCodeTypesCodes];
