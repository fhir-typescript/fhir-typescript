import * as fhir from '../fhir.js';
import { BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
import { OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
import { SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
import { OperationKindCodeType } from '../fhirValueSets/OperationKindCodes.js';
/**
 * Valid arguments for the OperationDefinitionParameterBinding type.
 */
export interface OperationDefinitionParameterBindingArgs extends fhir.BackboneElementArgs {
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | string | undefined;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: fhir.FhirCanonical | string | undefined;
}
/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export declare class OperationDefinitionParameterBinding extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For further discussion, see [Using Terminologies](terminologies.html).
     */
    strength: fhir.FhirCode<BindingStrengthCodeType> | null;
    /**
     * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
     */
    valueSet: fhir.FhirCanonical | null;
    /**
     * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterBindingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for strength (OperationDefinition.parameter.binding.strength)
     */
    static get strengthRequiredCodes(): {
        readonly Example: "example";
        readonly Extensible: "extensible";
        readonly Preferred: "preferred";
        readonly Required: "required";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionParameterReferencedFrom type.
 */
export interface OperationDefinitionParameterReferencedFromArgs extends fhir.BackboneElementArgs {
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: fhir.FhirString | string | undefined;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: fhir.FhirString | string | undefined;
}
/**
 * Resolution applies if the referenced parameter exists.
 */
export declare class OperationDefinitionParameterReferencedFrom extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource.
     */
    source: fhir.FhirString | null;
    /**
     * The id of the element in the referencing resource that is expected to resolve to this resource.
     */
    sourceId?: fhir.FhirString | undefined;
    /**
     * Default constructor for OperationDefinitionParameterReferencedFrom - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterReferencedFromArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionParameter type.
 */
export interface OperationDefinitionParameterArgs extends fhir.BackboneElementArgs {
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: fhir.FhirCode | string | undefined;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | string | undefined;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: fhir.FhirInteger | number | undefined;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: fhir.FhirString | string | undefined;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: fhir.FhirString | string | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: fhir.FhirCode | string | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: fhir.FhirCode<SearchParamTypeCodeType> | string | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBindingArgs | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom?: fhir.OperationDefinitionParameterReferencedFromArgs[] | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part?: fhir.OperationDefinitionParameterArgs[] | undefined;
}
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
export declare class OperationDefinitionParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that for search parameters (type = string, with a search type), the name may be altered by the search modifiers.
     */
    name: fhir.FhirCode | null;
    /**
     * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
     */
    use: fhir.FhirCode<OperationParameterUseCodeType> | null;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min: fhir.FhirInteger | null;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max: fhir.FhirString | null;
    /**
     * Describes the meaning or use of this parameter.
     */
    documentation?: fhir.FhirString | undefined;
    /**
     * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defined.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
     */
    targetProfile: fhir.FhirCanonical[];
    /**
     * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
     */
    searchType?: fhir.FhirCode<SearchParamTypeCodeType> | undefined;
    /**
     * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
     */
    binding?: fhir.OperationDefinitionParameterBinding | undefined;
    /**
     * Resolution applies if the referenced parameter exists.
     */
    referencedFrom: fhir.OperationDefinitionParameterReferencedFrom[];
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    part: fhir.OperationDefinitionParameter[];
    /**
     * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for use (OperationDefinition.parameter.use)
     */
    static get useRequiredCodes(): {
        readonly In: "in";
        readonly Out: "out";
    };
    /**
     * Required-bound Value Set for type (OperationDefinition.parameter.type)
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
        readonly ConceptMap: "ConceptMap"; /**
         * Resolution applies if the referenced parameter exists.
         */
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
        readonly Distance: "Distance"; /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
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
        /**
         * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
         */
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
        readonly Integer: "integer"; /**
         * May be a web site, an email address, a telephone number, etc.
         */
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
     * Required-bound Value Set for searchType (OperationDefinition.parameter.searchType)
     */
    static get searchTypeRequiredCodes(): {
        readonly Composite: "composite";
        readonly DateDateTime: "date";
        readonly Number: "number";
        readonly Quantity: "quantity";
        readonly Reference: "reference";
        readonly Special: "special";
        readonly String: "string";
        readonly Token: "token";
        readonly URI: "uri";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinitionOverload type.
 */
export interface OperationDefinitionOverloadArgs extends fhir.BackboneElementArgs {
    /**
     * Name of parameter to include in overload.
     */
    parameterName?: fhir.FhirString[] | string[] | undefined;
    /**
     * Comments to go on overload.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
export declare class OperationDefinitionOverload extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Name of parameter to include in overload.
     */
    parameterName: fhir.FhirString[];
    /**
     * Comments to go on overload.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for OperationDefinitionOverload - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionOverloadArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the OperationDefinition type.
 */
export interface OperationDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition" | undefined;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | string | undefined;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | string | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhir.UsageContextArgs[] | undefined;
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | string | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | string | undefined;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirMarkdown | string | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.FhirCanonical | string | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource?: fhir.FhirCode[] | string[] | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: fhir.FhirBoolean | boolean | undefined;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | boolean | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: fhir.FhirCanonical | string | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: fhir.FhirCanonical | string | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter?: fhir.OperationDefinitionParameterArgs[] | undefined;
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload?: fhir.OperationDefinitionOverloadArgs[] | undefined;
}
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export declare class OperationDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OperationDefinition";
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * There may be different operation definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the operation definition with the format [url]|[version].
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
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Named queries are invoked differently, and have different capabilities.
     */
    kind: fhir.FhirCode<OperationKindCodeType> | null;
    /**
     * Allows filtering of operation definitions that are appropriate for use versus not.
     */
    experimental?: fhir.FhirBoolean | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the operation definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the operation definition is the organization or individual primarily responsible for the maintenance and upkeep of the operation definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the operation definition. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: fhir.FhirString | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact: fhir.ContactDetail[];
    /**
     * This description can be used to capture details such as why the operation definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the operation definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the operation definition is presumed to be the predominant language in the place the operation definition was created).
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext: fhir.UsageContext[];
    /**
     * It may be possible for the operation definition to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction: fhir.CodeableConcept[];
    /**
     * This element does not describe the usage of the operation definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this operation definition.
     */
    purpose?: fhir.FhirMarkdown | undefined;
    /**
     * What http methods can be used for the operation depends on the .affectsState value and whether the input parameters are primitive or complex:
     * 1. Servers SHALL support POST method for all operations.
     * 2. Servers SHALL support GET method if all the parameters for the operation are primitive or there are no parameters and the operation has affectsState = false.
     */
    affectsState?: fhir.FhirBoolean | undefined;
    /**
     * The name used to invoke the operation.
     */
    code: fhir.FhirCode | null;
    /**
     * Additional information about how to use this operation or named query.
     */
    comment?: fhir.FhirMarkdown | undefined;
    /**
     * A constrained profile can make optional parameters required or not used and clarify documentation.
     */
    base?: fhir.FhirCanonical | undefined;
    /**
     * If the type is an abstract resource ("Resource" or "DomainResource") then the operation can be invoked on any concrete specialization.
     */
    resource: fhir.FhirCode[];
    /**
     * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
     */
    system: fhir.FhirBoolean | null;
    /**
     * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context).
     */
    type: fhir.FhirBoolean | null;
    /**
     * Indicates whether this operation can be invoked on a particular instance of one of the given types.
     */
    instance: fhir.FhirBoolean | null;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    inputProfile?: fhir.FhirCanonical | undefined;
    /**
     * If present the profile shall not conflict with what is specified in the parameters in the operation definition (max/min etc.), though it may provide additional constraints. The constraints expressed in the profile apply whether the operation is invoked by a POST wih parameters or not.
     */
    outputProfile?: fhir.FhirCanonical | undefined;
    /**
     * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
     */
    parameter: fhir.OperationDefinitionParameter[];
    /**
     * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
     */
    overload: fhir.OperationDefinitionOverload[];
    /**
     * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OperationDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (OperationDefinition.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Draft: "draft";
        readonly Retired: "retired";
        readonly Unknown: "unknown";
    };
    /**
     * Required-bound Value Set for kind (OperationDefinition.kind)
     */
    static get kindRequiredCodes(): {
        readonly Operation: "operation";
        readonly Query: "query";
    };
    /**
     * Required-bound Value Set for resource (OperationDefinition.resource)
     */
    static get resourceRequiredCodes(): {
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
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=OperationDefinition.d.ts.map