// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payment-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Payment Type codes.
 */
export type PaymentTypeCodingType = {
  /**
   * adjustment: The amount is an adjustment regarding claims already paid.
   */
  Adjustment: CodingArgs;
  /**
   * advance: The amount is an advance against future claims.
   */
  Advance: CodingArgs;
  /**
   * payment: The amount is partial or complete settlement of the amounts due.
   */
  Payment: CodingArgs;
}

/**
 * This value set includes sample Payment Type codes.
 */
export const PaymentTypeCodings:PaymentTypeCodingType = {
  /**
   * adjustment: The amount is an adjustment regarding claims already paid.
   */
  Adjustment: {
    display: "Adjustment",
    code: "adjustment",
    system: "http://terminology.hl7.org/CodeSystem/payment-type",
  },
  /**
   * advance: The amount is an advance against future claims.
   */
  Advance: {
    display: "Advance",
    code: "advance",
    system: "http://terminology.hl7.org/CodeSystem/payment-type",
  },
  /**
   * payment: The amount is partial or complete settlement of the amounts due.
   */
  Payment: {
    display: "Payment",
    code: "payment",
    system: "http://terminology.hl7.org/CodeSystem/payment-type",
  },
} as const;