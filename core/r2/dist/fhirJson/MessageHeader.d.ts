import * as fhir from '../fhirJson.js';
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export interface MessageHeaderResponse extends fhir.BackboneElement {
    /**
     * Allows receiver to know what message is being responded to.
     */
    identifier: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.FhirElement;
    /**
     * Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
     */
    code: 'fatal-error' | 'ok' | 'transient-error' | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.FhirElement;
    /**
     * Allows the sender of the message to determine what the specific issues are.
     */
    details?: fhir.Reference | undefined;
}
/**
 * Allows replies, supports audit.
 */
export interface MessageHeaderSource extends fhir.BackboneElement {
    /**
     * May be used to support audit.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.FhirElement;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    software?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.FhirElement;
    /**
     * Supports audit and possibly interface engine behavior.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.FhirElement;
    /**
     * Allows escalation of technical issues.
     */
    contact?: fhir.ContactPoint | undefined;
    /**
     * Identifies where to send responses, may influence security permissions.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.FhirElement;
}
/**
 * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
 */
export interface MessageHeaderDestination extends fhir.BackboneElement {
    /**
     * May be used for routing of response and/or to support audit.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.FhirElement;
    /**
     * Supports multi-hop routing.
     */
    target?: fhir.Reference | undefined;
    /**
     * Identifies where to route the message.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.FhirElement;
}
/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export interface MessageHeader extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MessageHeader" | null;
    /**
     * Allows limited detection of out-of-order and delayed transmission.  Also supports audit.
     */
    timestamp: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.timestamp
     */
    _timestamp?: fhir.FhirElement;
    /**
     * Drives the behavior associated with this message.
     */
    event: fhir.Coding | null;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponse | undefined;
    /**
     * Allows replies, supports audit.
     */
    source: fhir.MessageHeaderSource | null;
    /**
     * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
     */
    destination?: (fhir.MessageHeaderDestination | null)[] | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    author?: fhir.Reference | undefined;
    /**
     * Allows routing beyond just the application level.
     */
    receiver?: fhir.Reference | undefined;
    /**
     * Need to know for audit/traceback requirements and possibly for authorization.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
     */
    data?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=MessageHeader.d.ts.map