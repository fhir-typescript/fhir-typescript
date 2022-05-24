import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the episode of care.
 */
export declare type EpisodeOfCareStatusCodingType = {
    /**
     * active: This episode of care is current.
     */
    Active: CodingArgs;
    /**
     * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
     */
    Cancelled: CodingArgs;
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: CodingArgs;
    /**
     * finished: This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.
     */
    Finished: CodingArgs;
    /**
     * onhold: This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).
     */
    OnHold: CodingArgs;
    /**
     * planned: This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.
     */
    Planned: CodingArgs;
    /**
     * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
     */
    Waitlist: CodingArgs;
};
/**
 * The status of the episode of care.
 */
export declare const EpisodeOfCareStatusCodings: EpisodeOfCareStatusCodingType;
//# sourceMappingURL=EpisodeOfCareStatusCodings.d.ts.map