import * as fhir from '../fhir.js';
import { DiscriminatorTypeCodeType } from '../fhirValueSets/DiscriminatorTypeCodes.js';
import { ResourceSlicingRulesCodeType } from '../fhirValueSets/ResourceSlicingRulesCodes.js';
import { ResourceAggregationModeCodeType } from '../fhirValueSets/ResourceAggregationModeCodes.js';
import { ReferenceVersionRulesCodeType } from '../fhirValueSets/ReferenceVersionRulesCodes.js';
import { ConstraintSeverityCodeType } from '../fhirValueSets/ConstraintSeverityCodes.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
import { PropertyRepresentationCodeType } from '../fhirValueSets/PropertyRepresentationCodes.js';
/**
 * Valid arguments for the ElementDefinitionSlicingDiscriminator type.
 */
export interface ElementDefinitionSlicingDiscriminatorArgs extends fhir.FhirElementArgs {
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: fhir.FhirCode<DiscriminatorTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The only FHIRPath functions that are allowed are resolve(), and extension(url).
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.path
     */
    _path?: fhir.FhirElementArgs;
}
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided. If the base element has a cardinality of ..1, and there is a choice of types, the discriminator must be "@type".
 */
export declare class ElementDefinitionSlicingDiscriminator extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: fhir.FhirCode<DiscriminatorTypeCodeType> | null;
    /**
     * The only FHIRPath functions that are allowed are resolve(), and extension(url).
     */
    path: fhir.FhirString | null;
    /**
     * Default constructor for ElementDefinitionSlicingDiscriminator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionSlicingDiscriminatorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ElementDefinitionSlicing type.
 */
export interface ElementDefinitionSlicingArgs extends fhir.FhirElementArgs {
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided. If the base element has a cardinality of ..1, and there is a choice of types, the discriminator must be "@type".
     */
    discriminator?: fhir.ElementDefinitionSlicingDiscriminatorArgs[] | undefined;
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.FhirElementArgs;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: fhir.FhirCode<ResourceSlicingRulesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.FhirElementArgs;
}
/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export declare class ElementDefinitionSlicing extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided. If the base element has a cardinality of ..1, and there is a choice of types, the discriminator must be "@type".
     */
    discriminator: fhir.ElementDefinitionSlicingDiscriminator[];
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: fhir.FhirBoolean | undefined;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
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
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.FhirElementArgs;
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.FhirElementArgs;
}
/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. So they are deformalised into this location for tooling convenience, and to ensure that the base information is available without dependencies.
 */
export declare class ElementDefinitionBase extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: fhir.FhirString | null;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: fhir.FhirUnsignedInt | null;
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
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
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient). There would be one pair of type/code for each allowed target resource type.
     */
    code: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: fhir.FhirElementArgs;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.targetProfile
     */
    _targetProfile?: fhir.FhirElementArgs;
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation?: fhir.FhirCode<ResourceAggregationModeCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: (fhir.FhirElementArgs | null)[];
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this.
     */
    versioning?: fhir.FhirCode<ReferenceVersionRulesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.versioning
     */
    _versioning?: fhir.FhirElementArgs;
}
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export declare class ElementDefinitionType extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient). There would be one pair of type/code for each allowed target resource type.
     */
    code: fhir.FhirUri | null;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile?: fhir.FhirUri | undefined;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: fhir.FhirUri | undefined;
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation: fhir.FhirCode<ResourceAggregationModeCodeType>[];
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this.
     */
    versioning?: fhir.FhirCode<ReferenceVersionRulesCodeType> | undefined;
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
 * Valid arguments for the ElementDefinitionExample type.
 */
export interface ElementDefinitionExampleArgs extends fhir.FhirElementArgs {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    value?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: fhir.FhirCode | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: fhir.FhirId | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: fhir.FhirOid | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: fhir.FhirUri | string | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhir.AddressArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhir.AgeArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhir.CodingArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhir.CountArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhir.DistanceArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhir.DurationArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhir.MoneyArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhir.SignatureArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhir.TimingArgs | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhir.MetaArgs | undefined;
}
/**
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export declare class ElementDefinitionExample extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: fhir.FhirString | null;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    value: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | null;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.example.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for ElementDefinitionExample - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ElementDefinitionExampleArgs>, options?: fhir.FhirConstructorOptions);
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
     * To be used if the reason for the constraint may not be intuitive to all implementers.
     */
    requirements?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: fhir.FhirCode<ConstraintSeverityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.FhirElementArgs;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.FhirElementArgs;
    /**
     * A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.
     */
    expression: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.expression
     */
    _expression?: fhir.FhirElementArgs;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.
     * Note: we are considering deprecating the xpath element. Implementer feedback is welcome.
     */
    xpath?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.FhirElementArgs;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.source
     */
    _source?: fhir.FhirElementArgs;
}
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
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
     * To be used if the reason for the constraint may not be intuitive to all implementers.
     */
    requirements?: fhir.FhirString | undefined;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: fhir.FhirCode<ConstraintSeverityCodeType> | null;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: fhir.FhirString | null;
    /**
     * A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.
     */
    expression: fhir.FhirString | null;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.
     * Note: we are considering deprecating the xpath element. Implementer feedback is welcome.
     */
    xpath?: fhir.FhirString | undefined;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: fhir.FhirUri | undefined;
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
     * For further discussion, see [Using Terminologies](terminologies.html).
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
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export declare class ElementDefinitionBinding extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | null;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
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
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.FhirElementArgs;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.FhirElementArgs;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * Mappings are not necessarily specific enough for safe translation.
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
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: fhir.FhirCode | undefined;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: fhir.FhirString | null;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: fhir.FhirString | undefined;
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
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc).
     */
    representation?: fhir.FhirCode<PropertyRepresentationCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: (fhir.FhirElementArgs | null)[];
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceName
     */
    _sliceName?: fhir.FhirElementArgs;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.FhirElementArgs;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: fhir.CodingArgs[] | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhir.ElementDefinitionSlicingArgs | undefined;
    /**
     * May change the term to provide language more appropriate to the context of the profile or to reflect slicing.
     */
    short?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.FhirElementArgs;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions.
     */
    definition?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.FhirElementArgs;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.FhirElementArgs;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.alias
     */
    _alias?: (fhir.FhirElementArgs | null)[];
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: fhir.FhirUnsignedInt | number | undefined;
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
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. So they are deformalised into this location for tooling convenience, and to ensure that the base information is available without dependencies.
     */
    base?: fhir.ElementDefinitionBaseArgs | undefined;
    /**
     * Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.
     */
    contentReference?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.contentReference
     */
    _contentReference?: fhir.FhirElementArgs;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: fhir.ElementDefinitionTypeArgs[] | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValue?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCode?: fhir.FhirCode | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDate?: fhir.FhirDate | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueId?: fhir.FhirId | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueOid?: fhir.FhirOid | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueString?: fhir.FhirString | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueTime?: fhir.FhirTime | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueUri?: fhir.FhirUri | string | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAddress?: fhir.AddressArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAge?: fhir.AgeArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCoding?: fhir.CodingArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCount?: fhir.CountArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDistance?: fhir.DistanceArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDuration?: fhir.DurationArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMoney?: fhir.MoneyArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueRange?: fhir.RangeArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueRatio?: fhir.RatioArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueReference?: fhir.ReferenceArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueSignature?: fhir.SignatureArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueTiming?: fhir.TimingArgs | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMeta?: fhir.MetaArgs | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.FhirElementArgs;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.orderMeaning
     */
    _orderMeaning?: fhir.FhirElementArgs;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixed?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: fhir.FhirCode | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: fhir.FhirDate | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: fhir.FhirId | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: fhir.FhirInstant | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: fhir.FhirInteger | number | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: fhir.FhirOid | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: fhir.FhirString | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: fhir.FhirTime | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: fhir.FhirUri | string | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhir.AddressArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhir.AgeArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhir.CodingArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhir.CountArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhir.DistanceArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhir.DurationArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhir.MoneyArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhir.QuantityArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhir.RangeArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhir.RatioArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhir.ReferenceArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhir.SignatureArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhir.TimingArgs | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhir.MetaArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    pattern?: fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCode?: fhir.FhirCode | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDate?: fhir.FhirDate | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternId?: fhir.FhirId | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMarkdown?: fhir.FhirMarkdown | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternOid?: fhir.FhirOid | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternString?: fhir.FhirString | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternTime?: fhir.FhirTime | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternUri?: fhir.FhirUri | string | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAddress?: fhir.AddressArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAge?: fhir.AgeArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAnnotation?: fhir.AnnotationArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCoding?: fhir.CodingArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternContactPoint?: fhir.ContactPointArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCount?: fhir.CountArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDistance?: fhir.DistanceArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDuration?: fhir.DurationArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternHumanName?: fhir.HumanNameArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMoney?: fhir.MoneyArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternRange?: fhir.RangeArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternRatio?: fhir.RatioArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternReference?: fhir.ReferenceArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternSignature?: fhir.SignatureArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternTiming?: fhir.TimingArgs | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMeta?: fhir.MetaArgs | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: fhir.ElementDefinitionExampleArgs[] | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValue?: fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirPositiveInt | fhir.FhirUnsignedInt | fhir.Quantity | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: fhir.FhirDate | string | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: fhir.FhirTime | string | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValue?: fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirPositiveInt | fhir.FhirUnsignedInt | fhir.Quantity | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: fhir.FhirDate | string | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: fhir.FhirInstant | string | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: fhir.FhirTime | string | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
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
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: fhir.ElementDefinitionConstraintArgs[] | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.
     * This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.
     * Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.FhirElementArgs;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.FhirElementArgs;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers may not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. Modifier elements or elements with minimum cardinality = 1 must be marked as summary elements.
     */
    isSummary?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.FhirElementArgs;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhir.ElementDefinitionBindingArgs | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
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
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc).
     */
    representation: fhir.FhirCode<PropertyRepresentationCodeType>[];
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: fhir.FhirString | undefined;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: fhir.FhirString | undefined;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code: fhir.Coding[];
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhir.ElementDefinitionSlicing | undefined;
    /**
     * May change the term to provide language more appropriate to the context of the profile or to reflect slicing.
     */
    short?: fhir.FhirString | undefined;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions.
     */
    definition?: fhir.FhirMarkdown | undefined;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: fhir.FhirMarkdown | undefined;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias: fhir.FhirString[];
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: fhir.FhirUnsignedInt | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: fhir.FhirString | undefined;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. So they are deformalised into this location for tooling convenience, and to ensure that the base information is available without dependencies.
     */
    base?: fhir.ElementDefinitionBase | undefined;
    /**
     * Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.
     */
    contentReference?: fhir.FhirUri | undefined;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type: fhir.ElementDefinitionType[];
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValue?: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.defaultValue[x]
     */
    protected static readonly _fts_defaultValueIsChoice: true;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: fhir.FhirMarkdown | undefined;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: fhir.FhirString | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixed?: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.fixed[x]
     */
    protected static readonly _fts_fixedIsChoice: true;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    pattern?: (fhir.FhirBase64Binary | fhir.FhirBoolean | fhir.FhirCode | fhir.FhirDate | fhir.FhirDateTime | fhir.FhirDecimal | fhir.FhirId | fhir.FhirInstant | fhir.FhirInteger | fhir.FhirMarkdown | fhir.FhirOid | fhir.FhirPositiveInt | fhir.FhirString | fhir.FhirTime | fhir.FhirUnsignedInt | fhir.FhirUri | fhir.Address | fhir.Age | fhir.Annotation | fhir.Attachment | fhir.CodeableConcept | fhir.Coding | fhir.ContactPoint | fhir.Count | fhir.Distance | fhir.Duration | fhir.HumanName | fhir.Identifier | fhir.Money | fhir.Period | fhir.Quantity | fhir.Range | fhir.Ratio | fhir.Reference | fhir.SampledData | fhir.Signature | fhir.Timing | fhir.Meta) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.pattern[x]
     */
    protected static readonly _fts_patternIsChoice: true;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example: fhir.ElementDefinitionExample[];
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValue?: (fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirPositiveInt | fhir.FhirUnsignedInt | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.minValue[x]
     */
    protected static readonly _fts_minValueIsChoice: true;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValue?: (fhir.FhirDate | fhir.FhirDateTime | fhir.FhirInstant | fhir.FhirTime | fhir.FhirDecimal | fhir.FhirInteger | fhir.FhirPositiveInt | fhir.FhirUnsignedInt | fhir.Quantity) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ElementDefinition.maxValue[x]
     */
    protected static readonly _fts_maxValueIsChoice: true;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: fhir.FhirInteger | undefined;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition: fhir.FhirId[];
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint: fhir.ElementDefinitionConstraint[];
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.
     * This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.
     * Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: fhir.FhirBoolean | undefined;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: fhir.FhirBoolean | undefined;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers may not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. Modifier elements or elements with minimum cardinality = 1 must be marked as summary elements.
     */
    isSummary?: fhir.FhirBoolean | undefined;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhir.ElementDefinitionBinding | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
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