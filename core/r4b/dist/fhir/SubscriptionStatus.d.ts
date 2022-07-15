import * as fhir from '../fhir.js';
import { SubscriptionStatusCodeType } from '../fhirValueSets/SubscriptionStatusCodes.js';
import { SubscriptionNotificationTypeCodeType } from '../fhirValueSets/SubscriptionNotificationTypeCodes.js';
/**
 * Valid arguments for the SubscriptionStatusNotificationEvent type.
 */
export interface SubscriptionStatusNotificationEventArgs extends fhir.BackboneElementArgs {
    /**
     * The sequential number of this event in this subscription context. Note that this value is a 64-bit integer value, encoded as a string.
     */
    eventNumber: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.notificationEvent.eventNumber
     */
    _eventNumber?: fhir.FhirElementArgs;
    /**
     * The actual time this event occured on the server.
     */
    timestamp?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.notificationEvent.timestamp
     */
    _timestamp?: fhir.FhirElementArgs;
    /**
     * The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object.
     */
    focus?: fhir.ReferenceArgs | undefined;
    /**
     * Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects.
     */
    additionalContext?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Detailed information about events relevant to this subscription notification.
 */
export declare class SubscriptionStatusNotificationEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The sequential number of this event in this subscription context. Note that this value is a 64-bit integer value, encoded as a string.
     */
    eventNumber: fhir.FhirString | null;
    /**
     * The actual time this event occured on the server.
     */
    timestamp?: fhir.FhirInstant | undefined;
    /**
     * The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object.
     */
    focus?: fhir.Reference | undefined;
    /**
     * Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects.
     */
    additionalContext: fhir.Reference[];
    /**
     * Default constructor for SubscriptionStatusNotificationEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionStatusNotificationEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubscriptionStatus type.
 */
export interface SubscriptionStatusArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SubscriptionStatus" | undefined;
    /**
     * The status of the subscription, which marks the server state for managing the subscription.
     */
    status?: fhir.FhirCode<SubscriptionStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The type of event being conveyed with this notificaiton.
     */
    type: fhir.FhirCode<SubscriptionNotificationTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications.
     */
    eventsSinceSubscriptionStart?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.eventsSinceSubscriptionStart
     */
    _eventsSinceSubscriptionStart?: fhir.FhirElementArgs;
    /**
     * Detailed information about events relevant to this subscription notification.
     */
    notificationEvent?: fhir.SubscriptionStatusNotificationEventArgs[] | undefined;
    /**
     * The reference to the Subscription which generated this notification.
     */
    subscription: fhir.ReferenceArgs | null;
    /**
     * This value SHOULD NOT be present when using `empty` payloads, MAY be present when using `id-only` payloads, and SHOULD be present when using `full-resource` payloads.
     */
    topic?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: SubscriptionStatus.topic
     */
    _topic?: fhir.FhirElementArgs;
    /**
     * Recommended practice: clear errors when status is updated.
     */
    error?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * The SubscriptionStatus resource describes the state of a Subscription during notifications.
 */
export declare class SubscriptionStatus extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SubscriptionStatus";
    /**
     * The status of the subscription, which marks the server state for managing the subscription.
     */
    status?: fhir.FhirCode<SubscriptionStatusCodeType> | undefined;
    /**
     * The type of event being conveyed with this notificaiton.
     */
    type: fhir.FhirCode<SubscriptionNotificationTypeCodeType> | null;
    /**
     * The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications.
     */
    eventsSinceSubscriptionStart?: fhir.FhirString | undefined;
    /**
     * Detailed information about events relevant to this subscription notification.
     */
    notificationEvent: fhir.SubscriptionStatusNotificationEvent[];
    /**
     * The reference to the Subscription which generated this notification.
     */
    subscription: fhir.Reference | null;
    /**
     * This value SHOULD NOT be present when using `empty` payloads, MAY be present when using `id-only` payloads, and SHOULD be present when using `full-resource` payloads.
     */
    topic?: fhir.FhirCanonical | undefined;
    /**
     * Recommended practice: clear errors when status is updated.
     */
    error: fhir.CodeableConcept[];
    /**
     * Default constructor for SubscriptionStatus - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubscriptionStatusArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SubscriptionStatus.d.ts.map