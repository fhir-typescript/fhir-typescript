import * as fhir from '../fhir.js';
import { ProvenanceEntityRoleCodeType } from '../fhirValueSets/ProvenanceEntityRoleCodes.js';
/**
 * Valid arguments for the ProvenanceAgent type.
 */
export interface ProvenanceAgentArgs extends fhir.BackboneElementArgs {
    /**
     * For example: author, performer, enterer, attester, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * For example: doctor, nurse, clerk, etc.
     */
    role?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * whoIdentity should be used when the agent is not a Resource type.
     */
    who: fhir.ReferenceArgs | null;
    /**
     * onBehalfOfIdentity should be used when the agent is not a Resource type.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
 */
export declare class ProvenanceAgent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * For example: author, performer, enterer, attester, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * For example: doctor, nurse, clerk, etc.
     */
    role: fhir.CodeableConcept[];
    /**
     * whoIdentity should be used when the agent is not a Resource type.
     */
    who: fhir.Reference | null;
    /**
     * onBehalfOfIdentity should be used when the agent is not a Resource type.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for ProvenanceAgent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceAgentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for type (Provenance.agent.type)
     */
    static get typeExtensibleCodings(): {
        readonly Assembler: fhir.Coding;
        readonly Attester: fhir.Coding;
        readonly Author: fhir.Coding;
        readonly Composer: fhir.Coding;
        readonly Custodian: fhir.Coding;
        readonly Enterer: fhir.Coding;
        readonly Informant: fhir.Coding;
        readonly LegalAuthenticator: fhir.Coding;
        readonly Performer: fhir.Coding;
        readonly Verifier: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProvenanceEntity type.
 */
export interface ProvenanceEntityArgs extends fhir.BackboneElementArgs {
    /**
     * How the entity was used during the activity.
     */
    role: fhir.FhirCode<ProvenanceEntityRoleCodeType> | string | undefined;
    /**
     * whatIdentity should be used for entities that are not a Resource type.
     */
    what: fhir.ReferenceArgs | null;
    /**
     * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
     */
    agent?: fhir.ProvenanceAgentArgs[] | undefined;
}
/**
 * An entity used in this activity.
 */
export declare class ProvenanceEntity extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the entity was used during the activity.
     */
    role: fhir.FhirCode<ProvenanceEntityRoleCodeType> | null;
    /**
     * whatIdentity should be used for entities that are not a Resource type.
     */
    what: fhir.Reference | null;
    /**
     * A usecase where one Provenance.entity.agent is used where the Entity that was used in the creation/updating of the Target, is not in the context of the same custodianship as the Target, and thus the meaning of Provenance.entity.agent is to say that the entity referenced is managed elsewhere and that this Agent provided access to it.  This would be similar to where the Entity being referenced is managed outside FHIR, such as through HL7 v2, v3, or XDS. This might be where the Entity being referenced is managed in another FHIR resource server. Thus it explains the Provenance of that Entity's use in the context of this Provenance activity.
     */
    agent: fhir.ProvenanceAgent[];
    /**
     * Default constructor for ProvenanceEntity - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceEntityArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for role (Provenance.entity.role)
     */
    static get roleRequiredCodes(): {
        readonly Derivation: "derivation";
        readonly Quotation: "quotation";
        readonly Removal: "removal";
        readonly Revision: "revision";
        readonly Source: "source";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Provenance type.
 */
export interface ProvenanceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Provenance" | undefined;
    /**
     * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
     */
    target: fhir.ReferenceArgs[] | null;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurred?: fhir.Period | fhir.FhirDateTime | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurredPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurredDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
     */
    recorded: fhir.FhirInstant | string | undefined;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy?: fhir.FhirUri[] | string[] | undefined;
    /**
     * Where the activity occurred, if relevant.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * The reason that the activity was taking place.
     */
    reason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.CodeableConceptArgs | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     */
    agent: fhir.ProvenanceAgentArgs[] | null;
    /**
     * An entity used in this activity.
     */
    entity?: fhir.ProvenanceEntityArgs[] | undefined;
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature?: fhir.SignatureArgs[] | undefined;
}
/**
 * Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 */
export declare class Provenance extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Provenance";
    /**
     * Target references are usually version specific, but might not be, if a version has not been assigned or if the provenance information is part of the set of resources being maintained (i.e. a document). When using the RESTful API, the identity of the resource might not be known (especially not the version specific one); the client may either submit the resource first, and then the provenance, or it may submit both using a single transaction. See the notes on transaction for further discussion.
     */
    target: fhir.Reference[];
    /**
     * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
     */
    occurred?: (fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Provenance.occurred[x]
     */
    protected static readonly _fts_occurredIsChoice: true;
    /**
     * This can be a little different from the time stamp on the resource if there is a delay between recording the event and updating the provenance and target resource.
     */
    recorded: fhir.FhirInstant | null;
    /**
     * For example: Where an OAuth token authorizes, the unique identifier from the OAuth token is placed into the policy element Where a policy engine (e.g. XACML) holds policy logic, the unique policy identifier is placed into the policy element.
     */
    policy: fhir.FhirUri[];
    /**
     * Where the activity occurred, if relevant.
     */
    location?: fhir.Reference | undefined;
    /**
     * The reason that the activity was taking place.
     */
    reason: fhir.CodeableConcept[];
    /**
     * An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities.
     */
    activity?: fhir.CodeableConcept | undefined;
    /**
     * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
     */
    agent: fhir.ProvenanceAgent[];
    /**
     * An entity used in this activity.
     */
    entity: fhir.ProvenanceEntity[];
    /**
     * A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated.
     */
    signature: fhir.Signature[];
    /**
     * Default constructor for Provenance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProvenanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for reason (Provenance.reason)
     */
    static get reasonExtensibleCodings(): {
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
        readonly SystemDevelopment: fhir.Coding;
        readonly Threat: fhir.Coding;
        readonly Training: fhir.Coding;
        readonly TranslationalHealthcareResearch: fhir.Coding;
        readonly Treatment: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for activity (Provenance.activity)
     */
    static get activityExtensibleCodings(): {
        readonly ParticipationAncillary: fhir.Coding;
        readonly ParticipationInformationGenerator: fhir.Coding;
        readonly Admitter: fhir.Coding;
        readonly Analyte: fhir.Coding;
        readonly Anonymize: fhir.Coding;
        readonly Append: fhir.Coding;
        readonly Attender: fhir.Coding;
        readonly AuthorOriginator: fhir.Coding;
        readonly Authenticator: fhir.Coding;
        readonly Baby: fhir.Coding;
        readonly Beneficiary: fhir.Coding;
        readonly CausativeAgent: fhir.Coding;
        readonly CallbackContact: fhir.Coding;
        readonly Catalyst: fhir.Coding;
        readonly Consultant: fhir.Coding;
        readonly CoverageTarget: fhir.Coding;
        readonly Create: fhir.Coding;
        readonly Consumable: fhir.Coding;
        readonly Custodian: fhir.Coding; /**
         * The period can be a little arbitrary; where possible, the time should correspond to human assessment of the activity time.
         */
        readonly Deidentify: fhir.Coding;
        readonly Delete: fhir.Coding;
        readonly Device: fhir.Coding;
        readonly DirectTarget: fhir.Coding;
        readonly Discharger: fhir.Coding;
        readonly Distributor: fhir.Coding;
        readonly Donor: fhir.Coding;
        readonly Destination: fhir.Coding;
        readonly EntryLocation: fhir.Coding;
        readonly DataEntryPerson: fhir.Coding;
        readonly Escort: fhir.Coding;
        readonly ExposureAgent: fhir.Coding;
        readonly ExposureParticipation: fhir.Coding;
        readonly ExposureTarget: fhir.Coding;
        readonly ExposureSource: fhir.Coding;
        readonly GuarantorParty: fhir.Coding;
        readonly Holder: fhir.Coding;
        readonly IndirectTarget: fhir.Coding;
        readonly Informant: fhir.Coding;
        readonly InformationRecipient: fhir.Coding;
        readonly LegallyAuthenticated: fhir.Coding;
        readonly LegalAuthenticator: fhir.Coding;
        readonly AssignSecurityLabel: fhir.Coding;
        readonly Location: fhir.Coding;
        readonly Mask: fhir.Coding;
        readonly UgentNotificationContact: fhir.Coding;
        readonly NonReuseableDevice: fhir.Coding;
        readonly Nullify: fhir.Coding;
        readonly Origin: fhir.Coding;
        readonly Participation: fhir.Coding;
        readonly PrimaryPerformer: fhir.Coding;
        readonly PrimaryInformationRecipient: fhir.Coding;
        readonly Product: fhir.Coding;
        readonly Performer: fhir.Coding;
        readonly Pseudonymize: fhir.Coding;
        readonly RecordTarget: fhir.Coding;
        readonly Receiver: fhir.Coding;
        readonly ReusableDevice: fhir.Coding;
        readonly Referrer: fhir.Coding;
        readonly ReferredBy: fhir.Coding;
        readonly ReferredTo: fhir.Coding;
        readonly ResponsibleParty: fhir.Coding;
        readonly Remote: fhir.Coding;
        readonly Subject: fhir.Coding;
        readonly Specimen: fhir.Coding;
        readonly SecondaryPerformer: fhir.Coding;
        readonly TherapeuticAgent: fhir.Coding;
        readonly Transcriber: fhir.Coding;
        readonly Tracker: fhir.Coding;
        readonly Revise: fhir.Coding;
        readonly Via: fhir.Coding;
        readonly Verifier: fhir.Coding;
        readonly Witness: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Provenance.d.ts.map