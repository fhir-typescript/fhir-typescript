import * as fhir from '../fhir.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
/**
 * Valid arguments for the ParameterDefinition type.
 */
export interface ParameterDefinitionArgs extends fhir.FhirElementArgs {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: fhir.FhirCode | string | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | string | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * The type of the parameter.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: fhir.FhirCanonical | string | undefined;
}
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export declare class ParameterDefinition extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: fhir.FhirCode | undefined;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: fhir.FhirString | undefined;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * The type of the parameter.
     */
    type: fhir.FhirCode | null;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ParameterDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (ParameterDefinition.use)
     */
    static get useRequiredCodes(): {
        readonly In: "in";
        readonly Out: "out";
    };
    /**
     * Required-bound Value Set for type (ParameterDefinition.type)
     */
    static get typeRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly Address: "Address";
        readonly AdverseEvent: "AdverseEvent";
        readonly Age: "Age";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Annotation: "Annotation";
        readonly Any: "Any";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly Attachment: "Attachment";
        readonly AuditEvent: "AuditEvent";
        readonly BackboneElement: "BackboneElement";
        readonly Base64Binary: "base64Binary";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        readonly BiologicallyDerivedProduct: "BiologicallyDerivedProduct";
        readonly BodyStructure: "BodyStructure";
        readonly VALBoolean: "boolean";
        readonly Bundle: "Bundle";
        readonly Canonical: "canonical";
        readonly CapabilityStatement: "CapabilityStatement";
        readonly CarePlan: "CarePlan";
        readonly CareTeam: "CareTeam";
        readonly CatalogEntry: "CatalogEntry";
        readonly ChargeItem: "ChargeItem";
        readonly ChargeItemDefinition: "ChargeItemDefinition";
        readonly Claim: "Claim";
        readonly ClaimResponse: "ClaimResponse";
        readonly ClinicalImpression: "ClinicalImpression";
        readonly Code: "code";
        readonly CodeableConcept: "CodeableConcept";
        readonly CodeSystem: "CodeSystem";
        readonly Coding: "Coding";
        readonly Communication: "Communication";
        readonly CommunicationRequest: "CommunicationRequest";
        readonly CompartmentDefinition: "CompartmentDefinition";
        readonly Composition: "Composition";
        readonly ConceptMap: "ConceptMap";
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly ContactDetail: "ContactDetail";
        readonly ContactPoint: "ContactPoint";
        readonly Contract: "Contract";
        readonly Contributor: "Contributor";
        readonly Count: "Count";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DataRequirement: "DataRequirement";
        readonly Date: "date";
        readonly DateTime: "dateTime";
        readonly Decimal: "decimal";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device";
        readonly DeviceDefinition: "DeviceDefinition";
        readonly DeviceMetric: "DeviceMetric";
        readonly DeviceRequest: "DeviceRequest";
        readonly DeviceUseStatement: "DeviceUseStatement";
        readonly DiagnosticReport: "DiagnosticReport";
        readonly Distance: "Distance";
        readonly DocumentManifest: "DocumentManifest";
        readonly DocumentReference: "DocumentReference";
        readonly DomainResource: "DomainResource";
        readonly Dosage: "Dosage";
        readonly Duration: "Duration";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly VALElement: "Element";
        readonly ElementDefinition: "ElementDefinition";
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
        readonly Expression: "Expression";
        readonly Extension: "Extension";
        readonly FamilyMemberHistory: "FamilyMemberHistory";
        readonly Flag: "Flag";
        readonly Goal: "Goal";
        readonly GraphDefinition: "GraphDefinition";
        readonly Group: "Group";
        readonly GuidanceResponse: "GuidanceResponse";
        readonly HealthcareService: "HealthcareService";
        readonly HumanName: "HumanName";
        readonly Id: "id";
        readonly Identifier: "Identifier";
        readonly ImagingStudy: "ImagingStudy";
        readonly Immunization: "Immunization";
        readonly ImmunizationEvaluation: "ImmunizationEvaluation";
        readonly ImmunizationRecommendation: "ImmunizationRecommendation";
        readonly ImplementationGuide: "ImplementationGuide";
        readonly Instant: "instant";
        readonly InsurancePlan: "InsurancePlan";
        readonly Integer: "integer";
        readonly Invoice: "Invoice";
        readonly Library: "Library";
        readonly Linkage: "Linkage";
        readonly List: "List";
        readonly Location: "Location";
        readonly Markdown: "markdown";
        readonly MarketingStatus: "MarketingStatus";
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
        readonly Meta: "Meta";
        readonly MolecularSequence: "MolecularSequence";
        readonly Money: "Money";
        readonly MoneyQuantity: "MoneyQuantity";
        readonly NamingSystem: "NamingSystem";
        readonly Narrative: "Narrative";
        readonly NutritionOrder: "NutritionOrder";
        readonly Observation: "Observation";
        readonly ObservationDefinition: "ObservationDefinition";
        readonly Oid: "oid";
        readonly OperationDefinition: "OperationDefinition";
        readonly OperationOutcome: "OperationOutcome";
        readonly Organization: "Organization";
        readonly OrganizationAffiliation: "OrganizationAffiliation";
        readonly ParameterDefinition: "ParameterDefinition";
        readonly Parameters: "Parameters";
        readonly Patient: "Patient";
        readonly PaymentNotice: "PaymentNotice";
        readonly PaymentReconciliation: "PaymentReconciliation";
        readonly Period: "Period";
        readonly Person: "Person";
        readonly PlanDefinition: "PlanDefinition";
        readonly Population: "Population";
        readonly PositiveInt: "positiveInt";
        readonly Practitioner: "Practitioner";
        readonly PractitionerRole: "PractitionerRole";
        readonly Procedure: "Procedure";
        readonly ProdCharacteristic: "ProdCharacteristic";
        readonly ProductShelfLife: "ProductShelfLife";
        readonly Provenance: "Provenance";
        readonly Quantity: "Quantity";
        readonly Questionnaire: "Questionnaire";
        readonly QuestionnaireResponse: "QuestionnaireResponse";
        readonly Range: "Range";
        readonly Ratio: "Ratio";
        readonly Reference: "Reference";
        readonly RelatedArtifact: "RelatedArtifact";
        readonly RelatedPerson: "RelatedPerson";
        readonly RequestGroup: "RequestGroup";
        readonly ResearchDefinition: "ResearchDefinition";
        readonly ResearchElementDefinition: "ResearchElementDefinition";
        readonly ResearchStudy: "ResearchStudy";
        readonly ResearchSubject: "ResearchSubject";
        readonly Resource: "Resource";
        readonly RiskAssessment: "RiskAssessment";
        readonly RiskEvidenceSynthesis: "RiskEvidenceSynthesis";
        readonly SampledData: "SampledData";
        readonly Schedule: "Schedule";
        readonly SearchParameter: "SearchParameter";
        readonly ServiceRequest: "ServiceRequest";
        readonly Signature: "Signature";
        readonly SimpleQuantity: "SimpleQuantity";
        readonly Slot: "Slot";
        readonly Specimen: "Specimen";
        readonly SpecimenDefinition: "SpecimenDefinition";
        readonly VALString: "string";
        readonly StructureDefinition: "StructureDefinition";
        readonly StructureMap: "StructureMap";
        readonly Subscription: "Subscription";
        readonly Substance: "Substance";
        readonly SubstanceAmount: "SubstanceAmount";
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
        readonly Time: "time";
        readonly Timing: "Timing";
        readonly TriggerDefinition: "TriggerDefinition";
        readonly Type: "Type";
        readonly UnsignedInt: "unsignedInt";
        readonly Uri: "uri";
        readonly Url: "url";
        readonly UsageContext: "UsageContext";
        readonly Uuid: "uuid";
        readonly ValueSet: "ValueSet";
        readonly VerificationResult: "VerificationResult";
        readonly VisionPrescription: "VisionPrescription";
        readonly XHTML: "xhtml";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=ParameterDefinition.d.ts.map