// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/filter-operator|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The kind of operation to perform as a part of a property based filter.
 */
export type FilterOperatorCodingType = {
  /**
   * =: The specified property of the code equals the provided value.
   */
  Equals: CodingArgs;
  /**
   * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
   */
  InSet: CodingArgs;
  /**
   * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself.
   */
  IsABySubsumption: CodingArgs;
  /**
   * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
   */
  NotIsABySubsumption: CodingArgs;
  /**
   * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
   */
  NotInSet: CodingArgs;
  /**
   * regex: The specified property of the code  matches the regex specified in the provided value.
   */
  RegularExpression: CodingArgs;
}

/**
 * The kind of operation to perform as a part of a property based filter.
 */
export const FilterOperatorCodings:FilterOperatorCodingType = {
  /**
   * =: The specified property of the code equals the provided value.
   */
  Equals: {
    display: "Equals",
    code: "=",
    system: "http://hl7.org/fhir/filter-operator",
  },
  /**
   * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
   */
  InSet: {
    display: "In Set",
    code: "in",
    system: "http://hl7.org/fhir/filter-operator",
  },
  /**
   * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself.
   */
  IsABySubsumption: {
    display: "Is A (by subsumption)",
    code: "is-a",
    system: "http://hl7.org/fhir/filter-operator",
  },
  /**
   * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
   */
  NotIsABySubsumption: {
    display: "Not (Is A) (by subsumption)",
    code: "is-not-a",
    system: "http://hl7.org/fhir/filter-operator",
  },
  /**
   * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
   */
  NotInSet: {
    display: "Not in Set",
    code: "not-in",
    system: "http://hl7.org/fhir/filter-operator",
  },
  /**
   * regex: The specified property of the code  matches the regex specified in the provided value.
   */
  RegularExpression: {
    display: "Regular Expression",
    code: "regex",
    system: "http://hl7.org/fhir/filter-operator",
  },
} as const;
