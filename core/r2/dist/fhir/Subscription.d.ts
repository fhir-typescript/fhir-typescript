import * as fhir from '../fhir.js';
import { SubscriptionChannelTypeCodeType } from '../fhirValueSets/SubscriptionChannelTypeCodes.js';
import { SubscriptionStatusCodeType } from '../fhirValueSets/SubscriptionStatusCodes.js';
/**
 * Valid arguments for the SubscriptionChannel type.
 */
export interface SubscriptionChannelArgs extends fhir.BackboneElementArgs {
    /**
     * The type of channel to send notifications on.
     */
    type: fhir.FhirCode<SubscriptionChannelTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The uri that describes the actual end-point to send messages to.
     */
    endpoint?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.endpoint
     */
    _endpoint?: fhir.FhirElementArgs;
    /**
     * The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
     */
    payload: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.payload
     */
    _payload?: fhir.FhirElementArgs;
    /**
     * Additional headers / information to send as part of the notification.
     */
    header?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.channel.header
     */
    _header?: fhir.FhirElementArgs;
}
/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export declare class SubscriptionChannel extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of channel to send notifications on.
     */
    type: fhir.FhirCode<SubscriptionChannelTypeCodeType> | null;
    /**
     * The uri that describes the actual end-point to send messages to.
     */
    endpoint?: fhir.FhirUri | undefined;
    /**
     * The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
     */
    payload: fhir.FhirString | null;
    /**
     * Additional headers / information to send as part of the notification.
     */
    header?: fhir.FhirString | undefined;
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionChannelArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Subscription type.
 */
export interface SubscriptionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Subscription" | undefined;
    /**
     * The rules that the server should use to determine when to generate notifications for this subscription.
     */
    criteria: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.criteria
     */
    _criteria?: fhir.FhirElementArgs;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.reason
     */
    _reason?: fhir.FhirElementArgs;
    /**
     * The status of the subscription, which marks the server state for managing the subscription.
     */
    status: fhir.FhirCode<SubscriptionStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.error
     */
    _error?: fhir.FhirElementArgs;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannelArgs | null;
    /**
     * The time for the server to turn the subscription off.
     */
    end?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Subscription.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * A tag to add to any resource that matches the criteria, after the subscription is processed.
     */
    tag?: fhir.CodingArgs[] | undefined;
}
/**
 * The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
 */
export declare class Subscription extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Subscription";
    /**
     * The rules that the server should use to determine when to generate notifications for this subscription.
     */
    criteria: fhir.FhirString | null;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact: fhir.ContactPoint[];
    /**
     * A description of why this subscription is defined.
     */
    reason: fhir.FhirString | null;
    /**
     * The status of the subscription, which marks the server state for managing the subscription.
     */
    status: fhir.FhirCode<SubscriptionStatusCodeType> | null;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: fhir.FhirString | undefined;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannel | null;
    /**
     * The time for the server to turn the subscription off.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * A tag to add to any resource that matches the criteria, after the subscription is processed.
     */
    tag: fhir.Coding[];
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Subscription.d.ts.map