// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episode-of-care-status|1.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The status of the encounter.
 */
export type EpisodeOfCareStatusCodingType = {
  /**
   * active: This episode of care is current.
   */
  Active: CodingArgs;
  /**
   * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
   */
  Cancelled: CodingArgs;
  /**
   * finished: This episode of care is finished at the organization is not expecting to be providing care to the patient. Can also be known as "closed", "completed" or other similar terms.
   */
  Finished: CodingArgs;
  /**
   * onhold: This episode of care is on hold, the organization has limited responsibility for the patient (such as while on respite).
   */
  OnHold: CodingArgs;
  /**
   * planned: This episode of care is planned to start at the date specified in the period.start. During this status an organization may perform assessments to determine if they are eligible to receive services, or be organizing to make resources available to provide care services.
   */
  Planned: CodingArgs;
  /**
   * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
   */
  Waitlist: CodingArgs;
}

/**
 * The status of the encounter.
 */
export const EpisodeOfCareStatusCodings:EpisodeOfCareStatusCodingType = {
  /**
   * active: This episode of care is current.
   */
  Active: {
    display: "Active",
    code: "active",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
  /**
   * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
   */
  Cancelled: {
    display: "Cancelled",
    code: "cancelled",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
  /**
   * finished: This episode of care is finished at the organization is not expecting to be providing care to the patient. Can also be known as "closed", "completed" or other similar terms.
   */
  Finished: {
    display: "Finished",
    code: "finished",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
  /**
   * onhold: This episode of care is on hold, the organization has limited responsibility for the patient (such as while on respite).
   */
  OnHold: {
    display: "On Hold",
    code: "onhold",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
  /**
   * planned: This episode of care is planned to start at the date specified in the period.start. During this status an organization may perform assessments to determine if they are eligible to receive services, or be organizing to make resources available to provide care services.
   */
  Planned: {
    display: "Planned",
    code: "planned",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
  /**
   * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
   */
  Waitlist: {
    display: "Waitlist",
    code: "waitlist",
    system: "http://hl7.org/fhir/episode-of-care-status",
  },
} as const;
