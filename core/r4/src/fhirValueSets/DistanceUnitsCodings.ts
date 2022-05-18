// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/distance-units|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Unified Code for Units of Measure (UCUM). This value set includes common UCUM codes for units of distance
 */
export const DistanceUnitsCodings = {
  /**
   * Code: km
   */
  Kilometers: new Coding({
    display: "kilometers",
    code: "km",
    system: "http://unitsofmeasure.org",
  }),
  /**
   * Code: m
   */
  Meters: new Coding({
    display: "meters",
    code: "m",
    system: "http://unitsofmeasure.org",
  }),
  /**
   * Code: mm
   */
  Millimeters: new Coding({
    display: "millimeters",
    code: "mm",
    system: "http://unitsofmeasure.org",
  }),
  /**
   * Code: nm
   */
  Nanometers: new Coding({
    display: "nanometers",
    code: "nm",
    system: "http://unitsofmeasure.org",
  }),
  /**
   * Code: um
   */
  Micrometers: new Coding({
    display: "micrometers",
    code: "um",
    system: "http://unitsofmeasure.org",
  }),
} as const;

/**
 * Unified Code for Units of Measure (UCUM). This value set includes common UCUM codes for units of distance
 */
export type DistanceUnitsCodingType = typeof DistanceUnitsCodings;
