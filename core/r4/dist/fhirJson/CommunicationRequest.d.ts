import * as fhir from '../fhirJson.js';
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export interface CommunicationRequestPayload extends fhir.BackboneElement {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.payload.content[x]
     */
    _contentString?: fhir.FhirElement;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export interface CommunicationRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.Reference[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The status of the proposal or order.
     */
    status: 'active' | 'completed' | 'draft' | 'entered-in-error' | 'on-hold' | 'revoked' | 'unknown' | null;
    /**
     * Extended properties for primitive element: CommunicationRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConcept[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about?: fhir.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhir.CommunicationRequestPayload[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhir.Reference[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
}
//# sourceMappingURL=CommunicationRequest.d.ts.map