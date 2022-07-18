// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/administrative-gender|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The gender of a person used for administrative purposes.
 */
export type AdministrativeGenderCodingType = {
  /**
   * female: Female
   */
  Female: CodingArgs;
  /**
   * male: Male
   */
  Male: CodingArgs;
  /**
   * other: Other
   */
  Other: CodingArgs;
  /**
   * unknown: Unknown
   */
  Unknown: CodingArgs;
}

/**
 * The gender of a person used for administrative purposes.
 */
export const AdministrativeGenderCodings:AdministrativeGenderCodingType = {
  /**
   * female: Female
   */
  Female: {
    display: "Female",
    code: "female",
    system: "http://hl7.org/fhir/administrative-gender",
  },
  /**
   * male: Male
   */
  Male: {
    display: "Male",
    code: "male",
    system: "http://hl7.org/fhir/administrative-gender",
  },
  /**
   * other: Other
   */
  Other: {
    display: "Other",
    code: "other",
    system: "http://hl7.org/fhir/administrative-gender",
  },
  /**
   * unknown: Unknown
   */
  Unknown: {
    display: "Unknown",
    code: "unknown",
    system: "http://hl7.org/fhir/administrative-gender",
  },
} as const;