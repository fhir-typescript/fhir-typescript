// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-status|4.3.0

/**
 * Indicates whether the location is still in use.
 */
export const LocationStatusCodes = {
  /**
   * active: The location is operational.
   */
  Active: "active",
  /**
   * inactive: The location is no longer used.
   */
  Inactive: "inactive",
  /**
   * suspended: The location is temporarily closed.
   */
  Suspended: "suspended",
} as const;

/**
 * Indicates whether the location is still in use.
 */
export type LocationStatusCodeType = typeof LocationStatusCodes[keyof typeof LocationStatusCodes];
