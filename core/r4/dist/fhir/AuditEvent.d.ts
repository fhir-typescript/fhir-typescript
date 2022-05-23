import * as fhir from '../fhir.js';
/**
 * Valid arguments for the AuditEventAgentNetwork type.
 */
export interface AuditEventAgentNetworkArgs extends fhir.BackboneElementArgs {
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: fhir.FhirString | string | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: fhir.FhirCode | string | undefined;
}
/**
 * Logical network location for application activity, if the activity has a network location.
 */
export declare class AuditEventAgentNetwork extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This could be a device id, IP address or some other identifier associated with a device.
     */
    address?: fhir.FhirString | undefined;
    /**
     * An identifier for the type of network access point that originated the audit event.
     */
    type?: fhir.FhirCode | undefined;
    /**
     * Default constructor for AuditEventAgentNetwork - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventAgentNetworkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (AuditEvent.agent.network.type)
     */
    static get typeRequiredCodes(): {
        readonly MachineName: "1";
        readonly IPAddress: "2";
        readonly TelephoneNumber: "3";
        readonly EmailAddress: "4";
        readonly URI: "5";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventAgent type.
 */
export interface AuditEventAgentArgs extends fhir.BackboneElementArgs {
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: fhir.FhirString | string | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: fhir.FhirBoolean | boolean | undefined;
    /**
     * Where the event occurred.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.CodingArgs | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventAgentNetworkArgs | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
 * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
 */
export declare class AuditEventAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Specification of the participation type the user plays when performing the event.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Should be roles relevant to the event. Should  not be an exhaustive list of roles.
     */
    role: fhir.CodeableConcept[];
    /**
     * Where a User ID is available it will go into who.identifier.
     */
    who?: fhir.Reference | undefined;
    /**
     * Alternative agent Identifier. For a human, this should be a user identifier text string from authentication system. This identifier would be one known to a common authentication system (e.g. single sign-on), if available.
     */
    altId?: fhir.FhirString | undefined;
    /**
     * Human-meaningful name for the agent.
     */
    name?: fhir.FhirString | undefined;
    /**
     * There can only be one initiator. If the initiator is not clear, then do not choose any one agent as the initiator.
     */
    requestor: fhir.FhirBoolean | null;
    /**
     * Where the event occurred.
     */
    location?: fhir.Reference | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy: fhir.FhirUri[];
    /**
     * Type of media involved. Used when the event is about exporting/importing onto media.
     */
    media?: fhir.Coding | undefined;
    /**
     * Logical network location for application activity, if the activity has a network location.
     */
    network?: fhir.AuditEventAgentNetwork | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfUse: fhir.CodeableConcept[];
    /**
     * Default constructor for AuditEventAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (AuditEvent.agent.type)
     */
    static get typeExtensibleCodings(): {
        readonly CitizenRoleType: fhir.Coding;
        readonly Application: fhir.Coding;
        readonly ApplicationLauncher: fhir.Coding;
        readonly DestinationRoleID: fhir.Coding;
        readonly SourceRoleID: fhir.Coding;
        readonly DestinationMedia: fhir.Coding;
        readonly SourceMedia: fhir.Coding;
        readonly Affiliate: fhir.Coding;
        readonly Agent: fhir.Coding;
        readonly Amender: fhir.Coding;
        readonly AssignedEntity: fhir.Coding;
        readonly CaregiverInformationReceiver: fhir.Coding;
        readonly LegitimateRelationshipInformationReceiver: fhir.Coding;
        readonly AuthorOriginator: fhir.Coding;
        readonly AuthorizationServer: fhir.Coding;
        readonly CareTeamInformationReceiver: fhir.Coding;
        readonly WorkAreaInformationReceiver: fhir.Coding;
        readonly AsylumSeeker: fhir.Coding;
        readonly SingleMinorAsylumSeeker: fhir.Coding;
        readonly Claimant: fhir.Coding;
        readonly Classifier: fhir.Coding;
        readonly National: fhir.Coding;
        readonly NonCountryMemberWithoutResidencePermit: fhir.Coding;
        readonly NonCountryMemberMinorWithoutResidencePermit: fhir.Coding;
        readonly CoAuthor: fhir.Coding;
        readonly Consenter: fhir.Coding;
        readonly ConsentWitness: fhir.Coding;
        readonly Contact: fhir.Coding;
        readonly CoParticipant: fhir.Coding;
        readonly CoveredParty: fhir.Coding;
        readonly PermitCardApplicant: fhir.Coding;
        readonly NonCountryMemberWithResidencePermit: fhir.Coding;
        readonly NonCountryMemberMinorWithResidencePermit: fhir.Coding;
        readonly Custodian: fhir.Coding;
        readonly DataCollector: fhir.Coding;
        readonly DataProcessor: fhir.Coding;
        readonly DataSubject: fhir.Coding;
        readonly Declassifier: fhir.Coding;
        readonly Delegatee: fhir.Coding;
        readonly Delegator: fhir.Coding;
        readonly Dependent: fhir.Coding;
        readonly Downgrader: fhir.Coding;
        readonly DurablePowerOfAttorney: fhir.Coding;
        readonly EmergencyContact: fhir.Coding;
        readonly Employee: fhir.Coding;
        readonly EventWitness: fhir.Coding;
        readonly ExecutorOfEstate: fhir.Coding;
        readonly Grantee: fhir.Coding;
        readonly Grantor: fhir.Coding;
        readonly Guarantor: fhir.Coding;
        readonly GuardianAdLidem: fhir.Coding;
        readonly Guardian: fhir.Coding;
        readonly HealthcarePowerOfAttorney: fhir.Coding;
        readonly HumanUser: fhir.Coding;
        readonly Informant: fhir.Coding;
        readonly Interpreter: fhir.Coding;
        readonly InvestigationSubject: fhir.Coding;
        readonly InformationRecipient: fhir.Coding;
        readonly LegalAuthenticator: fhir.Coding;
        readonly NamedInsured: fhir.Coding;
        readonly NextOfKin: fhir.Coding;
        readonly NotaryPublic: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PowerOfAttorney: fhir.Coding;
        readonly PrimaryAuthor: fhir.Coding;
        readonly AuthorizedProviderMaskingAuthor: fhir.Coding;
        readonly HealthcareProvider: fhir.Coding;
        readonly ResponsibleParty: fhir.Coding;
        readonly Reviewer: fhir.Coding;
        readonly Source: fhir.Coding;
        readonly SpecialPowerOfAttorney: fhir.Coding;
        readonly Transcriber: fhir.Coding;
        readonly Tracker: fhir.Coding;
        readonly Validator: fhir.Coding;
        readonly Verifier: fhir.Coding;
        readonly Witness: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for media (AuditEvent.agent.media)
     */
    static get mediaExtensibleCodings(): {
        readonly Film: fhir.Coding;
        readonly USBDiskEmulation: fhir.Coding;
        readonly Email: fhir.Coding;
        readonly CD: fhir.Coding;
        readonly DVD: fhir.Coding;
        readonly CompactFlash: fhir.Coding;
        readonly MultiMediaCard: fhir.Coding;
        readonly SecureDigitalCard: fhir.Coding;
        readonly URI: fhir.Coding;
        readonly PaperDocument: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for purposeOfUse (AuditEvent.agent.purposeOfUse)
     */
    static get purposeOfUseExtensibleCodings(): {
        readonly BiomedicalResearch: fhir.Coding;
        readonly BreakTheGlass: fhir.Coding;
        readonly CareManagement: fhir.Coding;
        readonly ClinicalTrialResearch: fhir.Coding;
        readonly ClinicalTrialResearchWithoutPatientCare: fhir.Coding;
        readonly ClinicalTrialResearchWithPatientCare: fhir.Coding;
        readonly ClinicalTrial: fhir.Coding;
        readonly ClaimAttachment: fhir.Coding;
        readonly CoordinationOfCare: fhir.Coding;
        readonly CoverageAuthorization: fhir.Coding;
        readonly CoverageUnderPolicyOrProgram: fhir.Coding;
        readonly Disaster: fhir.Coding;
        readonly Donation: fhir.Coding;
        readonly DiseaseSpecificHealthcareResearch: fhir.Coding;
        readonly EligibilityDetermination: fhir.Coding;
        readonly EligibilityVerification: fhir.Coding;
        readonly Enrollment: fhir.Coding;
        readonly EmergencyRoomTreatment: fhir.Coding;
        readonly EmergencyTreatment: fhir.Coding;
        readonly FamilyRequested: fhir.Coding;
        readonly Fraud: fhir.Coding;
        readonly Government: fhir.Coding;
        readonly HealthAccreditation: fhir.Coding;
        readonly HealthCompliance: fhir.Coding;
        readonly Decedent: fhir.Coding;
        readonly Directory: fhir.Coding;
        readonly HealthcareDeliveryManagement: fhir.Coding;
        readonly Legal: fhir.Coding;
        readonly HealthcareMarketing: fhir.Coding;
        readonly HealthcareOperations: fhir.Coding;
        readonly HealthOutcomeMeasure: fhir.Coding;
        readonly HealthcarePayment: fhir.Coding;
        /**
         * Default constructor for AuditEventEntityDetail - initializes any required elements to null if a value is not provided.
         */
        readonly HealthProgramReporting: fhir.Coding;
        readonly HealthQualityImprovement: fhir.Coding;
        readonly HealthcareResearch: fhir.Coding;
        readonly HealthSystemAdministration: fhir.Coding;
        readonly TestHealthData: fhir.Coding;
        readonly Labeling: fhir.Coding;
        readonly MemberAdministration: fhir.Coding;
        readonly MetadataManagement: fhir.Coding;
        readonly MilitaryCommand: fhir.Coding;
        readonly MilitaryDischarge: fhir.Coding;
        readonly PatientAdministration: fhir.Coding;
        readonly PatientRequested: fhir.Coding;
        readonly PatientSafety: fhir.Coding;
        readonly PerformanceMeasure: fhir.Coding;
        readonly PopulationOriginsOrAncestryHealthcareResearch: fhir.Coding;
        readonly PopulationHealth: fhir.Coding;
        readonly PreclinicalTrialResearch: fhir.Coding;
        readonly PublicHealth: fhir.Coding;
        readonly PurposeOfUse: fhir.Coding;
        readonly PowerOfAttorney: fhir.Coding;
        readonly RecordsManagement: fhir.Coding;
        readonly RemittanceAdvice: fhir.Coding;
        readonly SupportNetwork: fhir.Coding;
        /**
         * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
         */
        readonly SystemDevelopment: fhir.Coding;
        readonly Threat: fhir.Coding;
        readonly Training: fhir.Coding;
        readonly TranslationalHealthcareResearch: fhir.Coding;
        readonly Treatment: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventSource type.
 */
export interface AuditEventSourceArgs extends fhir.BackboneElementArgs {
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: fhir.FhirString | string | undefined;
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhir.ReferenceArgs | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type?: fhir.CodingArgs[] | undefined;
}
/**
 * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
 */
export declare class AuditEventSource extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Logical source location within the healthcare enterprise network.  For example, a hospital or other provider location within a multi-entity provider group.
     */
    site?: fhir.FhirString | undefined;
    /**
     * Identifier of the source where the event was detected.
     */
    observer: fhir.Reference | null;
    /**
     * Code specifying the type of source where event originated.
     */
    type: fhir.Coding[];
    /**
     * Default constructor for AuditEventSource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventSourceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (AuditEvent.source.type)
     */
    static get typeExtensibleCodings(): {
        readonly UserDevice: fhir.Coding;
        readonly DataInterface: fhir.Coding;
        readonly WebServer: fhir.Coding;
        readonly ApplicationServer: fhir.Coding;
        readonly DatabaseServer: fhir.Coding;
        readonly SecurityServer: fhir.Coding;
        readonly NetworkDevice: fhir.Coding;
        readonly NetworkRouter: fhir.Coding;
        readonly Other: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventEntityDetail type.
 */
export interface AuditEventEntityDetailArgs extends fhir.BackboneElementArgs {
    /**
     * The type of extra detail provided in the value.
     */
    type: fhir.FhirString | string | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    value?: fhir.FhirString | fhir.FhirBase64Binary | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
}
/**
 * Tagged value pairs for conveying additional information about the entity.
 */
export declare class AuditEventEntityDetail extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of extra detail provided in the value.
     */
    type: fhir.FhirString | null;
    /**
     * The value can be string when known to be a string, else base64 encoding should be used to protect binary or undefined content.  The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    value: (fhir.FhirString | fhir.FhirBase64Binary) | null;
    /**
     * Internal flag to properly serialize choice-type element AuditEvent.entity.detail.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for AuditEventEntityDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventEntityDetailArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEventEntity type.
 */
export interface AuditEventEntityArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhir.ReferenceArgs | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.CodingArgs | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.CodingArgs | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.CodingArgs | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail?: fhir.AuditEventEntityDetailArgs[] | undefined;
}
/**
 * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
 */
export declare class AuditEventEntity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies a specific instance of the entity. The reference should be version specific.
     */
    what?: fhir.Reference | undefined;
    /**
     * This value is distinct from the user's role or any user relationship to the entity.
     */
    type?: fhir.Coding | undefined;
    /**
     * Code representing the role the entity played in the event being audited.
     */
    role?: fhir.Coding | undefined;
    /**
     * This can be used to provide an audit trail for data, over time, as it passes through the system.
     */
    lifecycle?: fhir.Coding | undefined;
    /**
     * Copied from entity meta security tags.
     */
    securityLabel: fhir.Coding[];
    /**
     * This field may be used in a query/report to identify audit events for a specific person.  For example, where multiple synonymous entity identifiers (patient number, medical record number, encounter number, etc.) have been used.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Text that describes the entity in more detail.
     */
    description?: fhir.FhirString | undefined;
    /**
     * The meaning and secondary-encoding of the content of base64 encoded blob is specific to the AuditEvent.type, AuditEvent.subtype, AuditEvent.entity.type, and AuditEvent.entity.role.  The base64 is a general-use and safe container for event specific data blobs regardless of the encoding used by the transaction being recorded.  An AuditEvent consuming application must understand the event it is consuming and the formats used by the event. For example, if auditing an Oracle network database access, the Oracle formats must be understood as they will be simply encoded in the base64binary blob.
     */
    query?: fhir.FhirBase64Binary | undefined;
    /**
     * Tagged value pairs for conveying additional information about the entity.
     */
    detail: fhir.AuditEventEntityDetail[];
    /**
     * Default constructor for AuditEventEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (AuditEvent.entity.type)
     */
    static get typeExtensibleCodings(): {
        readonly Person: fhir.Coding;
        readonly SystemObject: fhir.Coding;
        readonly Organization: fhir.Coding;
        readonly Other: fhir.Coding;
        readonly Account: fhir.Coding;
        readonly ActivityDefinition: fhir.Coding;
        readonly AdverseEvent: fhir.Coding;
        readonly AllergyIntolerance: fhir.Coding;
        readonly Appointment: fhir.Coding;
        readonly AppointmentResponse: fhir.Coding;
        readonly AuditEvent: fhir.Coding;
        readonly Basic: fhir.Coding;
        readonly Binary: fhir.Coding;
        readonly BiologicallyDerivedProduct: fhir.Coding;
        readonly BodyStructure: fhir.Coding;
        readonly Bundle: fhir.Coding; /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly CapabilityStatement: fhir.Coding;
        readonly CarePlan: fhir.Coding;
        readonly CareTeam: fhir.Coding;
        readonly CatalogEntry: fhir.Coding;
        readonly ChargeItem: fhir.Coding; /**
         * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
         */
        readonly ChargeItemDefinition: fhir.Coding;
        readonly Claim: fhir.Coding;
        readonly ClaimResponse: fhir.Coding;
        readonly ClinicalImpression: fhir.Coding;
        readonly CodeSystem: fhir.Coding; /**
         * Human-meaningful name for the agent.
         */
        readonly Communication: fhir.Coding;
        readonly CommunicationRequest: fhir.Coding;
        readonly CompartmentDefinition: fhir.Coding;
        readonly Composition: fhir.Coding;
        readonly ConceptMap: fhir.Coding;
        readonly Condition: fhir.Coding;
        readonly Consent: fhir.Coding;
        readonly Contract: fhir.Coding;
        readonly Coverage: fhir.Coding;
        readonly CoverageEligibilityRequest: fhir.Coding;
        readonly CoverageEligibilityResponse: fhir.Coding;
        readonly DetectedIssue: fhir.Coding;
        readonly Device: fhir.Coding;
        readonly DeviceDefinition: fhir.Coding;
        readonly DeviceMetric: fhir.Coding;
        readonly DeviceRequest: fhir.Coding;
        readonly DeviceUseStatement: fhir.Coding;
        readonly DiagnosticReport: fhir.Coding;
        readonly DocumentManifest: fhir.Coding;
        readonly DocumentReference: fhir.Coding;
        readonly DomainResource: fhir.Coding;
        readonly EffectEvidenceSynthesis: fhir.Coding;
        readonly Encounter: fhir.Coding;
        readonly Endpoint: fhir.Coding;
        readonly EnrollmentRequest: fhir.Coding;
        readonly EnrollmentResponse: fhir.Coding;
        readonly EpisodeOfCare: fhir.Coding;
        readonly EventDefinition: fhir.Coding;
        readonly Evidence: fhir.Coding;
        readonly EvidenceVariable: fhir.Coding;
        readonly ExampleScenario: fhir.Coding;
        readonly ExplanationOfBenefit: fhir.Coding;
        readonly FamilyMemberHistory: fhir.Coding;
        readonly Flag: fhir.Coding;
        readonly Goal: fhir.Coding;
        readonly GraphDefinition: fhir.Coding;
        readonly Group: fhir.Coding;
        readonly GuidanceResponse: fhir.Coding;
        readonly HealthcareService: fhir.Coding;
        readonly ImagingStudy: fhir.Coding;
        readonly Immunization: fhir.Coding;
        readonly ImmunizationEvaluation: fhir.Coding;
        readonly ImmunizationRecommendation: fhir.Coding;
        readonly ImplementationGuide: fhir.Coding;
        readonly InsurancePlan: fhir.Coding;
        readonly Invoice: fhir.Coding; /**
         * Text that describes the entity in more detail.
         */
        readonly Library: fhir.Coding;
        readonly Linkage: fhir.Coding;
        readonly List: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Measure: fhir.Coding;
        readonly MeasureReport: fhir.Coding;
        readonly Media: fhir.Coding;
        readonly Medication: fhir.Coding;
        readonly MedicationAdministration: fhir.Coding;
        readonly MedicationDispense: fhir.Coding;
        readonly MedicationKnowledge: fhir.Coding;
        readonly MedicationRequest: fhir.Coding;
        readonly MedicationStatement: fhir.Coding;
        readonly MedicinalProduct: fhir.Coding;
        readonly MedicinalProductAuthorization: fhir.Coding;
        readonly MedicinalProductContraindication: fhir.Coding;
        readonly MedicinalProductIndication: fhir.Coding;
        readonly MedicinalProductIngredient: fhir.Coding;
        readonly MedicinalProductInteraction: fhir.Coding;
        readonly MedicinalProductManufactured: fhir.Coding;
        readonly MedicinalProductPackaged: fhir.Coding;
        readonly MedicinalProductPharmaceutical: fhir.Coding;
        readonly MedicinalProductUndesirableEffect: fhir.Coding;
        readonly MessageDefinition: fhir.Coding;
        readonly MessageHeader: fhir.Coding;
        readonly MolecularSequence: fhir.Coding;
        readonly NamingSystem: fhir.Coding;
        readonly NutritionOrder: fhir.Coding;
        readonly Observation: fhir.Coding;
        readonly ObservationDefinition: fhir.Coding;
        readonly OperationDefinition: fhir.Coding;
        readonly OperationOutcome: fhir.Coding;
        readonly OrganizationOrganization: fhir.Coding;
        readonly OrganizationAffiliation: fhir.Coding;
        readonly Parameters: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PaymentNotice: fhir.Coding;
        readonly PaymentReconciliation: fhir.Coding;
        readonly PersonPerson: fhir.Coding;
        readonly PlanDefinition: fhir.Coding;
        readonly Practitioner: fhir.Coding;
        readonly PractitionerRole: fhir.Coding;
        readonly Procedure: fhir.Coding;
        readonly Provenance: fhir.Coding;
        readonly Questionnaire: fhir.Coding;
        readonly QuestionnaireResponse: fhir.Coding;
        readonly RelatedPerson: fhir.Coding;
        readonly RequestGroup: fhir.Coding;
        readonly ResearchDefinition: fhir.Coding;
        readonly ResearchElementDefinition: fhir.Coding;
        readonly ResearchStudy: fhir.Coding;
        readonly ResearchSubject: fhir.Coding;
        readonly Resource: fhir.Coding;
        readonly RiskAssessment: fhir.Coding;
        readonly RiskEvidenceSynthesis: fhir.Coding;
        readonly Schedule: fhir.Coding;
        readonly SearchParameter: fhir.Coding;
        readonly ServiceRequest: fhir.Coding;
        readonly Slot: fhir.Coding;
        readonly Specimen: fhir.Coding;
        readonly SpecimenDefinition: fhir.Coding;
        readonly StructureDefinition: fhir.Coding;
        readonly StructureMap: fhir.Coding;
        readonly Subscription: fhir.Coding;
        readonly Substance: fhir.Coding;
        readonly SubstanceNucleicAcid: fhir.Coding;
        readonly SubstancePolymer: fhir.Coding;
        readonly SubstanceProtein: fhir.Coding;
        readonly SubstanceReferenceInformation: fhir.Coding;
        readonly SubstanceSourceMaterial: fhir.Coding;
        readonly SubstanceSpecification: fhir.Coding;
        readonly SupplyDelivery: fhir.Coding;
        readonly SupplyRequest: fhir.Coding;
        readonly Task: fhir.Coding;
        readonly TerminologyCapabilities: fhir.Coding;
        readonly TestReport: fhir.Coding;
        readonly TestScript: fhir.Coding;
        readonly ValueSet: fhir.Coding;
        readonly VerificationResult: fhir.Coding;
        readonly VisionPrescription: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for role (AuditEvent.entity.role)
     */
    static get roleExtensibleCodings(): {
        readonly Patient: fhir.Coding;
        readonly Guarantor: fhir.Coding;
        readonly SecurityUserEntity: fhir.Coding;
        readonly SecurityUserGroup: fhir.Coding;
        readonly SecurityResource: fhir.Coding;
        readonly SecurityGranularityDefinition: fhir.Coding;
        readonly Practitioner: fhir.Coding;
        readonly DataDestination: fhir.Coding;
        readonly DataRepository: fhir.Coding;
        readonly Schedule: fhir.Coding;
        readonly Customer: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Job: fhir.Coding;
        readonly JobStream: fhir.Coding;
        readonly Table: fhir.Coding;
        readonly RoutingCriteria: fhir.Coding;
        readonly Query: fhir.Coding;
        readonly Report: fhir.Coding;
        readonly DomainResource: fhir.Coding;
        readonly MasterFile: fhir.Coding;
        readonly User: fhir.Coding;
        readonly List: fhir.Coding;
        readonly Doctor: fhir.Coding;
        readonly Subscriber: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for securityLabel (AuditEvent.entity.securityLabel)
     */
    static get securityLabelExtensibleCodings(): {
        readonly Abstracted: fhir.Coding;
        readonly AccessControlScheme: fhir.Coding;
        readonly AccountableCareOrganizationCompartment: fhir.Coding;
        readonly AdolescentInformationSensitivity: fhir.Coding;
        readonly Aggregated: fhir.Coding;
        readonly Anonymize: fhir.Coding;
        readonly Anonymized: fhir.Coding;
        readonly AccountingOfDisclosure: fhir.Coding;
        readonly Audit: fhir.Coding;
        readonly AuditTrail: fhir.Coding;
        readonly AuthorizationPolicy: fhir.Coding;
        readonly BusinessInformationSensitivity: fhir.Coding;
        readonly BehavioralHealthInformationSensitivity: fhir.Coding;
        readonly BiomedicalResearch: fhir.Coding;
        readonly BreakTheGlass: fhir.Coding;
        readonly CareManagement: fhir.Coding;
        readonly CelebrityInformationSensitivity: fhir.Coding;
        readonly ClinicianAsserted: fhir.Coding;
        readonly ClinicianReported: fhir.Coding;
        readonly ClinicalTrialResearch: fhir.Coding;
        readonly ClinicalTrialResearchWithoutPatientCare: fhir.Coding;
        readonly ClinicalTrialResearchWithPatientCare: fhir.Coding;
        readonly ClinicalTrial: fhir.Coding;
        readonly ClaimAttachment: fhir.Coding;
        readonly CoordinationOfCare: fhir.Coding;
        readonly CognitiveDisabilityInformationSensitivity: fhir.Coding;
        readonly Compartment: fhir.Coding;
        readonly CoverageAuthorization: fhir.Coding;
        readonly CoverageUnderPolicyOrProgram: fhir.Coding;
        readonly ComplyWithConfidentialityCode: fhir.Coding;
        readonly ComplyWithConsentDirective: fhir.Coding;
        readonly ComplyWithJurisdictionalPrivacyPolicy: fhir.Coding;
        readonly ComplyWithOrganizationalPrivacyPolicy: fhir.Coding;
        readonly ComplyWithOrganizationalSecurityPolicy: fhir.Coding;
        readonly ComplyWithPolicy: fhir.Coding;
        readonly CryptographicHashFunction: fhir.Coding;
        readonly CareTeamCompartment: fhir.Coding;
        readonly DeclassifySecurityLabel: fhir.Coding;
        readonly Deidentify: fhir.Coding;
        readonly DeleteAfterUse: fhir.Coding;
        readonly DelegationPolicy: fhir.Coding;
        readonly AllDemographicInformationSensitivity: fhir.Coding;
        readonly DeviceAsserted: fhir.Coding;
        readonly DeviceReported: fhir.Coding;
        readonly DiagnosisInformationSensitivity: fhir.Coding;
        readonly DigitalSignature: fhir.Coding;
        readonly Disaster: fhir.Coding;
        readonly DateOfBirthInformationSensitivity: fhir.Coding;
        readonly Donation: fhir.Coding;
        readonly DowngradeSecurityLabel: fhir.Coding;
        readonly DrugInformationSensitivity: fhir.Coding;
        readonly DeriveSecurityLabel: fhir.Coding;
        readonly DiseaseSpecificHealthcareResearch: fhir.Coding;
        readonly DevelopmentalDisabilityInformationSensitivity: fhir.Coding;
        readonly EligibilityDetermination: fhir.Coding;
        readonly EligibilityVerification: fhir.Coding;
        readonly EmotionalDisturbanceInformationSensitivity: fhir.Coding;
        readonly EmployeeInformationSensitivity: fhir.Coding;
        readonly EmployerInformationSensitivity: fhir.Coding;
        readonly Encrypt: fhir.Coding;
        readonly EncryptAtRest: fhir.Coding;
        readonly EncryptInTransit: fhir.Coding;
        readonly EncryptInUse: fhir.Coding;
        readonly Enrollment: fhir.Coding;
        readonly EmergencyRoomTreatment: fhir.Coding;
        readonly SubstanceAbuseInformationSensitivity: fhir.Coding;
        readonly AlcoholUseDisorderInformationSensitivity: fhir.Coding;
        readonly EmergencyTreatment: fhir.Coding;
        readonly FamilyRequested: fhir.Coding;
        readonly FinancialManagementCompartment: fhir.Coding;
        readonly Fraud: fhir.Coding;
        readonly GeneticDiseaseInformationSensitivity: fhir.Coding;
        readonly GenderAndSexualOrientationInformationSensitivity: fhir.Coding;
        readonly Government: fhir.Coding;
        readonly HealthAccreditation: fhir.Coding;
        readonly HealthCompliance: fhir.Coding;
        readonly HealthcareProfessionalAsserted: fhir.Coding;
        readonly HealthcareProfessionalReported: fhir.Coding;
        readonly Decedent: fhir.Coding;
        readonly Directory: fhir.Coding;
        readonly HealthcareDeliveryManagement: fhir.Coding;
        readonly HIVAIDSInformationSensitivity: fhir.Coding;
        readonly Legal: fhir.Coding;
        readonly HealthcareMarketing: fhir.Coding;
        readonly HealthcareOperations: fhir.Coding;
        readonly HealthOutcomeMeasure: fhir.Coding;
        readonly HealthcarePayment: fhir.Coding;
        readonly HealthProgramReporting: fhir.Coding;
        readonly HealthQualityImprovement: fhir.Coding;
        readonly HumanResourceCompartment: fhir.Coding;
        readonly HighlyReliable: fhir.Coding;
        readonly HealthcareResearch: fhir.Coding;
        readonly HealthSystemAdministration: fhir.Coding;
        readonly TestHealthData: fhir.Coding;
        readonly HumanApproval: fhir.Coding;
        readonly Low: fhir.Coding;
        readonly AssignSecurityLabel: fhir.Coding;
        readonly Labeling: fhir.Coding;
        readonly LivingArrangementInformationSensitivity: fhir.Coding;
        readonly LocationInformationSensitivity: fhir.Coding;
        readonly LegitimateRelationshipCompartment: fhir.Coding;
        readonly Moderate: fhir.Coding;
        readonly Mapped: fhir.Coding;
        readonly MaritalStatusInformationSensitivity: fhir.Coding;
        readonly Mask: fhir.Coding;
        readonly Masked: fhir.Coding;
        readonly MemberAdministration: fhir.Coding;
        readonly MetadataManagement: fhir.Coding;
        readonly MentalHealthInformationSensitivity: fhir.Coding;
        readonly MilitaryCommand: fhir.Coding;
        readonly MilitaryDischarge: fhir.Coding;
        readonly MinimumNecessary: fhir.Coding;
        readonly MilitarySexualTraumaInformationSensitivity: fhir.Coding;
        readonly Normal: fhir.Coding;
        readonly NoDisclosureWithoutSubjectAuthorization: fhir.Coding;
        readonly NoCollection: fhir.Coding;
        readonly NoDisclosureWithoutConsentDirective: fhir.Coding;
        readonly NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: fhir.Coding;
        readonly NoIntegration: fhir.Coding;
        readonly NoUnlistedEntityDisclosure: fhir.Coding;
        readonly NoDisclosureWithoutMOU: fhir.Coding;
        readonly NoDisclosureWithoutOrganizationalAuthorization: fhir.Coding;
        readonly NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: fhir.Coding;
        readonly NoCollectionBeyondPurposeOfUse: fhir.Coding;
        readonly NoRedisclosureWithoutConsentDirective: fhir.Coding;
        readonly NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: fhir.Coding;
        readonly NoDisclosureWithoutJurisdictionalAuthorization: fhir.Coding;
        readonly NoRelinking: fhir.Coding;
        readonly NoReuseBeyondPurposeOfUse: fhir.Coding;
        readonly NoUnauthorizedVIPDisclosure: fhir.Coding;
        readonly ObligationPolicy: fhir.Coding;
        readonly OpioidUseDisorderInformationSensitivity: fhir.Coding;
        readonly NoDisclosureWithoutOriginatorAuthorization: fhir.Coding;
        readonly PatientAdministrationCompartment: fhir.Coding;
        readonly PatientAcquaintanceAsserted: fhir.Coding;
        readonly PatientAcquaintanceReported: fhir.Coding;
        readonly PatientAdministration: fhir.Coding;
        readonly PatientAsserted: fhir.Coding;
        readonly PatientReported: fhir.Coding;
        readonly PatientRequested: fhir.Coding;
        readonly PatientSafety: fhir.Coding;
        readonly PayerAsserted: fhir.Coding;
        readonly PayerReported: fhir.Coding;
        readonly PatientDefaultInformationSensitivity: fhir.Coding;
        readonly PerformanceMeasure: fhir.Coding;
        readonly PersistSecurityLabel: fhir.Coding;
        readonly PhysicianRequestedInformationSensitivity: fhir.Coding;
        readonly PopulationOriginsOrAncestryHealthcareResearch: fhir.Coding;
        readonly PopulationHealth: fhir.Coding;
        readonly PreclinicalTrialResearch: fhir.Coding;
        readonly PrivacyMark: fhir.Coding;
        readonly ProfessionalAsserted: fhir.Coding;
        readonly ProfessionalReported: fhir.Coding;
        readonly PatientRequestedInformationSensitivity: fhir.Coding;
        readonly Pseudonymize: fhir.Coding;
        readonly Pseudonymized: fhir.Coding;
        readonly PsychiatryDisorderInformationSensitivity: fhir.Coding;
        readonly PsychotherapyNoteInformationSensitivity: fhir.Coding;
        readonly PublicHealth: fhir.Coding;
        readonly PurposeOfUse: fhir.Coding;
        readonly PowerOfAttorney: fhir.Coding;
        readonly Restricted: fhir.Coding;
        readonly RaceInformationSensitivity: fhir.Coding;
        readonly RecordsManagement: fhir.Coding;
        readonly Redact: fhir.Coding;
        readonly Redacted: fhir.Coding;
        readonly RefrainPolicy: fhir.Coding;
        readonly ReligionInformationSensitivity: fhir.Coding;
        readonly Reliable: fhir.Coding;
        readonly RemittanceAdvice: fhir.Coding;
        readonly ResearchProjectCompartment: fhir.Coding;
        readonly RecordsManagementCompartment: fhir.Coding;
        readonly SickleCellAnemiaInformationSensitivity: fhir.Coding;
        readonly SubstituteDecisionMakerAsserted: fhir.Coding;
        readonly SubstituteDecisionMakerReported: fhir.Coding;
        readonly SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: fhir.Coding;
        readonly SecurityPolicy: fhir.Coding;
        readonly SexualityAndReproductiveHealthInformationSensitivity: fhir.Coding;
        readonly SickleCell: fhir.Coding;
        readonly SpeciallyProtectedInformationSensitivity: fhir.Coding;
        readonly SensitiveServiceProviderInformationSensitivity: fhir.Coding;
        readonly SexuallyTransmittedDiseaseInformationSensitivity: fhir.Coding;
        readonly Subsetted: fhir.Coding;
        readonly SubstanceUseDisorderInformationSensitivity: fhir.Coding;
        readonly SupportNetwork: fhir.Coding;
        readonly SyntacticTransform: fhir.Coding;
        readonly SystemDevelopment: fhir.Coding;
        readonly Taboo: fhir.Coding;
        readonly Threat: fhir.Coding;
        readonly Training: fhir.Coding;
        readonly TranslationalHealthcareResearch: fhir.Coding;
        readonly Treatment: fhir.Coding;
        readonly Translated: fhir.Coding;
        readonly Unrestricted: fhir.Coding;
        readonly UncertainReliability: fhir.Coding;
        readonly Unreliable: fhir.Coding;
        readonly UpgradeSecurityLabel: fhir.Coding;
        readonly VeryRestricted: fhir.Coding;
        readonly Versioned: fhir.Coding;
        readonly ViolenceInformationSensitivity: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AuditEvent type.
 */
export interface AuditEventArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent" | undefined;
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.CodingArgs | null;
    /**
     * Identifier for the category of event.
     */
    subtype?: fhir.CodingArgs[] | undefined;
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: fhir.FhirCode | string | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: fhir.FhirInstant | string | undefined;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: fhir.FhirCode | string | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | string | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhir.AuditEventAgentArgs[] | null;
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.AuditEventSourceArgs | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity?: fhir.AuditEventEntityArgs[] | undefined;
}
/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.
 */
export declare class AuditEvent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AuditEvent";
    /**
     * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
     */
    type: fhir.Coding | null;
    /**
     * Identifier for the category of event.
     */
    subtype: fhir.Coding[];
    /**
     * Indicator for type of action performed during the event that generated the audit.
     */
    action?: fhir.FhirCode | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    period?: fhir.Period | undefined;
    /**
     * In a distributed system, some sort of common time base (e.g. an NTP [RFC1305] server) is a good implementation tactic.
     */
    recorded: fhir.FhirInstant | null;
    /**
     * In some cases a "success" may be partial, for example, an incomplete or interrupted transfer of a radiological study. For the purpose of establishing accountability, these distinctions are not relevant.
     */
    outcome?: fhir.FhirCode | undefined;
    /**
     * A free text description of the outcome of the event.
     */
    outcomeDesc?: fhir.FhirString | undefined;
    /**
     * Use AuditEvent.agent.purposeOfUse when you know that it is specific to the agent, otherwise use AuditEvent.purposeOfEvent. For example, during a machine-to-machine transfer it might not be obvious to the audit system who caused the event, but it does know why.
     */
    purposeOfEvent: fhir.CodeableConcept[];
    /**
     * Several agents may be associated (i.e. have some responsibility for an activity) with an event or activity.
     * For example, an activity may be initiated by one user for other users or involve more than one user. However, only one user may be the initiator/requestor for the activity.
     */
    agent: fhir.AuditEventAgent[];
    /**
     * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
     */
    source: fhir.AuditEventSource | null;
    /**
     * Required unless the values for event identification, agent identification, and audit source identification are sufficient to document the entire auditable event. Because events may have more than one entity, this group can be a repeating set of values.
     */
    entity: fhir.AuditEventEntity[];
    /**
     * Default constructor for AuditEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AuditEventArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (AuditEvent.type)
     */
    static get typeExtensibleCodings(): {
        readonly ApplicationActivity: fhir.Coding;
        readonly AuditLogUsed: fhir.Coding;
        readonly BeginTransferringDICOMInstances: fhir.Coding;
        readonly DICOMInstancesAccessed: fhir.Coding;
        readonly DICOMInstancesTransferred: fhir.Coding;
        readonly DICOMStudyDeleted: fhir.Coding;
        readonly Export: fhir.Coding;
        readonly Import: fhir.Coding;
        readonly NetworkEntry: fhir.Coding;
        readonly OrderRecord: fhir.Coding;
        readonly PatientRecord: fhir.Coding;
        readonly ProcedureRecord: fhir.Coding;
        readonly Query: fhir.Coding;
        readonly SecurityAlert: fhir.Coding;
        readonly UserAuthentication: fhir.Coding;
        readonly AccessViewRecordLifecycleEvent: fhir.Coding;
        readonly AmendUpdateRecordLifecycleEvent: fhir.Coding;
        readonly ArchiveRecordLifecycleEvent: fhir.Coding;
        readonly AttestRecordLifecycleEvent: fhir.Coding;
        readonly DecryptRecordLifecycleEvent: fhir.Coding;
        readonly DeIdentifyAnononymizeRecordLifecycleEvent: fhir.Coding;
        readonly DeprecateRecordLifecycleEvent: fhir.Coding;
        readonly DestroyDeleteRecordLifecycleEvent: fhir.Coding;
        readonly DiscloseRecordLifecycleEvent: fhir.Coding;
        readonly EncryptRecordLifecycleEvent: fhir.Coding;
        readonly ExtractRecordLifecycleEvent: fhir.Coding;
        readonly AddLegalHoldRecordLifecycleEvent: fhir.Coding;
        readonly LinkRecordLifecycleEvent: fhir.Coding;
        readonly MergeRecordLifecycleEvent: fhir.Coding;
        readonly OriginateRetainRecordLifecycleEvent: fhir.Coding;
        readonly PseudonymizeRecordLifecycleEvent: fhir.Coding;
        readonly ReActivateRecordLifecycleEvent: fhir.Coding;
        readonly ReceiveRetainRecordLifecycleEvent: fhir.Coding;
        readonly ReIdentifyRecordLifecycleEvent: fhir.Coding;
        readonly ReportOutputRecordLifecycleEvent: fhir.Coding;
        readonly RESTfulOperation: fhir.Coding;
        readonly RestoreRecordLifecycleEvent: fhir.Coding;
        readonly TransformTranslateRecordLifecycleEvent: fhir.Coding;
        readonly TransmitRecordLifecycleEvent: fhir.Coding;
        readonly RemoveLegalHoldRecordLifecycleEvent: fhir.Coding;
        readonly UnlinkRecordLifecycleEvent: fhir.Coding;
        readonly UnmergeRecordLifecycleEvent: fhir.Coding;
        readonly VerifyRecordLifecycleEvent: fhir.Coding; /**
         * Code specifying the type of source where event originated.
         */
    };
    /**
     * Extensible-bound Value Set for subtype (AuditEvent.subtype)
     */
    static get subtypeExtensibleCodings(): {
        readonly ApplicationStart: fhir.Coding;
        readonly ApplicationStop: fhir.Coding;
        readonly Login: fhir.Coding;
        readonly Logout: fhir.Coding;
        readonly Attach: fhir.Coding;
        readonly Detach: fhir.Coding;
        readonly NodeAuthentication: fhir.Coding;
        readonly EmergencyOverrideStarted: fhir.Coding;
        readonly NetworkConfiguration: fhir.Coding;
        readonly SecurityConfiguration: fhir.Coding;
        readonly HardwareConfiguration: fhir.Coding;
        readonly SoftwareConfiguration: fhir.Coding;
        readonly UseOfRestrictedFunction: fhir.Coding;
        readonly AuditRecordingStopped: fhir.Coding;
        readonly AuditRecordingStarted: fhir.Coding;
        readonly ObjectSecurityAttributesChanged: fhir.Coding;
        readonly SecurityRolesChanged: fhir.Coding;
        readonly UserSecurityAttributesChanged: fhir.Coding;
        readonly EmergencyOverrideStopped: fhir.Coding;
        readonly RemoteServiceOperationStarted: fhir.Coding;
        readonly RemoteServiceOperationStopped: fhir.Coding;
        readonly LocalServiceOperationStarted: fhir.Coding;
        readonly LocalServiceOperationStopped: fhir.Coding;
        readonly Batch: fhir.Coding;
        readonly Capabilities: fhir.Coding;
        readonly Create: fhir.Coding;
        readonly Delete: fhir.Coding;
        readonly History: fhir.Coding;
        readonly HistoryInstance: fhir.Coding;
        readonly HistorySystem: fhir.Coding;
        readonly HistoryType: fhir.Coding;
        readonly Operation: fhir.Coding;
        readonly Patch: fhir.Coding;
        readonly Read: fhir.Coding;
        readonly Search: fhir.Coding;
        readonly SearchSystem: fhir.Coding;
        readonly SearchType: fhir.Coding;
        readonly Transaction: fhir.Coding;
        readonly Update: fhir.Coding;
        readonly Vread: fhir.Coding;
    };
    /**
     * Required-bound Value Set for action (AuditEvent.action)
     */
    static get actionRequiredCodes(): {
        readonly Create: "C";
        readonly Delete: "D";
        readonly Execute: "E";
        readonly ReadViewPrint: "R";
        readonly Update: "U";
    };
    /**
     * Required-bound Value Set for outcome (AuditEvent.outcome)
     */
    static get outcomeRequiredCodes(): {
        readonly Success: "0";
        readonly MajorFailure: "12";
        readonly MinorFailure: "4";
        readonly SeriousFailure: "8";
    };
    /**
     * Extensible-bound Value Set for purposeOfEvent (AuditEvent.purposeOfEvent)
     */
    static get purposeOfEventExtensibleCodings(): {
        readonly BiomedicalResearch: fhir.Coding;
        readonly BreakTheGlass: fhir.Coding;
        readonly CareManagement: fhir.Coding;
        readonly ClinicalTrialResearch: fhir.Coding;
        readonly ClinicalTrialResearchWithoutPatientCare: fhir.Coding;
        readonly ClinicalTrialResearchWithPatientCare: fhir.Coding;
        readonly ClinicalTrial: fhir.Coding;
        readonly ClaimAttachment: fhir.Coding;
        readonly CoordinationOfCare: fhir.Coding;
        readonly CoverageAuthorization: fhir.Coding;
        readonly CoverageUnderPolicyOrProgram: fhir.Coding;
        readonly Disaster: fhir.Coding;
        readonly Donation: fhir.Coding;
        readonly DiseaseSpecificHealthcareResearch: fhir.Coding;
        readonly EligibilityDetermination: fhir.Coding;
        readonly EligibilityVerification: fhir.Coding;
        readonly Enrollment: fhir.Coding;
        readonly EmergencyRoomTreatment: fhir.Coding;
        readonly EmergencyTreatment: fhir.Coding;
        readonly FamilyRequested: fhir.Coding;
        readonly Fraud: fhir.Coding;
        readonly Government: fhir.Coding;
        readonly HealthAccreditation: fhir.Coding;
        readonly HealthCompliance: fhir.Coding;
        readonly Decedent: fhir.Coding;
        readonly Directory: fhir.Coding;
        readonly HealthcareDeliveryManagement: fhir.Coding;
        readonly Legal: fhir.Coding;
        readonly HealthcareMarketing: fhir.Coding;
        readonly HealthcareOperations: fhir.Coding;
        readonly HealthOutcomeMeasure: fhir.Coding;
        readonly HealthcarePayment: fhir.Coding;
        /**
         * Default constructor for AuditEventEntityDetail - initializes any required elements to null if a value is not provided.
         */
        readonly HealthProgramReporting: fhir.Coding;
        readonly HealthQualityImprovement: fhir.Coding;
        readonly HealthcareResearch: fhir.Coding;
        readonly HealthSystemAdministration: fhir.Coding;
        readonly TestHealthData: fhir.Coding;
        readonly Labeling: fhir.Coding;
        readonly MemberAdministration: fhir.Coding;
        readonly MetadataManagement: fhir.Coding;
        readonly MilitaryCommand: fhir.Coding;
        readonly MilitaryDischarge: fhir.Coding;
        readonly PatientAdministration: fhir.Coding;
        readonly PatientRequested: fhir.Coding;
        readonly PatientSafety: fhir.Coding;
        readonly PerformanceMeasure: fhir.Coding;
        readonly PopulationOriginsOrAncestryHealthcareResearch: fhir.Coding;
        readonly PopulationHealth: fhir.Coding;
        readonly PreclinicalTrialResearch: fhir.Coding;
        readonly PublicHealth: fhir.Coding;
        readonly PurposeOfUse: fhir.Coding;
        readonly PowerOfAttorney: fhir.Coding;
        readonly RecordsManagement: fhir.Coding;
        readonly RemittanceAdvice: fhir.Coding;
        readonly SupportNetwork: fhir.Coding;
        /**
         * Since multi-tier, distributed, or composite applications make source identification ambiguous, this collection of fields may repeat for each application or process actively involved in the event. For example, multiple value-sets can identify participating web servers, application processes, and database server threads in an n-tier distributed application. Passive event participants (e.g. low-level network transports) need not be identified.
         */
        readonly SystemDevelopment: fhir.Coding;
        readonly Threat: fhir.Coding;
        readonly Training: fhir.Coding;
        readonly TranslationalHealthcareResearch: fhir.Coding;
        readonly Treatment: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=AuditEvent.d.ts.map