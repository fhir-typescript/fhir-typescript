// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-selection-behavior|4.0.1

import { Coding } from '../fhir/Coding.js'

/**
 * Defines selection behavior of a group.
 */
export const ActionSelectionBehaviorCodings = {
  /**
   * all: All the actions in the group must be selected as a single unit.
   */
  All: new Coding({
    display: "All",
    code: "all",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
  /**
   * all-or-none: All the actions in the group are meant to be chosen as a single unit: either all must be selected by the end user, or none may be selected.
   */
  AllOrNone: new Coding({
    display: "All Or None",
    code: "all-or-none",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
  /**
   * any: Any number of the actions in the group may be chosen, from zero to all.
   */
  Any: new Coding({
    display: "Any",
    code: "any",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
  /**
   * at-most-one: The end user may choose zero or at most one of the actions in the group.
   */
  AtMostOne: new Coding({
    display: "At Most One",
    code: "at-most-one",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
  /**
   * exactly-one: The end user must choose one and only one of the selectable actions in the group. The user SHALL NOT choose none of the actions in the group.
   */
  ExactlyOne: new Coding({
    display: "Exactly One",
    code: "exactly-one",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
  /**
   * one-or-more: The end user must choose a minimum of one, and as many additional as desired.
   */
  OneOrMore: new Coding({
    display: "One Or More",
    code: "one-or-more",
    system: "http://hl7.org/fhir/action-selection-behavior",
  }),
} as const;

/**
 * Defines selection behavior of a group.
 */
export type ActionSelectionBehaviorCodingType = typeof ActionSelectionBehaviorCodings;
