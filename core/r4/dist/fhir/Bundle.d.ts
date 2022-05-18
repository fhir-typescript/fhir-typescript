import * as fhir from '../fhir.js';
import { SearchEntryModeCodingType } from '../fhirValueSets/SearchEntryModeCodings.js';
import { SearchEntryModeCodeType } from '../fhirValueSets/SearchEntryModeCodes.js';
import { HttpVerbCodingType } from '../fhirValueSets/HttpVerbCodings.js';
import { HttpVerbCodeType } from '../fhirValueSets/HttpVerbCodes.js';
import { BundleTypeCodingType } from '../fhirValueSets/BundleTypeCodings.js';
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
     * The reference details for the link.
     */
    url: fhir.FhirUri | string | undefined;
}
/**
 * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
 * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
 * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
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
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the BundleEntrySearch type.
 */
export interface BundleEntrySearchArgs extends fhir.BackboneElementArgs {
    /**
     * There is only one mode. In some corner cases, a resource may be included because it is both a match and an include. In these circumstances, 'match' takes precedence.
     */
    mode?: SearchEntryModeCodeType | undefined;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
     * See [Patient Match](patient-operation-match.html) for the EMPI search which relates to this element.
     */
    score?: fhir.FhirDecimal | number | undefined;
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
    mode?: SearchEntryModeCodeType | undefined;
    /**
     * Servers are not required to return a ranking score. 1 is most relevant, and 0 is least relevant. Often, search results are sorted by score, but the client may specify a different sort order.
     * See [Patient Match](patient-operation-match.html) for the EMPI search which relates to this element.
     */
    score?: fhir.FhirDecimal | undefined;
    /**
     * Default constructor for BundleEntrySearch - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntrySearchArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (Bundle.entry.search.mode)
     */
    static modeRequiredCoding(): SearchEntryModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the BundleEntryRequest type.
 */
export interface BundleEntryRequestArgs extends fhir.BackboneElementArgs {
    /**
     * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
     */
    method: HttpVerbCodeType | null;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT and the URL would be "Patient/[id]".
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifNoneMatch?: fhir.FhirString | string | undefined;
    /**
     * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.html#cread).
     */
    ifModifiedSince?: fhir.FhirInstant | string | undefined;
    /**
     * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Contention"](http.html#concurrency).
     */
    ifMatch?: fhir.FhirString | string | undefined;
    /**
     * Instruct the server not to perform the create if a specified resource already exists. For further information, see the API documentation for ["Conditional Create"](http.html#ccreate). This is just the query portion of the URL - what follows the "?" (not including the "?").
     */
    ifNoneExist?: fhir.FhirString | string | undefined;
}
/**
 * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
 */
export declare class BundleEntryRequest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates the HTTP action that occurred.
     */
    method: HttpVerbCodeType | null;
    /**
     * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method would be PUT and the URL would be "Patient/[id]".
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
     * Required-bound Value Set for method (Bundle.entry.request.method)
     */
    static methodRequiredCoding(): HttpVerbCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * The location header created by processing this operation, populated if the operation returns a location.
     */
    location?: fhir.FhirUri | string | undefined;
    /**
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: fhir.FhirString | string | undefined;
    /**
     * This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
     */
    lastModified?: fhir.FhirInstant | string | undefined;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     * This outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.
     */
    outcome?: fhir.ResourceArgs | any | undefined;
}
/**
 * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
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
     * The location header created by processing this operation, populated if the operation returns a location.
     */
    location?: fhir.FhirUri | undefined;
    /**
     * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
     */
    etag?: fhir.FhirString | undefined;
    /**
     * This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
     */
    lastModified?: fhir.FhirInstant | undefined;
    /**
     * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except that the resource is always returned whether or not the outcome is returned.
     * This outcome is not used for error responses in batch/transaction, only for hints and warnings. In a batch operation, the error will be in Bundle.entry.response, and for transaction, there will be a single OperationOutcome instead of a bundle in the case of an error.
     */
    outcome?: fhir.FhirResource | undefined;
    /**
     * Default constructor for BundleEntryResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntryResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * fullUrl might not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then the 'id' portion of the fullUrl SHALL end with the Resource.id.
     * Note that the fullUrl is not the same as the canonical URL - it's an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).
     */
    fullUrl?: fhir.FhirUri | string | undefined;
    /**
     * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
     */
    resource?: fhir.ResourceArgs | any | undefined;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: fhir.BundleEntrySearchArgs | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
     */
    request?: fhir.BundleEntryRequestArgs | undefined;
    /**
     * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
     */
    response?: fhir.BundleEntryResponseArgs | undefined;
}
/**
 * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
 */
export declare class BundleEntry extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A series of links that provide context to this entry.
     */
    link?: fhir.BundleLink[];
    /**
     * fullUrl might not be [unique in the context of a resource](bundle.html#bundle-unique). Note that since [FHIR resources do not need to be served through the FHIR API](references.html), the fullURL might be a URN or an absolute URL that does not end with the logical id of the resource (Resource.id). However, but if the fullUrl does look like a RESTful server URL (e.g. meets the [regex](references.html#regex), then the 'id' portion of the fullUrl SHALL end with the Resource.id.
     * Note that the fullUrl is not the same as the canonical URL - it's an absolute url for an endpoint serving the resource (these will happen to have the same value on the canonical server for the resource with the canonical URL).
     */
    fullUrl?: fhir.FhirUri | undefined;
    /**
     * The Resource for the entry. The purpose/meaning of the resource is determined by the Bundle.type.
     */
    resource?: fhir.FhirResource | undefined;
    /**
     * Information about the search process that lead to the creation of this entry.
     */
    search?: fhir.BundleEntrySearch | undefined;
    /**
     * Additional information about how this entry should be processed as part of a transaction or batch.  For history, it shows how the entry was processed to create the version contained in the entry.
     */
    request?: fhir.BundleEntryRequest | undefined;
    /**
     * Indicates the results of processing the corresponding 'request' entry in the batch or transaction being responded to or what the results of an operation where when returning history.
     */
    response?: fhir.BundleEntryResponse | undefined;
    /**
     * Default constructor for BundleEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type: BundleTypeCodeType | null;
    /**
     * For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.
     * Usage:
     * * document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time
     * * message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message
     * * history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates
     * * searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query
     * * transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning
     * The timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.
     */
    timestamp?: fhir.FhirInstant | string | undefined;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
     */
    total?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
     * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
     * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
     */
    link?: fhir.BundleLinkArgs[] | undefined;
    /**
     * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
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
     * Persistent identity generally only matters for batches of type Document, Message, and Collection. It would not normally be populated for search and history results and servers ignore Bundle.identifier when processing batches and transactions. For Documents  the .identifier SHALL be populated such that the .identifier is globally unique.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * It's possible to use a bundle for other purposes (e.g. a document can be accepted as a transaction). This is primarily defined so that there can be specific rules for some of the bundle types.
     */
    type: BundleTypeCodeType | null;
    /**
     * For many bundles, the timestamp is equal to .meta.lastUpdated, because they are not stored (e.g. search results). When a bundle is placed in a persistent store, .meta.lastUpdated will be usually be changed by the server. When the bundle is a message, a middleware agent altering the message (even if not stored) SHOULD update .meta.lastUpdated. .timestamp is used to track the original time of the Bundle, and SHOULD be populated.
     * Usage:
     * * document : the date the document was created. Note: the composition may predate the document, or be associated with multiple documents. The date of the composition - the authoring time - may be earlier than the document assembly time
     * * message : the date that the content of the message was assembled. This date is not changed by middleware engines unless they add additional data that changes the meaning of the time of the message
     * * history : the date that the history was assembled. This time would be used as the _since time to ask for subsequent updates
     * * searchset : the time that the search set was assembled. Note that different pages MAY have different timestamps but need not. Having different timestamps does not imply that subsequent pages will represent or include changes made since the initial query
     * * transaction | transaction-response | batch | batch-response | collection : no particular assigned meaning
     * The timestamp value should be greater than the lastUpdated and other timestamps in the resources in the bundle, and it should be equal or earlier than the .meta.lastUpdated on the Bundle itself.
     */
    timestamp?: fhir.FhirInstant | undefined;
    /**
     * Only used if the bundle is a search result set. The total does not include resources such as OperationOutcome and included resources, only the total number of matching resources.
     */
    total?: fhir.FhirUnsignedInt | undefined;
    /**
     * Both Bundle.link and Bundle.entry.link are defined to support providing additional context when Bundles are used (e.g. [HATEOAS](http://en.wikipedia.org/wiki/HATEOAS)).
     * Bundle.entry.link corresponds to links found in the HTTP header if the resource in the entry was [read](http.html#read) directly.
     * This specification defines some specific uses of Bundle.link for [searching](search.html#conformance) and [paging](http.html#paging), but no specific uses for Bundle.entry.link, and no defined function in a transaction - the meaning is implementation specific.
     */
    link?: fhir.BundleLink[];
    /**
     * An entry in a bundle resource - will either contain a resource or information about a resource (transactions and history only).
     */
    entry?: fhir.BundleEntry[];
    /**
     * The signature could be created by the "author" of the bundle or by the originating device.   Requirements around inclusion of a signature, verification of signatures and treatment of signed/non-signed bundles is implementation-environment specific.
     */
    signature?: fhir.Signature | undefined;
    /**
     * Default constructor for Bundle - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BundleArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (Bundle.type)
     */
    static typeRequiredCoding(): BundleTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Bundle.d.ts.map