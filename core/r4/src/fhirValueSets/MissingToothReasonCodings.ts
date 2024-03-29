// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/missing-tooth-reason|4.0.1

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Missing Tooth Reason codes.
 */
export type MissingToothReasonCodingType = {
  /**
   * c: Congenital
   */
  C: CodingArgs;
  /**
   * e: Extraction
   */
  E: CodingArgs;
  /**
   * o: Other
   */
  O: CodingArgs;
  /**
   * u: Unknown
   */
  U: CodingArgs;
}

/**
 * This value set includes sample Missing Tooth Reason codes.
 */
export const MissingToothReasonCodings:MissingToothReasonCodingType = {
  /**
   * c: Congenital
   */
  C: {
    display: "C",
    code: "c",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
  },
  /**
   * e: Extraction
   */
  E: {
    display: "E",
    code: "e",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
  },
  /**
   * o: Other
   */
  O: {
    display: "O",
    code: "o",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
  },
  /**
   * u: Unknown
   */
  U: {
    display: "U",
    code: "u",
    system: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
  },
} as const;
