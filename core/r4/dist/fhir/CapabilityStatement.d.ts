import * as fhir from '../fhir.js';
import { RestfulSecurityServiceCodingType } from '../fhirValueSets/RestfulSecurityServiceCodings.js';
import { TypeRestfulInteractionCodingType } from '../fhirValueSets/TypeRestfulInteractionCodings.js';
import { TypeRestfulInteractionCodeType } from '../fhirValueSets/TypeRestfulInteractionCodes.js';
import { SearchParamTypeCodingType } from '../fhirValueSets/SearchParamTypeCodings.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { ResourceTypesCodingType } from '../fhirValueSets/ResourceTypesCodings.js';
import { VersioningPolicyCodingType } from '../fhirValueSets/VersioningPolicyCodings.js';
import { VersioningPolicyCodeType } from '../fhirValueSets/VersioningPolicyCodes.js';
import { ConditionalReadStatusCodingType } from '../fhirValueSets/ConditionalReadStatusCodings.js';
import { ConditionalReadStatusCodeType } from '../fhirValueSets/ConditionalReadStatusCodes.js';
import { ConditionalDeleteStatusCodingType } from '../fhirValueSets/ConditionalDeleteStatusCodings.js';
import { ConditionalDeleteStatusCodeType } from '../fhirValueSets/ConditionalDeleteStatusCodes.js';
import { ReferenceHandlingPolicyCodingType } from '../fhirValueSets/ReferenceHandlingPolicyCodings.js';
import { ReferenceHandlingPolicyCodeType } from '../fhirValueSets/ReferenceHandlingPolicyCodes.js';
import { SystemRestfulInteractionCodingType } from '../fhirValueSets/SystemRestfulInteractionCodings.js';
import { SystemRestfulInteractionCodeType } from '../fhirValueSets/SystemRestfulInteractionCodes.js';
import { RestfulCapabilityModeCodingType } from '../fhirValueSets/RestfulCapabilityModeCodings.js';
import { RestfulCapabilityModeCodeType } from '../fhirValueSets/RestfulCapabilityModeCodes.js';
import { MessageTransportCodingType } from '../fhirValueSets/MessageTransportCodings.js';
import { EventCapabilityModeCodingType } from '../fhirValueSets/EventCapabilityModeCodings.js';
import { EventCapabilityModeCodeType } from '../fhirValueSets/EventCapabilityModeCodes.js';
import { DocumentModeCodingType } from '../fhirValueSets/DocumentModeCodings.js';
import { DocumentModeCodeType } from '../fhirValueSets/DocumentModeCodes.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CapabilityStatementKindCodingType } from '../fhirValueSets/CapabilityStatementKindCodings.js';
import { CapabilityStatementKindCodeType } from '../fhirValueSets/CapabilityStatementKindCodes.js';
import { FHIRVersionCodingType } from '../fhirValueSets/FHIRVersionCodings.js';
/**
 * Valid arguments for the CapabilityStatementSoftware type.
 */
export interface CapabilityStatementSoftwareArgs extends fhir.BackboneElementArgs {
    /**
     * Name the software is known by.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: fhir.FhirDateTime | string | undefined;
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
     * Name the software is known by.
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
    doModelValidation(): fhir.OperationOutcome;
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
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: fhir.FhirUrl | string | undefined;
    /**
     * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
     */
    custodian?: fhir.ReferenceArgs | undefined;
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
    url?: fhir.FhirUrl | undefined;
    /**
     * The organization responsible for the management of the instance and oversight of the data on the server at the specified URL.
     */
    custodian?: fhir.Reference | undefined;
    /**
     * Default constructor for CapabilityStatementImplementation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementImplementationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * Types of security services that are supported/required by the system.
     */
    service?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * General description of how security works.
     */
    description?: fhir.FhirMarkdown | string | undefined;
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
    service?: fhir.CodeableConcept[];
    /**
     * General description of how security works.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CapabilityStatementRestSecurity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestSecurityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for service (CapabilityStatement.rest.security.service)
     */
    static serviceExtensibleCoding(): RestfulSecurityServiceCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementRestResourceInteraction type.
 */
export interface CapabilityStatementRestResourceInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: TypeRestfulInteractionCodeType | null;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
}
/**
 * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
 */
export declare class CapabilityStatementRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: TypeRestfulInteractionCodeType | null;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (CapabilityStatement.rest.resource.interaction.code)
     */
    static codeRequiredCoding(): TypeRestfulInteractionCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
     */
    definition?: fhir.FhirCanonical | string | undefined;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: SearchParamTypeCodeType | null;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
}
/**
 * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
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
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource. This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs.
     */
    definition?: fhir.FhirCanonical | undefined;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: SearchParamTypeCodeType | null;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceSearchParam - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceSearchParamArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (CapabilityStatement.rest.resource.searchParam.type)
     */
    static typeRequiredCoding(): SearchParamTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementRestResourceOperation type.
 */
export interface CapabilityStatementRestResourceOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: fhir.FhirCanonical | string | undefined;
    /**
     * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
}
/**
 * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
 * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
 */
export declare class CapabilityStatementRestResourceOperation extends fhir.BackboneElement {
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
    definition: fhir.FhirCanonical | null;
    /**
     * Documentation that describes anything special about the operation behavior, possibly detailing different behavior for system, type and instance-level invocation of the operation.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CapabilityStatementRestResourceOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
     */
    supportedProfile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
    /**
     * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
     */
    interaction?: fhir.CapabilityStatementRestResourceInteractionArgs[] | undefined;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: VersioningPolicyCodeType | undefined;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: ConditionalReadStatusCodeType | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: ConditionalDeleteStatusCodeType | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: ReferenceHandlingPolicyCodeType[] | undefined;
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: fhir.FhirString[] | string[] | undefined;
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: fhir.FhirString[] | string[] | undefined;
    /**
     * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParamArgs[] | undefined;
    /**
     * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
     * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperationArgs[] | undefined;
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
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Supported profiles are different than the profile that applies to a particular resource in .rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that do? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).
     */
    supportedProfile?: fhir.FhirCanonical[];
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * In general, a Resource will only appear in a CapabilityStatement if the server actually has some capabilities - e.g. there is at least one interaction supported. However interactions can be omitted to support summarization (_summary = true).
     */
    interaction?: fhir.CapabilityStatementRestResourceInteraction[];
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: VersioningPolicyCodeType | undefined;
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
    conditionalRead?: ConditionalReadStatusCodeType | undefined;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: fhir.FhirBoolean | undefined;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: ConditionalDeleteStatusCodeType | undefined;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: ReferenceHandlingPolicyCodeType[];
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: fhir.FhirString[];
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: fhir.FhirString[];
    /**
     * The search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParam[];
    /**
     * Operations linked from CapabilityStatement.rest.resource.operation must have OperationDefinition.type = true or OperationDefinition.instance = true.
     * If an operation that is listed in multiple CapabilityStatement.rest.resource.operation (e.g. for different resource types), then clients should understand that the operation is only supported on the specified resource types, and that may be a subset of those listed in OperationDefinition.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperation[];
    /**
     * Default constructor for CapabilityStatementRestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (CapabilityStatement.rest.resource.type)
     */
    static typeRequiredCoding(): ResourceTypesCodingType;
    /**
     * Required-bound Value Set for versioning (CapabilityStatement.rest.resource.versioning)
     */
    static versioningRequiredCoding(): VersioningPolicyCodingType;
    /**
     * Required-bound Value Set for conditionalRead (CapabilityStatement.rest.resource.conditionalRead)
     */
    static conditionalReadRequiredCoding(): ConditionalReadStatusCodingType;
    /**
     * Required-bound Value Set for conditionalDelete (CapabilityStatement.rest.resource.conditionalDelete)
     */
    static conditionalDeleteRequiredCoding(): ConditionalDeleteStatusCodingType;
    /**
     * Required-bound Value Set for referencePolicy (CapabilityStatement.rest.resource.referencePolicy)
     */
    static referencePolicyRequiredCoding(): ReferenceHandlingPolicyCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementRestInteraction type.
 */
export interface CapabilityStatementRestInteractionArgs extends fhir.BackboneElementArgs {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: SystemRestfulInteractionCodeType | null;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
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
    code: SystemRestfulInteractionCodeType | null;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for CapabilityStatementRestInteraction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestInteractionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (CapabilityStatement.rest.interaction.code)
     */
    static codeRequiredCoding(): SystemRestfulInteractionCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementRest type.
 */
export interface CapabilityStatementRestArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: RestfulCapabilityModeCodeType | null;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
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
     * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParamArgs[] | undefined;
    /**
     * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperationArgs[] | undefined;
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: fhir.FhirCanonical[] | string[] | undefined;
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
    mode: RestfulCapabilityModeCodeType | null;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.CapabilityStatementRestSecurity | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: fhir.CapabilityStatementRestResource[];
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: fhir.CapabilityStatementRestInteraction[];
    /**
     * Typically, the only search parameters supported for all searches are those that apply to all resources - tags, profiles, text search etc. These search parameters should include the control search parameters such as _sort, _count, etc. that also apply to this resource (though many will be listed at [CapabilityStatement.rest.searchParam](capabilitystatement-definitions.html#CapabilityStatement.rest.searchParam)). The behavior of some search parameters may be further described by other code or extension elements, or narrative within the capability statement or linked [SearchParameter](searchparameter.html#) definitions.
     */
    searchParam?: fhir.CapabilityStatementRestResourceSearchParam[];
    /**
     * CapabilityStatement.rest.operation is for operations invoked at the system level, or for operations that are supported across multiple resource types. Operations linked from CapabilityStatement.rest.operation must have OperationDefinition.system = true, or more than one Operation.resource.
     */
    operation?: fhir.CapabilityStatementRestResourceOperation[];
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: fhir.FhirCanonical[];
    /**
     * Default constructor for CapabilityStatementRest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementRestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (CapabilityStatement.rest.mode)
     */
    static modeRequiredCoding(): RestfulCapabilityModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: fhir.FhirUrl | string | undefined;
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
     * The network address of the endpoint. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: fhir.FhirUrl | null;
    /**
     * Default constructor for CapabilityStatementMessagingEndpoint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingEndpointArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for protocol (CapabilityStatement.messaging.endpoint.protocol)
     */
    static protocolExtensibleCoding(): MessageTransportCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementMessagingSupportedMessage type.
 */
export interface CapabilityStatementMessagingSupportedMessageArgs extends fhir.BackboneElementArgs {
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: EventCapabilityModeCodeType | null;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: fhir.FhirCanonical | string | undefined;
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
    mode: EventCapabilityModeCodeType | null;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: fhir.FhirCanonical | null;
    /**
     * Default constructor for CapabilityStatementMessagingSupportedMessage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingSupportedMessageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (CapabilityStatement.messaging.supportedMessage.mode)
     */
    static modeRequiredCoding(): EventCapabilityModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhir.CapabilityStatementMessagingSupportedMessageArgs[] | undefined;
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
    endpoint?: fhir.CapabilityStatementMessagingEndpoint[];
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: fhir.FhirUnsignedInt | undefined;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: fhir.CapabilityStatementMessagingSupportedMessage[];
    /**
     * Default constructor for CapabilityStatementMessaging - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementMessagingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the CapabilityStatementDocument type.
 */
export interface CapabilityStatementDocumentArgs extends fhir.BackboneElementArgs {
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: DocumentModeCodeType | null;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirMarkdown | string | undefined;
    /**
     * The profile is actually on the Bundle.
     */
    profile: fhir.FhirCanonical | string | undefined;
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
    mode: DocumentModeCodeType | null;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: fhir.FhirMarkdown | undefined;
    /**
     * The profile is actually on the Bundle.
     */
    profile: fhir.FhirCanonical | null;
    /**
     * Default constructor for CapabilityStatementDocument - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementDocumentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for mode (CapabilityStatement.document.mode)
     */
    static modeRequiredCoding(): DocumentModeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindCodeType | null;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
     * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
     */
    imports?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftwareArgs | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementationArgs | undefined;
    /**
     * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
     */
    fhirVersion: fhir.FhirCode | string | undefined;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: fhir.FhirCode[] | string[] | undefined;
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: fhir.FhirCode[] | string[] | undefined;
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: fhir.FhirCanonical[] | string[] | undefined;
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
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Allows filtering of capability statements that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: CapabilityStatementKindCodeType | null;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: fhir.FhirCanonical[];
    /**
     * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
     * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
     */
    imports?: fhir.FhirCanonical[];
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementation | undefined;
    /**
     * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
     */
    fhirVersion: fhir.FhirCode | null;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: fhir.FhirCode[];
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: fhir.FhirCode[];
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: fhir.FhirCanonical[];
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: fhir.CapabilityStatementRest[];
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: fhir.CapabilityStatementMessaging[];
    /**
     * A document definition.
     */
    document?: fhir.CapabilityStatementDocument[];
    /**
     * Default constructor for CapabilityStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CapabilityStatementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CapabilityStatement.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for kind (CapabilityStatement.kind)
     */
    static kindRequiredCoding(): CapabilityStatementKindCodingType;
    /**
     * Required-bound Value Set for fhirVersion (CapabilityStatement.fhirVersion)
     */
    static fhirVersionRequiredCoding(): FHIRVersionCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=CapabilityStatement.d.ts.map