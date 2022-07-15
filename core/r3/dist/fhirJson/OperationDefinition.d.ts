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
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.FhirElement;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetUri?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.valueSet[x]
     */
    _valueSetUri?: fhir.FhirElement;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSetReference?: fhir.Reference | undefined;
}
/**
 * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
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
     * Extended properties for primitive element: OperationDefinition.parameter.use
     */
    _use?: fhir.FhirElement;
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
    type?: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Any' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'DataElement' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'Type' | 'unsignedInt' | 'uri' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElement;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'string' | 'token' | 'uri' | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.searchType
     */
    _searchType?: fhir.FhirElement;
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
    part?: (fhir.OperationDefinitionParameter | null)[] | undefined;
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export interface OperationDefinitionOverload extends fhir.BackboneElement {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: (string | null)[] | undefined;
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
    resourceType: "OperationDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of operation definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired operation definition without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: 'operation' | 'query' | null;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Allows filtering of operation definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental operation definition in production.
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
     * Usually an organization, but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the operation definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.idempotent
     */
    _idempotent?: fhir.FhirElement;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
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
    base?: fhir.Reference | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
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
     * Query Definitions only have one output parameter, named "result". This may not be described, but can be to allow a profile to be defined.
     */
    parameter?: (fhir.OperationDefinitionParameter | null)[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: (fhir.OperationDefinitionOverload | null)[] | undefined;
}
//# sourceMappingURL=OperationDefinition.d.ts.map