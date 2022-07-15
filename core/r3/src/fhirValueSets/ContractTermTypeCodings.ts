// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-term-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This value set includes sample Contract Term Type codes.
 */
export type ContractTermTypeCodingType = {
  /**
   * statutory: Based on specialized statutes that deal with particular subjects.
   */
  Statutory: CodingArgs;
  /**
   * subject-to: Execution of the term in the contract is conditional on the execution of other actions.
   */
  SubjectTo: CodingArgs;
}

/**
 * This value set includes sample Contract Term Type codes.
 */
export const ContractTermTypeCodings:ContractTermTypeCodingType = {
  /**
   * statutory: Based on specialized statutes that deal with particular subjects.
   */
  Statutory: {
    display: "Statutory",
    code: "statutory",
    system: "http://hl7.org/fhir/contracttermtypecodes",
  },
  /**
   * subject-to: Execution of the term in the contract is conditional on the execution of other actions.
   */
  SubjectTo: {
    display: "Subject To",
    code: "subject-to",
    system: "http://hl7.org/fhir/contracttermtypecodes",
  },
} as const;
