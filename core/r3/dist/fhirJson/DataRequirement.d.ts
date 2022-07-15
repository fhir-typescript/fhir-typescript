import * as fhir from '../fhirJson.js';
/**
 * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
 */
export interface DataRequirementCodeFilter extends fhir.FhirElement {
    /**
     * The code-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.path
     */
    _path?: fhir.FhirElement;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSetString?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueSet[x]
     */
    _valueSetString?: fhir.FhirElement;
    /**
     * The valueset for the code filter. The valueSet and value elements are exclusive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSetReference?: fhir.Reference | undefined;
    /**
     * The codes for the code filter. Only one of valueSet, valueCode, valueCoding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes.
     */
    valueCode?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.codeFilter.valueCode
     */
    _valueCode?: (fhir.FhirElement | null)[];
    /**
     * The Codings for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified Codings.
     */
    valueCoding?: (fhir.Coding | null)[] | undefined;
    /**
     * The CodeableConcepts for the code filter. Only one of valueSet, valueCode, valueConding, or valueCodeableConcept may be specified. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified CodeableConcepts.
     */
    valueCodeableConcept?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
 */
export interface DataRequirementDateFilter extends fhir.FhirElement {
    /**
     * The date-valued attribute of the filter. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. The path must resolve to an element of type dateTime, Period, Schedule, or Timing.
     */
    path: string | null;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.path
     */
    _path?: fhir.FhirElement;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.dateFilter.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valuePeriod?: fhir.Period | undefined;
    /**
     * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration from now.
     */
    valueDuration?: fhir.Duration | undefined;
}
/**
 * Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.
 */
export interface DataRequirement extends fhir.FhirElement {
    /**
     * The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.
     */
    type: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Any' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'DataElement' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'Type' | 'unsignedInt' | 'uri' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | null;
    /**
     * Extended properties for primitive element: DataRequirement.type
     */
    _type?: fhir.FhirElement;
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.profile
     */
    _profile?: (fhir.FhirElement | null)[];
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported.
     */
    mustSupport?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DataRequirement.mustSupport
     */
    _mustSupport?: (fhir.FhirElement | null)[];
    /**
     * Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data.
     */
    codeFilter?: (fhir.DataRequirementCodeFilter | null)[] | undefined;
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
     */
    dateFilter?: (fhir.DataRequirementDateFilter | null)[] | undefined;
}
//# sourceMappingURL=DataRequirement.d.ts.map