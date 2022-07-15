import * as fhir from '../fhirJson.js';
/**
 * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
 */
export interface CapabilityStatementSoftware extends fhir.BackboneElement {
    /**
     * Name software is known by.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.name
     */
    _name?: fhir.FhirElement;
    /**
     * If possible, a version should be specified, as statements are likely to be different for different versions of software.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.version
     */
    _version?: fhir.FhirElement;
    /**
     * Date this version of the software was released.
     */
    releaseDate?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.software.releaseDate
     */
    _releaseDate?: fhir.FhirElement;
}
/**
 * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
export interface CapabilityStatementImplementation extends fhir.BackboneElement {
    /**
     * Information about the specific installation that this capability statement relates to.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.description
     */
    _description?: fhir.FhirElement;
    /**
     * An absolute base URL for the implementation.  This forms the base for REST interfaces as well as the mailbox and document interfaces.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementation.url
     */
    _url?: fhir.FhirElement;
}
/**
 * Certificates associated with security profiles.
 */
export interface CapabilityStatementRestSecurityCertificate extends fhir.BackboneElement {
    /**
     * Mime type for a certificate.
     */
    type?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.certificate.type
     */
    _type?: fhir.FhirElement;
    /**
     * Actual certificate.
     */
    blob?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.certificate.blob
     */
    _blob?: fhir.FhirElement;
}
/**
 * Information about security implementation from an interface perspective - what a client needs to know.
 */
export interface CapabilityStatementRestSecurity extends fhir.BackboneElement {
    /**
     * The easiest CORS headers to add are Access-Control-Allow-Origin: * &amp; Access-Control-Request-Method: GET, POST, PUT, DELETE. All servers SHOULD support CORS.
     */
    cors?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.cors
     */
    _cors?: fhir.FhirElement;
    /**
     * Types of security services that are supported/required by the system.
     */
    service?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * General description of how security works.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.security.description
     */
    _description?: fhir.FhirElement;
    /**
     * Certificates associated with security profiles.
     */
    certificate?: (fhir.CapabilityStatementRestSecurityCertificate | null)[] | undefined;
}
/**
 * Identifies a restful operation supported by the solution.
 */
export interface CapabilityStatementRestResourceInteraction extends fhir.BackboneElement {
    /**
     * Coded identifier of the operation, supported by the system resource.
     */
    code: 'create' | 'delete' | 'history-instance' | 'history-type' | 'patch' | 'read' | 'search-type' | 'update' | 'vread' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.interaction.code
     */
    _code?: fhir.FhirElement;
    /**
     * Guidance specific to the implementation of this operation, such as 'delete is a logical delete' or 'updates are only allowed with version id' or 'creates permitted from pre-authorized certificates only'.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
 */
export interface CapabilityStatementRestResourceSearchParam extends fhir.BackboneElement {
    /**
     * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.name
     */
    _name?: fhir.FhirElement;
    /**
     * This SHOULD be present, and matches refers to a SearchParameter by its canonical url. If systems wish to document their support for modifiers, comparators, target resource types, and chained parameters, they should do using a search parameter resource.
     */
    definition?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.definition
     */
    _definition?: fhir.FhirElement;
    /**
     * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a query interface based on the server capability statement.  It SHALL be the same as the type in the search parameter definition.
     */
    type: 'composite' | 'date' | 'number' | 'quantity' | 'reference' | 'string' | 'token' | 'uri' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.type
     */
    _type?: fhir.FhirElement;
    /**
     * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchParam.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Max of one repetition per resource type.
 */
export interface CapabilityStatementRestResource extends fhir.BackboneElement {
    /**
     * A type of resource exposed via the restful interface.
     */
    type: 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.type
     */
    _type?: fhir.FhirElement;
    /**
     * The profile applies to all  resources of this type - i.e. it is the superset of what is supported by the system.
     */
    profile?: fhir.Reference | undefined;
    /**
     * Additional information about the resource type used by the system.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * Identifies a restful operation supported by the solution.
     */
    interaction: (fhir.CapabilityStatementRestResourceInteraction | null)[] | null;
    /**
     * If a server supports versionIds correctly, it SHOULD support vread too, but is not required to do so.
     */
    versioning?: 'no-version' | 'versioned' | 'versioned-update' | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.versioning
     */
    _versioning?: fhir.FhirElement;
    /**
     * It is useful to support the vRead operation for current operations, even if past versions aren't available.
     */
    readHistory?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.readHistory
     */
    _readHistory?: fhir.FhirElement;
    /**
     * Allowing the clients to create new identities on the server means that the system administrator needs to have confidence that the clients do not create clashing identities between them. Obviously, if there is only one client, this won't happen. While creating identities on the client means that the clients need to be managed, it's much more convenient for many scenarios if such management can be put in place.
     */
    updateCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.updateCreate
     */
    _updateCreate?: fhir.FhirElement;
    /**
     * Conditional Create is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalCreate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalCreate
     */
    _conditionalCreate?: fhir.FhirElement;
    /**
     * Conditional Read is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalRead?: 'full-support' | 'modified-since' | 'not-match' | 'not-supported' | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalRead
     */
    _conditionalRead?: fhir.FhirElement;
    /**
     * Conditional Update is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalUpdate?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalUpdate
     */
    _conditionalUpdate?: fhir.FhirElement;
    /**
     * Conditional Delete is mainly appropriate for interface engine scripts converting from other formats, such as v2.
     */
    conditionalDelete?: 'multiple' | 'not-supported' | 'single' | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.conditionalDelete
     */
    _conditionalDelete?: fhir.FhirElement;
    /**
     * A set of flags that defines how references are supported.
     */
    referencePolicy?: (('enforced' | 'literal' | 'local' | 'logical' | 'resolves') | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.referencePolicy
     */
    _referencePolicy?: (fhir.FhirElement | null)[];
    /**
     * If this list is empty, the server does not support includes.
     */
    searchInclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchInclude
     */
    _searchInclude?: (fhir.FhirElement | null)[];
    /**
     * If this list is empty, the server does not support reverse includes.
     */
    searchRevInclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.resource.searchRevInclude
     */
    _searchRevInclude?: (fhir.FhirElement | null)[];
    /**
     * Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation.
     */
    searchParam?: (fhir.CapabilityStatementRestResourceSearchParam | null)[] | undefined;
}
/**
 * A specification of restful operations supported by the system.
 */
export interface CapabilityStatementRestInteraction extends fhir.BackboneElement {
    /**
     * A coded identifier of the operation, supported by the system.
     */
    code: 'batch' | 'history-system' | 'search-system' | 'transaction' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.interaction.code
     */
    _code?: fhir.FhirElement;
    /**
     * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or information about system wide search is implemented.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.interaction.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Definition of an operation or a named query together with its parameters and their meaning and type.
 */
export interface CapabilityStatementRestOperation extends fhir.BackboneElement {
    /**
     * The name here SHOULD be the same as the name in the definition, unless there is a name clash and the name cannot be used. The name does not include the "$" portion that is always included in the URL.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.operation.name
     */
    _name?: fhir.FhirElement;
    /**
     * This can be used to build an HTML form to invoke the operation, for instance.
     */
    definition: fhir.Reference | null;
}
/**
 * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
 */
export interface CapabilityStatementRest extends fhir.BackboneElement {
    /**
     * Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations.
     */
    mode: 'client' | 'server' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Information about the system's restful capabilities that apply across all applications, such as security.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * Information about security implementation from an interface perspective - what a client needs to know.
     */
    security?: fhir.CapabilityStatementRestSecurity | undefined;
    /**
     * Max of one repetition per resource type.
     */
    resource?: (fhir.CapabilityStatementRestResource | null)[] | undefined;
    /**
     * A specification of restful operations supported by the system.
     */
    interaction?: (fhir.CapabilityStatementRestInteraction | null)[] | undefined;
    /**
     * Typically, the only search parameters supported for all searchse are those that apply to all resources - tags, profiles, text search etc.
     */
    searchParam?: (fhir.CapabilityStatementRestResourceSearchParam | null)[] | undefined;
    /**
     * Definition of an operation or a named query together with its parameters and their meaning and type.
     */
    operation?: (fhir.CapabilityStatementRestOperation | null)[] | undefined;
    /**
     * At present, the only defined compartments are at [CompartmentDefinition](compartmentdefinition.html).
     */
    compartment?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.rest.compartment
     */
    _compartment?: (fhir.FhirElement | null)[];
}
/**
 * An endpoint (network accessible address) to which messages and/or replies are to be sent.
 */
export interface CapabilityStatementMessagingEndpoint extends fhir.BackboneElement {
    /**
     * A list of the messaging transport protocol(s) identifiers, supported by this endpoint.
     */
    protocol: fhir.Coding | null;
    /**
     * The network address of the end-point. For solutions that do not use network addresses for routing, it can be just an identifier.
     */
    address: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.endpoint.address
     */
    _address?: fhir.FhirElement;
}
/**
 * This is a proposed alternative to the messaging.event structure.
 */
export interface CapabilityStatementMessagingSupportedMessage extends fhir.BackboneElement {
    /**
     * The mode of this event declaration - whether application is sender or receiver.
     */
    mode: 'receiver' | 'sender' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.supportedMessage.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * Points to a message definition that identifies the messaging event, message structure, allowed responses, etc.
     */
    definition: fhir.Reference | null;
}
/**
 * The same event may be listed up to two times - once as sender and once as receiver.
 */
export interface CapabilityStatementMessagingEvent extends fhir.BackboneElement {
    /**
     * A coded identifier of a supported messaging event.
     */
    code: fhir.Coding | null;
    /**
     * The impact of the content of the message.
     */
    category?: 'Consequence' | 'Currency' | 'Notification' | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.category
     */
    _category?: fhir.FhirElement;
    /**
     * The mode of this event declaration - whether an application is a sender or receiver.
     */
    mode: 'receiver' | 'sender' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * This SHALL be provided if the event type supports multiple different resource types.
     */
    focus: 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'Resource' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestReport' | 'TestScript' | 'ValueSet' | 'VisionPrescription' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.event.focus
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
     * Extended properties for primitive element: CapabilityStatement.messaging.event.documentation
     */
    _documentation?: fhir.FhirElement;
}
/**
 * Multiple repetitions allow the documentation of multiple endpoints per solution.
 */
export interface CapabilityStatementMessaging extends fhir.BackboneElement {
    /**
     * An endpoint (network accessible address) to which messages and/or replies are to be sent.
     */
    endpoint?: (fhir.CapabilityStatementMessagingEndpoint | null)[] | undefined;
    /**
     * If this value is missing then the application does not implement (receiver) or depend on (sender) reliable messaging.
     */
    reliableCache?: number | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.reliableCache
     */
    _reliableCache?: fhir.FhirElement;
    /**
     * Documentation about the system's messaging capabilities for this endpoint not otherwise documented by the capability statement.  For example, the process for becoming an authorized messaging exchange partner.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.messaging.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * This is a proposed alternative to the messaging.event structure.
     */
    supportedMessage?: (fhir.CapabilityStatementMessagingSupportedMessage | null)[] | undefined;
    /**
     * The same event may be listed up to two times - once as sender and once as receiver.
     */
    event?: (fhir.CapabilityStatementMessagingEvent | null)[] | undefined;
}
/**
 * A document definition.
 */
export interface CapabilityStatementDocument extends fhir.BackboneElement {
    /**
     * Mode of this document declaration - whether an application is a producer or consumer.
     */
    mode: 'consumer' | 'producer' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.mode
     */
    _mode?: fhir.FhirElement;
    /**
     * A description of how the application supports or uses the specified document profile.  For example, when documents are created, what action is taken with consumed documents, etc.
     */
    documentation?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.document.documentation
     */
    _documentation?: fhir.FhirElement;
    /**
     * The first resource is the document resource.
     */
    profile: fhir.Reference | null;
}
/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatement extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "CapabilityStatement" | null;
    /**
     * Can be a urn:uuid: or a urn:oid:, but real http: addresses are preferred.  Multiple instances may share the same url if they have a distinct version.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.url
     */
    _url?: fhir.FhirElement;
    /**
     * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a refrence to a particular business version of the capability statement with the format [url]|[version].
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.version
     */
    _version?: fhir.FhirElement;
    /**
     * The name is not expected to be globally unique. The name should be a simple alpha-numeric type name to ensure that it is computable friendly.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.name
     */
    _name?: fhir.FhirElement;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.title
     */
    _title?: fhir.FhirElement;
    /**
     * Allows filtering of capability statements that are appropriate for use vs. not.
     * This is labeled as "Is Modifier" because applications should not use a retired capability statement without due consideration. This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of capability statement that are appropriate for use vs. not. This is labeled as "Is Modifier" because applications should not use an experimental capability statement in production.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.date
     */
    _date?: fhir.FhirElement;
    /**
     * Usually an organization, but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: (fhir.ContactDetail | null)[] | undefined;
    /**
     * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the profile is presumed to be the predominant language in the place the profile was created). This does not need to be populated if the description is adequately implied by the software or implementation details.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.description
     */
    _description?: fhir.FhirElement;
    /**
     * When multiple useContexts are specified, there is no expectation whether all or any of the contexts apply.
     */
    useContext?: (fhir.UsageContext | null)[] | undefined;
    /**
     * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This element does not describe the usage of the capability statement Instead  it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
     */
    purpose?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.purpose
     */
    _purpose?: fhir.FhirElement;
    /**
     * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
     */
    kind: 'capability' | 'instance' | 'requirements' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * HL7 defines the following Services: [Terminology Service](terminology-service.html).
     * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
     */
    instantiates?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.instantiates
     */
    _instantiates?: (fhir.FhirElement | null)[];
    /**
     * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
     */
    software?: fhir.CapabilityStatementSoftware | undefined;
    /**
     * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
     */
    implementation?: fhir.CapabilityStatementImplementation | undefined;
    /**
     * The version of the FHIR specification on which this capability statement is based.
     */
    fhirVersion: string | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * Unknown elements in a resource can only arise as later versions of the specification are published, because this is the only place where such elements can be defined. Hence accepting unknown elements is about inter-version compatibility.
     * Applications are recommended to accept unknown extensions and elements ('both'), but this is not always possible.
     */
    acceptUnknown: 'both' | 'elements' | 'extensions' | 'no' | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.acceptUnknown
     */
    _acceptUnknown?: fhir.FhirElement;
    /**
     * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
     */
    format: (string | null)[] | null;
    /**
     * Extended properties for primitive element: CapabilityStatement.format
     */
    _format?: (fhir.FhirElement | null)[];
    /**
     * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
     */
    patchFormat?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.patchFormat
     */
    _patchFormat?: (fhir.FhirElement | null)[];
    /**
     * A list of implementation guides that the server does (or should) support in their entirety.
     */
    implementationGuide?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: CapabilityStatement.implementationGuide
     */
    _implementationGuide?: (fhir.FhirElement | null)[];
    /**
     * Supported profiles are different than the profiles that apply to a particular resource in rest.resource.profile. The resource profile is a general statement of what features of the resource are supported overall by the system - the sum total of the facilities it supports. A supported profile is a deeper statement about the functionality of the data and services provided by the server (or used by the client). A typical case is a laboratory system that produces a set of different reports - this is the list of types of data that it publishes. A key aspect of declaring profiles here is the question of how the client converts knowledge that the server publishes this data into working with the data; the client can inspect individual resources to determine whether they conform to a particular profile, but how does it find the ones that does? It does so by searching using the _profile parameter, so any resources listed here must be valid values for the _profile resource (using the identifier in the target profile).  Typically, supported profiles cross resource types to describe a network of related resources, so they are listed here rather than by resource. However, they do not need to describe more than one resource.
     */
    profile?: (fhir.Reference | null)[] | undefined;
    /**
     * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
     */
    rest?: (fhir.CapabilityStatementRest | null)[] | undefined;
    /**
     * Multiple repetitions allow the documentation of multiple endpoints per solution.
     */
    messaging?: (fhir.CapabilityStatementMessaging | null)[] | undefined;
    /**
     * A document definition.
     */
    document?: (fhir.CapabilityStatementDocument | null)[] | undefined;
}
//# sourceMappingURL=CapabilityStatement.d.ts.map