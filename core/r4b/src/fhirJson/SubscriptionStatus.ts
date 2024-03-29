// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: SubscriptionStatus

import * as fhir from '../fhirJson.js';


/**
 * Detailed information about events relevant to this subscription notification.
 */
export interface SubscriptionStatusNotificationEvent extends fhir.BackboneElement { 
  /**
   * The sequential number of this event in this subscription context. Note that this value is a 64-bit integer value, encoded as a string.
   */
  eventNumber: string|null;
  /**
   * Extended properties for primitive element: SubscriptionStatus.notificationEvent.eventNumber
   */
  _eventNumber?:fhir.FhirElement;
  /**
   * The actual time this event occured on the server.
   */
  timestamp?: string|undefined;
  /**
   * Extended properties for primitive element: SubscriptionStatus.notificationEvent.timestamp
   */
  _timestamp?:fhir.FhirElement;
  /**
   * The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object.
   */
  focus?: fhir.Reference|undefined;
  /**
   * Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects.
   */
  additionalContext?: (fhir.Reference|null)[]|undefined;
}

/**
 * The SubscriptionStatus resource describes the state of a Subscription during notifications.
 */
export interface SubscriptionStatus extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "SubscriptionStatus"|null;
  /**
   * The status of the subscription, which marks the server state for managing the subscription.
   */
  status?: 'active'|'error'|'off'|'requested'|undefined;
  /**
   * Extended properties for primitive element: SubscriptionStatus.status
   */
  _status?:fhir.FhirElement;
  /**
   * The type of event being conveyed with this notificaiton.
   */
  type: 'event-notification'|'handshake'|'heartbeat'|'query-event'|'query-status'|null;
  /**
   * Extended properties for primitive element: SubscriptionStatus.type
   */
  _type?:fhir.FhirElement;
  /**
   * The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications.
   */
  eventsSinceSubscriptionStart?: string|undefined;
  /**
   * Extended properties for primitive element: SubscriptionStatus.eventsSinceSubscriptionStart
   */
  _eventsSinceSubscriptionStart?:fhir.FhirElement;
  /**
   * Detailed information about events relevant to this subscription notification.
   */
  notificationEvent?: (fhir.SubscriptionStatusNotificationEvent|null)[]|undefined;
  /**
   * The reference to the Subscription which generated this notification.
   */
  subscription: fhir.Reference|null;
  /**
   * This value SHOULD NOT be present when using `empty` payloads, MAY be present when using `id-only` payloads, and SHOULD be present when using `full-resource` payloads.
   */
  topic?: string|undefined;
  /**
   * Extended properties for primitive element: SubscriptionStatus.topic
   */
  _topic?:fhir.FhirElement;
  /**
   * Recommended practice: clear errors when status is updated.
   */
  error?: (fhir.CodeableConcept|null)[]|undefined;
}
