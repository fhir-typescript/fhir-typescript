import * as fhir from '../fhirJson.js';
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export interface SubscriptionChannel extends fhir.BackboneElement {
    /**
     * The type of channel to send notifications on.
     */
    type: 'email' | 'message' | 'rest-hook' | 'sms' | 'websocket' | null;
    /**
     * Extended properties for primitive element: Subscription.channel.type
     */
    _type?: fhir.FhirElement;
    /**
     * The uri that describes the actual end-point to send messages to.
     */
    endpoint?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.endpoint
     */
    _endpoint?: fhir.FhirElement;
    /**
     * The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
     */
    payload: string | null;
    /**
     * Extended properties for primitive element: Subscription.channel.payload
     */
    _payload?: fhir.FhirElement;
    /**
     * Additional headers / information to send as part of the notification.
     */
    header?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.header
     */
    _header?: fhir.FhirElement;
}
/**
 * The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
 */
export interface Subscription extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Subscription" | null;
    /**
     * The rules that the server should use to determine when to generate notifications for this subscription.
     */
    criteria: string | null;
    /**
     * Extended properties for primitive element: Subscription.criteria
     */
    _criteria?: fhir.FhirElement;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: string | null;
    /**
     * Extended properties for primitive element: Subscription.reason
     */
    _reason?: fhir.FhirElement;
    /**
     * The status of the subscription, which marks the server state for managing the subscription.
     */
    status: 'active' | 'error' | 'off' | 'requested' | null;
    /**
     * Extended properties for primitive element: Subscription.status
     */
    _status?: fhir.FhirElement;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.error
     */
    _error?: fhir.FhirElement;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannel | null;
    /**
     * The time for the server to turn the subscription off.
     */
    end?: string | undefined;
    /**
     * Extended properties for primitive element: Subscription.end
     */
    _end?: fhir.FhirElement;
    /**
     * A tag to add to any resource that matches the criteria, after the subscription is processed.
     */
    tag?: (fhir.Coding | null)[] | undefined;
}
//# sourceMappingURL=Subscription.d.ts.map