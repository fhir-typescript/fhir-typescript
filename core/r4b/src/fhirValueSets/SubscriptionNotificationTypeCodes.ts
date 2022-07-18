// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-notification-type|4.3.0

/**
 * The type of notification represented by the status message.
 */
export const SubscriptionNotificationTypeCodes = {
  /**
   * event-notification: The status was generated for an event to the subscriber.
   */
  EventNotification: "event-notification",
  /**
   * handshake: The status was generated as part of the setup or verification of a communications channel.
   */
  Handshake: "handshake",
  /**
   * heartbeat: The status was generated to perform a heartbeat notification to the subscriber.
   */
  Heartbeat: "heartbeat",
  /**
   * query-event: The status was generated in response to an event query/request.
   */
  QueryEvent: "query-event",
  /**
   * query-status: The status was generated in response to a status query/request.
   */
  QueryStatus: "query-status",
} as const;

/**
 * The type of notification represented by the status message.
 */
export type SubscriptionNotificationTypeCodeType = typeof SubscriptionNotificationTypeCodes[keyof typeof SubscriptionNotificationTypeCodes];