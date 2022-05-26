// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Subscription

import * as fhir from '../fhir.js';

// @ts-ignore
import { SubscriptionChannelTypeCodings, SubscriptionChannelTypeCodingType,} from '../fhirValueSets/SubscriptionChannelTypeCodings.js';
// @ts-ignore
import { SubscriptionChannelTypeCodes,  SubscriptionChannelTypeCodeType } from '../fhirValueSets/SubscriptionChannelTypeCodes.js';
// @ts-ignore
import { SubscriptionStatusCodings, SubscriptionStatusCodingType,} from '../fhirValueSets/SubscriptionStatusCodings.js';
// @ts-ignore
import { SubscriptionStatusCodes,  SubscriptionStatusCodeType } from '../fhirValueSets/SubscriptionStatusCodes.js';
/**
 * Valid arguments for the SubscriptionChannel type.
 */
export interface SubscriptionChannelArgs extends fhir.BackboneElementArgs {
  /**
   * The type of channel to send notifications on.
   */
  type: fhir.FhirCode<SubscriptionChannelTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
   */
  endpoint?: fhir.FhirUrl|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
  /**
   * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
   */
  payload?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.payload
   */
  _payload?:fhir.FhirElementArgs;
  /**
   * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
   */
  header?: fhir.FhirString[]|string[]|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.header
   */
  _header?:(fhir.FhirElementArgs|null)[];
}

/**
 * Details where to send notifications when resources are received that meet the criteria.
 */
export class SubscriptionChannel extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubscriptionChannel';
  /**
   * The type of channel to send notifications on.
   */
  public type: fhir.FhirCode<SubscriptionChannelTypeCodeType>|null;
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since there may be more than one, clients should avoid using relative URIs).
   */
  public endpoint?: fhir.FhirUrl|undefined;
  /**
   * Sending the payload has obvious security implications. The server is responsible for ensuring that the content is appropriately secured.
   */
  public payload?: fhir.FhirCode|undefined;
  /**
   * Exactly what these mean depend on the channel type. They can convey additional information to the recipient and/or meet security requirements; for example, support of multiple headers in the outgoing notifications for rest-hook type subscriptions.
   */
  public header: fhir.FhirString[];
  /**
   * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubscriptionChannelArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<SubscriptionChannelTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<SubscriptionChannelTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['endpoint']) { this.endpoint = new fhir.FhirUrl({value: source.endpoint}); }
    if (source['_endpoint']) {
      if (this.endpoint) { this.endpoint.addExtendedProperties(source._endpoint!); }
      else { this.endpoint = new fhir.FhirUrl(source._endpoint as Partial<fhir.FhirUrlArgs>); }
    }
    if (source['payload']) { this.payload = new fhir.FhirCode({value: source.payload}); }
    if (source['_payload']) {
      if (this.payload) { this.payload.addExtendedProperties(source._payload!); }
      else { this.payload = new fhir.FhirCode(source._payload as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['header']) { this.header = source.header.map((x) => new fhir.FhirString({value: x})); }
    else { this.header = []; }
    if (source['_header']) {
      source._header.forEach((x,i) => {
        if (this.header.length >= i) { if (x) { this.header[i].addExtendedProperties(x); } }
        else { if (x) { this.header.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
  }
  /**
   * Required-bound Value Set for type (Subscription.channel.type)
   */
  public static get typeRequiredCodes() {
    return SubscriptionChannelTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type:fhir.FhirCode<SubscriptionChannelTypeCodeType> fhir: Subscription.channel.type:code' });
    }
    if (this['type'] && (!Object.values(SubscriptionChannelTypeCodes).includes(this.type as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property type:fhir.FhirCode<SubscriptionChannelTypeCodeType> fhir: Subscription.channel.type:code Required binding to: SubscriptionChannelType' });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["endpoint"]) { issues.push(...this.endpoint.doModelValidation()); }
    if (this["payload"]) { issues.push(...this.payload.doModelValidation()); }
    if (this["header"]) { this.header.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the Subscription type.
 */
export interface SubscriptionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Subscription"|undefined;
  /**
   * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<SubscriptionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * The server is permitted to deviate from this time but should observe it.
   */
  end?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.end
   */
  _end?:fhir.FhirElementArgs;
  /**
   * A description of why this subscription is defined.
   */
  reason: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.reason
   */
  _reason?:fhir.FhirElementArgs;
  /**
   * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
   */
  criteria: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.criteria
   */
  _criteria?:fhir.FhirElementArgs;
  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  error?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.error
   */
  _error?:fhir.FhirElementArgs;
  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  channel: fhir.SubscriptionChannelArgs|null;
}

/**
 * The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.
 */
export class Subscription extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Subscription';
  /**
   * Resource Type Name
   */
  public override resourceType: "Subscription";
  /**
   * A client can only submit subscription resources in the requested or off state. Only the server can  move a subscription from requested to active, and then to error. Either the server or the client can turn a subscription off.
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<SubscriptionStatusCodeType>|null;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  public contact: fhir.ContactPoint[];
  /**
   * The server is permitted to deviate from this time but should observe it.
   */
  public end?: fhir.FhirInstant|undefined;
  /**
   * A description of why this subscription is defined.
   */
  public reason: fhir.FhirString|null;
  /**
   * The rules are search criteria (without the [base] part). Like Bundle.entry.request.url, it has no leading "/".
   */
  public criteria: fhir.FhirString|null;
  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  public error?: fhir.FhirString|undefined;
  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  public channel: fhir.SubscriptionChannel|null;
  /**
   * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubscriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Subscription';
    if (source['status']) { this.status = new fhir.FhirCode<SubscriptionStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SubscriptionStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x)); }
    else { this.contact = []; }
    if (source['end']) { this.end = new fhir.FhirInstant({value: source.end}); }
    if (source['_end']) {
      if (this.end) { this.end.addExtendedProperties(source._end!); }
      else { this.end = new fhir.FhirInstant(source._end as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['reason']) { this.reason = new fhir.FhirString({value: source.reason}); }
    else { this.reason = null; }
    if (source['_reason']) {
      if (this.reason) { this.reason.addExtendedProperties(source._reason!); }
      else { this.reason = new fhir.FhirString(source._reason as Partial<fhir.FhirStringArgs>); }
    }
    if (source['criteria']) { this.criteria = new fhir.FhirString({value: source.criteria}); }
    else { this.criteria = null; }
    if (source['_criteria']) {
      if (this.criteria) { this.criteria.addExtendedProperties(source._criteria!); }
      else { this.criteria = new fhir.FhirString(source._criteria as Partial<fhir.FhirStringArgs>); }
    }
    if (source['error']) { this.error = new fhir.FhirString({value: source.error}); }
    if (source['_error']) {
      if (this.error) { this.error.addExtendedProperties(source._error!); }
      else { this.error = new fhir.FhirString(source._error as Partial<fhir.FhirStringArgs>); }
    }
    if (source['channel']) { this.channel = new fhir.SubscriptionChannel(source.channel); }
    else { this.channel = null; }
  }
  /**
   * Required-bound Value Set for status (Subscription.status)
   */
  public static get statusRequiredCodes() {
    return SubscriptionStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Subscription" fhir: Subscription.resourceType:"Subscription"' });
    }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<SubscriptionStatusCodeType> fhir: Subscription.status:code' });
    }
    if (this['status'] && (!Object.values(SubscriptionStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<SubscriptionStatusCodeType> fhir: Subscription.status:code Required binding to: SubscriptionStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["end"]) { issues.push(...this.end.doModelValidation()); }
    if (!this['reason']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property reason:fhir.FhirString fhir: Subscription.reason:string' });
    }
    if (this["reason"]) { issues.push(...this.reason.doModelValidation()); }
    if (!this['criteria']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property criteria:fhir.FhirString fhir: Subscription.criteria:string' });
    }
    if (this["criteria"]) { issues.push(...this.criteria.doModelValidation()); }
    if (this["error"]) { issues.push(...this.error.doModelValidation()); }
    if (!this['channel']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property channel:fhir.SubscriptionChannel fhir: Subscription.channel:channel' });
    }
    if (this["channel"]) { issues.push(...this.channel.doModelValidation()); }
    return issues;
  }
}
