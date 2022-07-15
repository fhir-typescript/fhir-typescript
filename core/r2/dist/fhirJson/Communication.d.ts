import * as fhir from '../fhirJson.js';
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export interface CommunicationPayload extends fhir.BackboneElement {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.payload.content[x]
     */
    _contentString?: fhir.FhirElement;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.Attachment | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.Reference | undefined;
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.
 */
export interface Communication extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Communication" | null;
    /**
     * Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The type of message conveyed such as alert, notification, reminder, instruction, etc.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: (fhir.CommunicationPayload | null)[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The status of the transmission.
     */
    status?: 'completed' | 'failed' | 'in-progress' | 'rejected' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.FhirElement;
    /**
     * The encounter within which the communication was sent.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.sent
     */
    _sent?: fhir.FhirElement;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: string | undefined;
    /**
     * Extended properties for primitive element: Communication.received
     */
    _received?: fhir.FhirElement;
    /**
     * The reason or justification for the communication.
     */
    reason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The patient who was the focus of this communication.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The communication request that was responsible for producing this communication.
     */
    requestDetail?: fhir.Reference | undefined;
}
//# sourceMappingURL=Communication.d.ts.map