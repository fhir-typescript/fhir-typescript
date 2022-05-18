// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/flag-status|4.0.1

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export const FlagStatusCodes = {
  /**
   * active: A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
   */
  Active: "active",
  /**
   * entered-in-error: The flag was added in error and should no longer be displayed.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The flag no longer needs to be displayed.
   */
  Inactive: "inactive",
} as const;

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export type FlagStatusCodeType = typeof FlagStatusCodes[keyof typeof FlagStatusCodes];
