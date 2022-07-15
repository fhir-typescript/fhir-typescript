import * as fhir from '../fhir.js';
import { SearchEntryModeCodeType } from '../fhirValueSets/SearchEntryModeCodes.js';
import { HttpVerbCodeType } from '../fhirValueSets/HttpVerbCodes.js';
import { BundleTypeCodeType } from '../fhirValueSets/BundleTypeCodes.js';
/**
 * Valid arguments for the BundleLink type.
 */
export interface BundleLinkArgs extends fhir.BackboneElementArgs {
    /**
     * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
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
     * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1).
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
     * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
     */
    mode?: fhir.FhirCode<SearchEntryModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.search.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
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
     * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
     */
    mode?: fhir.FhirCode<SearchEntryModeCodeType> | undefined;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
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
     * The HTTP verb for this entry in either a change history, or a transaction/ transaction response.
     */
    method: fhir.FhirCode<HttpVerbCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.method
     */
    _method?: fhir.FhirElementArgs;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT, and the URL would be "Patient/[id]".
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.request.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
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
     * The HTTP verb for this entry in either a change history, or a transaction/ transaction response.
     */
    method: fhir.FhirCode<HttpVerbCodeType> | null;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT, and the URL would be "Patient/[id]".
     */
    url: fhir.FhirUri | null;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
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
     * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
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
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.etag
     */
    _etag?: fhir.FhirElementArgs;
    /**
     * This has to match the same time in the meta header if a resource is included.
     */
    lastModified?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.entry.response.lastModified
     */
    _lastModified?: fhir.FhirElementArgs;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     */
    outcome?: fhir.ResourceArgs | any | undefined;
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
     * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may contain the standard HTTP description associated with the status code.
     */
    status: fhir.FhirString | null;
    /**
     * The location header created by processing this operation.
     */
    location?: fhir.FhirUri | undefined;
    /**
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: fhir.FhirString | undefined;
    /**
     * This has to match the same time in the meta header if a resource is included.
     */
    lastModified?: fhir.FhirInstant | undefined;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     */
    outcome?: fhir.FhirResource | undefined;
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
     * fullUrl may not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the absolute URL may not end with the logical id of the resource (Resource.id), but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then it SHALL end with the Resource.id.
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
     * fullUrl may not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the absolute URL may not end with the logical id of the resource (Resource.id), but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then it SHALL end with the Resource.id.
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
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results, and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type: fhir.FhirCode<BundleTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Bundle.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
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
     * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
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
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results, and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type: fhir.FhirCode<BundleTypeCodeType> | null;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
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
     * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
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