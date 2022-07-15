// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/location-mode|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export type LocationModeCodingType = {
  /**
   * instance: The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
   */
  Instance: CodingArgs;
  /**
   * kind: The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
   */
  Kind: CodingArgs;
}

/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
export const LocationModeCodings:LocationModeCodingType = {
  /**
   * instance: The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
   */
  Instance: {
    display: "Instance",
    code: "instance",
    system: "http://hl7.org/fhir/location-mode",
  },
  /**
   * kind: The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
   */
  Kind: {
    display: "Kind",
    code: "kind",
    system: "http://hl7.org/fhir/location-mode",
  },
} as const;
