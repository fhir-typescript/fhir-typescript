// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export const GoalStatusCodings = {
  /**
   * accepted: A proposed goal was accepted or acknowledged.
   */
  Accepted: new Coding({
    display: "Accepted",
    code: "accepted",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * active: The goal is being sought actively.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * cancelled: The goal has been abandoned.
   */
  Cancelled: new Coding({
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * completed: The goal is no longer being sought.
   */
  Completed: new Coding({
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * entered-in-error: The goal was entered in error and voided.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
   */
  OnHold: new Coding({
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * planned: A goal is planned for this patient.
   */
  Planned: new Coding({
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * proposed: A goal is proposed for this patient.
   */
  Proposed: new Coding({
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/goal-status",
  }),
  /**
   * rejected: A proposed goal was rejected.
   */
  Rejected: new Coding({
    display: "Rejected",
    code: "rejected",
    system: "http://hl7.org/fhir/goal-status",
  }),
} as const;

/**
 * Codes that reflect the current state of a goal and whether the goal is still being targeted.
 */
export type GoalStatusCodingType = typeof GoalStatusCodings;
