// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-state|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Current state of the encounter
 */
export type EncounterStateCodingType = {
  /**
   * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
   */
  Arrived: CodingArgs;
  /**
   * cancelled: The Encounter has ended before it has begun.
   */
  Cancelled: CodingArgs;
  /**
   * finished: The Encounter has ended.
   */
  Finished: CodingArgs;
  /**
   * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
   */
  InProgress: CodingArgs;
  /**
   * onleave: The Encounter has begun, but the patient is temporarily on leave.
   */
  OnLeave: CodingArgs;
  /**
   * planned: The Encounter has not yet started.
   */
  Planned: CodingArgs;
}

/**
 * Current state of the encounter
 */
export const EncounterStateCodings:EncounterStateCodingType = {
  /**
   * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
   */
  Arrived: {
    display: "Arrived",
    code: "arrived",
    system: "http://hl7.org/fhir/encounter-state",
  },
  /**
   * cancelled: The Encounter has ended before it has begun.
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/encounter-state",
  },
  /**
   * finished: The Encounter has ended.
   */
  Finished: {
    display: "Finished",
    code: "finished",
    system: "http://hl7.org/fhir/encounter-state",
  },
  /**
   * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
   */
  InProgress: {
    display: "in Progress",
    code: "in-progress",
    system: "http://hl7.org/fhir/encounter-state",
  },
  /**
   * onleave: The Encounter has begun, but the patient is temporarily on leave.
   */
  OnLeave: {
    display: "On Leave",
    code: "onleave",
    system: "http://hl7.org/fhir/encounter-state",
  },
  /**
   * planned: The Encounter has not yet started.
   */
  Planned: {
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/encounter-state",
  },
} as const;
