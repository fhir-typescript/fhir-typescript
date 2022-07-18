// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/units-of-time|3.0.2

/**
 * A unit of time (units from UCUM).
 */
export const UnitsOfTimeCodes = {
  /**
   * Code: a
   */
  Year: "a",
  /**
   * Code: d
   */
  Day: "d",
  /**
   * Code: h
   */
  Hour: "h",
  /**
   * Code: min
   */
  Minute: "min",
  /**
   * Code: mo
   */
  Month: "mo",
  /**
   * Code: s
   */
  Second: "s",
  /**
   * Code: wk
   */
  Week: "wk",
} as const;

/**
 * A unit of time (units from UCUM).
 */
export type UnitsOfTimeCodeType = typeof UnitsOfTimeCodes[keyof typeof UnitsOfTimeCodes];