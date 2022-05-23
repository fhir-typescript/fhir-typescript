import * as fhir from '../fhir.js';
import { GraphCompartmentUseCodeType } from '../fhirValueSets/GraphCompartmentUseCodes.js';
import { CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
import { GraphCompartmentRuleCodeType } from '../fhirValueSets/GraphCompartmentRuleCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the GraphDefinitionLinkTargetCompartment type.
 */
export interface GraphDefinitionLinkTargetCompartmentArgs extends fhir.BackboneElementArgs {
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: fhir.FhirCode<GraphCompartmentUseCodeType> | string | undefined;
    /**
     * Identifies the compartment.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | string | undefined;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: fhir.FhirCode<GraphCompartmentRuleCodeType> | string | undefined;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: fhir.FhirString | string | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: fhir.FhirString | string | undefined;
}
/**
 * Compartment Consistency Rules.
 */
export declare class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * All conditional rules are evaluated; if they are true, then the rules are evaluated.
     */
    use: fhir.FhirCode<GraphCompartmentUseCodeType> | null;
    /**
     * Identifies the compartment.
     */
    code: fhir.FhirCode<CompartmentTypeCodeType> | null;
    /**
     * identical | matching | different | no-rule | custom.
     */
    rule: fhir.FhirCode<GraphCompartmentRuleCodeType> | null;
    /**
     * Custom rule, as a FHIRPath expression.
     */
    expression?: fhir.FhirString | undefined;
    /**
     * Documentation for FHIRPath expression.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkTargetCompartmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (GraphDefinition.link.target.compartment.use)
     */
    static get useRequiredCodes(): {
        readonly Condition: "condition";
        readonly Requirement: "requirement";
    };
    /**
     * Required-bound Value Set for code (GraphDefinition.link.target.compartment.code)
     */
    static get codeRequiredCodes(): {
        readonly Device: "Device";
        readonly Encounter: "Encounter";
        readonly Patient: "Patient";
        readonly Practitioner: "Practitioner";
        readonly RelatedPerson: "RelatedPerson";
    };
    /**
     * Required-bound Value Set for rule (GraphDefinition.link.target.compartment.rule)
     */
    static get ruleRequiredCodes(): {
        readonly Custom: "custom";
        readonly Different: "different";
        readonly Identical: "identical";
        readonly Matching: "matching";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinitionLinkTarget type.
 */
export interface GraphDefinitionLinkTargetArgs extends fhir.BackboneElementArgs {
    /**
     * Type of resource this link refers to.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: fhir.FhirString | string | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Compartment Consistency Rules.
     */
    compartment?: fhir.GraphDefinitionLinkTargetCompartmentArgs[] | undefined;
    /**
     * Additional links from target resource.
     */
    link?: fhir.GraphDefinitionLinkArgs[] | undefined;
}
/**
 * Potential target for the link.
 */
export declare class GraphDefinitionLinkTarget extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of resource this link refers to.
     */
    type: fhir.FhirCode | null;
    /**
     * At least one of the parameters must have the value {ref} which identifies the focus resource.
     */
    params?: fhir.FhirString | undefined;
    /**
     * Profile for the target resource.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Compartment Consistency Rules.
     */
    compartment: fhir.GraphDefinitionLinkTargetCompartment[];
    /**
     * Additional links from target resource.
     */
    link: fhir.GraphDefinitionLink[];
    /**
     * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkTargetArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (GraphDefinition.link.target.type)
     */
    static get typeRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        /**
         * Mapping of this datatype to a FHIR equivalent
         */
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
        /**
         * Compartment Consistency Rules.
         */
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device"; /**
         * Required-bound Value Set for type (GraphDefinition.link.target.type)
         */
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
        readonly EnrollmentRequest: "EnrollmentRequest"; /**
         * Minimum occurrences for this link.
         */
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
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinitionLink type.
 */
export interface GraphDefinitionLinkArgs extends fhir.BackboneElementArgs {
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: fhir.FhirString | string | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: fhir.FhirInteger | number | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: fhir.FhirString | string | undefined;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Potential target for the link.
     */
    target?: fhir.GraphDefinitionLinkTargetArgs[] | undefined;
}
/**
 * Links this graph makes rules about.
 */
export declare class GraphDefinitionLink extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target.params. If the path is "*" then this means all references in the resource.
     */
    path?: fhir.FhirString | undefined;
    /**
     * Which slice (if profiled).
     */
    sliceName?: fhir.FhirString | undefined;
    /**
     * Minimum occurrences for this link.
     */
    min?: fhir.FhirInteger | undefined;
    /**
     * Maximum occurrences for this link.
     */
    max?: fhir.FhirString | undefined;
    /**
     * Information about why this link is of interest in this graph definition.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Potential target for the link.
     */
    target: fhir.GraphDefinitionLinkTarget[];
    /**
     * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GraphDefinition type.
 */
export interface GraphDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: fhir.FhirCode | string | undefined;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: fhir.FhirCanonical | string | undefined;
    /**
     * Links this graph makes rules about.
     */
    link?: fhir.GraphDefinitionLinkArgs[] | undefined;
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export declare class GraphDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "GraphDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different graph definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the graph definition with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of graph definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the graph definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the graph definition is the organization or individual primarily responsible for the maintenance and upkeep of the graph definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the graph definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the graph definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the graph definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the graph definition is presumed to be the predominant language in the place the graph definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the graph definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the graph definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this graph definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * The type of FHIR resource at which instances of this graph start.
     */
    start: fhir.FhirCode | null;
    /**
     * The code does not include the '$' prefix that is always included in the URL when the operation is invoked.
     */
    profile?: fhir.FhirCanonical | undefined;
    /**
     * Links this graph makes rules about.
     */
    link: fhir.GraphDefinitionLink[];
    /**
     * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GraphDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (GraphDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for start (GraphDefinition.start)
     */
    static get startRequiredCodes(): {
        readonly Account: "Account";
        readonly ActivityDefinition: "ActivityDefinition";
        readonly AdverseEvent: "AdverseEvent";
        readonly AllergyIntolerance: "AllergyIntolerance";
        readonly Appointment: "Appointment";
        readonly AppointmentResponse: "AppointmentResponse";
        readonly AuditEvent: "AuditEvent";
        readonly Basic: "Basic";
        readonly Binary: "Binary";
        /**
         * Mapping of this datatype to a FHIR equivalent
         */
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
        /**
         * Compartment Consistency Rules.
         */
        readonly Condition: "Condition";
        readonly Consent: "Consent";
        readonly Contract: "Contract";
        readonly Coverage: "Coverage";
        readonly CoverageEligibilityRequest: "CoverageEligibilityRequest";
        readonly CoverageEligibilityResponse: "CoverageEligibilityResponse";
        readonly DetectedIssue: "DetectedIssue";
        readonly Device: "Device"; /**
         * Required-bound Value Set for type (GraphDefinition.link.target.type)
         */
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
        readonly EnrollmentRequest: "EnrollmentRequest"; /**
         * Minimum occurrences for this link.
         */
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
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=GraphDefinition.d.ts.map