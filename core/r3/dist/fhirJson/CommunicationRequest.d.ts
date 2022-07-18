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
 * The individual who initiated the request and has responsibility for its activation.
 */
export interface CommunicationRequestRequester extends fhir.BackboneElement {
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export interface CommunicationRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest" | null;
    /**
     * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: (fhir.Reference | null)[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status: 'active' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: CommunicationRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: CommunicationRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * The resources which were related to producing this communication request.
     */
    topic?: (fhir.Reference | null)[] | undefined;
    /**
     * The encounter or episode of care within which the communication request was created.
     */
    context?: fhir.Reference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: (fhir.CommunicationRequestPayload | null)[] | undefined;
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
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.CommunicationRequestRequester | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=CommunicationRequest.d.ts.map