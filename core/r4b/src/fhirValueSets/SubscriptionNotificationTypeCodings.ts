// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-notification-type|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The type of notification represented by the status message.
 */
export type SubscriptionNotificationTypeCodingType = {
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
}

/**
 * The type of notification represented by the status message.
 */
export const SubscriptionNotificationTypeCodings:SubscriptionNotificationTypeCodingType = {
  /**
   * event-notification: The status was generated for an event to the subscriber.
   */
  EventNotification: {
    display: "Event Notification",
    code: "event-notification",
    system: "http://hl7.org/fhir/subscription-notification-type",
  },
  /**
   * handshake: The status was generated as part of the setup or verification of a communications channel.
   */
  Handshake: {
    display: "Handshake",
    code: "handshake",
    system: "http://hl7.org/fhir/subscription-notification-type",
  },
  /**
   * heartbeat: The status was generated to perform a heartbeat notification to the subscriber.
   */
  Heartbeat: {
    display: "Heartbeat",
    code: "heartbeat",
    system: "http://hl7.org/fhir/subscription-notification-type",
  },
  /**
   * query-event: The status was generated in response to an event query/request.
   */
  QueryEvent: {
    display: "Query Event",
    code: "query-event",
    system: "http://hl7.org/fhir/subscription-notification-type",
  },
  /**
   * query-status: The status was generated in response to a status query/request.
   */
  QueryStatus: {
    display: "Query Status",
    code: "query-status",
    system: "http://hl7.org/fhir/subscription-notification-type",
  },
} as const;
