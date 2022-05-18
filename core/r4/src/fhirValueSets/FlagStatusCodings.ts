// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/flag-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export const FlagStatusCodings = {
  /**
   * active: A current flag that should be displayed to a user. A system may use the category to determine which user roles should view the flag.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/flag-status",
  }),
  /**
   * entered-in-error: The flag was added in error and should no longer be displayed.
   */
  EnteredInError: new Coding({
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/flag-status",
  }),
  /**
   * inactive: The flag no longer needs to be displayed.
   */
  Inactive: new Coding({
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/flag-status",
  }),
} as const;

/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 */
export type FlagStatusCodingType = typeof FlagStatusCodings;
