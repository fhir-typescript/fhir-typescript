// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/guidance-response-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of a guidance response
 */
export type GuidanceResponseStatusCodingType = {
  /**
   * data-requested: The request was processed successfully, but more data may result in a more complete evaluation
   */
  DataRequested: CodingArgs;
  /**
   * data-required: The request was processed, but more data is required to complete the evaluation
   */
  DataRequired: CodingArgs;
  /**
   * entered-in-error: The response was entered in error
   */
  EnteredInError: CodingArgs;
  /**
   * failure: The request was not processed successfully
   */
  Failure: CodingArgs;
  /**
   * in-progress: The request is currently being processed
   */
  InProgress: CodingArgs;
  /**
   * success: The request was processed successfully
   */
  Success: CodingArgs;
}

/**
 * The status of a guidance response
 */
export const GuidanceResponseStatusCodings:GuidanceResponseStatusCodingType = {
  /**
   * data-requested: The request was processed successfully, but more data may result in a more complete evaluation
   */
  DataRequested: {
    display: "Data Requested",
    code: "data-requested",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
  /**
   * data-required: The request was processed, but more data is required to complete the evaluation
   */
  DataRequired: {
    display: "Data Required",
    code: "data-required",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
  /**
   * entered-in-error: The response was entered in error
   */
  EnteredInError: {
    display: "Entered In Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
  /**
   * failure: The request was not processed successfully
   */
  Failure: {
    display: "Failure",
    code: "failure",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
  /**
   * in-progress: The request is currently being processed
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
  /**
   * success: The request was processed successfully
   */
  Success: {
    display: "Success",
    code: "success",
    system: "http://hl7.org/fhir/guidance-response-status",
  },
} as const;
