// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Bundle

import * as fhir from '../fhir.js';

// @ts-ignore
import { SearchEntryModeCodes,  SearchEntryModeCodeType } from '../fhirValueSets/SearchEntryModeCodes.js';
// @ts-ignore
import { SearchEntryModeVsValidation } from '../fhirValueSets/SearchEntryModeVsValidation.js';
// @ts-ignore
import { HttpVerbCodes,  HttpVerbCodeType } from '../fhirValueSets/HttpVerbCodes.js';
// @ts-ignore
import { HttpVerbVsValidation } from '../fhirValueSets/HttpVerbVsValidation.js';
// @ts-ignore
import { BundleTypeCodes,  BundleTypeCodeType } from '../fhirValueSets/BundleTypeCodes.js';
// @ts-ignore
import { BundleTypeVsValidation } from '../fhirValueSets/BundleTypeVsValidation.js';
/**
 * Valid arguments for the BundleLink type.
 */
export interface BundleLinkArgs extends fhir.BackboneElementArgs {
  /**
   * A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
   */
  relation: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.link.relation
   */
  _relation?:fhir.FhirElementArgs;
  /**
   * The reference details for the link.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.link.url
   */
  _url?:fhir.FhirElementArgs;
}

/**
 * A series of links that provide context to this bundle.
 */
export class BundleLink extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BundleLink';
  /**
   * A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
   */
  public relation: fhir.FhirString|null;
  /**
   * The reference details for the link.
   */
  public url: fhir.FhirUri|null;
  /**
   * Default constructor for BundleLink - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleLinkArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['relation']) { this.relation = new fhir.FhirString({value: source.relation}); }
    else { this.relation = null; }
    if (source['_relation']) {
      if (this.relation) { this.relation.addExtendedProperties(source._relation!); }
      else { this.relation = new fhir.FhirString(source._relation as Partial<fhir.FhirStringArgs>); }
    }
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle.link' }
    iss.push(...this.vRS('relation',exp));
    iss.push(...this.vRS('url',exp));
    return iss;
  }
}
/**
 * Valid arguments for the BundleEntrySearch type.
 */
export interface BundleEntrySearchArgs extends fhir.BackboneElementArgs {
  /**
   * Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
   */
  mode?: fhir.FhirCode<SearchEntryModeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.search.mode
   */
  _mode?:fhir.FhirElementArgs;
  /**
   * When searching, the server's search ranking score for the entry.
   */
  score?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.search.score
   */
  _score?:fhir.FhirElementArgs;
}

/**
 * Information about the search process that lead to the creation of this entry.
 */
export class BundleEntrySearch extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BundleEntrySearch';
  /**
   * Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
   */
  public mode?: fhir.FhirCode<SearchEntryModeCodeType>|undefined;
  /**
   * When searching, the server's search ranking score for the entry.
   */
  public score?: fhir.FhirDecimal|undefined;
  /**
   * Default constructor for BundleEntrySearch - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleEntrySearchArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['mode']) { this.mode = new fhir.FhirCode<SearchEntryModeCodeType>({value: source.mode}); }
    if (source['_mode']) {
      if (this.mode) { this.mode.addExtendedProperties(source._mode!); }
      else { this.mode = new fhir.FhirCode<SearchEntryModeCodeType>(source._mode as Partial<fhir.FhirCode>); }
    }
    if (source['score']) { this.score = new fhir.FhirDecimal({value: source.score}); }
    if (source['_score']) {
      if (this.score) { this.score.addExtendedProperties(source._score!); }
      else { this.score = new fhir.FhirDecimal(source._score as Partial<fhir.FhirDecimalArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle.entry.search' }
    iss.push(...this.vOSV('mode',exp,'SearchEntryMode',SearchEntryModeVsValidation,'r'));
    iss.push(...this.vOS('score',exp));
    return iss;
  }
}
/**
 * Valid arguments for the BundleEntryRequest type.
 */
export interface BundleEntryRequestArgs extends fhir.BackboneElementArgs {
  /**
   * The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
   */
  method: fhir.FhirCode<HttpVerbCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.method
   */
  _method?:fhir.FhirElementArgs;
  /**
   * The URL for this entry, relative to the root (the address to which the request is posted).
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * If the ETag values match, return a 304 Not modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifNoneMatch?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.ifNoneMatch
   */
  _ifNoneMatch?:fhir.FhirElementArgs;
  /**
   * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  ifModifiedSince?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.ifModifiedSince
   */
  _ifModifiedSince?:fhir.FhirElementArgs;
  /**
   * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  ifMatch?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.ifMatch
   */
  _ifMatch?:fhir.FhirElementArgs;
  /**
   * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   */
  ifNoneExist?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.request.ifNoneExist
   */
  _ifNoneExist?:fhir.FhirElementArgs;
}

/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export class BundleEntryRequest extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BundleEntryRequest';
  /**
   * The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
   */
  public method: fhir.FhirCode<HttpVerbCodeType>|null;
  /**
   * The URL for this entry, relative to the root (the address to which the request is posted).
   */
  public url: fhir.FhirUri|null;
  /**
   * If the ETag values match, return a 304 Not modified status. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  public ifNoneMatch?: fhir.FhirString|undefined;
  /**
   * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
   */
  public ifModifiedSince?: fhir.FhirInstant|undefined;
  /**
   * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
   */
  public ifMatch?: fhir.FhirString|undefined;
  /**
   * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
   */
  public ifNoneExist?: fhir.FhirString|undefined;
  /**
   * Default constructor for BundleEntryRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleEntryRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['method']) { this.method = new fhir.FhirCode<HttpVerbCodeType>({value: source.method}); }
    else { this.method = null; }
    if (source['_method']) {
      if (this.method) { this.method.addExtendedProperties(source._method!); }
      else { this.method = new fhir.FhirCode<HttpVerbCodeType>(source._method as Partial<fhir.FhirCode>); }
    }
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['ifNoneMatch']) { this.ifNoneMatch = new fhir.FhirString({value: source.ifNoneMatch}); }
    if (source['_ifNoneMatch']) {
      if (this.ifNoneMatch) { this.ifNoneMatch.addExtendedProperties(source._ifNoneMatch!); }
      else { this.ifNoneMatch = new fhir.FhirString(source._ifNoneMatch as Partial<fhir.FhirStringArgs>); }
    }
    if (source['ifModifiedSince']) { this.ifModifiedSince = new fhir.FhirInstant({value: source.ifModifiedSince}); }
    if (source['_ifModifiedSince']) {
      if (this.ifModifiedSince) { this.ifModifiedSince.addExtendedProperties(source._ifModifiedSince!); }
      else { this.ifModifiedSince = new fhir.FhirInstant(source._ifModifiedSince as Partial<fhir.FhirInstantArgs>); }
    }
    if (source['ifMatch']) { this.ifMatch = new fhir.FhirString({value: source.ifMatch}); }
    if (source['_ifMatch']) {
      if (this.ifMatch) { this.ifMatch.addExtendedProperties(source._ifMatch!); }
      else { this.ifMatch = new fhir.FhirString(source._ifMatch as Partial<fhir.FhirStringArgs>); }
    }
    if (source['ifNoneExist']) { this.ifNoneExist = new fhir.FhirString({value: source.ifNoneExist}); }
    if (source['_ifNoneExist']) {
      if (this.ifNoneExist) { this.ifNoneExist.addExtendedProperties(source._ifNoneExist!); }
      else { this.ifNoneExist = new fhir.FhirString(source._ifNoneExist as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle.entry.request' }
    iss.push(...this.vRSV('method',exp,'HttpVerb',HttpVerbVsValidation,'r'));
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOS('ifNoneMatch',exp));
    iss.push(...this.vOS('ifModifiedSince',exp));
    iss.push(...this.vOS('ifMatch',exp));
    iss.push(...this.vOS('ifNoneExist',exp));
    return iss;
  }
}
/**
 * Valid arguments for the BundleEntryResponse type.
 */
export interface BundleEntryResponseArgs extends fhir.BackboneElementArgs {
  /**
   * The status code returned by processing this entry.
   */
  status: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.response.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The location header created by processing this operation.
   */
  location?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.response.location
   */
  _location?:fhir.FhirElementArgs;
  /**
   * The etag for the resource, it the operation for the entry produced a versioned resource.
   */
  etag?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.response.etag
   */
  _etag?:fhir.FhirElementArgs;
  /**
   * The date/time that the resource was modified on the server.
   */
  lastModified?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.response.lastModified
   */
  _lastModified?:fhir.FhirElementArgs;
}

/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export class BundleEntryResponse extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BundleEntryResponse';
  /**
   * The status code returned by processing this entry.
   */
  public status: fhir.FhirString|null;
  /**
   * The location header created by processing this operation.
   */
  public location?: fhir.FhirUri|undefined;
  /**
   * The etag for the resource, it the operation for the entry produced a versioned resource.
   */
  public etag?: fhir.FhirString|undefined;
  /**
   * The date/time that the resource was modified on the server.
   */
  public lastModified?: fhir.FhirInstant|undefined;
  /**
   * Default constructor for BundleEntryResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleEntryResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['status']) { this.status = new fhir.FhirString({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirString(source._status as Partial<fhir.FhirStringArgs>); }
    }
    if (source['location']) { this.location = new fhir.FhirUri({value: source.location}); }
    if (source['_location']) {
      if (this.location) { this.location.addExtendedProperties(source._location!); }
      else { this.location = new fhir.FhirUri(source._location as Partial<fhir.FhirUriArgs>); }
    }
    if (source['etag']) { this.etag = new fhir.FhirString({value: source.etag}); }
    if (source['_etag']) {
      if (this.etag) { this.etag.addExtendedProperties(source._etag!); }
      else { this.etag = new fhir.FhirString(source._etag as Partial<fhir.FhirStringArgs>); }
    }
    if (source['lastModified']) { this.lastModified = new fhir.FhirInstant({value: source.lastModified}); }
    if (source['_lastModified']) {
      if (this.lastModified) { this.lastModified.addExtendedProperties(source._lastModified!); }
      else { this.lastModified = new fhir.FhirInstant(source._lastModified as Partial<fhir.FhirInstantArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle.entry.response' }
    iss.push(...this.vRS('status',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOS('etag',exp));
    iss.push(...this.vOS('lastModified',exp));
    return iss;
  }
}
/**
 * Valid arguments for the BundleEntry type.
 */
export interface BundleEntryArgs extends fhir.BackboneElementArgs {
  /**
   * A series of links that provide context to this entry.
   */
  link?: fhir.BundleLinkArgs[]|undefined;
  /**
   * The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
   */
  fullUrl?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.entry.fullUrl
   */
  _fullUrl?:fhir.FhirElementArgs;
  /**
   * The Resources for the entry.
   */
  resource?: fhir.ResourceArgs|any|undefined;
  /**
   * Information about the search process that lead to the creation of this entry.
   */
  search?: fhir.BundleEntrySearchArgs|undefined;
  /**
   * Additional information about how this entry should be processed as part of a transaction.
   */
  request?: fhir.BundleEntryRequestArgs|undefined;
  /**
   * Additional information about how this entry should be processed as part of a transaction.
   */
  response?: fhir.BundleEntryResponseArgs|undefined;
}

/**
 * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
 */
export class BundleEntry extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'BundleEntry';
  /**
   * A series of links that provide context to this entry.
   */
  public link: fhir.BundleLink[];
  /**
   * The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
   */
  public fullUrl?: fhir.FhirUri|undefined;
  /**
   * The Resources for the entry.
   */
  public resource?: fhir.FhirResource|undefined;
  /**
   * Information about the search process that lead to the creation of this entry.
   */
  public search?: fhir.BundleEntrySearch|undefined;
  /**
   * Additional information about how this entry should be processed as part of a transaction.
   */
  public request?: fhir.BundleEntryRequest|undefined;
  /**
   * Additional information about how this entry should be processed as part of a transaction.
   */
  public response?: fhir.BundleEntryResponse|undefined;
  /**
   * Default constructor for BundleEntry - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleEntryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['link']) { this.link = source.link.map((x) => new fhir.BundleLink(x)); }
    else { this.link = []; }
    if (source['fullUrl']) { this.fullUrl = new fhir.FhirUri({value: source.fullUrl}); }
    if (source['_fullUrl']) {
      if (this.fullUrl) { this.fullUrl.addExtendedProperties(source._fullUrl!); }
      else { this.fullUrl = new fhir.FhirUri(source._fullUrl as Partial<fhir.FhirUriArgs>); }
    }
    if (source['resource']) { this.resource = (fhir.resourceFactory(source.resource) ?? undefined); }
    if (source['search']) { this.search = new fhir.BundleEntrySearch(source.search); }
    if (source['request']) { this.request = new fhir.BundleEntryRequest(source.request); }
    if (source['response']) { this.response = new fhir.BundleEntryResponse(source.response); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle.entry' }
    iss.push(...this.vOA('link',exp));
    iss.push(...this.vOS('fullUrl',exp));
    iss.push(...this.vOS('resource',exp));
    iss.push(...this.vOS('search',exp));
    iss.push(...this.vOS('request',exp));
    iss.push(...this.vOS('response',exp));
    return iss;
  }

/**
 * Access a bundle.entry[].resource as a typed resource
 */
  resourceAs<BundeContentType = fhir.FhirResource>(): BundeContentType|unknown {
    return this.resource as unknown as BundeContentType;
  }
}
/**
 * Valid arguments for the Bundle type.
 */
export interface BundleArgs extends fhir.ResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Bundle"|undefined;
  /**
   * Indicates the purpose of this bundle- how it was intended to be used.
   */
  type: fhir.FhirCode<BundleTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Bundle.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
   */
  total?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Bundle.total
   */
  _total?:fhir.FhirElementArgs;
  /**
   * A series of links that provide context to this bundle.
   */
  link?: fhir.BundleLinkArgs[]|undefined;
  /**
   * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
   */
  entry?: fhir.BundleEntryArgs[]|undefined;
  /**
   * This element allows capturing signatures on documents. It also allows signatures on messages, transactions or even query responses. It may support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
   */
  signature?: fhir.SignatureArgs|undefined;
}

/**
 * A container for a collection of resources.
 */
export class Bundle extends fhir.Resource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Bundle';
  /**
   * Resource Type Name
   */
  public override resourceType: "Bundle";
  /**
   * Indicates the purpose of this bundle- how it was intended to be used.
   */
  public type: fhir.FhirCode<BundleTypeCodeType>|null;
  /**
   * If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
   */
  public total?: fhir.FhirUnsignedInt|undefined;
  /**
   * A series of links that provide context to this bundle.
   */
  public link: fhir.BundleLink[];
  /**
   * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
   */
  public entry: fhir.BundleEntry[];
  /**
   * This element allows capturing signatures on documents. It also allows signatures on messages, transactions or even query responses. It may support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
   */
  public signature?: fhir.Signature|undefined;
  /**
   * Default constructor for Bundle - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BundleArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Bundle';
    if (source['type']) { this.type = new fhir.FhirCode<BundleTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<BundleTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['total']) { this.total = new fhir.FhirUnsignedInt({value: source.total}); }
    if (source['_total']) {
      if (this.total) { this.total.addExtendedProperties(source._total!); }
      else { this.total = new fhir.FhirUnsignedInt(source._total as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['link']) { this.link = source.link.map((x) => new fhir.BundleLink(x)); }
    else { this.link = []; }
    if (source['entry']) { this.entry = source.entry.map((x) => new fhir.BundleEntry(x)); }
    else { this.entry = []; }
    if (source['signature']) { this.signature = new fhir.Signature(source.signature); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Bundle' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vRSV('type',exp,'BundleType',BundleTypeVsValidation,'r'));
    iss.push(...this.vOS('total',exp));
    iss.push(...this.vOA('link',exp));
    iss.push(...this.vOA('entry',exp));
    iss.push(...this.vOS('signature',exp));
    return iss;
  }
}