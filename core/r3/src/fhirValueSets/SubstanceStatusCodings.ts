// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/substance-status|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * A code to indicate if the substance is actively used
 */
export type SubstanceStatusCodingType = {
  /**
   * active: The substance is considered for use or reference
   */
  Active: CodingArgs;
  /**
   * entered-in-error: The substance was entered in error
   */
  EnteredInError: CodingArgs;
  /**
   * inactive: The substance is considered for reference, but not for use
   */
  Inactive: CodingArgs;
}

/**
 * A code to indicate if the substance is actively used
 */
export const SubstanceStatusCodings:SubstanceStatusCodingType = {
  /**
   * active: The substance is considered for use or reference
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/substance-status",
  },
  /**
   * entered-in-error: The substance was entered in error
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/substance-status",
  },
  /**
   * inactive: The substance is considered for reference, but not for use
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/substance-status",
  },
} as const;