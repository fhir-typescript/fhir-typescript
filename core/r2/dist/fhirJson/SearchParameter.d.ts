import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface SearchParameterContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the search parameter.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
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
     * To allow referencing and reusing search parameter definitions under other names on operational systems (in case of name clash).
     */
    url: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.url
     */
    _url?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the search parameter.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.name
     */
    _name?: fhir.FhirElement;
    /**
     * The status of this search parameter definition.
     */
    status?: 'active' | 'draft' | 'retired' | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.status
     */
    _status?: fhir.FhirElement;
    /**
     * A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the search parameter.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.SearchParameterContact | null)[] | undefined;
    /**
     * The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.date
     */
    _date?: fhir.FhirElement;
    /**
     * The Scope and Usage that this search parameter was created to meet.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * The code used in the URL or the parameter name in a parameters resource for this search parameter.
     */
    code: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.code
     */
    _code?: fhir.FhirElement;
    /**
     * The base resource type that this search parameter refers to.
     */
    base: 'Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: SearchParameter.base
     */
    _base?: fhir.FhirElement;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'string' | 'token' | 'uri' | null;
    /**
     * Extended properties for primitive element: SearchParameter.type
     */
    _type?: fhir.FhirElement;
    /**
     * A description of the search parameters and how it used.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: SearchParameter.description
     */
    _description?: fhir.FhirElement;
    /**
     * An XPath expression that returns a set of elements for the search parameter.
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
    target?: (('Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: SearchParameter.target
     */
    _target?: (fhir.FhirElement | null)[];
}
//# sourceMappingURL=SearchParameter.d.ts.map