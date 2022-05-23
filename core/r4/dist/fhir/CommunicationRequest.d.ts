import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the CommunicationRequestPayload type.
 */
export interface CommunicationRequestPayloadArgs extends fhir.BackboneElementArgs {
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    content?: fhir.FhirString | fhir.Attachment | fhir.Reference | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentString?: fhir.FhirString | string | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    contentReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export declare class CommunicationRequestPayload extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The communicated content (or for multi-part communications, one portion of the communication).
     */
    content: (fhir.FhirString | fhir.Attachment | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element CommunicationRequest.payload.content[x]
     */
    protected static readonly _fts_contentIsChoice: true;
    /**
     * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationRequestPayloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CommunicationRequest type.
 */
export interface CommunicationRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest" | undefined;
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The status of the proposal or order.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about?: fhir.ReferenceArgs[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload?: fhir.CommunicationRequestPayloadArgs[] | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The time when this communication is to occur.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.ReferenceArgs | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export declare class CommunicationRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CommunicationRequest";
    /**
     * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    identifier: fhir.Identifier[];
    /**
     * A plan or proposal that is fulfilled in whole or in part by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * The status of the proposal or order.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
     */
    statusReason?: fhir.CodeableConcept | undefined;
    /**
     * There may be multiple axes of categorization and one communication request may serve multiple purposes.
     */
    category: fhir.CodeableConcept[];
    /**
     * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * The attributes provided with the request qualify what is not to be done.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * A channel that was used for this communication (e.g. email, fax).
     */
    medium: fhir.CodeableConcept[];
    /**
     * The patient or group that is the focus of this communication request.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
     */
    about: fhir.Reference[];
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Text, attachment(s), or resource(s) to be communicated to the recipient.
     */
    payload: fhir.CommunicationRequestPayload[];
    /**
     * The time when this communication is to occur.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element CommunicationRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The device, individual, or organization who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.Reference | undefined;
    /**
     * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
     */
    recipient: fhir.Reference[];
    /**
     * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
     */
    sender?: fhir.Reference | undefined;
    /**
     * Textual reasons can be captured using reasonCode.text.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference: fhir.Reference[];
    /**
     * Comments made about the request by the requester, sender, recipient, subject or other participants.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CommunicationRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CommunicationRequest.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Completed: "completed";
        readonly Draft: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly OnHold: "on-hold";
        readonly Revoked: "revoked";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for priority (CommunicationRequest.priority)
     */
    static get priorityRequiredCodes(): {
        readonly ASAP: "asap";
        readonly Routine: "routine";
        readonly STAT: "stat";
        readonly Urgent: "urgent";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=CommunicationRequest.d.ts.map