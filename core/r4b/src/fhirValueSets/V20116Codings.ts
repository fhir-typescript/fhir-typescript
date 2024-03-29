// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0116|2.0.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 */
export type V20116CodingType = {
  /**
   * Code: C
   */
  Closed: CodingArgs;
  /**
   * Code: H
   */
  Housekeeping: CodingArgs;
  /**
   * Code: I
   */
  Isolated: CodingArgs;
  /**
   * Code: K
   */
  Contaminated: CodingArgs;
  /**
   * Code: O
   */
  Occupied: CodingArgs;
  /**
   * Code: U
   */
  Unoccupied: CodingArgs;
}

/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 */
export const V20116Codings:V20116CodingType = {
  /**
   * Code: C
   */
  Closed: {
    display: "Closed",
    code: "C",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
  /**
   * Code: H
   */
  Housekeeping: {
    display: "Housekeeping",
    code: "H",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
  /**
   * Code: I
   */
  Isolated: {
    display: "Isolated",
    code: "I",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
  /**
   * Code: K
   */
  Contaminated: {
    display: "Contaminated",
    code: "K",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
  /**
   * Code: O
   */
  Occupied: {
    display: "Occupied",
    code: "O",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
  /**
   * Code: U
   */
  Unoccupied: {
    display: "Unoccupied",
    code: "U",
    system: "http://terminology.hl7.org/CodeSystem/v2-0116",
  },
} as const;
