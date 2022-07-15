import * as fhir from '../fhirJson.js';
/**
 * A series of links that provide context to this bundle.
 */
export interface BundleLink extends fhir.BackboneElement {
    /**
     * A name which details the functional use for this link - see [[http://www.iana.org/assignments/link-relations/link-relations.xhtml]].
     */
    relation: string | null;
    /**
     * Extended properties for primitive element: Bundle.link.relation
     */
    _relation?: fhir.FhirElement;
    /**
     * The reference details for the link.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Bundle.link.url
     */
    _url?: fhir.FhirElement;
}
/**
 * Information about the search process that lead to the creation of this entry.
 */
export interface BundleEntrySearch extends fhir.BackboneElement {
    /**
     * Why this entry is in the result set - whether it's included as a match or because of an _include requirement.
     */
    mode?: 'include' | 'match' | 'outcome' | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * When searching, the server's search ranking score for the entry.
     */
    score?: number | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.score
     */
    _score?: fhir.FhirElement;
}
/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export interface BundleEntryRequest extends fhir.BackboneElement {
    /**
     * The HTTP verb for this entry in either a update history, or a transaction/ transaction response.
     */
    method: 'DELETE' | 'GET' | 'POST' | 'PUT' | null;
    /**
     * Extended properties for primitive element: Bundle.entry.request.method
     */
    _method?: fhir.FhirElement;
    /**
     * The URL for this entry, relative to the root (the address to which the request is posted).
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Bundle.entry.request.url
     */
    _url?: fhir.FhirElement;
    /**
     * If the ETag values match, return a 304 Not modified status. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifNoneMatch
     */
    _ifNoneMatch?: fhir.FhirElement;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifModifiedSince
     */
    _ifModifiedSince?: fhir.FhirElement;
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifMatch
     */
    _ifMatch?: fhir.FhirElement;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */
    ifNoneExist?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.ifNoneExist
     */
    _ifNoneExist?: fhir.FhirElement;
}
/**
 * Additional information about how this entry should be processed as part of a transaction.
 */
export interface BundleEntryResponse extends fhir.BackboneElement {
    /**
     * The status code returned by processing this entry.
     */
    status: string | null;
    /**
     * Extended properties for primitive element: Bundle.entry.response.status
     */
    _status?: fhir.FhirElement;
    /**
     * The location header created by processing this operation.
     */
    location?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.location
     */
    _location?: fhir.FhirElement;
    /**
     * The etag for the resource, it the operation for the entry produced a versioned resource.
     */
    etag?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.etag
     */
    _etag?: fhir.FhirElement;
    /**
     * The date/time that the resource was modified on the server.
     */
    lastModified?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.lastModified
     */
    _lastModified?: fhir.FhirElement;
}
/**
 * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
 */
export interface BundleEntry extends fhir.BackboneElement {
    /**
     * A series of links that provide context to this entry.
     */
    link?: (fhir.BundleLink | null)[] | undefined;
    /**
     * The Absolute URL for the resource. This must be provided for all resources. The fullUrl SHALL not disagree with the id in the resource. The fullUrl is a version independent reference to the resource.
     */
    fullUrl?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.fullUrl
     */
    _fullUrl?: fhir.FhirElement;
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
}
/**
 * A container for a collection of resources.
 */
export interface Bundle extends fhir.Resource {
    /**
     * Resource Type Name
     */
    resourceType: "Bundle" | null;
    /**
     * Indicates the purpose of this bundle- how it was intended to be used.
     */
    type: 'batch' | 'batch-response' | 'collection' | 'document' | 'history' | 'message' | 'searchset' | 'transaction' | 'transaction-response' | null;
    /**
     * Extended properties for primitive element: Bundle.type
     */
    _type?: fhir.FhirElement;
    /**
     * If a set of search matches, this is the total number of matches for the search (as opposed to the number of results in this bundle).
     */
    total?: number | undefined;
    /**
     * Extended properties for primitive element: Bundle.total
     */
    _total?: fhir.FhirElement;
    /**
     * A series of links that provide context to this bundle.
     */
    link?: (fhir.BundleLink | null)[] | undefined;
    /**
     * An entry in a bundle resource - will either contain a resource, or information about a resource (transactions and history only).
     */
    entry?: (fhir.BundleEntry | null)[] | undefined;
    /**
     * This element allows capturing signatures on documents. It also allows signatures on messages, transactions or even query responses. It may support content-authentication, non-repudiation or other business cases. This is primarily relevant where the bundle may travel through multiple hops or via other mechanisms where HTTPS non-repudiation is insufficient.
     */
    signature?: fhir.Signature | undefined;
}
//# sourceMappingURL=Bundle.d.ts.map