/**
 * The status of a subscription.
 */
export declare const SubscriptionStatusCodes: {
    /**
     * active: The subscription is active.
     */
    readonly Active: "active";
    /**
     * error: The server has an error executing the notification.
     */
    readonly Error: "error";
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    readonly Off: "off";
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    readonly Requested: "requested";
};
/**
 * The status of a subscription.
 */
export declare type SubscriptionStatusCodeType = typeof SubscriptionStatusCodes[keyof typeof SubscriptionStatusCodes];
//# sourceMappingURL=SubscriptionStatusCodes.d.ts.map