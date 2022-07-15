// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-severity|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How the issue affects the success of the action.
 */
export type IssueSeverityCodingType = {
  /**
   * error: The issue is sufficiently important to cause the action to fail.
   */
  Error: CodingArgs;
  /**
   * fatal: The issue caused the action to fail and no further checking could be performed.
   */
  Fatal: CodingArgs;
  /**
   * information: The issue has no relation to the degree of success of the action.
   */
  Information: CodingArgs;
  /**
   * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
   */
  Warning: CodingArgs;
}

/**
 * How the issue affects the success of the action.
 */
export const IssueSeverityCodings:IssueSeverityCodingType = {
  /**
   * error: The issue is sufficiently important to cause the action to fail.
   */
  Error: {
    display: "Error",
    code: "error",
    system: "http://hl7.org/fhir/issue-severity",
  },
  /**
   * fatal: The issue caused the action to fail and no further checking could be performed.
   */
  Fatal: {
    display: "Fatal",
    code: "fatal",
    system: "http://hl7.org/fhir/issue-severity",
  },
  /**
   * information: The issue has no relation to the degree of success of the action.
   */
  Information: {
    display: "Information",
    code: "information",
    system: "http://hl7.org/fhir/issue-severity",
  },
  /**
   * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
   */
  Warning: {
    display: "Warning",
    code: "warning",
    system: "http://hl7.org/fhir/issue-severity",
  },
} as const;
