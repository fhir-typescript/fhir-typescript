// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/care-team-status|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates the status of the care team.
 */
export type CareTeamStatusCodingType = {
  /**
   * active: The care team is currently participating in the coordination and delivery of care.
   */
  Active: CodingArgs;
  /**
   * entered-in-error: The care team should have never existed.
   */
  EnteredInError: CodingArgs;
  /**
   * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
   */
  Inactive: CodingArgs;
  /**
   * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
   */
  Proposed: CodingArgs;
  /**
   * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
   */
  Suspended: CodingArgs;
}

/**
 * Indicates the status of the care team.
 */
export const CareTeamStatusCodings:CareTeamStatusCodingType = {
  /**
   * active: The care team is currently participating in the coordination and delivery of care.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/care-team-status",
  },
  /**
   * entered-in-error: The care team should have never existed.
   */
  EnteredInError: {
    display: "Entered in Error",
    code: "entered-in-error",
    system: "http://hl7.org/fhir/care-team-status",
  },
  /**
   * inactive: The care team was, but is no longer, participating in the coordination and delivery of care.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://hl7.org/fhir/care-team-status",
  },
  /**
   * proposed: The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.
   */
  Proposed: {
    display: "Proposed",
    code: "proposed",
    system: "http://hl7.org/fhir/care-team-status",
  },
  /**
   * suspended: The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.
   */
  Suspended: {
    display: "Suspended",
    code: "suspended",
    system: "http://hl7.org/fhir/care-team-status",
  },
} as const;