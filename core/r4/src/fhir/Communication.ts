// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Communication

import * as fhir from '../fhir.js';

// @ts-ignore
import { EventStatusCodings, EventStatusCodingType,} from '../fhirValueSets/EventStatusCodings.js';
// @ts-ignore
import { EventStatusCodes,  EventStatusCodeType } from '../fhirValueSets/EventStatusCodes.js';
// @ts-ignore
import { CommunicationNotDoneReasonCodings, CommunicationNotDoneReasonCodingType,} from '../fhirValueSets/CommunicationNotDoneReasonCodings.js';
// @ts-ignore
import { CommunicationNotDoneReasonCodes,  CommunicationNotDoneReasonCodeType } from '../fhirValueSets/CommunicationNotDoneReasonCodes.js';
// @ts-ignore
import { CommunicationCategoryCodings, CommunicationCategoryCodingType,} from '../fhirValueSets/CommunicationCategoryCodings.js';
// @ts-ignore
import { CommunicationCategoryCodes,  CommunicationCategoryCodeType } from '../fhirValueSets/CommunicationCategoryCodes.js';
// @ts-ignore
import { RequestPriorityCodings, RequestPriorityCodingType,} from '../fhirValueSets/RequestPriorityCodings.js';
// @ts-ignore
import { RequestPriorityCodes,  RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
// @ts-ignore
import { V3ParticipationModeCodings, V3ParticipationModeCodingType,} from '../fhirValueSets/V3ParticipationModeCodings.js';
// @ts-ignore
import { V3ParticipationModeCodes,  V3ParticipationModeCodeType } from '../fhirValueSets/V3ParticipationModeCodes.js';
// @ts-ignore
import { CommunicationTopicCodings, CommunicationTopicCodingType,} from '../fhirValueSets/CommunicationTopicCodings.js';
// @ts-ignore
import { CommunicationTopicCodes,  CommunicationTopicCodeType } from '../fhirValueSets/CommunicationTopicCodes.js';
// @ts-ignore
import { ClinicalFindingsCodings, ClinicalFindingsCodingType,} from '../fhirValueSets/ClinicalFindingsCodings.js';
// @ts-ignore
import { ClinicalFindingsCodes,  ClinicalFindingsCodeType } from '../fhirValueSets/ClinicalFindingsCodes.js';
/**
 * Valid arguments for the CommunicationPayload type.
 */
export interface CommunicationPayloadArgs extends fhir.BackboneElementArgs {
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  content?: fhir.FhirString|fhir.Attachment|fhir.Reference|undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentString?: fhir.FhirString|string|undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  contentReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Text, attachment(s), or resource(s) that was communicated to the recipient.
 */
export class CommunicationPayload extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CommunicationPayload';
  /**
   * A communicated content (or for multi-part communications, one portion of the communication).
   */
  public content: (fhir.FhirString|fhir.Attachment|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element Communication.payload.content[x]
   */
  protected static readonly _fts_contentIsChoice:true = true;
  /**
   * Default constructor for CommunicationPayload - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationPayloadArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['content']) { this.content = source.content; }
    else if (source['contentString']) { this.content = new fhir.FhirString({value: source.contentString}); }
    else if (source['contentAttachment']) { this.content = new fhir.Attachment(source.contentAttachment); }
    else if (source['contentReference']) { this.content = new fhir.Reference(source.contentReference); }
    else { this.content = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['content']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property content: fhir: Communication.payload.content[x]:' });
    }
    return issues;
  }
}
/**
 * Valid arguments for the Communication type.
 */
export interface CommunicationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Communication"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Communication.instantiatesCanonical
   */
  _instantiatesCanonical?:(fhir.FhirElementArgs|null)[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Communication.instantiatesUri
   */
  _instantiatesUri?:(fhir.FhirElementArgs|null)[];
  /**
   * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * Part of this action.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
   */
  status: fhir.FhirCode<EventStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Communication.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * There may be multiple axes of categorization and one communication may serve multiple purposes.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
   */
  priority?: fhir.FhirCode<RequestPriorityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Communication.priority
   */
  _priority?:fhir.FhirElementArgs;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * Communication.topic.text can be used without any codings.
   */
  topic?: fhir.CodeableConceptArgs|undefined;
  /**
   * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
   */
  about?: fhir.ReferenceArgs[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The time when this communication was sent.
   */
  sent?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Communication.sent
   */
  _sent?:fhir.FhirElementArgs;
  /**
   * The time when this communication arrived at the destination.
   */
  received?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Communication.received
   */
  _received?:fhir.FhirElementArgs;
  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
   */
  recipient?: fhir.ReferenceArgs[]|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
   */
  sender?: fhir.ReferenceArgs|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this communication.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  payload?: fhir.CommunicationPayloadArgs[]|undefined;
  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export class Communication extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Communication';
  /**
   * Resource Type Name
   */
  public override resourceType: "Communication";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  public instantiatesCanonical: fhir.FhirCanonical[];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri: fhir.FhirUri[];
  /**
   * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
   */
  public basedOn: fhir.Reference[];
  /**
   * Part of this action.
   */
  public partOf: fhir.Reference[];
  /**
   * Prior communication that this communication is in response to.
   */
  public inResponseTo: fhir.Reference[];
  /**
   * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
   */
  public status: fhir.FhirCode<EventStatusCodeType>|null;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * There may be multiple axes of categorization and one communication may serve multiple purposes.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
   */
  public priority?: fhir.FhirCode<RequestPriorityCodeType>|undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  public medium: fhir.CodeableConcept[];
  /**
   * The patient or group that was the focus of this communication.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Communication.topic.text can be used without any codings.
   */
  public topic?: fhir.CodeableConcept|undefined;
  /**
   * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
   */
  public about: fhir.Reference[];
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The time when this communication was sent.
   */
  public sent?: fhir.FhirDateTime|undefined;
  /**
   * The time when this communication arrived at the destination.
   */
  public received?: fhir.FhirDateTime|undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
   */
  public recipient: fhir.Reference[];
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Indicates another resource whose existence justifies this communication.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  public payload: fhir.CommunicationPayload[];
  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for Communication - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CommunicationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Communication';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['instantiatesCanonical']) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.instantiatesCanonical = []; }
    if (source['_instantiatesCanonical']) {
      source._instantiatesCanonical.forEach((x,i) => {
        if (this.instantiatesCanonical.length >= i) { if (x) { this.instantiatesCanonical[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesCanonical.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['instantiatesUri']) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x})); }
    else { this.instantiatesUri = []; }
    if (source['_instantiatesUri']) {
      source._instantiatesUri.forEach((x,i) => {
        if (this.instantiatesUri.length >= i) { if (x) { this.instantiatesUri[i].addExtendedProperties(x); } }
        else { if (x) { this.instantiatesUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['inResponseTo']) { this.inResponseTo = source.inResponseTo.map((x) => new fhir.Reference(x)); }
    else { this.inResponseTo = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EventStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EventStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['priority']) { this.priority = new fhir.FhirCode<RequestPriorityCodeType>({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirCode<RequestPriorityCodeType>(source._priority as Partial<fhir.FhirCode>); }
    }
    if (source['medium']) { this.medium = source.medium.map((x) => new fhir.CodeableConcept(x)); }
    else { this.medium = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['topic']) { this.topic = new fhir.CodeableConcept(source.topic); }
    if (source['about']) { this.about = source.about.map((x) => new fhir.Reference(x)); }
    else { this.about = []; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['sent']) { this.sent = new fhir.FhirDateTime({value: source.sent}); }
    if (source['_sent']) {
      if (this.sent) { this.sent.addExtendedProperties(source._sent!); }
      else { this.sent = new fhir.FhirDateTime(source._sent as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['received']) { this.received = new fhir.FhirDateTime({value: source.received}); }
    if (source['_received']) {
      if (this.received) { this.received.addExtendedProperties(source._received!); }
      else { this.received = new fhir.FhirDateTime(source._received as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['recipient']) { this.recipient = source.recipient.map((x) => new fhir.Reference(x)); }
    else { this.recipient = []; }
    if (source['sender']) { this.sender = new fhir.Reference(source.sender); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['payload']) { this.payload = source.payload.map((x) => new fhir.CommunicationPayload(x)); }
    else { this.payload = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for status (Communication.status)
   */
  public static get statusRequiredCodes() {
    return EventStatusCodes;
  }
  /**
   * Required-bound Value Set for priority (Communication.priority)
   */
  public static get priorityRequiredCodes() {
    return RequestPriorityCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Communication" fhir: Communication.resourceType:"Communication"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["instantiatesCanonical"]) { this.instantiatesCanonical.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["instantiatesUri"]) { this.instantiatesUri.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["inResponseTo"]) { this.inResponseTo.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<EventStatusCodeType> fhir: Communication.status:code' });
    }
    if (this['status'] && (!Object.values(EventStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<EventStatusCodeType> fhir: Communication.status:code Required binding to: EventStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["statusReason"]) { issues.push(...this.statusReason.doModelValidation()); }
    if (this["category"]) { this.category.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this['priority'] && (!Object.values(RequestPriorityCodes).includes(this.priority as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property priority?:fhir.FhirCode<RequestPriorityCodeType> fhir: Communication.priority:code Required binding to: RequestPriority' });
    }
    if (this["priority"]) { issues.push(...this.priority.doModelValidation()); }
    if (this["medium"]) { this.medium.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation()); }
    if (this["topic"]) { issues.push(...this.topic.doModelValidation()); }
    if (this["about"]) { this.about.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation()); }
    if (this["sent"]) { issues.push(...this.sent.doModelValidation()); }
    if (this["received"]) { issues.push(...this.received.doModelValidation()); }
    if (this["recipient"]) { this.recipient.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["sender"]) { issues.push(...this.sender.doModelValidation()); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["payload"]) { this.payload.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
