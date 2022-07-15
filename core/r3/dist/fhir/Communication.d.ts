import * as fhir from '../fhir.js';
import { EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
/**
 * Valid arguments for the CommunicationPayload type.
 */
export interface CommunicationPayloadArgs extends fhir.BackboneElementArgs {
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    content?: fhir.FhirString | fhir.Attachment | fhir.Reference | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: fhir.FhirString | string | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export declare class CommunicationPayload extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A communicated content (or for multi-part communications, one portion of the communication).
     */
    content: (fhir.FhirString | fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Communication.payload.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for CommunicationPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationPayloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Communication type.
 */
export interface CommunicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Communication" | undefined;
    /**
     * Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ReferralRequest, MedicationRequest, etc.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * Part of this action.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because it marks the communication as a communication that did not occur.  The more attributes are populated, the more constrained the negated statement is.
     */
    notDone?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Communication.notDone
     */
    _notDone?: fhir.FhirElementArgs;
    /**
     * Describes why the communication event did not occur in coded and/or textual form.
     */
    notDoneReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * The resources which were responsible for or related to producing this communication.
     */
    topic?: fhir.ReferenceArgs[] | undefined;
    /**
     * The encounter within which the communication was sent.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Communication.sent
     */
    _sent?: fhir.FhirElementArgs;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Communication.received
     */
    _received?: fhir.FhirElementArgs;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhir.CommunicationPayloadArgs[] | undefined;
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency was notified about a reportable condition.
 */
export declare class Communication extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Communication";
    /**
     * Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
     */
    identifier: fhir.Identifier[];
    /**
     * A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.
     */
    definition: fhir.Reference[];
    /**
     * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ReferralRequest, MedicationRequest, etc.
     */
    basedOn: fhir.Reference[];
    /**
     * Part of this action.
     */
    partOf: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
     */
    status: fhir.FhirCode<EventStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because it marks the communication as a communication that did not occur.  The more attributes are populated, the more constrained the negated statement is.
     */
    notDone?: fhir.FhirBoolean | undefined;
    /**
     * Describes why the communication event did not occur in coded and/or textual form.
     */
    notDoneReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication may serve multiple purposes.
     */
    category: fhir.CodeableConcept[];
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium: fhir.CodeableConcept[];
    /**
     * The patient or group that was the focus of this communication.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient: fhir.Reference[];
    /**
     * The resources which were responsible for or related to producing this communication.
     */
    topic: fhir.Reference[];
    /**
     * The encounter within which the communication was sent.
     */
    context?: fhir.Reference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: fhir.FhirDateTime | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: fhir.FhirDateTime | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be caprued using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this communication.
     */
    reasonReference: fhir.Reference[];
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload: fhir.CommunicationPayload[];
    /**
     * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for Communication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Communication.d.ts.map