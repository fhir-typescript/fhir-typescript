// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-outcome|3.0.2

/**
 * TODO (and should this be required?)
 */
export const AdverseEventOutcomeCodes = {
  /**
   * Code: fatal
   */
  Fatal: "fatal",
  /**
   * Code: ongoing
   */
  Ongoing: "ongoing",
  /**
   * Code: recovering
   */
  Recovering: "recovering",
  /**
   * Code: resolved
   */
  Resolved: "resolved",
  /**
   * Code: resolvedWithSequelae
   */
  ResolvedWithSequelae: "resolvedWithSequelae",
  /**
   * Code: unknown
   */
  Unknown: "unknown",
} as const;

/**
 * TODO (and should this be required?)
 */
export type AdverseEventOutcomeCodeType = typeof AdverseEventOutcomeCodes[keyof typeof AdverseEventOutcomeCodes];
