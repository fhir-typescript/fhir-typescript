import * as fhir from '../fhir.js';
import { ConsentDataMeaningCodeType } from '../fhirValueSets/ConsentDataMeaningCodes.js';
import { ConsentProvisionTypeCodeType } from '../fhirValueSets/ConsentProvisionTypeCodes.js';
import { ConsentStateCodesCodeType } from '../fhirValueSets/ConsentStateCodesCodes.js';
/**
 * Valid arguments for the ConsentPolicy type.
 */
export interface ConsentPolicyArgs extends fhir.BackboneElementArgs {
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | string | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | string | undefined;
}
/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export declare class ConsentPolicy extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
     */
    authority?: fhir.FhirUri | undefined;
    /**
     * This element is for discoverability / documentation and does not modify or qualify the policy rules.
     */
    uri?: fhir.FhirUri | undefined;
    /**
     * Default constructor for ConsentPolicy - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentPolicyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentVerification type.
 */
export interface ConsentVerificationArgs extends fhir.BackboneElementArgs {
    /**
     * Has the instruction been verified.
     */
    verified: fhir.FhirBoolean | boolean | undefined;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.ReferenceArgs | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: fhir.FhirDateTime | string | undefined;
}
/**
 * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
 */
export declare class ConsentVerification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Has the instruction been verified.
     */
    verified: fhir.FhirBoolean | null;
    /**
     * Who verified the instruction (Patient, Relative or other Authorized Person).
     */
    verifiedWith?: fhir.Reference | undefined;
    /**
     * Date verification was collected.
     */
    verificationDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for ConsentVerification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentVerificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentProvisionActor type.
 */
export interface ConsentProvisionActorArgs extends fhir.BackboneElementArgs {
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
 */
export declare class ConsentProvisionActor extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the individual is involved in the resources content that is described in the exception.
     */
    role: fhir.CodeableConcept | null;
    /**
     * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionActor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentProvisionActorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for role (Consent.provision.actor.role)
     */
    static get roleExtensibleCodings(): {
        readonly CitizenRoleType: fhir.Coding;
        readonly Application: fhir.Coding;
        readonly ApplicationLauncher: fhir.Coding;
        readonly DestinationRoleID: fhir.Coding;
        readonly SourceRoleID: fhir.Coding;
        readonly DestinationMedia: fhir.Coding;
        readonly SourceMedia: fhir.Coding;
        /**
         * Function to perform basic model validation (e.g., check if required elements are present).
         */
        readonly Affiliate: fhir.Coding;
        readonly Agent: fhir.Coding;
        readonly Amender: fhir.Coding;
        readonly AssignedEntity: fhir.Coding;
        readonly CaregiverInformationReceiver: fhir.Coding;
        readonly LegitimateRelationshipInformationReceiver: fhir.Coding;
        readonly AuthorOriginator: fhir.Coding; /**
         * Mapping of this datatype to a FHIR equivalent
         */
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentProvisionData type.
 */
export interface ConsentProvisionDataArgs extends fhir.BackboneElementArgs {
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | string | undefined;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.ReferenceArgs | null;
}
/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export declare class ConsentProvisionData extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * How the resource reference is interpreted when testing consent restrictions.
     */
    meaning: fhir.FhirCode<ConsentDataMeaningCodeType> | null;
    /**
     * A reference to a specific resource that defines which resources are covered by this consent.
     */
    reference: fhir.Reference | null;
    /**
     * Default constructor for ConsentProvisionData - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentProvisionDataArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for meaning (Consent.provision.data.meaning)
     */
    static get meaningRequiredCodes(): {
        readonly AuthoredBy: "authoredby";
        readonly Dependents: "dependents";
        readonly Instance: "instance";
        readonly Related: "related";
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ConsentProvision type.
 */
export interface ConsentProvisionArgs extends fhir.BackboneElementArgs {
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: fhir.FhirCode<ConsentProvisionTypeCodeType> | string | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor?: fhir.ConsentProvisionActorArgs[] | undefined;
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel?: fhir.CodingArgs[] | undefined;
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose?: fhir.CodingArgs[] | undefined;
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class?: fhir.CodingArgs[] | undefined;
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data?: fhir.ConsentProvisionDataArgs[] | undefined;
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision?: fhir.ConsentProvisionArgs[] | undefined;
}
/**
 * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
 */
export declare class ConsentProvision extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Action  to take - permit or deny - when the rule conditions are met.  Not permitted in root rule, required in all nested rules.
     */
    type?: fhir.FhirCode<ConsentProvisionTypeCodeType> | undefined;
    /**
     * The timeframe in this rule is valid.
     */
    period?: fhir.Period | undefined;
    /**
     * Who or what is controlled by this rule. Use group to identify a set of actors by some property they share (e.g. 'admitting officers').
     */
    actor: fhir.ConsentProvisionActor[];
    /**
     * Note that this is the direct action (not the grounds for the action covered in the purpose element). At present, the only action in the understood and tested scope of this resource is 'read'.
     */
    action: fhir.CodeableConcept[];
    /**
     * If the consent specifies a security label of "R" then it applies to all resources that are labeled "R" or lower. E.g. for Confidentiality, it's a high water mark. For other kinds of security labels, subsumption logic applies. When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    securityLabel: fhir.Coding[];
    /**
     * When the purpose of use tag is on the data, access request purpose of use shall not conflict.
     */
    purpose: fhir.Coding[];
    /**
     * Multiple types are or'ed together. The intention of the contentType element is that the codes refer to profiles or document types defined in a standard or an implementation guide somewhere.
     */
    class: fhir.Coding[];
    /**
     * Typical use of this is a Document code with class = CDA.
     */
    code: fhir.CodeableConcept[];
    /**
     * This has a different sense to the Consent.period - that is when the consent agreement holds. This is the time period of the data that is controlled by the agreement.
     */
    dataPeriod?: fhir.Period | undefined;
    /**
     * The resources controlled by this rule if specific resources are referenced.
     */
    data: fhir.ConsentProvisionData[];
    /**
     * Rules which provide exceptions to the base rule or subrules.
     */
    provision: fhir.ConsentProvision[];
    /**
     * Default constructor for ConsentProvision - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentProvisionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (Consent.provision.type)
     */
    static get typeRequiredCodes(): {
        readonly OptOut: "deny";
        readonly OptIn: "permit";
    };
    /**
     * Extensible-bound Value Set for securityLabel (Consent.provision.securityLabel)
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
     * Extensible-bound Value Set for purpose (Consent.provision.purpose)
     */
    static get purposeExtensibleCodings(): {
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
     * Extensible-bound Value Set for class (Consent.provision.class)
     */
    static get classExtensibleCodings(): {
        readonly Account: fhir.Coding;
        readonly ActivityDefinition: fhir.Coding;
        readonly AdverseEvent: fhir.Coding;
        readonly AllergyIntolerance: fhir.Coding;
        readonly CDADocuments: fhir.Coding;
        readonly Appointment: fhir.Coding;
        readonly AppointmentResponse: fhir.Coding;
        readonly AuditEvent: fhir.Coding;
        readonly Basic: fhir.Coding;
        readonly Binary: fhir.Coding;
        readonly BiologicallyDerivedProduct: fhir.Coding;
        readonly BodyStructure: fhir.Coding;
        readonly Bundle: fhir.Coding;
        readonly CapabilityStatement: fhir.Coding;
        readonly CarePlan: fhir.Coding;
        readonly CareTeam: fhir.Coding;
        readonly CatalogEntry: fhir.Coding;
        readonly ChargeItem: fhir.Coding;
        readonly ChargeItemDefinition: fhir.Coding;
        readonly Claim: fhir.Coding;
        readonly ClaimResponse: fhir.Coding;
        readonly ClinicalImpression: fhir.Coding;
        readonly CodeSystem: fhir.Coding;
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
        readonly DocumentManifest: fhir.Coding; /**
         * Rules which provide exceptions to the base rule or subrules.
         */
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
        readonly LipidLabReport: fhir.Coding;
        readonly ImagingStudy: fhir.Coding;
        readonly Immunization: fhir.Coding;
        readonly ImmunizationEvaluation: fhir.Coding;
        readonly ImmunizationRecommendation: fhir.Coding;
        readonly ImplementationGuide: fhir.Coding;
        readonly InsurancePlan: fhir.Coding;
        readonly Invoice: fhir.Coding;
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
        readonly Organization: fhir.Coding;
        readonly OrganizationAffiliation: fhir.Coding;
        readonly Parameters: fhir.Coding;
        readonly Patient: fhir.Coding;
        readonly PaymentNotice: fhir.Coding;
        readonly PaymentReconciliation: fhir.Coding;
        readonly Person: fhir.Coding;
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
        readonly ForDocumentsFollowingCCDA11ConstraintsUsingANonStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA21ConstraintsUsingANonStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA11ConstraintsUsingAStructuredBody: fhir.Coding;
        readonly ForDocumentsFollowingCCDA21ConstraintsUsingAStructuredBody: fhir.Coding;
        readonly CardiologyCRC: fhir.Coding;
        readonly CardiologyEPRCIE: fhir.Coding;
        readonly CardiacImagingReport: fhir.Coding;
        readonly DentalCDA: fhir.Coding;
        readonly DentalPDF: fhir.Coding;
        readonly DentalText: fhir.Coding;
        readonly AdvancedPatientPrivacyConsents: fhir.Coding;
        readonly BasicPatientPrivacyConsentsWithScannedDocument: fhir.Coding;
        readonly BasicPatientPrivacyConsents: fhir.Coding;
        readonly DSGDetachedDocument: fhir.Coding;
        readonly DSGEnvelopingDocument: fhir.Coding;
        readonly PDFEmbeddedInCDAPerXDSSDProfile: fhir.Coding;
        readonly TextEmbeddedInCDAPerXDSSDProfile: fhir.Coding;
        readonly MimeTypeSufficient: fhir.Coding;
        readonly XDWWorkflowDocument: fhir.Coding;
        readonly CDALaboratoryReport: fhir.Coding;
        readonly AnatomicPathologyStructuredReportAll: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerAll: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerBreast: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerCervix: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerColon: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerEndometrium: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerEsophagus: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerKidney: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLarynx: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLipOralCavity: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLiver: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerLung: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerOvary: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerPancreas: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerPharynx: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerProstate: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerSalivaryGland: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerSkin: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerStomach: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerTestis: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerThyroid: fhir.Coding;
        readonly AnatomicPathologyStructuredReportCancerUrinaryBladder: fhir.Coding;
        readonly AntepartumRecordAPREducation: fhir.Coding;
        readonly AntepartumRecordAPRHistoryAndPhysical: fhir.Coding;
        readonly AntepartumRecordAPRLaboratory: fhir.Coding;
        readonly IHEAntepartumSummary: fhir.Coding;
        readonly CareManagementCM: fhir.Coding;
        readonly CancerRegistryContentCRC: fhir.Coding;
        readonly PCCCTN: fhir.Coding;
        readonly EmergencyDepartmentEncounterSummaryEDES: fhir.Coding;
        readonly PCCEDPN: fhir.Coding;
        readonly EmergencyDepartmentReferralEDR: fhir.Coding;
        readonly PCCETS: fhir.Coding;
        readonly PCCHP: fhir.Coding;
        readonly ImmunizationContentIC: fhir.Coding;
        readonly PCCITS: fhir.Coding;
        readonly PCCLDHP: fhir.Coding;
        readonly PCCLDS: fhir.Coding;
        readonly PCCMDS: fhir.Coding;
        readonly PCCNDS: fhir.Coding;
        readonly PCCNN: fhir.Coding;
        readonly PCCPPVS: fhir.Coding;
        readonly RoutineInterfacilityPatientTransportRIPT: fhir.Coding;
        readonly PCCTN: fhir.Coding;
        readonly PCCTRS: fhir.Coding;
        readonly XDSMedicalSummaries: fhir.Coding;
        readonly PersonalHealthRecordsAlsoKnownAsHL7CCDAndHITSPC32: fhir.Coding;
        readonly PharmacyDIS: fhir.Coding;
        readonly PharmacyPADV: fhir.Coding;
        readonly PharmacyPML: fhir.Coding;
        readonly PharmacyPre: fhir.Coding;
        readonly RadiologyXDSIStructuredCDA: fhir.Coding;
        readonly RadiologyXDSIPDF: fhir.Coding;
        readonly RadiologyXDSIText: fhir.Coding;
        readonly ValueSet: fhir.Coding;
        readonly VerificationResult: fhir.Coding;
        readonly VisionPrescription: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Consent type.
 */
export interface ConsentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Consent" | undefined;
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: fhir.FhirCode<ConsentStateCodesCodeType> | string | undefined;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConceptArgs | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConceptArgs[] | null;
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization?: fhir.ReferenceArgs[] | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    source?: fhir.Attachment | fhir.Reference | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    sourceReference?: fhir.ReferenceArgs | undefined;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy?: fhir.ConsentPolicyArgs[] | undefined;
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConceptArgs | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification?: fhir.ConsentVerificationArgs[] | undefined;
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvisionArgs | undefined;
}
/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.
 */
export declare class Consent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Consent";
    /**
     * This identifier identifies this copy of the consent. Where this identifier is also used elsewhere as the identifier for a consent record (e.g. a CDA consent document) then the consent details are expected to be the same.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid.
     */
    status: fhir.FhirCode<ConsentStateCodesCodeType> | null;
    /**
     * A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible.
     */
    scope: fhir.CodeableConcept | null;
    /**
     * A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.
     */
    category: fhir.CodeableConcept[];
    /**
     * Commonly, the patient the consent pertains to is the author, but for young and old people, it may be some other person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * This is not the time of the original consent, but the time that this statement was made or derived.
     */
    dateTime?: fhir.FhirDateTime | undefined;
    /**
     * Commonly, the patient the consent pertains to is the consentor, but particularly for young and old people, it may be some other person - e.g. a legal guardian.
     */
    performer: fhir.Reference[];
    /**
     * The organization that manages the consent, and the framework within which it is executed.
     */
    organization: fhir.Reference[];
    /**
     * The source can be contained inline (Attachment), referenced directly (Consent), referenced in a consent repository (DocumentReference), or simply by an identifier (Identifier), e.g. a CDA document id.
     */
    source?: (fhir.Attachment | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Consent.source[x]
     */
    protected static readonly _fts_sourceIsChoice: true;
    /**
     * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
     */
    policy: fhir.ConsentPolicy[];
    /**
     * If the policyRule is absent, computable consent would need to be constructed from the elements of the Consent resource.
     */
    policyRule?: fhir.CodeableConcept | undefined;
    /**
     * Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person.
     */
    verification: fhir.ConsentVerification[];
    /**
     * An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.
     */
    provision?: fhir.ConsentProvision | undefined;
    /**
     * Default constructor for Consent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ConsentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Consent.status)
     */
    static get statusRequiredCodes(): {
        readonly Active: "active";
        readonly Pending: "draft";
        readonly EnteredInError: "entered-in-error";
        readonly Inactive: "inactive";
        readonly Proposed: "proposed";
        readonly Rejected: "rejected";
    };
    /**
     * Extensible-bound Value Set for scope (Consent.scope)
     */
    static get scopeExtensibleCodings(): {
        readonly AdvancedCareDirective: fhir.Coding;
        readonly PrivacyConsent: fhir.Coding;
        readonly Research: fhir.Coding;
        readonly Treatment: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for category (Consent.category)
     */
    static get categoryExtensibleCodings(): {
        readonly PrivacyPolicyAcknowledgementDocument: fhir.Coding;
        readonly PrivacyPolicyOrganizationDocument: fhir.Coding;
        readonly PatientConsent: fhir.Coding;
        readonly ReleaseOfInformationConsent: fhir.Coding;
        readonly AdvanceDirective: fhir.Coding;
        readonly DoNotResuscitate: fhir.Coding;
        readonly EmergencyOnly: fhir.Coding;
        readonly HealthCareDirective: fhir.Coding;
        readonly InformationCollection: fhir.Coding;
        readonly InformationDisclosure: fhir.Coding;
        readonly InformationAccess: fhir.Coding;
        readonly AccessOnly: fhir.Coding;
        readonly AccessAndSaveOnly: fhir.Coding;
        readonly InformationRedisclosure: fhir.Coding;
        readonly NoticeOfPrivacyPractices: fhir.Coding;
        readonly POLST: fhir.Coding;
        readonly ResearchInformationAccess: fhir.Coding;
        readonly ResearchInformationAccessRESEARCH: fhir.Coding;
        readonly DeIdentifiedInformationAccess: fhir.Coding;
        readonly DeIdentifiedInformationAccessRSDID: fhir.Coding;
        readonly ReIdentifiableInformationAccess: fhir.Coding;
        readonly ReIdentifiableInformationAccessRSREID: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for policyRule (Consent.policyRule)
     */
    static get policyRuleExtensibleCodings(): {
        readonly ATELGAOptInConsent: fhir.Coding;
        readonly CommonRuleInformedConsent: fhir.Coding;
        readonly MichiganBehaviorAndMentalHealthConsent: fhir.Coding;
        readonly PopulationOriginsAndAncestryResearchConsent: fhir.Coding;
        readonly HIPAAAuthorization: fhir.Coding;
        readonly HIPAANoticeOfPrivacyPractices: fhir.Coding;
        readonly HIPAAResearchAuthorization: fhir.Coding; /**
         * Date verification was collected.
         */
        readonly HIPAARestrictions: fhir.Coding;
        readonly HIPAASelfPayRestriction: fhir.Coding;
        readonly IllinoisConsentByMinorsToMedicalProcedures: fhir.Coding;
        readonly MichiganMDHHS5515ConsentToShareBehavioralHealthInformationForCareCoordinationPurposes: fhir.Coding;
        readonly NCICancerClinicalTrialConsent: fhir.Coding;
        readonly NIHAuthorizationForTheReleaseOfMedicalInformation: fhir.Coding;
        readonly NIHGlobalRareDiseasePatientRegistryAndDataRepositoryConsent: fhir.Coding;
        readonly HHSNIHHIPAAResearchAuthorization: fhir.Coding;
        readonly NLLSPPermission: fhir.Coding;
        readonly NewYorkStateSurgicalAndInvasiveProcedureProtocol: fhir.Coding;
        readonly SquaxinIndianBehavioralHealthAndHIPAAConsent: fhir.Coding;
        readonly SSAAuthorizationToDisclose: fhir.Coding;
        readonly VAForm100484: fhir.Coding;
        readonly VAForm100485: fhir.Coding;
        readonly VAForm101010116: fhir.Coding;
        readonly VAForm105345: fhir.Coding;
        readonly VAForm105345a: fhir.Coding;
        readonly VAForm105345aMHV: fhir.Coding;
        readonly VAForm214142: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Consent.d.ts.map