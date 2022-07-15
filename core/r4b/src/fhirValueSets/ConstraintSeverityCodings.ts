// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/constraint-severity|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * SHALL applications comply with this constraint?
 */
export type ConstraintSeverityCodingType = {
  /**
   * error: If the constraint is violated, the resource is not conformant.
   */
  Error: CodingArgs;
  /**
   * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
   */
  Warning: CodingArgs;
}

/**
 * SHALL applications comply with this constraint?
 */
export const ConstraintSeverityCodings:ConstraintSeverityCodingType = {
  /**
   * error: If the constraint is violated, the resource is not conformant.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/constraint-severity",
  },
  /**
   * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
   */
  Warning: {
    display: "Warning",
    code: "warning",
    system: "http://hl7.org/fhir/constraint-severity",
  },
} as const;
