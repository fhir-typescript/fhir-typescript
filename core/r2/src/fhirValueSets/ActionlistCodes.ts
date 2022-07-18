// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/actionlist|1.0.2

/**
 * List of allowable action which this resource can request.
 */
export const ActionlistCodes = {
  /**
   * cancel: Cancel, reverse or nullify the target resource.
   */
  CancelReverseOrNullify: "cancel",
  /**
   * poll: Check for previously un-read/ not-retrieved resources.
   */
  Poll: "poll",
  /**
   * reprocess: Re-process the target resource.
   */
  ReProcess: "reprocess",
  /**
   * status: Retrieve the processing status of the target resource.
   */
  StatusCheck: "status",
} as const;

/**
 * List of allowable action which this resource can request.
 */
export type ActionlistCodeType = typeof ActionlistCodes[keyof typeof ActionlistCodes];