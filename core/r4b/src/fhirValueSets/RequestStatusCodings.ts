// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/request-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes identifying the lifecycle stage of a request.
 */
export type RequestStatusCodingType = {
  /**
   * active: The request is in force and ready to be acted upon.
   */
  Active: CodingArgs;
  /**
   * completed: The activity described by the request has been fully performed.  No further activity will occur.
   */
  Completed: CodingArgs;
  /**
   * draft: The request has been created but is not yet complete or ready for action.
   */
  Draft: CodingArgs;
  /**
   * entered-in-error: This request should never have existed and should be considered 'void'.  (It is possible that real-world decisions were based on it.  If real-world activity has occurred, the status should be "revoked" rather than "entered-in-error".).
   */
  EnteredInError: CodingArgs;
  /**
   * on-hold: The request (and any implicit authorization to act) has been temporarily withdrawn but is expected to resume in the future.
   */
  OnHold: CodingArgs;
  /**
   * revoked: The request (and any implicit authorization to act) has been terminated prior to the known full completion of the intended actions.  No further activity should occur.
   */
  Revoked: CodingArgs;
  /**
   * unknown: The authoring/source system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
   */
  Unknown: CodingArgs;
}

/**
 * Codes identifying the lifecycle stage of a request.
 */
export const RequestStatusCodings:RequestStatusCodingType = {
  /**
   * active: The request is in force and ready to be acted upon.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * completed: The activity described by the request has been fully performed.  No further activity will occur.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * draft: The request has been created but is not yet complete or ready for action.
   */
  Draft: {
    display: "Draft",
    code: "draft",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * entered-in-error: This request should never have existed and should be considered 'void'.  (It is possible that real-world decisions were based on it.  If real-world activity has occurred, the status should be "revoked" rather than "entered-in-error".).
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * on-hold: The request (and any implicit authorization to act) has been temporarily withdrawn but is expected to resume in the future.
   */
  OnHold: {
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * revoked: The request (and any implicit authorization to act) has been terminated prior to the known full completion of the intended actions.  No further activity should occur.
   */
  Revoked: {
    display: "Revoked",
    code: "revoked",
    system: "http://hl7.org/fhir/request-status",
  },
  /**
   * unknown: The authoring/source system does not know which of the status values currently applies for this request.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply,  but the authoring/source system does not know which.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/request-status",
  },
} as const;
