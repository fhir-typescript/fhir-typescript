// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/flag-status|1.0.2

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error.
 */
export const FlagStatusCodes = {
  /**
   * active: A current flag that should be displayed to a user. A system may use the category to determine which roles should view the flag.
   */
  Active: "active",
  /**
   * entered-in-error: The flag was added in error, and should no longer be displayed.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: The flag does not need to be displayed any more.
   */
  Inactive: "inactive",
} as const;

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or entered in error.
 */
export type FlagStatusCodeType = typeof FlagStatusCodes[keyof typeof FlagStatusCodes];