import * as fhir from '../fhir.js';
import { GraphCompartmentUseCodeType } from '../fhirValueSets/GraphCompartmentUseCodes.js';
import { CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
import { GraphCompartmentRuleCodeType } from '../fhirValueSets/GraphCompartmentRuleCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the GraphDefinitionLinkTargetCompartment type.
 */
export interface GraphDefinitionLinkTargetCompartmentArgs extends fhir.BackboneElementArgs {
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: fhir.FhirCode<GraphCompartmentUseCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.use
     */
    _use?: fhir.FhirElementArgs;
    /**
     * Identifies the compartment.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: fhir.FhirCode<GraphCompartmentRuleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.rule
     */
    _rule?: fhir.FhirElementArgs;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.expression
     */
    _expression?: fhir.FhirElementArgs;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * Compartment Consistency Rules.
 */
export declare class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: fhir.FhirCode<GraphCompartmentUseCodeType> | null;
    /**
     * Identifies the compartment.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | null;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: fhir.FhirCode<GraphCompartmentRuleCodeType> | null;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkTargetCompartmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinitionLinkTarget type.
 */
export interface GraphDefinitionLinkTargetArgs extends fhir.BackboneElementArgs {
    /**
     * Type of resource this link refers to.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.params
     */
    _params?: fhir.FhirElementArgs;
    /**
     * Profile for the target resource.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.profile
     */
    _profile?: fhir.FhirElementArgs;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.GraphDefinitionLinkTargetCompartmentArgs[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.GraphDefinitionLinkArgs[] | undefined;
}
/**
 * Potential target for the link.
 */
export declare class GraphDefinitionLinkTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of resource this link refers to.
     */
    type: fhir.FhirCode | null;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: fhir.FhirString | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Compartment Consistency Rules.
     */
    compartment: fhir.GraphDefinitionLinkTargetCompartment[];
    /**
     * Additional links from target resource.
     */
    link: fhir.GraphDefinitionLink[];
    /**
     * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinitionLink type.
 */
export interface GraphDefinitionLinkArgs extends fhir.BackboneElementArgs {
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * Which slice (if profiled).
     */
    sliceName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.sliceName
     */
    _sliceName?: fhir.FhirElementArgs;
    /**
     * Minimum occurrences for this link.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * Maximum occurrences for this link.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.max
     */
    _max?: fhir.FhirElementArgs;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Potential target for the link.
     */
    target?: fhir.GraphDefinitionLinkTargetArgs[] | undefined;
}
/**
 * Links this graph makes rules about.
 */
export declare class GraphDefinitionLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: fhir.FhirString | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: fhir.FhirString | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: fhir.FhirString | undefined;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Potential target for the link.
     */
    target: fhir.GraphDefinitionLinkTarget[];
    /**
     * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinition type.
 */
export interface GraphDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.profile
     */
    _profile?: fhir.FhirElementArgs;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.GraphDefinitionLinkArgs[] | undefined;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare class GraphDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: fhir.FhirCode | null;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Links this graph makes rules about.
     */
    link: fhir.GraphDefinitionLink[];
    /**
     * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=GraphDefinition.d.ts.map