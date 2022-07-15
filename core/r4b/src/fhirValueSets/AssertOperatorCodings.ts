// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/assert-operator-codes|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of operator to use for assertion.
 */
export type AssertOperatorCodingType = {
  /**
   * contains: Compare value string contains a known value.
   */
  Contains: CodingArgs;
  /**
   * empty: Compare value is empty.
   */
  Empty: CodingArgs;
  /**
   * equals: Default value. Equals comparison.
   */
  Equals: CodingArgs;
  /**
   * eval: Evaluate the FHIRPath expression as a boolean condition.
   */
  Evaluate: CodingArgs;
  /**
   * greaterThan: Compare value to be greater than a known value.
   */
  GreaterThan: CodingArgs;
  /**
   * in: Compare value within a known set of values.
   */
  In: CodingArgs;
  /**
   * lessThan: Compare value to be less than a known value.
   */
  LessThan: CodingArgs;
  /**
   * notContains: Compare value string does not contain a known value.
   */
  NotContains: CodingArgs;
  /**
   * notEmpty: Compare value is not empty.
   */
  NotEmpty: CodingArgs;
  /**
   * notEquals: Not equals comparison.
   */
  NotEquals: CodingArgs;
  /**
   * notIn: Compare value not within a known set of values.
   */
  NotIn: CodingArgs;
}

/**
 * The type of operator to use for assertion.
 */
export const AssertOperatorCodings:AssertOperatorCodingType = {
  /**
   * contains: Compare value string contains a known value.
   */
  Contains: {
    display: "contains",
    code: "contains",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * empty: Compare value is empty.
   */
  Empty: {
    display: "empty",
    code: "empty",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * equals: Default value. Equals comparison.
   */
  Equals: {
    display: "equals",
    code: "equals",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * eval: Evaluate the FHIRPath expression as a boolean condition.
   */
  Evaluate: {
    display: "evaluate",
    code: "eval",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * greaterThan: Compare value to be greater than a known value.
   */
  GreaterThan: {
    display: "greaterThan",
    code: "greaterThan",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * in: Compare value within a known set of values.
   */
  In: {
    display: "in",
    code: "in",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * lessThan: Compare value to be less than a known value.
   */
  LessThan: {
    display: "lessThan",
    code: "lessThan",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * notContains: Compare value string does not contain a known value.
   */
  NotContains: {
    display: "notContains",
    code: "notContains",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * notEmpty: Compare value is not empty.
   */
  NotEmpty: {
    display: "notEmpty",
    code: "notEmpty",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * notEquals: Not equals comparison.
   */
  NotEquals: {
    display: "notEquals",
    code: "notEquals",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
  /**
   * notIn: Compare value not within a known set of values.
   */
  NotIn: {
    display: "notIn",
    code: "notIn",
    system: "http://hl7.org/fhir/assert-operator-codes",
  },
} as const;
