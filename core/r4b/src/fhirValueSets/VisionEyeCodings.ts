// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-eye-codes|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A coded concept listing the eye codes.
 */
export type VisionEyeCodingType = {
  /**
   * left: Left Eye.
   */
  LeftEye: CodingArgs;
  /**
   * right: Right Eye.
   */
  RightEye: CodingArgs;
}

/**
 * A coded concept listing the eye codes.
 */
export const VisionEyeCodings:VisionEyeCodingType = {
  /**
   * left: Left Eye.
   */
  LeftEye: {
    display: "Left Eye",
    code: "left",
    system: "http://hl7.org/fhir/vision-eye-codes",
  },
  /**
   * right: Right Eye.
   */
  RightEye: {
    display: "Right Eye",
    code: "right",
    system: "http://hl7.org/fhir/vision-eye-codes",
  },
} as const;