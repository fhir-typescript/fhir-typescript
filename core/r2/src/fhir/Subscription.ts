// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Subscription

import * as fhir from '../fhir.js';

// @ts-ignore
import { SubscriptionChannelTypeCodes,  SubscriptionChannelTypeCodeType } from '../fhirValueSets/SubscriptionChannelTypeCodes.js';
// @ts-ignore
import { SubscriptionChannelTypeVsValidation } from '../fhirValueSets/SubscriptionChannelTypeVsValidation.js';
// @ts-ignore
import { SubscriptionStatusCodes,  SubscriptionStatusCodeType } from '../fhirValueSets/SubscriptionStatusCodes.js';
// @ts-ignore
import { SubscriptionStatusVsValidation } from '../fhirValueSets/SubscriptionStatusVsValidation.js';
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
   * The uri that describes the actual end-point to send messages to.
   */
  endpoint?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.endpoint
   */
  _endpoint?:fhir.FhirElementArgs;
  /**
   * The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
   */
  payload: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.payload
   */
  _payload?:fhir.FhirElementArgs;
  /**
   * Additional headers / information to send as part of the notification.
   */
  header?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.channel.header
   */
  _header?:fhir.FhirElementArgs;
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
   * The uri that describes the actual end-point to send messages to.
   */
  public endpoint?: fhir.FhirUri|undefined;
  /**
   * The mime type to send the payload in - either application/xml+fhir, or application/json+fhir. If the mime type is blank, then there is no payload in the notification, just a notification.
   */
  public payload: fhir.FhirString|null;
  /**
   * Additional headers / information to send as part of the notification.
   */
  public header?: fhir.FhirString|undefined;
  /**
   * Default constructor for SubscriptionChannel - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubscriptionChannelArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type'] !== undefined) { this.type = new fhir.FhirCode<SubscriptionChannelTypeCodeType>({value: source.type}, options); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<SubscriptionChannelTypeCodeType>(source._type as Partial<fhir.FhirCode>, options); }
    }
    if (source['endpoint'] !== undefined) { this.endpoint = new fhir.FhirUri({value: source.endpoint}, options); }
    if (source['_endpoint']) {
      if (this.endpoint) { this.endpoint.addExtendedProperties(source._endpoint!); }
      else { this.endpoint = new fhir.FhirUri(source._endpoint as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['payload'] !== undefined) { this.payload = new fhir.FhirString({value: source.payload}, options); }
    else { this.payload = null; }
    if (source['_payload']) {
      if (this.payload) { this.payload.addExtendedProperties(source._payload!); }
      else { this.payload = new fhir.FhirString(source._payload as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['header'] !== undefined) { this.header = new fhir.FhirString({value: source.header}, options); }
    if (source['_header']) {
      if (this.header) { this.header.addExtendedProperties(source._header!); }
      else { this.header = new fhir.FhirString(source._header as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Subscription.channel' }
    iss.push(...this.vRSV('type',exp,'SubscriptionChannelType',SubscriptionChannelTypeVsValidation,'r'));
    iss.push(...this.vOS('endpoint',exp));
    iss.push(...this.vRS('payload',exp));
    iss.push(...this.vOS('header',exp));
    return iss;
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
   * The rules that the server should use to determine when to generate notifications for this subscription.
   */
  criteria: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.criteria
   */
  _criteria?:fhir.FhirElementArgs;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * A description of why this subscription is defined.
   */
  reason: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.reason
   */
  _reason?:fhir.FhirElementArgs;
  /**
   * The status of the subscription, which marks the server state for managing the subscription.
   */
  status: fhir.FhirCode<SubscriptionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.status
   */
  _status?:fhir.FhirElementArgs;
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
  /**
   * The time for the server to turn the subscription off.
   */
  end?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Subscription.end
   */
  _end?:fhir.FhirElementArgs;
  /**
   * A tag to add to any resource that matches the criteria, after the subscription is processed.
   */
  tag?: fhir.CodingArgs[]|undefined;
}

/**
 * The subscription resource is used to define a push based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system is able to take an appropriate action.
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
   * The rules that the server should use to determine when to generate notifications for this subscription.
   */
  public criteria: fhir.FhirString|null;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  public contact: fhir.ContactPoint[];
  /**
   * A description of why this subscription is defined.
   */
  public reason: fhir.FhirString|null;
  /**
   * The status of the subscription, which marks the server state for managing the subscription.
   */
  public status: fhir.FhirCode<SubscriptionStatusCodeType>|null;
  /**
   * A record of the last error that occurred when the server processed a notification.
   */
  public error?: fhir.FhirString|undefined;
  /**
   * Details where to send notifications when resources are received that meet the criteria.
   */
  public channel: fhir.SubscriptionChannel|null;
  /**
   * The time for the server to turn the subscription off.
   */
  public end?: fhir.FhirInstant|undefined;
  /**
   * A tag to add to any resource that matches the criteria, after the subscription is processed.
   */
  public tag: fhir.Coding[];
  /**
   * Default constructor for Subscription - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubscriptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Subscription';
    if (source['criteria'] !== undefined) { this.criteria = new fhir.FhirString({value: source.criteria}, options); }
    else { this.criteria = null; }
    if (source['_criteria']) {
      if (this.criteria) { this.criteria.addExtendedProperties(source._criteria!); }
      else { this.criteria = new fhir.FhirString(source._criteria as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.contact = []; }
    if (source['reason'] !== undefined) { this.reason = new fhir.FhirString({value: source.reason}, options); }
    else { this.reason = null; }
    if (source['_reason']) {
      if (this.reason) { this.reason.addExtendedProperties(source._reason!); }
      else { this.reason = new fhir.FhirString(source._reason as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<SubscriptionStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SubscriptionStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['error'] !== undefined) { this.error = new fhir.FhirString({value: source.error}, options); }
    if (source['_error']) {
      if (this.error) { this.error.addExtendedProperties(source._error!); }
      else { this.error = new fhir.FhirString(source._error as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['channel']) { this.channel = new fhir.SubscriptionChannel(source.channel, options); }
    else { this.channel = null; }
    if (source['end'] !== undefined) { this.end = new fhir.FhirInstant({value: source.end}, options); }
    if (source['_end']) {
      if (this.end) { this.end.addExtendedProperties(source._end!); }
      else { this.end = new fhir.FhirInstant(source._end as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['tag']) { this.tag = source.tag.map((x) => new fhir.Coding(x, options)); }
    else { this.tag = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Subscription' }
    iss.push(...this.vRS('criteria',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vRS('reason',exp));
    iss.push(...this.vRSV('status',exp,'SubscriptionStatus',SubscriptionStatusVsValidation,'r'));
    iss.push(...this.vOS('error',exp));
    iss.push(...this.vRS('channel',exp));
    iss.push(...this.vOS('end',exp));
    iss.push(...this.vOA('tag',exp));
    return iss;
  }
}
