// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/constraint-severity|4.0.1

/**
 * SHALL applications comply with this constraint?
 */
export const ConstraintSeverityCodes = {
  /**
   * error: If the constraint is violated, the resource is not conformant.
   */
  Error: "error",
  /**
   * warning: If the constraint is violated, the resource is conformant, but it is not necessarily following best practice.
   */
  Warning: "warning",
} as const;

/**
 * SHALL applications comply with this constraint?
 */
export type ConstraintSeverityCodeType = typeof ConstraintSeverityCodes[keyof typeof ConstraintSeverityCodes];
