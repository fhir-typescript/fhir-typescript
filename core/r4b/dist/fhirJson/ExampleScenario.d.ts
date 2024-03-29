import * as fhir from '../fhirJson.js';
/**
 * Actor participating in the resource.
 */
export interface ExampleScenarioActor extends fhir.BackboneElement {
    /**
     * should this be called ID or acronym?
     */
    actorId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.actorId
     */
    _actorId?: fhir.FhirElement;
    /**
     * The type of actor - person or system.
     */
    type: 'entity' | 'person' | null;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.type
     */
    _type?: fhir.FhirElement;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.name
     */
    _name?: fhir.FhirElement;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.description
     */
    _description?: fhir.FhirElement;
}
/**
 * A specific version of the resource.
 */
export interface ExampleScenarioInstanceVersion extends fhir.BackboneElement {
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.versionId
     */
    _versionId?: fhir.FhirElement;
    /**
     * The description of the resource version.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.description
     */
    _description?: fhir.FhirElement;
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export interface ExampleScenarioInstanceContainedInstance extends fhir.BackboneElement {
    /**
     * Each resource contained in the instance.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.resourceId
     */
    _resourceId?: fhir.FhirElement;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.versionId
     */
    _versionId?: fhir.FhirElement;
}
/**
 * Each resource and each version that is present in the workflow.
 */
export interface ExampleScenarioInstance extends fhir.BackboneElement {
    /**
     * The id of the resource for referencing.
     */
    resourceId: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceId
     */
    _resourceId?: fhir.FhirElement;
    /**
     * The type of the resource.
     */
    resourceType: 'Account' | 'ActivityDefinition' | 'AdministrableProductDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Citation' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'ClinicalUseDefinition' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceReport' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Ingredient' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'ManufacturedItemDefinition' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProductDefinition' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'NutritionProduct' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'PackagedProductDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RegulatedAuthorization' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'SubscriptionStatus' | 'SubscriptionTopic' | 'Substance' | 'SubstanceDefinition' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceType
     */
    _resourceType?: fhir.FhirElement;
    /**
     * A short name for the resource instance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.name
     */
    _name?: fhir.FhirElement;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.description
     */
    _description?: fhir.FhirElement;
    /**
     * A specific version of the resource.
     */
    version?: (fhir.ExampleScenarioInstanceVersion | null)[] | undefined;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: (fhir.ExampleScenarioInstanceContainedInstance | null)[] | undefined;
}
/**
 * Each interaction or action.
 */
export interface ExampleScenarioProcessStepOperation extends fhir.BackboneElement {
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.number
     */
    _number?: fhir.FhirElement;
    /**
     * The type of operation - CRUD.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.type
     */
    _type?: fhir.FhirElement;
    /**
     * The human-friendly name of the interaction.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.name
     */
    _name?: fhir.FhirElement;
    /**
     * Who starts the transaction.
     */
    initiator?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiator
     */
    _initiator?: fhir.FhirElement;
    /**
     * Who receives the transaction.
     */
    receiver?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiver
     */
    _receiver?: fhir.FhirElement;
    /**
     * A comment to be inserted in the diagram.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.description
     */
    _description?: fhir.FhirElement;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiatorActive
     */
    _initiatorActive?: fhir.FhirElement;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiverActive
     */
    _receiverActive?: fhir.FhirElement;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export interface ExampleScenarioProcessStepAlternative extends fhir.BackboneElement {
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.title
     */
    _title?: fhir.FhirElement;
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.description
     */
    _description?: fhir.FhirElement;
    /**
     * What happens in each alternative option.
     */
    step?: (fhir.ExampleScenarioProcessStep | null)[] | undefined;
}
/**
 * Each step of the process.
 */
export interface ExampleScenarioProcessStep extends fhir.BackboneElement {
    /**
     * Nested process.
     */
    process?: (fhir.ExampleScenarioProcess | null)[] | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.pause
     */
    _pause?: fhir.FhirElement;
    /**
     * Each interaction or action.
     */
    operation?: fhir.ExampleScenarioProcessStepOperation | undefined;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: (fhir.ExampleScenarioProcessStepAlternative | null)[] | undefined;
}
/**
 * Each major process - a group of operations.
 */
export interface ExampleScenarioProcess extends fhir.BackboneElement {
    /**
     * The diagram title of the group of operations.
     */
    title: string | null;
    /**
     * Extended properties for primitive element: ExampleScenario.process.title
     */
    _title?: fhir.FhirElement;
    /**
     * A longer description of the group of operations.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.description
     */
    _description?: fhir.FhirElement;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.preConditions
     */
    _preConditions?: fhir.FhirElement;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.postConditions
     */
    _postConditions?: fhir.FhirElement;
    /**
     * Each step of the process.
     */
    step?: (fhir.ExampleScenarioProcessStep | null)[] | undefined;
}
/**
 * Example of workflow instance.
 */
export interface ExampleScenario extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.url
     */
    _url?: fhir.FhirElement;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ExampleScenario.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * Actor participating in the resource.
     */
    actor?: (fhir.ExampleScenarioActor | null)[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: (fhir.ExampleScenarioInstance | null)[] | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: (fhir.ExampleScenarioProcess | null)[] | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.workflow
     */
    _workflow?: (fhir.FhirElement | null)[];
}
//# sourceMappingURL=ExampleScenario.d.ts.map