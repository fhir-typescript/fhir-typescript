// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-product|3.0.2

/**
 * This value set includes a smattering of Prescription Product codes.
 */
export const VisionProductCodes = {
  /**
   * contact: A lens to be fitted for wearing directly on an eye.
   */
  ContactLens: "contact",
  /**
   * lens: A lens to be fitted to a frame to comprise a pair of glasses.
   */
  Lens: "lens",
} as const;

/**
 * This value set includes a smattering of Prescription Product codes.
 */
export type VisionProductCodeType = typeof VisionProductCodes[keyof typeof VisionProductCodes];