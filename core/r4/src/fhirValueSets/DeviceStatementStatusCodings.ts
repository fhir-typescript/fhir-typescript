// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/device-statement-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * A coded concept indicating the current status of the Device Usage.
 */
export const DeviceStatementStatusCodings = {
  /**
   * active: The device is still being used.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
  /**
   * completed: The device is no longer being used.
   */
  Completed: new Coding({
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
  /**
   * entered-in-error: The statement was recorded incorrectly.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
  /**
   * intended: The device may be used at some time in the future.
   */
  Intended: new Coding({
    display: "Intended",
    code: "intended",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
  /**
   * on-hold: Actions implied by the statement have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: new Coding({
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
  /**
   * stopped: Actions implied by the statement have been permanently halted, before all of them occurred.
   */
  Stopped: new Coding({
    display: "Stopped",
    code: "stopped",
    system: "http://hl7.org/fhir/device-statement-status",
  }),
} as const;

/**
 * A coded concept indicating the current status of the Device Usage.
 */
export type DeviceStatementStatusCodingType = typeof DeviceStatementStatusCodings;
