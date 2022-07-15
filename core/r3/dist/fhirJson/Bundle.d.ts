import * as fhir from '../fhirJson.js';
/**
 * A series of links that provide context to this bundle.
 */
export interface BundleLink extends fhir.BackboneElement {
    /**
     * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
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
     * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
     */
    mode?: 'include' | 'match' | 'outcome' | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
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
     * The HTTP verb for this entry in either a change history, or a transaction/ transaction response.
     */
    method: 'DELETE' | 'GET' | 'POST' | 'PUT' | null;
    /**
     * Extended properties for primitive element: Bundle.entry.request.method
     */
    _method?: fhir.FhirElement;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT, and the URL would be "Patient/[id]".
     */
    url: string | null;
    /**
     * Extended properties for primitive element: Bundle.entry.request.url
     */
    _url?: fhir.FhirElement;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
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
     * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
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
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.etag
     */
    _etag?: fhir.FhirElement;
    /**
     * This has to match the same time in the meta header if a resource is included.
     */
    lastModified?: string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.lastModified
     */
    _lastModified?: fhir.FhirElement;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     */
    outcome?: fhir.FhirResource | undefined;
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
     * fullUrl may not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the absolute URL may not end with the logical id of the resource (Resource.id), but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then it SHALL end with the Resource.id.
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
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results, and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type: 'batch' | 'batch-response' | 'collection' | 'document' | 'history' | 'message' | 'searchset' | 'transaction' | 'transaction-response' | null;
    /**
     * Extended properties for primitive element: Bundle.type
     */
    _type?: fhir.FhirElement;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
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
     * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
     */
    signature?: fhir.Signature | undefined;
}
//# sourceMappingURL=Bundle.d.ts.map