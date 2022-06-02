import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
/**
 * Valid arguments for the CompartmentDefinitionResource type.
 */
export interface CompartmentDefinitionResourceArgs extends fhir.BackboneElementArgs {
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.param
     */
    _param?: (fhir.FhirElementArgs | null)[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.resource.documentation
     */
    _documentation?: fhir.FhirElementArgs;
}
/**
 * Information about how a resource is related to the compartment.
 */
export declare class CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of a resource supported by the server.
     */
    code: fhir.FhirCode | null;
    /**
     * If no search parameters are listed, then the resource is not linked to the compartment.
     */
    param: fhir.FhirString[];
    /**
     * Additional documentation about the resource and compartment.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (CompartmentDefinition.resource.code)
     */
    static get codeRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
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
        readonly ResearchSubject: "ResearchSubject";
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the CompartmentDefinition type.
 */
export interface CompartmentDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.purpose
     */
    _purpose?: fhir.FhirElementArgs;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: CompartmentDefinition.search
     */
    _search?: fhir.FhirElementArgs;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource?: fhir.CompartmentDefinitionResourceArgs[] | undefined;
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export declare class CompartmentDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "CompartmentDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of compartment definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * Only the specification can define the compartments that can exist. Servers can choose to support them.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | null;
    /**
     * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
     */
    search: fhir.FhirBoolean | null;
    /**
     * Information about how a resource is related to the compartment.
     */
    resource: fhir.CompartmentDefinitionResource[];
    /**
     * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CompartmentDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (CompartmentDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for code (CompartmentDefinition.code)
     */
    static get codeRequiredCodes(): {
        readonly Device: "Device";
        readonly Encounter: "Encounter";
        readonly Patient: "Patient";
        readonly Practitioner: "Practitioner";
        readonly RelatedPerson: "RelatedPerson";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CompartmentDefinition.d.ts.map