// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-subtype|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Claim SubType codes.
 */
export type ClaimSubtypeCodingType = {
  /**
   * emergency: A claim for emergency services.
   */
  EmergencyClaim: CodingArgs;
  /**
   * ortho: A claim for Orthodontic Services.
   */
  OrthodonticClaim: CodingArgs;
}

/**
 * This value set includes sample Claim SubType codes.
 */
export const ClaimSubtypeCodings:ClaimSubtypeCodingType = {
  /**
   * emergency: A claim for emergency services.
   */
  EmergencyClaim: {
    display: "Emergency Claim",
    code: "emergency",
    system: "http://hl7.org/fhir/ex-claimsubtype",
  },
  /**
   * ortho: A claim for Orthodontic Services.
   */
  OrthodonticClaim: {
    display: "Orthodontic Claim",
    code: "ortho",
    system: "http://hl7.org/fhir/ex-claimsubtype",
  },
} as const;