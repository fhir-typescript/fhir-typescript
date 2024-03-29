// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-status|4.0.1

/**
 * This value set includes a sample set of Payment Status codes.
 */
export const PaymentStatusCodes = {
  /**
   * cleared: The payment has been received by the payee.
   */
  Cleared: "cleared",
  /**
   * paid: The payment has been sent physically or electronically.
   */
  Paid: "paid",
} as const;

/**
 * This value set includes a sample set of Payment Status codes.
 */
export type PaymentStatusCodeType = typeof PaymentStatusCodes[keyof typeof PaymentStatusCodes];
