import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of method used to execute a subscription.
 */
export declare type SubscriptionChannelTypeCodingType = {
    /**
     * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
     */
    Email: CodingArgs;
    /**
     * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
     */
    Message: CodingArgs;
    /**
     * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
     */
    RestHook: CodingArgs;
    /**
     * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
     */
    SMS: CodingArgs;
    /**
     * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
     */
    Websocket: CodingArgs;
};
/**
 * The type of method used to execute a subscription.
 */
export declare const SubscriptionChannelTypeCodings: SubscriptionChannelTypeCodingType;
//# sourceMappingURL=SubscriptionChannelTypeCodings.d.ts.map