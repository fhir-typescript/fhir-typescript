// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplydelivery-status|4.3.0

/**
 * Status of the supply delivery.
 */
export const SupplydeliveryStatusCodes = {
  /**
   * abandoned: Delivery was not completed.
   */
  Abandoned: "abandoned",
  /**
   * completed: Supply has been delivered ("completed").
   */
  Delivered: "completed",
  /**
   * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "abandoned" rather than "entered-in-error".).
   */
  EnteredInError: "entered-in-error",
  /**
   * in-progress: Supply has been requested, but not delivered.
   */
  InProgress: "in-progress",
} as const;

/**
 * Status of the supply delivery.
 */
export type SupplydeliveryStatusCodeType = typeof SupplydeliveryStatusCodes[keyof typeof SupplydeliveryStatusCodes];