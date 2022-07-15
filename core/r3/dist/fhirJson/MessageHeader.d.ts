import * as fhir from '../fhirJson.js';
/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export interface MessageHeaderDestination extends fhir.BackboneElement {
    /**
     * Human-readable name for the target system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.destination.name
     */
    _name?: fhir.FhirElement;
    /**
     * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
     */
    target?: fhir.Reference | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.destination.endpoint
     */
    _endpoint?: fhir.FhirElement;
}
/**
 * The source application from which this message originated.
 */
export interface MessageHeaderSource extends fhir.BackboneElement {
    /**
     * Human-readable name for the source system.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.name
     */
    _name?: fhir.FhirElement;
    /**
     * May include configuration or other information useful in debugging.
     */
    software?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.software
     */
    _software?: fhir.FhirElement;
    /**
     * Can convey versions of multiple systems in situations where a message passes through multiple hands.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: MessageHeader.source.version
     */
    _version?: fhir.FhirElement;
    /**
     * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
     */
    contact?: fhir.ContactPoint | undefined;
    /**
     * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
     */
    endpoint: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.source.endpoint
     */
    _endpoint?: fhir.FhirElement;
}
/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export interface MessageHeaderResponse extends fhir.BackboneElement {
    /**
     * The MessageHeader.id of the message to which this message is a response.
     */
    identifier: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.identifier
     */
    _identifier?: fhir.FhirElement;
    /**
     * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
     */
    code: 'fatal-error' | 'ok' | 'transient-error' | null;
    /**
     * Extended properties for primitive element: MessageHeader.response.code
     */
    _code?: fhir.FhirElement;
    /**
     * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
     */
    details?: fhir.Reference | undefined;
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
     * Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events".
     */
    event: fhir.Coding | null;
    /**
     * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
     */
    destination?: (fhir.MessageHeaderDestination | null)[] | undefined;
    /**
     * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
     */
    receiver?: fhir.Reference | undefined;
    /**
     * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
     */
    sender?: fhir.Reference | undefined;
    /**
     * The time that the message was sent.
     */
    timestamp: string | null;
    /**
     * Extended properties for primitive element: MessageHeader.timestamp
     */
    _timestamp?: fhir.FhirElement;
    /**
     * Usually only for the request, but can be used in a response.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * Usually only for the request, but can be used in a response.
     */
    author?: fhir.Reference | undefined;
    /**
     * The source application from which this message originated.
     */
    source: fhir.MessageHeaderSource | null;
    /**
     * Usually only for the request, but can be used in a response.
     */
    responsible?: fhir.Reference | undefined;
    /**
     * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * Information about the message that this message is a response to.  Only present if this message is a response.
     */
    response?: fhir.MessageHeaderResponse | undefined;
    /**
     * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
     */
    focus?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=MessageHeader.d.ts.map