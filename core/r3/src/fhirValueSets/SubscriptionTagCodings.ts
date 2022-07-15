// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subscription-tag|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export type SubscriptionTagCodingType = {
  /**
   * delivered: The message has been delivered to its intended recipient.
   */
  Delivered: CodingArgs;
  /**
   * queued: The message has been queued for processing on a destination systems.
   */
  Queued: CodingArgs;
}

/**
 * Tags to put on a resource after subscriptions have been sent.
 */
export const SubscriptionTagCodings:SubscriptionTagCodingType = {
  /**
   * delivered: The message has been delivered to its intended recipient.
   */
  Delivered: {
    display: "Delivered",
    code: "delivered",
    system: "http://hl7.org/fhir/subscription-tag",
  },
  /**
   * queued: The message has been queued for processing on a destination systems.
   */
  Queued: {
    display: "Queued",
    code: "queued",
    system: "http://hl7.org/fhir/subscription-tag",
  },
} as const;
