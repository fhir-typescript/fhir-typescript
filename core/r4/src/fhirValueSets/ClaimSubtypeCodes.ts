// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-subtype|4.0.1

/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export const ClaimSubtypeCodes = {
  /**
   * emergency: A claim for emergency services.
   */
  EmergencyClaim: "emergency",
  /**
   * ortho: A claim for Orthodontic Services.
   */
  OrthodonticClaim: "ortho",
} as const;

/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 */
export type ClaimSubtypeCodeType = typeof ClaimSubtypeCodes[keyof typeof ClaimSubtypeCodes];