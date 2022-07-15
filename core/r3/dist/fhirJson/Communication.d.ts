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
     * A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ReferralRequest, MedicationRequest, etc.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: (fhir.Reference | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: 'aborted' | 'completed' | 'entered-in-error' | 'in-progress' | 'preparation' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because it marks the communication as a communication that did not occur.  The more attributes are populated, the more constrained the negated statement is.
     */
    notDone?: boolean | undefined;
    /**
     * Extended properties for primitive element: Communication.notDone
     */
    _notDone?: fhir.FhirElement;
    /**
     * Describes why the communication event did not occur in coded and/or textual form.
     */
    notDoneReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * The resources which were responsible for or related to producing this communication.
     */
    topic?: (fhir.Reference | null)[] | undefined;
    /**
     * The encounter within which the communication was sent.
     */
    context?: fhir.Reference | undefined;
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
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: (fhir.CommunicationPayload | null)[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=Communication.d.ts.map