// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of action to be performed
 */
export type ActionTypeCodingType = {
  /**
   * create: The action is to create a new resource
   */
  Create: CodingArgs;
  /**
   * fire-event: The action is to fire a specific event
   */
  FireEvent: CodingArgs;
  /**
   * remove: The action is to remove an existing resource
   */
  Remove: CodingArgs;
  /**
   * update: The action is to update an existing resource
   */
  Update: CodingArgs;
}

/**
 * The type of action to be performed
 */
export const ActionTypeCodings:ActionTypeCodingType = {
  /**
   * create: The action is to create a new resource
   */
  Create: {
    display: "Create",
    code: "create",
    system: "http://hl7.org/fhir/action-type",
  },
  /**
   * fire-event: The action is to fire a specific event
   */
  FireEvent: {
    display: "Fire Event",
    code: "fire-event",
    system: "http://hl7.org/fhir/action-type",
  },
  /**
   * remove: The action is to remove an existing resource
   */
  Remove: {
    display: "Remove",
    code: "remove",
    system: "http://hl7.org/fhir/action-type",
  },
  /**
   * update: The action is to update an existing resource
   */
  Update: {
    display: "Update",
    code: "update",
    system: "http://hl7.org/fhir/action-type",
  },
} as const;
