import * as fhir from '../fhirJson.js';
/**
 * Used to define the parts of a composite search parameter.
 */
export interface SearchParameterComponent extends fhir.BackboneElement {
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.component.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
     */
    expression: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.component.expression
     */
    _expression?: fhir.FhirElement;
}
/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export interface SearchParameter extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SearchParameter" | null;
    /**
     * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
     * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
     * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.derivedFrom
     */
    _derivedFrom?: fhir.FhirElement;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: SearchParameter.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of search parameters that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
     */
    description: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * For maximum compatibility, use only lowercase ASCII characters.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.code
     */
    _code?: fhir.FhirElement;
    /**
     * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EffectEvidenceSynthesis' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription') | null)[] | null;
    /**
     * Extended properties for primitive element: SearchParameter.base
     */
    _base?: (fhir.FhirElement | null)[];
    /**
     * The type of value that a search parameter may contain, and how the content is interpreted.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'special' | 'string' | 'token' | 'uri' | null;
    /**
     * Extended properties for primitive element: SearchParameter.type
     */
    _type?: fhir.FhirElement;
    /**
     * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
     */
    expression?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.expression
     */
    _expression?: fhir.FhirElement;
    /**
     * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
     */
    xpath?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpath
     */
    _xpath?: fhir.FhirElement;
    /**
     * How the search parameter relates to the set of elements returned by evaluating the xpath query.
     */
    xpathUsage?: 'distance' | 'nearby' | 'normal' | 'other' | 'phonetic' | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.xpathUsage
     */
    _xpathUsage?: fhir.FhirElement;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'CatalogEntry' | 'ChargeItem' | 'ChargeItemDefinition' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DetectedIssue' | 'Device' | 'DeviceDefinition' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EffectEvidenceSynthesis' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingStudy' | 'Immunization' | 'ImmunizationEvaluation' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'InsurancePlan' | 'Invoice' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationKnowledge' | 'MedicationRequest' | 'MedicationStatement' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductInteraction' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MessageDefinition' | 'MessageHeader' | 'MolecularSequence' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'ObservationDefinition' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'OrganizationAffiliation' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'RelatedPerson' | 'RequestGroup' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'RiskEvidenceSynthesis' | 'Schedule' | 'SearchParameter' | 'ServiceRequest' | 'Slot' | 'Specimen' | 'SpecimenDefinition' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SubstanceNucleicAcid' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSourceMaterial' | 'SubstanceSpecification' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TerminologyCapabilities' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VerificationResult' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.target
     */
    _target?: (fhir.FhirElement | null)[];
    /**
     * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
     */
    multipleOr?: boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.multipleOr
     */
    _multipleOr?: fhir.FhirElement;
    /**
     * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
     */
    multipleAnd?: boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.multipleAnd
     */
    _multipleAnd?: fhir.FhirElement;
    /**
     * If no comparators are listed, clients should not expect servers to support any comparators.
     */
    comparator?: (('ap' | 'eb' | 'eq' | 'ge' | 'gt' | 'le' | 'lt' | 'ne' | 'sa') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.comparator
     */
    _comparator?: (fhir.FhirElement | null)[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: (('above' | 'below' | 'contains' | 'exact' | 'identifier' | 'in' | 'missing' | 'not' | 'not-in' | 'ofType' | 'text' | 'type') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.modifier
     */
    _modifier?: (fhir.FhirElement | null)[];
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
     */
    chain?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.chain
     */
    _chain?: (fhir.FhirElement | null)[];
    /**
     * Used to define the parts of a composite search parameter.
     */
    component?: (fhir.SearchParameterComponent | null)[] | undefined;
}
//# sourceMappingURL=SearchParameter.d.ts.map