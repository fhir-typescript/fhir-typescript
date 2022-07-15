import * as fhir from '../fhirJson.js';
/**
 * Information about how a resource is related to the compartment.
 */
export interface CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * The name of a resource supported by the server.
     */
    code: 'Account' | 'ActivityDefinition' | 'AdministrableProductDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Citation' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'ClinicalUseDefinition' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceReport' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Ingredient' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'ManufacturedItemDefinition' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProductDefinition' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'NutritionProduct' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'PackagedProductDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RegulatedAuthorization' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'SubscriptionStatus' | 'SubscriptionTopic' | 'Substance' | 'SubstanceDefinition' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.code
     */
    _code?: fhir.FhirElement;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.param
     */
    _param?: (fhir.FhirElement | null)[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export interface CompartmentDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: 'Device' | 'Encounter' | 'Patient' | 'Practitioner' | 'RelatedPerson' | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.code
     */
    _code?: fhir.FhirElement;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: boolean | null;
    /**
     * Extended properties for primitive element: CompartmentDefinition.search
     */
    _search?: fhir.FhirElement;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: (fhir.CompartmentDefinitionResource | null)[] | undefined;
}
//# sourceMappingURL=CompartmentDefinition.d.ts.map