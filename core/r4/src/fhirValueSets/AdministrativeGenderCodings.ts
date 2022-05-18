// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/administrative-gender|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * The gender of a person used for administrative purposes.
 */
export const AdministrativeGenderCodings = {
  /**
   * female: Female.
   */
  Female: new Coding({
    display: "Female",
    code: "female",
    system: "http://hl7.org/fhir/administrative-gender",
  }),
  /**
   * male: Male.
   */
  Male: new Coding({
    display: "Male",
    code: "male",
    system: "http://hl7.org/fhir/administrative-gender",
  }),
  /**
   * other: Other.
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://hl7.org/fhir/administrative-gender",
  }),
  /**
   * unknown: Unknown.
   */
  Unknown: new Coding({
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/administrative-gender",
  }),
} as const;

/**
 * The gender of a person used for administrative purposes.
 */
export type AdministrativeGenderCodingType = typeof AdministrativeGenderCodings;
