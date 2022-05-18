import { Coding } from '../fhir/Coding.js';
/**
 * The status of a subscription.
 */
export declare const SubscriptionStatusCodings: {
    /**
     * active: The subscription is active.
     */
    readonly Active: Coding;
    /**
     * error: The server has an error executing the notification.
     */
    readonly Error: Coding;
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    readonly Off: Coding;
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    readonly Requested: Coding;
};
/**
 * The status of a subscription.
 */
export declare type SubscriptionStatusCodingType = typeof SubscriptionStatusCodings;
//# sourceMappingURL=SubscriptionStatusCodings.d.ts.map