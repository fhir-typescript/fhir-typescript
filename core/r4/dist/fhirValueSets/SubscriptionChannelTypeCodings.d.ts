import { Coding } from '../fhir/Coding.js';
/**
 * The type of method used to execute a subscription.
 */
export declare const SubscriptionChannelTypeCodings: {
    /**
     * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    readonly Email: Coding;
    /**
     * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    readonly Message: Coding;
    /**
     * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    readonly RestHook: Coding;
    /**
     * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    readonly SMS: Coding;
    /**
     * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    readonly Websocket: Coding;
};
/**
 * The type of method used to execute a subscription.
 */
export declare type SubscriptionChannelTypeCodingType = typeof SubscriptionChannelTypeCodings;
//# sourceMappingURL=SubscriptionChannelTypeCodings.d.ts.map