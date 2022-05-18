// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-channel-type|4.0.1

/**
 * The type of method used to execute a subscription.
 */
export const SubscriptionChannelTypeCodes = {
  /**
   * email: The channel is executed by sending an email to the email addressed in the URI (which must be a mailto:).
   */
  Email: "email",
  /**
   * message: The channel is executed by sending a message (e.g. a Bundle with a MessageHeader resource etc.) to the application identified in the URI.
   */
  Message: "message",
  /**
   * rest-hook: The channel is executed by making a post to the URI. If a payload is included, the URL is interpreted as the service base, and an update (PUT) is made.
   */
  RestHook: "rest-hook",
  /**
   * sms: The channel is executed by sending an SMS message to the phone number identified in the URL (tel:).
   */
  SMS: "sms",
  /**
   * websocket: The channel is executed by sending a packet across a web socket connection maintained by the client. The URL identifies the websocket, and the client binds to this URL.
   */
  Websocket: "websocket",
} as const;

/**
 * The type of method used to execute a subscription.
 */
export type SubscriptionChannelTypeCodeType = typeof SubscriptionChannelTypeCodes[keyof typeof SubscriptionChannelTypeCodes];
