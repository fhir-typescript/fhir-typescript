// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/adverse-event-outcome|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * TODO (and should this be required?)
 */
export type AdverseEventOutcomeCodingType = {
  /**
   * Code: fatal
   */
  Fatal: CodingArgs;
  /**
   * Code: ongoing
   */
  Ongoing: CodingArgs;
  /**
   * Code: recovering
   */
  Recovering: CodingArgs;
  /**
   * Code: resolved
   */
  Resolved: CodingArgs;
  /**
   * Code: resolvedWithSequelae
   */
  ResolvedWithSequelae: CodingArgs;
  /**
   * Code: unknown
   */
  Unknown: CodingArgs;
}

/**
 * TODO (and should this be required?)
 */
export const AdverseEventOutcomeCodings:AdverseEventOutcomeCodingType = {
  /**
   * Code: fatal
   */
  Fatal: {
    display: "Fatal",
    code: "fatal",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
  /**
   * Code: ongoing
   */
  Ongoing: {
    display: "Ongoing",
    code: "ongoing",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
  /**
   * Code: recovering
   */
  Recovering: {
    display: "Recovering",
    code: "recovering",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
  /**
   * Code: resolved
   */
  Resolved: {
    display: "Resolved",
    code: "resolved",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
  /**
   * Code: resolvedWithSequelae
   */
  ResolvedWithSequelae: {
    display: "Resolved with Sequelae",
    code: "resolvedWithSequelae",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
  /**
   * Code: unknown
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/adverse-event-outcome",
  },
} as const;
