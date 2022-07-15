import * as fhir from '../fhirJson.js';
/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export interface StructureDefinitionContact extends fhir.BackboneElement {
    /**
     * The name of an individual to contact regarding the structure definition.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contact.name
     */
    _name?: fhir.FhirElement;
    /**
     * Contact details for individual (if a name was provided) or the publisher.
     */
    telecom?: (fhir.ContactPoint | null)[] | undefined;
}
/**
 * An external specification that the content is mapped to.
 */
export interface StructureDefinitionMapping extends fhir.BackboneElement {
    /**
     * An Internal id that is used to identify this mapping set when specific mappings are made.
     */
    identity: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.identity
     */
    _identity?: fhir.FhirElement;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.uri
     */
    _uri?: fhir.FhirElement;
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.name
     */
    _name?: fhir.FhirElement;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
     */
    comments?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.mapping.comments
     */
    _comments?: fhir.FhirElement;
}
/**
 * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
 */
export interface StructureDefinitionSnapshot extends fhir.BackboneElement {
    /**
     * Captures constraints on each element within the resource.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export interface StructureDefinitionDifferential extends fhir.BackboneElement {
    /**
     * Captures constraints on each element within the resource.
     */
    element: (fhir.ElementDefinition | null)[] | null;
}
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
 */
export interface StructureDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "StructureDefinition" | null;
    /**
     * So you can say, in a StructureDefinition, what the full extension URLs should be. This is required to allow hosting StructureDefinitions on multiple different servers, and to allow for the editorial process.
     */
    url: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * There may be multiple resource versions of the StructureDefinition that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.version
     */
    _version?: fhir.FhirElement;
    /**
     * A free text natural language name identifying the StructureDefinition.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: StructureDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * Defined so that applications can use this name when displaying the value of the extension to the user.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.display
     */
    _display?: fhir.FhirElement;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    status: 'active' | 'draft' | 'retired' | null;
    /**
     * Extended properties for primitive element: StructureDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
     */
    experimental?: boolean | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.experimental
     */
    _experimental?: fhir.FhirElement;
    /**
     * Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
     */
    publisher?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.publisher
     */
    _publisher?: fhir.FhirElement;
    /**
     * Contacts to assist a user in finding and communicating with the publisher.
     */
    contact?: (fhir.StructureDefinitionContact | null)[] | undefined;
    /**
     * The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.date
     */
    _date?: fhir.FhirElement;
    /**
     * A free text natural language description of the StructureDefinition and its use.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate content.
     */
    useContext?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Explains why this structure definition is needed and why it's been constrained as it has.
     */
    requirements?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.requirements
     */
    _requirements?: fhir.FhirElement;
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
     */
    copyright?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.copyright
     */
    _copyright?: fhir.FhirElement;
    /**
     * Assist in searching for appropriate StructureDefinitions.
     */
    code?: (fhir.Coding | null)[] | undefined;
    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
     */
    fhirVersion?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.fhirVersion
     */
    _fhirVersion?: fhir.FhirElement;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: (fhir.StructureDefinitionMapping | null)[] | undefined;
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind: 'datatype' | 'logical' | 'resource' | null;
    /**
     * Extended properties for primitive element: StructureDefinition.kind
     */
    _kind?: fhir.FhirElement;
    /**
     * The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
     */
    constrainedType?: 'Account' | 'Address' | 'Age' | 'AllergyIntolerance' | 'Annotation' | 'Appointment' | 'AppointmentResponse' | 'Attachment' | 'AuditEvent' | 'BackboneElement' | 'base64Binary' | 'Basic' | 'Binary' | 'BodySite' | 'boolean' | 'Bundle' | 'CarePlan' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'code' | 'CodeableConcept' | 'Coding' | 'Communication' | 'CommunicationRequest' | 'Composition' | 'ConceptMap' | 'Condition' | 'Conformance' | 'ContactPoint' | 'Contract' | 'Count' | 'Coverage' | 'DataElement' | 'date' | 'dateTime' | 'decimal' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceUseRequest' | 'DeviceUseStatement' | 'DiagnosticOrder' | 'DiagnosticReport' | 'Distance' | 'DocumentManifest' | 'DocumentReference' | 'DomainResource' | 'Duration' | 'Element' | 'ElementDefinition' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExplanationOfBenefit' | 'Extension' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'Group' | 'HealthcareService' | 'HumanName' | 'id' | 'Identifier' | 'ImagingObjectSelection' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'instant' | 'integer' | 'List' | 'Location' | 'markdown' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationOrder' | 'MedicationStatement' | 'MessageHeader' | 'Meta' | 'Money' | 'NamingSystem' | 'Narrative' | 'NutritionOrder' | 'Observation' | 'oid' | 'OperationDefinition' | 'OperationOutcome' | 'Order' | 'OrderResponse' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Period' | 'Person' | 'positiveInt' | 'Practitioner' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Quantity' | 'Questionnaire' | 'QuestionnaireResponse' | 'Range' | 'Ratio' | 'Reference' | 'ReferralRequest' | 'RelatedPerson' | 'Resource' | 'RiskAssessment' | 'SampledData' | 'Schedule' | 'SearchParameter' | 'Signature' | 'SimpleQuantity' | 'Slot' | 'Specimen' | 'string' | 'StructureDefinition' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'TestScript' | 'time' | 'Timing' | 'unsignedInt' | 'uri' | 'uuid' | 'ValueSet' | 'VisionPrescription' | 'xhtml' | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.constrainedType
     */
    _constrainedType?: fhir.FhirElement;
    /**
     * Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
     */
    abstract: boolean | null;
    /**
     * Extended properties for primitive element: StructureDefinition.abstract
     */
    _abstract?: fhir.FhirElement;
    /**
     * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
     */
    contextType?: 'datatype' | 'extension' | 'mapping' | 'resource' | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.contextType
     */
    _contextType?: fhir.FhirElement;
    /**
     * Identifies the types of resource or data type elements to which the extension can be applied.
     */
    context?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.context
     */
    _context?: (fhir.FhirElement | null)[];
    /**
     * An absolute URI that is the base structure from which this set of constraints is derived.
     */
    base?: string | undefined;
    /**
     * Extended properties for primitive element: StructureDefinition.base
     */
    _base?: fhir.FhirElement;
    /**
     * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
     */
    snapshot?: fhir.StructureDefinitionSnapshot | undefined;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
     */
    differential?: fhir.StructureDefinitionDifferential | undefined;
}
//# sourceMappingURL=StructureDefinition.d.ts.map