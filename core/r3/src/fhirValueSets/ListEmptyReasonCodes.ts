// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-empty-reason|3.0.2

/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export const ListEmptyReasonCodes = {
  /**
   * closed: This list has now closed or has ceased to be relevant or useful.
   */
  Closed: "closed",
  /**
   * nilknown: Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.
   */
  NilKnown: "nilknown",
  /**
   * notasked: The investigation to find out whether there are items for this list has not occurred.
   */
  NotAsked: "notasked",
  /**
   * notstarted: The work to populate this list has not yet begun.
   */
  NotStarted: "notstarted",
  /**
   * unavailable: Information to populate this list cannot be obtained; e.g. unconscious patient.
   */
  Unavailable: "unavailable",
  /**
   * withheld: The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.
   */
  InformationWithheld: "withheld",
} as const;

/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export type ListEmptyReasonCodeType = typeof ListEmptyReasonCodes[keyof typeof ListEmptyReasonCodes];