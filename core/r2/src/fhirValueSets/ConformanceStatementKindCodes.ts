// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conformance-statement-kind|1.0.2

/**
 * How a conformance statement is intended to be used.
 */
export const ConformanceStatementKindCodes = {
  /**
   * capability: The Conformance instance represents the capabilities of a system or piece of software, independent of a particular installation.
   */
  Capability: "capability",
  /**
   * instance: The Conformance instance represents the present capabilities of a specific system instance.  This is the kind returned by OPTIONS for a FHIR server end-point.
   */
  Instance: "instance",
  /**
   * requirements: The Conformance instance represents a set of requirements for other systems to meet; e.g. as part of an implementation guide or 'request for proposal'.
   */
  Requirements: "requirements",
} as const;

/**
 * How a conformance statement is intended to be used.
 */
export type ConformanceStatementKindCodeType = typeof ConformanceStatementKindCodes[keyof typeof ConformanceStatementKindCodes];
