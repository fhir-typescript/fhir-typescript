import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of the referral.
 */
export declare type ReferralstatusCodingType = {
    /**
     * accepted: The recipient has agreed to deliver the care requested by the referral.
     */
    Accepted: CodingArgs;
    /**
     * active: The referral has been acknowledged by the recipient, and is in the process of being actioned.
     */
    Active: CodingArgs;
    /**
     * cancelled: The referral has been cancelled without being completed. For example it is no longer needed.
     */
    Cancelled: CodingArgs;
    /**
     * completed: The referral has been completely actioned.
     */
    Completed: CodingArgs;
    /**
     * draft: A draft referral that has yet to be send.
     */
    Draft: CodingArgs;
    /**
     * rejected: The recipient has declined to accept the referral.
     */
    Rejected: CodingArgs;
    /**
     * requested: The referral has been transmitted, but not yet acknowledged by the recipient.
     */
    Requested: CodingArgs;
};
/**
 * The status of the referral.
 */
export declare const ReferralstatusCodings: ReferralstatusCodingType;
//# sourceMappingURL=ReferralstatusCodings.d.ts.map