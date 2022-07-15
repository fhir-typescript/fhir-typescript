import * as fhir from '../fhir.js';
import { CommunicationStatusCodeType } from '../fhirValueSets/CommunicationStatusCodes.js';
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
     * The type of message conveyed such as alert, notification, reminder, instruction, etc.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload?: fhir.CommunicationPayloadArgs[] | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The status of the transmission.
     */
    status?: fhir.FhirCode<CommunicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Communication.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The encounter within which the communication was sent.
     */
    encounter?: fhir.ReferenceArgs | undefined;
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
     * The reason or justification for the communication.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The patient who was the focus of this communication.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The communication request that was responsible for producing this communication.
     */
    requestDetail?: fhir.ReferenceArgs | undefined;
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
    recipient: fhir.Reference[];
    /**
     * Text, attachment(s), or resource(s) that was communicated to the recipient.
     */
    payload: fhir.CommunicationPayload[];
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium: fhir.CodeableConcept[];
    /**
     * The status of the transmission.
     */
    status?: fhir.FhirCode<CommunicationStatusCodeType> | undefined;
    /**
     * The encounter within which the communication was sent.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The time when this communication was sent.
     */
    sent?: fhir.FhirDateTime | undefined;
    /**
     * The time when this communication arrived at the destination.
     */
    received?: fhir.FhirDateTime | undefined;
    /**
     * The reason or justification for the communication.
     */
    reason: fhir.CodeableConcept[];
    /**
     * The patient who was the focus of this communication.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The communication request that was responsible for producing this communication.
     */
    requestDetail?: fhir.Reference | undefined;
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