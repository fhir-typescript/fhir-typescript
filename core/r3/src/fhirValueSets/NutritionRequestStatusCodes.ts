// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/nutrition-request-status|3.0.2

/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export const NutritionRequestStatusCodes = {
  /**
   * active: The request is 'actionable', but not all actions that are implied by it have occurred yet.
   */
  Active: "active",
  /**
   * cancelled: The request has been withdrawn and is no longer actionable.
   */
  Cancelled: "cancelled",
  /**
   * completed: All actions that are implied by the order have occurred and no continuation is planned (this will rarely be made explicit).
   */
  Completed: "completed",
  /**
   * draft: The request is in preliminary form prior to being sent.
   */
  Draft: "draft",
  /**
   * entered-in-error: The request was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * on-hold: Actions implied by the request have been temporarily halted, but are expected to continue later. May also be called "suspended".
   */
  OnHold: "on-hold",
  /**
   * planned: The request has been planned.
   */
  Planned: "planned",
  /**
   * proposed: The request has been proposed.
   */
  Proposed: "proposed",
  /**
   * requested: The request has been placed.
   */
  Requested: "requested",
} as const;

/**
 * Codes specifying the state of the request. Describes the lifecycle of the nutrition order.
 */
export type NutritionRequestStatusCodeType = typeof NutritionRequestStatusCodes[keyof typeof NutritionRequestStatusCodes];
