import * as fhir from '../fhirJson.js';
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export interface AuditEventAgentNetwork extends fhir.BackboneElement {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.address
     */
    _address?: fhir.FhirElement;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: '1' | '2' | '3' | '4' | '5' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.network.type
     */
    _type?: fhir.FhirElement;
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export interface AuditEventAgent extends fhir.BackboneElement {
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Direct reference to a resource that identifies the agent.
     */
    reference?: fhir.Reference | undefined;
    /**
     * A unique value within the Audit Source ID. For node-based authentication -- where only the system hardware or process, but not a human user, is identified -- User ID would be the node name.
     */
    userId?: fhir.Identifier | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.altId
     */
    _altId?: fhir.FhirElement;
    /**
     * Human-meaningful name for the agent.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.name
     */
    _name?: fhir.FhirElement;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: boolean | null;
    /**
     * Extended properties for primitive element: AuditEvent.agent.requestor
     */
    _requestor?: fhir.FhirElement;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.agent.policy
     */
    _policy?: (fhir.FhirElement | null)[];
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.Coding | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventAgentNetwork | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export interface AuditEventSource extends fhir.BackboneElement {
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.source.site
     */
    _site?: fhir.FhirElement;
    /**
     * Identifier of the source where the event was detected.
     */
    identifier: fhir.Identifier | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: (fhir.Coding | null)[] | undefined;
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export interface AuditEventEntityDetail extends fhir.BackboneElement {
    /**
     * The type of extra detail provided in the value.
     */
    type: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.type
     */
    _type?: fhir.FhirElement;
    /**
     * The value is base64 encoded to enable various encodings or binary content.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.entity.detail.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export interface AuditEventEntity extends fhir.BackboneElement {
    /**
     * Identifier detail depends on entity type.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    reference?: fhir.Reference | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.Coding | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.Coding | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.Coding | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: (fhir.Coding | null)[] | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.name
     */
    _name?: fhir.FhirElement;
    /**
     * Text that describes the entity in more detail.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.description
     */
    _description?: fhir.FhirElement;
    /**
     * The query parameters for a query-type entities.
     */
    query?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.entity.query
     */
    _query?: fhir.FhirElement;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: (fhir.AuditEventEntityDetail | null)[] | undefined;
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
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.Coding | null;
    /**
     * Identifier for the category of event.
     */
    subtype?: (fhir.Coding | null)[] | undefined;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: 'C' | 'D' | 'E' | 'R' | 'U' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.action
     */
    _action?: fhir.FhirElement;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: string | null;
    /**
     * Extended properties for primitive element: AuditEvent.recorded
     */
    _recorded?: fhir.FhirElement;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: '0' | '12' | '4' | '8' | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: string | undefined;
    /**
     * Extended properties for primitive element: AuditEvent.outcomeDesc
     */
    _outcomeDesc?: fhir.FhirElement;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: (fhir.AuditEventAgent | null)[] | null;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.AuditEventSource | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: (fhir.AuditEventEntity | null)[] | undefined;
}
//# sourceMappingURL=AuditEvent.d.ts.map