import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Reference type.
 */
export interface ReferenceArgs extends fhir.FhirElementArgs {
    /**
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: fhir.FhirString | string | undefined;
    /**
     * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
     */
    type?: fhir.FhirUri | string | undefined;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
     */
    display?: fhir.FhirString | string | undefined;
}
/**
 * A reference from one resource to another.
 */
export declare class Reference extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Using absolute URLs provides a stable scalable approach suitable for a cloud/web context, while using relative/logical references provides a flexible approach suitable for use when trading across closed eco-system boundaries.   Absolute URLs do not need to point to a FHIR RESTful server, though this is the preferred approach. If the URL conforms to the structure "/[type]/[id]" then it should be assumed that the reference is to a FHIR RESTful server.
     */
    reference?: fhir.FhirString | undefined;
    /**
     * This element is used to indicate the type of  the target of the reference. This may be used which ever of the other elements are populated (or not). In some cases, the type of the target may be determined by inspection of the reference (e.g. a RESTful URL) or by resolving the target of the reference; if both the type and a reference is provided, the reference SHALL resolve to a resource of the same type as that specified.
     */
    type?: fhir.FhirUri | undefined;
    /**
     * When an identifier is provided in place of a reference, any system processing the reference will only be able to resolve the identifier to a reference if it understands the business context in which the identifier is used. Sometimes this is global (e.g. a national identifier) but often it is not. For this reason, none of the useful mechanisms described for working with references (e.g. chaining, includes) are possible, nor should servers be expected to be able resolve the reference. Servers may accept an identifier based reference untouched, resolve it, and/or reject it - see CapabilityStatement.rest.resource.referencePolicy.
     * When both an identifier and a literal reference are provided, the literal reference is preferred. Applications processing the resource are allowed - but not required - to check that the identifier matches the literal reference
     * Applications converting a logical reference to a literal reference may choose to leave the logical reference present, or remove it.
     * Reference is intended to point to a structure that can potentially be expressed as a FHIR resource, though there is no need for it to exist as an actual FHIR resource instance - except in as much as an application wishes to actual find the target of the reference. The content referred to be the identifier must meet the logical constraints implied by any limitations on what resource types are permitted for the reference.  For example, it would not be legitimate to send the identifier for a drug prescription if the type were Reference(Observation|DiagnosticReport).  One of the use-cases for Reference.identifier is the situation where no FHIR representation exists (where the type is Reference (Any).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This is generally not the same as the Resource.text of the referenced resource.  The purpose is to identify what's being referenced, not to fully describe it.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Default constructor for Reference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (Reference.type)
     */
    static get typeExtensibleCodings(): {
        readonly Account: fhir.Coding;
        readonly ActivityDefinition: fhir.Coding;
        readonly AdverseEvent: fhir.Coding;
        readonly AllergyIntolerance: fhir.Coding;
        readonly Appointment: fhir.Coding;
        readonly AppointmentResponse: fhir.Coding;
        readonly AuditEvent: fhir.Coding;
        readonly Basic: fhir.Coding;
        readonly Binary: fhir.Coding;
        readonly BiologicallyDerivedProduct: fhir.Coding;
        readonly BodyStructure: fhir.Coding;
        readonly Bundle: fhir.Coding;
        readonly CapabilityStatement: fhir.Coding;
        readonly CarePlan: fhir.Coding;
        readonly CareTeam: fhir.Coding;
        readonly CatalogEntry: fhir.Coding;
        readonly ChargeItem: fhir.Coding;
        readonly ChargeItemDefinition: fhir.Coding;
        readonly Claim: fhir.Coding;
        readonly ClaimResponse: fhir.Coding;
        readonly ClinicalImpression: fhir.Coding;
        readonly CodeSystem: fhir.Coding;
        readonly Communication: fhir.Coding;
        readonly CommunicationRequest: fhir.Coding;
        readonly CompartmentDefinition: fhir.Coding;
        readonly Composition: fhir.Coding;
        readonly ConceptMap: fhir.Coding;
        readonly Condition: fhir.Coding;
        readonly Consent: fhir.Coding;
        readonly Contract: fhir.Coding;
        readonly Coverage: fhir.Coding;
        readonly CoverageEligibilityRequest: fhir.Coding;
        readonly CoverageEligibilityResponse: fhir.Coding;
        readonly DetectedIssue: fhir.Coding;
        readonly Device: fhir.Coding;
        readonly DeviceDefinition: fhir.Coding;
        readonly DeviceMetric: fhir.Coding;
        readonly DeviceRequest: fhir.Coding;
        readonly DeviceUseStatement: fhir.Coding;
        readonly DiagnosticReport: fhir.Coding;
        readonly DocumentManifest: fhir.Coding;
        readonly DocumentReference: fhir.Coding;
        readonly DomainResource: fhir.Coding;
        readonly EffectEvidenceSynthesis: fhir.Coding;
        readonly Encounter: fhir.Coding;
        readonly Endpoint: fhir.Coding;
        readonly EnrollmentRequest: fhir.Coding;
        readonly EnrollmentResponse: fhir.Coding;
        readonly EpisodeOfCare: fhir.Coding;
        readonly EventDefinition: fhir.Coding;
        readonly Evidence: fhir.Coding;
        readonly EvidenceVariable: fhir.Coding;
        readonly ExampleScenario: fhir.Coding;
        readonly ExplanationOfBenefit: fhir.Coding;
        readonly FamilyMemberHistory: fhir.Coding;
        readonly Flag: fhir.Coding;
        readonly Goal: fhir.Coding;
        readonly GraphDefinition: fhir.Coding;
        readonly Group: fhir.Coding;
        readonly GuidanceResponse: fhir.Coding;
        readonly HealthcareService: fhir.Coding;
        readonly ImagingStudy: fhir.Coding;
        readonly Immunization: fhir.Coding;
        readonly ImmunizationEvaluation: fhir.Coding;
        readonly ImmunizationRecommendation: fhir.Coding;
        readonly ImplementationGuide: fhir.Coding;
        readonly InsurancePlan: fhir.Coding;
        readonly Invoice: fhir.Coding;
        readonly Library: fhir.Coding;
        readonly Linkage: fhir.Coding;
        readonly List: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Measure: fhir.Coding;
        readonly MeasureReport: fhir.Coding;
        readonly Media: fhir.Coding;
        readonly Medication: fhir.Coding;
        readonly MedicationAdministration: fhir.Coding;
        readonly MedicationDispense: fhir.Coding;
        readonly MedicationKnowledge: fhir.Coding;
        readonly MedicationRequest: fhir.Coding;
        readonly MedicationStatement: fhir.Coding;
        readonly MedicinalProduct: fhir.Coding;
        readonly MedicinalProductAuthorization: fhir.Coding;
        readonly MedicinalProductContraindication: fhir.Coding;
        readonly MedicinalProductIndication: fhir.Coding;
        readonly MedicinalProductIngredient: fhir.Coding;
        readonly MedicinalProductInteraction: fhir.Coding;
        readonly MedicinalProductManufactured: fhir.Coding;
        readonly MedicinalProductPackaged: fhir.Coding;
        readonly MedicinalProductPharmaceutical: fhir.Coding;
        readonly MedicinalProductUndesirableEffect: fhir.Coding;
        readonly MessageDefinition: fhir.Coding;
        readonly MessageHeader: fhir.Coding;
        readonly MolecularSequence: fhir.Coding;
        readonly NamingSystem: fhir.Coding;
        readonly NutritionOrder: fhir.Coding;
        readonly Observation: fhir.Coding;
        readonly ObservationDefinition: fhir.Coding;
        readonly OperationDefinition: fhir.Coding;
        readonly OperationOutcome: fhir.Coding;
        readonly Organization: fhir.Coding;
        readonly OrganizationAffiliation: fhir.Coding;
        readonly Parameters: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PaymentNotice: fhir.Coding;
        readonly PaymentReconciliation: fhir.Coding;
        readonly Person: fhir.Coding;
        readonly PlanDefinition: fhir.Coding;
        readonly Practitioner: fhir.Coding;
        readonly PractitionerRole: fhir.Coding;
        readonly Procedure: fhir.Coding;
        readonly Provenance: fhir.Coding;
        readonly Questionnaire: fhir.Coding;
        readonly QuestionnaireResponse: fhir.Coding;
        readonly RelatedPerson: fhir.Coding;
        readonly RequestGroup: fhir.Coding;
        readonly ResearchDefinition: fhir.Coding;
        readonly ResearchElementDefinition: fhir.Coding;
        readonly ResearchStudy: fhir.Coding;
        readonly ResearchSubject: fhir.Coding;
        readonly Resource: fhir.Coding;
        readonly RiskAssessment: fhir.Coding;
        readonly RiskEvidenceSynthesis: fhir.Coding;
        readonly Schedule: fhir.Coding;
        readonly SearchParameter: fhir.Coding;
        readonly ServiceRequest: fhir.Coding;
        readonly Slot: fhir.Coding;
        readonly Specimen: fhir.Coding;
        readonly SpecimenDefinition: fhir.Coding;
        readonly StructureDefinition: fhir.Coding;
        readonly StructureMap: fhir.Coding;
        readonly Subscription: fhir.Coding;
        readonly Substance: fhir.Coding;
        readonly SubstanceNucleicAcid: fhir.Coding;
        readonly SubstancePolymer: fhir.Coding;
        readonly SubstanceProtein: fhir.Coding;
        readonly SubstanceReferenceInformation: fhir.Coding;
        readonly SubstanceSourceMaterial: fhir.Coding;
        readonly SubstanceSpecification: fhir.Coding;
        readonly SupplyDelivery: fhir.Coding;
        readonly SupplyRequest: fhir.Coding;
        readonly Task: fhir.Coding;
        readonly TerminologyCapabilities: fhir.Coding;
        readonly TestReport: fhir.Coding;
        readonly TestScript: fhir.Coding;
        readonly ValueSet: fhir.Coding;
        readonly VerificationResult: fhir.Coding;
        readonly VisionPrescription: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
    /**
     * Create a reference from an existing resource
     */
    static fromResource(source: fhir.FhirResource, baseUrl?: string): Reference;
}
//# sourceMappingURL=Reference.d.ts.map