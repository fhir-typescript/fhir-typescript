// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImplementationGuide

import * as fhir from '../fhirJson.js';


/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export interface ImplementationGuideDependency extends fhir.BackboneElement { 
  /**
   * For information about processing included guides, see [Including Guides]{implementationguide.html#include}.
   */
  type: 'inclusion'|'reference'|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.dependency.type
   */
  _type?:fhir.FhirElement;
  /**
   * When a guide is published, and the type is 'include', this will be a relative reference within the guide.
   */
  uri: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.dependency.uri
   */
  _uri?:fhir.FhirElement;
}

/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export interface ImplementationGuidePackageResource extends fhir.BackboneElement { 
  /**
   * Typically, conformance resources and knowledge resources are directly part of the implementation guide, with their normal meaning, and patient linked resources are usually examples. However this is not always true.
   */
  example: boolean|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.resource.example
   */
  _example?:fhir.FhirElement;
  /**
   * A human assigned name for the resource. All resources SHOULD have a name, but the name may be extracted from the resource (e.g. ValueSet.name).
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.resource.name
   */
  _name?:fhir.FhirElement;
  /**
   * This is mostly used with examples to explain why it is present (though they can have extensive comments in the examples).
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.resource.description
   */
  _description?:fhir.FhirElement;
  /**
   * This is used when generating schematrons from profiles, for example, but has other uses. Publishing tooling may autogenerate this value, but a human assigned value is more useful. This value must be unique within an implementation guide (across included guides as well).
   */
  acronym?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.resource.acronym
   */
  _acronym?:fhir.FhirElement;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  sourceUri?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.resource.source[x]
   */
  _sourceUri?:fhir.FhirElement;
  /**
   * Usually this is a relative URL that locates the resource within the implementation guide. If you authoring an implementation guide, and will publish it using the FHIR publication tooling, use a URI that may point to a resource, or to one of various alternative representations (e.g. spreadsheet). The tooling will convert this when it publishes it.
   */
  sourceReference?: fhir.Reference|undefined;
  /**
   * Examples:
   * * StructureDefinition -&gt; Any
   * * ValueSet -&gt; expansion
   * * OperationDefinition -&gt; Parameters
   * * Questionnaire -&gt; QuestionnaireResponse.
   */
  exampleFor?: fhir.Reference|undefined;
}

/**
 * A logical group of resources. Logical groups can be used when building pages.
 */
export interface ImplementationGuidePackage extends fhir.BackboneElement { 
  /**
   * The name for the group, as used in page.package.
   */
  name: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.name
   */
  _name?:fhir.FhirElement;
  /**
   * Human readable text describing the package.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.package.description
   */
  _description?:fhir.FhirElement;
  /**
   * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
   */
  resource: (fhir.ImplementationGuidePackageResource|null)[]|null;
}

/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export interface ImplementationGuideGlobal extends fhir.BackboneElement { 
  /**
   * The type must match that of the profile that is referred to, but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
   */
  type: 'Account'|'ActivityDefinition'|'AdverseEvent'|'AllergyIntolerance'|'Appointment'|'AppointmentResponse'|'AuditEvent'|'Basic'|'Binary'|'BodySite'|'Bundle'|'CapabilityStatement'|'CarePlan'|'CareTeam'|'ChargeItem'|'Claim'|'ClaimResponse'|'ClinicalImpression'|'CodeSystem'|'Communication'|'CommunicationRequest'|'CompartmentDefinition'|'Composition'|'ConceptMap'|'Condition'|'Consent'|'Contract'|'Coverage'|'DataElement'|'DetectedIssue'|'Device'|'DeviceComponent'|'DeviceMetric'|'DeviceRequest'|'DeviceUseStatement'|'DiagnosticReport'|'DocumentManifest'|'DocumentReference'|'DomainResource'|'EligibilityRequest'|'EligibilityResponse'|'Encounter'|'Endpoint'|'EnrollmentRequest'|'EnrollmentResponse'|'EpisodeOfCare'|'ExpansionProfile'|'ExplanationOfBenefit'|'FamilyMemberHistory'|'Flag'|'Goal'|'GraphDefinition'|'Group'|'GuidanceResponse'|'HealthcareService'|'ImagingManifest'|'ImagingStudy'|'Immunization'|'ImmunizationRecommendation'|'ImplementationGuide'|'Library'|'Linkage'|'List'|'Location'|'Measure'|'MeasureReport'|'Media'|'Medication'|'MedicationAdministration'|'MedicationDispense'|'MedicationRequest'|'MedicationStatement'|'MessageDefinition'|'MessageHeader'|'NamingSystem'|'NutritionOrder'|'Observation'|'OperationDefinition'|'OperationOutcome'|'Organization'|'Parameters'|'Patient'|'PaymentNotice'|'PaymentReconciliation'|'Person'|'PlanDefinition'|'Practitioner'|'PractitionerRole'|'Procedure'|'ProcedureRequest'|'ProcessRequest'|'ProcessResponse'|'Provenance'|'Questionnaire'|'QuestionnaireResponse'|'ReferralRequest'|'RelatedPerson'|'RequestGroup'|'ResearchStudy'|'ResearchSubject'|'Resource'|'RiskAssessment'|'Schedule'|'SearchParameter'|'Sequence'|'ServiceDefinition'|'Slot'|'Specimen'|'StructureDefinition'|'StructureMap'|'Subscription'|'Substance'|'SupplyDelivery'|'SupplyRequest'|'Task'|'TestReport'|'TestScript'|'ValueSet'|'VisionPrescription'|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.global.type
   */
  _type?:fhir.FhirElement;
  /**
   * A reference to the profile that all instances must conform to.
   */
  profile: fhir.Reference|null;
}

/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export interface ImplementationGuidePage extends fhir.BackboneElement { 
  /**
   * The publishing tool will autogenerate source for list (source = n/a), and inject included implementations for include (source = uri of guide to include).
   */
  source: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.source
   */
  _source?:fhir.FhirElement;
  /**
   * A short title used to represent this page in navigational structures such as table of contents, bread crumbs, etc.
   */
  title: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.title
   */
  _title?:fhir.FhirElement;
  /**
   * The kind of page that this is. Some pages are autogenerated (list, example), and other kinds are of interest so that tools can navigate the user to the page of interest.
   */
  kind: 'dictionary'|'directory'|'example'|'include'|'list'|'page'|'resource'|'toc'|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.kind
   */
  _kind?:fhir.FhirElement;
  /**
   * For constructed pages, what kind of resources to include in the list.
   */
  type?: (('Account'|'ActivityDefinition'|'AdverseEvent'|'AllergyIntolerance'|'Appointment'|'AppointmentResponse'|'AuditEvent'|'Basic'|'Binary'|'BodySite'|'Bundle'|'CapabilityStatement'|'CarePlan'|'CareTeam'|'ChargeItem'|'Claim'|'ClaimResponse'|'ClinicalImpression'|'CodeSystem'|'Communication'|'CommunicationRequest'|'CompartmentDefinition'|'Composition'|'ConceptMap'|'Condition'|'Consent'|'Contract'|'Coverage'|'DataElement'|'DetectedIssue'|'Device'|'DeviceComponent'|'DeviceMetric'|'DeviceRequest'|'DeviceUseStatement'|'DiagnosticReport'|'DocumentManifest'|'DocumentReference'|'DomainResource'|'EligibilityRequest'|'EligibilityResponse'|'Encounter'|'Endpoint'|'EnrollmentRequest'|'EnrollmentResponse'|'EpisodeOfCare'|'ExpansionProfile'|'ExplanationOfBenefit'|'FamilyMemberHistory'|'Flag'|'Goal'|'GraphDefinition'|'Group'|'GuidanceResponse'|'HealthcareService'|'ImagingManifest'|'ImagingStudy'|'Immunization'|'ImmunizationRecommendation'|'ImplementationGuide'|'Library'|'Linkage'|'List'|'Location'|'Measure'|'MeasureReport'|'Media'|'Medication'|'MedicationAdministration'|'MedicationDispense'|'MedicationRequest'|'MedicationStatement'|'MessageDefinition'|'MessageHeader'|'NamingSystem'|'NutritionOrder'|'Observation'|'OperationDefinition'|'OperationOutcome'|'Organization'|'Parameters'|'Patient'|'PaymentNotice'|'PaymentReconciliation'|'Person'|'PlanDefinition'|'Practitioner'|'PractitionerRole'|'Procedure'|'ProcedureRequest'|'ProcessRequest'|'ProcessResponse'|'Provenance'|'Questionnaire'|'QuestionnaireResponse'|'ReferralRequest'|'RelatedPerson'|'RequestGroup'|'ResearchStudy'|'ResearchSubject'|'Resource'|'RiskAssessment'|'Schedule'|'SearchParameter'|'Sequence'|'ServiceDefinition'|'Slot'|'Specimen'|'StructureDefinition'|'StructureMap'|'Subscription'|'Substance'|'SupplyDelivery'|'SupplyRequest'|'Task'|'TestReport'|'TestScript'|'ValueSet'|'VisionPrescription')|null)[]|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.type
   */
  _type?:(fhir.FhirElement|null)[];
  /**
   * For constructed pages, a list of packages to include in the page (or else empty for everything).
   */
  package?: (string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.package
   */
  _package?:(fhir.FhirElement|null)[];
  /**
   * This is primarily for the publishing tool, that will convert all pages to html format. HTML pages are pre-processed, see xxxx.
   */
  format?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.page.format
   */
  _format?:fhir.FhirElement;
  /**
   * The implementation guide breadcrumbs are generated from this structure.
   */
  page?: (fhir.ImplementationGuidePage|null)[]|undefined;
}

/**
 * A set of rules of how FHIR is used to solve a particular problem. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export interface ImplementationGuide extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "ImplementationGuide"|null;
  /**
   * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
   */
  url: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.url
   */
  _url?:fhir.FhirElement;
  /**
   * There may be different implementation guide instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the implementation guide with the format [url]|[version].
   */
  version?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.version
   */
  _version?:fhir.FhirElement;
  /**
   * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
   */
  name: string|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.name
   */
  _name?:fhir.FhirElement;
  /**
   * Allows filtering of implementation guides that are appropriate for use vs. not.  
   * This is labeled as "Is Modifier" because applications should not use a retired implementation guide without due consideration.
   */
  status: 'active'|'draft'|'retired'|'unknown'|null;
  /**
   * Extended properties for primitive element: ImplementationGuide.status
   */
  _status?:fhir.FhirElement;
  /**
   * Allows filtering of implementation guide that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental implementation guide in production.
   */
  experimental?: boolean|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.experimental
   */
  _experimental?:fhir.FhirElement;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the implementation guide. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.date
   */
  _date?:fhir.FhirElement;
  /**
   * Usually an organization, but may be an individual. The publisher (or steward) of the implementation guide is the organization or individual primarily responsible for the maintenance and upkeep of the implementation guide. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the implementation guide. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.publisher
   */
  _publisher?:fhir.FhirElement;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: (fhir.ContactDetail|null)[]|undefined;
  /**
   * This description can be used to capture details such as why the implementation guide was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the implementation guide as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created).
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.description
   */
  _description?:fhir.FhirElement;
  /**
   * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
   */
  useContext?: (fhir.UsageContext|null)[]|undefined;
  /**
   * It may be possible for the implementation guide to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide.
   */
  copyright?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.copyright
   */
  _copyright?:fhir.FhirElement;
  /**
   * An Implementation Guide should specify the target it applies to, as ImplementationGuides are rarely valid across multiple versions of FHIR.
   */
  fhirVersion?: string|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.fhirVersion
   */
  _fhirVersion?:fhir.FhirElement;
  /**
   * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
   */
  dependency?: (fhir.ImplementationGuideDependency|null)[]|undefined;
  /**
   * A logical group of resources. Logical groups can be used when building pages.
   */
  package?: (fhir.ImplementationGuidePackage|null)[]|undefined;
  /**
   * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
   */
  global?: (fhir.ImplementationGuideGlobal|null)[]|undefined;
  /**
   * This is principally included for the FHIR publishing tool, but may be useful when extracting and reusing content from the implementation guide.
   */
  binary?: (string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ImplementationGuide.binary
   */
  _binary?:(fhir.FhirElement|null)[];
  /**
   * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
   */
  page?: fhir.ImplementationGuidePage|undefined;
}
