import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of notification represented by the status message.
 */
export declare type SubscriptionNotificationTypeCodingType = {
    /**
     * event-notification: The status was generated for an event to the subscriber.
     */
    EventNotification: CodingArgs;
    /**
     * handshake: The status was generated as part of the setup or verification of a communications channel.
     */
    Handshake: CodingArgs;
    /**
     * heartbeat: The status was generated to perform a heartbeat notification to the subscriber.
     */
    Heartbeat: CodingArgs;
    /**
     * query-event: The status was generated in response to an event query/request.
     */
    QueryEvent: CodingArgs;
    /**
     * query-status: The status was generated in response to a status query/request.
     */
    QueryStatus: CodingArgs;
};
/**
 * The type of notification represented by the status message.
 */
export declare const SubscriptionNotificationTypeCodings: SubscriptionNotificationTypeCodingType;
//# sourceMappingURL=SubscriptionNotificationTypeCodings.d.ts.map