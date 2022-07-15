// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-product|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes a smattering of Prescription Product codes.
 */
export type VisionProductCodingType = {
  /**
   * contact: A lens to be fitted for wearing directly on an eye.
   */
  ContactLens: CodingArgs;
  /**
   * lens: A lens to be fitted to a frame to comprise a pair of glasses.
   */
  Lens: CodingArgs;
}

/**
 * This value set includes a smattering of Prescription Product codes.
 */
export const VisionProductCodings:VisionProductCodingType = {
  /**
   * contact: A lens to be fitted for wearing directly on an eye.
   */
  ContactLens: {
    display: "Contact Lens",
    code: "contact",
    system: "http://hl7.org/fhir/ex-visionprescriptionproduct",
  },
  /**
   * lens: A lens to be fitted to a frame to comprise a pair of glasses.
   */
  Lens: {
    display: "Lens",
    code: "lens",
    system: "http://hl7.org/fhir/ex-visionprescriptionproduct",
  },
} as const;
