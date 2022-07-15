import * as fhir from '../fhir.js';
/**
 * Valid arguments for the AuditEventEvent type.
 */
export interface AuditEventEventArgs extends fhir.BackboneElementArgs {
    /**
     * This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
     */
    type: fhir.CodingArgs | null;
    /**
     * This field enables queries of messages by implementation-defined event categories.
     */
    subtype?: fhir.CodingArgs[] | undefined;
    /**
     * This broadly indicates what kind of action was done on the Participant Object.
     */
    action?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.action
     */
    _action?: fhir.FhirElementArgs;
    /**
     * This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
     */
    dateTime: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.dateTime
     */
    _dateTime?: fhir.FhirElementArgs;
    /**
     * Indicates whether the event succeeded or failed.
     */
    outcome?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.outcome
     */
    _outcome?: fhir.FhirElementArgs;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.event.outcomeDesc
     */
    _outcomeDesc?: fhir.FhirElementArgs;
    /**
     * The purposeOfUse (reason) that was used during the event being recorded.
     */
    purposeOfEvent?: fhir.CodingArgs[] | undefined;
}
/**
 * The event must be identified.
 */
export declare class AuditEventEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
     */
    type: fhir.Coding | null;
    /**
     * This field enables queries of messages by implementation-defined event categories.
     */
    subtype: fhir.Coding[];
    /**
     * This broadly indicates what kind of action was done on the Participant Object.
     */
    action?: fhir.FhirCode | undefined;
    /**
     * This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
     */
    dateTime: fhir.FhirInstant | null;
    /**
     * Indicates whether the event succeeded or failed.
     */
    outcome?: fhir.FhirCode | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | undefined;
    /**
     * The purposeOfUse (reason) that was used during the event being recorded.
     */
    purposeOfEvent: fhir.Coding[];
    /**
     * Default constructor for AuditEventEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventParticipantNetwork type.
 */
export interface AuditEventParticipantNetworkArgs extends fhir.BackboneElementArgs {
    /**
     * This datum identifies the user's network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point's data access across all servers.
     */
    address?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.network.address
     */
    _address?: fhir.FhirElementArgs;
    /**
     * This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point's type.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.network.type
     */
    _type?: fhir.FhirElementArgs;
}
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export declare class AuditEventParticipantNetwork extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This datum identifies the user's network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point's data access across all servers.
     */
    address?: fhir.FhirString | undefined;
    /**
     * This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point's type.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Default constructor for AuditEventParticipantNetwork - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventParticipantNetworkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventParticipant type.
 */
export interface AuditEventParticipantArgs extends fhir.BackboneElementArgs {
    /**
     * This value ties an audited event to a user's role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This field ties an audit event to a specific resource.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * This field ties an audit event to a specific user.
     */
    userId?: fhir.IdentifierArgs | undefined;
    /**
     * In some situations a human user may authenticate with one identity but, to access a specific application system, may use a synonymous identify. For example, some "single sign on" implementations will do this. The alternative identifier would then be the original identify  used for authentication, and the User ID is the one known to and used by the application.
     */
    altId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.altId
     */
    _altId?: fhir.FhirElementArgs;
    /**
     * The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
     */
    requestor: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.requestor
     */
    _requestor?: fhir.FhirElementArgs;
    /**
     * Where the event occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * This value is used retrospectively to determine the authorization policies.
     */
    policy?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.participant.policy
     */
    _policy?: (fhir.FhirElementArgs | null)[];
    /**
     * Usually, this is used instead of specifying a network address. This field is not used for Media Id (i.e. the serial number of a CD).
     */
    media?: fhir.CodingArgs | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventParticipantNetworkArgs | undefined;
    /**
     * The reason (purpose of use), specific to this participant, that was used during the event being recorded.
     */
    purposeOfUse?: fhir.CodingArgs[] | undefined;
}
/**
 * The event has one or more active participants.
 */
export declare class AuditEventParticipant extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This value ties an audited event to a user's role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
     */
    role: fhir.CodeableConcept[];
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
    altId?: fhir.FhirString | undefined;
    /**
     * The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
     */
    requestor: fhir.FhirBoolean | null;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * This value is used retrospectively to determine the authorization policies.
     */
    policy: fhir.FhirUri[];
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
    purposeOfUse: fhir.Coding[];
    /**
     * Default constructor for AuditEventParticipant - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventParticipantArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventSource type.
 */
export interface AuditEventSourceArgs extends fhir.BackboneElementArgs {
    /**
     * This value differentiates among the sites in a multi-site enterprise health information system.
     */
    site?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.source.site
     */
    _site?: fhir.FhirElementArgs;
    /**
     * This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
     */
    identifier: fhir.IdentifierArgs | null;
    /**
     * This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
     */
    type?: fhir.CodingArgs[] | undefined;
}
/**
 * The event is reported by one source.
 */
export declare class AuditEventSource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This value differentiates among the sites in a multi-site enterprise health information system.
     */
    site?: fhir.FhirString | undefined;
    /**
     * This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
     */
    identifier: fhir.Identifier | null;
    /**
     * This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
     */
    type: fhir.Coding[];
    /**
     * Default constructor for AuditEventSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventObjectDetail type.
 */
export interface AuditEventObjectDetailArgs extends fhir.BackboneElementArgs {
    /**
     * Name of the property.
     */
    type: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.detail.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Property value.
     */
    value: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.detail.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Additional Information about the Object.
 */
export declare class AuditEventObjectDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of the property.
     */
    type: fhir.FhirString | null;
    /**
     * Property value.
     */
    value: fhir.FhirBase64Binary | null;
    /**
     * Default constructor for AuditEventObjectDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventObjectDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventObject type.
 */
export interface AuditEventObjectArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies a specific instance of the participant object. The reference should always be version specific.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Identifies a specific instance of the participant object. The reference should always be version specific.
     */
    reference?: fhir.ReferenceArgs | undefined;
    /**
     * To describe the object being acted upon. In addition to queries on the subject of the action in an auditable event, it is also important to be able to query on the object type for the action.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * For some detailed audit analysis it may be necessary to indicate a more granular type of participant, based on the application role it serves.
     */
    role?: fhir.CodingArgs | undefined;
    /**
     * Institutional policies for privacy and security may optionally fall under different accountability rules based on data life cycle. This provides a differentiating value for those cases.
     */
    lifecycle?: fhir.CodingArgs | undefined;
    /**
     * This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Text that describes the object in more detail.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * For query events it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
     */
    query?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.object.query
     */
    _query?: fhir.FhirElementArgs;
    /**
     * Additional Information about the Object.
     */
    detail?: fhir.AuditEventObjectDetailArgs[] | undefined;
}
/**
 * The event may have other objects involved.
 */
export declare class AuditEventObject extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    securityLabel: fhir.Coding[];
    /**
     * An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Text that describes the object in more detail.
     */
    description?: fhir.FhirString | undefined;
    /**
     * For query events it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
     */
    query?: fhir.FhirBase64Binary | undefined;
    /**
     * Additional Information about the Object.
     */
    detail: fhir.AuditEventObjectDetail[];
    /**
     * Default constructor for AuditEventObject - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventObjectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEvent type.
 */
export interface AuditEventArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent" | undefined;
    /**
     * The event must be identified.
     */
    event: fhir.AuditEventEventArgs | null;
    /**
     * The event has one or more active participants.
     */
    participant: fhir.AuditEventParticipantArgs[] | null;
    /**
     * The event is reported by one source.
     */
    source: fhir.AuditEventSourceArgs | null;
    /**
     * The event may have other objects involved.
     */
    object?: fhir.AuditEventObjectArgs[] | undefined;
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export declare class AuditEvent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent";
    /**
     * The event must be identified.
     */
    event: fhir.AuditEventEvent | null;
    /**
     * The event has one or more active participants.
     */
    participant: fhir.AuditEventParticipant[];
    /**
     * The event is reported by one source.
     */
    source: fhir.AuditEventSource | null;
    /**
     * The event may have other objects involved.
     */
    object: fhir.AuditEventObject[];
    /**
     * Default constructor for AuditEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=AuditEvent.d.ts.map