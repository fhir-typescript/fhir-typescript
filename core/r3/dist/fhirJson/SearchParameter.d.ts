import * as fhir from '../fhirJson.js';
/**
 * Used to define the parts of a composite search parameter.
 */
export interface SearchParameterComponent extends fhir.BackboneElement {
    /**
     * The definition of the search parameter that describes this part.
     */
    definition: fhir.Reference | null;
    /**
     * This expression overrides the expression in the definition, and extracts the index values from the outcome of the composite expression.
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
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the search parameter with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of search parameters that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired search parameter without due consideration.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: SearchParameter.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of search parameter that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental search parameter in production.
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
     * Usually an organization, but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
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
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the search parameter Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
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
     * A search parameter must always have at least one type. When search parameters have more than one resource, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
     */
    base: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | null;
    /**
     * Extended properties for primitive element: SearchParameter.base
     */
    _base?: (fhir.FhirElement | null)[];
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'string' | 'token' | 'uri' | null;
    /**
     * Extended properties for primitive element: SearchParameter.type
     */
    _type?: fhir.FhirElement;
    /**
     * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
     */
    derivedFrom?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.derivedFrom
     */
    _derivedFrom?: fhir.FhirElement;
    /**
     * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
     */
    description: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.description
     */
    _description?: fhir.FhirElement;
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
    target?: (('Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.target
     */
    _target?: (fhir.FhirElement | null)[];
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
    modifier?: (('above' | 'below' | 'contains' | 'exact' | 'in' | 'missing' | 'not' | 'not-in' | 'text' | 'type') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.modifier
     */
    _modifier?: (fhir.FhirElement | null)[];
    /**
     * Systems are not required to list all the chain names they support, but if they don't list them, clients may not know to use them.
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