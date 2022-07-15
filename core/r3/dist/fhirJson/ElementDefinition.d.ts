import * as fhir from '../fhirJson.js';
/**
 * If there is no discriminator, the content is hard to process, so this should be avoided. If the base element has a cardinality of ..1, and there is a choice of types, the discriminator must be "@type".
 */
export interface ElementDefinitionSlicingDiscriminator extends fhir.FhirElement {
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type: 'exists' | 'pattern' | 'profile' | 'type' | 'value' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.type
     */
    _type?: fhir.FhirElement;
    /**
     * The only FHIRPath functions that are allowed are resolve(), and extension(url).
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator.path
     */
    _path?: fhir.FhirElement;
}
/**
 * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
 */
export interface ElementDefinitionSlicing extends fhir.FhirElement {
    /**
     * If there is no discriminator, the content is hard to process, so this should be avoided. If the base element has a cardinality of ..1, and there is a choice of types, the discriminator must be "@type".
     */
    discriminator?: (fhir.ElementDefinitionSlicingDiscriminator | null)[] | undefined;
    /**
     * If it's really not possible to differentiate them, the design should be re-evaluated to make the content usable.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.FhirElement;
    /**
     * Order should only be required when it is a pressing concern for presentation. Profile authors should consider making the order a feature of the rules about the narrative, not the rules about the data - requiring ordered data makes the profile much less re-usable.
     */
    ordered?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.FhirElement;
    /**
     * Allowing additional elements makes for a much for flexible template - it's open for use in wider contexts, but also means that the content of the resource is not closed, and applications have to decide how to handle content not described by the profile.
     */
    rules: 'closed' | 'open' | 'openAtEnd' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.FhirElement;
}
/**
 * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. So they are deformalised into this location for tooling convenience, and to ensure that the base information is available without dependencies.
 */
export interface ElementDefinitionBase extends fhir.FhirElement {
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.FhirElement;
    /**
     * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
     */
    min: number | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.FhirElement;
    /**
     * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max &gt; 1. Also, some forms of code generation may differ.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.FhirElement;
}
/**
 * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
 */
export interface ElementDefinitionType extends fhir.FhirElement {
    /**
     * If the element is a reference to another resource, this element contains "Reference", and the targetProfile element defines what resources can be referenced. The targetProfile may be a reference to the general definition of a resource (e.g. http://hl7.org/fhir/StructureDefinition/Patient). There would be one pair of type/code for each allowed target resource type.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.FhirElement;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the datatype this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for the target of the reference this element refers to. Can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    targetProfile?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.targetProfile
     */
    _targetProfile?: fhir.FhirElement;
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation?: (('bundled' | 'contained' | 'referenced') | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: (fhir.FhirElement | null)[];
    /**
     * The base specification never makes a rule as to which form is allowed, but implementation guides may do this.
     */
    versioning?: 'either' | 'independent' | 'specific' | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.versioning
     */
    _versioning?: fhir.FhirElement;
}
/**
 * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
 */
export interface ElementDefinitionExample extends fhir.FhirElement {
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.example.label
     */
    _label?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueCode?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueDecimal?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueId?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInstant?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueInteger?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueMarkdown?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueOid?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valuePositiveInt?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUnsignedInt?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example.value[x]
     */
    _valueUri?: fhir.FhirElement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: fhir.Address | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: fhir.Age | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: fhir.Annotation | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: fhir.Count | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: fhir.Distance | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: fhir.Duration | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: fhir.HumanName | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: fhir.Identifier | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: fhir.Money | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: fhir.Signature | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: fhir.Timing | undefined;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMeta?: fhir.Meta | undefined;
}
/**
 * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
 */
export interface ElementDefinitionConstraint extends fhir.FhirElement {
    /**
     * Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.key
     */
    _key?: fhir.FhirElement;
    /**
     * To be used if the reason for the constraint may not be intuitive to all implementers.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * This allows constraints to be asserted as "shall" (error) and "should" (warning).
     */
    severity: 'error' | 'warning' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Should be expressed in business terms as much as possible.
     */
    human: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.FhirElement;
    /**
     * A [FHIRPath](http://hl7.org/fluentpath) expression of constraint that can be executed to see if this constraint is met.
     */
    expression: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * Elements SHALL use "f" as the namespace prefix for the FHIR namespace, and "x" for the xhtml namespace, and SHALL NOT use any other prefixes.
     * Note: we are considering deprecating the xpath element. Implementer feedback is welcome.
     */
    xpath?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.FhirElement;
    /**
     * This is used when, e.g. rendering, where it is not useful to present inherited constraints when rendering the snapshot.
     */
    source?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.source
     */
    _source?: fhir.FhirElement;
}
/**
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export interface ElementDefinitionBinding extends fhir.FhirElement {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: 'example' | 'extensible' | 'preferred' | 'required' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.strength
     */
    _strength?: fhir.FhirElement;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.description
     */
    _description?: fhir.FhirElement;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.valueSet[x]
     */
    _valueSetUri?: fhir.FhirElement;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetReference?: fhir.Reference | undefined;
}
/**
 * Mappings are not necessarily specific enough for safe translation.
 */
export interface ElementDefinitionMapping extends fhir.FhirElement {
    /**
     * An internal reference to the definition of a mapping.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.identity
     */
    _identity?: fhir.FhirElement;
    /**
     * If omitted, then there can be no expectation of computational interpretation of the mapping.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.FhirElement;
    /**
     * For most mappings, the syntax is undefined.  Syntax will be provided for mappings to the RIM.  Multiple mappings may be possible and may include constraints on other resource elements that identify when a particular mapping applies.
     */
    map: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.FhirElement;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.comment
     */
    _comment?: fhir.FhirElement;
}
/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementDefinition extends fhir.FhirElement {
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor elements, beginning with the name of the resource or extension.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.path
     */
    _path?: fhir.FhirElement;
    /**
     * In resources, this is rarely used except for special cases where the representation deviates from the normal, and can only be done in the base standard (and profiles must reproduce what the base standard does). This element is used quite commonly in Logical models when the logical models represent a specific serialization format (e.g. CDA, v2 etc).
     */
    representation?: (('cdaText' | 'typeAttr' | 'xhtml' | 'xmlAttr' | 'xmlText') | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: (fhir.FhirElement | null)[];
    /**
     * The name SHALL be unique within the structure within the context of the constrained resource element.  (Though to avoid confusion, uniqueness across all elements is recommended.).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.sliceName
     */
    _sliceName?: fhir.FhirElement;
    /**
     * See also the extension (http://hl7.org/fhir/StructureDefinition/elementdefinition-question)[extension-elementdefinition-question.html].
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.FhirElement;
    /**
     * The concept SHALL be properly aligned with the data element definition and other constraints, as defined in the code system, including relationships, of any code listed here.  Where multiple codes exist in a terminology that could correspond to the data element, the most granular code(s) should be selected, so long as they are not more restrictive than the data element itself. The mappings may be used to provide more or less granular or structured equivalences in the code system.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * The first element in the sequence, the one that carries the slicing, is the definition that applies to all the slices. This is based on the unconstrained element, but can apply any constraints as appropriate. This may include the common constraints on the children of the element.
     */
    slicing?: fhir.ElementDefinitionSlicing | undefined;
    /**
     * May change the term to provide language more appropriate to the context of the profile or to reflect slicing.
     */
    short?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.FhirElement;
    /**
     * It is easy for a different definition to change the meaning of an element and this can have nasty downstream consequences. Please be careful when providing definitions.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * If it is possible to capture usage rules using constraints, that mechanism should be used in preference to this element.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * This element does not describe the usage of the element (that's done in comments), rather it's for traceability of *why* the element is either needed or why the constraints exist as they do.  This may be used to point to source materials or specifications that drove the structure of this data element.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.alias
     */
    _alias?: (fhir.FhirElement | null)[];
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.min
     */
    _min?: fhir.FhirElement;
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.max
     */
    _max?: fhir.FhirElement;
    /**
     * The base information does not carry any information that could not be determined from the path and related profiles, but making this determination requires both that the related profiles are available, and that the algorithm to determine them be available. So they are deformalised into this location for tooling convenience, and to ensure that the base information is available without dependencies.
     */
    base?: fhir.ElementDefinitionBase | undefined;
    /**
     * Identifies the identity of an element defined elsewhere in the profile whose content rules should be applied to the current element.
     */
    contentReference?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.contentReference
     */
    _contentReference?: fhir.FhirElement;
    /**
     * The Type of the element can be left blank in a differential constraint, in which case the type is inherited from the resource. Abstract types are not permitted to appear as a type when multiple types are listed.  (I.e. Abstract types cannot be part of a choice).
     */
    type?: (fhir.ElementDefinitionType | null)[] | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCode?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDate?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueId?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInstant?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInteger?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueOid?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueString?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueTime?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUri?: fhir.FhirElement;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAddress?: fhir.Address | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAge?: fhir.Age | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAnnotation?: fhir.Annotation | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueAttachment?: fhir.Attachment | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCoding?: fhir.Coding | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueCount?: fhir.Count | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDistance?: fhir.Distance | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueDuration?: fhir.Duration | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueHumanName?: fhir.HumanName | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueIdentifier?: fhir.Identifier | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMoney?: fhir.Money | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValuePeriod?: fhir.Period | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueQuantity?: fhir.Quantity | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueRange?: fhir.Range | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueRatio?: fhir.Ratio | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueReference?: fhir.Reference | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueSampledData?: fhir.SampledData | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueSignature?: fhir.Signature | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueTiming?: fhir.Timing | undefined;
    /**
     * Default values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. Specifying a default value means that the property can never been unknown - it must always have a value. Further, the default value can never be changed. For these reasons, default values are (and should be) used extremely sparingly.
     */
    defaultValueMeta?: fhir.Meta | undefined;
    /**
     * Implicit meanings for missing values can only be specified on a resource, data type, or extension definition, and never in a profile that applies to one of these. An implicit meaning for a missing value can never be changed, and specifying one has the consequence that constraining its use in profiles eliminates use cases as possibilities, not merely moving them out of scope.
     */
    meaningWhenMissing?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.FhirElement;
    /**
     * This element can only be asserted on repeating elements and can only be introduced when defining resources or data types.  It can be further refined profiled elements but if absent in the base type, a profile cannot assert meaning.
     */
    orderMeaning?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.orderMeaning
     */
    _orderMeaning?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBase64Binary?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBoolean?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCode?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDate?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDateTime?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDecimal?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedId?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInstant?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInteger?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedMarkdown?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedOid?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedPositiveInt?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedString?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedTime?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUnsignedInt?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUri?: fhir.FhirElement;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAddress?: fhir.Address | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAge?: fhir.Age | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAnnotation?: fhir.Annotation | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedAttachment?: fhir.Attachment | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCoding?: fhir.Coding | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedContactPoint?: fhir.ContactPoint | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedCount?: fhir.Count | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDistance?: fhir.Distance | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedDuration?: fhir.Duration | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedHumanName?: fhir.HumanName | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedIdentifier?: fhir.Identifier | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMoney?: fhir.Money | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedPeriod?: fhir.Period | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedQuantity?: fhir.Quantity | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRange?: fhir.Range | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedRatio?: fhir.Ratio | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedReference?: fhir.Reference | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSampledData?: fhir.SampledData | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedSignature?: fhir.Signature | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedTiming?: fhir.Timing | undefined;
    /**
     * This is not recommended for Coding and CodeableConcept since these often have highly contextual properties such as version or display.
     */
    fixedMeta?: fhir.Meta | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBase64Binary?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBoolean?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCode?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDate?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDateTime?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDecimal?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternId?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInstant?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInteger?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternMarkdown?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternOid?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternPositiveInt?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternString?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternTime?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUnsignedInt?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUri?: fhir.FhirElement;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAddress?: fhir.Address | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAge?: fhir.Age | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAnnotation?: fhir.Annotation | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternAttachment?: fhir.Attachment | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCoding?: fhir.Coding | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternCount?: fhir.Count | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDistance?: fhir.Distance | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternDuration?: fhir.Duration | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternHumanName?: fhir.HumanName | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternIdentifier?: fhir.Identifier | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMoney?: fhir.Money | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternPeriod?: fhir.Period | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternQuantity?: fhir.Quantity | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternRange?: fhir.Range | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternRatio?: fhir.Ratio | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternReference?: fhir.Reference | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternSampledData?: fhir.SampledData | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternSignature?: fhir.Signature | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternTiming?: fhir.Timing | undefined;
    /**
     * Mostly used for fixing values of CodeableConcept. At present, pattern[x] is not recommended as a basis for slicing while issues related to this are investigated during the STU period.
     */
    patternMeta?: fhir.Meta | undefined;
    /**
     * Examples will most commonly be present for data where it's not implicitly obvious from either the data type or value set what the values might be.  (I.e. Example values for dates or quantities would generally be unnecessary.)  If the example value is fully populated, the publication tool can generate an instance automatically.
     */
    example?: (fhir.ElementDefinitionExample | null)[] | undefined;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDate?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDateTime?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInstant?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueTime?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDecimal?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInteger?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValuePositiveInt?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueUnsignedInt?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the minValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of minValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is subtracted from the current clock to determine the minimum allowable value.   A minimum value for a Quantity is interpreted as an canonical minimum - e.g. you cannot provide 100mg if the minimum value is 10g.
     */
    minValueQuantity?: fhir.Quantity | undefined;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDate?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDateTime?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInstant?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueTime?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDecimal?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInteger?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValuePositiveInt?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueUnsignedInt?: fhir.FhirElement;
    /**
     * Except for date/date/instant, the type of the maxValue[x] SHALL be the same as the specified type of the element. For the date/dateTime/instant values, the type of maxValue[x] SHALL be either the same, or a a [Duration](datatypes.html#duration) which specifies a relative time limit to the current time. The duration value is positive, and is added to the current clock to determine the maximum allowable value.   A maximum value for a Quantity is interpreted as an canonical maximum - e.g. you cannot provide 10g if the maximum value is 50mg.
     */
    maxValueQuantity?: fhir.Quantity | undefined;
    /**
     * Receivers are not required to reject instances that exceed the maximum length.  The full length could be stored.  In some cases, data might be truncated, though truncation should be undertaken with care and an understanding of the consequences of doing so. If not specified, there is no conformance expectation for length support.
     */
    maxLength?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxLength
     */
    _maxLength?: fhir.FhirElement;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or value in the instance.
     */
    condition?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.condition
     */
    _condition?: (fhir.FhirElement | null)[];
    /**
     * Constraints should be declared on the "context" element - the lowest element in the hierarchy that is common to all nodes referenced by the constraint.
     */
    constraint?: (fhir.ElementDefinitionConstraint | null)[] | undefined;
    /**
     * "Something useful" is context dependent and impossible to describe in the base FHIR specification. For this reason, tue mustSupport flag is never set to true by the FHIR specification itself - it is only set to true in profiles.
     * This is done in [Resource Profiles](profiling.html#mustsupport), where the profile labels an element as mustSupport=true. When a profile does this, it SHALL also make clear exactly what kind of "support" is required, as this can mean many things.
     * Note that an element that has the property IsModifier is not necessarily a "key" element (e.g. one of the important elements to make use of the resource), nor is it automatically mustSupport - however both of these things are more likely to be true for IsModifier elements than for other elements.
     */
    mustSupport?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.FhirElement;
    /**
     * Only the definition of an element can set IsModifier true - either the specification itself or where an extension is originally defined. Once set, it cannot be changed in derived profiles. An element/extension that has isModifier=true SHOULD also have a minimum cardinality of 1, so that there is no lack of clarity about what to do if it is missing. If it can be missing, the definition SHALL make the meaning of a missing element clear.
     */
    isModifier?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.FhirElement;
    /**
     * Some resources include a set of simple metadata, and some very large data. This element is used to reduce the quantity of data returned in searches. Note that servers may pre-cache summarized resources for optimal performance, so servers may not support per-profile use of the isSummary flag. When a request is made with _summary=true, serailisers only include elements marked as 'isSummary = true'. Other than Attachment.data, all data type properties are included in the summary form. Modifier elements or elements with minimum cardinality = 1 must be marked as summary elements.
     */
    isSummary?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.FhirElement;
    /**
     * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
     */
    binding?: fhir.ElementDefinitionBinding | undefined;
    /**
     * Mappings are not necessarily specific enough for safe translation.
     */
    mapping?: (fhir.ElementDefinitionMapping | null)[] | undefined;
}
//# sourceMappingURL=ElementDefinition.d.ts.map