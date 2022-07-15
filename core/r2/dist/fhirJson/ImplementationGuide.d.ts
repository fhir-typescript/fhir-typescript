import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface ImplementationGuideContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the implementation guide.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export interface ImplementationGuideDependency extends fhir.BackboneElement {
    /**
     * How the dependency is represented when the guide is published.
     */
    type: 'inclusion' | 'reference' | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependency.type
     */
    _type?: fhir.FhirElement;
    /**
     * Where the dependency is located.
     */
    uri: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.dependency.uri
     */
    _uri?: fhir.FhirElement;
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface ImplementationGuidePackageResource extends fhir.BackboneElement {
    /**
     * This element is provided so that implementation guide tooling does not have to guess the purpose of including a resource in the implementation guide based on the type or context.
     */
    purpose: 'dictionary' | 'example' | 'extension' | 'logical' | 'profile' | 'terminology' | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.name
     */
    _name?: fhir.FhirElement;
    /**
     * A description of the reason that a resource has been included in the implementation guide.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.description
     */
    _description?: fhir.FhirElement;
    /**
     * A short code that may be used to identify the resource throughout the implementation guide.
     */
    acronym?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.acronym
     */
    _acronym?: fhir.FhirElement;
    /**
     * Where this resource is found.
     */
    sourceUri?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.resource.source[x]
     */
    _sourceUri?: fhir.FhirElement;
    /**
     * Where this resource is found.
     */
    sourceReference?: fhir.Reference | undefined;
    /**
     * Another resource that this resource is an example for. This is mostly used for resources that are included as examples of StructureDefinitions.
     */
    exampleFor?: fhir.Reference | undefined;
}
/**
 * A logical group of resources. Logical groups can be used when building pages.
 */
export interface ImplementationGuidePackage extends fhir.BackboneElement {
    /**
     * The name for the group, as used in page.package.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.name
     */
    _name?: fhir.FhirElement;
    /**
     * Human readable text describing the package.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.package.description
     */
    _description?: fhir.FhirElement;
    /**
     * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, conformance statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
     */
    resource: (fhir.ImplementationGuidePackageResource | null)[] | null;
}
/**
 * A set of profiles that all resources covered by this implementation guide must conform to.
 */
export interface ImplementationGuideGlobal extends fhir.BackboneElement {
    /**
     * The type of resource that all instances must conform to.
     */
    type: 'Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.global.type
     */
    _type?: fhir.FhirElement;
    /**
     * A reference to the profile that all instances must conform to.
     */
    profile: fhir.Reference | null;
}
/**
 * A page / section in the implementation guide. The root page is the implementation guide home page.
 */
export interface ImplementationGuidePage extends fhir.BackboneElement {
    /**
     * The source address for the page.
     */
    source: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.source
     */
    _source?: fhir.FhirElement;
    /**
     * A short name used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.name
     */
    _name?: fhir.FhirElement;
    /**
     * The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.
     */
    kind: 'dictionary' | 'directory' | 'example' | 'include' | 'list' | 'page' | 'resource' | 'toc' | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * For constructed pages, what kind of resources to include in the list.
     */
    type?: (('Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.type
     */
    _type?: (fhir.FhirElement | null)[];
    /**
     * For constructed pages, a list of packages to include in the page (or else empty for everything).
     */
    package?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.package
     */
    _package?: (fhir.FhirElement | null)[];
    /**
     * The format of the page.
     */
    format?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.page.format
     */
    _format?: fhir.FhirElement;
    /**
     * Nested Pages/Sections under this page.
     */
    page?: (fhir.ImplementationGuidePage | null)[] | undefined;
}
/**
 * A set of rules or how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole, and to publish a computable definition of all the parts.
 */
export interface ImplementationGuide extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImplementationGuide" | null;
    /**
     * This is required to allow hosting Implementation Guides on multiple different servers, and to allow for the editorial process.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be multiple resource versions of the Implementation Guide that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.version
     */
    _version?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the Implementation Guide.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.name
     */
    _name?: fhir.FhirElement;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: ImplementationGuide.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of Implementation Guides that are appropriate for use vs. not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the implementation guide.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.ImplementationGuideContact | null)[] | undefined;
    /**
     * The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.date
     */
    _date?: fhir.FhirElement;
    /**
     * A free text natural language description of the Implementation Guide and its use.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate implementation guide.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
     */
    fhirVersion?: string | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
     */
    dependency?: (fhir.ImplementationGuideDependency | null)[] | undefined;
    /**
     * A logical group of resources. Logical groups can be used when building pages.
     */
    package: (fhir.ImplementationGuidePackage | null)[] | null;
    /**
     * A set of profiles that all resources covered by this implementation guide must conform to.
     */
    global?: (fhir.ImplementationGuideGlobal | null)[] | undefined;
    /**
     * A binary file that is included in the  implementation guide when it is published.
     */
    binary?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ImplementationGuide.binary
     */
    _binary?: (fhir.FhirElement | null)[];
    /**
     * A page / section in the implementation guide. The root page is the implementation guide home page.
     */
    page: fhir.ImplementationGuidePage | null;
}
//# sourceMappingURL=ImplementationGuide.d.ts.map