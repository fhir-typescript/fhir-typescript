import * as fhir from '../fhir.js';
import { ResourceSlicingRulesCodeType } from '../fhirValueSets/ResourceSlicingRulesCodes.js';
import { ResourceAggregationModeCodeType } from '../fhirValueSets/ResourceAggregationModeCodes.js';
import { ConstraintSeverityCodeType } from '../fhirValueSets/ConstraintSeverityCodes.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
/**
 * Valid arguments for the ElementDefinitionSlicing type.
 */
export interface ElementDefinitionSlicingArgs extends fhir.FhirElementArgs {
    /**
     * Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
     */
    discriminator?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator
     */
    _discriminator?: (fhir.FhirElementArgs | null)[];
    /**
     * A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.FhirElementArgs;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
     */
    rules: fhir.FhirCode<ResourceSlicingRulesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.FhirElementArgs;
}
/**
 * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
 */
export declare class ElementDefinitionSlicing extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
     */
    discriminator: fhir.FhirString[];
    /**
     * A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
     */
    description?: fhir.FhirString | undefined;
    /**
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: fhir.FhirBoolean | undefined;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
     */
    rules: fhir.FhirCode<ResourceSlicingRulesCodeType> | null;
    /**
     * Default constructor for ElementDefinitionSlicing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionSlicingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionBase type.
 */
export interface ElementDefinitionBaseArgs extends fhir.FhirElementArgs {
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * Minimum cardinality of the base element identified by the path.
     */
    min: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * Maximum cardinality of the base element identified by the path.
     */
    max: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.FhirElementArgs;
}
/**
 * Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
 */
export declare class ElementDefinitionBase extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path: fhir.FhirString | null;
    /**
     * Minimum cardinality of the base element identified by the path.
     */
    min: fhir.FhirInteger | null;
    /**
     * Maximum cardinality of the base element identified by the path.
     */
    max: fhir.FhirString | null;
    /**
     * Default constructor for ElementDefinitionBase - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionBaseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionType type.
 */
export interface ElementDefinitionTypeArgs extends fhir.FhirElementArgs {
    /**
     * Name of Data type or Resource that is a(or the) type used for this element.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile?: fhir.FhirUri[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: (fhir.FhirElementArgs | null)[];
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation?: fhir.FhirCode<ResourceAggregationModeCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: (fhir.FhirElementArgs | null)[];
}
/**
 * The data type or resource that the value of this element is permitted to be.
 */
export declare class ElementDefinitionType extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of Data type or Resource that is a(or the) type used for this element.
     */
    code: fhir.FhirCode | null;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile: fhir.FhirUri[];
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation: fhir.FhirCode<ResourceAggregationModeCodeType>[];
    /**
     * Default constructor for ElementDefinitionType - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionTypeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionConstraint type.
 */
export interface ElementDefinitionConstraintArgs extends fhir.FhirElementArgs {
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.key
     */
    _key?: fhir.FhirElementArgs;
    /**
     * Description of why this constraint is necessary or appropriate.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * Identifies the impact constraint violation has on the conformance of the instance.
     */
    severity: fhir.FhirCode<ConstraintSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
     */
    human: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.FhirElementArgs;
    /**
     * Used in Schematron tests of the validity of the resource.
     */
    xpath: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.FhirElementArgs;
}
/**
 * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
 */
export declare class ElementDefinitionConstraint extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: fhir.FhirId | null;
    /**
     * Description of why this constraint is necessary or appropriate.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * Identifies the impact constraint violation has on the conformance of the instance.
     */
    severity: fhir.FhirCode<ConstraintSeverityCodeType> | null;
    /**
     * Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
     */
    human: fhir.FhirString | null;
    /**
     * Used in Schematron tests of the validity of the resource.
     */
    xpath: fhir.FhirString | null;
    /**
     * Default constructor for ElementDefinitionConstraint - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionConstraintArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionBinding type.
 */
export interface ElementDefinitionBindingArgs extends fhir.FhirElementArgs {
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.strength
     */
    _strength?: fhir.FhirElementArgs;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.description
     */
    _description?: fhir.FhirElementArgs;
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
 * Binds to a value set if this element is coded (code, Coding, CodeableConcept).
 */
export declare class ElementDefinitionBinding extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | null;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSet?: (fhir.FhirUri | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.binding.valueSet[x]
     */
    protected static readonly _fts_valueSetIsChoice: true;
    /**
     * Default constructor for ElementDefinitionBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionBindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionMapping type.
 */
export interface ElementDefinitionMappingArgs extends fhir.FhirElementArgs {
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.identity
     */
    _identity?: fhir.FhirElementArgs;
    /**
     * Identifies the computable language in which mapping.map is expressed.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * Expresses what part of the target specification corresponds to this element.
     */
    map: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.FhirElementArgs;
}
/**
 * Provides guidance to implementers familiar with or converting content from other specifications.
 */
export declare class ElementDefinitionMapping extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: fhir.FhirId | null;
    /**
     * Identifies the computable language in which mapping.map is expressed.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * Expresses what part of the target specification corresponds to this element.
     */
    map: fhir.FhirString | null;
    /**
     * Default constructor for ElementDefinitionMapping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionMappingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinition type.
 */
export interface ElementDefinitionArgs extends fhir.FhirElementArgs {
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
     */
    representation?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: (fhir.FhirElementArgs | null)[];
    /**
     * Allows referencing a defined element.  May also be used for code generation purposes.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * Links the meaning of an element to an external terminology.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
     */
    slicing?: fhir.ElementDefinitionSlicingArgs | undefined;
    /**
     * A concise description of what this element means (e.g. for use in autogenerated summaries).
     */
    short?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.FhirElementArgs;
    /**
     * To allow a user to state the usage of an element in a particular context.
     */
    definition?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.
     */
    comments?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comments
     */
    _comments?: fhir.FhirElementArgs;
    /**
     * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
     */
    requirements?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * Allows for better easier recognition of the element by multiple communities, including international communities.
     */
    alias?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.alias
     */
    _alias?: (fhir.FhirElementArgs | null)[];
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.max
     */
    _max?: fhir.FhirElementArgs;
    /**
     * Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
     */
    base?: fhir.ElementDefinitionBaseArgs | undefined;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type?: fhir.ElementDefinitionTypeArgs[] | undefined;
    /**
     * Identifies the name of a slice defined elsewhere in the profile whose constraints should be applied to the current element.
     */
    nameReference?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.nameReference
     */
    _nameReference?: fhir.FhirElementArgs;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValue?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueString?: fhir.FhirString | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueUri?: fhir.FhirUri | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDate?: fhir.FhirDate | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueTime?: fhir.FhirTime | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCode?: fhir.FhirCode | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueOid?: fhir.FhirOid | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueId?: fhir.FhirId | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCoding?: fhir.CodingArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueRange?: fhir.RangeArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueRatio?: fhir.RatioArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAddress?: fhir.AddressArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueTiming?: fhir.TimingArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueMeta?: fhir.MetaArgs | undefined;
    /**
     * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.
     */
    meaningWhenMissing?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.FhirElementArgs;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixed?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedString?: fhir.FhirString | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUri?: fhir.FhirUri | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDate?: fhir.FhirDate | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTime?: fhir.FhirTime | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCode?: fhir.FhirCode | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedOid?: fhir.FhirOid | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedId?: fhir.FhirId | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCoding?: fhir.CodingArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRange?: fhir.RangeArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRatio?: fhir.RatioArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSignature?: fhir.SignatureArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAddress?: fhir.AddressArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTiming?: fhir.TimingArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedReference?: fhir.ReferenceArgs | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMeta?: fhir.MetaArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    pattern?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternString?: fhir.FhirString | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternUri?: fhir.FhirUri | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDate?: fhir.FhirDate | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternTime?: fhir.FhirTime | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCode?: fhir.FhirCode | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternOid?: fhir.FhirOid | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternId?: fhir.FhirId | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCoding?: fhir.CodingArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternRange?: fhir.RangeArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternRatio?: fhir.RatioArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternSignature?: fhir.SignatureArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAddress?: fhir.AddressArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternTiming?: fhir.TimingArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternReference?: fhir.ReferenceArgs | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternMeta?: fhir.MetaArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    example?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleInteger?: fhir.FhirInteger | number | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleInstant?: fhir.FhirInstant | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleString?: fhir.FhirString | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleUri?: fhir.FhirUri | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDate?: fhir.FhirDate | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleTime?: fhir.FhirTime | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCode?: fhir.FhirCode | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleOid?: fhir.FhirOid | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleId?: fhir.FhirId | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    examplePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCoding?: fhir.CodingArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleRange?: fhir.RangeArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    examplePeriod?: fhir.PeriodArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleRatio?: fhir.RatioArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleSignature?: fhir.SignatureArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAddress?: fhir.AddressArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleTiming?: fhir.TimingArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleReference?: fhir.ReferenceArgs | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleMeta?: fhir.MetaArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValue?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueString?: fhir.FhirString | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUri?: fhir.FhirUri | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDate?: fhir.FhirDate | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTime?: fhir.FhirTime | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCode?: fhir.FhirCode | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueOid?: fhir.FhirOid | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueId?: fhir.FhirId | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCoding?: fhir.CodingArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueRange?: fhir.RangeArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueRatio?: fhir.RatioArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAddress?: fhir.AddressArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTiming?: fhir.TimingArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueMeta?: fhir.MetaArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValue?: fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueString?: fhir.FhirString | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUri?: fhir.FhirUri | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDate?: fhir.FhirDate | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTime?: fhir.FhirTime | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCode?: fhir.FhirCode | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueOid?: fhir.FhirOid | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueId?: fhir.FhirId | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCoding?: fhir.CodingArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueRange?: fhir.RangeArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueRatio?: fhir.RatioArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAddress?: fhir.AddressArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTiming?: fhir.TimingArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueMeta?: fhir.MetaArgs | undefined;
    /**
     * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
     */
    maxLength?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxLength
     */
    _maxLength?: fhir.FhirElementArgs;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: fhir.FhirId[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.condition
     */
    _condition?: (fhir.FhirElementArgs | null)[];
    /**
     * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
     */
    constraint?: fhir.ElementDefinitionConstraintArgs[] | undefined;
    /**
     * Allows a profile to set expectations for system capabilities beyond merely respecting cardinality constraints.
     */
    mustSupport?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.FhirElementArgs;
    /**
     * Allows elements to be introduced into a specification that can't safely be ignored by applications that don't recognize them.
     */
    isModifier?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.FhirElementArgs;
    /**
     * Allow clients to search through large resources quickly.
     */
    isSummary?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.FhirElementArgs;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.ElementDefinitionBindingArgs | undefined;
    /**
     * Provides guidance to implementers familiar with or converting content from other specifications.
     */
    mapping?: fhir.ElementDefinitionMappingArgs[] | undefined;
}
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export declare class ElementDefinition extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: fhir.FhirString | null;
    /**
     * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
     */
    representation: fhir.FhirCode[];
    /**
     * Allows referencing a defined element.  May also be used for code generation purposes.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
     */
    label?: fhir.FhirString | undefined;
    /**
     * Links the meaning of an element to an external terminology.
     */
    code: fhir.Coding[];
    /**
     * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
     */
    slicing?: fhir.ElementDefinitionSlicing | undefined;
    /**
     * A concise description of what this element means (e.g. for use in autogenerated summaries).
     */
    short?: fhir.FhirString | undefined;
    /**
     * To allow a user to state the usage of an element in a particular context.
     */
    definition?: fhir.FhirMarkdown | undefined;
    /**
     * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.
     */
    comments?: fhir.FhirMarkdown | undefined;
    /**
     * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
     */
    requirements?: fhir.FhirMarkdown | undefined;
    /**
     * Allows for better easier recognition of the element by multiple communities, including international communities.
     */
    alias: fhir.FhirString[];
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: fhir.FhirString | undefined;
    /**
     * Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
     */
    base?: fhir.ElementDefinitionBase | undefined;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type: fhir.ElementDefinitionType[];
    /**
     * Identifies the name of a slice defined elsewhere in the profile whose constraints should be applied to the current element.
     */
    nameReference?: fhir.FhirString | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValue?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.defaultValue[x]
     */
    protected static readonly _fts_defaultValueIsChoice: true;
    /**
     * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.
     */
    meaningWhenMissing?: fhir.FhirMarkdown | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixed?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.fixed[x]
     */
    protected static readonly _fts_fixedIsChoice: true;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    pattern?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.pattern[x]
     */
    protected static readonly _fts_patternIsChoice: true;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    example?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.example[x]
     */
    protected static readonly _fts_exampleIsChoice: true;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValue?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.minValue[x]
     */
    protected static readonly _fts_minValueIsChoice: true;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValue?: (fhir.FhirBoolean | fhir.FhirInteger | fhir.FhirDecimal | fhir.FhirBase64Binary | fhir.FhirInstant | fhir.FhirString | fhir.FhirUri | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirTime | fhir.FhirCode | fhir.FhirOid | fhir.FhirId | fhir.FhirUnsignedInt | fhir.FhirPositiveInt | fhir.FhirMarkdown | fhir.Annotation | fhir.Attachment | fhir.Identifier | fhir.CodeableConcept | fhir.Coding | fhir.Quantity | fhir.Range | fhir.Period | fhir.Ratio | fhir.SampledData | fhir.Signature | fhir.HumanName | fhir.Address | fhir.ContactPoint | fhir.Timing | fhir.Reference | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.maxValue[x]
     */
    protected static readonly _fts_maxValueIsChoice: true;
    /**
     * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
     */
    maxLength?: fhir.FhirInteger | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition: fhir.FhirId[];
    /**
     * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
     */
    constraint: fhir.ElementDefinitionConstraint[];
    /**
     * Allows a profile to set expectations for system capabilities beyond merely respecting cardinality constraints.
     */
    mustSupport?: fhir.FhirBoolean | undefined;
    /**
     * Allows elements to be introduced into a specification that can't safely be ignored by applications that don't recognize them.
     */
    isModifier?: fhir.FhirBoolean | undefined;
    /**
     * Allow clients to search through large resources quickly.
     */
    isSummary?: fhir.FhirBoolean | undefined;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.ElementDefinitionBinding | undefined;
    /**
     * Provides guidance to implementers familiar with or converting content from other specifications.
     */
    mapping: fhir.ElementDefinitionMapping[];
    /**
     * Default constructor for ElementDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ElementDefinition.d.ts.map