/**
 * The status of the episode of care.
 */
export declare const EpisodeOfCareStatusCodes: {
    /**
     * active: This episode of care is current.
     */
    readonly Active: "active";
    /**
     * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
     */
    readonly Cancelled: "cancelled";
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    readonly EnteredInError: "entered-in-error";
    /**
     * finished: This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.
     */
    readonly Finished: "finished";
    /**
     * onhold: This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).
     */
    readonly OnHold: "onhold";
    /**
     * planned: This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.
     */
    readonly Planned: "planned";
    /**
     * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
     */
    readonly Waitlist: "waitlist";
};
/**
 * The status of the episode of care.
 */
export declare type EpisodeOfCareStatusCodeType = typeof EpisodeOfCareStatusCodes[keyof typeof EpisodeOfCareStatusCodes];
//# sourceMappingURL=EpisodeOfCareStatusCodes.d.ts.map