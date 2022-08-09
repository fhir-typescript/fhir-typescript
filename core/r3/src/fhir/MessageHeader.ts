// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: MessageHeader

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResponseCodes,  ResponseCodeType } from '../fhirValueSets/ResponseCodes.js';
// @ts-ignore
import { ResponseVsValidation } from '../fhirValueSets/ResponseVsValidation.js';
// @ts-ignore
import { MessageEventsCodes,  MessageEventsCodeType } from '../fhirValueSets/MessageEventsCodes.js';
// @ts-ignore
import { MessageEventsVsValidation } from '../fhirValueSets/MessageEventsVsValidation.js';
// @ts-ignore
import { MessageReasonEncounterCodes,  MessageReasonEncounterCodeType } from '../fhirValueSets/MessageReasonEncounterCodes.js';
// @ts-ignore
import { MessageReasonEncounterVsValidation } from '../fhirValueSets/MessageReasonEncounterVsValidation.js';
/**
 * Valid arguments for the MessageHeaderDestination type.
 */
export interface MessageHeaderDestinationArgs extends fhir.BackboneElementArgs {
  /**
   * Human-readable name for the target system.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  target?: fhir.ReferenceArgs|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
}

/**
 * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
 */
export class MessageHeaderDestination extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeaderDestination';
  /**
   * Human-readable name for the target system.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Identifies the target end system in situations where the initial message transmission is to an intermediary system.
   */
  public target?: fhir.Reference|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: fhir.FhirUri|null;
  /**
   * Default constructor for MessageHeaderDestination - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageHeaderDestinationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['target']) { this.target = new fhir.Reference(source.target, options); }
    if (source['endpoint'] !== undefined) { this.endpoint = new fhir.FhirUri({value: source.endpoint}, options); }
    else { this.endpoint = null; }
    if (source['_endpoint']) {
      if (this.endpoint) { this.endpoint.addExtendedProperties(source._endpoint!); }
      else { this.endpoint = new fhir.FhirUri(source._endpoint as Partial<fhir.FhirUriArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageHeader.destination' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('target',exp));
    iss.push(...this.vRS('endpoint',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MessageHeaderSource type.
 */
export interface MessageHeaderSourceArgs extends fhir.BackboneElementArgs {
  /**
   * Human-readable name for the source system.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * May include configuration or other information useful in debugging.
   */
  software?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.software
   */
  _software?:fhir.FhirElementArgs;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  contact?: fhir.ContactPointArgs|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  endpoint: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
}

/**
 * The source application from which this message originated.
 */
export class MessageHeaderSource extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeaderSource';
  /**
   * Human-readable name for the source system.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * May include configuration or other information useful in debugging.
   */
  public software?: fhir.FhirString|undefined;
  /**
   * Can convey versions of multiple systems in situations where a message passes through multiple hands.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * An e-mail, phone, website or other contact point to use to resolve issues with message communications.
   */
  public contact?: fhir.ContactPoint|undefined;
  /**
   * The id may be a non-resolvable URI for systems that do not use standard network-based addresses.
   */
  public endpoint: fhir.FhirUri|null;
  /**
   * Default constructor for MessageHeaderSource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageHeaderSourceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['software'] !== undefined) { this.software = new fhir.FhirString({value: source.software}, options); }
    if (source['_software']) {
      if (this.software) { this.software.addExtendedProperties(source._software!); }
      else { this.software = new fhir.FhirString(source._software as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = new fhir.ContactPoint(source.contact, options); }
    if (source['endpoint'] !== undefined) { this.endpoint = new fhir.FhirUri({value: source.endpoint}, options); }
    else { this.endpoint = null; }
    if (source['_endpoint']) {
      if (this.endpoint) { this.endpoint.addExtendedProperties(source._endpoint!); }
      else { this.endpoint = new fhir.FhirUri(source._endpoint as Partial<fhir.FhirUriArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageHeader.source' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('software',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('contact',exp));
    iss.push(...this.vRS('endpoint',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MessageHeaderResponse type.
 */
export interface MessageHeaderResponseArgs extends fhir.BackboneElementArgs {
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  identifier: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.response.identifier
   */
  _identifier?:fhir.FhirElementArgs;
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  code: fhir.FhirCode<ResponseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.response.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  details?: fhir.ReferenceArgs|undefined;
}

/**
 * Information about the message that this message is a response to.  Only present if this message is a response.
 */
export class MessageHeaderResponse extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeaderResponse';
  /**
   * The MessageHeader.id of the message to which this message is a response.
   */
  public identifier: fhir.FhirId|null;
  /**
   * This is a generic response to the request message. Specific data for the response will be found in MessageHeader.focus.
   */
  public code: fhir.FhirCode<ResponseCodeType>|null;
  /**
   * This SHALL be contained in the bundle. If any of the issues are errors, the response code SHALL be an error.
   */
  public details?: fhir.Reference|undefined;
  /**
   * Default constructor for MessageHeaderResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageHeaderResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier'] !== undefined) { this.identifier = new fhir.FhirId({value: source.identifier}, options); }
    else { this.identifier = null; }
    if (source['_identifier']) {
      if (this.identifier) { this.identifier.addExtendedProperties(source._identifier!); }
      else { this.identifier = new fhir.FhirId(source._identifier as Partial<fhir.FhirIdArgs>, options); }
    }
    if (source['code'] !== undefined) { this.code = new fhir.FhirCode<ResponseCodeType>({value: source.code}, options); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode<ResponseCodeType>(source._code as Partial<fhir.FhirCode>, options); }
    }
    if (source['details']) { this.details = new fhir.Reference(source.details, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageHeader.response' }
    iss.push(...this.vRS('identifier',exp));
    iss.push(...this.vRSV('code',exp,'Response',ResponseVsValidation,'r'));
    iss.push(...this.vOS('details',exp));
    return iss;
  }
}
/**
 * Valid arguments for the MessageHeader type.
 */
export interface MessageHeaderArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MessageHeader"|undefined;
  /**
   * Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events".
   */
  event: fhir.CodingArgs|null;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  destination?: fhir.MessageHeaderDestinationArgs[]|undefined;
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  receiver?: fhir.ReferenceArgs|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  sender?: fhir.ReferenceArgs|undefined;
  /**
   * The time that the message was sent.
   */
  timestamp: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.timestamp
   */
  _timestamp?:fhir.FhirElementArgs;
  /**
   * Usually only for the request, but can be used in a response.
   */
  enterer?: fhir.ReferenceArgs|undefined;
  /**
   * Usually only for the request, but can be used in a response.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * The source application from which this message originated.
   */
  source: fhir.MessageHeaderSourceArgs|null;
  /**
   * Usually only for the request, but can be used in a response.
   */
  responsible?: fhir.ReferenceArgs|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  reason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: fhir.MessageHeaderResponseArgs|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  focus?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export class MessageHeader extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeader';
  /**
   * Resource Type Name
   */
  public override resourceType: "MessageHeader";
  /**
   * Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events".
   */
  public event: fhir.Coding|null;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  public destination: fhir.MessageHeaderDestination[];
  /**
   * Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
   */
  public receiver?: fhir.Reference|undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  public sender?: fhir.Reference|undefined;
  /**
   * The time that the message was sent.
   */
  public timestamp: fhir.FhirInstant|null;
  /**
   * Usually only for the request, but can be used in a response.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * Usually only for the request, but can be used in a response.
   */
  public author?: fhir.Reference|undefined;
  /**
   * The source application from which this message originated.
   */
  public source: fhir.MessageHeaderSource|null;
  /**
   * Usually only for the request, but can be used in a response.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  public response?: fhir.MessageHeaderResponse|undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  public focus: fhir.Reference[];
  /**
   * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageHeaderArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MessageHeader';
    if (source['event']) { this.event = new fhir.Coding(source.event, options); }
    else { this.event = null; }
    if (source['destination']) { this.destination = source.destination.map((x) => new fhir.MessageHeaderDestination(x, options)); }
    else { this.destination = []; }
    if (source['receiver']) { this.receiver = new fhir.Reference(source.receiver, options); }
    if (source['sender']) { this.sender = new fhir.Reference(source.sender, options); }
    if (source['timestamp'] !== undefined) { this.timestamp = new fhir.FhirInstant({value: source.timestamp}, options); }
    else { this.timestamp = null; }
    if (source['_timestamp']) {
      if (this.timestamp) { this.timestamp.addExtendedProperties(source._timestamp!); }
      else { this.timestamp = new fhir.FhirInstant(source._timestamp as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer, options); }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['source']) { this.source = new fhir.MessageHeaderSource(source.source, options); }
    else { this.source = null; }
    if (source['responsible']) { this.responsible = new fhir.Reference(source.responsible, options); }
    if (source['reason']) { this.reason = new fhir.CodeableConcept(source.reason, options); }
    if (source['response']) { this.response = new fhir.MessageHeaderResponse(source.response, options); }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.Reference(x, options)); }
    else { this.focus = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageHeader' }
    iss.push(...this.vRS('event',exp));
    iss.push(...this.vOA('destination',exp));
    iss.push(...this.vOS('receiver',exp));
    iss.push(...this.vOS('sender',exp));
    iss.push(...this.vRS('timestamp',exp));
    iss.push(...this.vOS('enterer',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vRS('source',exp));
    iss.push(...this.vOS('responsible',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOS('response',exp));
    iss.push(...this.vOA('focus',exp));
    return iss;
  }
}
