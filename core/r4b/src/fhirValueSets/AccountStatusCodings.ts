// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates whether the account is available to be used.
 */
export type AccountStatusCodingType = {
  /**
   * active: This account is active and may be used.
   */
  Active: CodingArgs;
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: CodingArgs;
  /**
   * inactive: This account is inactive and should not be used to track financial information.
   */
  Inactive: CodingArgs;
  /**
   * on-hold: This account is on hold.
   */
  OnHold: CodingArgs;
  /**
   * unknown: The account status is unknown.
   */
  Unknown: CodingArgs;
}

/**
 * Indicates whether the account is available to be used.
 */
export const AccountStatusCodings:AccountStatusCodingType = {
  /**
   * active: This account is active and may be used.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/account-status",
  },
  /**
   * entered-in-error: This instance should not have been part of this patient's medical record.
   */
  EnteredInError: {
    display: "Entered in error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/account-status",
  },
  /**
   * inactive: This account is inactive and should not be used to track financial information.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/account-status",
  },
  /**
   * on-hold: This account is on hold.
   */
  OnHold: {
    display: "On Hold",
    code: "on-hold",
    system: "http://hl7.org/fhir/account-status",
  },
  /**
   * unknown: The account status is unknown.
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/account-status",
  },
} as const;