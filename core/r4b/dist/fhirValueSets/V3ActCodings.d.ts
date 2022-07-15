import { CodingArgs } from '../fhir/Coding.js';
/**
 * A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare type V3ActCodingType = {
    /**
     * Code: _ActAccountCode
     */
    ActAccountCode: CodingArgs;
    /**
     * Code: _ActAdjudicationCode
     */
    ActAdjudicationCode: CodingArgs;
    /**
     * Code: _ActAdjudicationGroupCode
     */
    ActAdjudicationGroupCode: CodingArgs;
    /**
     * Code: _ActAdjudicationInformationCode
     */
    ActAdjudicationInformationCode: CodingArgs;
    /**
     * Code: _ActAdjudicationResultActionCode
     */
    ActAdjudicationResultActionCode: CodingArgs;
    /**
     * Code: _ActAdministrativeAuthorizationDetectedIssueCode
     */
    ActAdministrativeAuthorizationDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActAdministrativeDetectedIssueCode
     */
    ActAdministrativeDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActAdministrativeDetectedIssueManagementCode
     */
    ActAdministrativeDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _ActAdministrativeRuleDetectedIssueCode
     */
    ActAdministrativeRuleDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActBillableModifierCode
     */
    ActBillableModifierCode: CodingArgs;
    /**
     * Code: _ActBillableServiceCode
     */
    ActBillableServiceCode: CodingArgs;
    /**
     * Code: _ActBillableTreatmentPlanCode
     */
    ActBillableTreatmentPlanCode: CodingArgs;
    /**
     * Code: _ActBillingArrangementCode
     */
    ActBillingArrangementCode: CodingArgs;
    /**
     * Code: _ActBoundedROICode
     */
    ActBoundedROICode: CodingArgs;
    /**
     * Code: _ActCareProvisionCode
     */
    ActCareProvision: CodingArgs;
    /**
     * Code: _ActClaimAttachmentCategoryCode
     */
    ActClaimAttachmentCategoryCode: CodingArgs;
    /**
     * Code: _ActCognitiveProfessionalServiceCode
     */
    ActCognitiveProfessionalServiceCode: CodingArgs;
    /**
     * Code: _ActConsent
     */
    ActConsent: CodingArgs;
    /**
     * Code: _ActConsentDirective
     */
    ActConsentDirective: CodingArgs;
    /**
     * Code: _ActConsentType
     */
    ActConsentType: CodingArgs;
    /**
     * Code: _ActContainerRegistrationCode
     */
    ActContainerRegistrationCode: CodingArgs;
    /**
     * Code: _ActControlVariable
     */
    ActControlVariable: CodingArgs;
    /**
     * Code: _ActCoverageAuthorizationConfirmationCode
     */
    ActCoverageAuthorizationConfirmationCode: CodingArgs;
    /**
     * Code: _ActCoverageConfirmationCode
     */
    ActCoverageConfirmationCode: CodingArgs;
    /**
     * Code: _ActCoverageEligibilityConfirmationCode
     */
    ActCoverageEligibilityConfirmationCode: CodingArgs;
    /**
     * Code: _ActCoverageLimitCode
     */
    ActCoverageLimitCode: CodingArgs;
    /**
     * Code: _ActCoveragePartyLimitGroupCode
     */
    ActCoveragePartyLimitGroupCode: CodingArgs;
    /**
     * Code: _ActCoverageQuantityLimitCode
     */
    ActCoverageQuantityLimitCode: CodingArgs;
    /**
     * Code: _ActCoverageTypeCode
     */
    ActCoverageTypeCode: CodingArgs;
    /**
     * Code: _ActCoveredPartyLimitCode
     */
    ActCoveredPartyLimitCode: CodingArgs;
    /**
     * Code: _ActCredentialedCareCode
     */
    ActCredentialedCare: CodingArgs;
    /**
     * Code: _ActCredentialedCareProvisionPersonCode
     */
    ActCredentialedCareProvisionPeron: CodingArgs;
    /**
     * Code: _ActCredentialedCareProvisionProgramCode
     */
    ActCredentialedCareProvisionProgram: CodingArgs;
    /**
     * Code: _ActDecision
     */
    ActDecision: CodingArgs;
    /**
     * Code: _ActDetectedIssueCode
     */
    ActDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActDetectedIssueManagementCode
     */
    ActDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _ActEncounterAccommodationCode
     */
    ActEncounterAccommodationCode: CodingArgs;
    /**
     * Code: _ActEncounterCode
     */
    ActEncounterCode: CodingArgs;
    /**
     * Code: _ActExposureCode
     */
    ActExposureCode: CodingArgs;
    /**
     * Code: _ActFinancialDetectedIssueCode
     */
    ActFinancialDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActFinancialDetectedIssueManagementCode
     */
    ActFinancialDetectedIssueManagementCode: CodingArgs;
    /**
     * Code: _ActFinancialTransactionCode
     */
    ActFinancialTransactionCode: CodingArgs;
    /**
     * Code: _ActGDPRConsentDirective
     */
    ActGDPRConsentDirective: CodingArgs;
    /**
     * Code: _ActGDPRPrivacyLaw
     */
    GeneralDataProtectionRegulation: CodingArgs;
    /**
     * Code: _ActGenericConsentDirective
     */
    ActGenericConsentDirective: CodingArgs;
    /**
     * Code: _ActHealthInsuranceTypeCode
     */
    ActHealthInsuranceTypeCode: CodingArgs;
    /**
     * Code: _ActIdentityDocumentCode
     */
    ActIdentityDocumentCode: CodingArgs;
    /**
     * Code: _ActIncidentCode
     */
    ActIncidentCode: CodingArgs;
    /**
     * Code: _ActInformationAccessCode
     */
    ActInformationAccessCode: CodingArgs;
    /**
     * Code: _ActInformationAccessContextCode
     */
    ActInformationAccessContextCode: CodingArgs;
    /**
     * Code: _ActInformationActionPolicy
     */
    ActInformationActionPolicy: CodingArgs;
    /**
     * Code: _ActInformationCategoryCode
     */
    ActInformationCategoryCode: CodingArgs;
    /**
     * Code: _ActInformationPolicy
     */
    ActInformationPolicy: CodingArgs;
    /**
     * Code: _ActInformationSensitivityPolicy
     */
    ActInformationSensitivityPolicy: CodingArgs;
    /**
     * Code: _ActInsurancePolicyCode
     */
    ActInsurancePolicyCode: CodingArgs;
    /**
     * Code: _ActInsuranceTypeCode
     */
    ActInsuranceTypeCode: CodingArgs;
    /**
     * Code: _ActInvoiceAdjudicationPaymentCode
     */
    ActInvoiceAdjudicationPaymentCode: CodingArgs;
    /**
     * Code: _ActInvoiceAdjudicationPaymentGroupCode
     */
    ActInvoiceAdjudicationPaymentGroupCode: CodingArgs;
    /**
     * Code: _ActInvoiceAdjudicationPaymentSummaryCode
     */
    ActInvoiceAdjudicationPaymentSummaryCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailClinicalProductCode
     */
    ActInvoiceDetailClinicalProductCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailClinicalServiceCode
     */
    ActInvoiceDetailClinicalServiceCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailCode
     */
    ActInvoiceDetailCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailDrugProductCode
     */
    ActInvoiceDetailDrugProductCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailGenericAdjudicatorCode
     */
    ActInvoiceDetailGenericAdjudicatorCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailGenericCode
     */
    ActInvoiceDetailGenericCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailGenericModifierCode
     */
    ActInvoiceDetailGenericModifierCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailGenericProviderCode
     */
    ActInvoiceDetailGenericProviderCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailOralHealthProcedureCode
     */
    ActInvoiceDetailOralHealthProcedureCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailPreferredAccommodationCode
     */
    ActInvoiceDetailPreferredAccommodationCode: CodingArgs;
    /**
     * Code: _ActInvoiceDetailTaxCode
     */
    ActInvoiceDetailTaxCode: CodingArgs;
    /**
     * Code: _ActInvoiceElementCode
     */
    ActInvoiceElementCode: CodingArgs;
    /**
     * Code: _ActInvoiceElementSummaryCode
     */
    ActInvoiceElementSummaryCode: CodingArgs;
    /**
     * Code: _ActInvoiceGroupCode
     */
    ActInvoiceGroupCode: CodingArgs;
    /**
     * Code: _ActInvoiceInterGroupCode
     */
    ActInvoiceInterGroupCode: CodingArgs;
    /**
     * Code: _ActInvoiceOverrideCode
     */
    ActInvoiceOverrideCode: CodingArgs;
    /**
     * Code: _ActInvoicePaymentCode
     */
    ActInvoiceAdjudicationPaymentGroupCodeActInvoicePaymentCode: CodingArgs;
    /**
     * Code: _ActInvoiceRootGroupCode
     */
    ActInvoiceRootGroupCode: CodingArgs;
    /**
     * Code: _ActListCode
     */
    ActListCode: CodingArgs;
    /**
     * Code: _ActMedicalBillableServiceCode
     */
    ActMedicalBillableServiceCode: CodingArgs;
    /**
     * Code: _ActMedicalServiceCode
     */
    ActMedicalServiceCode: CodingArgs;
    /**
     * Code: _ActMedicationTherapyDurationWorkingListCode
     */
    ActMedicationTherapyDurationWorkingList: CodingArgs;
    /**
     * Code: _ActMonitoringProtocolCode
     */
    ActMonitoringProtocolCode: CodingArgs;
    /**
     * Code: _ActNonMedicalBillableServiceCode
     */
    ActNonMedicalBillableServiceCode: CodingArgs;
    /**
     * Code: _ActNonObservationIndicationCode
     */
    ActNonObservationIndicationCode: CodingArgs;
    /**
     * Code: _ActObservationList
     */
    ActObservationList: CodingArgs;
    /**
     * Code: _ActObservationVerificationType
     */
    ActObservationVerification: CodingArgs;
    /**
     * Code: _ActOralHealthProcedureCode
     */
    ActOralHealthProcedureCode: CodingArgs;
    /**
     * Code: _ActOrderCode
     */
    ActOrderCode: CodingArgs;
    /**
     * Code: _ActPatientAnnotationType
     */
    ActPatientAnnotationType: CodingArgs;
    /**
     * Code: _ActPatientSafetyIncidentCode
     */
    ActPatientSafetyIncidentCode: CodingArgs;
    /**
     * Code: _ActPatientTransportationModeCode
     */
    ActPatientTransportationModeCode: CodingArgs;
    /**
     * Code: _ActPaymentCode
     */
    ActPaymentCode: CodingArgs;
    /**
     * Code: _ActPharmacySupplyType
     */
    ActPharmacySupplyType: CodingArgs;
    /**
     * Code: _ActPolicyType
     */
    ActPolicyType: CodingArgs;
    /**
     * Code: _ActPrivacyConsentDirective
     */
    ActPrivacyConsentDirective: CodingArgs;
    /**
     * Code: _ActPrivacyLaw
     */
    ActPrivacyLaw: CodingArgs;
    /**
     * Code: _ActPrivacyPolicy
     */
    ActPrivacyPolicy: CodingArgs;
    /**
     * Code: _ActPrivilegeCategorization
     */
    ActPrivilegeCategorization: CodingArgs;
    /**
     * Code: _ActPrivilegeCategorizationType
     */
    ActPrivilegeCategorizationType: CodingArgs;
    /**
     * Code: _ActProcedureCategoryList
     */
    ActProcedureCategoryList: CodingArgs;
    /**
     * Code: _ActProcedureCode
     */
    ActProcedureCode: CodingArgs;
    /**
     * Code: _ActProductAcquisitionCode
     */
    ActProductAcquisitionCode: CodingArgs;
    /**
     * Code: _ActProgramTypeCode
     */
    ActProgramTypeCode: CodingArgs;
    /**
     * Code: _ActRegistryCode
     */
    ActRegistryCode: CodingArgs;
    /**
     * Code: _ActSecurityObjectCode
     */
    ActSecurityObjectCode: CodingArgs;
    /**
     * Code: _ActSpecimenTransportCode
     */
    ActSpecimenTransportCode: CodingArgs;
    /**
     * Code: _ActSpecimenTreatmentCode
     */
    ActSpecimenTreatmentCode: CodingArgs;
    /**
     * Code: _ActSpecObsCode
     */
    ActSpecObsCode: CodingArgs;
    /**
     * Code: _ActSubstanceAdministrationCode
     */
    ActSubstanceAdministrationCode: CodingArgs;
    /**
     * Code: _ActSuppliedItemDetectedIssueCode
     */
    ActSuppliedItemDetectedIssueCode: CodingArgs;
    /**
     * Code: _ActTaskCode
     */
    ActTaskCode: CodingArgs;
    /**
     * Code: _ActTherapyDurationWorkingListCode
     */
    ActTherapyDurationWorkingListCode: CodingArgs;
    /**
     * Code: _ActTransportationModeCode
     */
    ActTransportationModeCode: CodingArgs;
    /**
     * Code: _ActUSPrivacyConsentDirective
     */
    ActUSPrivacyConsentDirective: CodingArgs;
    /**
     * Code: _ActUSPrivacyLaw
     */
    ActUSPrivacyLaw: CodingArgs;
    /**
     * Code: _AdministrationDetectedIssueCode
     */
    AdministrationDetectedIssueCode: CodingArgs;
    /**
     * Code: _AdvanceBeneficiaryNoticeType
     */
    AdvanceBeneficiaryNoticeType: CodingArgs;
    /**
     * Code: _AdverseSubstanceAdministrationEventActionTakenType
     */
    AdverseSubstanceAdministrationEventActionTakenType: CodingArgs;
    /**
     * Code: _AnnotationType
     */
    AnnotationType: CodingArgs;
    /**
     * Code: _AppropriatenessDetectedIssueCode
     */
    AppropriatenessDetectedIssueCode: CodingArgs;
    /**
     * Code: _AuthorizationIssueManagementCode
     */
    AuthorizationIssueManagementCode: CodingArgs;
    /**
     * Code: _CaseTransmissionMode
     */
    CaseTransmissionMode: CodingArgs;
    /**
     * Code: _ClinicalActionDetectedIssueCode
     */
    ClinicalActionDetectedIssueCode: CodingArgs;
    /**
     * Code: _CommonClinicalObservationType
     */
    CommonClinicalObservationType: CodingArgs;
    /**
     * Code: _CPT4
     */
    CPT4: CodingArgs;
    /**
     * Code: _CPT5
     */
    CPT5: CodingArgs;
    /**
     * Code: _CreditCard
     */
    CreditCard: CodingArgs;
    /**
     * Code: _DEADrugSchedule
     */
    DEADrugSchedule: CodingArgs;
    /**
     * Code: _DrugActionDetectedIssueCode
     */
    DrugActionDetectedIssueCode: CodingArgs;
    /**
     * Code: _ECGAnnotationType
     */
    ECGAnnotationType: CodingArgs;
    /**
     * Code: _ECGControlVariable
     */
    ECGControlVariable: CodingArgs;
    /**
     * Code: _ECGObservationSequenceType
     */
    ECGObservationSequenceType: CodingArgs;
    /**
     * Code: _ECGObservationSeriesType
     */
    ECGObservationSeriesType: CodingArgs;
    /**
     * Code: _EntitySensitivityPolicyType
     */
    EntityInformationSensitivityPolicy: CodingArgs;
    /**
     * Code: _ExternallyDefinedActCodes
     */
    ExternallyDefinedActCodes: CodingArgs;
    /**
     * Code: _FDALabelData
     */
    FDALabelData: CodingArgs;
    /**
     * Code: _GeneticObservationType
     */
    GeneticObservationType: CodingArgs;
    /**
     * Code: _HCPCS
     */
    HCPCS: CodingArgs;
    /**
     * Code: _HCPCSAccommodationCode
     */
    HCPCSAccommodationCode: CodingArgs;
    /**
     * Code: _HL7AccommodationCode
     */
    HL7AccommodationCode: CodingArgs;
    /**
     * Code: _HL7DefinedActCodes
     */
    HL7DefinedActCodes: CodingArgs;
    /**
     * Code: _HL7TriggerEventCode
     */
    HL7TriggerEventCode: CodingArgs;
    /**
     * Code: _ICD10PCS
     */
    ICD10PCS: CodingArgs;
    /**
     * Code: _ICD9PCS
     */
    ICD9PCS: CodingArgs;
    /**
     * Code: _ImmunizationObservationType
     */
    ImmunizationObservationType: CodingArgs;
    /**
     * Code: _IndividualCaseSafetyReportCriteria
     */
    IndividualCaseSafetyReportCriteria: CodingArgs;
    /**
     * Code: _IndividualCaseSafetyReportProductCharacteristic
     */
    IndividualCaseSafetyReportProductCharacteristic: CodingArgs;
    /**
     * Code: _IndividualCaseSafetyReportType
     */
    IndividualCaseSafetyReportType: CodingArgs;
    /**
     * Code: _InformationSensitivityPolicy
     */
    InformationSensitivityPolicy: CodingArgs;
    /**
     * Code: _InteractionDetectedIssueCode
     */
    InteractionDetectedIssueCode: CodingArgs;
    /**
     * Code: _InvoiceElementAdjudicated
     */
    InvoiceElementAdjudicated: CodingArgs;
    /**
     * Code: _InvoiceElementPaid
     */
    InvoiceElementPaid: CodingArgs;
    /**
     * Code: _InvoiceElementSubmitted
     */
    InvoiceElementSubmitted: CodingArgs;
    /**
     * Code: _LOINCObservationActContextAgeType
     */
    LOINCObservationActContextAgeType: CodingArgs;
    /**
     * Code: _MedicationObservationType
     */
    MedicationObservationType: CodingArgs;
    /**
     * Code: _ObservationActAgeGroupType
     */
    ObservationActAgeGroupType: CodingArgs;
    /**
     * Code: _ObservationAllergyTestCode
     */
    ObservationAllergyTest: CodingArgs;
    /**
     * Code: _ObservationAllergyTestType
     */
    ObservationAllergyTestType: CodingArgs;
    /**
     * Code: _ObservationCausalityAssessmentType
     */
    ObservationCausalityAssessment: CodingArgs;
    /**
     * Code: _ObservationDiagnosisTypes
     */
    ObservationDiagnosisTypes: CodingArgs;
    /**
     * Code: _ObservationDosageDefinitionPreconditionType
     */
    ObservationDosageDefinitionPreconditionType: CodingArgs;
    /**
     * Code: _ObservationGenomicFamilyHistoryType
     */
    ObservationGenomicFamilyHistoryType: CodingArgs;
    /**
     * Code: _ObservationIndicationType
     */
    ObservationIndicationType: CodingArgs;
    /**
     * Code: _ObservationIssueTriggerCodedObservationType
     */
    ObservationIssueTriggerCodedObservationType: CodingArgs;
    /**
     * Code: _ObservationIssueTriggerMeasuredObservationType
     */
    ObservationIssueTriggerMeasuredObservationType: CodingArgs;
    /**
     * Code: _ObservationQualityMeasureAttribute
     */
    ObservationQualityMeasureAttribute: CodingArgs;
    /**
     * Code: _ObservationQueryMatchType
     */
    ObservationQueryMatchType: CodingArgs;
    /**
     * Code: _ObservationSequenceType
     */
    ObservationSequenceType: CodingArgs;
    /**
     * Code: _ObservationSeriesType
     */
    ObservationSeriesType: CodingArgs;
    /**
     * Code: _ObservationType
     */
    ObservationType: CodingArgs;
    /**
     * Code: _ObservationVisionPrescriptionType
     */
    ObservationVisionPrescriptionType: CodingArgs;
    /**
     * Code: _PatientCharacteristicObservationType
     */
    PatientCharacteristicObservationType: CodingArgs;
    /**
     * Code: _PatientImmunizationRelatedObservationType
     */
    PatientImmunizationRelatedObservationType: CodingArgs;
    /**
     * Code: _PopulationInclusionObservationType
     */
    PopulationInclusionObservationType: CodingArgs;
    /**
     * Code: _PreferenceObservationType
     */
    PreferenceObservationType: CodingArgs;
    /**
     * Code: _ROIOverlayShape
     */
    ROIOverlayShape: CodingArgs;
    /**
     * Code: _RoleInformationSensitivityPolicy
     */
    RoleInformationSensitivityPolicy: CodingArgs;
    /**
     * Code: _SimpleMeasurableClinicalObservationType
     */
    SimpleMeasurableClinicalObservationType: CodingArgs;
    /**
     * Code: _SubstanceAdministrationActCode
     */
    SubstanceAdministrationActCode: CodingArgs;
    /**
     * Code: _SupplyDetectedIssueCode
     */
    SupplyDetectedIssueCode: CodingArgs;
    /**
     * Code: _TimingDetectedIssueCode
     */
    TimingDetectedIssueCode: CodingArgs;
    /**
     * Code: 1
     */
    TherapyAppropriate: CodingArgs;
    /**
     * Code: 10
     */
    ProvidedPatientEducation: CodingArgs;
    /**
     * Code: 11
     */
    AddedConcurrentTherapy: CodingArgs;
    /**
     * Code: 12
     */
    TemporarilySuspendedConcurrentTherapy: CodingArgs;
    /**
     * Code: 13
     */
    StoppedConcurrentTherapy: CodingArgs;
    /**
     * Code: 14
     */
    SupplyAppropriate: CodingArgs;
    /**
     * Code: 15
     */
    Replacement: CodingArgs;
    /**
     * Code: 16
     */
    VacationSupply: CodingArgs;
    /**
     * Code: 17
     */
    WeekendSupply: CodingArgs;
    /**
     * Code: 18
     */
    LeaveOfAbsence: CodingArgs;
    /**
     * Code: 19
     */
    ConsultedSupplier: CodingArgs;
    /**
     * Code: 2
     */
    AssessedPatient: CodingArgs;
    /**
     * Code: 20
     */
    AdditionalQuantityOnSeparateDispense: CodingArgs;
    /**
     * Code: 21
     */
    AuthorizationConfirmed: CodingArgs;
    /**
     * Code: 21611-9
     */
    AgePatientQnEst: CodingArgs;
    /**
     * Code: 21612-7
     */
    AgePatientQnReported: CodingArgs;
    /**
     * Code: 22
     */
    AppropriateIndicationOrDiagnosis: CodingArgs;
    /**
     * Code: 23
     */
    PriorTherapyDocumented: CodingArgs;
    /**
     * Code: 29553-5
     */
    AgePatientQnCalc: CodingArgs;
    /**
     * Code: 3
     */
    PatientExplanation: CodingArgs;
    /**
     * Code: 30525-0
     */
    AgePatientQnDefinition: CodingArgs;
    /**
     * Code: 30972-4
     */
    AgeAtOnsetOfAdverseEvent: CodingArgs;
    /**
     * Code: 4
     */
    ConsultedOtherSource: CodingArgs;
    /**
     * Code: 42CFRPart2
     */
    VAL42CFRPart2: CodingArgs;
    /**
     * Code: 42CFRPart2CD
     */
    VAL42CFRPart2ConsentDirective: CodingArgs;
    /**
     * Code: 5
     */
    ConsultedPrescriber: CodingArgs;
    /**
     * Code: 6
     */
    PrescriberDeclinedChange: CodingArgs;
    /**
     * Code: 7
     */
    InteractingTherapyNoLongerActivePlanned: CodingArgs;
    /**
     * Code: 8
     */
    OtherActionTaken: CodingArgs;
    /**
     * Code: 9
     */
    InstitutedOngoingMonitoringProgram: CodingArgs;
    /**
     * Code: a) HIPAAConsent
     */
    HIPAAConsent: CodingArgs;
    /**
     * Code: AA
     */
    AdjudicatedWithAdjustments: CodingArgs;
    /**
     * Code: AALC
     */
    AccreditedAssistedLivingCare: CodingArgs;
    /**
     * Code: AAMC
     */
    AccreditedAmbulatoryCare: CodingArgs;
    /**
     * Code: ABHC
     */
    AccreditedBehavioralHealthCare: CodingArgs;
    /**
     * Code: ABUSE
     */
    CommonlyAbusedMisusedAlert: CodingArgs;
    /**
     * Code: ACAC
     */
    AccreditedCriticalAccessHospitalCare: CodingArgs;
    /**
     * Code: ACADR
     */
    AdverseDrugReactionAccess: CodingArgs;
    /**
     * Code: ACALL
     */
    AllAccess: CodingArgs;
    /**
     * Code: ACALLG
     */
    AllergyAccess: CodingArgs;
    /**
     * Code: ACCESSCONSCHEME
     */
    AccessControlScheme: CodingArgs;
    /**
     * Code: ACCONS
     */
    InformationalConsentAccess: CodingArgs;
    /**
     * Code: ACCTRECEIVABLE
     */
    AccountReceivable: CodingArgs;
    /**
     * Code: ACDEMO
     */
    DemographicsAccess: CodingArgs;
    /**
     * Code: ACDI
     */
    DiagnosticImagingAccess: CodingArgs;
    /**
     * Code: ACH
     */
    AutomatedClearingHouse: CodingArgs;
    /**
     * Code: ACHC
     */
    AccreditedHospitalCare: CodingArgs;
    /**
     * Code: ACID
     */
    Acidification: CodingArgs;
    /**
     * Code: ACIMMUN
     */
    ImmunizationAccess: CodingArgs;
    /**
     * Code: ACLAB
     */
    LabTestResultAccess: CodingArgs;
    /**
     * Code: ACMED
     */
    MedicationAccess: CodingArgs;
    /**
     * Code: ACMEDC
     */
    MedicalConditionAccess: CodingArgs;
    /**
     * Code: ACMEN
     */
    MentalHealthAccess: CodingArgs;
    /**
     * Code: ACOBS
     */
    CommonObservationsAccess: CodingArgs;
    /**
     * Code: ACOCOMPT
     */
    AccountableCareOrganizationCompartment: CodingArgs;
    /**
     * Code: ACPOLPRG
     */
    PolicyOrProgramInformationAccess: CodingArgs;
    /**
     * Code: ACPROV
     */
    ProviderInformationAccess: CodingArgs;
    /**
     * Code: ACPSERV
     */
    ProfessionalServiceAccess: CodingArgs;
    /**
     * Code: ACSUBSTAB
     */
    SubstanceAbuseAccess: CodingArgs;
    /**
     * Code: ActTrustPolicyType
     */
    TrustPolicy: CodingArgs;
    /**
     * Code: ACU
     */
    ShortTermAcute: CodingArgs;
    /**
     * Code: ACUTE
     */
    InpatientAcute: CodingArgs;
    /**
     * Code: ADALRT
     */
    AdultAlert: CodingArgs;
    /**
     * Code: ADCNPPELAT
     */
    AdjudNullifiedPriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADCNPPELCT
     */
    AdjudNullifiedPriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: ADCNPPMNAT
     */
    AdjudNullifiedPriorPeriodManualAmount: CodingArgs;
    /**
     * Code: ADCNPPMNCT
     */
    AdjudNullifiedPriorPeriodManualCount: CodingArgs;
    /**
     * Code: ADCNSPELAT
     */
    AdjudNullifiedSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADCNSPELCT
     */
    AdjudNullifiedSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: ADCNSPMNAT
     */
    AdjudNullifiedSamePeriodManualAmount: CodingArgs;
    /**
     * Code: ADCNSPMNCT
     */
    AdjudNullifiedSamePeriodManualCount: CodingArgs;
    /**
     * Code: ADMDX
     */
    AdmittingDiagnosis: CodingArgs;
    /**
     * Code: ADNFPPELAT
     */
    AdjudNullifiedPriorPeriodElectronicAmountADNFPPELAT: CodingArgs;
    /**
     * Code: ADNFPPELCT
     */
    AdjudNullifiedPriorPeriodElectronicCountADNFPPELCT: CodingArgs;
    /**
     * Code: ADNFPPMNAT
     */
    AdjudNullifiedPriorPeriodManualAmountADNFPPMNAT: CodingArgs;
    /**
     * Code: ADNFPPMNCT
     */
    AdjudNullifiedPriorPeriodManualCountADNFPPMNCT: CodingArgs;
    /**
     * Code: ADNFSPELAT
     */
    AdjudNullifiedSamePeriodElectronicAmountADNFSPELAT: CodingArgs;
    /**
     * Code: ADNFSPELCT
     */
    AdjudNullifiedSamePeriodElectronicCountADNFSPELCT: CodingArgs;
    /**
     * Code: ADNFSPMNAT
     */
    AdjudNullifiedSamePeriodManualAmountADNFSPMNAT: CodingArgs;
    /**
     * Code: ADNFSPMNCT
     */
    AdjudNullifiedSamePeriodManualCountADNFSPMNCT: CodingArgs;
    /**
     * Code: ADNPPPELAT
     */
    AdjudNonPayeePayablePriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADNPPPELCT
     */
    AdjudNonPayeePayablePriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: ADNPPPMNAT
     */
    AdjudNonPayeePayablePriorPeriodManualAmount: CodingArgs;
    /**
     * Code: ADNPPPMNCT
     */
    AdjudNonPayeePayablePriorPeriodManualCount: CodingArgs;
    /**
     * Code: ADNPSPELAT
     */
    AdjudNonPayeePayableSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADNPSPELCT
     */
    AdjudNonPayeePayableSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: ADNPSPMNAT
     */
    AdjudNonPayeePayableSamePeriodManualAmount: CodingArgs;
    /**
     * Code: ADNPSPMNCT
     */
    AdjudNonPayeePayableSamePeriodManualCount: CodingArgs;
    /**
     * Code: ADOL
     */
    AdolescentInformationSensitivity: CodingArgs;
    /**
     * Code: ADPPPPELAT
     */
    AdjudPayeePayablePriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADPPPPELCT
     */
    AdjudPayeePayablePriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: ADPPPPMNAT
     */
    AdjudPayeePayablePriorPeriodManualAmout: CodingArgs;
    /**
     * Code: ADPPPPMNCT
     */
    AdjudPayeePayablePriorPeriodManualCount: CodingArgs;
    /**
     * Code: ADPPSPELAT
     */
    AdjudPayeePayableSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADPPSPELCT
     */
    AdjudPayeePayableSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: ADPPSPMNAT
     */
    AdjudPayeePayableSamePeriodManualAmount: CodingArgs;
    /**
     * Code: ADPPSPMNCT
     */
    AdjudPayeePayableSamePeriodManualCount: CodingArgs;
    /**
     * Code: ADRFPPELAT
     */
    AdjudRefusedPriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADRFPPELCT
     */
    AdjudRefusedPriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: ADRFPPMNAT
     */
    AdjudRefusedPriorPeriodManualAmount: CodingArgs;
    /**
     * Code: ADRFPPMNCT
     */
    AdjudRefusedPriorPeriodManualCount: CodingArgs;
    /**
     * Code: ADRFSPELAT
     */
    AdjudRefusedSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: ADRFSPELCT
     */
    AdjudRefusedSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: ADRFSPMNAT
     */
    AdjudRefusedSamePeriodManualAmount: CodingArgs;
    /**
     * Code: ADRFSPMNCT
     */
    AdjudRefusedSamePeriodManualCount: CodingArgs;
    /**
     * Code: ADVERSE_REACTION
     */
    AdverseReaction: CodingArgs;
    /**
     * Code: AE
     */
    AmericanExpress: CodingArgs;
    /**
     * Code: AFOOT
     */
    PedestrianTransport: CodingArgs;
    /**
     * Code: AFTHRS
     */
    NonNormalHours: CodingArgs;
    /**
     * Code: AGE
     */
    AgeAlert: CodingArgs;
    /**
     * Code: AGGREGATE
     */
    AggregateMeasureObservation: CodingArgs;
    /**
     * Code: AHOC
     */
    AccreditedHomeCare: CodingArgs;
    /**
     * Code: AIRTRNS
     */
    AirborneTransmission: CodingArgs;
    /**
     * Code: ALC
     */
    AlternativeLevelOfCare: CodingArgs;
    /**
     * Code: ALEC
     */
    AlternateElectronic: CodingArgs;
    /**
     * Code: ALG
     */
    Allergy: CodingArgs;
    /**
     * Code: ALGY
     */
    AllergyAlert: CodingArgs;
    /**
     * Code: ALK
     */
    Alkalization: CodingArgs;
    /**
     * Code: ALLCAT
     */
    AllCategories: CodingArgs;
    /**
     * Code: ALLDONE
     */
    AlreadyPerformed: CodingArgs;
    /**
     * Code: ALLERLE
     */
    AllergyListEntry: CodingArgs;
    /**
     * Code: ALLERLREV
     */
    AllergyListReview: CodingArgs;
    /**
     * Code: ALLGCAT
     */
    AllergyCategory: CodingArgs;
    /**
     * Code: ALRTENDLATE
     */
    EndTooLateAlert: CodingArgs;
    /**
     * Code: ALRTSTRTLATE
     */
    StartTooLateAlert: CodingArgs;
    /**
     * Code: ALTC
     */
    AccreditedLongTermCare: CodingArgs;
    /**
     * Code: AMB
     */
    Ambulatory: CodingArgs;
    /**
     * Code: AMBAIR
     */
    FixedWingAmbulanceTransport: CodingArgs;
    /**
     * Code: AMBGRND
     */
    GroundAmbulanceTransport: CodingArgs;
    /**
     * Code: AMBHELO
     */
    HelicopterAmbulanceTransport: CodingArgs;
    /**
     * Code: AMBT
     */
    AmbulanceTransport: CodingArgs;
    /**
     * Code: Ambulance
     */
    AmbulanceTransportAmbulance: CodingArgs;
    /**
     * Code: ANANTRNS
     */
    AnimalToAnimalTransmission: CodingArgs;
    /**
     * Code: ANF
     */
    AdjudicatedWithAdjustmentsAndNoFinancialImpact: CodingArgs;
    /**
     * Code: ANHUMTRNS
     */
    AnimalToHumanTransmission: CodingArgs;
    /**
     * Code: ANNDI
     */
    DiagnosticImageNote: CodingArgs;
    /**
     * Code: ANNGEN
     */
    GeneralNote: CodingArgs;
    /**
     * Code: ANNIMM
     */
    ImmunizationNote: CodingArgs;
    /**
     * Code: ANNLAB
     */
    LaboratoryNote: CodingArgs;
    /**
     * Code: ANNMED
     */
    MedicationNote: CodingArgs;
    /**
     * Code: ANNU
     */
    AnnuityPolicy: CodingArgs;
    /**
     * Code: ANONY
     */
    Anonymize: CodingArgs;
    /**
     * Code: AOD
     */
    AccountingOfDisclosure: CodingArgs;
    /**
     * Code: AOSC
     */
    AccreditedOfficeBasedSurgeryCare: CodingArgs;
    /**
     * Code: AR
     */
    AdjudicatedAsRefused: CodingArgs;
    /**
     * Code: ARCAT
     */
    AdverseDrugReactionCategory: CodingArgs;
    /**
     * Code: ARTBLD
     */
    ActSpecObsArtBldCode: CodingArgs;
    /**
     * Code: AS
     */
    AdjudicatedAsSubmitted: CodingArgs;
    /**
     * Code: ASSERTION
     */
    Assertion: CodingArgs;
    /**
     * Code: AUDIT
     */
    Audit: CodingArgs;
    /**
     * Code: AUDTR
     */
    AuditTrail: CodingArgs;
    /**
     * Code: AUTH
     */
    Authorized: CodingArgs;
    /**
     * Code: AUTHPOL
     */
    AuthorizationPolicy: CodingArgs;
    /**
     * Code: AUTO
     */
    AutoRepeatPermission: CodingArgs;
    /**
     * Code: AUTO-HIGH
     */
    AutoHighDilution: CodingArgs;
    /**
     * Code: AUTO-LOW
     */
    AutoLowDilution: CodingArgs;
    /**
     * Code: AUTOATTCH
     */
    AutoAttachment: CodingArgs;
    /**
     * Code: AUTOPOL
     */
    Automobile: CodingArgs;
    /**
     * Code: AVAILABLE
     */
    AvailableVolume: CodingArgs;
    /**
     * Code: B
     */
    BusinessInformationSensitivity: CodingArgs;
    /**
     * Code: BDYFLDTRNS
     */
    BodyFluidContactTransmission: CodingArgs;
    /**
     * Code: BH
     */
    BehavioralHealthInformationSensitivity: CodingArgs;
    /**
     * Code: BLDTRNS
     */
    BloodBorneTransmission: CodingArgs;
    /**
     * Code: BLK
     */
    BlockFunding: CodingArgs;
    /**
     * Code: BONUS
     */
    Bonus: CodingArgs;
    /**
     * Code: BOOSTER
     */
    BoosterImmunization: CodingArgs;
    /**
     * Code: BR
     */
    BreikostGE: CodingArgs;
    /**
     * Code: BUS
     */
    BusinessConstraintViolation: CodingArgs;
    /**
     * Code: C
     */
    Corrected: CodingArgs;
    /**
     * Code: CACC
     */
    CertifiedAnatomicPathologyAndClinicalPathologyCare: CodingArgs;
    /**
     * Code: CACS
     */
    CertifiedAcuteCoronarySyndromeCare: CodingArgs;
    /**
     * Code: CAIC
     */
    CertifiedAllergyAndImmunologyCare: CodingArgs;
    /**
     * Code: CAMC
     */
    CertifiedAerospaceMedicineCare: CodingArgs;
    /**
     * Code: CAMI
     */
    CertifiedAcuteMyocardialInfarctionCare: CodingArgs;
    /**
     * Code: CANC
     */
    CertifiedAnesthesiologyCare: CodingArgs;
    /**
     * Code: CANCAPT
     */
    CancelledAppointment: CodingArgs;
    /**
     * Code: CANPRG
     */
    WomenQuoteSCancerDetectionProgram: CodingArgs;
    /**
     * Code: CAP
     */
    CapitationFunding: CodingArgs;
    /**
     * Code: CAPC
     */
    CertifiedAnatomicPathologyCare: CodingArgs;
    /**
     * Code: CARD
     */
    Cardiology: CodingArgs;
    /**
     * Code: CAREGAP
     */
    Caregap: CodingArgs;
    /**
     * Code: CARELIST
     */
    CarePlan: CodingArgs;
    /**
     * Code: CASESER
     */
    CaseSeriousnessCriteria: CodingArgs;
    /**
     * Code: CASH
     */
    Cash: CodingArgs;
    /**
     * Code: CAST
     */
    CertifiedAsthmaCare: CodingArgs;
    /**
     * Code: CBAR
     */
    CertifiedBariatricSurgeryCare: CodingArgs;
    /**
     * Code: CBGC
     */
    CertifiedClinicalBiochemicalGeneticsCare: CodingArgs;
    /**
     * Code: CC
     */
    CreditCardCC: CodingArgs;
    /**
     * Code: CCAD
     */
    CertifiedCoronaryArteryDiseaseCare: CodingArgs;
    /**
     * Code: CCAR
     */
    CertifiedCardiacCare: CodingArgs;
    /**
     * Code: CCCC
     */
    CertifiedClinicalCytogeneticsCare: CodingArgs;
    /**
     * Code: CCGC
     */
    CertifiedClinicalGeneticsMDCare: CodingArgs;
    /**
     * Code: CCPC
     */
    CertifiedClinicalPathologyCare: CodingArgs;
    /**
     * Code: CCSC
     */
    CertifiedColonAndRectalSurgeryCare: CodingArgs;
    /**
     * Code: CDEC
     */
    CertifiedDermatologyCare: CodingArgs;
    /**
     * Code: CDEP
     */
    CertifiedDepressionCare: CodingArgs;
    /**
     * Code: CDGD
     */
    CertifiedDigestiveGastrointestinalDisordersCare: CodingArgs;
    /**
     * Code: CDIA
     */
    CertifiedDiabetesCare: CodingArgs;
    /**
     * Code: CDIO
     */
    CaseDiseaseImportedObservation: CodingArgs;
    /**
     * Code: CDRC
     */
    CertifiedDiagnosticRadiologyCare: CodingArgs;
    /**
     * Code: CDSREV
     */
    ClinicalDecisionSupportInterventionReview: CodingArgs;
    /**
     * Code: CDSSCOMPT
     */
    CDSSystemCompartment: CodingArgs;
    /**
     * Code: CEL
     */
    CelebrityInformationSensitivity: CodingArgs;
    /**
     * Code: CEMC
     */
    CertifiedEmergencyMedicineCare: CodingArgs;
    /**
     * Code: CEPI
     */
    CertifiedEpilepsyCare: CodingArgs;
    /**
     * Code: CFEL
     */
    CertifiedFrailElderlyCare: CodingArgs;
    /**
     * Code: CFPC
     */
    CertifiedFamilyPracticeCare: CodingArgs;
    /**
     * Code: CFWD
     */
    CarryForwardAdjusment: CodingArgs;
    /**
     * Code: CHAR
     */
    CharityProgram: CodingArgs;
    /**
     * Code: CHFC
     */
    CertifiedHeartFailureCare: CodingArgs;
    /**
     * Code: CHK
     */
    Cheque: CodingArgs;
    /**
     * Code: CHLDCARE
     */
    DayCareChildCareInteraction: CodingArgs;
    /**
     * Code: CHR
     */
    Chronic: CodingArgs;
    /**
     * Code: CHRG
     */
    StandardCharge: CodingArgs;
    /**
     * Code: CHRO
     */
    CertifiedHighRiskObstetricsCare: CodingArgs;
    /**
     * Code: CHRON
     */
    ContinuousChronic: CodingArgs;
    /**
     * Code: CHYP
     */
    CertifiedHyperlipidemiaCare: CodingArgs;
    /**
     * Code: CIMC
     */
    CertifiedInternalMedicineCare: CodingArgs;
    /**
     * Code: CIRCLE
     */
    Circle: CodingArgs;
    /**
     * Code: CLINNOTEE
     */
    ClinicalNoteEntryTask: CodingArgs;
    /**
     * Code: CLINNOTEREV
     */
    ClinicalNoteReviewTask: CodingArgs;
    /**
     * Code: CLSSRM
     */
    Classroom: CodingArgs;
    /**
     * Code: CMGC
     */
    CertifiedClinicalMolecularGeneticsCare: CodingArgs;
    /**
     * Code: CMIH
     */
    CertifiedMigraineHeadacheCare: CodingArgs;
    /**
     * Code: CMPMSRMTH
     */
    CompositeMeasureMethod: CodingArgs;
    /**
     * Code: CMPMSRSCRWGHT
     */
    ComponentMeasureScoringWeight: CodingArgs;
    /**
     * Code: CMSC
     */
    CertifiedMultipleSclerosisCare: CodingArgs;
    /**
     * Code: CNEC
     */
    CertifiedNeurologyCare: CodingArgs;
    /**
     * Code: CNMC
     */
    CertifiedNuclearMedicineCare: CodingArgs;
    /**
     * Code: CNQC
     */
    CertifiedNeurologyWithSpecialQualificationsInChildNeurologyCare: CodingArgs;
    /**
     * Code: CNSC
     */
    CertifiedNeurologicalSurgeryCare: CodingArgs;
    /**
     * Code: COBSCAT
     */
    CommonObservationCategory: CodingArgs;
    /**
     * Code: CODE_DEPREC
     */
    CodeHasBeenDeprecated: CodingArgs;
    /**
     * Code: CODE_INVAL
     */
    CodeIsNotValid: CodingArgs;
    /**
     * Code: COGC
     */
    CertifiedObstetricsAndGynecologyCare: CodingArgs;
    /**
     * Code: COGN
     */
    CognitiveDisabilityInformationSensitivity: CodingArgs;
    /**
     * Code: COIN
     */
    Coinsurance: CodingArgs;
    /**
     * Code: COINS
     */
    CoInsurance: CodingArgs;
    /**
     * Code: COJR
     */
    CertifiedOrthopedicJointReplacementCare: CodingArgs;
    /**
     * Code: COL
     */
    CollisionCoveragePolicy: CodingArgs;
    /**
     * Code: COMC
     */
    CertifiedOccupationalMedicineCare: CodingArgs;
    /**
     * Code: CommonRule
     */
    CommonRule: CodingArgs;
    /**
     * Code: COMPLY
     */
    ComplianceAlert: CodingArgs;
    /**
     * Code: CompoundResearchCD
     */
    CompoundHIPAAResearchAuthorizationAndInformedConsentForResearch: CodingArgs;
    /**
     * Code: COMPT
     */
    Compartment: CodingArgs;
    /**
     * Code: CONC
     */
    CertifiedOncologyCare: CodingArgs;
    /**
     * Code: COND
     */
    ConditionAlert: CodingArgs;
    /**
     * Code: CONDLIST
     */
    ConditionList: CodingArgs;
    /**
     * Code: ConfidentialMark
     */
    ConfidentialMark: CodingArgs;
    /**
     * Code: CONSUMPTION
     */
    ConsumptionVolume: CodingArgs;
    /**
     * Code: CONT
     */
    Contract: CodingArgs;
    /**
     * Code: CONTF
     */
    ContractFunding: CodingArgs;
    /**
     * Code: CONTROLLED
     */
    CONTROLLED: CodingArgs;
    /**
     * Code: ControlledUnclassifiedInformation
     */
    ControlledUnclassifiedInformation: CodingArgs;
    /**
     * Code: CONVEYNC
     */
    CommonConveyanceInteraction: CodingArgs;
    /**
     * Code: COPAY
     */
    COPAY: CodingArgs;
    /**
     * Code: COPAYMENT
     */
    PatientCoPay: CodingArgs;
    /**
     * Code: COPC
     */
    CertifiedOphthalmologyCare: CodingArgs;
    /**
     * Code: COPD
     */
    CertifiedChronicObstructivePulmonaryDiseaseCare: CodingArgs;
    /**
     * Code: COPY
     */
    Copyright: CodingArgs;
    /**
     * Code: COPYMark
     */
    CopyOfOriginalMark: CodingArgs;
    /**
     * Code: CORT
     */
    CertifiedOrganTransplantCare: CodingArgs;
    /**
     * Code: COSC
     */
    CertifiedOrthopaedicSurgeryCare: CodingArgs;
    /**
     * Code: COTC
     */
    CertifiedOtolaryngologyCare: CodingArgs;
    /**
     * Code: COVGE
     */
    CoverageProblem: CodingArgs;
    /**
     * Code: COVMX
     */
    CoverageMaximum: CodingArgs;
    /**
     * Code: COVPOL
     */
    BenefitPolicy: CodingArgs;
    /**
     * Code: COVPRD
     */
    CoveragePeriod: CodingArgs;
    /**
     * Code: CP
     */
    ClinicalProductInvoice: CodingArgs;
    /**
     * Code: CPAD
     */
    CertifiedParkinsonsDiseaseCare: CodingArgs;
    /**
     * Code: CPEC
     */
    CertifiedPediatricsCare: CodingArgs;
    /**
     * Code: CPGC
     */
    CertifiedPhDMedicalGeneticsCare: CodingArgs;
    /**
     * Code: CPHC
     */
    CertifiedPublicHealthAndGeneralPreventiveMedicineCare: CodingArgs;
    /**
     * Code: CPINV
     */
    ClinicalProductInvoiceCPINV: CodingArgs;
    /**
     * Code: CPLYCC
     */
    ComplyWithConfidentialityCode: CodingArgs;
    /**
     * Code: CPLYCD
     */
    ComplyWithConsentDirective: CodingArgs;
    /**
     * Code: CPLYCUI
     */
    ComplyWithControlledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: CPLYJPP
     */
    ComplyWithJurisdictionalPrivacyPolicy: CodingArgs;
    /**
     * Code: CPLYJSP
     */
    ComplyWithJurisdictionalSecurityPolicy: CodingArgs;
    /**
     * Code: CPLYOPP
     */
    ComplyWithOrganizationalPrivacyPolicy: CodingArgs;
    /**
     * Code: CPLYOSP
     */
    ComplyWithOrganizationalSecurityPolicy: CodingArgs;
    /**
     * Code: CPLYPOL
     */
    ComplyWithPolicy: CodingArgs;
    /**
     * Code: CPND
     */
    CertifiedPneumoniaDiseaseCare: CodingArgs;
    /**
     * Code: CPNDDRGING
     */
    CompoundDrugInvoiceGroup: CodingArgs;
    /**
     * Code: CPNDINDING
     */
    CompoundIngredientInvoiceGroup: CodingArgs;
    /**
     * Code: CPNDSUPING
     */
    CompoundSupplyInvoiceGroup: CodingArgs;
    /**
     * Code: CPRC
     */
    CertifiedPhysicalMedicineAndRehabilitationCare: CodingArgs;
    /**
     * Code: CPSC
     */
    CertifiedPlasticSurgeryCare: CodingArgs;
    /**
     * Code: CPST
     */
    CertifiedPrimaryStrokeCenterCare: CodingArgs;
    /**
     * Code: CPTM
     */
    CPTModifierCodes: CodingArgs;
    /**
     * Code: CPYC
     */
    CertifiedPsychiatryCare: CodingArgs;
    /**
     * Code: CREACT
     */
    CommonReactionAlert: CodingArgs;
    /**
     * Code: CRIME
     */
    CrimeVictimProgram: CodingArgs;
    /**
     * Code: CRIT
     */
    Criticality: CodingArgs;
    /**
     * Code: CROC
     */
    CertifiedRadiationOncologyCare: CodingArgs;
    /**
     * Code: CRPC
     */
    CertifiedRadiologicalPhysicsCare: CodingArgs;
    /**
     * Code: CRS
     */
    ClinicalRecommendationStatement: CodingArgs;
    /**
     * Code: CS
     */
    ClinicalServiceInvoice: CodingArgs;
    /**
     * Code: CSDM
     */
    CertifiedStrokeDiseaseManagementCare: CodingArgs;
    /**
     * Code: CSIC
     */
    CertifiedSickleCellCare: CodingArgs;
    /**
     * Code: CSINV
     */
    ClinicalServiceInvoiceCSINV: CodingArgs;
    /**
     * Code: CSLD
     */
    CertifiedSleepDisordersCare: CodingArgs;
    /**
     * Code: CSPINV
     */
    ClinicalServiceAndProduct: CodingArgs;
    /**
     * Code: CSPT
     */
    CertifiedSpineTreatmentCare: CodingArgs;
    /**
     * Code: CSUC
     */
    CertifiedSurgeryCare: CodingArgs;
    /**
     * Code: CTBU
     */
    CertifiedTraumaBurnCenterCare: CodingArgs;
    /**
     * Code: CTCOMPT
     */
    CareTeamCompartment: CodingArgs;
    /**
     * Code: CTLSUB
     */
    ControlledSubstance: CodingArgs;
    /**
     * Code: CTMO
     */
    CaseTransmissionModeObservation: CodingArgs;
    /**
     * Code: CTSC
     */
    CertifiedThoracicSurgeryCare: CodingArgs;
    /**
     * Code: CUI
     */
    CUI: CodingArgs;
    /**
     * Code: CUIHLTH
     */
    CUIHLTH: CodingArgs;
    /**
     * Code: CUIHLTHP
     */
    CUIHLTHCUIHLTHP: CodingArgs;
    /**
     * Code: CUIMark
     */
    CUIMark: CodingArgs;
    /**
     * Code: CUIP
     */
    CUICUIP: CodingArgs;
    /**
     * Code: CUIPRVCY
     */
    CUIPRVCY: CodingArgs;
    /**
     * Code: CUIPRVCYP
     */
    CUIPRVCYCUIPRVCYP: CodingArgs;
    /**
     * Code: CUISP-HLTH
     */
    CUISPHLTH: CodingArgs;
    /**
     * Code: CUISP-HLTHP
     */
    CUISPHLTHCUISPHLTHP: CodingArgs;
    /**
     * Code: CUISP-PRVCY
     */
    CUISPPRVCY: CodingArgs;
    /**
     * Code: CUISP-PRVCYP
     */
    CUISPPRVCYCUISPPRVCYP: CodingArgs;
    /**
     * Code: CURC
     */
    CertifiedUrologyCare: CodingArgs;
    /**
     * Code: CURMEDLIST
     */
    CurrentMedicationList: CodingArgs;
    /**
     * Code: CURRENT
     */
    CurrentVolume: CodingArgs;
    /**
     * Code: CVDC
     */
    CertifiedVascularDiseasesCare: CodingArgs;
    /**
     * Code: CVSC
     */
    CertifiedVascularSurgeryCare: CodingArgs;
    /**
     * Code: CWMA
     */
    CertifiedWoundManagementCare: CodingArgs;
    /**
     * Code: CWOH
     */
    CertifiedWomenQuoteSHealthCare: CodingArgs;
    /**
     * Code: DACT
     */
    DrugActionDetectedIssue: CodingArgs;
    /**
     * Code: DALG
     */
    DrugAllergy: CodingArgs;
    /**
     * Code: DAY
     */
    Day: CodingArgs;
    /**
     * Code: DDP
     */
    DirectDeposit: CodingArgs;
    /**
     * Code: DECLASSIFYLABEL
     */
    DeclassifySecurityLabel: CodingArgs;
    /**
     * Code: DEDUCT
     */
    DEDUCT: CodingArgs;
    /**
     * Code: DEDUCTIBLE
     */
    Deductible: CodingArgs;
    /**
     * Code: DEF
     */
    Definition: CodingArgs;
    /**
     * Code: DEFB
     */
    Defibrination: CodingArgs;
    /**
     * Code: DEID
     */
    Deidentify: CodingArgs;
    /**
     * Code: DELAU
     */
    DeleteAfterUse: CodingArgs;
    /**
     * Code: DELEPOL
     */
    DelegationPolicy: CodingArgs;
    /**
     * Code: DeliverToAddresseeOnlyMark
     */
    DeliverOnlyToAddresseeMark: CodingArgs;
    /**
     * Code: DEMO
     */
    AllDemographicInformationSensitivity: CodingArgs;
    /**
     * Code: DEMOCAT
     */
    DemographicsCategory: CodingArgs;
    /**
     * Code: DENEX
     */
    DenominatorExclusions: CodingArgs;
    /**
     * Code: DENEXCEP
     */
    DenominatorExceptions: CodingArgs;
    /**
     * Code: DENOM
     */
    Denominator: CodingArgs;
    /**
     * Code: DENTAL
     */
    DentalCarePolicy: CodingArgs;
    /**
     * Code: DENTPRG
     */
    DentalProgram: CodingArgs;
    /**
     * Code: DERMTRNS
     */
    TransdermalTransmission: CodingArgs;
    /**
     * Code: DF
     */
    DailyFill: CodingArgs;
    /**
     * Code: DIA
     */
    DiagnosisInformationSensitivity: CodingArgs;
    /**
     * Code: DIAGLISTE
     */
    DiagnosisListEntryTask: CodingArgs;
    /**
     * Code: DIAGLISTREV
     */
    DiagnosisListReviewTask: CodingArgs;
    /**
     * Code: DICAT
     */
    DiagnosticImageCategory: CodingArgs;
    /**
     * Code: DIET
     */
    Diet: CodingArgs;
    /**
     * Code: DILUTION
     */
    ActSpecObsDilutionCode: CodingArgs;
    /**
     * Code: DINT
     */
    DrugIntolerance: CodingArgs;
    /**
     * Code: DIS
     */
    DisabilityInsurancePolicy: CodingArgs;
    /**
     * Code: DISC
     */
    Disclaimer: CodingArgs;
    /**
     * Code: DISCHINSTE
     */
    DischargeInstructionEntry: CodingArgs;
    /**
     * Code: DISCHSUME
     */
    DischargeSummaryEntryTask: CodingArgs;
    /**
     * Code: DISCHSUMREV
     */
    DischargeSummaryReviewTask: CodingArgs;
    /**
     * Code: DISCMEDLIST
     */
    DischargeMedicationList: CodingArgs;
    /**
     * Code: DISDX
     */
    DischargeDiagnosis: CodingArgs;
    /**
     * Code: DISEASE
     */
    DiseaseSpecificPolicy: CodingArgs;
    /**
     * Code: DISEASEPRG
     */
    PublicHealthProgram: CodingArgs;
    /**
     * Code: DISPLAY
     */
    Display: CodingArgs;
    /**
     * Code: DM
     */
    DiabetesMellitusDiet: CodingArgs;
    /**
     * Code: DN
     */
    DinerQuoteSClub: CodingArgs;
    /**
     * Code: DNAINT
     */
    DrugNonAllergyIntolerance: CodingArgs;
    /**
     * Code: DNTL
     */
    Dental: CodingArgs;
    /**
     * Code: DOB
     */
    DateOfBirthInformationSensitivity: CodingArgs;
    /**
     * Code: DOCUMENT
     */
    Document: CodingArgs;
    /**
     * Code: DOSE
     */
    DosageProblem: CodingArgs;
    /**
     * Code: DOSECOND
     */
    DosageConditionAlert: CodingArgs;
    /**
     * Code: DOSEDUR
     */
    DoseDurationAlert: CodingArgs;
    /**
     * Code: DOSEDURH
     */
    DoseDurationHighAlert: CodingArgs;
    /**
     * Code: DOSEDURHIND
     */
    DoseDurationHighForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEDURL
     */
    DoseDurationLowAlert: CodingArgs;
    /**
     * Code: DOSEDURLIND
     */
    DoseDurationLowForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEH
     */
    HighDoseAlert: CodingArgs;
    /**
     * Code: DOSEHIND
     */
    HighDoseForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEHINDA
     */
    HighDoseForAgeAlert: CodingArgs;
    /**
     * Code: DOSEHINDSA
     */
    HighDoseForHeightSurfaceAreaAlert: CodingArgs;
    /**
     * Code: DOSEHINDW
     */
    HighDoseForWeightAlert: CodingArgs;
    /**
     * Code: DOSEIND
     */
    DOSEIND: CodingArgs;
    /**
     * Code: DOSEIVL
     */
    DoseIntervalAlert: CodingArgs;
    /**
     * Code: DOSEIVLIND
     */
    DoseIntervalForIndicationAlert: CodingArgs;
    /**
     * Code: DOSEL
     */
    LowDoseAlert: CodingArgs;
    /**
     * Code: DOSELIND
     */
    LowDoseForIndicationAlert: CodingArgs;
    /**
     * Code: DOSELINDA
     */
    LowDoseForAgeAlert: CodingArgs;
    /**
     * Code: DOSELINDSA
     */
    LowDoseForHeightSurfaceAreaAlert: CodingArgs;
    /**
     * Code: DOSELINDW
     */
    LowDoseForWeightAlert: CodingArgs;
    /**
     * Code: DOWNGRDLABEL
     */
    DowngradeSecurityLabel: CodingArgs;
    /**
     * Code: DRAFTMark
     */
    DraftMark: CodingArgs;
    /**
     * Code: DRG
     */
    DrugInteractionAlert: CodingArgs;
    /**
     * Code: DRGIS
     */
    DrugInformationSensitivity: CodingArgs;
    /**
     * Code: DRGRHB
     */
    DrugRehab: CodingArgs;
    /**
     * Code: DRIVLABEL
     */
    DeriveSecurityLabel: CodingArgs;
    /**
     * Code: DRUG
     */
    DrugTherapy: CodingArgs;
    /**
     * Code: DRUGING
     */
    DrugInvoiceGroup: CodingArgs;
    /**
     * Code: DRUGPOL
     */
    DrugPolicy: CodingArgs;
    /**
     * Code: DRUGPRG
     */
    DrugProgram: CodingArgs;
    /**
     * Code: DSC
     */
    Discount: CodingArgs;
    /**
     * Code: DUPTHPCLS
     */
    DuplicateTherapeuticAlassAlert: CodingArgs;
    /**
     * Code: DUPTHPGEN
     */
    DuplicateGenericAlert: CodingArgs;
    /**
     * Code: DUPTHPY
     */
    DuplicateTherapyAlert: CodingArgs;
    /**
     * Code: DV
     */
    DiscoverCard: CodingArgs;
    /**
     * Code: DVD
     */
    DevelopmentalDisabilityInformationSensitivity: CodingArgs;
    /**
     * Code: DX
     */
    ObservationDiagnosisTypesDX: CodingArgs;
    /**
     * Code: EALG
     */
    EnvironmentalAllergy: CodingArgs;
    /**
     * Code: EAP
     */
    EmployeeAssistanceProgram: CodingArgs;
    /**
     * Code: EDU
     */
    EducationFees: CodingArgs;
    /**
     * Code: EFORM
     */
    ElectronicFormToFollow: CodingArgs;
    /**
     * Code: EHCPOL
     */
    ExtendedHealthcare: CodingArgs;
    /**
     * Code: EINT
     */
    EnvironmentalIntolerance: CodingArgs;
    /**
     * Code: ELG
     */
    Eligible: CodingArgs;
    /**
     * Code: ELLIPSE
     */
    Ellipse: CodingArgs;
    /**
     * Code: EM
     */
    EmergencySupply: CodingArgs;
    /**
     * Code: EMAUTH
     */
    EmergencyAuthorizationOverride: CodingArgs;
    /**
     * Code: EMER
     */
    Emergency: CodingArgs;
    /**
     * Code: EMOTDIS
     */
    EmotionalDisturbanceInformationSensitivity: CodingArgs;
    /**
     * Code: EMP
     */
    EmployeeInformationSensitivity: CodingArgs;
    /**
     * Code: EMPL
     */
    EmployerInformationSensitivity: CodingArgs;
    /**
     * Code: EMRGONLY
     */
    EmergencyOnly: CodingArgs;
    /**
     * Code: ENAINT
     */
    EnvironmentalNonAllergyIntolerance: CodingArgs;
    /**
     * Code: ENCRYPT
     */
    Encrypt: CodingArgs;
    /**
     * Code: ENCRYPTR
     */
    EncryptAtRest: CodingArgs;
    /**
     * Code: ENCRYPTT
     */
    EncryptInTransit: CodingArgs;
    /**
     * Code: ENCRYPTU
     */
    EncryptInUse: CodingArgs;
    /**
     * Code: ENDC
     */
    EndogenousContent: CodingArgs;
    /**
     * Code: ENDLATE
     */
    EndTooLateAlertENDLATE: CodingArgs;
    /**
     * Code: ENDRENAL
     */
    EndRenalProgram: CodingArgs;
    /**
     * Code: ENVTRNS
     */
    EnvironmentalExposureTransmission: CodingArgs;
    /**
     * Code: EPYMT
     */
    EarlyPaymentFee: CodingArgs;
    /**
     * Code: ESA
     */
    ExtraordinaryServiceAssessment: CodingArgs;
    /**
     * Code: ETH
     */
    SubstanceAbuseInformationSensitivity: CodingArgs;
    /**
     * Code: ETHUD
     */
    AlcoholUseDisorderInformationSensitivity: CodingArgs;
    /**
     * Code: EVNFCTS
     */
    ActSpecObsEvntfctsCode: CodingArgs;
    /**
     * Code: EWB
     */
    EmployeeWelfareBenefitPlanPolicy: CodingArgs;
    /**
     * Code: F
     */
    Final: CodingArgs;
    /**
     * Code: FALG
     */
    FoodAllergy: CodingArgs;
    /**
     * Code: FALLRISK
     */
    FallsRiskAssessmentInstrumentTask: CodingArgs;
    /**
     * Code: FAST
     */
    Fasting: CodingArgs;
    /**
     * Code: FAX
     */
    FaxToFollow: CodingArgs;
    /**
     * Code: FD
     */
    Food: CodingArgs;
    /**
     * Code: FDACOATING
     */
    Coating: CodingArgs;
    /**
     * Code: FDACOLOR
     */
    Color: CodingArgs;
    /**
     * Code: FDAIMPRINTCD
     */
    ImprintCode: CodingArgs;
    /**
     * Code: FDALOGO
     */
    Logo: CodingArgs;
    /**
     * Code: FDASCORING
     */
    Scoring: CodingArgs;
    /**
     * Code: FDASHAPE
     */
    Shape: CodingArgs;
    /**
     * Code: FDASIZE
     */
    Size: CodingArgs;
    /**
     * Code: FECTRNS
     */
    FecalOralTransmission: CodingArgs;
    /**
     * Code: FF
     */
    FirstFill: CodingArgs;
    /**
     * Code: FFC
     */
    FirstFillComplete: CodingArgs;
    /**
     * Code: FFCS
     */
    FirstFillCompletePartialStrength: CodingArgs;
    /**
     * Code: FFP
     */
    FirstFillPartFill: CodingArgs;
    /**
     * Code: FFPS
     */
    FirstFillPartFillPartialStrength: CodingArgs;
    /**
     * Code: FFS
     */
    FeeForService: CodingArgs;
    /**
     * Code: FFSS
     */
    FirstFillPartialStrength: CodingArgs;
    /**
     * Code: FFSTOP
     */
    FeeForServiceTopOff: CodingArgs;
    /**
     * Code: FIBRIN
     */
    Fibrin: CodingArgs;
    /**
     * Code: FILT
     */
    Filtration: CodingArgs;
    /**
     * Code: FINALDT
     */
    FinalizedDateTime: CodingArgs;
    /**
     * Code: FINBILL
     */
    Financial: CodingArgs;
    /**
     * Code: FININV
     */
    FinancialInvoice: CodingArgs;
    /**
     * Code: FINT
     */
    FoodIntolerance: CodingArgs;
    /**
     * Code: Fixed-wingAmbulance
     */
    FixedWingAmbulanceTransportFixedWingAmbulance: CodingArgs;
    /**
     * Code: FLD
     */
    Field: CodingArgs;
    /**
     * Code: FLEXP
     */
    FlexibleBenefitPlanPolicy: CodingArgs;
    /**
     * Code: FMCOMPT
     */
    FinancialManagementCompartment: CodingArgs;
    /**
     * Code: FNAINT
     */
    FoodNonAllergyIntolerance: CodingArgs;
    /**
     * Code: FNLFEE
     */
    FinalFee: CodingArgs;
    /**
     * Code: FOMTRNS
     */
    FomiteTransmission: CodingArgs;
    /**
     * Code: FOOD
     */
    FoodInteractionAlert: CodingArgs;
    /**
     * Code: FOODTRNS
     */
    FoodBorneTransmission: CodingArgs;
    /**
     * Code: FORM
     */
    PrintOnForm: CodingArgs;
    /**
     * Code: FORMAT
     */
    InvalidFormat: CodingArgs;
    /**
     * Code: FORMULA
     */
    FormulaDiet: CodingArgs;
    /**
     * Code: FRAMEING
     */
    FrameInvoiceGroup: CodingArgs;
    /**
     * Code: FRAUD
     */
    PotentialFraud: CodingArgs;
    /**
     * Code: FRSTFEE
     */
    FirstFee: CodingArgs;
    /**
     * Code: FS
     */
    FloorStock: CodingArgs;
    /**
     * Code: FST
     */
    FederalSalesTax: CodingArgs;
    /**
     * Code: FULFIL
     */
    FulfillmentAlert: CodingArgs;
    /**
     * Code: GARN
     */
    Garnishee: CodingArgs;
    /**
     * Code: GDIS
     */
    GeneticDiseaseInformationSensitivity: CodingArgs;
    /**
     * Code: GDPRCD
     */
    GDPRConsentDirective: CodingArgs;
    /**
     * Code: GDPRCONSENT
     */
    GDPRConsent: CodingArgs;
    /**
     * Code: GDPRResearchCD
     */
    GDPRResearchConsentDirective: CodingArgs;
    /**
     * Code: GEALRT
     */
    GeriatricAlert: CodingArgs;
    /**
     * Code: GEN
     */
    GeneticAlert: CodingArgs;
    /**
     * Code: GEND
     */
    GenderAlert: CodingArgs;
    /**
     * Code: GENDER
     */
    GenderAndSexualOrientationInformationSensitivity: CodingArgs;
    /**
     * Code: GENE
     */
    Gene: CodingArgs;
    /**
     * Code: GENRL
     */
    General: CodingArgs;
    /**
     * Code: GF
     */
    GlutenFree: CodingArgs;
    /**
     * Code: GFTH
     */
    GoodFaithIndicator: CodingArgs;
    /**
     * Code: GISTIER
     */
    GISTier: CodingArgs;
    /**
     * Code: GOALLIST
     */
    GoalList: CodingArgs;
    /**
     * Code: GOVEMP
     */
    GovernmentEmployeeHealthProgram: CodingArgs;
    /**
     * Code: GRADE
     */
    Grade: CodingArgs;
    /**
     * Code: GRANTORCHOICE
     */
    GrantorChoice: CodingArgs;
    /**
     * Code: GroundAmbulance
     */
    GroundAmbulanceTransportGroundAmbulance: CodingArgs;
    /**
     * Code: GTIN
     */
    GlobalTradeItemNumber: CodingArgs;
    /**
     * Code: GUIDE
     */
    Guidance: CodingArgs;
    /**
     * Code: HCPCSA
     */
    HCPCSLevelIIAndCarrierAssigned: CodingArgs;
    /**
     * Code: HEALTHREC
     */
    HealthRecord: CodingArgs;
    /**
     * Code: HELD
     */
    HeldSuspendedAlert: CodingArgs;
    /**
     * Code: HelicopterAmbulance
     */
    HelicopterAmbulanceTransportHelicopterAmbulance: CodingArgs;
    /**
     * Code: HEMOLYSIS
     */
    Hemolysis: CodingArgs;
    /**
     * Code: HGHT
     */
    HGHT: CodingArgs;
    /**
     * Code: HH
     */
    HomeHealth: CodingArgs;
    /**
     * Code: HHOBS
     */
    HouseholdSituationObservation: CodingArgs;
    /**
     * Code: HIP
     */
    HealthInsurancePlanPolicy: CodingArgs;
    /**
     * Code: HIPAAAuth
     */
    HIPAAAuthorizationForDisclosure: CodingArgs;
    /**
     * Code: HIPAAAuthCD
     */
    HIPAAAuthorizationConsentDirective: CodingArgs;
    /**
     * Code: HIPAAConsent
     */
    HIPAAConsentHIPAAConsent: CodingArgs;
    /**
     * Code: HIPAAConsentCD
     */
    HIPAAConsentDirective: CodingArgs;
    /**
     * Code: HIPAANOPP
     */
    HIPAANoticeOfPrivacyPractices: CodingArgs;
    /**
     * Code: HIPAAPsyNotes
     */
    HIPAAPsychotherapyNotes: CodingArgs;
    /**
     * Code: HIPAAResearchAuthCD
     */
    HIPAAAuthorizationForDisclosureForResearchConsentDirective: CodingArgs;
    /**
     * Code: HIPAAROA
     */
    HIPAARightOfAccess: CodingArgs;
    /**
     * Code: HIPAAROAD
     */
    HIPAARightOfAccessDirective: CodingArgs;
    /**
     * Code: HIPAASelfPay
     */
    HIPAASelfPay: CodingArgs;
    /**
     * Code: HIRISK
     */
    HighRiskPoolProgram: CodingArgs;
    /**
     * Code: HISTMEDLIST
     */
    MedicationHistory: CodingArgs;
    /**
     * Code: HISTORIC
     */
    RecordRecordedAsHistorical: CodingArgs;
    /**
     * Code: HIV
     */
    HIVAIDSInformationSensitivity: CodingArgs;
    /**
     * Code: HIVAIDS
     */
    HIVAIDSProgram: CodingArgs;
    /**
     * Code: HLTHCARE
     */
    HealthCareInteractionNotPatientCare: CodingArgs;
    /**
     * Code: HMO
     */
    HealthMaintenanceOrganizationPolicy: CodingArgs;
    /**
     * Code: HOMECARE
     */
    CareGiverInteraction: CodingArgs;
    /**
     * Code: HOSPPTNT
     */
    HospitalPatientInteraction: CodingArgs;
    /**
     * Code: HOSPVSTR
     */
    HospitalVisitorInteraction: CodingArgs;
    /**
     * Code: HOUSEHLD
     */
    HouseholdInteraction: CodingArgs;
    /**
     * Code: HRCOMPT
     */
    HumanResourceCompartment: CodingArgs;
    /**
     * Code: HSAPOL
     */
    HealthSpendingAccount: CodingArgs;
    /**
     * Code: HST
     */
    HarmonizedSalesTax: CodingArgs;
    /**
     * Code: HUAPRV
     */
    HumanApproval: CodingArgs;
    /**
     * Code: HUMHUMTRNS
     */
    HumanToHumanTransmission: CodingArgs;
    /**
     * Code: I
     */
    Isolation: CodingArgs;
    /**
     * Code: ICOL
     */
    InformationCollection: CodingArgs;
    /**
     * Code: ICTERUS
     */
    Icterus: CodingArgs;
    /**
     * Code: ID
     */
    Identified: CodingArgs;
    /**
     * Code: IDS
     */
    IdentifierSensitivity: CodingArgs;
    /**
     * Code: IDSCL
     */
    InformationDisclosure: CodingArgs;
    /**
     * Code: IDUR
     */
    ImprovementNotation: CodingArgs;
    /**
     * Code: ILLEGAL
     */
    Illegal: CodingArgs;
    /**
     * Code: IMG
     */
    ImageAttachment: CodingArgs;
    /**
     * Code: IMMLE
     */
    ImmunizationListEntry: CodingArgs;
    /**
     * Code: IMMLREV
     */
    ImmunizationListReview: CodingArgs;
    /**
     * Code: IMMUCAT
     */
    ImmunizationCategory: CodingArgs;
    /**
     * Code: IMMUNIZ
     */
    Immunization: CodingArgs;
    /**
     * Code: IMP
     */
    InpatientEncounter: CodingArgs;
    /**
     * Code: IMPLIED
     */
    ImpliedConsent: CodingArgs;
    /**
     * Code: IMPLIEDD
     */
    ImpliedConsentWithOpportunityToDissent: CodingArgs;
    /**
     * Code: IND
     */
    IndigenousPeoplesHealthProgram: CodingArgs;
    /**
     * Code: IND01
     */
    ImagingStudyRequiringContrast: CodingArgs;
    /**
     * Code: IND02
     */
    ColonoscopyPrep: CodingArgs;
    /**
     * Code: IND03
     */
    Prophylaxis: CodingArgs;
    /**
     * Code: IND04
     */
    SurgicalProphylaxis: CodingArgs;
    /**
     * Code: IND05
     */
    PregnancyProphylaxis: CodingArgs;
    /**
     * Code: INDTRNS
     */
    IndeterminateDiseaseTransmissionMode: CodingArgs;
    /**
     * Code: INFA
     */
    InformationAccess: CodingArgs;
    /**
     * Code: INFAO
     */
    AccessOnly: CodingArgs;
    /**
     * Code: INFASO
     */
    AccessAndSaveOnly: CodingArgs;
    /**
     * Code: INFAUT
     */
    AuthorizedInformationTransfer: CodingArgs;
    /**
     * Code: INFCON
     */
    AfterExplicitConsent: CodingArgs;
    /**
     * Code: INFCRT
     */
    OnlyOnCourtOrder: CodingArgs;
    /**
     * Code: INFDNG
     */
    OnlyIfDangerToOthers: CodingArgs;
    /**
     * Code: INFEMER
     */
    OnlyInAnEmergency: CodingArgs;
    /**
     * Code: INFOACCESS
     */
    AccessInformation: CodingArgs;
    /**
     * Code: INFOCOLLECT
     */
    CollectInformation: CodingArgs;
    /**
     * Code: INFODEIDENTIFIY
     */
    DeidentifyInformation: CodingArgs;
    /**
     * Code: INFODISCLOSE
     */
    DiscloseInformation: CodingArgs;
    /**
     * Code: INFOMASK
     */
    MaskInformation: CodingArgs;
    /**
     * Code: INFOREADONLY
     */
    ReadOnlyInformation: CodingArgs;
    /**
     * Code: INFOREDACT
     */
    RedactInformation: CodingArgs;
    /**
     * Code: INFOREDISCLOSE
     */
    RediscloseInformation: CodingArgs;
    /**
     * Code: INFOREIDENTIFY
     */
    ReidentifyInformation: CodingArgs;
    /**
     * Code: INFOUSE
     */
    UseInformation: CodingArgs;
    /**
     * Code: INFPWR
     */
    OnlyIfPublicWelfareRisk: CodingArgs;
    /**
     * Code: INFREG
     */
    RegulatoryInformationTransfer: CodingArgs;
    /**
     * Code: INITIAL
     */
    InitialVolume: CodingArgs;
    /**
     * Code: INITIMMUNIZ
     */
    InitialImmunization: CodingArgs;
    /**
     * Code: INMATE
     */
    InmateInteraction: CodingArgs;
    /**
     * Code: INT
     */
    IntoleranceAlert: CodingArgs;
    /**
     * Code: INTDX
     */
    IntermediateDiagnosis: CodingArgs;
    /**
     * Code: INTERVAL
     */
    OutsideRequestedTime: CodingArgs;
    /**
     * Code: INTFR
     */
    ActSpecObsInterferenceCode: CodingArgs;
    /**
     * Code: INTIMATE
     */
    IntimateInteraction: CodingArgs;
    /**
     * Code: INTOLIST
     */
    IntoleranceList: CodingArgs;
    /**
     * Code: INV
     */
    Investigational: CodingArgs;
    /**
     * Code: INVOICE
     */
    SubmittedInvoice: CodingArgs;
    /**
     * Code: INVTYPE
     */
    InvoiceType: CodingArgs;
    /**
     * Code: IP
     */
    InPosition: CodingArgs;
    /**
     * Code: IPOP
     */
    InitialPopulation: CodingArgs;
    /**
     * Code: IPPOP
     */
    InitialPatientPopulation: CodingArgs;
    /**
     * Code: IRDSCL
     */
    InformationRedisclosure: CodingArgs;
    /**
     * Code: ISOL
     */
    IsolationAllowance: CodingArgs;
    /**
     * Code: ISSUE
     */
    DetectedIssue: CodingArgs;
    /**
     * Code: ITMCNT
     */
    ItemsCounted: CodingArgs;
    /**
     * Code: JurisCUI
     */
    JurisdictionalControlledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: JurisDEID
     */
    JurisdictionalDeIdentifiedInformationPolicy: CodingArgs;
    /**
     * Code: JurisIP
     */
    JurisdictionalInformationPolicy: CodingArgs;
    /**
     * Code: JurisLDS
     */
    JurisdictionalLimitedDataSet: CodingArgs;
    /**
     * Code: JurisNSI
     */
    JurisdictionalNonSensitiveInformationPolicy: CodingArgs;
    /**
     * Code: JurisPI
     */
    JurisdictionalPublicInformationPolicy: CodingArgs;
    /**
     * Code: JurisSP-CUI
     */
    JurisdictionalSpecifiedControlledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: JurisUUI
     */
    JurisdictionalUncontrolledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: KEY
     */
    Keyword: CodingArgs;
    /**
     * Code: KEY204
     */
    UnknownKeyIdentifier: CodingArgs;
    /**
     * Code: KEY205
     */
    DuplicateKeyIdentifier: CodingArgs;
    /**
     * Code: KEY206
     */
    NonMatchingIdentification: CodingArgs;
    /**
     * Code: KSUBJ
     */
    KnowledgeSubject: CodingArgs;
    /**
     * Code: KSUBT
     */
    KnowledgeSubtopic: CodingArgs;
    /**
     * Code: L
     */
    LeftEquipment: CodingArgs;
    /**
     * Code: LAB
     */
    LabAlert: CodingArgs;
    /**
     * Code: LABCAT
     */
    LabTestCategory: CodingArgs;
    /**
     * Code: LABEL
     */
    AssignSecurityLabel: CodingArgs;
    /**
     * Code: LABOE
     */
    LaboratoryTestOrderEntryTask: CodingArgs;
    /**
     * Code: LABRESULTS
     */
    LabResults: CodingArgs;
    /**
     * Code: LABRREV
     */
    LaboratoryResultsReviewTask: CodingArgs;
    /**
     * Code: LACT
     */
    LactationAlert: CodingArgs;
    /**
     * Code: LACTTRNS
     */
    LactationTransmission: CodingArgs;
    /**
     * Code: LATE
     */
    LateInvoice: CodingArgs;
    /**
     * Code: LAWENF
     */
    LawEnforcementTransport: CodingArgs;
    /**
     * Code: LawEnforcementVehicle
     */
    LawEnforcementTransportLawEnforcementVehicle: CodingArgs;
    /**
     * Code: LDLP
     */
    LDLPrecipitation: CodingArgs;
    /**
     * Code: LEN_LONG
     */
    LengthIsTooLong: CodingArgs;
    /**
     * Code: LEN_RANGE
     */
    LengthOutOfRange: CodingArgs;
    /**
     * Code: LEN_SHORT
     */
    LengthIsTooShort: CodingArgs;
    /**
     * Code: LENSING
     */
    LensInvoiceGroup: CodingArgs;
    /**
     * Code: LF
     */
    LowFat: CodingArgs;
    /**
     * Code: LFEMX
     */
    LifeTimeMaximum: CodingArgs;
    /**
     * Code: LGPC
     */
    LicensedGeneralPhysicianCare: CodingArgs;
    /**
     * Code: LIFE
     */
    LifeInsurancePolicy: CodingArgs;
    /**
     * Code: LIPEMIA
     */
    Lipemia: CodingArgs;
    /**
     * Code: LIVARG
     */
    LivingArrangementInformationSensitivity: CodingArgs;
    /**
     * Code: LOAN
     */
    Loan: CodingArgs;
    /**
     * Code: LOC
     */
    Location: CodingArgs;
    /**
     * Code: LOCIS
     */
    LocationInformationSensitivity: CodingArgs;
    /**
     * Code: LP
     */
    LowProtein: CodingArgs;
    /**
     * Code: LQ
     */
    Liquid: CodingArgs;
    /**
     * Code: LRCOMPT
     */
    LegitimateRelationshipCompartment: CodingArgs;
    /**
     * Code: LS
     */
    LowSodium: CodingArgs;
    /**
     * Code: LTC
     */
    LongTermCarePolicy: CodingArgs;
    /**
     * Code: LTRMCARE
     */
    LongTermCareFacilityInteraction: CodingArgs;
    /**
     * Code: LU
     */
    LimitedUse: CodingArgs;
    /**
     * Code: M
     */
    Missing: CodingArgs;
    /**
     * Code: MANDPOL
     */
    MandatoryHealthProgram: CodingArgs;
    /**
     * Code: MANUAL
     */
    ManualReview: CodingArgs;
    /**
     * Code: MARKUP
     */
    MarkupOrUpCharge: CodingArgs;
    /**
     * Code: MARST
     */
    MaritalStatusInformationSensitivity: CodingArgs;
    /**
     * Code: MARWLREV
     */
    MedicationAdministrationRecordWorkListReviewTask: CodingArgs;
    /**
     * Code: MASK
     */
    Mask: CodingArgs;
    /**
     * Code: MAXOCCURS
     */
    RepetitionsAboveMaximum: CodingArgs;
    /**
     * Code: MC
     */
    MasterCard: CodingArgs;
    /**
     * Code: MCPOL
     */
    ManagedCarePolicy: CodingArgs;
    /**
     * Code: MDHHS-5515
     */
    MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposes: CodingArgs;
    /**
     * Code: MDHHS-5515MMHC
     */
    MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposesMichiganMentalHealthCode: CodingArgs;
    /**
     * Code: MDHHS-5515Part2
     */
    MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposesUS42CFRPart2: CodingArgs;
    /**
     * Code: MDOSE
     */
    MaximumDosageReached: CodingArgs;
    /**
     * Code: MED
     */
    Medical: CodingArgs;
    /**
     * Code: MEDCCAT
     */
    MedicalConditionCategory: CodingArgs;
    /**
     * Code: MEDLIST
     */
    MedicationList: CodingArgs;
    /**
     * Code: MEDOE
     */
    MedicationOrderEntryTask: CodingArgs;
    /**
     * Code: MEDT
     */
    MeasurementEndDate: CodingArgs;
    /**
     * Code: MENCAT
     */
    MentalHealthCategory: CodingArgs;
    /**
     * Code: MENTPOL
     */
    MentalHealthPolicy: CodingArgs;
    /**
     * Code: MENTPRG
     */
    MentalHealthProgram: CodingArgs;
    /**
     * Code: MH
     */
    MentalHealthInformationSensitivity: CodingArgs;
    /**
     * Code: MICROORGRREV
     */
    MicrobiologyOrganismsResultsReviewTask: CodingArgs;
    /**
     * Code: MICRORREV
     */
    MicrobiologyResultsReviewTask: CodingArgs;
    /**
     * Code: MICROSENSRREV
     */
    MicrobiologySensitivityTestResultsReviewTask: CodingArgs;
    /**
     * Code: MILITARY
     */
    MilitaryHealthProgram: CodingArgs;
    /**
     * Code: MINEC
     */
    MinimumNecessary: CodingArgs;
    /**
     * Code: MINFREQ
     */
    TooSoonWithinFrequencyBasedOnTheUsage: CodingArgs;
    /**
     * Code: MINOCCURS
     */
    RepetitionsBelowMinimum: CodingArgs;
    /**
     * Code: MISSAPT
     */
    MissedAppointment: CodingArgs;
    /**
     * Code: MISSCOND
     */
    ConditionalElementMissing: CodingArgs;
    /**
     * Code: MISSMAND
     */
    MandatoryElementMissing: CodingArgs;
    /**
     * Code: MLREV
     */
    MedicationListReviewTask: CodingArgs;
    /**
     * Code: MODEL
     */
    Model: CodingArgs;
    /**
     * Code: MONTH
     */
    Month: CodingArgs;
    /**
     * Code: MS
     */
    ManufacturerSample: CodingArgs;
    /**
     * Code: MSD
     */
    MeasurementStartDate: CodingArgs;
    /**
     * Code: MSRADJ
     */
    RiskAdjustment: CodingArgs;
    /**
     * Code: MSRAGG
     */
    RateAggregation: CodingArgs;
    /**
     * Code: MSRIMPROV
     */
    HealthQualityMeasureImprovementNotation: CodingArgs;
    /**
     * Code: MSRJUR
     */
    Jurisdiction: CodingArgs;
    /**
     * Code: MSROBS
     */
    MeasureObservation: CodingArgs;
    /**
     * Code: MSRPOPL
     */
    MeasurePopulation: CodingArgs;
    /**
     * Code: MSRPOPLEX
     */
    MeasurePopulationExclusions: CodingArgs;
    /**
     * Code: MSRRPTR
     */
    ReporterType: CodingArgs;
    /**
     * Code: MSRRPTTIME
     */
    TimeframeForReporting: CodingArgs;
    /**
     * Code: MSRSCORE
     */
    MeasureScoring: CodingArgs;
    /**
     * Code: MSRSET
     */
    HealthQualityMeasureCareSetting: CodingArgs;
    /**
     * Code: MSRTOPIC
     */
    HealthQualityMeasureTopicType: CodingArgs;
    /**
     * Code: MSRTP
     */
    MeasurementPeriod: CodingArgs;
    /**
     * Code: MSRTYPE
     */
    MeasureType: CodingArgs;
    /**
     * Code: MST
     */
    MilitarySexualTraumaInformationSensitivity: CodingArgs;
    /**
     * Code: MVA
     */
    MotorVehicleAccident: CodingArgs;
    /**
     * Code: N
     */
    NormalDiet: CodingArgs;
    /**
     * Code: NAINT
     */
    NonAllergyIntolerance: CodingArgs;
    /**
     * Code: NAT
     */
    InsufficientAuthorization: CodingArgs;
    /**
     * Code: NAUTH
     */
    NotAuthorized: CodingArgs;
    /**
     * Code: NELG
     */
    NotEligible: CodingArgs;
    /**
     * Code: NETAMT
     */
    NetAmount: CodingArgs;
    /**
     * Code: NEUT
     */
    Neutralization: CodingArgs;
    /**
     * Code: NF
     */
    NoFat: CodingArgs;
    /**
     * Code: NHP
     */
    NaturalHealthProductAlert: CodingArgs;
    /**
     * Code: NOAUTH
     */
    NoDisclosureWithoutSubjectAuthorization: CodingArgs;
    /**
     * Code: NOCOLLECT
     */
    NoCollection: CodingArgs;
    /**
     * Code: NOCONSENT
     */
    NoConsent: CodingArgs;
    /**
     * Code: NODSCLCD
     */
    NoDisclosureWithoutConsentDirective: CodingArgs;
    /**
     * Code: NODSCLCDS
     */
    NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: CodingArgs;
    /**
     * Code: NODUPS
     */
    DuplicateValuesAreNotPermitted: CodingArgs;
    /**
     * Code: NOI
     */
    NatureOfInjury: CodingArgs;
    /**
     * Code: NOINTEGRATE
     */
    NoIntegration: CodingArgs;
    /**
     * Code: NOLIST
     */
    NoUnlistedEntityDisclosure: CodingArgs;
    /**
     * Code: NOMOU
     */
    NoDisclosureWithoutMOU: CodingArgs;
    /**
     * Code: NON
     */
    NonPaymentData: CodingArgs;
    /**
     * Code: NONAC
     */
    InpatientNonAcute: CodingArgs;
    /**
     * Code: NONRX
     */
    NonPrescriptionInteractionAlert: CodingArgs;
    /**
     * Code: NOORGPOL
     */
    NoDisclosureWithoutOrganizationalAuthorization: CodingArgs;
    /**
     * Code: NOPAT
     */
    NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: CodingArgs;
    /**
     * Code: NOPERSIST
     */
    ElementWillNotBePersisted: CodingArgs;
    /**
     * Code: NOPERSISTP
     */
    NoCollectionBeyondPurposeOfUse: CodingArgs;
    /**
     * Code: NOPP
     */
    NoticeOfPrivacyPractices: CodingArgs;
    /**
     * Code: NORDSCLCD
     */
    NoRedisclosureWithoutConsentDirective: CodingArgs;
    /**
     * Code: NORDSCLCDS
     */
    NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: CodingArgs;
    /**
     * Code: NORDSCLW
     */
    NoDisclosureWithoutJurisdictionalAuthorization: CodingArgs;
    /**
     * Code: NORDSLCD
     */
    NoRedisclosureWithoutConsentDirectiveNORDSLCD: CodingArgs;
    /**
     * Code: NORELINK
     */
    NoRelinking: CodingArgs;
    /**
     * Code: NOREUSE
     */
    NoReuseBeyondPurposeOfUse: CodingArgs;
    /**
     * Code: NOSTRNS
     */
    NosocomialTransmission: CodingArgs;
    /**
     * Code: NOTACTN
     */
    NoLongerActionable: CodingArgs;
    /**
     * Code: NOTEQUIV
     */
    NotEquivalentAlert: CodingArgs;
    /**
     * Code: NOTEQUIVGEN
     */
    NotGenericallyEquivalentAlert: CodingArgs;
    /**
     * Code: NOTEQUIVTHER
     */
    NotTherapeuticallyEquivalentAlert: CodingArgs;
    /**
     * Code: NOVIP
     */
    NoUnauthorizedVIPDisclosure: CodingArgs;
    /**
     * Code: NUMER
     */
    Numerator: CodingArgs;
    /**
     * Code: NUMEX
     */
    NumeratorExclusions: CodingArgs;
    /**
     * Code: O
     */
    InProcess: CodingArgs;
    /**
     * Code: ObligationPolicy
     */
    ObligationPolicy: CodingArgs;
    /**
     * Code: OBS
     */
    Obstetrics: CodingArgs;
    /**
     * Code: OBSA
     */
    ObservationAlert: CodingArgs;
    /**
     * Code: OBSANTC
     */
    AntigenCount: CodingArgs;
    /**
     * Code: OBSANTV
     */
    AntigenValidity: CodingArgs;
    /**
     * Code: OBSENC
     */
    ObservationEncounter: CodingArgs;
    /**
     * Code: OBSOLETE
     */
    ObsoleteRecordReturned: CodingArgs;
    /**
     * Code: OE
     */
    OrderEntryTask: CodingArgs;
    /**
     * Code: OHSINV
     */
    OralHealthService: CodingArgs;
    /**
     * Code: OIC
     */
    OptInToPersonalInformationOrEffectCollectionInARegistryOrRepository: CodingArgs;
    /**
     * Code: OINT
     */
    Intolerance: CodingArgs;
    /**
     * Code: OIS
     */
    OptInToPersonalInformationOrEffectSharingViaARegistryOrRepository: CodingArgs;
    /**
     * Code: ONC
     */
    Oncology: CodingArgs;
    /**
     * Code: ONET
     */
    OneTime: CodingArgs;
    /**
     * Code: OnFoot
     */
    PedestrianTransportOnFoot: CodingArgs;
    /**
     * Code: OOC
     */
    OptOutOfPersonalInformationOrEffectCollectionInARegistryOrRepository: CodingArgs;
    /**
     * Code: OOJ
     */
    OutOfJurisdiction: CodingArgs;
    /**
     * Code: OOO
     */
    OutOfOffice: CodingArgs;
    /**
     * Code: OOS
     */
    OptOutOfPersonalInformationOrEffectSharingViaARegistryOrRepository: CodingArgs;
    /**
     * Code: OPIOIDUD
     */
    OpioidUseDisorderInformationSensitivity: CodingArgs;
    /**
     * Code: OPTIN
     */
    OptIn: CodingArgs;
    /**
     * Code: OPTINR
     */
    OptInWithRestrictions: CodingArgs;
    /**
     * Code: OPTOUT
     */
    OpOut: CodingArgs;
    /**
     * Code: OPTOUTE
     */
    OptOutWithExceptions: CodingArgs;
    /**
     * Code: ORCON
     */
    NoDisclosureWithoutOriginatorAuthorization: CodingArgs;
    /**
     * Code: OREV
     */
    OrdersReviewTask: CodingArgs;
    /**
     * Code: OrgCUI
     */
    OrganizationalBasicControlledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: OrgDEID
     */
    OrganizationalDeIdentifiedInformatiOnPolicy: CodingArgs;
    /**
     * Code: OrgIP
     */
    OrganizationalInformationPolicy: CodingArgs;
    /**
     * Code: OrgLDS
     */
    OrganizationalLimitedDataSetInformationPolicy: CodingArgs;
    /**
     * Code: OrgNSI
     */
    OrganizationalNonSensitiveInformationPolicy: CodingArgs;
    /**
     * Code: OrgPI
     */
    OrganizationalPublicInformationPolicy: CodingArgs;
    /**
     * Code: OrgSP-CUI
     */
    OrganizationalSpecifiedControlledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: OrgUUI
     */
    OrganizationalUncontrolledUnclassifiedInformationPolicy: CodingArgs;
    /**
     * Code: ORTHO
     */
    OrthodonticService: CodingArgs;
    /**
     * Code: OTC
     */
    NonPrescriptionMedicine: CodingArgs;
    /**
     * Code: P
     */
    Private: CodingArgs;
    /**
     * Code: PA
     */
    PreferredAccommodationInvoice: CodingArgs;
    /**
     * Code: PACOMPT
     */
    PatientAdministrationCompartment: CodingArgs;
    /**
     * Code: PAF
     */
    PhenylalanineFree: CodingArgs;
    /**
     * Code: PAINV
     */
    PreferredAccommodationInvoicePAINV: CodingArgs;
    /**
     * Code: PALL
     */
    Palliative: CodingArgs;
    /**
     * Code: PAPER
     */
    PaperDocumentationToFollow: CodingArgs;
    /**
     * Code: PAR
     */
    Parenteral: CodingArgs;
    /**
     * Code: PARTRNS
     */
    ParenteralTransmission: CodingArgs;
    /**
     * Code: PAT_ADV_EVNT
     */
    PatientAdverseEvent: CodingArgs;
    /**
     * Code: PATDOC
     */
    PatientDocumentationTask: CodingArgs;
    /**
     * Code: PATEDUE
     */
    PatientEducationEntry: CodingArgs;
    /**
     * Code: PATINFO
     */
    PatientInformationReviewTask: CodingArgs;
    /**
     * Code: PATLOC
     */
    PatientLocation: CodingArgs;
    /**
     * Code: PATPREF
     */
    ViolatesStatedPreferences: CodingArgs;
    /**
     * Code: PATPREFALT
     */
    ViolatesStatedPreferencesAlternateAvailable: CodingArgs;
    /**
     * Code: PATREPE
     */
    PathologyReportEntryTask: CodingArgs;
    /**
     * Code: PATREPREV
     */
    PathologyReportReviewTask: CodingArgs;
    /**
     * Code: PAY
     */
    Payment: CodingArgs;
    /**
     * Code: PAYEE
     */
    Payee: CodingArgs;
    /**
     * Code: PAYOR
     */
    Payor: CodingArgs;
    /**
     * Code: PBILLACCT
     */
    PatientBillingAccount: CodingArgs;
    /**
     * Code: PDCNPPELAT
     */
    PaidNullifiedPriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDCNPPELCT
     */
    PaidNullifiedPriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: PDCNPPMNAT
     */
    PaidNullifiedPriorPeriodManualAmount: CodingArgs;
    /**
     * Code: PDCNPPMNCT
     */
    PaidNullifiedPriorPeriodManualCount: CodingArgs;
    /**
     * Code: PDCNSPELAT
     */
    PaidNullifiedSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDCNSPELCT
     */
    PaidNullifiedSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: PDCNSPMNAT
     */
    PaidNullifiedSamePeriodManualAmount: CodingArgs;
    /**
     * Code: PDCNSPMNCT
     */
    PaidNullifiedSamePeriodManualCount: CodingArgs;
    /**
     * Code: PDNFPPELAT
     */
    PaidNullifiedPriorPeriodElectronicAmountPDNFPPELAT: CodingArgs;
    /**
     * Code: PDNFPPELCT
     */
    PaidNullifiedPriorPeriodElectronicCountPDNFPPELCT: CodingArgs;
    /**
     * Code: PDNFPPMNAT
     */
    PaidNullifiedPriorPeriodManualAmountPDNFPPMNAT: CodingArgs;
    /**
     * Code: PDNFPPMNCT
     */
    PaidNullifiedPriorPeriodManualCountPDNFPPMNCT: CodingArgs;
    /**
     * Code: PDNFSPELAT
     */
    PaidNullifiedSamePeriodElectronicAmountPDNFSPELAT: CodingArgs;
    /**
     * Code: PDNFSPELCT
     */
    PaidNullifiedSamePeriodElectronicCountPDNFSPELCT: CodingArgs;
    /**
     * Code: PDNFSPMNAT
     */
    PaidNullifiedSamePeriodManualAmountPDNFSPMNAT: CodingArgs;
    /**
     * Code: PDNFSPMNCT
     */
    PaidNullifiedSamePeriodManualCountPDNFSPMNCT: CodingArgs;
    /**
     * Code: PDNPPPELAT
     */
    PaidNonPayeePayablePriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDNPPPELCT
     */
    PaidNonPayeePayablePriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: PDNPPPMNAT
     */
    PaidNonPayeePayablePriorPeriodManualAmount: CodingArgs;
    /**
     * Code: PDNPPPMNCT
     */
    PaidNonPayeePayablePriorPeriodManualCount: CodingArgs;
    /**
     * Code: PDNPSPELAT
     */
    PaidNonPayeePayableSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDNPSPELCT
     */
    PaidNonPayeePayableSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: PDNPSPMNAT
     */
    PaidNonPayeePayableSamePeriodManualAmount: CodingArgs;
    /**
     * Code: PDNPSPMNCT
     */
    PaidNonPayeePayableSamePeriodManualCount: CodingArgs;
    /**
     * Code: PDPPPPELAT
     */
    PaidPayeePayablePriorPeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDPPPPELCT
     */
    PaidPayeePayablePriorPeriodElectronicCount: CodingArgs;
    /**
     * Code: PDPPPPMNAT
     */
    PaidPayeePayablePriorPeriodManualAmount: CodingArgs;
    /**
     * Code: PDPPPPMNCT
     */
    PaidPayeePayablePriorPeriodManualCount: CodingArgs;
    /**
     * Code: PDPPSPELAT
     */
    PaidPayeePayableSamePeriodElectronicAmount: CodingArgs;
    /**
     * Code: PDPPSPELCT
     */
    PaidPayeePayableSamePeriodElectronicCount: CodingArgs;
    /**
     * Code: PDPPSPMNAT
     */
    PaidPayeePayableSamePeriodManualAmount: CodingArgs;
    /**
     * Code: PDPPSPMNCT
     */
    PaidPayeePayableSamePeriodManualCount: CodingArgs;
    /**
     * Code: PDS
     */
    PatientDefaultInformationSensitivity: CodingArgs;
    /**
     * Code: PEALRT
     */
    PediatricAlert: CodingArgs;
    /**
     * Code: PED
     */
    Pediatrics: CodingArgs;
    /**
     * Code: PERFEE
     */
    PeriodicFee: CodingArgs;
    /**
     * Code: PERIOD
     */
    Period: CodingArgs;
    /**
     * Code: PERMBNS
     */
    PerformanceBonus: CodingArgs;
    /**
     * Code: PersDEID
     */
    PersonalDeIdentifiedInformationPolicy: CodingArgs;
    /**
     * Code: PersIP
     */
    PersonalInformationPolicy: CodingArgs;
    /**
     * Code: PERSISTLABEL
     */
    PersistSecurityLabel: CodingArgs;
    /**
     * Code: PersLDS
     */
    PersonalLimitedDataSetInformationPolicy: CodingArgs;
    /**
     * Code: PersNSI
     */
    PersonalNonSensitiveInformationPolicy: CodingArgs;
    /**
     * Code: PersPI
     */
    PersonalPublicInformationPolicy: CodingArgs;
    /**
     * Code: PHAR
     */
    Pharmaceutical: CodingArgs;
    /**
     * Code: PHY
     */
    PhysicianRequestedInformationSensitivity: CodingArgs;
    /**
     * Code: PHYRHB
     */
    PhysicalRehab: CodingArgs;
    /**
     * Code: PIE
     */
    PublicInsuranceExhausted: CodingArgs;
    /**
     * Code: PINV
     */
    PaperInvoice: CodingArgs;
    /**
     * Code: PLACE
     */
    CommonSpaceInteraction: CodingArgs;
    /**
     * Code: PLACTRNS
     */
    TransplacentalTransmission: CodingArgs;
    /**
     * Code: PLYDOC
     */
    PolyOrdererAlert: CodingArgs;
    /**
     * Code: PLYPHRM
     */
    PolySupplierAlert: CodingArgs;
    /**
     * Code: PNC
     */
    PropertyAndCasualtyInsurancePolicy: CodingArgs;
    /**
     * Code: POINT
     */
    Point: CodingArgs;
    /**
     * Code: POLY
     */
    Polyline: CodingArgs;
    /**
     * Code: POS
     */
    PointOfServicePolicy: CodingArgs;
    /**
     * Code: PPO
     */
    PreferredProviderOrganizationPolicy: CodingArgs;
    /**
     * Code: PPRD
     */
    PriorPeriodAdjustment: CodingArgs;
    /**
     * Code: PRA
     */
    PRA: CodingArgs;
    /**
     * Code: PRDING
     */
    ProductInvoiceGroup: CodingArgs;
    /**
     * Code: PRDMX
     */
    PeriodMaximum: CodingArgs;
    /**
     * Code: PRE
     */
    PreDilution: CodingArgs;
    /**
     * Code: PREFSTRENGTH
     */
    PreferenceStrength: CodingArgs;
    /**
     * Code: PREG
     */
    PregnancyAlert: CodingArgs;
    /**
     * Code: PREGNANT
     */
    PregnancyInformationSensitivity: CodingArgs;
    /**
     * Code: PRENC
     */
    PreAdmission: CodingArgs;
    /**
     * Code: PREVINEF
     */
    PreviouslyIneffective: CodingArgs;
    /**
     * Code: PrivacyMark
     */
    PrivacyMark: CodingArgs;
    /**
     * Code: PrivateTransport
     */
    PrivateTransport: CodingArgs;
    /**
     * Code: PRIVMARK
     */
    PrivacyMarkPRIVMARK: CodingArgs;
    /**
     * Code: PRLMN
     */
    Preliminary: CodingArgs;
    /**
     * Code: PRN
     */
    AsNeeded: CodingArgs;
    /**
     * Code: PROA
     */
    ProfessionalAssociationDeduction: CodingArgs;
    /**
     * Code: PROBLIST
     */
    ProblemList: CodingArgs;
    /**
     * Code: PROBLISTE
     */
    ProblemListEntryTask: CodingArgs;
    /**
     * Code: PROBLISTREV
     */
    ProblemListReviewTask: CodingArgs;
    /**
     * Code: PROV
     */
    Provider: CodingArgs;
    /**
     * Code: PRS
     */
    PatientRequestedInformationSensitivity: CodingArgs;
    /**
     * Code: PRVTRN
     */
    PrivateTransportPRVTRN: CodingArgs;
    /**
     * Code: PSEUD
     */
    Pseudonymize: CodingArgs;
    /**
     * Code: PST
     */
    ProvincialStateSalesTax: CodingArgs;
    /**
     * Code: PSVCCAT
     */
    ProfessionalServiceCategory: CodingArgs;
    /**
     * Code: PSY
     */
    PsychiatryDisorderInformationSensitivity: CodingArgs;
    /**
     * Code: PSYCH
     */
    Psychiatric: CodingArgs;
    /**
     * Code: PSYTHPN
     */
    PsychotherapyNoteInformationSensitivity: CodingArgs;
    /**
     * Code: PTNTCARE
     */
    HealthCareInteractionPatientCare: CodingArgs;
    /**
     * Code: PUBLICPOL
     */
    PublicHealthcare: CodingArgs;
    /**
     * Code: PublicTransport
     */
    PublicTransport: CodingArgs;
    /**
     * Code: PUBTRN
     */
    PublicTransportPUBTRN: CodingArgs;
    /**
     * Code: PYRDELAY
     */
    DelayedByAPreviousPayor: CodingArgs;
    /**
     * Code: R
     */
    ProcessCompleted: CodingArgs;
    /**
     * Code: RACE
     */
    RaceInformationSensitivity: CodingArgs;
    /**
     * Code: RADREPE
     */
    RadiologyReportEntryTask: CodingArgs;
    /**
     * Code: RADREPREV
     */
    RadiologyReportReviewTask: CodingArgs;
    /**
     * Code: RALG
     */
    RelatedAllergyAlert: CodingArgs;
    /**
     * Code: RAR
     */
    RelatedPriorReactionAlert: CodingArgs;
    /**
     * Code: RAT
     */
    Rationale: CodingArgs;
    /**
     * Code: RD
     */
    ReductionDiet: CodingArgs;
    /**
     * Code: REACT
     */
    ReactionAlert: CodingArgs;
    /**
     * Code: RECA
     */
    Recalcification: CodingArgs;
    /**
     * Code: RECOV
     */
    Recovery: CodingArgs;
    /**
     * Code: REDACT
     */
    Redact: CodingArgs;
    /**
     * Code: RedisclosureProhibitionMark
     */
    ProhibitionAgainstRedisclosureMark: CodingArgs;
    /**
     * Code: REF
     */
    Reference: CodingArgs;
    /**
     * Code: REFLEX
     */
    ReflexPermission: CodingArgs;
    /**
     * Code: REFNR
     */
    ReferralNotRequired: CodingArgs;
    /**
     * Code: RefrainPolicy
     */
    RefrainPolicy: CodingArgs;
    /**
     * Code: REI
     */
    ReinsurancePolicy: CodingArgs;
    /**
     * Code: REL
     */
    ReligionInformationSensitivity: CodingArgs;
    /**
     * Code: REMLE
     */
    ReminderListEntry: CodingArgs;
    /**
     * Code: REMLREV
     */
    ReminderListReview: CodingArgs;
    /**
     * Code: RENT
     */
    Rent: CodingArgs;
    /**
     * Code: REP_HALF_LIFE
     */
    RepresentativeHalfLife: CodingArgs;
    /**
     * Code: REP_RANGE
     */
    RepetitionsOutOfRange: CodingArgs;
    /**
     * Code: REPRESENTATIVE_BEAT
     */
    ECGRepresentativeBeatWaveforms: CodingArgs;
    /**
     * Code: REPSERV
     */
    RepeatedService: CodingArgs;
    /**
     * Code: RERUN
     */
    RerunDilution: CodingArgs;
    /**
     * Code: RESCOMPT
     */
    ResearchProjectCompartment: CodingArgs;
    /**
     * Code: RESEARCH
     */
    ResearchInformationAccess: CodingArgs;
    /**
     * Code: RESTOCK
     */
    RestockingFee: CodingArgs;
    /**
     * Code: RestrictedConfidentialityMark
     */
    RestrictedConfidentialityMark: CodingArgs;
    /**
     * Code: RETIRE
     */
    RetireeHealthProgram: CodingArgs;
    /**
     * Code: RETRO
     */
    RetroAdjustment: CodingArgs;
    /**
     * Code: REV
     */
    StandardChargeReversal: CodingArgs;
    /**
     * Code: RF
     */
    Refill: CodingArgs;
    /**
     * Code: RFC
     */
    RefillComplete: CodingArgs;
    /**
     * Code: RFCS
     */
    RefillCompletePartialStrength: CodingArgs;
    /**
     * Code: RFF
     */
    RefillFirstFillThisFacility: CodingArgs;
    /**
     * Code: RFFS
     */
    RefillPartialStrengthFirstFillThisFacility: CodingArgs;
    /**
     * Code: RFP
     */
    RefillPartFill: CodingArgs;
    /**
     * Code: RFPS
     */
    RefillPartFillPartialStrength: CodingArgs;
    /**
     * Code: RFS
     */
    RefillPartialStrength: CodingArgs;
    /**
     * Code: RHYTHM
     */
    ECGRhythmWaveforms: CodingArgs;
    /**
     * Code: RINT
     */
    RelatedIntoleranceAlert: CodingArgs;
    /**
     * Code: RISKASSESS
     */
    RiskAssessmentInstrumentTask: CodingArgs;
    /**
     * Code: RISKLIST
     */
    RiskFactors: CodingArgs;
    /**
     * Code: RMGTCOMPT
     */
    RecordsManagementCompartment: CodingArgs;
    /**
     * Code: ROIFS
     */
    FullySpecifiedROI: CodingArgs;
    /**
     * Code: ROIPS
     */
    PartiallySpecifiedROI: CodingArgs;
    /**
     * Code: ROST
     */
    RosterFunding: CodingArgs;
    /**
     * Code: RREACT
     */
    RelatedReactionAlert: CodingArgs;
    /**
     * Code: RSDID
     */
    DeIdentifiedInformationAccess: CodingArgs;
    /**
     * Code: RSREID
     */
    ReIdentifiableInformationAccess: CodingArgs;
    /**
     * Code: RX
     */
    PrescriptionOnlyMedicine: CodingArgs;
    /**
     * Code: RXC
     */
    RxCompoundInvoice: CodingArgs;
    /**
     * Code: RXCAT
     */
    MedicationCategory: CodingArgs;
    /**
     * Code: RXCINV
     */
    RxCompoundInvoiceRXCINV: CodingArgs;
    /**
     * Code: RXD
     */
    RxDispenseInvoice: CodingArgs;
    /**
     * Code: RXDINV
     */
    RxDispenseInvoiceRXDINV: CodingArgs;
    /**
     * Code: S
     */
    Suite: CodingArgs;
    /**
     * Code: SA
     */
    SpecialAuthorization: CodingArgs;
    /**
     * Code: SAC
     */
    SpecialAccess: CodingArgs;
    /**
     * Code: SAFNET
     */
    SafetyNetClinicProgram: CodingArgs;
    /**
     * Code: SALE
     */
    Sale: CodingArgs;
    /**
     * Code: SBBLAT
     */
    SubmittedBilledElectronicAmount: CodingArgs;
    /**
     * Code: SBBLCT
     */
    SubmittedBilledElectronicCount: CodingArgs;
    /**
     * Code: SBBLELAT
     */
    SubmittedBilledElectronicAmountSBBLELAT: CodingArgs;
    /**
     * Code: SBBLELCT
     */
    SubmittedBilledElectronicCountSBBLELCT: CodingArgs;
    /**
     * Code: SBCNAT
     */
    SubmittedNullifiedElectronicAmount: CodingArgs;
    /**
     * Code: SBCNCT
     */
    SubmittedCancelledElectronicCount: CodingArgs;
    /**
     * Code: SBFINV
     */
    SessionalOrBlockFeeInvoice: CodingArgs;
    /**
     * Code: SBNFELAT
     */
    SubmittedNullifiedElectronicAmountSBNFELAT: CodingArgs;
    /**
     * Code: SBNFELCT
     */
    SubmittedCancelledElectronicCountSBNFELCT: CodingArgs;
    /**
     * Code: SBPDAT
     */
    SubmittedPendingElectronicAmount: CodingArgs;
    /**
     * Code: SBPDCT
     */
    SubmittedPendingElectronicCount: CodingArgs;
    /**
     * Code: SBPDELAT
     */
    SubmittedPendingElectronicAmountSBPDELAT: CodingArgs;
    /**
     * Code: SBPDELCT
     */
    SubmittedPendingElectronicCountSBPDELCT: CodingArgs;
    /**
     * Code: SCA
     */
    SickleCellAnemiaInformationSensitivity: CodingArgs;
    /**
     * Code: SCH
     */
    SchonkostGE: CodingArgs;
    /**
     * Code: SCHL
     */
    School: CodingArgs;
    /**
     * Code: SCHLDIV
     */
    SchoolDivision: CodingArgs;
    /**
     * Code: SCHOOL
     */
    SchoolAccident: CodingArgs;
    /**
     * Code: SCHOOL2
     */
    SchoolInteraction: CodingArgs;
    /**
     * Code: SDE
     */
    SupplementalDataElements: CodingArgs;
    /**
     * Code: SDV
     */
    SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: CodingArgs;
    /**
     * Code: SECALTINTOBS
     */
    SecurityAlterationIntegrityObservation: CodingArgs;
    /**
     * Code: SECCATOBS
     */
    SecurityCategoryObservation: CodingArgs;
    /**
     * Code: SECCLASSOBS
     */
    SecurityClassificationObservation: CodingArgs;
    /**
     * Code: SECCONOBS
     */
    SecurityControlObservation: CodingArgs;
    /**
     * Code: SECDATINTOBS
     */
    SecurityDataIntegrityObservation: CodingArgs;
    /**
     * Code: SECINTCONOBS
     */
    SecurityIntegrityConfidenceObservation: CodingArgs;
    /**
     * Code: SECINTOBS
     */
    SecurityIntegrityObservation: CodingArgs;
    /**
     * Code: SECINTPRVABOBS
     */
    SecurityIntegrityProvenanceAssertedByObservation: CodingArgs;
    /**
     * Code: SECINTPRVOBS
     */
    SecurityIntegrityProvenanceObservation: CodingArgs;
    /**
     * Code: SECINTPRVRBOBS
     */
    SecurityIntegrityProvenanceReportedByObservation: CodingArgs;
    /**
     * Code: SECINTSTOBS
     */
    SecurityIntegrityStatusObservation: CodingArgs;
    /**
     * Code: SECOBS
     */
    SecurityObservationType: CodingArgs;
    /**
     * Code: SECTRSTOBS
     */
    SECTRSTOBS: CodingArgs;
    /**
     * Code: SecurityLabelMark
     */
    SecurityLabelMark: CodingArgs;
    /**
     * Code: SecurityPolicy
     */
    SecurityPolicy: CodingArgs;
    /**
     * Code: SENDAPP
     */
    SendingApplication: CodingArgs;
    /**
     * Code: SESS
     */
    SessionalFunding: CodingArgs;
    /**
     * Code: SEV
     */
    SeverityObservation: CodingArgs;
    /**
     * Code: SEX
     */
    SexualityAndReproductiveHealthInformationSensitivity: CodingArgs;
    /**
     * Code: SEXTRNS
     */
    SexualTransmission: CodingArgs;
    /**
     * Code: SICKLE
     */
    SickleCell: CodingArgs;
    /**
     * Code: SO
     */
    ScriptOwing: CodingArgs;
    /**
     * Code: SOCIAL
     */
    SocialServiceProgram: CodingArgs;
    /**
     * Code: SOCIAL2
     */
    SocialExtendedFamilyInteraction: CodingArgs;
    /**
     * Code: SP
     */
    SemiPrivate: CodingArgs;
    /**
     * Code: SPEND
     */
    SpendDown: CodingArgs;
    /**
     * Code: SPI
     */
    SpeciallyProtectedInformationSensitivity: CodingArgs;
    /**
     * Code: SPLCOATING
     */
    CoatingSPLCOATING: CodingArgs;
    /**
     * Code: SPLCOLOR
     */
    ColorSPLCOLOR: CodingArgs;
    /**
     * Code: SPLIMAGE
     */
    Image: CodingArgs;
    /**
     * Code: SPLIMPRINT
     */
    Imprint: CodingArgs;
    /**
     * Code: SPLSCORING
     */
    ScoringSPLSCORING: CodingArgs;
    /**
     * Code: SPLSHAPE
     */
    ShapeSPLSHAPE: CodingArgs;
    /**
     * Code: SPLSIZE
     */
    SizeSPLSIZE: CodingArgs;
    /**
     * Code: SPLSYMBOL
     */
    Symbol: CodingArgs;
    /**
     * Code: SPT
     */
    SportingAccident: CodingArgs;
    /**
     * Code: SREC
     */
    SpecimenReceived: CodingArgs;
    /**
     * Code: SS
     */
    ShortStay: CodingArgs;
    /**
     * Code: SSP
     */
    SensitiveServiceProviderInformationSensitivity: CodingArgs;
    /**
     * Code: SSTOR
     */
    SpecimenInStorage: CodingArgs;
    /**
     * Code: STD
     */
    SexuallyTransmittedDiseaseInformationSensitivity: CodingArgs;
    /**
     * Code: STORE
     */
    Storage: CodingArgs;
    /**
     * Code: STRAN
     */
    SpecimenInTransit: CodingArgs;
    /**
     * Code: STRAT
     */
    Stratification: CodingArgs;
    /**
     * Code: STRTLATE
     */
    StartTooLateAlertSTRTLATE: CodingArgs;
    /**
     * Code: SUBPOL
     */
    SubstanceUsePolicy: CodingArgs;
    /**
     * Code: SUBPRG
     */
    SubstanceUseProgram: CodingArgs;
    /**
     * Code: SUBSIDFFS
     */
    SubsidizedFeeForServiceProgram: CodingArgs;
    /**
     * Code: SUBSIDIZ
     */
    SubsidizedHealthProgram: CodingArgs;
    /**
     * Code: SUBSIDMC
     */
    SubsidizedManagedCareProgram: CodingArgs;
    /**
     * Code: SUBSTNCE
     */
    CommonSubstanceInteraction: CodingArgs;
    /**
     * Code: SUBSUPP
     */
    SubsidizedSupplementalHealthProgram: CodingArgs;
    /**
     * Code: SUD
     */
    SubstanceUseDisorderInformationSensitivity: CodingArgs;
    /**
     * Code: SUPPLEMENT
     */
    NutritionalSupplement: CodingArgs;
    /**
     * Code: SUPPRESSED
     */
    RecordSuppressed: CodingArgs;
    /**
     * Code: SURG
     */
    Surgical: CodingArgs;
    /**
     * Code: SURPL
     */
    SurplusLineInsurancePolicy: CodingArgs;
    /**
     * Code: T
     */
    TeaOnly: CodingArgs;
    /**
     * Code: TB
     */
    TrialBalance: CodingArgs;
    /**
     * Code: TBOO
     */
    Taboo: CodingArgs;
    /**
     * Code: TBS
     */
    TrialBalancePartialStrength: CodingArgs;
    /**
     * Code: TEACHER
     */
    Teacher: CodingArgs;
    /**
     * Code: TF
     */
    TrialFill: CodingArgs;
    /**
     * Code: TFS
     */
    TrialFillPartialStrength: CodingArgs;
    /**
     * Code: TIME
     */
    TimingDetectedIssue: CodingArgs;
    /**
     * Code: TIME_ABSOLUTE
     */
    AbsoluteTimeSequence: CodingArgs;
    /**
     * Code: TIME_RELATIVE
     */
    RelativeTimeSequence: CodingArgs;
    /**
     * Code: TIMING
     */
    EventTimingIncorrectAlert: CodingArgs;
    /**
     * Code: Title38Section7332
     */
    Title38Section7332: CodingArgs;
    /**
     * Code: TLIFE
     */
    TermLifeInsurancePolicy: CodingArgs;
    /**
     * Code: TOOLATE
     */
    RefillTooLateAlert: CodingArgs;
    /**
     * Code: TOOSOON
     */
    RefillTooSoonAlert: CodingArgs;
    /**
     * Code: TPROD
     */
    TherapeuticProductAlert: CodingArgs;
    /**
     * Code: TRAN
     */
    TransactionFee: CodingArgs;
    /**
     * Code: TRANF
     */
    TransmissionFormat: CodingArgs;
    /**
     * Code: TRANSFER
     */
    Transfer: CodingArgs;
    /**
     * Code: TRAVEL
     */
    Travel: CodingArgs;
    /**
     * Code: TRAVINT
     */
    CommonTravelInteraction: CodingArgs;
    /**
     * Code: TRNSFTRNS
     */
    TransfusionTransmission: CodingArgs;
    /**
     * Code: TRSTACCRD
     */
    TrustAccreditation: CodingArgs;
    /**
     * Code: TRSTACCRDOBS
     */
    TrustAccreditationObservation: CodingArgs;
    /**
     * Code: TRSTAGRE
     */
    TrustAgreement: CodingArgs;
    /**
     * Code: TRSTAGREOBS
     */
    TrustAgreementObservation: CodingArgs;
    /**
     * Code: TRSTASSUR
     */
    TrustAssurance: CodingArgs;
    /**
     * Code: TRSTCERT
     */
    TrustCertificate: CodingArgs;
    /**
     * Code: TRSTCERTOBS
     */
    TrustCertificateObservation: CodingArgs;
    /**
     * Code: TRSTFWK
     */
    TrustFramework: CodingArgs;
    /**
     * Code: TRSTFWKOBS
     */
    TrustFrameworkObservation: CodingArgs;
    /**
     * Code: TRSTLOAOBS
     */
    TrustAssuranceObservation: CodingArgs;
    /**
     * Code: TRSTMEC
     */
    TrustMechanism: CodingArgs;
    /**
     * Code: TRSTMECOBS
     */
    TrustMechanismObservation: CodingArgs;
    /**
     * Code: UD
     */
    UnitDose: CodingArgs;
    /**
     * Code: UDE
     */
    UnitDoseEquivalent: CodingArgs;
    /**
     * Code: UFIL
     */
    Ultrafiltration: CodingArgs;
    /**
     * Code: ULIFE
     */
    UniversalLifeInsurancePolicy: CodingArgs;
    /**
     * Code: UMBRL
     */
    UmbrellaLiabilityInsurancePolicy: CodingArgs;
    /**
     * Code: UNINSMOT
     */
    UninsuredMotoristPolicy: CodingArgs;
    /**
     * Code: UNITPRICE
     */
    UnitPrice: CodingArgs;
    /**
     * Code: UNITQTY
     */
    UnitQuantity: CodingArgs;
    /**
     * Code: UNRELAT
     */
    UnrelatedService: CodingArgs;
    /**
     * Code: UNSPSC
     */
    UnitedNationsStandardProductsAndServicesClassification: CodingArgs;
    /**
     * Code: UPC
     */
    UniversalProductCode: CodingArgs;
    /**
     * Code: UPGRDLABEL
     */
    UpgradeSecurityLabel: CodingArgs;
    /**
     * Code: URGENT
     */
    Urgent: CodingArgs;
    /**
     * Code: USBroadResearchConsent
     */
    BroadConsentForResearch: CodingArgs;
    /**
     * Code: USE
     */
    NoticeOfUse: CodingArgs;
    /**
     * Code: USResearchInformedAssent
     */
    InformedAssentForResearch: CodingArgs;
    /**
     * Code: USResearchInformedConsent
     */
    InformedConsentForResearch: CodingArgs;
    /**
     * Code: UUI
     */
    U: CodingArgs;
    /**
     * Code: V
     */
    Visa: CodingArgs;
    /**
     * Code: VAC_PROBLEM
     */
    VaccineProductProblem: CodingArgs;
    /**
     * Code: VALIDAT
     */
    ValidationIssue: CodingArgs;
    /**
     * Code: VECTRNS
     */
    VectorBorneTransmission: CodingArgs;
    /**
     * Code: VERBAUTH
     */
    VerbalAuthorization: CodingArgs;
    /**
     * Code: VET
     */
    VeteranHealthProgram: CodingArgs;
    /**
     * Code: VFPAPER
     */
    VerifyPaper: CodingArgs;
    /**
     * Code: VIO
     */
    ViolenceInformationSensitivity: CodingArgs;
    /**
     * Code: VIP
     */
    CelebrityInformationSensitivityVIP: CodingArgs;
    /**
     * Code: VISPOL
     */
    VisionCarePolicy: CodingArgs;
    /**
     * Code: VLI
     */
    LowValinLeucinIsoleucin: CodingArgs;
    /**
     * Code: VOLUME
     */
    ActSpecObsVolumeCode: CodingArgs;
    /**
     * Code: VR
     */
    Virtual: CodingArgs;
    /**
     * Code: VRFPAPER
     */
    VerifyPaperVRFPAPER: CodingArgs;
    /**
     * Code: VRXINV
     */
    VisionDispenseInvoice: CodingArgs;
    /**
     * Code: W
     */
    Ward: CodingArgs;
    /**
     * Code: WATTRNS
     */
    WaterBorneTransmission: CodingArgs;
    /**
     * Code: WCBPOL
     */
    WorkerQuoteSCompensation: CodingArgs;
    /**
     * Code: WEEK
     */
    Week: CodingArgs;
    /**
     * Code: WELLREMLE
     */
    WellnessReminderListEntry: CodingArgs;
    /**
     * Code: WELLREMLREV
     */
    WellnessReminderListReview: CodingArgs;
    /**
     * Code: WGHT
     */
    WGHT: CodingArgs;
    /**
     * Code: WIATTCH
     */
    WorkInjuryReportAttachment: CodingArgs;
    /**
     * Code: WORK2
     */
    WorkInteraction: CodingArgs;
    /**
     * Code: WPA
     */
    WorkplaceAccident: CodingArgs;
    /**
     * Code: WRKCOMP
     */
    WorkersCompensationProgram: CodingArgs;
    /**
     * Code: X
     */
    ContainerUnavailable: CodingArgs;
    /**
     * Code: XRAY
     */
    XRay: CodingArgs;
    /**
     * Code: YEAR
     */
    Year: CodingArgs;
};
/**
 * A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare const V3ActCodings: V3ActCodingType;
//# sourceMappingURL=V3ActCodings.d.ts.map