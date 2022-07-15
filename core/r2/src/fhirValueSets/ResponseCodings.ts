// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/response-code|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The kind of response to a message
 */
export type ResponseCodingType = {
  /**
   * fatal-error: The message was rejected because of some content in it. There is no point in re-sending without change. The response narrative SHALL describe the issue.
   */
  FatalError: CodingArgs;
  /**
   * ok: The message was accepted and processed without error.
   */
  OK: CodingArgs;
  /**
   * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
   */
  TransientError: CodingArgs;
}

/**
 * The kind of response to a message
 */
export const ResponseCodings:ResponseCodingType = {
  /**
   * fatal-error: The message was rejected because of some content in it. There is no point in re-sending without change. The response narrative SHALL describe the issue.
   */
  FatalError: {
    display: "Fatal Error",
    code: "fatal-error",
    system: "http://hl7.org/fhir/response-code",
  },
  /**
   * ok: The message was accepted and processed without error.
   */
  OK: {
    display: "OK",
    code: "ok",
    system: "http://hl7.org/fhir/response-code",
  },
  /**
   * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
   */
  TransientError: {
    display: "Transient Error",
    code: "transient-error",
    system: "http://hl7.org/fhir/response-code",
  },
} as const;
