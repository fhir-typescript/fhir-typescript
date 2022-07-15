// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/actionlist|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * List of allowable action which this resource can request.
 */
export type ActionlistCodingType = {
  /**
   * cancel: Cancel, reverse or nullify the target resource.
   */
  CancelReverseOrNullify: CodingArgs;
  /**
   * poll: Check for previously un-read/ not-retrieved resources.
   */
  Poll: CodingArgs;
  /**
   * reprocess: Re-process the target resource.
   */
  ReProcess: CodingArgs;
  /**
   * status: Retrieve the processing status of the target resource.
   */
  StatusCheck: CodingArgs;
}

/**
 * List of allowable action which this resource can request.
 */
export const ActionlistCodings:ActionlistCodingType = {
  /**
   * cancel: Cancel, reverse or nullify the target resource.
   */
  CancelReverseOrNullify: {
    display: "Cancel, Reverse or Nullify",
    code: "cancel",
    system: "http://hl7.org/fhir/actionlist",
  },
  /**
   * poll: Check for previously un-read/ not-retrieved resources.
   */
  Poll: {
    display: "Poll",
    code: "poll",
    system: "http://hl7.org/fhir/actionlist",
  },
  /**
   * reprocess: Re-process the target resource.
   */
  ReProcess: {
    display: "Re-Process",
    code: "reprocess",
    system: "http://hl7.org/fhir/actionlist",
  },
  /**
   * status: Retrieve the processing status of the target resource.
   */
  StatusCheck: {
    display: "Status Check",
    code: "status",
    system: "http://hl7.org/fhir/actionlist",
  },
} as const;
