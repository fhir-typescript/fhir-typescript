// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-term-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Contract Term Type codes.
 */
export type ContractTermTypeCodingType = {
  /**
   * Code: statutory
   */
  Statutory: CodingArgs;
  /**
   * Code: subject-to
   */
  SubjectTo: CodingArgs;
}

/**
 * This value set includes sample Contract Term Type codes.
 */
export const ContractTermTypeCodings:ContractTermTypeCodingType = {
  /**
   * Code: statutory
   */
  Statutory: {
    display: "Statutory",
    code: "statutory",
    system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
  },
  /**
   * Code: subject-to
   */
  SubjectTo: {
    display: "Subject To",
    code: "subject-to",
    system: "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
  },
} as const;
