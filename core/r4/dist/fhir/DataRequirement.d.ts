import * as fhir from '../fhir.js';
import { SortDirectionCodeType } from '../fhirValueSets/SortDirectionCodes.js';
/**
 * Valid arguments for the DataRequirementCodeFilter type.
 */
export interface DataRequirementCodeFilterArgs extends fhir.FhirElementArgs {
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.searchParam
     */
    _searchParam?: fhir.FhirElementArgs;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: fhir.FhirCanonical | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueSet
     */
    _valueSet?: fhir.FhirElementArgs;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code?: fhir.CodingArgs[] | undefined;
}
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementCodeFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path attribute contains a [Simple FHIRPath Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | undefined;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: fhir.FhirString | undefined;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: fhir.FhirCanonical | undefined;
    /**
     * The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.
     */
    code: fhir.Coding[];
    /**
     * Default constructor for DataRequirementCodeFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementCodeFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataRequirementDateFilter type.
 */
export interface DataRequirementDateFilterArgs extends fhir.FhirElementArgs {
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.searchParam
     */
    _searchParam?: fhir.FhirElementArgs;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    value?: fhir.FhirDateTime | fhir.Period | fhir.Duration | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    valueDuration?: fhir.DurationArgs | undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
 */
export declare class DataRequirementDateFilter extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
     */
    path?: fhir.FhirString | undefined;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
     */
    searchParam?: fhir.FhirString | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
     */
    value?: (fhir.FhirDateTime | fhir.Period | fhir.Duration) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DataRequirement.dateFilter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for DataRequirementDateFilter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementDateFilterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataRequirementSort type.
 */
export interface DataRequirementSortArgs extends fhir.FhirElementArgs {
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.sort.path
     */
    _path?: fhir.FhirElementArgs;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: fhir.FhirCode<SortDirectionCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.sort.direction
     */
    _direction?: fhir.FhirElementArgs;
}
/**
 * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
 */
export declare class DataRequirementSort extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant.
     */
    path: fhir.FhirString | null;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction: fhir.FhirCode<SortDirectionCodeType> | null;
    /**
     * Default constructor for DataRequirementSort - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementSortArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for direction (DataRequirement.sort.direction)
     */
    static get directionRequiredCodes(): {
        readonly Ascending: "ascending";
        readonly Descending: "descending";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DataRequirement type.
 */
export interface DataRequirementArgs extends fhir.FhirElementArgs {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: (fhir.FhirElementArgs | null)[];
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subjectReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: fhir.FhirString[] | string[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.mustSupport
     */
    _mustSupport?: (fhir.FhirElementArgs | null)[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: fhir.DataRequirementCodeFilterArgs[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: fhir.DataRequirementDateFilterArgs[] | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.limit
     */
    _limit?: fhir.FhirElementArgs;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort?: fhir.DataRequirementSortArgs[] | undefined;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export declare class DataRequirement extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: fhir.FhirCode | null;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile: fhir.FhirCanonical[];
    /**
     * The subject of a data requirement is critical, as the data being specified is determined with respect to a particular subject. This corresponds roughly to the notion of a Compartment in that it limits what data is available based on its relationship to the subject. In CQL, this corresponds to the context declaration.
     */
    subject?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DataRequirement.subject[x]
     */
    protected static readonly _fts_subjectIsChoice: true;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport: fhir.FhirString[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter: fhir.DataRequirementCodeFilter[];
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter: fhir.DataRequirementDateFilter[];
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5".
     */
    limit?: fhir.FhirPositiveInt | undefined;
    /**
     * This element can be used in combination with the sort element to specify quota requirements such as "the most recent 5" or "the highest 5". When multiple sorts are specified, they are applied in the order they appear in the resource.
     */
    sort: fhir.DataRequirementSort[];
    /**
     * Default constructor for DataRequirement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DataRequirementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (DataRequirement.type)
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
        readonly BackboneElement: "BackboneElement"; /**
         * A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
         */
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
        /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly Duration: "Duration";
        readonly EffectEvidenceSynthesis: "EffectEvidenceSynthesis";
        readonly VALElement: "Element";
        readonly ElementDefinition: "ElementDefinition";
        readonly Encounter: "Encounter";
        readonly Endpoint: "Endpoint";
        readonly EnrollmentRequest: "EnrollmentRequest";
        readonly EnrollmentResponse: "EnrollmentResponse";
        readonly EpisodeOfCare: "EpisodeOfCare"; /**
         * The profile of the required data, specified as the uri of the profile definition.
         */
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
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DataRequirement.d.ts.map