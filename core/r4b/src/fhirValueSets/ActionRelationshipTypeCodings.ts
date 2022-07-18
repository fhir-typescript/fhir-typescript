// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-relationship-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Defines the types of relationships between actions.
 */
export type ActionRelationshipTypeCodingType = {
  /**
   * after: The action must be performed after the related action.
   */
  After: CodingArgs;
  /**
   * after-end: The action must be performed after the end of the related action.
   */
  AfterEnd: CodingArgs;
  /**
   * after-start: The action must be performed after the start of the related action.
   */
  AfterStart: CodingArgs;
  /**
   * before: The action must be performed before the related action.
   */
  Before: CodingArgs;
  /**
   * before-end: The action must be performed before the end of the related action.
   */
  BeforeEnd: CodingArgs;
  /**
   * before-start: The action must be performed before the start of the related action.
   */
  BeforeStart: CodingArgs;
  /**
   * concurrent: The action must be performed concurrent with the related action.
   */
  Concurrent: CodingArgs;
  /**
   * concurrent-with-end: The action must be performed concurrent with the end of the related action.
   */
  ConcurrentWithEnd: CodingArgs;
  /**
   * concurrent-with-start: The action must be performed concurrent with the start of the related action.
   */
  ConcurrentWithStart: CodingArgs;
}

/**
 * Defines the types of relationships between actions.
 */
export const ActionRelationshipTypeCodings:ActionRelationshipTypeCodingType = {
  /**
   * after: The action must be performed after the related action.
   */
  After: {
    display: "After",
    code: "after",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * after-end: The action must be performed after the end of the related action.
   */
  AfterEnd: {
    display: "After End",
    code: "after-end",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * after-start: The action must be performed after the start of the related action.
   */
  AfterStart: {
    display: "After Start",
    code: "after-start",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * before: The action must be performed before the related action.
   */
  Before: {
    display: "Before",
    code: "before",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * before-end: The action must be performed before the end of the related action.
   */
  BeforeEnd: {
    display: "Before End",
    code: "before-end",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * before-start: The action must be performed before the start of the related action.
   */
  BeforeStart: {
    display: "Before Start",
    code: "before-start",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * concurrent: The action must be performed concurrent with the related action.
   */
  Concurrent: {
    display: "Concurrent",
    code: "concurrent",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * concurrent-with-end: The action must be performed concurrent with the end of the related action.
   */
  ConcurrentWithEnd: {
    display: "Concurrent With End",
    code: "concurrent-with-end",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
  /**
   * concurrent-with-start: The action must be performed concurrent with the start of the related action.
   */
  ConcurrentWithStart: {
    display: "Concurrent With Start",
    code: "concurrent-with-start",
    system: "http://hl7.org/fhir/action-relationship-type",
  },
} as const;