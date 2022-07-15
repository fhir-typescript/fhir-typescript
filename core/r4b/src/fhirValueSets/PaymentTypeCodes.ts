// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-type|4.3.0

/**
 * This value set includes sample Payment Type codes.
 */
export const PaymentTypeCodes = {
  /**
   * adjustment: The amount is an adjustment regarding claims already paid.
   */
  Adjustment: "adjustment",
  /**
   * advance: The amount is an advance against future claims.
   */
  Advance: "advance",
  /**
   * payment: The amount is partial or complete settlement of the amounts due.
   */
  Payment: "payment",
} as const;

/**
 * This value set includes sample Payment Type codes.
 */
export type PaymentTypeCodeType = typeof PaymentTypeCodes[keyof typeof PaymentTypeCodes];
