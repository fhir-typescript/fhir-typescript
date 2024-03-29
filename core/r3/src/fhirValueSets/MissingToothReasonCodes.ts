// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/missing-tooth-reason|3.0.2

/**
 * This value set includes sample Missing Tooth Reason codes.
 */
export const MissingToothReasonCodes = {
  /**
   * c: Congenital
   */
  C: "c",
  /**
   * e: Extraction
   */
  E: "e",
  /**
   * o: Other
   */
  O: "o",
  /**
   * u: Unknown
   */
  U: "u",
} as const;

/**
 * This value set includes sample Missing Tooth Reason codes.
 */
export type MissingToothReasonCodeType = typeof MissingToothReasonCodes[keyof typeof MissingToothReasonCodes];
