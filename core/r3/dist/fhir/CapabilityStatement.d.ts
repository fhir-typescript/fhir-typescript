import * as fhir from '../fhir.js';
import { TypeRestfulInteractionCodeType } from '../fhirValueSets/TypeRestfulInteractionCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { VersioningPolicyCodeType } from '../fhirValueSets/VersioningPolicyCodes.js';
import { ConditionalReadStatusCodeType } from '../fhirValueSets/ConditionalReadStatusCodes.js';
import { ConditionalDeleteStatusCodeType } from '../fhirValueSets/ConditionalDeleteStatusCodes.js';
import { ReferenceHandlingPolicyCodeType } from '../fhirValueSets/ReferenceHandlingPolicyCodes.js';
import { SystemRestfulInteractionCodeType } from '../fhirValueSets/SystemRestfulInteractionCodes.js';
import { RestfulCapabilityModeCodeType } from '../fhirValueSets/RestfulCapabilityModeCodes.js';
import { EventCapabilityModeCodeType } from '../fhirValueSets/EventCapabilityModeCodes.js';
import { MessageSignificanceCategoryCodeType } from '../fhirValueSets/MessageSignificanceCategoryCodes.js';
import { DocumentModeCodeType } from '../fhirValueSets/DocumentModeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CapabilityStatementKindCodeType } from '../fhirValueSets/CapabilityStatementKindCodes.js';
import { UnknownContentCodeType } from '../fhirValueSets/UnknownContentCodes.js';
/**
 * Valid arguments for the CapabilityStatementSoftware type.
 */
export interface CapabilityStatementSoftwareArgs extends fhir.BackboneElementArgs {
    /**
     * Name software is known by.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.releaseDate
     */
    _releaseDate?: fhir.FhirElementArgs;
}
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export declare class CapabilityStatementSoftware extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name software is known by.
     */
    name: fhir.FhirString | null;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for CapabilityStatementSoftware - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementSoftwareArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementImplementation type.
 */
export interface CapabilityStatementImplementationArgs extends fhir.BackboneElementArgs {
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export declare class CapabilityStatementImplementation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description: fhir.FhirString | null;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Default constructor for CapabilityStatementImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementImplementationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestSecurityCertificate type.
 */
export interface CapabilityStatementRestSecurityCertificateArgs extends fhir.BackboneElementArgs {
    /**
     * Mime type for a certificate.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.certificate.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Actual certificate.
     */
    blob?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.certificate.blob
     */
    _blob?: fhir.FhirElementArgs;
}
/**
 * Certificates associated with security profiles.
 */
export declare class CapabilityStatementRestSecurityCertificate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mime type for a certificate.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Actual certificate.
     */
    blob?: fhir.FhirBase64Binary | undefined;
    /**
     * Default constructor for CapabilityStatementRestSecurityCertificate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestSecurityCertificateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestSecurity type.
 */
export interface CapabilityStatementRestSecurityArgs extends fhir.BackboneElementArgs {
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.cors
     */
    _cors?: fhir.FhirElementArgs;
    /**
     * Types of security services that are supported/required by the system.
     */
    service?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * General description of how security works.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Certificates associated with security profiles.
     */
    certificate?: fhir.CapabilityStatementRestSecurityCertificateArgs[] | undefined;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export declare class CapabilityStatementRestSecurity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: fhir.FhirBoolean | undefined;
    /**
     * Types of security services that are supported/required by the system.
     */
    service: fhir.CodeableConcept[];
    /**
     * General description of how security works.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Certificates associated with security profiles.
     */
    certificate: fhir.CapabilityStatementRestSecurityCertificate[];
    /**
     * Default constructor for CapabilityStatementRestSecurity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestSecurityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestResourceInteraction type.
 */
export interface CapabilityStatementRestResourceInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: fhir.FhirCode<TypeRestfulInteractionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.interaction.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.interaction.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * Identifies a restful operation supported by the solution.
 */
export declare class CapabilityStatementRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: fhir.FhirCode<TypeRestfulInteractionCodeType> | null;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestResourceSearchParam type.
 */
export interface CapabilityStatementRestResourceSearchParamArgs extends fhir.BackboneElementArgs {
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical url. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource.
     */
    definition?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
 */
export declare class CapabilityStatementRestResourceSearchParam extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name: fhir.FhirString | null;
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical url. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource.
     */
    definition?: fhir.FhirUri | undefined;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: fhir.FhirCode<SearchParamTypeCodeType> | null;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceSearchParam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceSearchParamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestResource type.
 */
export interface CapabilityStatementRestResourceArgs extends fhir.BackboneElementArgs {
    /**
     * A type of resource exposed via the restful interface.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: fhir.ReferenceArgs | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: fhir.CapabilityStatementRestResourceInteractionArgs[] | null;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: fhir.FhirCode<VersioningPolicyCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.versioning
     */
    _versioning?: fhir.FhirElementArgs;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.readHistory
     */
    _readHistory?: fhir.FhirElementArgs;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.updateCreate
     */
    _updateCreate?: fhir.FhirElementArgs;
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalCreate
     */
    _conditionalCreate?: fhir.FhirElementArgs;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: fhir.FhirCode<ConditionalReadStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalRead
     */
    _conditionalRead?: fhir.FhirElementArgs;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalUpdate
     */
    _conditionalUpdate?: fhir.FhirElementArgs;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: fhir.FhirCode<ConditionalDeleteStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalDelete
     */
    _conditionalDelete?: fhir.FhirElementArgs;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: fhir.FhirCode<ReferenceHandlingPolicyCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.referencePolicy
     */
    _referencePolicy?: (fhir.FhirElementArgs | null)[];
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchInclude
     */
    _searchInclude?: (fhir.FhirElementArgs | null)[];
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchRevInclude
     */
    _searchRevInclude?: (fhir.FhirElementArgs | null)[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParamArgs[] | undefined;
}
/**
 * Max of one repetition per resource type.
 */
export declare class CapabilityStatementRestResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A type of resource exposed via the restful interface.
     */
    type: fhir.FhirCode | null;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: fhir.CapabilityStatementRestResourceInteraction[];
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: fhir.FhirCode<VersioningPolicyCodeType> | undefined;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: fhir.FhirBoolean | undefined;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: fhir.FhirBoolean | undefined;
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: fhir.FhirBoolean | undefined;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: fhir.FhirCode<ConditionalReadStatusCodeType> | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: fhir.FhirBoolean | undefined;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: fhir.FhirCode<ConditionalDeleteStatusCodeType> | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy: fhir.FhirCode<ReferenceHandlingPolicyCodeType>[];
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude: fhir.FhirString[];
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude: fhir.FhirString[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam: fhir.CapabilityStatementRestResourceSearchParam[];
    /**
     * Default constructor for CapabilityStatementRestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestInteraction type.
 */
export interface CapabilityStatementRestInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: fhir.FhirCode<SystemRestfulInteractionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.interaction.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.interaction.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * A specification of restful operations supported by the system.
 */
export declare class CapabilityStatementRestInteraction extends fhir.BackboneElement {
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
     * Default constructor for CapabilityStatementRestInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRestOperation type.
 */
export interface CapabilityStatementRestOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.operation.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: fhir.ReferenceArgs | null;
}
/**
 * Definition of an operation or a named query together with its parameters and their meaning and type.
 */
export declare class CapabilityStatementRestOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: fhir.FhirString | null;
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: fhir.Reference | null;
    /**
     * Default constructor for CapabilityStatementRestOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementRest type.
 */
export interface CapabilityStatementRestArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: fhir.FhirCode<RestfulCapabilityModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.CapabilityStatementRestSecurityArgs | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: fhir.CapabilityStatementRestResourceArgs[] | undefined;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhir.CapabilityStatementRestInteractionArgs[] | undefined;
    /**
     * Typically, the only search parameters supported for all searchse are those that apply to all resources - tags, profiles, text search etc.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParamArgs[] | undefined;
    /**
     * Definition of an operation or a named query together with its parameters and their meaning and type.
     */
    operation?: fhir.CapabilityStatementRestOperationArgs[] | undefined;
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.compartment
     */
    _compartment?: (fhir.FhirElementArgs | null)[];
}
/**
 * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 */
export declare class CapabilityStatementRest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: fhir.FhirCode<RestfulCapabilityModeCodeType> | null;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.CapabilityStatementRestSecurity | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource: fhir.CapabilityStatementRestResource[];
    /**
     * A specification of restful operations supported by the system.
     */
    interaction: fhir.CapabilityStatementRestInteraction[];
    /**
     * Typically, the only search parameters supported for all searchse are those that apply to all resources - tags, profiles, text search etc.
     */
    searchParam: fhir.CapabilityStatementRestResourceSearchParam[];
    /**
     * Definition of an operation or a named query together with its parameters and their meaning and type.
     */
    operation: fhir.CapabilityStatementRestOperation[];
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment: fhir.FhirUri[];
    /**
     * Default constructor for CapabilityStatementRest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementMessagingEndpoint type.
 */
export interface CapabilityStatementMessagingEndpointArgs extends fhir.BackboneElementArgs {
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.CodingArgs | null;
    /**
     * The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.endpoint.address
     */
    _address?: fhir.FhirElementArgs;
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export declare class CapabilityStatementMessagingEndpoint extends fhir.BackboneElement {
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
     * Default constructor for CapabilityStatementMessagingEndpoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingEndpointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementMessagingSupportedMessage type.
 */
export interface CapabilityStatementMessagingSupportedMessageArgs extends fhir.BackboneElementArgs {
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: fhir.FhirCode<EventCapabilityModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.supportedMessage.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: fhir.ReferenceArgs | null;
}
/**
 * This is a proposed alternative to the messaging.event structure.
 */
export declare class CapabilityStatementMessagingSupportedMessage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: fhir.FhirCode<EventCapabilityModeCodeType> | null;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: fhir.Reference | null;
    /**
     * Default constructor for CapabilityStatementMessagingSupportedMessage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingSupportedMessageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementMessagingEvent type.
 */
export interface CapabilityStatementMessagingEventArgs extends fhir.BackboneElementArgs {
    /**
     * A coded identifier of a supported messaging event.
     */
    code: fhir.CodingArgs | null;
    /**
     * The impact of the content of the message.
     */
    category?: fhir.FhirCode<MessageSignificanceCategoryCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.category
     */
    _category?: fhir.FhirElementArgs;
    /**
     * The mode of this event declaration - whether an application is a sender or receiver.
     */
    mode: fhir.FhirCode<EventCapabilityModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * This SHALL be provided if the event type supports multiple different resource types.
     */
    focus: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.focus
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
     * Extended properties for primitive element: CapabilityStatement.messaging.event.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * The same event may be listed up to two times - once as sender and once as receiver.
 */
export declare class CapabilityStatementMessagingEvent extends fhir.BackboneElement {
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
     * The mode of this event declaration - whether an application is a sender or receiver.
     */
    mode: fhir.FhirCode<EventCapabilityModeCodeType> | null;
    /**
     * This SHALL be provided if the event type supports multiple different resource types.
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
     * Default constructor for CapabilityStatementMessagingEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementMessaging type.
 */
export interface CapabilityStatementMessagingArgs extends fhir.BackboneElementArgs {
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: fhir.CapabilityStatementMessagingEndpointArgs[] | undefined;
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.reliableCache
     */
    _reliableCache?: fhir.FhirElementArgs;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhir.CapabilityStatementMessagingSupportedMessageArgs[] | undefined;
    /**
     * The same event may be listed up to two times - once as sender and once as receiver.
     */
    event?: fhir.CapabilityStatementMessagingEventArgs[] | undefined;
}
/**
 * Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export declare class CapabilityStatementMessaging extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint: fhir.CapabilityStatementMessagingEndpoint[];
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: fhir.FhirUnsignedInt | undefined;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage: fhir.CapabilityStatementMessagingSupportedMessage[];
    /**
     * The same event may be listed up to two times - once as sender and once as receiver.
     */
    event: fhir.CapabilityStatementMessagingEvent[];
    /**
     * Default constructor for CapabilityStatementMessaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatementDocument type.
 */
export interface CapabilityStatementDocumentArgs extends fhir.BackboneElementArgs {
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: fhir.FhirCode<DocumentModeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.mode
     */
    _mode?: fhir.FhirElementArgs;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * The first resource is the document resource.
     */
    profile: fhir.ReferenceArgs | null;
}
/**
 * A document definition.
 */
export declare class CapabilityStatementDocument extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: fhir.FhirCode<DocumentModeCodeType> | null;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * The first resource is the document resource.
     */
    profile: fhir.Reference | null;
    /**
     * Default constructor for CapabilityStatementDocument - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementDocumentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CapabilityStatement type.
 */
export interface CapabilityStatementArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CapabilityStatement" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of capability statements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired capability statement without due consideration. This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of capability statement that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental capability statement in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created). This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the capability statement Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: fhir.FhirCode<CapabilityStatementKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.instantiates
     */
    _instantiates?: (fhir.FhirElementArgs | null)[];
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftwareArgs | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementationArgs | undefined;
    /**
     * The version of the FHIR specification on which this capability statement is based.
     */
    fhirVersion: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.fhirVersion
     */
    _fhirVersion?: fhir.FhirElementArgs;
    /**
     * Unknown elements in a resource can only arise as later versions of the specification are published, because this is the only place where such elements can be defined. Hence accepting unknown elements is about inter-version compatibility.
     * Applications are recommended to accept unknown extensions and elements ('both'), but this is not always possible.
     */
    acceptUnknown: fhir.FhirCode<UnknownContentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.acceptUnknown
     */
    _acceptUnknown?: fhir.FhirElementArgs;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.format
     */
    _format?: (fhir.FhirElementArgs | null)[];
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.patchFormat
     */
    _patchFormat?: (fhir.FhirElementArgs | null)[];
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementationGuide
     */
    _implementationGuide?: (fhir.FhirElementArgs | null)[];
    /**
     * Supported profiles are different than the profiles that apply to a particular resource in rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that does? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).  Typically, supported profiles cross resource types to describe a network of related resources, so they are listed here rather than by resource. However, they do not need to describe more than one resource.
     */
    profile?: fhir.ReferenceArgs[] | undefined;
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: fhir.CapabilityStatementRestArgs[] | undefined;
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: fhir.CapabilityStatementMessagingArgs[] | undefined;
    /**
     * A document definition.
     */
    document?: fhir.CapabilityStatementDocumentArgs[] | undefined;
}
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export declare class CapabilityStatement extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CapabilityStatement";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired capability statement without due consideration. This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of capability statement that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental capability statement in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created). This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the capability statement Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: fhir.FhirCode<CapabilityStatementKindCodeType> | null;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates: fhir.FhirUri[];
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementation | undefined;
    /**
     * The version of the FHIR specification on which this capability statement is based.
     */
    fhirVersion: fhir.FhirId | null;
    /**
     * Unknown elements in a resource can only arise as later versions of the specification are published, because this is the only place where such elements can be defined. Hence accepting unknown elements is about inter-version compatibility.
     * Applications are recommended to accept unknown extensions and elements ('both'), but this is not always possible.
     */
    acceptUnknown: fhir.FhirCode<UnknownContentCodeType> | null;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: fhir.FhirCode[];
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat: fhir.FhirCode[];
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide: fhir.FhirUri[];
    /**
     * Supported profiles are different than the profiles that apply to a particular resource in rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that does? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).  Typically, supported profiles cross resource types to describe a network of related resources, so they are listed here rather than by resource. However, they do not need to describe more than one resource.
     */
    profile: fhir.Reference[];
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest: fhir.CapabilityStatementRest[];
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging: fhir.CapabilityStatementMessaging[];
    /**
     * A document definition.
     */
    document: fhir.CapabilityStatementDocument[];
    /**
     * Default constructor for CapabilityStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CapabilityStatement.d.ts.map