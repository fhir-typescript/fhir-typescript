// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/versioning-policy|3.0.2

/**
 * How the system supports versioning for a resource.
 */
export const VersioningPolicyCodes = {
  /**
   * no-version: VersionId meta-property is not supported (server) or used (client).
   */
  NoVersionIdSupport: "no-version",
  /**
   * versioned: VersionId meta-property is supported (server) or used (client).
   */
  Versioned: "versioned",
  /**
   * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
   */
  VersionIdTrackedFully: "versioned-update",
} as const;

/**
 * How the system supports versioning for a resource.
 */
export type VersioningPolicyCodeType = typeof VersioningPolicyCodes[keyof typeof VersioningPolicyCodes];