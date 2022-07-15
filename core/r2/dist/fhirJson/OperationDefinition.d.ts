import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface OperationDefinitionContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the operation definition.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export interface OperationDefinitionParameterBinding extends fhir.BackboneElement {
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
     */
    strength: 'example' | 'extensible' | 'preferred' | 'required' | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
     */
    _strength?: fhir.FhirElement;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSetUri?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.binding.valueSet[x]
     */
    _valueSetUri?: fhir.FhirElement;
    /**
     * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
     */
    valueSetReference?: fhir.Reference | undefined;
}
/**
 * The parameters for the operation/query.
 */
export interface OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * The name of used to identify the parameter.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * Whether this is an input or an output parameter.
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
     * The type for this parameter.
     */
    type?: 'Account' | 'Address' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'composite' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'ContactPoint' | 'Contract' | 'Count' | 'Coverage' | 'DataElement' | 'date' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'List' | 'Location' | 'markdown' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'number' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'positiveInt' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'quantity' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'reference' | 'Reference' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'string' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'time' | 'Timing' | 'token' | 'unsignedInt' | 'uri' | 'uri' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.parameter.type
     */
    _type?: fhir.FhirElement;
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
    part?: (fhir.OperationDefinitionParameter | null)[] | undefined;
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
     * An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be multiple resource versions of the profile that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the operation.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: OperationDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: OperationDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Whether this is an operation or a named query.
     */
    kind: 'operation' | 'query' | null;
    /**
     * Extended properties for primitive element: OperationDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Allows filtering of profiles that are appropriate for use vs. not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.OperationDefinitionContact | null)[] | undefined;
    /**
     * The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * A free text natural language description of the profile and its use.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * Explains why this operation definition is needed and why it's been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
     */
    idempotent?: boolean | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.idempotent
     */
    _idempotent?: fhir.FhirElement;
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
    notes?: string | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.notes
     */
    _notes?: fhir.FhirElement;
    /**
     * Indicates that this operation definition is a constraining profile on the base.
     */
    base?: fhir.Reference | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.system
     */
    _system?: fhir.FhirElement;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
     */
    type?: (('Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: OperationDefinition.type
     */
    _type?: (fhir.FhirElement | null)[];
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: boolean | null;
    /**
     * Extended properties for primitive element: OperationDefinition.instance
     */
    _instance?: fhir.FhirElement;
    /**
     * The parameters for the operation/query.
     */
    parameter?: (fhir.OperationDefinitionParameter | null)[] | undefined;
}
//# sourceMappingURL=OperationDefinition.d.ts.map