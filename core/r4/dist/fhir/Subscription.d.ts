import * as fhir from '../fhir.js';
import { SubscriptionChannelTypeCodingType } from '../fhirValueSets/SubscriptionChannelTypeCodings.js';
import { SubscriptionChannelTypeCodeType } from '../fhirValueSets/SubscriptionChannelTypeCodes.js';
import { SubscriptionStatusCodingType } from '../fhirValueSets/SubscriptionStatusCodings.js';
import { SubscriptionStatusCodeType } from '../fhirValueSets/SubscriptionStatusCodes.js';
/**
 * Valid arguments for the SubscriptionChannel type.
 */
export interface SubscriptionChannelArgs extends fhir.BackboneElementArgs {
    /**
     * The type of channel to send notifications on.
     */
    type: SubscriptionChannelTypeCodeType | null;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: fhir.FhirUrl | string | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: fhir.FhirCode | string | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: fhir.FhirString[] | string[] | undefined;
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
    type: SubscriptionChannelTypeCodeType | null;
    /**
     * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
     */
    endpoint?: fhir.FhirUrl | undefined;
    /**
     * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
     */
    payload?: fhir.FhirCode | undefined;
    /**
     * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
     */
    header?: fhir.FhirString[];
    /**
     * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionChannelArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (Subscription.channel.type)
     */
    static typeRequiredCoding(): SubscriptionChannelTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusCodeType | null;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: fhir.FhirInstant | string | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: fhir.FhirString | string | undefined;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: fhir.FhirString | string | undefined;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: fhir.FhirString | string | undefined;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannelArgs | null;
}
/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
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
     * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: SubscriptionStatusCodeType | null;
    /**
     * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
     */
    contact?: fhir.ContactPoint[];
    /**
     * The server is permitted to deviate from this time but should observe it.
     */
    end?: fhir.FhirInstant | undefined;
    /**
     * A description of why this subscription is defined.
     */
    reason: fhir.FhirString | null;
    /**
     * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
     */
    criteria: fhir.FhirString | null;
    /**
     * A record of the last error that occurred when the server processed a notification.
     */
    error?: fhir.FhirString | undefined;
    /**
     * Details where to send notifications when resources are received that meet the criteria.
     */
    channel: fhir.SubscriptionChannel | null;
    /**
     * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Subscription.status)
     */
    static statusRequiredCoding(): SubscriptionStatusCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Subscription.d.ts.map