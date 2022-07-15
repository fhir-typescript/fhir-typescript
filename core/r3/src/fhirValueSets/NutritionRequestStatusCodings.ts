// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/nutrition-request-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export type NutritionRequestStatusCodingType = {
  /**
   * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
   */
  Active: CodingArgs;
  /**
   * cancelled: The request has been withdrawn and is no longer actionable.
   */
  Cancelled: CodingArgs;
  /**
   * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
   */
  Completed: CodingArgs;
  /**
   * draft: The request is in preliminary form prior to being sent.
   */
  Draft: CodingArgs;
  /**
   * entered-in-error: The request was entered in error and voided.
   */
  EnteredInError: CodingArgs;
  /**
   * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: CodingArgs;
  /**
   * planned: The request has been planned.
   */
  Planned: CodingArgs;
  /**
   * proposed: The request has been proposed.
   */
  Proposed: CodingArgs;
  /**
   * requested: The request has been placed.
   */
  Requested: CodingArgs;
}

/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export const NutritionRequestStatusCodings:NutritionRequestStatusCodingType = {
  /**
   * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * cancelled: The request has been withdrawn and is no longer actionable.
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
   */
  Completed: {
    display: "Completed",
    code: "completed",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * draft: The request is in preliminary form prior to being sent.
   */
  Draft: {
    display: "Draft",
    code: "draft",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * entered-in-error: The request was entered in error and voided.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: {
    display: "On-Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * planned: The request has been planned.
   */
  Planned: {
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * proposed: The request has been proposed.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
  /**
   * requested: The request has been placed.
   */
  Requested: {
    display: "Requested",
    code: "requested",
    system: "http://hl7.org/fhir/nutrition-request-status",
  },
} as const;
