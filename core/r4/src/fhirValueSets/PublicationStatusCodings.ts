// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/publication-status|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The lifecycle status of an artifact.
 */
export const PublicationStatusCodings = {
  /**
   * active: This resource is ready for normal use.
   */
  Active: new Coding({
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/publication-status",
  }),
  /**
   * draft: This resource is still under development and is not yet considered to be ready for normal use.
   */
  Draft: new Coding({
    display: "Draft",
    code: "draft",
    system: "http://hl7.org/fhir/publication-status",
  }),
  /**
   * retired: This resource has been withdrawn or superseded and should no longer be used.
   */
  Retired: new Coding({
    display: "Retired",
    code: "retired",
    system: "http://hl7.org/fhir/publication-status",
  }),
  /**
   * unknown: The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/publication-status",
  }),
} as const;

/**
 * The lifecycle status of an artifact.
 */
export type PublicationStatusCodingType = typeof PublicationStatusCodings;