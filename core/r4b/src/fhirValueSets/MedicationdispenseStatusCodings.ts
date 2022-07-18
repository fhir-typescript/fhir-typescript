// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationdispense-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * MedicationDispense Status Codes
 */
export type MedicationdispenseStatusCodingType = {
  /**
   * cancelled: The dispensed product was not and will never be picked up by the patient.
   */
  Cancelled: CodingArgs;
  /**
   * completed: The dispensed product has been picked up.
   */
  Completed: CodingArgs;
  /**
   * declined: The dispense was declined and not performed.
   */
  Declined: CodingArgs;
  /**
   * entered-in-error: The dispense was entered in error and therefore nullified.
   */
  EnteredInError: CodingArgs;
  /**
   * in-progress: The dispensed product is ready for pickup.
   */
  InProgress: CodingArgs;
  /**
   * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
   */
  OnHold: CodingArgs;
  /**
   * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
   */
  Preparation: CodingArgs;
  /**
   * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
   */
  Stopped: CodingArgs;
  /**
   * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
   */
  Unknown: CodingArgs;
}

/**
 * MedicationDispense Status Codes
 */
export const MedicationdispenseStatusCodings:MedicationdispenseStatusCodingType = {
  /**
   * cancelled: The dispensed product was not and will never be picked up by the patient.
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * completed: The dispensed product has been picked up.
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * declined: The dispense was declined and not performed.
   */
  Declined: {
    display: "Declined",
    code: "declined",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * entered-in-error: The dispense was entered in error and therefore nullified.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * in-progress: The dispensed product is ready for pickup.
   */
  InProgress: {
    display: "In Progress",
    code: "in-progress",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * on-hold: The dispense process is paused while waiting for an external event to reactivate the dispense.  For example, new stock has arrived or the prescriber has called.
   */
  OnHold: {
    display: "On Hold",
    code: "on-hold",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * preparation: The core event has not started yet, but some staging activities have begun (e.g. initial compounding or packaging of medication). Preparation stages may be tracked for billing purposes.
   */
  Preparation: {
    display: "Preparation",
    code: "preparation",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * stopped: Actions implied by the dispense have been permanently halted, before all of them occurred.
   */
  Stopped: {
    display: "Stopped",
    code: "stopped",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
  /**
   * unknown: The authoring system does not know which of the status values applies for this medication dispense.  Note: this concept is not to be used for other - one of the listed statuses is presumed to apply, it's just now known which one.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
  },
} as const;