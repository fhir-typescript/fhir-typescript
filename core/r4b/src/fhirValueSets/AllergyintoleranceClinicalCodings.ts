// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergyintolerance-clinical|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export type AllergyintoleranceClinicalCodingType = {
  /**
   * active: The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
   */
  Active: CodingArgs;
  /**
   * inactive: The subject is no longer at risk of a reaction to the identified substance.
   */
  Inactive: CodingArgs;
  /**
   * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
   */
  Resolved: CodingArgs;
}

/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 */
export const AllergyintoleranceClinicalCodings:AllergyintoleranceClinicalCodingType = {
  /**
   * active: The subject is currently experiencing, or is at risk of, a reaction to the identified substance.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
  },
  /**
   * inactive: The subject is no longer at risk of a reaction to the identified substance.
   */
  Inactive: {
    display: "Inactive",
    code: "inactive",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
  },
  /**
   * resolved: A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting.
   */
  Resolved: {
    display: "Resolved",
    code: "resolved",
    system: "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
  },
} as const;