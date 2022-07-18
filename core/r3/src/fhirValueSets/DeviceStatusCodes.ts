// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/device-status|3.0.2

/**
 * The availability status of the device.
 */
export const DeviceStatusCodes = {
  /**
   * active: The Device is available for use.  Note: This means for *implanted devices*  the device is implanted in the patient.
   */
  Active: "active",
  /**
   * entered-in-error: The Device was entered in error and voided.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The Device is no longer available for use (e.g. lost, expired, damaged).  Note: This means for *implanted devices*  the device has been removed from the patient.
   */
  Inactive: "inactive",
  /**
   * unknown: The status of the device has not been determined.
   */
  Unknown: "unknown",
} as const;

/**
 * The availability status of the device.
 */
export type DeviceStatusCodeType = typeof DeviceStatusCodes[keyof typeof DeviceStatusCodes];