// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
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
/**
 * Valid arguments for the MessageHeaderResponse type.
 */
export interface MessageHeaderResponseArgs extends fhir.BackboneElementArgs {
  /**
   * Allows receiver to know what message is being responded to.
   */
  identifier: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.response.identifier
   */
  _identifier?:fhir.FhirElementArgs;
  /**
   * Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
   */
  code: fhir.FhirCode<ResponseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.response.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * Allows the sender of the message to determine what the specific issues are.
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
   * Allows receiver to know what message is being responded to.
   */
  public identifier: fhir.FhirId|null;
  /**
   * Allows the sender of the acknowledge message to know if the request was successful or if action is needed.
   */
  public code: fhir.FhirCode<ResponseCodeType>|null;
  /**
   * Allows the sender of the message to determine what the specific issues are.
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
 * Valid arguments for the MessageHeaderSource type.
 */
export interface MessageHeaderSourceArgs extends fhir.BackboneElementArgs {
  /**
   * May be used to support audit.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Supports audit and possibly interface engine behavior.
   */
  software?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.software
   */
  _software?:fhir.FhirElementArgs;
  /**
   * Supports audit and possibly interface engine behavior.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * Allows escalation of technical issues.
   */
  contact?: fhir.ContactPointArgs|undefined;
  /**
   * Identifies where to send responses, may influence security permissions.
   */
  endpoint: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.source.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
}

/**
 * Allows replies, supports audit.
 */
export class MessageHeaderSource extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeaderSource';
  /**
   * May be used to support audit.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Supports audit and possibly interface engine behavior.
   */
  public software?: fhir.FhirString|undefined;
  /**
   * Supports audit and possibly interface engine behavior.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * Allows escalation of technical issues.
   */
  public contact?: fhir.ContactPoint|undefined;
  /**
   * Identifies where to send responses, may influence security permissions.
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
 * Valid arguments for the MessageHeaderDestination type.
 */
export interface MessageHeaderDestinationArgs extends fhir.BackboneElementArgs {
  /**
   * May be used for routing of response and/or to support audit.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Supports multi-hop routing.
   */
  target?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies where to route the message.
   */
  endpoint: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.destination.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
}

/**
 * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
 */
export class MessageHeaderDestination extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'MessageHeaderDestination';
  /**
   * May be used for routing of response and/or to support audit.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Supports multi-hop routing.
   */
  public target?: fhir.Reference|undefined;
  /**
   * Identifies where to route the message.
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
 * Valid arguments for the MessageHeader type.
 */
export interface MessageHeaderArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "MessageHeader"|undefined;
  /**
   * Allows limited detection of out-of-order and delayed transmission.  Also supports audit.
   */
  timestamp: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: MessageHeader.timestamp
   */
  _timestamp?:fhir.FhirElementArgs;
  /**
   * Drives the behavior associated with this message.
   */
  event: fhir.CodingArgs|null;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: fhir.MessageHeaderResponseArgs|undefined;
  /**
   * Allows replies, supports audit.
   */
  source: fhir.MessageHeaderSourceArgs|null;
  /**
   * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
   */
  destination?: fhir.MessageHeaderDestinationArgs[]|undefined;
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  enterer?: fhir.ReferenceArgs|undefined;
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Allows routing beyond just the application level.
   */
  receiver?: fhir.ReferenceArgs|undefined;
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  responsible?: fhir.ReferenceArgs|undefined;
  /**
   * Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
   */
  reason?: fhir.CodeableConceptArgs|undefined;
  /**
   * Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
   */
  data?: fhir.ReferenceArgs[]|undefined;
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
   * Allows limited detection of out-of-order and delayed transmission.  Also supports audit.
   */
  public timestamp: fhir.FhirInstant|null;
  /**
   * Drives the behavior associated with this message.
   */
  public event: fhir.Coding|null;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  public response?: fhir.MessageHeaderResponse|undefined;
  /**
   * Allows replies, supports audit.
   */
  public source: fhir.MessageHeaderSource|null;
  /**
   * Indicates where message is to be sent for routing purposes.  Allows verification of "am I the intended recipient".
   */
  public destination: fhir.MessageHeaderDestination[];
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Allows routing beyond just the application level.
   */
  public receiver?: fhir.Reference|undefined;
  /**
   * Need to know for audit/traceback requirements and possibly for authorization.
   */
  public responsible?: fhir.Reference|undefined;
  /**
   * Need to be able to track why resources are being changed and report in the audit log/history of the resource.  May affect authorization.
   */
  public reason?: fhir.CodeableConcept|undefined;
  /**
   * Every message event is about actual data, a single resource, that is identified in the definition of the event, and perhaps some or all linked resources.
   */
  public data: fhir.Reference[];
  /**
   * Default constructor for MessageHeader - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MessageHeaderArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'MessageHeader';
    if (source['timestamp'] !== undefined) { this.timestamp = new fhir.FhirInstant({value: source.timestamp}, options); }
    else { this.timestamp = null; }
    if (source['_timestamp']) {
      if (this.timestamp) { this.timestamp.addExtendedProperties(source._timestamp!); }
      else { this.timestamp = new fhir.FhirInstant(source._timestamp as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['event']) { this.event = new fhir.Coding(source.event, options); }
    else { this.event = null; }
    if (source['response']) { this.response = new fhir.MessageHeaderResponse(source.response, options); }
    if (source['source']) { this.source = new fhir.MessageHeaderSource(source.source, options); }
    else { this.source = null; }
    if (source['destination']) { this.destination = source.destination.map((x) => new fhir.MessageHeaderDestination(x, options)); }
    else { this.destination = []; }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer, options); }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['receiver']) { this.receiver = new fhir.Reference(source.receiver, options); }
    if (source['responsible']) { this.responsible = new fhir.Reference(source.responsible, options); }
    if (source['reason']) { this.reason = new fhir.CodeableConcept(source.reason, options); }
    if (source['data']) { this.data = source.data.map((x) => new fhir.Reference(x, options)); }
    else { this.data = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'MessageHeader' }
    iss.push(...this.vRS('timestamp',exp));
    iss.push(...this.vRS('event',exp));
    iss.push(...this.vOS('response',exp));
    iss.push(...this.vRS('source',exp));
    iss.push(...this.vOA('destination',exp));
    iss.push(...this.vOS('enterer',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('receiver',exp));
    iss.push(...this.vOS('responsible',exp));
    iss.push(...this.vOS('reason',exp));
    iss.push(...this.vOA('data',exp));
    return iss;
  }
}
