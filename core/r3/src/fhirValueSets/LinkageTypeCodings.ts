// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/linkage-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Used to distinguish different roles a resource can play within a set of linked resources
 */
export type LinkageTypeCodingType = {
  /**
   * alternate: The record represents the alternative view of the underlying event/condition/etc.  The record may still be actively maintained, even though it is not considered to be the source of truth.
   */
  AlternateRecord: CodingArgs;
  /**
   * historical: The record represents an obsolete record of the underlyng event/condition/etc.  It is not expected to be actively maintained.
   */
  HistoricalObsoleteRecord: CodingArgs;
  /**
   * source: The record represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
   */
  SourceOfTruth: CodingArgs;
}

/**
 * Used to distinguish different roles a resource can play within a set of linked resources
 */
export const LinkageTypeCodings:LinkageTypeCodingType = {
  /**
   * alternate: The record represents the alternative view of the underlying event/condition/etc.  The record may still be actively maintained, even though it is not considered to be the source of truth.
   */
  AlternateRecord: {
    display: "Alternate record",
    code: "alternate",
    system: "http://hl7.org/fhir/linkage-type",
  },
  /**
   * historical: The record represents an obsolete record of the underlyng event/condition/etc.  It is not expected to be actively maintained.
   */
  HistoricalObsoleteRecord: {
    display: "Historical/obsolete record",
    code: "historical",
    system: "http://hl7.org/fhir/linkage-type",
  },
  /**
   * source: The record represents the "source of truth" (from the perspective of this Linkage resource) for the underlying event/condition/etc.
   */
  SourceOfTruth: {
    display: "Source of truth",
    code: "source",
    system: "http://hl7.org/fhir/linkage-type",
  },
} as const;