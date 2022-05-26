import * as fhir from '../fhir.js';
import { ExamplescenarioActorTypeCodeType } from '../fhirValueSets/ExamplescenarioActorTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ExampleScenarioActor type.
 */
export interface ExampleScenarioActorArgs extends fhir.BackboneElementArgs {
    /**
     * should this be called ID or acronym?
     */
    actorId: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.actorId
     */
    _actorId?: fhir.FhirElementArgs;
    /**
     * The type of actor - person or system.
     */
    type: fhir.FhirCode<ExamplescenarioActorTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.actor.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * Actor participating in the resource.
 */
export declare class ExampleScenarioActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * should this be called ID or acronym?
     */
    actorId: fhir.FhirString | null;
    /**
     * The type of actor - person or system.
     */
    type: fhir.FhirCode<ExamplescenarioActorTypeCodeType> | null;
    /**
     * Cardinality: is name and description 1..1?
     */
    name?: fhir.FhirString | undefined;
    /**
     * Cardinality: is name and description 1..1?
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Default constructor for ExampleScenarioActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioActorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (ExampleScenario.actor.type)
     */
    static get typeRequiredCodes(): {
        readonly System: "entity";
        readonly Person: "person";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioInstanceVersion type.
 */
export interface ExampleScenarioInstanceVersionArgs extends fhir.BackboneElementArgs {
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.versionId
     */
    _versionId?: fhir.FhirElementArgs;
    /**
     * The description of the resource version.
     */
    description: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.version.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * A specific version of the resource.
 */
export declare class ExampleScenarioInstanceVersion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The identifier of a specific version of a resource.
     */
    versionId: fhir.FhirString | null;
    /**
     * The description of the resource version.
     */
    description: fhir.FhirMarkdown | null;
    /**
     * Default constructor for ExampleScenarioInstanceVersion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioInstanceVersionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioInstanceContainedInstance type.
 */
export interface ExampleScenarioInstanceContainedInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * Each resource contained in the instance.
     */
    resourceId: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.resourceId
     */
    _resourceId?: fhir.FhirElementArgs;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.containedInstance.versionId
     */
    _versionId?: fhir.FhirElementArgs;
}
/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export declare class ExampleScenarioInstanceContainedInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Each resource contained in the instance.
     */
    resourceId: fhir.FhirString | null;
    /**
     * A specific version of a resource contained in the instance.
     */
    versionId?: fhir.FhirString | undefined;
    /**
     * Default constructor for ExampleScenarioInstanceContainedInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioInstanceContainedInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioInstance type.
 */
export interface ExampleScenarioInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The id of the resource for referencing.
     */
    resourceId: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceId
     */
    _resourceId?: fhir.FhirElementArgs;
    /**
     * The type of the resource.
     */
    resourceType: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.resourceType
     */
    _resourceType?: fhir.FhirElementArgs;
    /**
     * A short name for the resource instance.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.instance.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * A specific version of the resource.
     */
    version?: fhir.ExampleScenarioInstanceVersionArgs[] | undefined;
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance?: fhir.ExampleScenarioInstanceContainedInstanceArgs[] | undefined;
}
/**
 * Each resource and each version that is present in the workflow.
 */
export declare class ExampleScenarioInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The id of the resource for referencing.
     */
    resourceId: fhir.FhirString | null;
    /**
     * The type of the resource.
     */
    resourceType: fhir.FhirCode | null;
    /**
     * A short name for the resource instance.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Human-friendly description of the resource instance.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * A specific version of the resource.
     */
    version: fhir.ExampleScenarioInstanceVersion[];
    /**
     * Resources contained in the instance (e.g. the observations contained in a bundle).
     */
    containedInstance: fhir.ExampleScenarioInstanceContainedInstance[];
    /**
     * Default constructor for ExampleScenarioInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for resourceType (ExampleScenario.instance.resourceType)
     */
    static get resourceTypeRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        /**
         * Extended properties for primitive element: ExampleScenario.actor.name
         */
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        readonly BiologicallyDerivedProduct: "BiologicallyDerivedProduct";
        readonly BodyStructure: "BodyStructure";
        readonly Bundle: "Bundle";
        readonly CapabilityStatement: "CapabilityStatement";
        readonly CarePlan: "CarePlan";
        readonly CareTeam: "CareTeam";
        readonly CatalogEntry: "CatalogEntry";
        readonly ChargeItem: "ChargeItem";
        readonly ChargeItemDefinition: "ChargeItemDefinition";
        readonly Claim: "Claim";
        readonly ClaimResponse: "ClaimResponse";
        readonly ClinicalImpression: "ClinicalImpression";
        readonly CodeSystem: "CodeSystem";
        readonly Communication: "Communication";
        readonly CommunicationRequest: "CommunicationRequest";
        readonly CompartmentDefinition: "CompartmentDefinition";
        readonly Composition: "Composition";
        readonly ConceptMap: "ConceptMap";
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device";
        readonly DeviceDefinition: "DeviceDefinition";
        readonly DeviceMetric: "DeviceMetric";
        readonly DeviceRequest: "DeviceRequest";
        readonly DeviceUseStatement: "DeviceUseStatement";
        readonly DiagnosticReport: "DiagnosticReport";
        readonly DocumentManifest: "DocumentManifest";
        readonly DocumentReference: "DocumentReference";
        readonly DomainResource: "DomainResource";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly Encounter: "Encounter";
        readonly Endpoint: "Endpoint";
        readonly EnrollmentRequest: "EnrollmentRequest";
        readonly EnrollmentResponse: "EnrollmentResponse";
        readonly EpisodeOfCare: "EpisodeOfCare";
        readonly EventDefinition: "EventDefinition";
        readonly Evidence: "Evidence";
        readonly EvidenceVariable: "EvidenceVariable";
        readonly ExampleScenario: "ExampleScenario";
        readonly ExplanationOfBenefit: "ExplanationOfBenefit";
        readonly FamilyMemberHistory: "FamilyMemberHistory";
        readonly Flag: "Flag";
        readonly Goal: "Goal";
        readonly GraphDefinition: "GraphDefinition";
        readonly Group: "Group";
        readonly GuidanceResponse: "GuidanceResponse";
        readonly HealthcareService: "HealthcareService";
        readonly ImagingStudy: "ImagingStudy";
        readonly Immunization: "Immunization";
        readonly ImmunizationEvaluation: "ImmunizationEvaluation";
        readonly ImmunizationRecommendation: "ImmunizationRecommendation";
        readonly ImplementationGuide: "ImplementationGuide";
        readonly InsurancePlan: "InsurancePlan";
        readonly Invoice: "Invoice";
        readonly Library: "Library";
        readonly Linkage: "Linkage";
        readonly List: "List";
        readonly Location: "Location";
        readonly Measure: "Measure";
        readonly MeasureReport: "MeasureReport";
        readonly Media: "Media";
        readonly Medication: "Medication";
        readonly MedicationAdministration: "MedicationAdministration";
        readonly MedicationDispense: "MedicationDispense";
        readonly MedicationKnowledge: "MedicationKnowledge";
        readonly MedicationRequest: "MedicationRequest";
        readonly MedicationStatement: "MedicationStatement";
        readonly MedicinalProduct: "MedicinalProduct";
        readonly MedicinalProductAuthorization: "MedicinalProductAuthorization";
        readonly MedicinalProductContraindication: "MedicinalProductContraindication";
        readonly MedicinalProductIndication: "MedicinalProductIndication";
        readonly MedicinalProductIngredient: "MedicinalProductIngredient";
        readonly MedicinalProductInteraction: "MedicinalProductInteraction";
        readonly MedicinalProductManufactured: "MedicinalProductManufactured";
        readonly MedicinalProductPackaged: "MedicinalProductPackaged";
        readonly MedicinalProductPharmaceutical: "MedicinalProductPharmaceutical";
        readonly MedicinalProductUndesirableEffect: "MedicinalProductUndesirableEffect";
        readonly MessageDefinition: "MessageDefinition";
        readonly MessageHeader: "MessageHeader";
        readonly MolecularSequence: "MolecularSequence";
        readonly NamingSystem: "NamingSystem";
        readonly NutritionOrder: "NutritionOrder";
        readonly Observation: "Observation";
        readonly ObservationDefinition: "ObservationDefinition";
        readonly OperationDefinition: "OperationDefinition";
        readonly OperationOutcome: "OperationOutcome";
        readonly Organization: "Organization";
        readonly OrganizationAffiliation: "OrganizationAffiliation";
        readonly Parameters: "Parameters";
        readonly Patient: "Patient";
        readonly PaymentNotice: "PaymentNotice";
        readonly PaymentReconciliation: "PaymentReconciliation";
        readonly Person: "Person";
        readonly PlanDefinition: "PlanDefinition";
        readonly Practitioner: "Practitioner";
        readonly PractitionerRole: "PractitionerRole";
        readonly Procedure: "Procedure";
        readonly Provenance: "Provenance";
        readonly Questionnaire: "Questionnaire";
        readonly QuestionnaireResponse: "QuestionnaireResponse";
        readonly RelatedPerson: "RelatedPerson";
        readonly RequestGroup: "RequestGroup";
        readonly ResearchDefinition: "ResearchDefinition";
        readonly ResearchElementDefinition: "ResearchElementDefinition";
        readonly ResearchStudy: "ResearchStudy";
        readonly ResearchSubject: "ResearchSubject"; /**
         * Each step of the process.
         */
        readonly Resource: "Resource";
        readonly RiskAssessment: "RiskAssessment";
        readonly RiskEvidenceSynthesis: "RiskEvidenceSynthesis";
        readonly Schedule: "Schedule";
        readonly SearchParameter: "SearchParameter";
        readonly ServiceRequest: "ServiceRequest";
        readonly Slot: "Slot";
        readonly Specimen: "Specimen";
        readonly SpecimenDefinition: "SpecimenDefinition";
        readonly StructureDefinition: "StructureDefinition";
        readonly StructureMap: "StructureMap";
        readonly Subscription: "Subscription";
        readonly Substance: "Substance";
        readonly SubstanceNucleicAcid: "SubstanceNucleicAcid";
        readonly SubstancePolymer: "SubstancePolymer";
        readonly SubstanceProtein: "SubstanceProtein";
        readonly SubstanceReferenceInformation: "SubstanceReferenceInformation";
        readonly SubstanceSourceMaterial: "SubstanceSourceMaterial";
        readonly SubstanceSpecification: "SubstanceSpecification";
        readonly SupplyDelivery: "SupplyDelivery";
        readonly SupplyRequest: "SupplyRequest";
        readonly Task: "Task";
        readonly TerminologyCapabilities: "TerminologyCapabilities";
        readonly TestReport: "TestReport";
        readonly TestScript: "TestScript";
        readonly ValueSet: "ValueSet";
        readonly VerificationResult: "VerificationResult";
        readonly VisionPrescription: "VisionPrescription";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioProcessStepOperation type.
 */
export interface ExampleScenarioProcessStepOperationArgs extends fhir.BackboneElementArgs {
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.number
     */
    _number?: fhir.FhirElementArgs;
    /**
     * The type of operation - CRUD.
     */
    type?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The human-friendly name of the interaction.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Who starts the transaction.
     */
    initiator?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiator
     */
    _initiator?: fhir.FhirElementArgs;
    /**
     * Who receives the transaction.
     */
    receiver?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiver
     */
    _receiver?: fhir.FhirElementArgs;
    /**
     * A comment to be inserted in the diagram.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.initiatorActive
     */
    _initiatorActive?: fhir.FhirElementArgs;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.operation.receiverActive
     */
    _receiverActive?: fhir.FhirElementArgs;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.ExampleScenarioInstanceContainedInstanceArgs | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.ExampleScenarioInstanceContainedInstanceArgs | undefined;
}
/**
 * Each interaction or action.
 */
export declare class ExampleScenarioProcessStepOperation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The sequential number of the interaction, e.g. 1.2.5.
     */
    number: fhir.FhirString | null;
    /**
     * The type of operation - CRUD.
     */
    type?: fhir.FhirString | undefined;
    /**
     * The human-friendly name of the interaction.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Who starts the transaction.
     */
    initiator?: fhir.FhirString | undefined;
    /**
     * Who receives the transaction.
     */
    receiver?: fhir.FhirString | undefined;
    /**
     * A comment to be inserted in the diagram.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Whether the initiator is deactivated right after the transaction.
     */
    initiatorActive?: fhir.FhirBoolean | undefined;
    /**
     * Whether the receiver is deactivated right after the transaction.
     */
    receiverActive?: fhir.FhirBoolean | undefined;
    /**
     * Each resource instance used by the initiator.
     */
    request?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Each resource instance used by the responder.
     */
    response?: fhir.ExampleScenarioInstanceContainedInstance | undefined;
    /**
     * Default constructor for ExampleScenarioProcessStepOperation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioProcessStepOperationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioProcessStepAlternative type.
 */
export interface ExampleScenarioProcessStepAlternativeArgs extends fhir.BackboneElementArgs {
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.alternative.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * What happens in each alternative option.
     */
    step?: fhir.ExampleScenarioProcessStepArgs[] | undefined;
}
/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export declare class ExampleScenarioProcessStepAlternative extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
     */
    title: fhir.FhirString | null;
    /**
     * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * What happens in each alternative option.
     */
    step: fhir.ExampleScenarioProcessStep[];
    /**
     * Default constructor for ExampleScenarioProcessStepAlternative - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioProcessStepAlternativeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioProcessStep type.
 */
export interface ExampleScenarioProcessStepArgs extends fhir.BackboneElementArgs {
    /**
     * Nested process.
     */
    process?: fhir.ExampleScenarioProcessArgs[] | undefined;
    /**
     * If there is a pause in the flow.
     */
    pause?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.step.pause
     */
    _pause?: fhir.FhirElementArgs;
    /**
     * Each interaction or action.
     */
    operation?: fhir.ExampleScenarioProcessStepOperationArgs | undefined;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative?: fhir.ExampleScenarioProcessStepAlternativeArgs[] | undefined;
}
/**
 * Each step of the process.
 */
export declare class ExampleScenarioProcessStep extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Nested process.
     */
    process: fhir.ExampleScenarioProcess[];
    /**
     * If there is a pause in the flow.
     */
    pause?: fhir.FhirBoolean | undefined;
    /**
     * Each interaction or action.
     */
    operation?: fhir.ExampleScenarioProcessStepOperation | undefined;
    /**
     * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
     */
    alternative: fhir.ExampleScenarioProcessStepAlternative[];
    /**
     * Default constructor for ExampleScenarioProcessStep - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioProcessStepArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenarioProcess type.
 */
export interface ExampleScenarioProcessArgs extends fhir.BackboneElementArgs {
    /**
     * The diagram title of the group of operations.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A longer description of the group of operations.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.preConditions
     */
    _preConditions?: fhir.FhirElementArgs;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.process.postConditions
     */
    _postConditions?: fhir.FhirElementArgs;
    /**
     * Each step of the process.
     */
    step?: fhir.ExampleScenarioProcessStepArgs[] | undefined;
}
/**
 * Each major process - a group of operations.
 */
export declare class ExampleScenarioProcess extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The diagram title of the group of operations.
     */
    title: fhir.FhirString | null;
    /**
     * A longer description of the group of operations.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * Description of initial status before the process starts.
     */
    preConditions?: fhir.FhirMarkdown | undefined;
    /**
     * Description of final status after the process ends.
     */
    postConditions?: fhir.FhirMarkdown | undefined;
    /**
     * Each step of the process.
     */
    step: fhir.ExampleScenarioProcessStep[];
    /**
     * Default constructor for ExampleScenarioProcess - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioProcessArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ExampleScenario type.
 */
export interface ExampleScenarioArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * Actor participating in the resource.
     */
    actor?: fhir.ExampleScenarioActorArgs[] | undefined;
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance?: fhir.ExampleScenarioInstanceArgs[] | undefined;
    /**
     * Each major process - a group of operations.
     */
    process?: fhir.ExampleScenarioProcessArgs[] | undefined;
    /**
     * Another nested workflow.
     */
    workflow?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ExampleScenario.workflow
     */
    _workflow?: (fhir.FhirElementArgs | null)[];
}
/**
 * Example of workflow instance.
 */
export declare class ExampleScenario extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ExampleScenario";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this example scenario outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier: fhir.Identifier[];
    /**
     * There may be different example scenario instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the example scenario with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of example scenarios that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the example scenario. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the example scenario is the organization or individual primarily responsible for the maintenance and upkeep of the example scenario. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the example scenario. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the example scenario to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * nullFrequently, the copyright differs between the value set and the codes that are included. The copyright statement should clearly differentiate between these when required.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * This element does not describe the usage of the example scenario. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this example scenario.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Actor participating in the resource.
     */
    actor: fhir.ExampleScenarioActor[];
    /**
     * Each resource and each version that is present in the workflow.
     */
    instance: fhir.ExampleScenarioInstance[];
    /**
     * Each major process - a group of operations.
     */
    process: fhir.ExampleScenarioProcess[];
    /**
     * Another nested workflow.
     */
    workflow: fhir.FhirCanonical[];
    /**
     * Default constructor for ExampleScenario - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ExampleScenarioArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ExampleScenario.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ExampleScenario.d.ts.map