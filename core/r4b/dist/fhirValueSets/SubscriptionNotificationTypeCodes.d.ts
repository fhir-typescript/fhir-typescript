/**
 * The type of notification represented by the status message.
 */
export declare const SubscriptionNotificationTypeCodes: {
    /**
     * event-notification: The status was generated for an event to the subscriber.
     */
    readonly EventNotification: "event-notification";
    /**
     * handshake: The status was generated as part of the setup or verification of a communications channel.
     */
    readonly Handshake: "handshake";
    /**
     * heartbeat: The status was generated to perform a heartbeat notification to the subscriber.
     */
    readonly Heartbeat: "heartbeat";
    /**
     * query-event: The status was generated in response to an event query/request.
     */
    readonly QueryEvent: "query-event";
    /**
     * query-status: The status was generated in response to a status query/request.
     */
    readonly QueryStatus: "query-status";
};
/**
 * The type of notification represented by the status message.
 */
export declare type SubscriptionNotificationTypeCodeType = typeof SubscriptionNotificationTypeCodes[keyof typeof SubscriptionNotificationTypeCodes];
//# sourceMappingURL=SubscriptionNotificationTypeCodes.d.ts.map