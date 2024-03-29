import * as fhir from '../fhir.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { OperationKindCodeType } from '../fhirValueSets/OperationKindCodes.js';
/**
 * Valid arguments for the OperationDefinitionParameterBinding type.
 */
export interface OperationDefinitionParameterBindingArgs extends fhir.BackboneElementArgs {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.FhirElementArgs;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetUri?: fhir.FhirUri | string | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetReference?: fhir.ReferenceArgs | undefined;
}
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export declare class OperationDefinitionParameterBinding extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | null;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: (fhir.FhirUri | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element OperationDefinition.parameter.binding.valueSet[x]
     */
    protected static readonly _fts_valueSetIsChoice: true;
    /**
     * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterBindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionParameter type.
 */
export interface OperationDefinitionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.max
     */
    _max?: fhir.FhirElementArgs;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.documentation
     */
    _documentation?: fhir.FhirElementArgs;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.searchType
     */
    _searchType?: fhir.FhirElementArgs;
    /**
     * A profile the specifies the rules that this parameter must conform to.
     */
    profile?: fhir.ReferenceArgs | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBindingArgs | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameterArgs[] | undefined;
}
/**
 * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
 */
export declare class OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: fhir.FhirCode | null;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: fhir.FhirInteger | null;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: fhir.FhirString | null;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: fhir.FhirCode<SearchParamTypeCodeType> | undefined;
    /**
     * A profile the specifies the rules that this parameter must conform to.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
     */
    part: fhir.OperationDefinitionParameter[];
    /**
     * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionOverload type.
 */
export interface OperationDefinitionOverloadArgs extends fhir.BackboneElementArgs {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.parameterName
     */
    _parameterName?: (fhir.FhirElementArgs | null)[];
    /**
     * Comments to go on overload.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export declare class OperationDefinitionOverload extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of parameter to include in overload.
     */
    parameterName: fhir.FhirString[];
    /**
     * Comments to go on overload.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for OperationDefinitionOverload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionOverloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinition type.
 */
export interface OperationDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of operation definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired operation definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * Allows filtering of operation definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental operation definition in production.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the operation definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.idempotent
     */
    _idempotent?: fhir.FhirElementArgs;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.ReferenceArgs | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.resource
     */
    _resource?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.FhirElementArgs;
    /**
     * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.OperationDefinitionParameterArgs[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.OperationDefinitionOverloadArgs[] | undefined;
}
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export declare class OperationDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of operation definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired operation definition without due consideration.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | null;
    /**
     * Allows filtering of operation definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental operation definition in production.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the operation definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: fhir.FhirBoolean | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    code: fhir.FhirCode | null;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.Reference | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource: fhir.FhirCode[];
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | null;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: fhir.FhirBoolean | null;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | null;
    /**
     * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
     */
    parameter: fhir.OperationDefinitionParameter[];
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload: fhir.OperationDefinitionOverload[];
    /**
     * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=OperationDefinition.d.ts.map