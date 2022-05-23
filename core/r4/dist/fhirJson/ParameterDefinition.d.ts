import * as fhir from '../fhirJson.js';
/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export interface ParameterDefinition extends fhir.FhirElement {
    /**
     * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Whether the parameter is input or output for the module.
     */
    use: 'in' | 'out' | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.use
     */
    _use?: fhir.FhirElement;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.min
     */
    _min?: fhir.FhirElement;
    /**
     * The maximum number of times this element is permitted to appear in the request or response.
     */
    max?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.max
     */
    _max?: fhir.FhirElement;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * The type of the parameter.
     */
    type: 'Account' | 'ActivityDefinition' | 'Address' | 'AdverseEvent' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Any' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'boolean' | 'Bundle' | 'canonical' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'CodeSystem' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'ContactDetail' | 'ContactPoint' | 'Contract' | 'Contributor' | 'Count' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DataRequirement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Dosage' | 'Duration' | 'EffectEvidenceSynthesis' | 'Element' | 'ElementDefinition' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'Expression' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'InsurancePlan' | 'integer' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'markdown' | 'MarketingStatus' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'Meta' | 'MolecularSequence' | 'Money' | 'MoneyQuantity' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'ParameterDefinition' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'PlanDefinition' | 'Population' | 'positiveInt' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProdCharacteristic' | 'ProductShelfLife' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'RelatedArtifact' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'string' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceAmount' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'time' | 'Timing' | 'TriggerDefinition' | 'Type' | 'unsignedInt' | 'uri' | 'url' | 'UsageContext' | 'uuid' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription' | 'xhtml' | null;
    /**
     * Extended properties for primitive element: ParameterDefinition.type
     */
    _type?: fhir.FhirElement;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
     */
    profile?: string | undefined;
    /**
     * Extended properties for primitive element: ParameterDefinition.profile
     */
    _profile?: fhir.FhirElement;
}
//# sourceMappingURL=ParameterDefinition.d.ts.map