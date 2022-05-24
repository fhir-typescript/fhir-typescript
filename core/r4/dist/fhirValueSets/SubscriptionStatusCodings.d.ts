import { CodingArgs } from '../fhir/Coding.js';
/**
 * The status of a subscription.
 */
export declare type SubscriptionStatusCodingType = {
    /**
     * active: The subscription is active.
     */
    Active: CodingArgs;
    /**
     * error: The server has an error executing the notification.
     */
    Error: CodingArgs;
    /**
     * off: Too many errors have occurred or the subscription has expired.
     */
    Off: CodingArgs;
    /**
     * requested: The client has requested the subscription, and the server has not yet set it up.
     */
    Requested: CodingArgs;
};
/**
 * The status of a subscription.
 */
export declare const SubscriptionStatusCodings: SubscriptionStatusCodingType;
//# sourceMappingURL=SubscriptionStatusCodings.d.ts.map