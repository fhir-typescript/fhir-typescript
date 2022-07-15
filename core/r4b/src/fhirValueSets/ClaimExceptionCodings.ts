// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/claim-exception|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Exception codes.
 */
export type ClaimExceptionCodingType = {
  /**
   * disabled: Disabled
   */
  Disabled: CodingArgs;
  /**
   * student: Fulltime Student
   */
  StudentFulltime: CodingArgs;
}

/**
 * This value set includes sample Exception codes.
 */
export const ClaimExceptionCodings:ClaimExceptionCodingType = {
  /**
   * disabled: Disabled
   */
  Disabled: {
    display: "Disabled",
    code: "disabled",
    system: "http://terminology.hl7.org/CodeSystem/claim-exception",
  },
  /**
   * student: Fulltime Student
   */
  StudentFulltime: {
    display: "Student (Fulltime)",
    code: "student",
    system: "http://terminology.hl7.org/CodeSystem/claim-exception",
  },
} as const;
