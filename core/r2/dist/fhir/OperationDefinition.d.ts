import * as fhir from '../fhir.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { OperationKindCodeType } from '../fhirValueSets/OperationKindCodes.js';
/**
 * Valid arguments for the OperationDefinitionContact type.
 */
export interface OperationDefinitionContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the operation definition.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.contact.name
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
export declare class OperationDefinitionContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the operation definition.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for OperationDefinitionContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionParameterBinding type.
 */
export interface OperationDefinitionParameterBindingArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.FhirElementArgs;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSet?: fhir.FhirUri | fhir.Reference | undefined;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSetUri?: fhir.FhirUri | string | undefined;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
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
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | null;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
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
     * The name of used to identify the parameter.
     */
    name: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Whether this is an input or an output parameter.
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
     * The type for this parameter.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A profile the specifies the rules that this parameter must conform to.
     */
    profile?: fhir.ReferenceArgs | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBindingArgs | undefined;
    /**
     * The parts of a Tuple Parameter.
     */
    part?: fhir.OperationDefinitionParameterArgs[] | undefined;
}
/**
 * The parameters for the operation/query.
 */
export declare class OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of used to identify the parameter.
     */
    name: fhir.FhirCode | null;
    /**
     * Whether this is an input or an output parameter.
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
     * The type for this parameter.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * A profile the specifies the rules that this parameter must conform to.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * The parts of a Tuple Parameter.
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
 * Valid arguments for the OperationDefinition type.
 */
export interface OperationDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition" | undefined;
    /**
     * An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be multiple resource versions of the profile that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the operation.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Whether this is an operation or a named query.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.OperationDefinitionContactArgs[] | undefined;
    /**
     * The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A free text natural language description of the profile and its use.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Explains why this operation definition is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.idempotent
     */
    _idempotent?: fhir.FhirElementArgs;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Additional information about how to use this operation or named query.
     */
    notes?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.notes
     */
    _notes?: fhir.FhirElementArgs;
    /**
     * Indicates that this operation definition is a constraining profile on the base.
     */
    base?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
     */
    type?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.FhirElementArgs;
    /**
     * The parameters for the operation/query.
     */
    parameter?: fhir.OperationDefinitionParameterArgs[] | undefined;
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
     * An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be multiple resource versions of the profile that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A free text natural language name identifying the operation.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * Whether this is an operation or a named query.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | null;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.OperationDefinitionContact[];
    /**
     * The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A free text natural language description of the profile and its use.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Explains why this operation definition is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: fhir.FhirBoolean | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | null;
    /**
     * Additional information about how to use this operation or named query.
     */
    notes?: fhir.FhirString | undefined;
    /**
     * Indicates that this operation definition is a constraining profile on the base.
     */
    base?: fhir.Reference | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | null;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
     */
    type: fhir.FhirCode[];
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | null;
    /**
     * The parameters for the operation/query.
     */
    parameter: fhir.OperationDefinitionParameter[];
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