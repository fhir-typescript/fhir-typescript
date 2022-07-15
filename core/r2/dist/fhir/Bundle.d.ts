import * as fhir from '../fhir.js';
import { SearchEntryModeCodeType } from '../fhirValueSets/SearchEntryModeCodes.js';
import { HttpVerbCodeType } from '../fhirValueSets/HttpVerbCodes.js';
import { BundleTypeCodeType } from '../fhirValueSets/BundleTypeCodes.js';
/**
 * Valid arguments for the BundleLink type.
 */
export interface BundleLinkArgs extends fhir.BackboneElementArgs {
    /**
     * A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
     */
    relation: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.link.relation
     */
    _relation?: fhir.FhirElementArgs;
    /**
     * The reference details for the link.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.link.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * A series of links that provide context to this bundle.
 */
export declare class BundleLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
     */
    relation: fhir.FhirString | null;
    /**
     * The reference details for the link.
     */
    url: fhir.FhirUri | null;
    /**
     * Default constructor for BundleLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BundleEntrySearch type.
 */
export interface BundleEntrySearchArgs extends fhir.BackboneElementArgs {
    /**
     * Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
     */
    mode?: fhir.FhirCode<SearchEntryModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * When searching, the server's search ranking score for the entry.
     */
    score?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.score
     */
    _score?: fhir.FhirElementArgs;
}
/**
 * Information about the search process that lead to the creation of this entry.
 */
export declare class BundleEntrySearch extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
     */
    mode?: fhir.FhirCode<SearchEntryModeCodeType> | undefined;
    /**
     * When searching, the server's search ranking score for the entry.
     */
    score?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for BundleEntrySearch - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntrySearchArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BundleEntryRequest type.
 */
export interface BundleEntryRequestArgs extends fhir.BackboneElementArgs {
    /**
     * The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
     */
    method: fhir.FhirCode<HttpVerbCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.method
     */
    _method?: fhir.FhirElementArgs;
    /**
     * The URL for this entry, relative to the root (the address to which the request is posted).
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * If the ETag values match, return a 304 Not modified status. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifNoneMatch
     */
    _ifNoneMatch?: fhir.FhirElementArgs;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifModifiedSince
     */
    _ifModifiedSince?: fhir.FhirElementArgs;
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifMatch
     */
    _ifMatch?: fhir.FhirElementArgs;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */
    ifNoneExist?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifNoneExist
     */
    _ifNoneExist?: fhir.FhirElementArgs;
}
/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export declare class BundleEntryRequest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
     */
    method: fhir.FhirCode<HttpVerbCodeType> | null;
    /**
     * The URL for this entry, relative to the root (the address to which the request is posted).
     */
    url: fhir.FhirUri | null;
    /**
     * If the ETag values match, return a 304 Not modified status. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: fhir.FhirString | undefined;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: fhir.FhirInstant | undefined;
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: fhir.FhirString | undefined;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */
    ifNoneExist?: fhir.FhirString | undefined;
    /**
     * Default constructor for BundleEntryRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntryRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BundleEntryResponse type.
 */
export interface BundleEntryResponseArgs extends fhir.BackboneElementArgs {
    /**
     * The status code returned by processing this entry.
     */
    status: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The location header created by processing this operation.
     */
    location?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.location
     */
    _location?: fhir.FhirElementArgs;
    /**
     * The etag for the resource, it the operation for the entry produced a versioned resource.
     */
    etag?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.etag
     */
    _etag?: fhir.FhirElementArgs;
    /**
     * The date/time that the resource was modified on the server.
     */
    lastModified?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.lastModified
     */
    _lastModified?: fhir.FhirElementArgs;
}
/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export declare class BundleEntryResponse extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The status code returned by processing this entry.
     */
    status: fhir.FhirString | null;
    /**
     * The location header created by processing this operation.
     */
    location?: fhir.FhirUri | undefined;
    /**
     * The etag for the resource, it the operation for the entry produced a versioned resource.
     */
    etag?: fhir.FhirString | undefined;
    /**
     * The date/time that the resource was modified on the server.
     */
    lastModified?: fhir.FhirInstant | undefined;
    /**
     * Default constructor for BundleEntryResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntryResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the BundleEntry type.
 */
export interface BundleEntryArgs extends fhir.BackboneElementArgs {
    /**
     * A series of links that provide context to this entry.
     */
    link?: fhir.BundleLinkArgs[] | undefined;
    /**
     * The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
     */
    fullUrl?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.fullUrl
     */
    _fullUrl?: fhir.FhirElementArgs;
    /**
     * The Resources for the entry.
     */
    resource?: fhir.ResourceArgs | any | undefined;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: fhir.BundleEntrySearchArgs | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction.
     */
    request?: fhir.BundleEntryRequestArgs | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction.
     */
    response?: fhir.BundleEntryResponseArgs | undefined;
}
/**
 * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
 */
export declare class BundleEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A series of links that provide context to this entry.
     */
    link: fhir.BundleLink[];
    /**
     * The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
     */
    fullUrl?: fhir.FhirUri | undefined;
    /**
     * The Resources for the entry.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: fhir.BundleEntrySearch | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction.
     */
    request?: fhir.BundleEntryRequest | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction.
     */
    response?: fhir.BundleEntryResponse | undefined;
    /**
     * Default constructor for BundleEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Access a bundle.entry[].resource as a typed resource
     */
    resourceAs<BundeContentType = fhir.FhirResource>(): BundeContentType | unknown;
}
/**
 * Valid arguments for the Bundle type.
 */
export interface BundleArgs extends fhir.ResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Bundle" | undefined;
    /**
     * Indicates the purpose of this bundle- how it was intended to be used.
     */
    type: fhir.FhirCode<BundleTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
     */
    total?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Bundle.total
     */
    _total?: fhir.FhirElementArgs;
    /**
     * A series of links that provide context to this bundle.
     */
    link?: fhir.BundleLinkArgs[] | undefined;
    /**
     * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
     */
    entry?: fhir.BundleEntryArgs[] | undefined;
    /**
     * This element allows capturing signatures on documents. It also allows signatures on messages, transactions or even query responses. It may support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
     */
    signature?: fhir.SignatureArgs | undefined;
}
/**
 * A container for a collection of resources.
 */
export declare class Bundle extends fhir.Resource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Bundle";
    /**
     * Indicates the purpose of this bundle- how it was intended to be used.
     */
    type: fhir.FhirCode<BundleTypeCodeType> | null;
    /**
     * If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
     */
    total?: fhir.FhirUnsignedInt | undefined;
    /**
     * A series of links that provide context to this bundle.
     */
    link: fhir.BundleLink[];
    /**
     * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
     */
    entry: fhir.BundleEntry[];
    /**
     * This element allows capturing signatures on documents. It also allows signatures on messages, transactions or even query responses. It may support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
     */
    signature?: fhir.Signature | undefined;
    /**
     * Default constructor for Bundle - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Bundle.d.ts.map