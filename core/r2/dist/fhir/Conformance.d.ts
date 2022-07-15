import * as fhir from '../fhir.js';
import { TypeRestfulInteractionCodeType } from '../fhirValueSets/TypeRestfulInteractionCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { SearchModifierCodeType } from '../fhirValueSets/SearchModifierCodes.js';
import { VersioningPolicyCodeType } from '../fhirValueSets/VersioningPolicyCodes.js';
import { ConditionalDeleteStatusCodeType } from '../fhirValueSets/ConditionalDeleteStatusCodes.js';
import { SystemRestfulInteractionCodeType } from '../fhirValueSets/SystemRestfulInteractionCodes.js';
import { RestfulConformanceModeCodeType } from '../fhirValueSets/RestfulConformanceModeCodes.js';
import { TransactionModeCodeType } from '../fhirValueSets/TransactionModeCodes.js';
import { MessageSignificanceCategoryCodeType } from '../fhirValueSets/MessageSignificanceCategoryCodes.js';
import { MessageConformanceEventModeCodeType } from '../fhirValueSets/MessageConformanceEventModeCodes.js';
import { DocumentModeCodeType } from '../fhirValueSets/DocumentModeCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { ConformanceStatementKindCodeType } from '../fhirValueSets/ConformanceStatementKindCodes.js';
import { UnknownContentCodeType } from '../fhirValueSets/UnknownContentCodes.js';
/**
 * Valid arguments for the ConformanceContact type.
 */
export interface ConformanceContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the conformance.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.contact.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
}
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export declare class ConformanceContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the conformance.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for ConformanceContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceSoftware type.
 */
export interface ConformanceSoftwareArgs extends fhir.BackboneElementArgs {
    /**
     * Name software is known by.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.software.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The version identifier for the software covered by this statement.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.software.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Date this version of the software released.
     */
    releaseDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.software.releaseDate
     */
    _releaseDate?: fhir.FhirElementArgs;
}
/**
 * Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class ConformanceSoftware extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name software is known by.
     */
    name: fhir.FhirString | null;
    /**
     * The version identifier for the software covered by this statement.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Date this version of the software released.
     */
    releaseDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for ConformanceSoftware - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceSoftwareArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceImplementation type.
 */
export interface ConformanceImplementationArgs extends fhir.BackboneElementArgs {
    /**
     * Information about the specific installation that this conformance statement relates to.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.implementation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.implementation.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class ConformanceImplementation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Information about the specific installation that this conformance statement relates to.
     */
    description: fhir.FhirString | null;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Default constructor for ConformanceImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceImplementationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestSecurityCertificate type.
 */
export interface ConformanceRestSecurityCertificateArgs extends fhir.BackboneElementArgs {
    /**
     * Mime type for certificate.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.certificate.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Actual certificate.
     */
    blob?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.certificate.blob
     */
    _blob?: fhir.FhirElementArgs;
}
/**
 * Certificates associated with security profiles.
 */
export declare class ConformanceRestSecurityCertificate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mime type for certificate.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Actual certificate.
     */
    blob?: fhir.FhirBase64Binary | undefined;
    /**
     * Default constructor for ConformanceRestSecurityCertificate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestSecurityCertificateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestSecurity type.
 */
export interface ConformanceRestSecurityArgs extends fhir.BackboneElementArgs {
    /**
     * Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
     */
    cors?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.cors
     */
    _cors?: fhir.FhirElementArgs;
    /**
     * Types of security services are supported/required by the system.
     */
    service?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * General description of how security works.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Certificates associated with security profiles.
     */
    certificate?: fhir.ConformanceRestSecurityCertificateArgs[] | undefined;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export declare class ConformanceRestSecurity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
     */
    cors?: fhir.FhirBoolean | undefined;
    /**
     * Types of security services are supported/required by the system.
     */
    service: fhir.CodeableConcept[];
    /**
     * General description of how security works.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Certificates associated with security profiles.
     */
    certificate: fhir.ConformanceRestSecurityCertificate[];
    /**
     * Default constructor for ConformanceRestSecurity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestSecurityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestResourceInteraction type.
 */
export interface ConformanceRestResourceInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: fhir.FhirCode<TypeRestfulInteractionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.interaction.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * REST allows a degree of variability in the implementation of RESTful solutions that is useful for exchange partners to be aware of.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.interaction.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * Identifies a restful operation supported by the solution.
 */
export declare class ConformanceRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: fhir.FhirCode<TypeRestfulInteractionCodeType> | null;
    /**
     * REST allows a degree of variability in the implementation of RESTful solutions that is useful for exchange partners to be aware of.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for ConformanceRestResourceInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestResourceInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestResourceSearchParam type.
 */
export interface ConformanceRestResourceSearchParamArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the search parameter used in the interface.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
     */
    definition?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.target
     */
    _target?: (fhir.FhirElementArgs | null)[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: fhir.FhirCode<SearchModifierCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.modifier
     */
    _modifier?: (fhir.FhirElementArgs | null)[];
    /**
     * Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.
     */
    chain?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.chain
     */
    _chain?: (fhir.FhirElementArgs | null)[];
}
/**
 * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
 */
export declare class ConformanceRestResourceSearchParam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the search parameter used in the interface.
     */
    name: fhir.FhirString | null;
    /**
     * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
     */
    definition?: fhir.FhirUri | undefined;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | null;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Types of resource (if a resource is referenced).
     */
    target: fhir.FhirCode[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier: fhir.FhirCode<SearchModifierCodeType>[];
    /**
     * Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.
     */
    chain: fhir.FhirString[];
    /**
     * Default constructor for ConformanceRestResourceSearchParam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestResourceSearchParamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestResource type.
 */
export interface ConformanceRestResourceArgs extends fhir.BackboneElementArgs {
    /**
     * A type of resource exposed via the restful interface.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile?: fhir.ReferenceArgs | undefined;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: fhir.ConformanceRestResourceInteractionArgs[] | null;
    /**
     * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
     */
    versioning?: fhir.FhirCode<VersioningPolicyCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.versioning
     */
    _versioning?: fhir.FhirElementArgs;
    /**
     * A flag for whether the server is able to return past versions as part of the vRead operation.
     */
    readHistory?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.readHistory
     */
    _readHistory?: fhir.FhirElementArgs;
    /**
     * A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
     */
    updateCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.updateCreate
     */
    _updateCreate?: fhir.FhirElementArgs;
    /**
     * A flag that indicates that the server supports conditional create.
     */
    conditionalCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalCreate
     */
    _conditionalCreate?: fhir.FhirElementArgs;
    /**
     * A flag that indicates that the server supports conditional update.
     */
    conditionalUpdate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalUpdate
     */
    _conditionalUpdate?: fhir.FhirElementArgs;
    /**
     * A code that indicates how the server supports conditional delete.
     */
    conditionalDelete?: fhir.FhirCode<ConditionalDeleteStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalDelete
     */
    _conditionalDelete?: fhir.FhirElementArgs;
    /**
     * A list of _include values supported by the server.
     */
    searchInclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchInclude
     */
    _searchInclude?: (fhir.FhirElementArgs | null)[];
    /**
     * A list of _revinclude (reverse include) values supported by the server.
     */
    searchRevInclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchRevInclude
     */
    _searchRevInclude?: (fhir.FhirElementArgs | null)[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: fhir.ConformanceRestResourceSearchParamArgs[] | undefined;
}
/**
 * A specification of the restful capabilities of the solution for a specific resource type.
 */
export declare class ConformanceRestResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A type of resource exposed via the restful interface.
     */
    type: fhir.FhirCode | null;
    /**
     * A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: fhir.ConformanceRestResourceInteraction[];
    /**
     * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
     */
    versioning?: fhir.FhirCode<VersioningPolicyCodeType> | undefined;
    /**
     * A flag for whether the server is able to return past versions as part of the vRead operation.
     */
    readHistory?: fhir.FhirBoolean | undefined;
    /**
     * A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
     */
    updateCreate?: fhir.FhirBoolean | undefined;
    /**
     * A flag that indicates that the server supports conditional create.
     */
    conditionalCreate?: fhir.FhirBoolean | undefined;
    /**
     * A flag that indicates that the server supports conditional update.
     */
    conditionalUpdate?: fhir.FhirBoolean | undefined;
    /**
     * A code that indicates how the server supports conditional delete.
     */
    conditionalDelete?: fhir.FhirCode<ConditionalDeleteStatusCodeType> | undefined;
    /**
     * A list of _include values supported by the server.
     */
    searchInclude: fhir.FhirString[];
    /**
     * A list of _revinclude (reverse include) values supported by the server.
     */
    searchRevInclude: fhir.FhirString[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam: fhir.ConformanceRestResourceSearchParam[];
    /**
     * Default constructor for ConformanceRestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestInteraction type.
 */
export interface ConformanceRestInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: fhir.FhirCode<SystemRestfulInteractionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.interaction.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.interaction.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * A specification of restful operations supported by the system.
 */
export declare class ConformanceRestInteraction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: fhir.FhirCode<SystemRestfulInteractionCodeType> | null;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for ConformanceRestInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRestOperation type.
 */
export interface ConformanceRestOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The name of a query, which is used in the _query parameter when the query is called.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.operation.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Where the formal definition can be found.
     */
    definition: fhir.ReferenceArgs | null;
}
/**
 * Definition of an operation or a named query and with its parameters and their meaning and type.
 */
export declare class ConformanceRestOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of a query, which is used in the _query parameter when the query is called.
     */
    name: fhir.FhirString | null;
    /**
     * Where the formal definition can be found.
     */
    definition: fhir.Reference | null;
    /**
     * Default constructor for ConformanceRestOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceRest type.
 */
export interface ConformanceRestArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.
     */
    mode: fhir.FhirCode<RestfulConformanceModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.ConformanceRestSecurityArgs | undefined;
    /**
     * A specification of the restful capabilities of the solution for a specific resource type.
     */
    resource: fhir.ConformanceRestResourceArgs[] | null;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhir.ConformanceRestInteractionArgs[] | undefined;
    /**
     * A code that indicates how transactions are supported.
     */
    transactionMode?: fhir.FhirCode<TransactionModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.transactionMode
     */
    _transactionMode?: fhir.FhirElementArgs;
    /**
     * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: fhir.ConformanceRestResourceSearchParamArgs[] | undefined;
    /**
     * Definition of an operation or a named query and with its parameters and their meaning and type.
     */
    operation?: fhir.ConformanceRestOperationArgs[] | undefined;
    /**
     * An absolute URI which is a reference to the definition of a compartment hosted by the system.
     */
    compartment?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.compartment
     */
    _compartment?: (fhir.FhirElementArgs | null)[];
}
/**
 * A definition of the restful capabilities of the solution, if any.
 */
export declare class ConformanceRest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.
     */
    mode: fhir.FhirCode<RestfulConformanceModeCodeType> | null;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.ConformanceRestSecurity | undefined;
    /**
     * A specification of the restful capabilities of the solution for a specific resource type.
     */
    resource: fhir.ConformanceRestResource[];
    /**
     * A specification of restful operations supported by the system.
     */
    interaction: fhir.ConformanceRestInteraction[];
    /**
     * A code that indicates how transactions are supported.
     */
    transactionMode?: fhir.FhirCode<TransactionModeCodeType> | undefined;
    /**
     * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam: fhir.ConformanceRestResourceSearchParam[];
    /**
     * Definition of an operation or a named query and with its parameters and their meaning and type.
     */
    operation: fhir.ConformanceRestOperation[];
    /**
     * An absolute URI which is a reference to the definition of a compartment hosted by the system.
     */
    compartment: fhir.FhirUri[];
    /**
     * Default constructor for ConformanceRest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceRestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceMessagingEndpoint type.
 */
export interface ConformanceMessagingEndpointArgs extends fhir.BackboneElementArgs {
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.CodingArgs | null;
    /**
     * The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.endpoint.address
     */
    _address?: fhir.FhirElementArgs;
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export declare class ConformanceMessagingEndpoint extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.Coding | null;
    /**
     * The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: fhir.FhirUri | null;
    /**
     * Default constructor for ConformanceMessagingEndpoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceMessagingEndpointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceMessagingEvent type.
 */
export interface ConformanceMessagingEventArgs extends fhir.BackboneElementArgs {
    /**
     * A coded identifier of a supported messaging event.
     */
    code: fhir.CodingArgs | null;
    /**
     * The impact of the content of the message.
     */
    category?: fhir.FhirCode<MessageSignificanceCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: fhir.FhirCode<MessageConformanceEventModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * A resource associated with the event.  This is the resource that defines the event.
     */
    focus: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.focus
     */
    _focus?: fhir.FhirElementArgs;
    /**
     * Information about the request for this event.
     */
    request: fhir.ReferenceArgs | null;
    /**
     * Information about the response for this event.
     */
    response: fhir.ReferenceArgs | null;
    /**
     * Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * A description of the solution's support for an event at this end-point.
 */
export declare class ConformanceMessagingEvent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A coded identifier of a supported messaging event.
     */
    code: fhir.Coding | null;
    /**
     * The impact of the content of the message.
     */
    category?: fhir.FhirCode<MessageSignificanceCategoryCodeType> | undefined;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: fhir.FhirCode<MessageConformanceEventModeCodeType> | null;
    /**
     * A resource associated with the event.  This is the resource that defines the event.
     */
    focus: fhir.FhirCode | null;
    /**
     * Information about the request for this event.
     */
    request: fhir.Reference | null;
    /**
     * Information about the response for this event.
     */
    response: fhir.Reference | null;
    /**
     * Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for ConformanceMessagingEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceMessagingEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceMessaging type.
 */
export interface ConformanceMessagingArgs extends fhir.BackboneElementArgs {
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: fhir.ConformanceMessagingEndpointArgs[] | undefined;
    /**
     * Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
     */
    reliableCache?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.reliableCache
     */
    _reliableCache?: fhir.FhirElementArgs;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * A description of the solution's support for an event at this end-point.
     */
    event: fhir.ConformanceMessagingEventArgs[] | null;
}
/**
 * A description of the messaging capabilities of the solution.
 */
export declare class ConformanceMessaging extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint: fhir.ConformanceMessagingEndpoint[];
    /**
     * Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
     */
    reliableCache?: fhir.FhirUnsignedInt | undefined;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * A description of the solution's support for an event at this end-point.
     */
    event: fhir.ConformanceMessagingEvent[];
    /**
     * Default constructor for ConformanceMessaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceMessagingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConformanceDocument type.
 */
export interface ConformanceDocumentArgs extends fhir.BackboneElementArgs {
    /**
     * Mode of this document declaration - whether application is producer or consumer.
     */
    mode: fhir.FhirCode<DocumentModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.document.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.document.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * A constraint on a resource used in the document.
     */
    profile: fhir.ReferenceArgs | null;
}
/**
 * A document definition.
 */
export declare class ConformanceDocument extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mode of this document declaration - whether application is producer or consumer.
     */
    mode: fhir.FhirCode<DocumentModeCodeType> | null;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * A constraint on a resource used in the document.
     */
    profile: fhir.Reference | null;
    /**
     * Default constructor for ConformanceDocument - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceDocumentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Conformance type.
 */
export interface ConformanceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Conformance" | undefined;
    /**
     * An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the conformance statement.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The status of this conformance statement.
     */
    status?: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the conformance.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.ConformanceContactArgs[] | undefined;
    /**
     * The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Explains why this conformance statement is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Allow searching the 3 modes.
     */
    kind: fhir.FhirCode<ConformanceStatementKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.ConformanceSoftwareArgs | undefined;
    /**
     * Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.ConformanceImplementationArgs | undefined;
    /**
     * The version of the FHIR specification on which this conformance statement is based.
     */
    fhirVersion: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.fhirVersion
     */
    _fhirVersion?: fhir.FhirElementArgs;
    /**
     * A code that indicates whether the application accepts unknown elements or extensions when reading resources.
     */
    acceptUnknown: fhir.FhirCode<UnknownContentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Conformance.acceptUnknown
     */
    _acceptUnknown?: fhir.FhirElementArgs;
    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.format
     */
    _format?: (fhir.FhirElementArgs | null)[];
    /**
     * A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile?: fhir.ReferenceArgs[] | undefined;
    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest?: fhir.ConformanceRestArgs[] | undefined;
    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging?: fhir.ConformanceMessagingArgs[] | undefined;
    /**
     * A document definition.
     */
    document?: fhir.ConformanceDocumentArgs[] | undefined;
}
/**
 * A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class Conformance extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Conformance";
    /**
     * An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A free text natural language name identifying the conformance statement.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The status of this conformance statement.
     */
    status?: fhir.FhirCode<ConformanceResourceStatusCodeType> | undefined;
    /**
     * A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the conformance.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.ConformanceContact[];
    /**
     * The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.
     */
    date: fhir.FhirDateTime | null;
    /**
     * A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Explains why this conformance statement is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * Allow searching the 3 modes.
     */
    kind: fhir.FhirCode<ConformanceStatementKindCodeType> | null;
    /**
     * Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.ConformanceSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.ConformanceImplementation | undefined;
    /**
     * The version of the FHIR specification on which this conformance statement is based.
     */
    fhirVersion: fhir.FhirId | null;
    /**
     * A code that indicates whether the application accepts unknown elements or extensions when reading resources.
     */
    acceptUnknown: fhir.FhirCode<UnknownContentCodeType> | null;
    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format: fhir.FhirCode[];
    /**
     * A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile: fhir.Reference[];
    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest: fhir.ConformanceRest[];
    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging: fhir.ConformanceMessaging[];
    /**
     * A document definition.
     */
    document: fhir.ConformanceDocument[];
    /**
     * Default constructor for Conformance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConformanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Conformance.d.ts.map