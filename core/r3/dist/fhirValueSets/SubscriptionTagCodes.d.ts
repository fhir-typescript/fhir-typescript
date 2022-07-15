/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export declare const SubscriptionTagCodes: {
    /**
     * delivered: The message has been delivered to its intended recipient.
     */
    readonly Delivered: "delivered";
    /**
     * queued: The message has been queued for processing on a destination systems.
     */
    readonly Queued: "queued";
};
/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export declare type SubscriptionTagCodeType = typeof SubscriptionTagCodes[keyof typeof SubscriptionTagCodes];
//# sourceMappingURL=SubscriptionTagCodes.d.ts.map