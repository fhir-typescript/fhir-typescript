/**
 * The status of the referral.
 */
export declare const ReferralstatusCodes: {
    /**
     * accepted: The recipient has agreed to deliver the care requested by the referral.
     */
    readonly Accepted: "accepted";
    /**
     * active: The referral has been acknowledged by the recipient, and is in the process of being actioned.
     */
    readonly Active: "active";
    /**
     * cancelled: The referral has been cancelled without being completed. For example it is no longer needed.
     */
    readonly Cancelled: "cancelled";
    /**
     * completed: The referral has been completely actioned.
     */
    readonly Completed: "completed";
    /**
     * draft: A draft referral that has yet to be send.
     */
    readonly Draft: "draft";
    /**
     * rejected: The recipient has declined to accept the referral.
     */
    readonly Rejected: "rejected";
    /**
     * requested: The referral has been transmitted, but not yet acknowledged by the recipient.
     */
    readonly Requested: "requested";
};
/**
 * The status of the referral.
 */
export declare type ReferralstatusCodeType = typeof ReferralstatusCodes[keyof typeof ReferralstatusCodes];
//# sourceMappingURL=ReferralstatusCodes.d.ts.map