// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/trigger-type|3.0.2

/**
 * The type of trigger
 */
export const TriggerTypeCodes = {
  /**
   * data-access-ended: The trigger occurs whenever access to data of a particular type is completed
   */
  DataAccessEnded: "data-access-ended",
  /**
   * data-accessed: The trigger occurs whenever data of a particular type is accessed
   */
  DataAccessed: "data-accessed",
  /**
   * data-added: The trigger occurs whenever data of a particular type is added
   */
  DataAdded: "data-added",
  /**
   * data-modified: The trigger occurs whenever data of a particular type is modified
   */
  DataModified: "data-modified",
  /**
   * data-removed: The trigger occurs whenever data of a particular type is removed
   */
  DataRemoved: "data-removed",
  /**
   * named-event: The trigger occurs in response to a specific named event
   */
  NamedEvent: "named-event",
  /**
   * periodic: The trigger occurs at a specific time or periodically as described by a timing or schedule
   */
  Periodic: "periodic",
} as const;

/**
 * The type of trigger
 */
export type TriggerTypeCodeType = typeof TriggerTypeCodes[keyof typeof TriggerTypeCodes];
