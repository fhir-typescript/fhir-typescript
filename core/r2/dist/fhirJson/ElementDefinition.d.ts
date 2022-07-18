import * as fhir from '../fhirJson.js';
/**
 * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
 */
export interface ElementDefinitionSlicing extends fhir.FhirElement {
    /**
     * Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.
     */
    discriminator?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.discriminator
     */
    _discriminator?: (fhir.FhirElement | null)[];
    /**
     * A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.description
     */
    _description?: fhir.FhirElement;
    /**
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.ordered
     */
    _ordered?: fhir.FhirElement;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.
     */
    rules: 'closed' | 'open' | 'openAtEnd' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.slicing.rules
     */
    _rules?: fhir.FhirElement;
}
/**
 * Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
 */
export interface ElementDefinitionBase extends fhir.FhirElement {
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.path
     */
    _path?: fhir.FhirElement;
    /**
     * Minimum cardinality of the base element identified by the path.
     */
    min: number | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.min
     */
    _min?: fhir.FhirElement;
    /**
     * Maximum cardinality of the base element identified by the path.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.base.max
     */
    _max?: fhir.FhirElement;
}
/**
 * The data type or resource that the value of this element is permitted to be.
 */
export interface ElementDefinitionType extends fhir.FhirElement {
    /**
     * Name of Data type or Resource that is a(or the) type used for this element.
     */
    code: 'Account' | 'Address' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'ContactPoint' | 'Contract' | 'Count' | 'Coverage' | 'DataElement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'List' | 'Location' | 'markdown' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'positiveInt' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'time' | 'Timing' | 'unsignedInt' | 'uri' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.type.code
     */
    _code?: fhir.FhirElement;
    /**
     * Identifies a profile structure or implementation Guide that SHALL hold for resources or datatypes referenced as the type of this element. Can be a local reference - to another structure in this profile, or a reference to a structure in another profile. When more than one profile is specified, the content must conform to all of them. When an implementation guide is specified, the resource SHALL conform to at least one profile defined in the implementation guide.
     */
    profile?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.profile
     */
    _profile?: (fhir.FhirElement | null)[];
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle.
     */
    aggregation?: (('bundled' | 'contained' | 'referenced') | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.type.aggregation
     */
    _aggregation?: (fhir.FhirElement | null)[];
}
/**
 * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
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
     * Description of why this constraint is necessary or appropriate.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * Identifies the impact constraint violation has on the conformance of the instance.
     */
    severity: 'error' | 'warning' | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.severity
     */
    _severity?: fhir.FhirElement;
    /**
     * Text that can be used to describe the constraint in messages identifying that the constraint has been violated.
     */
    human: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.human
     */
    _human?: fhir.FhirElement;
    /**
     * Used in Schematron tests of the validity of the resource.
     */
    xpath: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.constraint.xpath
     */
    _xpath?: fhir.FhirElement;
}
/**
 * Binds to a value set if this element is coded (code, Coding, CodeableConcept).
 */
export interface ElementDefinitionBinding extends fhir.FhirElement {
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
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
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSetUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.binding.valueSet[x]
     */
    _valueSetUri?: fhir.FhirElement;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSetReference?: fhir.Reference | undefined;
}
/**
 * Provides guidance to implementers familiar with or converting content from other specifications.
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
     * Identifies the computable language in which mapping.map is expressed.
     */
    language?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.language
     */
    _language?: fhir.FhirElement;
    /**
     * Expresses what part of the target specification corresponds to this element.
     */
    map: string | null;
    /**
     * Extended properties for primitive element: ElementDefinition.mapping.map
     */
    _map?: fhir.FhirElement;
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
     * Codes that define how this element is represented in instances, when the deviation varies from the normal case.
     */
    representation?: (('xmlAttr') | null)[] | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.representation
     */
    _representation?: (fhir.FhirElement | null)[];
    /**
     * Allows referencing a defined element.  May also be used for code generation purposes.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * The text to display beside the element indicating its meaning or to use to prompt for the element in a user display or form.
     */
    label?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.label
     */
    _label?: fhir.FhirElement;
    /**
     * Links the meaning of an element to an external terminology.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * Indicates that the element is sliced into a set of alternative definitions (i.e. in a structure definition, there are multiple different constraints on a single element in the base resource). Slicing can be used in any resource that has cardinality ..* on the base resource, or any resource with a choice of types. The set of slices is any elements that come after this in the element sequence that have the same path, until a shorter path occurs (the shorter path terminates the set).
     */
    slicing?: fhir.ElementDefinitionSlicing | undefined;
    /**
     * A concise description of what this element means (e.g. for use in autogenerated summaries).
     */
    short?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.short
     */
    _short?: fhir.FhirElement;
    /**
     * To allow a user to state the usage of an element in a particular context.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * Explanatory notes and implementation guidance about the data element, including notes about how to use the data properly, exceptions to proper use, etc.
     */
    comments?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.comments
     */
    _comments?: fhir.FhirElement;
    /**
     * This element is for traceability of why the element was created and why the constraints exist as they do. This may be used to point to source materials or specifications that drove the structure of this element.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * Allows for better easier recognition of the element by multiple communities, including international communities.
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
     * Information about the base definition of the element, provided to make it unncessary for tools to trace the deviation of the element through the derived and related profiles. This information is only provided where the element definition represents a constraint on another element definition, and must be present if there is a base element definition.
     */
    base?: fhir.ElementDefinitionBase | undefined;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type?: (fhir.ElementDefinitionType | null)[] | undefined;
    /**
     * Identifies the name of a slice defined elsewhere in the profile whose constraints should be applied to the current element.
     */
    nameReference?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.nameReference
     */
    _nameReference?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBoolean?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInteger?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDecimal?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueBase64Binary?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueInstant?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueString?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUri?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDate?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueDateTime?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueTime?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueCode?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueOid?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueId?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueUnsignedInt?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValuePositiveInt?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.defaultValue[x]
     */
    _defaultValueMarkdown?: fhir.FhirElement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAnnotation?: fhir.Annotation | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAttachment?: fhir.Attachment | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueIdentifier?: fhir.Identifier | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueCoding?: fhir.Coding | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueQuantity?: fhir.Quantity | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueRange?: fhir.Range | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValuePeriod?: fhir.Period | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueRatio?: fhir.Ratio | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueSampledData?: fhir.SampledData | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueSignature?: fhir.Signature | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueHumanName?: fhir.HumanName | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueAddress?: fhir.Address | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueTiming?: fhir.Timing | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueReference?: fhir.Reference | undefined;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not otherwise specified, the abstract is false').
     */
    defaultValueMeta?: fhir.Meta | undefined;
    /**
     * The Implicit meaning that is to be understood when this element is missing (e.g. 'when this element is missing, the period is ongoing'.
     */
    meaningWhenMissing?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.meaningWhenMissing
     */
    _meaningWhenMissing?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBoolean?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInteger?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDecimal?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedBase64Binary?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedInstant?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedString?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUri?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDate?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedDateTime?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedTime?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedCode?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedOid?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedId?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedUnsignedInt?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedPositiveInt?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.fixed[x]
     */
    _fixedMarkdown?: fhir.FhirElement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAnnotation?: fhir.Annotation | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAttachment?: fhir.Attachment | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedIdentifier?: fhir.Identifier | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCoding?: fhir.Coding | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedQuantity?: fhir.Quantity | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRange?: fhir.Range | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPeriod?: fhir.Period | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRatio?: fhir.Ratio | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSampledData?: fhir.SampledData | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSignature?: fhir.Signature | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedHumanName?: fhir.HumanName | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAddress?: fhir.Address | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTiming?: fhir.Timing | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedReference?: fhir.Reference | undefined;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For purposes of comparison, non-significant whitespace is ignored, and all values must be an exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMeta?: fhir.Meta | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBoolean?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInteger?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDecimal?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternBase64Binary?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternInstant?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternString?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUri?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDate?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternDateTime?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternTime?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternCode?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternOid?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternId?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternUnsignedInt?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternPositiveInt?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.pattern[x]
     */
    _patternMarkdown?: fhir.FhirElement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAnnotation?: fhir.Annotation | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAttachment?: fhir.Attachment | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternIdentifier?: fhir.Identifier | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternCoding?: fhir.Coding | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternQuantity?: fhir.Quantity | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternRange?: fhir.Range | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternPeriod?: fhir.Period | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternRatio?: fhir.Ratio | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternSampledData?: fhir.SampledData | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternSignature?: fhir.Signature | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternHumanName?: fhir.HumanName | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternAddress?: fhir.Address | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternContactPoint?: fhir.ContactPoint | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternTiming?: fhir.Timing | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternReference?: fhir.Reference | undefined;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the pattern must be found in the instance. Other additional values may be found too. This is effectively constraint by example.  The values of elements present in the pattern must match exactly (case-sensitive, accent-sensitive, etc.).
     */
    patternMeta?: fhir.Meta | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleBoolean?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleInteger?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleDecimal?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleBase64Binary?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleInstant?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleString?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleUri?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleDate?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleDateTime?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleTime?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleCode?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleOid?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleId?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleUnsignedInt?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    examplePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _examplePositiveInt?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.example[x]
     */
    _exampleMarkdown?: fhir.FhirElement;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAnnotation?: fhir.Annotation | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAttachment?: fhir.Attachment | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleIdentifier?: fhir.Identifier | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleCoding?: fhir.Coding | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleQuantity?: fhir.Quantity | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleRange?: fhir.Range | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    examplePeriod?: fhir.Period | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleRatio?: fhir.Ratio | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleSampledData?: fhir.SampledData | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleSignature?: fhir.Signature | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleHumanName?: fhir.HumanName | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleAddress?: fhir.Address | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleContactPoint?: fhir.ContactPoint | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleTiming?: fhir.Timing | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleReference?: fhir.Reference | undefined;
    /**
     * A sample value for this element demonstrating the type of information that would typically be captured.
     */
    exampleMeta?: fhir.Meta | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueBoolean?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInteger?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDecimal?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueBase64Binary?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueInstant?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueString?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueUri?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDate?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueDateTime?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueTime?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueCode?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueOid?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueId?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueUnsignedInt?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValuePositiveInt?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.minValue[x]
     */
    _minValueMarkdown?: fhir.FhirElement;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAnnotation?: fhir.Annotation | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAttachment?: fhir.Attachment | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueIdentifier?: fhir.Identifier | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueCoding?: fhir.Coding | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueQuantity?: fhir.Quantity | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueRange?: fhir.Range | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePeriod?: fhir.Period | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueRatio?: fhir.Ratio | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueSampledData?: fhir.SampledData | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueSignature?: fhir.Signature | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueHumanName?: fhir.HumanName | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueAddress?: fhir.Address | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTiming?: fhir.Timing | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueReference?: fhir.Reference | undefined;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueMeta?: fhir.Meta | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueBoolean?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInteger?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInteger?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDecimal?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueBase64Binary?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInstant?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueInstant?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueString?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueString?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUri?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueUri?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDate?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDate?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueDateTime?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTime?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueTime?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCode?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueCode?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueOid?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueOid?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueId?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueId?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUnsignedInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueUnsignedInt?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValuePositiveInt?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueMarkdown?: string | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.maxValue[x]
     */
    _maxValueMarkdown?: fhir.FhirElement;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAnnotation?: fhir.Annotation | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAttachment?: fhir.Attachment | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueIdentifier?: fhir.Identifier | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueCoding?: fhir.Coding | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueQuantity?: fhir.Quantity | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueRange?: fhir.Range | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePeriod?: fhir.Period | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueRatio?: fhir.Ratio | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueSampledData?: fhir.SampledData | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueSignature?: fhir.Signature | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueHumanName?: fhir.HumanName | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueAddress?: fhir.Address | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueContactPoint?: fhir.ContactPoint | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTiming?: fhir.Timing | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueReference?: fhir.Reference | undefined;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueMeta?: fhir.Meta | undefined;
    /**
     * Indicates the maximum length in characters that is permitted to be present in conformant instances and which is expected to be supported by conformant consumers that support the element.
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
     * Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance.
     */
    constraint?: (fhir.ElementDefinitionConstraint | null)[] | undefined;
    /**
     * Allows a profile to set expectations for system capabilities beyond merely respecting cardinality constraints.
     */
    mustSupport?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.mustSupport
     */
    _mustSupport?: fhir.FhirElement;
    /**
     * Allows elements to be introduced into a specification that can't safely be ignored by applications that don't recognize them.
     */
    isModifier?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isModifier
     */
    _isModifier?: fhir.FhirElement;
    /**
     * Allow clients to search through large resources quickly.
     */
    isSummary?: boolean | undefined;
    /**
     * Extended properties for primitive element: ElementDefinition.isSummary
     */
    _isSummary?: fhir.FhirElement;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.ElementDefinitionBinding | undefined;
    /**
     * Provides guidance to implementers familiar with or converting content from other specifications.
     */
    mapping?: (fhir.ElementDefinitionMapping | null)[] | undefined;
}
//# sourceMappingURL=ElementDefinition.d.ts.map