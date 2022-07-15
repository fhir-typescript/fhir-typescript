import * as fhir from '../fhirJson.js';
/**
 * The event must be identified.
 */
export interface AuditEventEvent extends fhir.BackboneElement {
    /**
     * This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
     */
    type: fhir.Coding | null;
    /**
     * This field enables queries of messages by implementation-defined event categories.
     */
    subtype?: (fhir.Coding | null)[] | undefined;
    /**
     * This broadly indicates what kind of action was done on the Participant Object.
     */
    action?: 'C' | 'D' | 'E' | 'R' | 'U' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.action
     */
    _action?: fhir.FhirElement;
    /**
     * This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
     */
    dateTime: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.event.dateTime
     */
    _dateTime?: fhir.FhirElement;
    /**
     * Indicates whether the event succeeded or failed.
     */
    outcome?: '0' | '12' | '4' | '8' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.outcomeDesc
     */
    _outcomeDesc?: fhir.FhirElement;
    /**
     * The purposeOfUse (reason) that was used during the event being recorded.
     */
    purposeOfEvent?: (fhir.Coding | null)[] | undefined;
}
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export interface AuditEventParticipantNetwork extends fhir.BackboneElement {
    /**
     * This datum identifies the user's network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point's data access across all servers.
     */
    address?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.network.address
     */
    _address?: fhir.FhirElement;
    /**
     * This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point's type.
     */
    type?: '1' | '2' | '3' | '4' | '5' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.network.type
     */
    _type?: fhir.FhirElement;
}
/**
 * The event has one or more active participants.
 */
export interface AuditEventParticipant extends fhir.BackboneElement {
    /**
     * This value ties an audited event to a user's role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This field ties an audit event to a specific resource.
     */
    reference?: fhir.Reference | undefined;
    /**
     * This field ties an audit event to a specific user.
     */
    userId?: fhir.Identifier | undefined;
    /**
     * In some situations a human user may authenticate with one identity but, to access a specific application system, may use a synonymous identify. For example, some "single sign on" implementations will do this. The alternative identifier would then be the original identify  used for authentication, and the User ID is the one known to and used by the application.
     */
    altId?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.altId
     */
    _altId?: fhir.FhirElement;
    /**
     * The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.name
     */
    _name?: fhir.FhirElement;
    /**
     * This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
     */
    requestor: boolean | null;
    /**
     * Extended properties for primitive element: AuditEvent.participant.requestor
     */
    _requestor?: fhir.FhirElement;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * This value is used retrospectively to determine the authorization policies.
     */
    policy?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.policy
     */
    _policy?: (fhir.FhirElement | null)[];
    /**
     * Usually, this is used instead of specifying a network address. This field is not used for Media Id (i.e. the serial number of a CD).
     */
    media?: fhir.Coding | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventParticipantNetwork | undefined;
    /**
     * The reason (purpose of use), specific to this participant, that was used during the event being recorded.
     */
    purposeOfUse?: (fhir.Coding | null)[] | undefined;
}
/**
 * The event is reported by one source.
 */
export interface AuditEventSource extends fhir.BackboneElement {
    /**
     * This value differentiates among the sites in a multi-site enterprise health information system.
     */
    site?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.source.site
     */
    _site?: fhir.FhirElement;
    /**
     * This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
     */
    identifier: fhir.Identifier | null;
    /**
     * This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
     */
    type?: (fhir.Coding | null)[] | undefined;
}
/**
 * Additional Information about the Object.
 */
export interface AuditEventObjectDetail extends fhir.BackboneElement {
    /**
     * Name of the property.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.object.detail.type
     */
    _type?: fhir.FhirElement;
    /**
     * Property value.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.object.detail.value
     */
    _value?: fhir.FhirElement;
}
/**
 * The event may have other objects involved.
 */
export interface AuditEventObject extends fhir.BackboneElement {
    /**
     * Identifies a specific instance of the participant object. The reference should always be version specific.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Identifies a specific instance of the participant object. The reference should always be version specific.
     */
    reference?: fhir.Reference | undefined;
    /**
     * To describe the object being acted upon. In addition to queries on the subject of the action in an auditable event, it is also important to be able to query on the object type for the action.
     */
    type?: fhir.Coding | undefined;
    /**
     * For some detailed audit analysis it may be necessary to indicate a more granular type of participant, based on the application role it serves.
     */
    role?: fhir.Coding | undefined;
    /**
     * Institutional policies for privacy and security may optionally fall under different accountability rules based on data life cycle. This provides a differentiating value for those cases.
     */
    lifecycle?: fhir.Coding | undefined;
    /**
     * This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
     */
    securityLabel?: (fhir.Coding | null)[] | undefined;
    /**
     * An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.name
     */
    _name?: fhir.FhirElement;
    /**
     * Text that describes the object in more detail.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.description
     */
    _description?: fhir.FhirElement;
    /**
     * For query events it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
     */
    query?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.query
     */
    _query?: fhir.FhirElement;
    /**
     * Additional Information about the Object.
     */
    detail?: (fhir.AuditEventObjectDetail | null)[] | undefined;
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export interface AuditEvent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent" | null;
    /**
     * The event must be identified.
     */
    event: fhir.AuditEventEvent | null;
    /**
     * The event has one or more active participants.
     */
    participant: (fhir.AuditEventParticipant | null)[] | null;
    /**
     * The event is reported by one source.
     */
    source: fhir.AuditEventSource | null;
    /**
     * The event may have other objects involved.
     */
    object?: (fhir.AuditEventObject | null)[] | undefined;
}
//# sourceMappingURL=AuditEvent.d.ts.map