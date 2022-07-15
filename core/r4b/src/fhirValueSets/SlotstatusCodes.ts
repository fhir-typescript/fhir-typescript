// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/slotstatus|4.3.0

/**
 * The free/busy status of the slot.
 */
export const SlotstatusCodes = {
  /**
   * busy: Indicates that the time interval is busy because one  or more events have been scheduled for that interval.
   */
  Busy: "busy",
  /**
   * busy-tentative: Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.
   */
  BusyTentative: "busy-tentative",
  /**
   * busy-unavailable: Indicates that the time interval is busy and that the interval cannot be scheduled.
   */
  BusyUnavailable: "busy-unavailable",
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: "entered-in-error",
  /**
   * free: Indicates that the time interval is free for scheduling.
   */
  Free: "free",
} as const;

/**
 * The free/busy status of the slot.
 */
export type SlotstatusCodeType = typeof SlotstatusCodes[keyof typeof SlotstatusCodes];
