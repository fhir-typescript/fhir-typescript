// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-base-codes|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A coded concept listing the base codes.
 */
export type VisionBaseCodingType = {
  /**
   * down: bottom
   */
  Down: CodingArgs;
  /**
   * in: inner edge
   */
  In: CodingArgs;
  /**
   * out: outer edge
   */
  Out: CodingArgs;
  /**
   * up: top
   */
  Up: CodingArgs;
}

/**
 * A coded concept listing the base codes.
 */
export const VisionBaseCodings:VisionBaseCodingType = {
  /**
   * down: bottom
   */
  Down: {
    display: "Down",
    code: "down",
    system: "http://hl7.org/fhir/vision-base-codes",
  },
  /**
   * in: inner edge
   */
  In: {
    display: "In",
    code: "in",
    system: "http://hl7.org/fhir/vision-base-codes",
  },
  /**
   * out: outer edge
   */
  Out: {
    display: "Out",
    code: "out",
    system: "http://hl7.org/fhir/vision-base-codes",
  },
  /**
   * up: top
   */
  Up: {
    display: "Up",
    code: "up",
    system: "http://hl7.org/fhir/vision-base-codes",
  },
} as const;
