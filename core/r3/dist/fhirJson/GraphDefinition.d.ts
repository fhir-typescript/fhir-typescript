import * as fhir from '../fhirJson.js';
/**
 * Compartment Consistency Rules.
 */
export interface GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement {
    /**
     * Identifies the compartment.
     */
    code: 'Device' | 'Encounter' | 'Patient' | 'Practitioner' | 'RelatedPerson' | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.code
     */
    _code?: fhir.FhirElement;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: 'custom' | 'different' | 'identical' | 'matching' | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.rule
     */
    _rule?: fhir.FhirElement;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.compartment.description
     */
    _description?: fhir.FhirElement;
}
/**
 * Potential target for the link.
 */
export interface GraphDefinitionLinkTarget extends fhir.BackboneElement {
    /**
     * Type of resource this link refers to.
     */
    type: 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.type
     */
    _type?: fhir.FhirElement;
    /**
     * Profile for the target resource.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.target.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: (fhir.GraphDefinitionLinkTargetCompartment | null)[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: (fhir.GraphDefinitionLink | null)[] | undefined;
}
/**
 * Links this graph makes rules about.
 */
export interface GraphDefinitionLink extends fhir.BackboneElement {
    /**
     * The path can be a literal path (e.g. Observation.subject), or it can be a query for reverse links (e.g. Provenance?target=[id]).
     */
    path: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.link.path
     */
    _path?: fhir.FhirElement;
    /**
     * Which slice (if profiled).
     */
    sliceName?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.sliceName
     */
    _sliceName?: fhir.FhirElement;
    /**
     * Minimum occurrences for this link.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.min
     */
    _min?: fhir.FhirElement;
    /**
     * Maximum occurrences for this link.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.max
     */
    _max?: fhir.FhirElement;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.link.description
     */
    _description?: fhir.FhirElement;
    /**
     * Potential target for the link.
     */
    target: (fhir.GraphDefinitionLinkTarget | null)[] | null;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export interface GraphDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: GraphDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of graph definitions that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired graph definition without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: GraphDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of graph definition that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental graph definition in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the graph definition Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: GraphDefinition.start
     */
    _start?: fhir.FhirElement;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: GraphDefinition.profile
     */
    _profile?: fhir.FhirElement;
    /**
     * Links this graph makes rules about.
     */
    link?: (fhir.GraphDefinitionLink | null)[] | undefined;
}
//# sourceMappingURL=GraphDefinition.d.ts.map