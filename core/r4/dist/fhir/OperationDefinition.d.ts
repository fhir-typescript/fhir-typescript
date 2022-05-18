import * as fhir from '../fhir.js';
import { BindingStrengthCodingType } from '../fhirValueSets/BindingStrengthCodings.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
import { OperationParameterUseCodingType } from '../fhirValueSets/OperationParameterUseCodings.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
import { AllTypesCodingType } from '../fhirValueSets/AllTypesCodings.js';
import { SearchParamTypeCodingType } from '../fhirValueSets/SearchParamTypeCodings.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { PublicationStatusCodingType } from '../fhirValueSets/PublicationStatusCodings.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { OperationKindCodingType } from '../fhirValueSets/OperationKindCodings.js';
import { OperationKindCodeType } from '../fhirValueSets/OperationKindCodes.js';
import { ResourceTypesCodingType } from '../fhirValueSets/ResourceTypesCodings.js';
/**
 * Valid arguments for the OperationDefinitionParameterBinding type.
 */
export interface OperationDefinitionParameterBindingArgs extends fhir.BackboneElementArgs {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: BindingStrengthCodeType | null;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: fhir.FhirCanonical | string | undefined;
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
    strength: BindingStrengthCodeType | null;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: fhir.FhirCanonical | null;
    /**
     * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterBindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for strength (OperationDefinition.parameter.binding.strength)
     */
    static strengthRequiredCoding(): BindingStrengthCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the OperationDefinitionParameterReferencedFrom type.
 */
export interface OperationDefinitionParameterReferencedFromArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: fhir.FhirString | string | undefined;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: fhir.FhirString | string | undefined;
}
/**
 * Resolution applies if the referenced parameter exists.
 */
export declare class OperationDefinitionParameterReferencedFrom extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: fhir.FhirString | null;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: fhir.FhirString | undefined;
    /**
     * Default constructor for OperationDefinitionParameterReferencedFrom - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterReferencedFromArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
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
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: OperationParameterUseCodeType | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: fhir.FhirInteger | number | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: fhir.FhirString | string | undefined;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: SearchParamTypeCodeType | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBindingArgs | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.OperationDefinitionParameterReferencedFromArgs[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameterArgs[] | undefined;
}
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
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
    use: OperationParameterUseCodeType | null;
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
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: fhir.FhirCanonical[];
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: SearchParamTypeCodeType | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.OperationDefinitionParameterReferencedFrom[];
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameter[];
    /**
     * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (OperationDefinition.parameter.use)
     */
    static useRequiredCoding(): OperationParameterUseCodingType;
    /**
     * Required-bound Value Set for type (OperationDefinition.parameter.type)
     */
    static typeRequiredCoding(): AllTypesCodingType;
    /**
     * Required-bound Value Set for searchType (OperationDefinition.parameter.searchType)
     */
    static searchTypeRequiredCoding(): SearchParamTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the OperationDefinitionOverload type.
 */
export interface OperationDefinitionOverloadArgs extends fhir.BackboneElementArgs {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: fhir.FhirString[] | string[] | undefined;
    /**
     * Comments to go on overload.
     */
    comment?: fhir.FhirString | string | undefined;
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
    parameterName?: fhir.FhirString[];
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
    doModelValidation(): fhir.OperationOutcome;
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: OperationKindCodeType | null;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirMarkdown | string | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.FhirCanonical | string | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | boolean | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: fhir.FhirCanonical | string | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: fhir.FhirCanonical | string | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
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
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: PublicationStatusCodeType | null;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: OperationKindCodeType | null;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[];
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: fhir.FhirBoolean | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | null;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirMarkdown | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.FhirCanonical | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: fhir.FhirCode[];
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
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: fhir.FhirCanonical | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: fhir.FhirCanonical | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.OperationDefinitionParameter[];
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.OperationDefinitionOverload[];
    /**
     * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (OperationDefinition.status)
     */
    static statusRequiredCoding(): PublicationStatusCodingType;
    /**
     * Required-bound Value Set for kind (OperationDefinition.kind)
     */
    static kindRequiredCoding(): OperationKindCodingType;
    /**
     * Required-bound Value Set for resource (OperationDefinition.resource)
     */
    static resourceRequiredCoding(): ResourceTypesCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=OperationDefinition.d.ts.map