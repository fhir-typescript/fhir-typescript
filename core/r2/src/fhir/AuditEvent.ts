// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: AuditEvent

import * as fhir from '../fhir.js';

// @ts-ignore
import { AuditEventActionCodes,  AuditEventActionCodeType } from '../fhirValueSets/AuditEventActionCodes.js';
// @ts-ignore
import { AuditEventActionVsValidation } from '../fhirValueSets/AuditEventActionVsValidation.js';
// @ts-ignore
import { AuditEventOutcomeCodes,  AuditEventOutcomeCodeType } from '../fhirValueSets/AuditEventOutcomeCodes.js';
// @ts-ignore
import { AuditEventOutcomeVsValidation } from '../fhirValueSets/AuditEventOutcomeVsValidation.js';
// @ts-ignore
import { NetworkTypeCodes,  NetworkTypeCodeType } from '../fhirValueSets/NetworkTypeCodes.js';
// @ts-ignore
import { NetworkTypeVsValidation } from '../fhirValueSets/NetworkTypeVsValidation.js';
/**
 * Valid arguments for the AuditEventEvent type.
 */
export interface AuditEventEventArgs extends fhir.BackboneElementArgs {
  /**
   * This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
   */
  type: fhir.CodingArgs|null;
  /**
   * This field enables queries of messages by implementation-defined event categories.
   */
  subtype?: fhir.CodingArgs[]|undefined;
  /**
   * This broadly indicates what kind of action was done on the Participant Object.
   */
  action?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.event.action
   */
  _action?:fhir.FhirElementArgs;
  /**
   * This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
   */
  dateTime: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.event.dateTime
   */
  _dateTime?:fhir.FhirElementArgs;
  /**
   * Indicates whether the event succeeded or failed.
   */
  outcome?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.event.outcome
   */
  _outcome?:fhir.FhirElementArgs;
  /**
   * A free text description of the outcome of the event.
   */
  outcomeDesc?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.event.outcomeDesc
   */
  _outcomeDesc?:fhir.FhirElementArgs;
  /**
   * The purposeOfUse (reason) that was used during the event being recorded.
   */
  purposeOfEvent?: fhir.CodingArgs[]|undefined;
}

/**
 * The event must be identified.
 */
export class AuditEventEvent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventEvent';
  /**
   * This identifies the performed function. For "Execute" Event Action Code audit records, this identifies the application function performed.
   */
  public type: fhir.Coding|null;
  /**
   * This field enables queries of messages by implementation-defined event categories.
   */
  public subtype: fhir.Coding[];
  /**
   * This broadly indicates what kind of action was done on the Participant Object.
   */
  public action?: fhir.FhirCode|undefined;
  /**
   * This ties an event to a specific date and time. Security audits typically require a consistent time base (e.g. UTC), to eliminate time-zone issues arising from geographical distribution.
   */
  public dateTime: fhir.FhirInstant|null;
  /**
   * Indicates whether the event succeeded or failed.
   */
  public outcome?: fhir.FhirCode|undefined;
  /**
   * A free text description of the outcome of the event.
   */
  public outcomeDesc?: fhir.FhirString|undefined;
  /**
   * The purposeOfUse (reason) that was used during the event being recorded.
   */
  public purposeOfEvent: fhir.Coding[];
  /**
   * Default constructor for AuditEventEvent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventEventArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.Coding(source.type); }
    else { this.type = null; }
    if (source['subtype']) { this.subtype = source.subtype.map((x) => new fhir.Coding(x)); }
    else { this.subtype = []; }
    if (source['action']) { this.action = new fhir.FhirCode({value: source.action}); }
    if (source['_action']) {
      if (this.action) { this.action.addExtendedProperties(source._action!); }
      else { this.action = new fhir.FhirCode(source._action as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['dateTime']) { this.dateTime = new fhir.FhirInstant({value: source.dateTime}); }
    else { this.dateTime = null; }
    if (source['_dateTime']) {
      if (this.dateTime) { this.dateTime.addExtendedProperties(source._dateTime!); }
      else { this.dateTime = new fhir.FhirInstant(source._dateTime as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['outcome']) { this.outcome = new fhir.FhirCode({value: source.outcome}); }
    if (source['_outcome']) {
      if (this.outcome) { this.outcome.addExtendedProperties(source._outcome!); }
      else { this.outcome = new fhir.FhirCode(source._outcome as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['outcomeDesc']) { this.outcomeDesc = new fhir.FhirString({value: source.outcomeDesc}); }
    if (source['_outcomeDesc']) {
      if (this.outcomeDesc) { this.outcomeDesc.addExtendedProperties(source._outcomeDesc!); }
      else { this.outcomeDesc = new fhir.FhirString(source._outcomeDesc as Partial<fhir.FhirStringArgs>); }
    }
    if (source['purposeOfEvent']) { this.purposeOfEvent = source.purposeOfEvent.map((x) => new fhir.Coding(x)); }
    else { this.purposeOfEvent = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.event' }
    this.vRS('type',exp)
    this.vOA('subtype',exp)
    this.vOSV('action',exp,'AuditEventAction',AuditEventActionVsValidation,'r')
    this.vRS('dateTime',exp)
    this.vOSV('outcome',exp,'AuditEventOutcome',AuditEventOutcomeVsValidation,'r')
    this.vOS('outcomeDesc',exp)
    this.vOA('purposeOfEvent',exp)
    return issues;
  }
}
/**
 * Valid arguments for the AuditEventParticipantNetwork type.
 */
export interface AuditEventParticipantNetworkArgs extends fhir.BackboneElementArgs {
  /**
   * This datum identifies the user's network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point's data access across all servers.
   */
  address?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.network.address
   */
  _address?:fhir.FhirElementArgs;
  /**
   * This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point's type.
   */
  type?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.network.type
   */
  _type?:fhir.FhirElementArgs;
}

/**
 * Logical network location for application activity, if the activity has a network location.
 */
export class AuditEventParticipantNetwork extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventParticipantNetwork';
  /**
   * This datum identifies the user's network access point, which may be distinct from the server that performed the action. It is an optional value that may be used to group events recorded on separate servers for analysis of a specific network access point's data access across all servers.
   */
  public address?: fhir.FhirString|undefined;
  /**
   * This datum identifies the type of network access point identifier of the user device for the audit event. It is an optional value that may be used to group events recorded on separate servers for analysis of access according to a network access point's type.
   */
  public type?: fhir.FhirCode|undefined;
  /**
   * Default constructor for AuditEventParticipantNetwork - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventParticipantNetworkArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['address']) { this.address = new fhir.FhirString({value: source.address}); }
    if (source['_address']) {
      if (this.address) { this.address.addExtendedProperties(source._address!); }
      else { this.address = new fhir.FhirString(source._address as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode(source._type as Partial<fhir.FhirCodeArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.participant.network' }
    this.vOS('address',exp)
    this.vOSV('type',exp,'NetworkType',NetworkTypeVsValidation,'r')
    return issues;
  }
}
/**
 * Valid arguments for the AuditEventParticipant type.
 */
export interface AuditEventParticipantArgs extends fhir.BackboneElementArgs {
  /**
   * This value ties an audited event to a user's role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
   */
  role?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This field ties an audit event to a specific resource.
   */
  reference?: fhir.ReferenceArgs|undefined;
  /**
   * This field ties an audit event to a specific user.
   */
  userId?: fhir.IdentifierArgs|undefined;
  /**
   * In some situations a human user may authenticate with one identity but, to access a specific application system, may use a synonymous identify. For example, some "single sign on" implementations will do this. The alternative identifier would then be the original identify  used for authentication, and the User ID is the one known to and used by the application.
   */
  altId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.altId
   */
  _altId?:fhir.FhirElementArgs;
  /**
   * The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
   */
  requestor: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.requestor
   */
  _requestor?:fhir.FhirElementArgs;
  /**
   * Where the event occurred.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * This value is used retrospectively to determine the authorization policies.
   */
  policy?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.participant.policy
   */
  _policy?:(fhir.FhirElementArgs|null)[];
  /**
   * Usually, this is used instead of specifying a network address. This field is not used for Media Id (i.e. the serial number of a CD).
   */
  media?: fhir.CodingArgs|undefined;
  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  network?: fhir.AuditEventParticipantNetworkArgs|undefined;
  /**
   * The reason (purpose of use), specific to this participant, that was used during the event being recorded.
   */
  purposeOfUse?: fhir.CodingArgs[]|undefined;
}

/**
 * The event has one or more active participants.
 */
export class AuditEventParticipant extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventParticipant';
  /**
   * This value ties an audited event to a user's role(s). It is an optional value that might be used to group events for analysis by user functional role categories.
   */
  public role: fhir.CodeableConcept[];
  /**
   * This field ties an audit event to a specific resource.
   */
  public reference?: fhir.Reference|undefined;
  /**
   * This field ties an audit event to a specific user.
   */
  public userId?: fhir.Identifier|undefined;
  /**
   * In some situations a human user may authenticate with one identity but, to access a specific application system, may use a synonymous identify. For example, some "single sign on" implementations will do this. The alternative identifier would then be the original identify  used for authentication, and the User ID is the one known to and used by the application.
   */
  public altId?: fhir.FhirString|undefined;
  /**
   * The User ID and Authorization User ID may be internal or otherwise obscure values. This field assists the auditor in identifying the actual user.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This value is used to distinguish between requestor-users and recipient-users. For example, one person may initiate a report-output to be sent to another user.
   */
  public requestor: fhir.FhirBoolean|null;
  /**
   * Where the event occurred.
   */
  public location?: fhir.Reference|undefined;
  /**
   * This value is used retrospectively to determine the authorization policies.
   */
  public policy: fhir.FhirUri[];
  /**
   * Usually, this is used instead of specifying a network address. This field is not used for Media Id (i.e. the serial number of a CD).
   */
  public media?: fhir.Coding|undefined;
  /**
   * Logical network location for application activity, if the activity has a network location.
   */
  public network?: fhir.AuditEventParticipantNetwork|undefined;
  /**
   * The reason (purpose of use), specific to this participant, that was used during the event being recorded.
   */
  public purposeOfUse: fhir.Coding[];
  /**
   * Default constructor for AuditEventParticipant - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventParticipantArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['role']) { this.role = source.role.map((x) => new fhir.CodeableConcept(x)); }
    else { this.role = []; }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    if (source['userId']) { this.userId = new fhir.Identifier(source.userId); }
    if (source['altId']) { this.altId = new fhir.FhirString({value: source.altId}); }
    if (source['_altId']) {
      if (this.altId) { this.altId.addExtendedProperties(source._altId!); }
      else { this.altId = new fhir.FhirString(source._altId as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['requestor']) { this.requestor = new fhir.FhirBoolean({value: source.requestor}); }
    else { this.requestor = null; }
    if (source['_requestor']) {
      if (this.requestor) { this.requestor.addExtendedProperties(source._requestor!); }
      else { this.requestor = new fhir.FhirBoolean(source._requestor as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['policy']) { this.policy = source.policy.map((x) => new fhir.FhirUri({value: x})); }
    else { this.policy = []; }
    if (source['_policy']) {
      source._policy.forEach((x,i) => {
        if (this.policy.length >= i) { if (x) { this.policy[i].addExtendedProperties(x); } }
        else { if (x) { this.policy.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['media']) { this.media = new fhir.Coding(source.media); }
    if (source['network']) { this.network = new fhir.AuditEventParticipantNetwork(source.network); }
    if (source['purposeOfUse']) { this.purposeOfUse = source.purposeOfUse.map((x) => new fhir.Coding(x)); }
    else { this.purposeOfUse = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.participant' }
    this.vOA('role',exp)
    this.vOS('reference',exp)
    this.vOS('userId',exp)
    this.vOS('altId',exp)
    this.vOS('name',exp)
    this.vRS('requestor',exp)
    this.vOS('location',exp)
    this.vOA('policy',exp)
    this.vOS('media',exp)
    this.vOS('network',exp)
    this.vOA('purposeOfUse',exp)
    return issues;
  }
}
/**
 * Valid arguments for the AuditEventSource type.
 */
export interface AuditEventSourceArgs extends fhir.BackboneElementArgs {
  /**
   * This value differentiates among the sites in a multi-site enterprise health information system.
   */
  site?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.source.site
   */
  _site?:fhir.FhirElementArgs;
  /**
   * This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
   */
  identifier: fhir.IdentifierArgs|null;
  /**
   * This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
   */
  type?: fhir.CodingArgs[]|undefined;
}

/**
 * The event is reported by one source.
 */
export class AuditEventSource extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventSource';
  /**
   * This value differentiates among the sites in a multi-site enterprise health information system.
   */
  public site?: fhir.FhirString|undefined;
  /**
   * This field ties the event to a specific source system. It may be used to group events for analysis according to where the event was detected.
   */
  public identifier: fhir.Identifier|null;
  /**
   * This field indicates which type of source is identified by the Audit Source ID. It is an optional value that may be used to group events for analysis according to the type of source where the event occurred.
   */
  public type: fhir.Coding[];
  /**
   * Default constructor for AuditEventSource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventSourceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['site']) { this.site = new fhir.FhirString({value: source.site}); }
    if (source['_site']) {
      if (this.site) { this.site.addExtendedProperties(source._site!); }
      else { this.site = new fhir.FhirString(source._site as Partial<fhir.FhirStringArgs>); }
    }
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    else { this.identifier = null; }
    if (source['type']) { this.type = source.type.map((x) => new fhir.Coding(x)); }
    else { this.type = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.source' }
    this.vOS('site',exp)
    this.vRS('identifier',exp)
    this.vOA('type',exp)
    return issues;
  }
}
/**
 * Valid arguments for the AuditEventObjectDetail type.
 */
export interface AuditEventObjectDetailArgs extends fhir.BackboneElementArgs {
  /**
   * Name of the property.
   */
  type: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.object.detail.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * Property value.
   */
  value: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.object.detail.value
   */
  _value?:fhir.FhirElementArgs;
}

/**
 * Additional Information about the Object.
 */
export class AuditEventObjectDetail extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventObjectDetail';
  /**
   * Name of the property.
   */
  public type: fhir.FhirString|null;
  /**
   * Property value.
   */
  public value: fhir.FhirBase64Binary|null;
  /**
   * Default constructor for AuditEventObjectDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventObjectDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirString({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirString(source._type as Partial<fhir.FhirStringArgs>); }
    }
    if (source['value']) { this.value = new fhir.FhirBase64Binary({value: source.value}); }
    else { this.value = null; }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirBase64Binary(source._value as Partial<fhir.FhirBase64BinaryArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.object.detail' }
    this.vRS('type',exp)
    this.vRS('value',exp)
    return issues;
  }
}
/**
 * Valid arguments for the AuditEventObject type.
 */
export interface AuditEventObjectArgs extends fhir.BackboneElementArgs {
  /**
   * Identifies a specific instance of the participant object. The reference should always be version specific.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * Identifies a specific instance of the participant object. The reference should always be version specific.
   */
  reference?: fhir.ReferenceArgs|undefined;
  /**
   * To describe the object being acted upon. In addition to queries on the subject of the action in an auditable event, it is also important to be able to query on the object type for the action.
   */
  type?: fhir.CodingArgs|undefined;
  /**
   * For some detailed audit analysis it may be necessary to indicate a more granular type of participant, based on the application role it serves.
   */
  role?: fhir.CodingArgs|undefined;
  /**
   * Institutional policies for privacy and security may optionally fall under different accountability rules based on data life cycle. This provides a differentiating value for those cases.
   */
  lifecycle?: fhir.CodingArgs|undefined;
  /**
   * This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
   */
  securityLabel?: fhir.CodingArgs[]|undefined;
  /**
   * An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.object.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Text that describes the object in more detail.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.object.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * For query events it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
   */
  query?: fhir.FhirBase64Binary|string|undefined;
  /**
   * Extended properties for primitive element: AuditEvent.object.query
   */
  _query?:fhir.FhirElementArgs;
  /**
   * Additional Information about the Object.
   */
  detail?: fhir.AuditEventObjectDetailArgs[]|undefined;
}

/**
 * The event may have other objects involved.
 */
export class AuditEventObject extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEventObject';
  /**
   * Identifies a specific instance of the participant object. The reference should always be version specific.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * Identifies a specific instance of the participant object. The reference should always be version specific.
   */
  public reference?: fhir.Reference|undefined;
  /**
   * To describe the object being acted upon. In addition to queries on the subject of the action in an auditable event, it is also important to be able to query on the object type for the action.
   */
  public type?: fhir.Coding|undefined;
  /**
   * For some detailed audit analysis it may be necessary to indicate a more granular type of participant, based on the application role it serves.
   */
  public role?: fhir.Coding|undefined;
  /**
   * Institutional policies for privacy and security may optionally fall under different accountability rules based on data life cycle. This provides a differentiating value for those cases.
   */
  public lifecycle?: fhir.Coding|undefined;
  /**
   * This field identifies the security labels for a specific instance of an object, such as a patient, to detect/track privacy and security issues.
   */
  public securityLabel: fhir.Coding[];
  /**
   * An instance-specific descriptor of the Participant Object ID audited, such as a person's name.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Text that describes the object in more detail.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * For query events it may be necessary to capture the actual query input to the query process in order to identify the specific event. Because of differences among query implementations and data encoding for them, this is a base 64 encoded data blob. It may be subsequently decoded or interpreted by downstream audit analysis processing.
   */
  public query?: fhir.FhirBase64Binary|undefined;
  /**
   * Additional Information about the Object.
   */
  public detail: fhir.AuditEventObjectDetail[];
  /**
   * Default constructor for AuditEventObject - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventObjectArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    if (source['type']) { this.type = new fhir.Coding(source.type); }
    if (source['role']) { this.role = new fhir.Coding(source.role); }
    if (source['lifecycle']) { this.lifecycle = new fhir.Coding(source.lifecycle); }
    if (source['securityLabel']) { this.securityLabel = source.securityLabel.map((x) => new fhir.Coding(x)); }
    else { this.securityLabel = []; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['query']) { this.query = new fhir.FhirBase64Binary({value: source.query}); }
    if (source['_query']) {
      if (this.query) { this.query.addExtendedProperties(source._query!); }
      else { this.query = new fhir.FhirBase64Binary(source._query as Partial<fhir.FhirBase64BinaryArgs>); }
    }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.AuditEventObjectDetail(x)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent.object' }
    this.vOS('identifier',exp)
    this.vOS('reference',exp)
    this.vOS('type',exp)
    this.vOS('role',exp)
    this.vOS('lifecycle',exp)
    this.vOA('securityLabel',exp)
    this.vOS('name',exp)
    this.vOS('description',exp)
    this.vOS('query',exp)
    this.vOA('detail',exp)
    return issues;
  }
}
/**
 * Valid arguments for the AuditEvent type.
 */
export interface AuditEventArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "AuditEvent"|undefined;
  /**
   * The event must be identified.
   */
  event: fhir.AuditEventEventArgs|null;
  /**
   * The event has one or more active participants.
   */
  participant: fhir.AuditEventParticipantArgs[]|null;
  /**
   * The event is reported by one source.
   */
  source: fhir.AuditEventSourceArgs|null;
  /**
   * The event may have other objects involved.
   */
  object?: fhir.AuditEventObjectArgs[]|undefined;
}

/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export class AuditEvent extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AuditEvent';
  /**
   * Resource Type Name
   */
  public override resourceType: "AuditEvent";
  /**
   * The event must be identified.
   */
  public event: fhir.AuditEventEvent|null;
  /**
   * The event has one or more active participants.
   */
  public participant: fhir.AuditEventParticipant[];
  /**
   * The event is reported by one source.
   */
  public source: fhir.AuditEventSource|null;
  /**
   * The event may have other objects involved.
   */
  public object: fhir.AuditEventObject[];
  /**
   * Default constructor for AuditEvent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AuditEventArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'AuditEvent';
    if (source['event']) { this.event = new fhir.AuditEventEvent(source.event); }
    else { this.event = null; }
    if (source['participant']) { this.participant = source.participant.map((x) => new fhir.AuditEventParticipant(x)); }
    else { this.participant = []; }
    if (source['source']) { this.source = new fhir.AuditEventSource(source.source); }
    else { this.source = null; }
    if (source['object']) { this.object = source.object.map((x) => new fhir.AuditEventObject(x)); }
    else { this.object = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AuditEvent' }
    this.vRS('resourceType',exp)
    this.vRS('event',exp)
    this.vRA('participant',exp)
    this.vRS('source',exp)
    this.vOA('object',exp)
    return issues;
  }
}
