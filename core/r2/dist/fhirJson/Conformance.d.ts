import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface ConformanceContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the conformance.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface ConformanceSoftware extends fhir.BackboneElement {
    /**
     * Name software is known by.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Conformance.software.name
     */
    _name?: fhir.FhirElement;
    /**
     * The version identifier for the software covered by this statement.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.software.version
     */
    _version?: fhir.FhirElement;
    /**
     * Date this version of the software released.
     */
    releaseDate?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.software.releaseDate
     */
    _releaseDate?: fhir.FhirElement;
}
/**
 * Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface ConformanceImplementation extends fhir.BackboneElement {
    /**
     * Information about the specific installation that this conformance statement relates to.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: Conformance.implementation.description
     */
    _description?: fhir.FhirElement;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.implementation.url
     */
    _url?: fhir.FhirElement;
}
/**
 * Certificates associated with security profiles.
 */
export interface ConformanceRestSecurityCertificate extends fhir.BackboneElement {
    /**
     * Mime type for certificate.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.certificate.type
     */
    _type?: fhir.FhirElement;
    /**
     * Actual certificate.
     */
    blob?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.certificate.blob
     */
    _blob?: fhir.FhirElement;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export interface ConformanceRestSecurity extends fhir.BackboneElement {
    /**
     * Server adds CORS headers when responding to requests - this enables javascript applications to use the server.
     */
    cors?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.cors
     */
    _cors?: fhir.FhirElement;
    /**
     * Types of security services are supported/required by the system.
     */
    service?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * General description of how security works.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.security.description
     */
    _description?: fhir.FhirElement;
    /**
     * Certificates associated with security profiles.
     */
    certificate?: (fhir.ConformanceRestSecurityCertificate | null)[] | undefined;
}
/**
 * Identifies a restful operation supported by the solution.
 */
export interface ConformanceRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: 'create' | 'delete' | 'history-instance' | 'history-type' | 'read' | 'search-type' | 'update' | 'validate' | 'vread' | null;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.interaction.code
     */
    _code?: fhir.FhirElement;
    /**
     * REST allows a degree of variability in the implementation of RESTful solutions that is useful for exchange partners to be aware of.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
 */
export interface ConformanceRestResourceSearchParam extends fhir.BackboneElement {
    /**
     * The name of the search parameter used in the interface.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.name
     */
    _name?: fhir.FhirElement;
    /**
     * An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * The type of value a search parameter refers to, and how the content is interpreted.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'string' | 'token' | 'uri' | null;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.type
     */
    _type?: fhir.FhirElement;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * Types of resource (if a resource is referenced).
     */
    target?: (('Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.target
     */
    _target?: (fhir.FhirElement | null)[];
    /**
     * A modifier supported for the search parameter.
     */
    modifier?: (('above' | 'below' | 'contains' | 'exact' | 'in' | 'missing' | 'not' | 'not-in' | 'text' | 'type') | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.modifier
     */
    _modifier?: (fhir.FhirElement | null)[];
    /**
     * Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.
     */
    chain?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchParam.chain
     */
    _chain?: (fhir.FhirElement | null)[];
}
/**
 * A specification of the restful capabilities of the solution for a specific resource type.
 */
export interface ConformanceRestResource extends fhir.BackboneElement {
    /**
     * A type of resource exposed via the restful interface.
     */
    type: 'Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.type
     */
    _type?: fhir.FhirElement;
    /**
     * A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: (fhir.ConformanceRestResourceInteraction | null)[] | null;
    /**
     * This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API.
     */
    versioning?: 'no-version' | 'versioned' | 'versioned-update' | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.versioning
     */
    _versioning?: fhir.FhirElement;
    /**
     * A flag for whether the server is able to return past versions as part of the vRead operation.
     */
    readHistory?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.readHistory
     */
    _readHistory?: fhir.FhirElement;
    /**
     * A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server.
     */
    updateCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.updateCreate
     */
    _updateCreate?: fhir.FhirElement;
    /**
     * A flag that indicates that the server supports conditional create.
     */
    conditionalCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalCreate
     */
    _conditionalCreate?: fhir.FhirElement;
    /**
     * A flag that indicates that the server supports conditional update.
     */
    conditionalUpdate?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalUpdate
     */
    _conditionalUpdate?: fhir.FhirElement;
    /**
     * A code that indicates how the server supports conditional delete.
     */
    conditionalDelete?: 'multiple' | 'not-supported' | 'single' | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.conditionalDelete
     */
    _conditionalDelete?: fhir.FhirElement;
    /**
     * A list of _include values supported by the server.
     */
    searchInclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchInclude
     */
    _searchInclude?: (fhir.FhirElement | null)[];
    /**
     * A list of _revinclude (reverse include) values supported by the server.
     */
    searchRevInclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.resource.searchRevInclude
     */
    _searchRevInclude?: (fhir.FhirElement | null)[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: (fhir.ConformanceRestResourceSearchParam | null)[] | undefined;
}
/**
 * A specification of restful operations supported by the system.
 */
export interface ConformanceRestInteraction extends fhir.BackboneElement {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: 'history-system' | 'search-system' | 'transaction' | null;
    /**
     * Extended properties for primitive element: Conformance.rest.interaction.code
     */
    _code?: fhir.FhirElement;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Definition of an operation or a named query and with its parameters and their meaning and type.
 */
export interface ConformanceRestOperation extends fhir.BackboneElement {
    /**
     * The name of a query, which is used in the _query parameter when the query is called.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: Conformance.rest.operation.name
     */
    _name?: fhir.FhirElement;
    /**
     * Where the formal definition can be found.
     */
    definition: fhir.Reference | null;
}
/**
 * A definition of the restful capabilities of the solution, if any.
 */
export interface ConformanceRest extends fhir.BackboneElement {
    /**
     * Identifies whether this portion of the statement is describing ability to initiate or receive restful operations.
     */
    mode: 'client' | 'server' | null;
    /**
     * Extended properties for primitive element: Conformance.rest.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.ConformanceRestSecurity | undefined;
    /**
     * A specification of the restful capabilities of the solution for a specific resource type.
     */
    resource: (fhir.ConformanceRestResource | null)[] | null;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: (fhir.ConformanceRestInteraction | null)[] | undefined;
    /**
     * A code that indicates how transactions are supported.
     */
    transactionMode?: 'batch' | 'both' | 'not-supported' | 'transaction' | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.transactionMode
     */
    _transactionMode?: fhir.FhirElement;
    /**
     * Search parameters that are supported for searching all resources for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: (fhir.ConformanceRestResourceSearchParam | null)[] | undefined;
    /**
     * Definition of an operation or a named query and with its parameters and their meaning and type.
     */
    operation?: (fhir.ConformanceRestOperation | null)[] | undefined;
    /**
     * An absolute URI which is a reference to the definition of a compartment hosted by the system.
     */
    compartment?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Conformance.rest.compartment
     */
    _compartment?: (fhir.FhirElement | null)[];
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export interface ConformanceMessagingEndpoint extends fhir.BackboneElement {
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.Coding | null;
    /**
     * The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: string | null;
    /**
     * Extended properties for primitive element: Conformance.messaging.endpoint.address
     */
    _address?: fhir.FhirElement;
}
/**
 * A description of the solution's support for an event at this end-point.
 */
export interface ConformanceMessagingEvent extends fhir.BackboneElement {
    /**
     * A coded identifier of a supported messaging event.
     */
    code: fhir.Coding | null;
    /**
     * The impact of the content of the message.
     */
    category?: 'Consequence' | 'Currency' | 'Notification' | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.category
     */
    _category?: fhir.FhirElement;
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: 'receiver' | 'sender' | null;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * A resource associated with the event.  This is the resource that defines the event.
     */
    focus: 'Account' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'List' | 'Location' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.focus
     */
    _focus?: fhir.FhirElement;
    /**
     * Information about the request for this event.
     */
    request: fhir.Reference | null;
    /**
     * Information about the response for this event.
     */
    response: fhir.Reference | null;
    /**
     * Guidance on how this event is handled, such as internal system trigger points, business rules, etc.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.event.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * A description of the messaging capabilities of the solution.
 */
export interface ConformanceMessaging extends fhir.BackboneElement {
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: (fhir.ConformanceMessagingEndpoint | null)[] | undefined;
    /**
     * Length if the receiver's reliable messaging cache in minutes (if a receiver) or how long the cache length on the receiver should be (if a sender).
     */
    reliableCache?: number | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.reliableCache
     */
    _reliableCache?: fhir.FhirElement;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the conformance statement.  For example, process for becoming an authorized messaging exchange partner.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.messaging.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * A description of the solution's support for an event at this end-point.
     */
    event: (fhir.ConformanceMessagingEvent | null)[] | null;
}
/**
 * A document definition.
 */
export interface ConformanceDocument extends fhir.BackboneElement {
    /**
     * Mode of this document declaration - whether application is producer or consumer.
     */
    mode: 'consumer' | 'producer' | null;
    /**
     * Extended properties for primitive element: Conformance.document.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when are documents created, what action is taken with consumed documents, etc.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.document.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * A constraint on a resource used in the document.
     */
    profile: fhir.Reference | null;
}
/**
 * A conformance statement is a set of capabilities of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface Conformance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Conformance" | null;
    /**
     * An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.url
     */
    _url?: fhir.FhirElement;
    /**
     * The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.version
     */
    _version?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the conformance statement.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.name
     */
    _name?: fhir.FhirElement;
    /**
     * The status of this conformance statement.
     */
    status?: 'active' | 'draft' | 'retired' | undefined;
    /**
     * Extended properties for primitive element: Conformance.status
     */
    _status?: fhir.FhirElement;
    /**
     * A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: Conformance.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the conformance.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.ConformanceContact | null)[] | undefined;
    /**
     * The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: Conformance.date
     */
    _date?: fhir.FhirElement;
    /**
     * A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.description
     */
    _description?: fhir.FhirElement;
    /**
     * Explains why this conformance statement is needed and why it's been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: Conformance.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Allow searching the 3 modes.
     */
    kind: 'capability' | 'instance' | 'requirements' | null;
    /**
     * Extended properties for primitive element: Conformance.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.ConformanceSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.ConformanceImplementation | undefined;
    /**
     * The version of the FHIR specification on which this conformance statement is based.
     */
    fhirVersion: string | null;
    /**
     * Extended properties for primitive element: Conformance.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * A code that indicates whether the application accepts unknown elements or extensions when reading resources.
     */
    acceptUnknown: 'both' | 'elements' | 'extensions' | 'no' | null;
    /**
     * Extended properties for primitive element: Conformance.acceptUnknown
     */
    _acceptUnknown?: fhir.FhirElement;
    /**
     * A list of the formats supported by this implementation using their content types.
     */
    format: (string | null)[] | null;
    /**
     * Extended properties for primitive element: Conformance.format
     */
    _format?: (fhir.FhirElement | null)[];
    /**
     * A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
     */
    profile?: (fhir.Reference | null)[] | undefined;
    /**
     * A definition of the restful capabilities of the solution, if any.
     */
    rest?: (fhir.ConformanceRest | null)[] | undefined;
    /**
     * A description of the messaging capabilities of the solution.
     */
    messaging?: (fhir.ConformanceMessaging | null)[] | undefined;
    /**
     * A document definition.
     */
    document?: (fhir.ConformanceDocument | null)[] | undefined;
}
//# sourceMappingURL=Conformance.d.ts.map