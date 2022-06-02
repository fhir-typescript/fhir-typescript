import * as fhir from '../fhir.js';
import { GuidePageGenerationCodeType } from '../fhirValueSets/GuidePageGenerationCodes.js';
import { GuideParameterCodeType } from '../fhirValueSets/GuideParameterCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ImplementationGuideDependsOn type.
 */
export interface ImplementationGuideDependsOnArgs extends fhir.BackboneElementArgs {
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
     */
    _uri?: fhir.FhirElementArgs;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.packageId
     */
    _packageId?: fhir.FhirElementArgs;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependsOn.version
     */
    _version?: fhir.FhirElementArgs;
}
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export declare class ImplementationGuideDependsOn extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
     */
    uri: fhir.FhirCanonical | null;
    /**
     * The NPM package name for the Implementation Guide that this IG depends on.
     */
    packageId?: fhir.FhirId | undefined;
    /**
     * This follows the syntax of the NPM packaging version field - see [[reference]].
     */
    version?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDependsOnArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideGlobal type.
 */
export interface ImplementationGuideGlobalArgs extends fhir.BackboneElementArgs {
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.profile
     */
    _profile?: fhir.FhirElementArgs;
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export declare class ImplementationGuideGlobal extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
     */
    type: fhir.FhirCode | null;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.FhirCanonical | null;
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideGlobalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (ImplementationGuide.global.type)
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
        readonly MessageDefinition: "MessageDefinition"; /**
         * Mapping of this datatype to a FHIR equivalent
         */
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
 * Valid arguments for the ImplementationGuideDefinitionGrouping type.
 */
export interface ImplementationGuideDefinitionGroupingArgs extends fhir.BackboneElementArgs {
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.grouping.description
     */
    _description?: fhir.FhirElementArgs;
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export declare class ImplementationGuideDefinitionGrouping extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The human-readable title to display for the package of resources when rendering the implementation guide.
     */
    name: fhir.FhirString | null;
    /**
     * Human readable text describing the package.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionGroupingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionResource type.
 */
export interface ImplementationGuideDefinitionResourceArgs extends fhir.BackboneElementArgs {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.ReferenceArgs | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.fhirVersion
     */
    _fhirVersion?: (fhir.FhirElementArgs | null)[];
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    example?: fhir.FhirBoolean | fhir.FhirCanonical | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    exampleCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.resource.groupingId
     */
    _groupingId?: fhir.FhirElementArgs;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideDefinitionResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * The resource SHALL be valid against all the versions it is specified to apply to. If the resource referred to is a StructureDefinition, the fhirVersion stated in the StructureDefinition cannot disagree with the version specified here; the specified versions SHALL include the version specified by the StructureDefinition, and may include additional versions using the [applicable-version](extension-structuredefinition-applicable-version.html) extension.
     */
    fhirVersion: fhir.FhirCode[];
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: fhir.FhirString | undefined;
    /**
     * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
     */
    description?: fhir.FhirString | undefined;
    /**
     * Examples:
     * * StructureDefinition -&gt; Any
     * * ValueSet -&gt; expansion
     * * OperationDefinition -&gt; Parameters
     * * Questionnaire -&gt; QuestionnaireResponse.
     */
    example?: (fhir.FhirBoolean | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.definition.resource.example[x]
     */
    protected static readonly _fts_exampleIsChoice: true;
    /**
     * This must correspond to a package.id element within this implementation guide.
     */
    groupingId?: fhir.FhirId | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for fhirVersion (ImplementationGuide.definition.resource.fhirVersion)
     */
    static get fhirVersionRequiredCodes(): {
        readonly VAL0080: "0.0.80";
        readonly VAL0081: "0.0.81";
        readonly VAL0082: "0.0.82";
        readonly VAL001: "0.01";
        readonly VAL005: "0.05";
        readonly VAL006: "0.06";
        readonly VAL011: "0.11";
        readonly VAL040: "0.4.0";
        readonly VAL050: "0.5.0";
        readonly VAL100: "1.0.0";
        readonly VAL101: "1.0.1";
        readonly VAL102: "1.0.2";
        readonly VAL110: "1.1.0";
        readonly VAL140: "1.4.0";
        readonly VAL160: "1.6.0";
        readonly VAL180: "1.8.0";
        readonly VAL300: "3.0.0";
        readonly VAL301: "3.0.1";
        readonly VAL330: "3.3.0";
        readonly VAL350: "3.5.0";
        readonly VAL400: "4.0.0"; /**
         * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
         */
        readonly VAL401: "4.0.1";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionPage type.
 */
export interface ImplementationGuideDefinitionPageArgs extends fhir.BackboneElementArgs {
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    name?: fhir.FhirUrl | fhir.Reference | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameUrl?: fhir.FhirUrl | string | undefined;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    nameReference?: fhir.ReferenceArgs | undefined;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * A code that indicates how the page is generated.
     */
    generation: fhir.FhirCode<GuidePageGenerationCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.page.generation
     */
    _generation?: fhir.FhirElementArgs;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page?: fhir.ImplementationGuideDefinitionPageArgs[] | undefined;
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export declare class ImplementationGuideDefinitionPage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The publishing tool will autogenerate source for list (source = n/a) and inject included implementations for include (source = uri of guide to include).
     */
    name: (fhir.FhirUrl | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.definition.page.name[x]
     */
    protected static readonly _fts_nameIsChoice: true;
    /**
     * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    title: fhir.FhirString | null;
    /**
     * A code that indicates how the page is generated.
     */
    generation: fhir.FhirCode<GuidePageGenerationCodeType> | null;
    /**
     * The implementation guide breadcrumbs are generated from this structure.
     */
    page: fhir.ImplementationGuideDefinitionPage[];
    /**
     * Default constructor for ImplementationGuideDefinitionPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionPageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for generation (ImplementationGuide.definition.page.generation)
     */
    static get generationRequiredCodes(): {
        readonly Generated: "generated";
        readonly HTML: "html";
        readonly Markdown: "markdown";
        readonly XML: "xml";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionParameter type.
 */
export interface ImplementationGuideDefinitionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: fhir.FhirCode<GuideParameterCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Value for named type.
     */
    value: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.parameter.value
     */
    _value?: fhir.FhirElementArgs;
}
/**
 * Defines how IG is built by tools.
 */
export declare class ImplementationGuideDefinitionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template.
     */
    code: fhir.FhirCode<GuideParameterCodeType> | null;
    /**
     * Value for named type.
     */
    value: fhir.FhirString | null;
    /**
     * Default constructor for ImplementationGuideDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for code (ImplementationGuide.definition.parameter.code)
     */
    static get codeRequiredCodes(): {
        readonly ApplyMetadataValue: "apply";
        readonly ExpansionProfile: "expansion-parameter";
        readonly GenerateJSON: "generate-json";
        readonly GenerateTurtle: "generate-turtle";
        readonly GenerateXML: "generate-xml";
        readonly HTMLTemplate: "html-template";
        readonly PagesPath: "path-pages";
        readonly ResourcePath: "path-resource";
        readonly TerminologyCachePath: "path-tx-cache";
        readonly BrokenLinksRule: "rule-broken-links";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinitionTemplate type.
 */
export interface ImplementationGuideDefinitionTemplateArgs extends fhir.BackboneElementArgs {
    /**
     * Type of template specified.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * The source location for the template.
     */
    source: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.source
     */
    _source?: fhir.FhirElementArgs;
    /**
     * The scope in which the template applies.
     */
    scope?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.definition.template.scope
     */
    _scope?: fhir.FhirElementArgs;
}
/**
 * A template for building resources.
 */
export declare class ImplementationGuideDefinitionTemplate extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Type of template specified.
     */
    code: fhir.FhirCode | null;
    /**
     * The source location for the template.
     */
    source: fhir.FhirString | null;
    /**
     * The scope in which the template applies.
     */
    scope?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionTemplateArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideDefinition type.
 */
export interface ImplementationGuideDefinitionArgs extends fhir.BackboneElementArgs {
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping?: fhir.ImplementationGuideDefinitionGroupingArgs[] | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResourceArgs[] | null;
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPageArgs | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter?: fhir.ImplementationGuideDefinitionParameterArgs[] | undefined;
    /**
     * A template for building resources.
     */
    template?: fhir.ImplementationGuideDefinitionTemplateArgs[] | undefined;
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export declare class ImplementationGuideDefinition extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
     */
    grouping: fhir.ImplementationGuideDefinitionGrouping[];
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideDefinitionResource[];
    /**
     * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
     */
    page?: fhir.ImplementationGuideDefinitionPage | undefined;
    /**
     * Defines how IG is built by tools.
     */
    parameter: fhir.ImplementationGuideDefinitionParameter[];
    /**
     * A template for building resources.
     */
    template: fhir.ImplementationGuideDefinitionTemplate[];
    /**
     * Default constructor for ImplementationGuideDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifestResource type.
 */
export interface ImplementationGuideManifestResourceArgs extends fhir.BackboneElementArgs {
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.ReferenceArgs | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example?: fhir.FhirBoolean | fhir.FhirCanonical | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    exampleCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.resource.relativePath
     */
    _relativePath?: fhir.FhirElementArgs;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export declare class ImplementationGuideManifestResource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
     */
    reference: fhir.Reference | null;
    /**
     * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
     */
    example?: (fhir.FhirBoolean | fhir.FhirCanonical) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImplementationGuide.manifest.resource.example[x]
     */
    protected static readonly _fts_exampleIsChoice: true;
    /**
     * Appending 'rendering' + "/" + this should resolve to the resource page.
     */
    relativePath?: fhir.FhirUrl | undefined;
    /**
     * Default constructor for ImplementationGuideManifestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestResourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifestPage type.
 */
export interface ImplementationGuideManifestPageArgs extends fhir.BackboneElementArgs {
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Label for the page intended for human display.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.page.anchor
     */
    _anchor?: (fhir.FhirElementArgs | null)[];
}
/**
 * Information about a page within the IG.
 */
export declare class ImplementationGuideManifestPage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Appending 'rendering' + "/" + this should resolve to the page.
     */
    name: fhir.FhirString | null;
    /**
     * Label for the page intended for human display.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Appending 'rendering' + "/" + page.name + "#" + page.anchor should resolve to the anchor.
     */
    anchor: fhir.FhirString[];
    /**
     * Default constructor for ImplementationGuideManifestPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestPageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuideManifest type.
 */
export interface ImplementationGuideManifestArgs extends fhir.BackboneElementArgs {
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: fhir.FhirUrl | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.rendering
     */
    _rendering?: fhir.FhirElementArgs;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResourceArgs[] | null;
    /**
     * Information about a page within the IG.
     */
    page?: fhir.ImplementationGuideManifestPageArgs[] | undefined;
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.image
     */
    _image?: (fhir.FhirElementArgs | null)[];
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.manifest.other
     */
    _other?: (fhir.FhirElementArgs | null)[];
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export declare class ImplementationGuideManifest extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A pointer to official web page, PDF or other rendering of the implementation guide.
     */
    rendering?: fhir.FhirUrl | undefined;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: fhir.ImplementationGuideManifestResource[];
    /**
     * Information about a page within the IG.
     */
    page: fhir.ImplementationGuideManifestPage[];
    /**
     * Indicates a relative path to an image that exists within the IG.
     */
    image: fhir.FhirString[];
    /**
     * Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG.
     */
    other: fhir.FhirString[];
    /**
     * Default constructor for ImplementationGuideManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideManifestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImplementationGuide type.
 */
export interface ImplementationGuideArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.title
     */
    _title?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.FhirElementArgs;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.FhirElementArgs;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.FhirElementArgs;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: fhir.FhirId | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.packageId
     */
    _packageId?: fhir.FhirElementArgs;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.license
     */
    _license?: fhir.FhirElementArgs;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: fhir.FhirCode[] | string[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: (fhir.FhirElementArgs | null)[];
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn?: fhir.ImplementationGuideDependsOnArgs[] | undefined;
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global?: fhir.ImplementationGuideGlobalArgs[] | undefined;
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinitionArgs | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifestArgs | undefined;
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export declare class ImplementationGuide extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: fhir.FhirUri | null;
    /**
     * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the implementation guide with the format [url]|[version].
     */
    version?: fhir.FhirString | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | null;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | undefined;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Allows filtering of implementation guides that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the implementation guide is presumed to be the predominant language in the place the implementation guide was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
     */
    copyright?: fhir.FhirMarkdown | undefined;
    /**
     * Many (if not all) IG publishing tools will require that this element be present. For implementation guides published through HL7 or the FHIR foundation, the FHIR product director assigns package IDs.
     */
    packageId: fhir.FhirId | null;
    /**
     * The license that applies to this Implementation Guide, using an SPDX license code, or 'not-open-source'.
     */
    license?: fhir.FhirCode | undefined;
    /**
     * Most implementation guides target a single version - e.g. they describe how to use a particular version, and the profiles and examples etc are valid for that version. But some implementation guides describe how to use multiple different versions of FHIR to solve the same problem, or in concert with each other. Typically, the requirement to support multiple versions arises as implementation matures and different implementation communities are stuck at different versions by regulation or market dynamics.
     */
    fhirVersion: fhir.FhirCode[];
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependsOn: fhir.ImplementationGuideDependsOn[];
    /**
     * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
     */
    global: fhir.ImplementationGuideGlobal[];
    /**
     * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
     */
    definition?: fhir.ImplementationGuideDefinition | undefined;
    /**
     * Information about an assembled implementation guide, created by the publication tooling.
     */
    manifest?: fhir.ImplementationGuideManifest | undefined;
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImplementationGuideArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (ImplementationGuide.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for license (ImplementationGuide.license)
     */
    static get licenseRequiredCodes(): {
        readonly BSDZeroClauseLicense: "0BSD";
        readonly AttributionAssuranceLicense: "AAL";
        readonly AbstylesLicense: "Abstyles";
        readonly AdobeSystemsIncorporatedSourceCodeLicenseAgreement: "Adobe-2006";
        readonly AdobeGlyphListLicense: "Adobe-Glyph";
        readonly AmazonDigitalServicesLicense: "ADSL";
        readonly AcademicFreeLicenseV11: "AFL-1.1";
        readonly AcademicFreeLicenseV12: "AFL-1.2";
        readonly AcademicFreeLicenseV20: "AFL-2.0";
        readonly AcademicFreeLicenseV21: "AFL-2.1";
        readonly AcademicFreeLicenseV30: "AFL-3.0";
        readonly AfmparseLicense: "Afmparse";
        readonly AfferoGeneralPublicLicenseV10Only: "AGPL-1.0-only";
        readonly AfferoGeneralPublicLicenseV10OrLater: "AGPL-1.0-or-later";
        readonly GNUAfferoGeneralPublicLicenseV30Only: "AGPL-3.0-only"; /**
         * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
         */
        readonly GNUAfferoGeneralPublicLicenseV30OrLater: "AGPL-3.0-or-later";
        readonly AladdinFreePublicLicense: "Aladdin";
        readonly AMDQuoteSPlpaMapCLicense: "AMDPLPA";
        readonly AppleMITLicense: "AML";
        readonly AcademyOfMotionPictureArtsAndSciencesBSD: "AMPAS";
        readonly ANTLRSoftwareRightsNotice: "ANTLR-PD";
        readonly ApacheLicense10: "Apache-1.0";
        readonly ApacheLicense11: "Apache-1.1";
        readonly ApacheLicense20: "Apache-2.0";
        readonly AdobePostscriptAFMLicense: "APAFML";
        readonly AdaptivePublicLicense10: "APL-1.0";
        readonly ApplePublicSourceLicense10: "APSL-1.0";
        readonly ApplePublicSourceLicense11: "APSL-1.1";
        readonly ApplePublicSourceLicense12: "APSL-1.2";
        readonly ApplePublicSourceLicense20: "APSL-2.0";
        readonly ArtisticLicense10: "Artistic-1.0";
        readonly ArtisticLicense10WClause8: "Artistic-1.0-cl8";
        readonly ArtisticLicense10Perl: "Artistic-1.0-Perl";
        readonly ArtisticLicense20: "Artistic-2.0";
        readonly BahyphLicense: "Bahyph";
        readonly BarrLicense: "Barr";
        readonly BeerwareLicense: "Beerware";
        readonly BitTorrentOpenSourceLicenseV10: "BitTorrent-1.0";
        readonly BitTorrentOpenSourceLicenseV11: "BitTorrent-1.1";
        readonly BorceuxLicense: "Borceux";
        readonly BSD1ClauseLicense: "BSD-1-Clause";
        readonly BSD2ClauseQuotationSimplifiedQuotationLicense: "BSD-2-Clause";
        readonly BSD2ClauseFreeBSDLicense: "BSD-2-Clause-FreeBSD"; /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly BSD2ClauseNetBSDLicense: "BSD-2-Clause-NetBSD";
        readonly BSD2ClausePlusPatentLicense: "BSD-2-Clause-Patent";
        readonly BSD3ClauseQuotationNewQuotationOrQuotationRevisedQuotationLicense: "BSD-3-Clause";
        readonly BSDWithAttribution: "BSD-3-Clause-Attribution";
        readonly BSD3ClauseClearLicense: "BSD-3-Clause-Clear";
        readonly LawrenceBerkeleyNationalLabsBSDVariantLicense: "BSD-3-Clause-LBNL";
        readonly BSD3ClauseNoNuclearLicense: "BSD-3-Clause-No-Nuclear-License";
        readonly BSD3ClauseNoNuclearLicense2014: "BSD-3-Clause-No-Nuclear-License-2014";
        readonly BSD3ClauseNoNuclearWarranty: "BSD-3-Clause-No-Nuclear-Warranty";
        readonly BSD4ClauseQuotationOriginalQuotationOrQuotationOldQuotationLicense: "BSD-4-Clause";
        readonly BSD4ClauseUniversityOfCaliforniaSpecific: "BSD-4-Clause-UC";
        readonly BSDProtectionLicense: "BSD-Protection";
        readonly BSDSourceCodeAttribution: "BSD-Source-Code";
        readonly BoostSoftwareLicense10: "BSL-1.0";
        readonly Bzip2AndLibbzip2LicenseV105: "bzip2-1.0.5";
        readonly Bzip2AndLibbzip2LicenseV106: "bzip2-1.0.6";
        readonly CalderaLicense: "Caldera";
        readonly ComputerAssociatesTrustedOpenSourceLicense11: "CATOSL-1.1";
        readonly CreativeCommonsAttribution10Generic: "CC-BY-1.0";
        readonly CreativeCommonsAttribution20Generic: "CC-BY-2.0";
        readonly CreativeCommonsAttribution25Generic: "CC-BY-2.5";
        readonly CreativeCommonsAttribution30Unported: "CC-BY-3.0";
        readonly CreativeCommonsAttribution40International: "CC-BY-4.0";
        readonly CreativeCommonsAttributionNonCommercial10Generic: "CC-BY-NC-1.0";
        readonly CreativeCommonsAttributionNonCommercial20Generic: "CC-BY-NC-2.0";
        readonly CreativeCommonsAttributionNonCommercial25Generic: "CC-BY-NC-2.5";
        readonly CreativeCommonsAttributionNonCommercial30Unported: "CC-BY-NC-3.0";
        readonly CreativeCommonsAttributionNonCommercial40International: "CC-BY-NC-4.0";
        readonly CreativeCommonsAttributionNonCommercialNoDerivatives10Generic: "CC-BY-NC-ND-1.0";
        readonly CreativeCommonsAttributionNonCommercialNoDerivatives20Generic: "CC-BY-NC-ND-2.0";
        readonly CreativeCommonsAttributionNonCommercialNoDerivatives25Generic: "CC-BY-NC-ND-2.5";
        readonly CreativeCommonsAttributionNonCommercialNoDerivatives30Unported: "CC-BY-NC-ND-3.0";
        readonly CreativeCommonsAttributionNonCommercialNoDerivatives40International: "CC-BY-NC-ND-4.0";
        readonly CreativeCommonsAttributionNonCommercialShareAlike10Generic: "CC-BY-NC-SA-1.0";
        readonly CreativeCommonsAttributionNonCommercialShareAlike20Generic: "CC-BY-NC-SA-2.0";
        readonly CreativeCommonsAttributionNonCommercialShareAlike25Generic: "CC-BY-NC-SA-2.5";
        readonly CreativeCommonsAttributionNonCommercialShareAlike30Unported: "CC-BY-NC-SA-3.0";
        readonly CreativeCommonsAttributionNonCommercialShareAlike40International: "CC-BY-NC-SA-4.0";
        readonly CreativeCommonsAttributionNoDerivatives10Generic: "CC-BY-ND-1.0";
        readonly CreativeCommonsAttributionNoDerivatives20Generic: "CC-BY-ND-2.0";
        readonly CreativeCommonsAttributionNoDerivatives25Generic: "CC-BY-ND-2.5";
        readonly CreativeCommonsAttributionNoDerivatives30Unported: "CC-BY-ND-3.0";
        readonly CreativeCommonsAttributionNoDerivatives40International: "CC-BY-ND-4.0";
        readonly CreativeCommonsAttributionShareAlike10Generic: "CC-BY-SA-1.0";
        readonly CreativeCommonsAttributionShareAlike20Generic: "CC-BY-SA-2.0";
        readonly CreativeCommonsAttributionShareAlike25Generic: "CC-BY-SA-2.5";
        readonly CreativeCommonsAttributionShareAlike30Unported: "CC-BY-SA-3.0";
        readonly CreativeCommonsAttributionShareAlike40International: "CC-BY-SA-4.0";
        readonly CreativeCommonsZeroV10Universal: "CC0-1.0";
        readonly CommonDevelopmentAndDistributionLicense10: "CDDL-1.0";
        readonly CommonDevelopmentAndDistributionLicense11: "CDDL-1.1";
        readonly CommunityDataLicenseAgreementPermissive10: "CDLA-Permissive-1.0";
        readonly CommunityDataLicenseAgreementSharing10: "CDLA-Sharing-1.0";
        readonly CeCILLFreeSoftwareLicenseAgreementV10: "CECILL-1.0";
        readonly CeCILLFreeSoftwareLicenseAgreementV11: "CECILL-1.1";
        readonly CeCILLFreeSoftwareLicenseAgreementV20: "CECILL-2.0";
        readonly CeCILLFreeSoftwareLicenseAgreementV21: "CECILL-2.1";
        readonly CeCILLBFreeSoftwareLicenseAgreement: "CECILL-B";
        readonly CeCILLCFreeSoftwareLicenseAgreement: "CECILL-C";
        readonly ClarifiedArtisticLicense: "ClArtistic";
        readonly CNRIJythonLicense: "CNRI-Jython";
        readonly CNRIPythonLicense: "CNRI-Python";
        readonly CNRIPythonOpenSourceGPLCompatibleLicenseAgreement: "CNRI-Python-GPL-Compatible";
        readonly CondorPublicLicenseV11: "Condor-1.1";
        readonly CommonPublicAttributionLicense10: "CPAL-1.0";
        readonly CommonPublicLicense10: "CPL-1.0";
        readonly CodeProjectOpenLicense102: "CPOL-1.02";
        readonly CrosswordLicense: "Crossword";
        readonly CrystalStackerLicense: "CrystalStacker";
        readonly CUAOfficePublicLicenseV10: "CUA-OPL-1.0";
        readonly CubeLicense: "Cube";
        readonly CurlLicense: "curl";
        readonly DeutscheFreieSoftwareLizenz: "D-FSL-1.0";
        readonly DiffmarkLicense: "diffmark";
        readonly DOCLicense: "DOC";
        readonly DotseqnLicense: "Dotseqn";
        readonly DSDPLicense: "DSDP";
        readonly DvipdfmLicense: "dvipdfm";
        readonly EducationalCommunityLicenseV10: "ECL-1.0";
        readonly EducationalCommunityLicenseV20: "ECL-2.0";
        readonly EiffelForumLicenseV10: "EFL-1.0";
        readonly EiffelForumLicenseV20: "EFL-2.0";
        readonly EGenixComPublicLicense110: "eGenix";
        readonly EntessaPublicLicenseV10: "Entessa";
        readonly EclipsePublicLicense10: "EPL-1.0";
        readonly EclipsePublicLicense20: "EPL-2.0";
        readonly ErlangPublicLicenseV11: "ErlPL-1.1";
        readonly EUDataGridSoftwareLicense: "EUDatagrid";
        readonly EuropeanUnionPublicLicense10: "EUPL-1.0";
        readonly EuropeanUnionPublicLicense11: "EUPL-1.1";
        readonly EuropeanUnionPublicLicense12: "EUPL-1.2";
        readonly EurosymLicense: "Eurosym";
        readonly FairLicense: "Fair";
        readonly FrameworxOpenLicense10: "Frameworx-1.0";
        readonly FreeImagePublicLicenseV10: "FreeImage";
        readonly FSFAllPermissiveLicense: "FSFAP";
        readonly FSFUnlimitedLicense: "FSFUL";
        readonly FSFUnlimitedLicenseWithLicenseRetention: "FSFULLR";
        readonly FreetypeProjectLicense: "FTL";
        readonly GNUFreeDocumentationLicenseV11Only: "GFDL-1.1-only";
        readonly GNUFreeDocumentationLicenseV11OrLater: "GFDL-1.1-or-later";
        readonly GNUFreeDocumentationLicenseV12Only: "GFDL-1.2-only";
        readonly GNUFreeDocumentationLicenseV12OrLater: "GFDL-1.2-or-later";
        readonly GNUFreeDocumentationLicenseV13Only: "GFDL-1.3-only";
        readonly GNUFreeDocumentationLicenseV13OrLater: "GFDL-1.3-or-later";
        readonly GiftwareLicense: "Giftware";
        readonly GL2PSLicense: "GL2PS";
        readonly VAL3dfxGlideLicense: "Glide";
        readonly GlulxeLicense: "Glulxe";
        readonly GnuplotLicense: "gnuplot";
        readonly GNUGeneralPublicLicenseV10Only: "GPL-1.0-only";
        readonly GNUGeneralPublicLicenseV10OrLater: "GPL-1.0-or-later";
        readonly GNUGeneralPublicLicenseV20Only: "GPL-2.0-only";
        readonly GNUGeneralPublicLicenseV20OrLater: "GPL-2.0-or-later";
        readonly GNUGeneralPublicLicenseV30Only: "GPL-3.0-only";
        readonly GNUGeneralPublicLicenseV30OrLater: "GPL-3.0-or-later";
        readonly GSOAPPublicLicenseV13b: "gSOAP-1.3b";
        readonly HaskellLanguageReportLicense: "HaskellReport";
        readonly HistoricalPermissionNoticeAndDisclaimer: "HPND";
        readonly IBMPowerPCInitializationAndBootSoftware: "IBM-pibs";
        readonly ICULicense: "ICU";
        readonly IndependentJPEGGroupLicense: "IJG";
        readonly ImageMagickLicense: "ImageMagick";
        readonly IMatixStandardFunctionLibraryAgreement: "iMatix";
        readonly Imlib2License: "Imlib2";
        readonly InfoZIPLicense: "Info-ZIP";
        readonly IntelOpenSourceLicense: "Intel";
        readonly IntelACPISoftwareLicenseAgreement: "Intel-ACPI";
        readonly InterbasePublicLicenseV10: "Interbase-1.0";
        readonly IPAFontLicense: "IPA";
        readonly IBMPublicLicenseV10: "IPL-1.0";
        readonly ISCLicense: "ISC";
        readonly JasPerLicense: "JasPer-2.0";
        readonly JSONLicense: "JSON";
        readonly LicenceArtLibre12: "LAL-1.2";
        readonly LicenceArtLibre13: "LAL-1.3";
        readonly Latex2eLicense: "Latex2e";
        readonly LeptonicaLicense: "Leptonica";
        readonly GNULibraryGeneralPublicLicenseV2Only: "LGPL-2.0-only";
        readonly GNULibraryGeneralPublicLicenseV2OrLater: "LGPL-2.0-or-later";
        readonly GNULesserGeneralPublicLicenseV21Only: "LGPL-2.1-only";
        readonly GNULesserGeneralPublicLicenseV21OrLater: "LGPL-2.1-or-later";
        readonly GNULesserGeneralPublicLicenseV30Only: "LGPL-3.0-only";
        readonly GNULesserGeneralPublicLicenseV30OrLater: "LGPL-3.0-or-later";
        readonly LesserGeneralPublicLicenseForLinguisticResources: "LGPLLR";
        readonly LibpngLicense: "Libpng";
        readonly LibtiffLicense: "libtiff";
        readonly LicenceLibreDuQuebecPermissiveVersion11: "LiLiQ-P-1.1";
        readonly LicenceLibreDuQuebecReciprociteVersion11: "LiLiQ-R-1.1";
        readonly LicenceLibreDuQuebecReciprociteForteVersion11: "LiLiQ-Rplus-1.1";
        readonly LinuxKernelVariantOfOpenIBOrgLicense: "Linux-OpenIB";
        readonly LucentPublicLicenseVersion10: "LPL-1.0";
        readonly LucentPublicLicenseV102: "LPL-1.02";
        readonly LaTeXProjectPublicLicenseV10: "LPPL-1.0";
        readonly LaTeXProjectPublicLicenseV11: "LPPL-1.1";
        readonly LaTeXProjectPublicLicenseV12: "LPPL-1.2";
        readonly LaTeXProjectPublicLicenseV13a: "LPPL-1.3a";
        readonly LaTeXProjectPublicLicenseV13c: "LPPL-1.3c";
        readonly MakeIndexLicense: "MakeIndex";
        readonly MirOSLicense: "MirOS";
        readonly MITLicense: "MIT";
        readonly MITNoAttribution: "MIT-0";
        readonly EnlightenmentLicenseE16: "MIT-advertising";
        readonly CMULicense: "MIT-CMU";
        readonly EnnaLicense: "MIT-enna";
        readonly FehLicense: "MIT-feh";
        readonly MITPlusNoFalseAttribsLicense: "MITNFA";
        readonly MotosotoLicense: "Motosoto";
        readonly Mpich2License: "mpich2";
        readonly MozillaPublicLicense10: "MPL-1.0";
        readonly MozillaPublicLicense11: "MPL-1.1";
        readonly MozillaPublicLicense20: "MPL-2.0";
        readonly MozillaPublicLicense20NoCopyleftException: "MPL-2.0-no-copyleft-exception";
        readonly MicrosoftPublicLicense: "MS-PL";
        readonly MicrosoftReciprocalLicense: "MS-RL";
        readonly MatrixTemplateLibraryLicense: "MTLL";
        readonly MulticsLicense: "Multics";
        readonly MupLicense: "Mup";
        readonly NASAOpenSourceAgreement13: "NASA-1.3";
        readonly NaumenPublicLicense: "Naumen";
        readonly NetBooleanPublicLicenseV1: "NBPL-1.0";
        readonly UniversityOfIllinoisNCSAOpenSourceLicense: "NCSA";
        readonly NetSNMPLicense: "Net-SNMP";
        readonly NetCDFLicense: "NetCDF";
        readonly NewsletrLicense: "Newsletr";
        readonly NethackGeneralPublicLicense: "NGPL";
        readonly NorwegianLicenceForOpenGovernmentData: "NLOD-1.0";
        readonly NoLimitPublicLicense: "NLPL";
        readonly NokiaOpenSourceLicense: "Nokia";
        readonly NetizenOpenSourceLicense: "NOSL";
        readonly NotOpenSource: "not-open-source";
        readonly NowebLicense: "Noweb";
        readonly NetscapePublicLicenseV10: "NPL-1.0";
        readonly NetscapePublicLicenseV11: "NPL-1.1";
        readonly NonProfitOpenSoftwareLicense30: "NPOSL-3.0";
        readonly NRLLicense: "NRL";
        readonly NTPLicense: "NTP";
        readonly OpenCASCADETechnologyPublicLicense: "OCCT-PL";
        readonly OCLCResearchPublicLicense20: "OCLC-2.0";
        readonly ODCOpenDatabaseLicenseV10: "ODbL-1.0";
        readonly SILOpenFontLicense10: "OFL-1.0";
        readonly SILOpenFontLicense11: "OFL-1.1";
        readonly OpenGroupTestSuiteLicense: "OGTSL";
        readonly OpenLDAPPublicLicenseV11: "OLDAP-1.1";
        readonly OpenLDAPPublicLicenseV12: "OLDAP-1.2";
        readonly OpenLDAPPublicLicenseV13: "OLDAP-1.3";
        readonly OpenLDAPPublicLicenseV14: "OLDAP-1.4";
        readonly OpenLDAPPublicLicenseV20OrPossibly20AAnd20B: "OLDAP-2.0";
        readonly OpenLDAPPublicLicenseV201: "OLDAP-2.0.1";
        readonly OpenLDAPPublicLicenseV21: "OLDAP-2.1";
        readonly OpenLDAPPublicLicenseV22: "OLDAP-2.2";
        readonly OpenLDAPPublicLicenseV221: "OLDAP-2.2.1"; /**
         * Extended properties for primitive element: ImplementationGuide.definition.parameter.code
         */
        readonly OpenLDAPPublicLicense222: "OLDAP-2.2.2";
        readonly OpenLDAPPublicLicenseV23: "OLDAP-2.3";
        readonly OpenLDAPPublicLicenseV24: "OLDAP-2.4";
        readonly OpenLDAPPublicLicenseV25: "OLDAP-2.5";
        readonly OpenLDAPPublicLicenseV26: "OLDAP-2.6";
        readonly OpenLDAPPublicLicenseV27: "OLDAP-2.7";
        readonly OpenLDAPPublicLicenseV28: "OLDAP-2.8";
        readonly OpenMarketLicense: "OML";
        readonly OpenSSLLicense: "OpenSSL";
        readonly OpenPublicLicenseV10: "OPL-1.0";
        readonly OSETPublicLicenseVersion21: "OSET-PL-2.1";
        readonly OpenSoftwareLicense10: "OSL-1.0";
        readonly OpenSoftwareLicense11: "OSL-1.1";
        readonly OpenSoftwareLicense20: "OSL-2.0";
        readonly OpenSoftwareLicense21: "OSL-2.1";
        readonly OpenSoftwareLicense30: "OSL-3.0";
        readonly ODCPublicDomainDedicationAndLicense10: "PDDL-1.0";
        readonly PHPLicenseV30: "PHP-3.0";
        readonly PHPLicenseV301: "PHP-3.01";
        readonly PlexusClassworldsLicense: "Plexus";
        readonly PostgreSQLLicense: "PostgreSQL";
        readonly PsfragLicense: "psfrag";
        readonly PsutilsLicense: "psutils";
        readonly PythonLicense20: "Python-2.0";
        readonly QhullLicense: "Qhull";
        readonly QPublicLicense10: "QPL-1.0";
        readonly RdiscLicense: "Rdisc";
        readonly RedHatECosPublicLicenseV11: "RHeCos-1.1";
        readonly ReciprocalPublicLicense11: "RPL-1.1";
        readonly ReciprocalPublicLicense15: "RPL-1.5";
        readonly RealNetworksPublicSourceLicenseV10: "RPSL-1.0";
        readonly RSAMessageDigestLicense: "RSA-MD";
        readonly RicohSourceCodePublicLicense: "RSCPL";
        readonly RubyLicense: "Ruby";
        readonly SaxPublicDomainNotice: "SAX-PD";
        readonly SaxpathLicense: "Saxpath";
        readonly SCEASharedSourceLicense: "SCEA";
        readonly SendmailLicense: "Sendmail";
        readonly SGIFreeSoftwareLicenseBV10: "SGI-B-1.0";
        readonly SGIFreeSoftwareLicenseBV11: "SGI-B-1.1";
        readonly SGIFreeSoftwareLicenseBV20: "SGI-B-2.0";
        readonly SimplePublicLicense20: "SimPL-2.0";
        /**
         * The source location for the template.
         */
        readonly SunIndustryStandardsSourceLicenseV11: "SISSL";
        readonly SunIndustryStandardsSourceLicenseV12: "SISSL-1.2"; /**
         * The scope in which the template applies.
         */
        readonly SleepycatLicense: "Sleepycat";
        readonly StandardMLOfNewJerseyLicense: "SMLNJ";
        readonly SecureMessagingProtocolPublicLicense: "SMPPL";
        readonly SNIAPublicLicense11: "SNIA";
        readonly SpencerLicense86: "Spencer-86";
        readonly SpencerLicense94: "Spencer-94";
        readonly SpencerLicense99: "Spencer-99";
        readonly SunPublicLicenseV10: "SPL-1.0";
        readonly SugarCRMPublicLicenseV113: "SugarCRM-1.1.3";
        readonly SchemeWidgetLibrarySWLSoftwareLicenseAgreement: "SWL";
        readonly TCLTKLicense: "TCL";
        readonly TCPWrappersLicense: "TCP-wrappers";
        readonly TMateOpenSourceLicense: "TMate";
        readonly TORQUEV25PlusSoftwareLicenseV11: "TORQUE-1.1";
        readonly TrussterOpenSourceLicense: "TOSL";
        readonly UnicodeLicenseAgreementDataFilesAndSoftware2015: "Unicode-DFS-2015";
        readonly UnicodeLicenseAgreementDataFilesAndSoftware2016: "Unicode-DFS-2016";
        readonly UnicodeTermsOfUse: "Unicode-TOU";
        readonly TheUnlicense: "Unlicense";
        readonly UniversalPermissiveLicenseV10: "UPL-1.0";
        readonly VimLicense: "Vim";
        readonly VOSTROMPublicLicenseForOpenSource: "VOSTROM";
        readonly VovidaSoftwareLicenseV10: "VSL-1.0";
        readonly W3CSoftwareNoticeAndLicense20021231: "W3C";
        readonly W3CSoftwareNoticeAndLicense19980720: "W3C-19980720";
        readonly W3CSoftwareNoticeAndDocumentLicense20150513: "W3C-20150513";
        readonly SybaseOpenWatcomPublicLicense10: "Watcom-1.0";
        readonly WsuipaLicense: "Wsuipa";
        readonly DoWhatTheFAsteriskCkYouWantToPublicLicense: "WTFPL";
        readonly X11License: "X11";
        readonly XeroxLicense: "Xerox";
        readonly XFree86License11: "XFree86-1.1";
        readonly XinetdLicense: "xinetd";
        readonly XNetLicense: "Xnet";
        readonly XPPLicense: "xpp";
        readonly XSkatLicense: "XSkat";
        readonly YahooNotPublicLicenseV10: "YPL-1.0";
        readonly YahooNotPublicLicenseV11: "YPL-1.1";
        readonly ZedLicense: "Zed";
        readonly ZendLicenseV20: "Zend-2.0";
        readonly ZimbraPublicLicenseV13: "Zimbra-1.3";
        readonly ZimbraPublicLicenseV14: "Zimbra-1.4";
        readonly ZlibLicense: "Zlib";
        readonly ZlibLibpngLicenseWithAcknowledgement: "zlib-acknowledgement";
        readonly ZopePublicLicense11: "ZPL-1.1";
        readonly ZopePublicLicense20: "ZPL-2.0";
        readonly ZopePublicLicense21: "ZPL-2.1";
    };
    /**
     * Required-bound Value Set for fhirVersion (ImplementationGuide.fhirVersion)
     */
    static get fhirVersionRequiredCodes(): {
        readonly VAL0080: "0.0.80";
        readonly VAL0081: "0.0.81";
        readonly VAL0082: "0.0.82";
        readonly VAL001: "0.01";
        readonly VAL005: "0.05";
        readonly VAL006: "0.06";
        readonly VAL011: "0.11";
        readonly VAL040: "0.4.0";
        readonly VAL050: "0.5.0";
        readonly VAL100: "1.0.0";
        readonly VAL101: "1.0.1";
        readonly VAL102: "1.0.2";
        readonly VAL110: "1.1.0";
        readonly VAL140: "1.4.0";
        readonly VAL160: "1.6.0";
        readonly VAL180: "1.8.0";
        readonly VAL300: "3.0.0";
        readonly VAL301: "3.0.1";
        readonly VAL330: "3.3.0";
        readonly VAL350: "3.5.0";
        readonly VAL400: "4.0.0"; /**
         * Extended properties for primitive element: ImplementationGuide.dependsOn.uri
         */
        readonly VAL401: "4.0.1";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImplementationGuide.d.ts.map