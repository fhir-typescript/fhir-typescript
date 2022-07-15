import * as fhir from '../fhir.js';
import { ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
import { StructureDefinitionKindCodeType } from '../fhirValueSets/StructureDefinitionKindCodes.js';
import { ExtensionContextCodeType } from '../fhirValueSets/ExtensionContextCodes.js';
/**
 * Valid arguments for the StructureDefinitionContact type.
 */
export interface StructureDefinitionContactArgs extends fhir.BackboneElementArgs {
    /**
     * The name of an individual to contact regarding the structure definition.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contact.name
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
export declare class StructureDefinitionContact extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of an individual to contact regarding the structure definition.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom: fhir.ContactPoint[];
    /**
     * Default constructor for StructureDefinitionContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionContactArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionMapping type.
 */
export interface StructureDefinitionMappingArgs extends fhir.BackboneElementArgs {
    /**
     * An Internal id that is used to identify this mapping set when specific mappings are made.
     */
    identity: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.identity
     */
    _identity?: fhir.FhirElementArgs;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comments?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.comments
     */
    _comments?: fhir.FhirElementArgs;
}
/**
 * An external specification that the content is mapped to.
 */
export declare class StructureDefinitionMapping extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An Internal id that is used to identify this mapping set when specific mappings are made.
     */
    identity: fhir.FhirId | null;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comments?: fhir.FhirString | undefined;
    /**
     * Default constructor for StructureDefinitionMapping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionMappingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionSnapshot type.
 */
export interface StructureDefinitionSnapshotArgs extends fhir.BackboneElementArgs {
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinitionArgs[] | null;
}
/**
 * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
 */
export declare class StructureDefinitionSnapshot extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinition[];
    /**
     * Default constructor for StructureDefinitionSnapshot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionSnapshotArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinitionDifferential type.
 */
export interface StructureDefinitionDifferentialArgs extends fhir.BackboneElementArgs {
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinitionArgs[] | null;
}
/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export declare class StructureDefinitionDifferential extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Captures constraints on each element within the resource.
     */
    element: fhir.ElementDefinition[];
    /**
     * Default constructor for StructureDefinitionDifferential - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionDifferentialArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the StructureDefinition type.
 */
export interface StructureDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition" | undefined;
    /**
     * So you can say, in a StructureDefinition, what the full extension URLs should be. This is required to allow hosting StructureDefinitions on multiple different servers, and to allow for the editorial process.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be multiple resource versions of the StructureDefinition that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A free text natural language name identifying the StructureDefinition.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Defined so that applications can use this name when displaying the value of the extension to the user.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: fhir.StructureDefinitionContactArgs[] | undefined;
    /**
     * The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * A free text natural language description of the StructureDefinition and its use.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Explains why this structure definition is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Assist in searching for appropriate StructureDefinitions.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
     */
    fhirVersion?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.fhirVersion
     */
    _fhirVersion?: fhir.FhirElementArgs;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: fhir.StructureDefinitionMappingArgs[] | undefined;
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: fhir.FhirCode<StructureDefinitionKindCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.kind
     */
    _kind?: fhir.FhirElementArgs;
    /**
     * The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
     */
    constrainedType?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.constrainedType
     */
    _constrainedType?: fhir.FhirElementArgs;
    /**
     * Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
     */
    abstract: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.abstract
     */
    _abstract?: fhir.FhirElementArgs;
    /**
     * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
     */
    contextType?: fhir.FhirCode<ExtensionContextCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contextType
     */
    _contextType?: fhir.FhirElementArgs;
    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.context
     */
    _context?: (fhir.FhirElementArgs | null)[];
    /**
     * An absolute URI that is the base structure from which this set of constraints is derived.
     */
    base?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.base
     */
    _base?: fhir.FhirElementArgs;
    /**
     * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshotArgs | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferentialArgs | undefined;
}
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
 */
export declare class StructureDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition";
    /**
     * So you can say, in a StructureDefinition, what the full extension URLs should be. This is required to allow hosting StructureDefinitions on multiple different servers, and to allow for the editorial process.
     */
    url: fhir.FhirUri | null;
    /**
     * Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
     */
    identifier: fhir.Identifier[];
    /**
     * There may be multiple resource versions of the StructureDefinition that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A free text natural language name identifying the StructureDefinition.
     */
    name: fhir.FhirString | null;
    /**
     * Defined so that applications can use this name when displaying the value of the extension to the user.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    status: fhir.FhirCode<ConformanceResourceStatusCodeType> | null;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact: fhir.StructureDefinitionContact[];
    /**
     * The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A free text natural language description of the StructureDefinition and its use.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate content.
     */
    useContext: fhir.CodeableConcept[];
    /**
     * Explains why this structure definition is needed and why it's been constrained as it has.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: fhir.FhirString | undefined;
    /**
     * Assist in searching for appropriate StructureDefinitions.
     */
    code: fhir.Coding[];
    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
     */
    fhirVersion?: fhir.FhirId | undefined;
    /**
     * An external specification that the content is mapped to.
     */
    mapping: fhir.StructureDefinitionMapping[];
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: fhir.FhirCode<StructureDefinitionKindCodeType> | null;
    /**
     * The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
     */
    constrainedType?: fhir.FhirCode | undefined;
    /**
     * Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
     */
    abstract: fhir.FhirBoolean | null;
    /**
     * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
     */
    contextType?: fhir.FhirCode<ExtensionContextCodeType> | undefined;
    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context: fhir.FhirString[];
    /**
     * An absolute URI that is the base structure from which this set of constraints is derived.
     */
    base?: fhir.FhirUri | undefined;
    /**
     * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshot | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferential | undefined;
    /**
     * Default constructor for StructureDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<StructureDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=StructureDefinition.d.ts.map