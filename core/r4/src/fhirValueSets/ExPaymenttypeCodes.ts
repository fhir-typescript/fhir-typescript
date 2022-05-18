// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/ex-paymenttype|4.0.1

/**
 * This value set includes example Payment Type codes.
 */
export const ExPaymenttypeCodes = {
  /**
   * complete: Complete (final) payment of the benefit under the Claim less any adjustments.
   */
  Complete: "complete",
  /**
   * partial: Partial payment of the benefit under the Claim less any adjustments.
   */
  Partial: "partial",
} as const;

/**
 * This value set includes example Payment Type codes.
 */
export type ExPaymenttypeCodeType = typeof ExPaymenttypeCodes[keyof typeof ExPaymenttypeCodes];
