import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Meta type.
 */
export interface MetaArgs extends fhir.FhirElementArgs {
    /**
     * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
     */
    versionId?: fhir.FhirId | string | undefined;
    /**
     * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
     */
    lastUpdated?: fhir.FhirInstant | string | undefined;
    /**
     * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.
     * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
     */
    source?: fhir.FhirUri | string | undefined;
    /**
     * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
     */
    profile?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    security?: fhir.CodingArgs[] | undefined;
    /**
     * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    tag?: fhir.CodingArgs[] | undefined;
}
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export declare class Meta extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
     */
    versionId?: fhir.FhirId | undefined;
    /**
     * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
     */
    lastUpdated?: fhir.FhirInstant | undefined;
    /**
     * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used.
     * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
     */
    source?: fhir.FhirUri | undefined;
    /**
     * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
     */
    profile: fhir.FhirCanonical[];
    /**
     * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    security: fhir.Coding[];
    /**
     * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
     */
    tag: fhir.Coding[];
    /**
     * Default constructor for Meta - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MetaArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for security (Meta.security)
     */
    static get securityExtensibleCodings(): {
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
//# sourceMappingURL=Meta.d.ts.map