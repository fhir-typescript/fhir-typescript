import * as fhir from '../fhirJson.js';
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export interface OperationDefinitionParameterBinding extends fhir.BackboneElement {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: 'example' | 'extensible' | 'preferred' | 'required' | null;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.valueSet
     */
    _valueSet?: fhir.FhirElement;
}
/**
 * Resolution applies if the referenced parameter exists.
 */
export interface OperationDefinitionParameterReferencedFrom extends fhir.BackboneElement {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.source
     */
    _source?: fhir.FhirElement;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.referencedFrom.sourceId
     */
    _sourceId?: fhir.FhirElement;
}
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export interface OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: 'in' | 'out' | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: number | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.min
     */
    _min?: fhir.FhirElement;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.max
     */
    _max?: fhir.FhirElement;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Any' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'boolean' | 'Bundle' | 'canonical' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'EffectEvidenceSynthesis' | 'Element' | 'ElementDefinition' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'Expression' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'InsurancePlan' | 'integer' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'MarketingStatus' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'MolecularSequence' | 'Money' | 'MoneyQuantity' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'Population' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProdCharacteristic' | 'ProductShelfLife' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceAmount' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'Type' | 'unsignedInt' | 'uri' | 'url' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElement;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.targetProfile
     */
    _targetProfile?: (fhir.FhirElement | null)[];
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'special' | 'string' | 'token' | 'uri' | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.OperationDefinitionParameterReferencedFrom[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameter[] | undefined;
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export interface OperationDefinitionOverload extends fhir.BackboneElement {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: string[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.parameterName
     */
    _parameterName?: (fhir.FhirElement | null)[];
    /**
     * Comments to go on overload.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.overload.comment
     */
    _comment?: fhir.FhirElement;
}
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export interface OperationDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: 'operation' | 'query' | null;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetail[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContext[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConcept[] | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.affectsState
     */
    _affectsState?: fhir.FhirElement;
    /**
     * The name used to invoke the operation.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.code
     */
    _code?: fhir.FhirElement;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.comment
     */
    _comment?: fhir.FhirElement;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.base
     */
    _base?: fhir.FhirElement;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: ('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EffectEvidenceSynthesis' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription')[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.resource
     */
    _resource?: (fhir.FhirElement | null)[];
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.FhirElement;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.FhirElement;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.inputProfile
     */
    _inputProfile?: fhir.FhirElement;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.outputProfile
     */
    _outputProfile?: fhir.FhirElement;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.OperationDefinitionParameter[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.OperationDefinitionOverload[] | undefined;
}
//# sourceMappingURL=OperationDefinition.d.ts.map