// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-status|1.0.2

/**
 * The status of a subscription.
 */
export const SubscriptionStatusCodes = {
  /**
   * active: The subscription is active.
   */
  Active: "active",
  /**
   * error: The server has an error executing the notification.
   */
  Error: "error",
  /**
   * off: Too many errors have occurred or the subscription has expired.
   */
  Off: "off",
  /**
   * requested: The client has requested the subscription, and the server has not yet set it up.
   */
  Requested: "requested",
} as const;

/**
 * The status of a subscription.
 */
export type SubscriptionStatusCodeType = typeof SubscriptionStatusCodes[keyof typeof SubscriptionStatusCodes];
