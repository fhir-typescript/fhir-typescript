import { CodingArgs } from '../fhir/Coding.js';
/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export declare type SubscriptionTagCodingType = {
    /**
     * delivered: The message has been delivered to its intended recipient.
     */
    Delivered: CodingArgs;
    /**
     * queued: The message has been queued for processing on a destination systems.
     */
    Queued: CodingArgs;
};
/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export declare const SubscriptionTagCodings: SubscriptionTagCodingType;
//# sourceMappingURL=SubscriptionTagCodings.d.ts.map