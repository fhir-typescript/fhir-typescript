// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-status|4.0.1

/**
 * Indicates whether the account is available to be used.
 */
export const AccountStatusCodes = {
  /**
   * active: This account is active and may be used.
   */
  Active: "active",
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: "entered-in-error",
  /**
   * inactive: This account is inactive and should not be used to track financial information.
   */
  Inactive: "inactive",
  /**
   * on-hold: This account is on hold.
   */
  OnHold: "on-hold",
  /**
   * unknown: The account status is unknown.
   */
  Unknown: "unknown",
} as const;

/**
 * Indicates whether the account is available to be used.
 */
export type AccountStatusCodeType = typeof AccountStatusCodes[keyof typeof AccountStatusCodes];
