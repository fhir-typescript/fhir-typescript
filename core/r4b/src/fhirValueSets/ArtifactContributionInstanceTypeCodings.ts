// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/artifact-contribution-instance-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Artifact Contribution Instance Type
 */
export type ArtifactContributionInstanceTypeCodingType = {
  /**
   * approved: Approved
   */
  Approved: CodingArgs;
  /**
   * edited: Edited
   */
  Edited: CodingArgs;
  /**
   * reviewed: Reviewed
   */
  Reviewed: CodingArgs;
}

/**
 * Artifact Contribution Instance Type
 */
export const ArtifactContributionInstanceTypeCodings:ArtifactContributionInstanceTypeCodingType = {
  /**
   * approved: Approved
   */
  Approved: {
    display: "Approved",
    code: "approved",
    system: "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
  },
  /**
   * edited: Edited
   */
  Edited: {
    display: "Edited",
    code: "edited",
    system: "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
  },
  /**
   * reviewed: Reviewed
   */
  Reviewed: {
    display: "Reviewed",
    code: "reviewed",
    system: "http://terminology.hl7.org/CodeSystem/artifact-contribution-instance-type",
  },
} as const;
