// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-reason-encounter|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export type MessageReasonEncounterCodingType = {
  /**
   * absent: The patient has temporarily left the institution.
   */
  Absent: CodingArgs;
  /**
   * admit: The patient has been admitted.
   */
  Admit: CodingArgs;
  /**
   * discharge: The patient has been discharged.
   */
  Discharge: CodingArgs;
  /**
   * edit: Encounter details have been updated (e.g. to correct a coding error).
   */
  Edit: CodingArgs;
  /**
   * moved: The patient has been moved to a new location.
   */
  Moved: CodingArgs;
  /**
   * return: The patient has returned from a temporary absence.
   */
  Returned: CodingArgs;
}

/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export const MessageReasonEncounterCodings:MessageReasonEncounterCodingType = {
  /**
   * absent: The patient has temporarily left the institution.
   */
  Absent: {
    display: "Absent",
    code: "absent",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
  /**
   * admit: The patient has been admitted.
   */
  Admit: {
    display: "Admit",
    code: "admit",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
  /**
   * discharge: The patient has been discharged.
   */
  Discharge: {
    display: "Discharge",
    code: "discharge",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
  /**
   * edit: Encounter details have been updated (e.g. to correct a coding error).
   */
  Edit: {
    display: "Edit",
    code: "edit",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
  /**
   * moved: The patient has been moved to a new location.
   */
  Moved: {
    display: "Moved",
    code: "moved",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
  /**
   * return: The patient has returned from a temporary absence.
   */
  Returned: {
    display: "Returned",
    code: "return",
    system: "http://hl7.org/fhir/message-reasons-encounter",
  },
} as const;
