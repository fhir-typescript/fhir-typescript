// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Endpoint

import * as fhir from '../fhir.js';

// @ts-ignore
import { EndpointStatusCodes,  EndpointStatusCodeType } from '../fhirValueSets/EndpointStatusCodes.js';
// @ts-ignore
import { EndpointStatusVsValidation } from '../fhirValueSets/EndpointStatusVsValidation.js';
// @ts-ignore
import { EndpointConnectionTypeCodes,  EndpointConnectionTypeCodeType } from '../fhirValueSets/EndpointConnectionTypeCodes.js';
// @ts-ignore
import { EndpointConnectionTypeVsValidation } from '../fhirValueSets/EndpointConnectionTypeVsValidation.js';
/**
 * Valid arguments for the Endpoint type.
 */
export interface EndpointArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Endpoint"|undefined;
  /**
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  status: fhir.FhirCode<EndpointStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Endpoint.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  connectionType: fhir.CodingArgs|null;
  /**
   * A friendly name that this endpoint can be referred to with.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Endpoint.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an aplicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
   */
  managingOrganization?: fhir.ReferenceArgs|undefined;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   */
  payloadType: fhir.CodeableConceptArgs[]|null;
  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   */
  payloadMimeType?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.payloadMimeType
   */
  _payloadMimeType?:(fhir.FhirElementArgs|null)[];
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since their may be more than one, clients should avoid using relative URIs)
   * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
   * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
   * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   */
  address: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Endpoint.address
   */
  _address?:fhir.FhirElementArgs;
  /**
   * Exactly what these mean depend on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   */
  header?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: Endpoint.header
   */
  _header?:(fhir.FhirElementArgs|null)[];
}

/**
 * The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.
 */
export class Endpoint extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Endpoint';
  /**
   * Resource Type Name
   */
  public override resourceType: "Endpoint";
  /**
   * Identifier for the organization that is used to identify the endpoint across multiple disparate systems.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the endpoint as not currently valid.
   */
  public status: fhir.FhirCode<EndpointStatusCodeType>|null;
  /**
   * For additional connectivity details for the protocol, extensions will be used at this point, as in the XDS example.
   */
  public connectionType: fhir.Coding|null;
  /**
   * A friendly name that this endpoint can be referred to with.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * This property is not typically used when searching for Endpoint resources for usage. The typical usage is via the reference from an aplicable Organization/Location/Practitioner resource, which is where the context is provided. Multiple Locations may reference a single endpoint, and don't have to be within the same organization resource, but most likely within the same organizational hierarchy.
   */
  public managingOrganization?: fhir.Reference|undefined;
  /**
   * Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.
   */
  public contact: fhir.ContactPoint[];
  /**
   * The interval during which the endpoint is expected to be operational.
   */
  public period?: fhir.Period|undefined;
  /**
   * The payloadFormat describes the serialization format of the data, where the payloadType indicates the specific document/schema that is being transferred; e.g. DischargeSummary or CarePlan.
   */
  public payloadType: fhir.CodeableConcept[];
  /**
   * Sending the payload has obvious security consequences. The server is responsible for ensuring that the content is appropriately secured.
   */
  public payloadMimeType: fhir.FhirCode[];
  /**
   * For rest-hook, and websocket, the end-point must be an http: or https: URL; for email, a mailto: url, for sms, a tel: url, and for message the endpoint can be in any form of url the server understands (usually, http: or mllp:). The URI is allowed to be relative; in which case, it is relative to the server end-point (since their may be more than one, clients should avoid using relative URIs)
   * This address will be to the service base, without any parameters, or sub-services or resources tacked on.
   * E.g. for a WADO-RS endpoint, the url should be "https://pacs.hospital.org/wado-rs"
   * and not "https://pacs.hospital.org/wado-rs/studies/1.2.250.1.59.40211.12345678.678910/series/1.2.250.1.59.40211.789001276.14556172.67789/instances/...".
   */
  public address: fhir.FhirUri|null;
  /**
   * Exactly what these mean depend on the channel type. The can convey additional information to the recipient and/or meet security requirements.
   */
  public header: fhir.FhirString[];
  /**
   * Default constructor for Endpoint - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<EndpointArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Endpoint';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<EndpointStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<EndpointStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['connectionType']) { this.connectionType = new fhir.Coding(source.connectionType); }
    else { this.connectionType = null; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['managingOrganization']) { this.managingOrganization = new fhir.Reference(source.managingOrganization); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x)); }
    else { this.contact = []; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['payloadType']) { this.payloadType = source.payloadType.map((x) => new fhir.CodeableConcept(x)); }
    else { this.payloadType = []; }
    if (source['payloadMimeType']) { this.payloadMimeType = source.payloadMimeType.map((x) => new fhir.FhirCode({value: x})); }
    else { this.payloadMimeType = []; }
    if (source['_payloadMimeType']) {
      source._payloadMimeType.forEach((x,i) => {
        if (this.payloadMimeType.length >= i) { if (x) { this.payloadMimeType[i].addExtendedProperties(x); } }
        else { if (x) { this.payloadMimeType.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['address']) { this.address = new fhir.FhirUri({value: source.address}); }
    else { this.address = null; }
    if (source['_address']) {
      if (this.address) { this.address.addExtendedProperties(source._address!); }
      else { this.address = new fhir.FhirUri(source._address as Partial<fhir.FhirUriArgs>); }
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
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Endpoint' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vRSV('status',exp,'EndpointStatus',EndpointStatusVsValidation,'r')
    this.vRS('connectionType',exp)
    this.vOS('name',exp)
    this.vOS('managingOrganization',exp)
    this.vOA('contact',exp)
    this.vOS('period',exp)
    this.vRA('payloadType',exp)
    this.vOA('payloadMimeType',exp)
    this.vRS('address',exp)
    this.vOA('header',exp)
    return issues;
  }
}
