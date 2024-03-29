// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: CommunicationRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { CommunicationRequestStatusCodes,  CommunicationRequestStatusCodeType } from '../fhirValueSets/CommunicationRequestStatusCodes.js';
// @ts-ignore
import { CommunicationRequestStatusVsValidation } from '../fhirValueSets/CommunicationRequestStatusVsValidation.js';
// @ts-ignore
import { DiagnosticOrderPriorityCodes,  DiagnosticOrderPriorityCodeType } from '../fhirValueSets/DiagnosticOrderPriorityCodes.js';
// @ts-ignore
import { DiagnosticOrderPriorityVsValidation } from '../fhirValueSets/DiagnosticOrderPriorityVsValidation.js';
/**
 * Valid arguments for the CommunicationRequestPayload type.
 */
export interface CommunicationRequestPayloadArgs extends fhir.BackboneElementArgs {
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  content?: fhir.FhirString|fhir.Attachment|fhir.Reference|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: fhir.FhirString|string|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Text, attachment(s), or resource(s) to be communicated to the recipient.
 */
export class CommunicationRequestPayload extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationRequestPayload';
  /**
   * The communicated content (or for multi-part communications, one portion of the communication).
   */
  public content: (fhir.FhirString|fhir.Attachment|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element CommunicationRequest.payload.content[x]
   */
  protected static readonly _fts_contentIsChoice:true = true;
  /**
   * Default constructor for CommunicationRequestPayload - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationRequestPayloadArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['content']) { this.content = source.content; }
    else if (source['contentString'] !== undefined) { this.content = new fhir.FhirString({value: source.contentString}, options); }
    else if (source['contentAttachment']) { this.content = new fhir.Attachment(source.contentAttachment, options); }
    else if (source['contentReference']) { this.content = new fhir.Reference(source.contentReference, options); }
    else { this.content = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CommunicationRequest.payload' }
    iss.push(...this.vRS('content',exp));
    return iss;
  }
}
/**
 * Valid arguments for the CommunicationRequest type.
 */
export interface CommunicationRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CommunicationRequest"|undefined;
  /**
   * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The type of message to be sent such as alert, notification, reminder, instruction, etc.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: fhir.ReferenceArgs|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is the intended target of the communication.
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: fhir.CommunicationRequestPayloadArgs[]|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The responsible person who authorizes this order, e.g. physician. This may be different than the author of the order statement, e.g. clerk, who may have entered the statement into the order entry application.
   */
  requester?: fhir.ReferenceArgs|undefined;
  /**
   * The status of the proposal or order.
   */
  status?: fhir.FhirCode<CommunicationRequestStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CommunicationRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The encounter within which the communication request was created.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The time when this communication is to occur.
   */
  scheduled?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The time when this communication is to occur.
   */
  scheduledDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The time when this communication is to occur.
   */
  scheduledPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The reason or justification for the communication request.
   */
  reason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The time when the request was made.
   */
  requestedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CommunicationRequest.requestedOn
   */
  _requestedOn?:fhir.FhirElementArgs;
  /**
   * The patient who is the focus of this communication request.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
}

/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export class CommunicationRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "CommunicationRequest";
  /**
   * A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
   */
  public identifier: fhir.Identifier[];
  /**
   * The type of message to be sent such as alert, notification, reminder, instruction, etc.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is the intended target of the communication.
   */
  public recipient: fhir.Reference[];
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  public payload: fhir.CommunicationRequestPayload[];
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  public medium: fhir.CodeableConcept[];
  /**
   * The responsible person who authorizes this order, e.g. physician. This may be different than the author of the order statement, e.g. clerk, who may have entered the statement into the order entry application.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * The status of the proposal or order.
   */
  public status?: fhir.FhirCode<CommunicationRequestStatusCodeType>|undefined;
  /**
   * The encounter within which the communication request was created.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The time when this communication is to occur.
   */
  public scheduled?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CommunicationRequest.scheduled[x]
   */
  protected static readonly _fts_scheduledIsChoice:true = true;
  /**
   * The reason or justification for the communication request.
   */
  public reason: fhir.CodeableConcept[];
  /**
   * The time when the request was made.
   */
  public requestedOn?: fhir.FhirDateTime|undefined;
  /**
   * The patient who is the focus of this communication request.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for CommunicationRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CommunicationRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category, options); }
    if (source['sender']) { this.sender = new fhir.Reference(source.sender, options); }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x, options)); }
    else { this.recipient = []; }
    if (source['payload']) { this.payload = source.payload.map((x) => new fhir.CommunicationRequestPayload(x, options)); }
    else { this.payload = []; }
    if (source['medium']) { this.medium = source.medium.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.medium = []; }
    if (source['requester']) { this.requester = new fhir.Reference(source.requester, options); }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<CommunicationRequestStatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<CommunicationRequestStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter, options); }
    if (source['scheduled']) { this.scheduled = source.scheduled; }
    else if (source['scheduledDateTime'] !== undefined) { this.scheduled = new fhir.FhirDateTime({value: source.scheduledDateTime}, options); }
    else if (source['scheduledPeriod']) { this.scheduled = new fhir.Period(source.scheduledPeriod, options); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.reason = []; }
    if (source['requestedOn'] !== undefined) { this.requestedOn = new fhir.FhirDateTime({value: source.requestedOn}, options); }
    if (source['_requestedOn']) {
      if (this.requestedOn) { this.requestedOn.addExtendedProperties(source._requestedOn!); }
      else { this.requestedOn = new fhir.FhirDateTime(source._requestedOn as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject, options); }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'CommunicationRequest' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOS('sender',exp));
    iss.push(...this.vOA('recipient',exp));
    iss.push(...this.vOA('payload',exp));
    iss.push(...this.vOA('medium',exp));
    iss.push(...this.vOS('requester',exp));
    iss.push(...this.vOSV('status',exp,'CommunicationRequestStatus',CommunicationRequestStatusVsValidation,'r'));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('scheduled',exp));
    iss.push(...this.vOA('reason',exp));
    iss.push(...this.vOS('requestedOn',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('priority',exp));
    return iss;
  }
}
