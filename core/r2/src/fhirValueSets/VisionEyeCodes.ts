// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-eye-codes|1.0.2

/**
 * A coded concept listing the eye codes.
 */
export const VisionEyeCodes = {
  /**
   * left: Left Eye
   */
  LeftEye: "left",
  /**
   * right: Right Eye
   */
  RightEye: "right",
} as const;

/**
 * A coded concept listing the eye codes.
 */
export type VisionEyeCodeType = typeof VisionEyeCodes[keyof typeof VisionEyeCodes];