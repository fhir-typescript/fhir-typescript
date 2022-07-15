/**
 * A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare const V3ActCodes: {
    /**
     * Code: _ActAccountCode
     */
    readonly ActAccountCode: "_ActAccountCode";
    /**
     * Code: _ActAdjudicationCode
     */
    readonly ActAdjudicationCode: "_ActAdjudicationCode";
    /**
     * Code: _ActAdjudicationGroupCode
     */
    readonly ActAdjudicationGroupCode: "_ActAdjudicationGroupCode";
    /**
     * Code: _ActAdjudicationInformationCode
     */
    readonly ActAdjudicationInformationCode: "_ActAdjudicationInformationCode";
    /**
     * Code: _ActAdjudicationResultActionCode
     */
    readonly ActAdjudicationResultActionCode: "_ActAdjudicationResultActionCode";
    /**
     * Code: _ActAdministrativeAuthorizationDetectedIssueCode
     */
    readonly ActAdministrativeAuthorizationDetectedIssueCode: "_ActAdministrativeAuthorizationDetectedIssueCode";
    /**
     * Code: _ActAdministrativeDetectedIssueCode
     */
    readonly ActAdministrativeDetectedIssueCode: "_ActAdministrativeDetectedIssueCode";
    /**
     * Code: _ActAdministrativeDetectedIssueManagementCode
     */
    readonly ActAdministrativeDetectedIssueManagementCode: "_ActAdministrativeDetectedIssueManagementCode";
    /**
     * Code: _ActAdministrativeRuleDetectedIssueCode
     */
    readonly ActAdministrativeRuleDetectedIssueCode: "_ActAdministrativeRuleDetectedIssueCode";
    /**
     * Code: _ActBillableModifierCode
     */
    readonly ActBillableModifierCode: "_ActBillableModifierCode";
    /**
     * Code: _ActBillableServiceCode
     */
    readonly ActBillableServiceCode: "_ActBillableServiceCode";
    /**
     * Code: _ActBillableTreatmentPlanCode
     */
    readonly ActBillableTreatmentPlanCode: "_ActBillableTreatmentPlanCode";
    /**
     * Code: _ActBillingArrangementCode
     */
    readonly ActBillingArrangementCode: "_ActBillingArrangementCode";
    /**
     * Code: _ActBoundedROICode
     */
    readonly ActBoundedROICode: "_ActBoundedROICode";
    /**
     * Code: _ActCareProvisionCode
     */
    readonly ActCareProvision: "_ActCareProvisionCode";
    /**
     * Code: _ActClaimAttachmentCategoryCode
     */
    readonly ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode";
    /**
     * Code: _ActCognitiveProfessionalServiceCode
     */
    readonly ActCognitiveProfessionalServiceCode: "_ActCognitiveProfessionalServiceCode";
    /**
     * Code: _ActConsent
     */
    readonly ActConsent: "_ActConsent";
    /**
     * Code: _ActConsentDirective
     */
    readonly ActConsentDirective: "_ActConsentDirective";
    /**
     * Code: _ActConsentType
     */
    readonly ActConsentType: "_ActConsentType";
    /**
     * Code: _ActContainerRegistrationCode
     */
    readonly ActContainerRegistrationCode: "_ActContainerRegistrationCode";
    /**
     * Code: _ActControlVariable
     */
    readonly ActControlVariable: "_ActControlVariable";
    /**
     * Code: _ActCoverageAuthorizationConfirmationCode
     */
    readonly ActCoverageAuthorizationConfirmationCode: "_ActCoverageAuthorizationConfirmationCode";
    /**
     * Code: _ActCoverageConfirmationCode
     */
    readonly ActCoverageConfirmationCode: "_ActCoverageConfirmationCode";
    /**
     * Code: _ActCoverageEligibilityConfirmationCode
     */
    readonly ActCoverageEligibilityConfirmationCode: "_ActCoverageEligibilityConfirmationCode";
    /**
     * Code: _ActCoverageLimitCode
     */
    readonly ActCoverageLimitCode: "_ActCoverageLimitCode";
    /**
     * Code: _ActCoveragePartyLimitGroupCode
     */
    readonly ActCoveragePartyLimitGroupCode: "_ActCoveragePartyLimitGroupCode";
    /**
     * Code: _ActCoverageQuantityLimitCode
     */
    readonly ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode";
    /**
     * Code: _ActCoverageTypeCode
     */
    readonly ActCoverageTypeCode: "_ActCoverageTypeCode";
    /**
     * Code: _ActCoveredPartyLimitCode
     */
    readonly ActCoveredPartyLimitCode: "_ActCoveredPartyLimitCode";
    /**
     * Code: _ActCredentialedCareCode
     */
    readonly ActCredentialedCare: "_ActCredentialedCareCode";
    /**
     * Code: _ActCredentialedCareProvisionPersonCode
     */
    readonly ActCredentialedCareProvisionPeron: "_ActCredentialedCareProvisionPersonCode";
    /**
     * Code: _ActCredentialedCareProvisionProgramCode
     */
    readonly ActCredentialedCareProvisionProgram: "_ActCredentialedCareProvisionProgramCode";
    /**
     * Code: _ActDecision
     */
    readonly ActDecision: "_ActDecision";
    /**
     * Code: _ActDetectedIssueCode
     */
    readonly ActDetectedIssueCode: "_ActDetectedIssueCode";
    /**
     * Code: _ActDetectedIssueManagementCode
     */
    readonly ActDetectedIssueManagementCode: "_ActDetectedIssueManagementCode";
    /**
     * Code: _ActEncounterAccommodationCode
     */
    readonly ActEncounterAccommodationCode: "_ActEncounterAccommodationCode";
    /**
     * Code: _ActEncounterCode
     */
    readonly ActEncounterCode: "_ActEncounterCode";
    /**
     * Code: _ActExposureCode
     */
    readonly ActExposureCode: "_ActExposureCode";
    /**
     * Code: _ActFinancialDetectedIssueCode
     */
    readonly ActFinancialDetectedIssueCode: "_ActFinancialDetectedIssueCode";
    /**
     * Code: _ActFinancialDetectedIssueManagementCode
     */
    readonly ActFinancialDetectedIssueManagementCode: "_ActFinancialDetectedIssueManagementCode";
    /**
     * Code: _ActFinancialTransactionCode
     */
    readonly ActFinancialTransactionCode: "_ActFinancialTransactionCode";
    /**
     * Code: _ActGDPRConsentDirective
     */
    readonly ActGDPRConsentDirective: "_ActGDPRConsentDirective";
    /**
     * Code: _ActGDPRPrivacyLaw
     */
    readonly GeneralDataProtectionRegulation: "_ActGDPRPrivacyLaw";
    /**
     * Code: _ActGenericConsentDirective
     */
    readonly ActGenericConsentDirective: "_ActGenericConsentDirective";
    /**
     * Code: _ActHealthInsuranceTypeCode
     */
    readonly ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode";
    /**
     * Code: _ActIdentityDocumentCode
     */
    readonly ActIdentityDocumentCode: "_ActIdentityDocumentCode";
    /**
     * Code: _ActIncidentCode
     */
    readonly ActIncidentCode: "_ActIncidentCode";
    /**
     * Code: _ActInformationAccessCode
     */
    readonly ActInformationAccessCode: "_ActInformationAccessCode";
    /**
     * Code: _ActInformationAccessContextCode
     */
    readonly ActInformationAccessContextCode: "_ActInformationAccessContextCode";
    /**
     * Code: _ActInformationActionPolicy
     */
    readonly ActInformationActionPolicy: "_ActInformationActionPolicy";
    /**
     * Code: _ActInformationCategoryCode
     */
    readonly ActInformationCategoryCode: "_ActInformationCategoryCode";
    /**
     * Code: _ActInformationPolicy
     */
    readonly ActInformationPolicy: "_ActInformationPolicy";
    /**
     * Code: _ActInformationSensitivityPolicy
     */
    readonly ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy";
    /**
     * Code: _ActInsurancePolicyCode
     */
    readonly ActInsurancePolicyCode: "_ActInsurancePolicyCode";
    /**
     * Code: _ActInsuranceTypeCode
     */
    readonly ActInsuranceTypeCode: "_ActInsuranceTypeCode";
    /**
     * Code: _ActInvoiceAdjudicationPaymentCode
     */
    readonly ActInvoiceAdjudicationPaymentCode: "_ActInvoiceAdjudicationPaymentCode";
    /**
     * Code: _ActInvoiceAdjudicationPaymentGroupCode
     */
    readonly ActInvoiceAdjudicationPaymentGroupCode: "_ActInvoiceAdjudicationPaymentGroupCode";
    /**
     * Code: _ActInvoiceAdjudicationPaymentSummaryCode
     */
    readonly ActInvoiceAdjudicationPaymentSummaryCode: "_ActInvoiceAdjudicationPaymentSummaryCode";
    /**
     * Code: _ActInvoiceDetailClinicalProductCode
     */
    readonly ActInvoiceDetailClinicalProductCode: "_ActInvoiceDetailClinicalProductCode";
    /**
     * Code: _ActInvoiceDetailClinicalServiceCode
     */
    readonly ActInvoiceDetailClinicalServiceCode: "_ActInvoiceDetailClinicalServiceCode";
    /**
     * Code: _ActInvoiceDetailCode
     */
    readonly ActInvoiceDetailCode: "_ActInvoiceDetailCode";
    /**
     * Code: _ActInvoiceDetailDrugProductCode
     */
    readonly ActInvoiceDetailDrugProductCode: "_ActInvoiceDetailDrugProductCode";
    /**
     * Code: _ActInvoiceDetailGenericAdjudicatorCode
     */
    readonly ActInvoiceDetailGenericAdjudicatorCode: "_ActInvoiceDetailGenericAdjudicatorCode";
    /**
     * Code: _ActInvoiceDetailGenericCode
     */
    readonly ActInvoiceDetailGenericCode: "_ActInvoiceDetailGenericCode";
    /**
     * Code: _ActInvoiceDetailGenericModifierCode
     */
    readonly ActInvoiceDetailGenericModifierCode: "_ActInvoiceDetailGenericModifierCode";
    /**
     * Code: _ActInvoiceDetailGenericProviderCode
     */
    readonly ActInvoiceDetailGenericProviderCode: "_ActInvoiceDetailGenericProviderCode";
    /**
     * Code: _ActInvoiceDetailOralHealthProcedureCode
     */
    readonly ActInvoiceDetailOralHealthProcedureCode: "_ActInvoiceDetailOralHealthProcedureCode";
    /**
     * Code: _ActInvoiceDetailPreferredAccommodationCode
     */
    readonly ActInvoiceDetailPreferredAccommodationCode: "_ActInvoiceDetailPreferredAccommodationCode";
    /**
     * Code: _ActInvoiceDetailTaxCode
     */
    readonly ActInvoiceDetailTaxCode: "_ActInvoiceDetailTaxCode";
    /**
     * Code: _ActInvoiceElementCode
     */
    readonly ActInvoiceElementCode: "_ActInvoiceElementCode";
    /**
     * Code: _ActInvoiceElementSummaryCode
     */
    readonly ActInvoiceElementSummaryCode: "_ActInvoiceElementSummaryCode";
    /**
     * Code: _ActInvoiceGroupCode
     */
    readonly ActInvoiceGroupCode: "_ActInvoiceGroupCode";
    /**
     * Code: _ActInvoiceInterGroupCode
     */
    readonly ActInvoiceInterGroupCode: "_ActInvoiceInterGroupCode";
    /**
     * Code: _ActInvoiceOverrideCode
     */
    readonly ActInvoiceOverrideCode: "_ActInvoiceOverrideCode";
    /**
     * Code: _ActInvoicePaymentCode
     */
    readonly ActInvoiceAdjudicationPaymentGroupCodeActInvoicePaymentCode: "_ActInvoicePaymentCode";
    /**
     * Code: _ActInvoiceRootGroupCode
     */
    readonly ActInvoiceRootGroupCode: "_ActInvoiceRootGroupCode";
    /**
     * Code: _ActListCode
     */
    readonly ActListCode: "_ActListCode";
    /**
     * Code: _ActMedicalBillableServiceCode
     */
    readonly ActMedicalBillableServiceCode: "_ActMedicalBillableServiceCode";
    /**
     * Code: _ActMedicalServiceCode
     */
    readonly ActMedicalServiceCode: "_ActMedicalServiceCode";
    /**
     * Code: _ActMedicationTherapyDurationWorkingListCode
     */
    readonly ActMedicationTherapyDurationWorkingList: "_ActMedicationTherapyDurationWorkingListCode";
    /**
     * Code: _ActMonitoringProtocolCode
     */
    readonly ActMonitoringProtocolCode: "_ActMonitoringProtocolCode";
    /**
     * Code: _ActNonMedicalBillableServiceCode
     */
    readonly ActNonMedicalBillableServiceCode: "_ActNonMedicalBillableServiceCode";
    /**
     * Code: _ActNonObservationIndicationCode
     */
    readonly ActNonObservationIndicationCode: "_ActNonObservationIndicationCode";
    /**
     * Code: _ActObservationList
     */
    readonly ActObservationList: "_ActObservationList";
    /**
     * Code: _ActObservationVerificationType
     */
    readonly ActObservationVerification: "_ActObservationVerificationType";
    /**
     * Code: _ActOralHealthProcedureCode
     */
    readonly ActOralHealthProcedureCode: "_ActOralHealthProcedureCode";
    /**
     * Code: _ActOrderCode
     */
    readonly ActOrderCode: "_ActOrderCode";
    /**
     * Code: _ActPatientAnnotationType
     */
    readonly ActPatientAnnotationType: "_ActPatientAnnotationType";
    /**
     * Code: _ActPatientSafetyIncidentCode
     */
    readonly ActPatientSafetyIncidentCode: "_ActPatientSafetyIncidentCode";
    /**
     * Code: _ActPatientTransportationModeCode
     */
    readonly ActPatientTransportationModeCode: "_ActPatientTransportationModeCode";
    /**
     * Code: _ActPaymentCode
     */
    readonly ActPaymentCode: "_ActPaymentCode";
    /**
     * Code: _ActPharmacySupplyType
     */
    readonly ActPharmacySupplyType: "_ActPharmacySupplyType";
    /**
     * Code: _ActPolicyType
     */
    readonly ActPolicyType: "_ActPolicyType";
    /**
     * Code: _ActPrivacyConsentDirective
     */
    readonly ActPrivacyConsentDirective: "_ActPrivacyConsentDirective";
    /**
     * Code: _ActPrivacyLaw
     */
    readonly ActPrivacyLaw: "_ActPrivacyLaw";
    /**
     * Code: _ActPrivacyPolicy
     */
    readonly ActPrivacyPolicy: "_ActPrivacyPolicy";
    /**
     * Code: _ActPrivilegeCategorization
     */
    readonly ActPrivilegeCategorization: "_ActPrivilegeCategorization";
    /**
     * Code: _ActPrivilegeCategorizationType
     */
    readonly ActPrivilegeCategorizationType: "_ActPrivilegeCategorizationType";
    /**
     * Code: _ActProcedureCategoryList
     */
    readonly ActProcedureCategoryList: "_ActProcedureCategoryList";
    /**
     * Code: _ActProcedureCode
     */
    readonly ActProcedureCode: "_ActProcedureCode";
    /**
     * Code: _ActProductAcquisitionCode
     */
    readonly ActProductAcquisitionCode: "_ActProductAcquisitionCode";
    /**
     * Code: _ActProgramTypeCode
     */
    readonly ActProgramTypeCode: "_ActProgramTypeCode";
    /**
     * Code: _ActRegistryCode
     */
    readonly ActRegistryCode: "_ActRegistryCode";
    /**
     * Code: _ActSecurityObjectCode
     */
    readonly ActSecurityObjectCode: "_ActSecurityObjectCode";
    /**
     * Code: _ActSpecimenTransportCode
     */
    readonly ActSpecimenTransportCode: "_ActSpecimenTransportCode";
    /**
     * Code: _ActSpecimenTreatmentCode
     */
    readonly ActSpecimenTreatmentCode: "_ActSpecimenTreatmentCode";
    /**
     * Code: _ActSpecObsCode
     */
    readonly ActSpecObsCode: "_ActSpecObsCode";
    /**
     * Code: _ActSubstanceAdministrationCode
     */
    readonly ActSubstanceAdministrationCode: "_ActSubstanceAdministrationCode";
    /**
     * Code: _ActSuppliedItemDetectedIssueCode
     */
    readonly ActSuppliedItemDetectedIssueCode: "_ActSuppliedItemDetectedIssueCode";
    /**
     * Code: _ActTaskCode
     */
    readonly ActTaskCode: "_ActTaskCode";
    /**
     * Code: _ActTherapyDurationWorkingListCode
     */
    readonly ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode";
    /**
     * Code: _ActTransportationModeCode
     */
    readonly ActTransportationModeCode: "_ActTransportationModeCode";
    /**
     * Code: _ActUSPrivacyConsentDirective
     */
    readonly ActUSPrivacyConsentDirective: "_ActUSPrivacyConsentDirective";
    /**
     * Code: _ActUSPrivacyLaw
     */
    readonly ActUSPrivacyLaw: "_ActUSPrivacyLaw";
    /**
     * Code: _AdministrationDetectedIssueCode
     */
    readonly AdministrationDetectedIssueCode: "_AdministrationDetectedIssueCode";
    /**
     * Code: _AdvanceBeneficiaryNoticeType
     */
    readonly AdvanceBeneficiaryNoticeType: "_AdvanceBeneficiaryNoticeType";
    /**
     * Code: _AdverseSubstanceAdministrationEventActionTakenType
     */
    readonly AdverseSubstanceAdministrationEventActionTakenType: "_AdverseSubstanceAdministrationEventActionTakenType";
    /**
     * Code: _AnnotationType
     */
    readonly AnnotationType: "_AnnotationType";
    /**
     * Code: _AppropriatenessDetectedIssueCode
     */
    readonly AppropriatenessDetectedIssueCode: "_AppropriatenessDetectedIssueCode";
    /**
     * Code: _AuthorizationIssueManagementCode
     */
    readonly AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode";
    /**
     * Code: _CaseTransmissionMode
     */
    readonly CaseTransmissionMode: "_CaseTransmissionMode";
    /**
     * Code: _ClinicalActionDetectedIssueCode
     */
    readonly ClinicalActionDetectedIssueCode: "_ClinicalActionDetectedIssueCode";
    /**
     * Code: _CommonClinicalObservationType
     */
    readonly CommonClinicalObservationType: "_CommonClinicalObservationType";
    /**
     * Code: _CPT4
     */
    readonly CPT4: "_CPT4";
    /**
     * Code: _CPT5
     */
    readonly CPT5: "_CPT5";
    /**
     * Code: _CreditCard
     */
    readonly CreditCard: "_CreditCard";
    /**
     * Code: _DEADrugSchedule
     */
    readonly DEADrugSchedule: "_DEADrugSchedule";
    /**
     * Code: _DrugActionDetectedIssueCode
     */
    readonly DrugActionDetectedIssueCode: "_DrugActionDetectedIssueCode";
    /**
     * Code: _ECGAnnotationType
     */
    readonly ECGAnnotationType: "_ECGAnnotationType";
    /**
     * Code: _ECGControlVariable
     */
    readonly ECGControlVariable: "_ECGControlVariable";
    /**
     * Code: _ECGObservationSequenceType
     */
    readonly ECGObservationSequenceType: "_ECGObservationSequenceType";
    /**
     * Code: _ECGObservationSeriesType
     */
    readonly ECGObservationSeriesType: "_ECGObservationSeriesType";
    /**
     * Code: _EntitySensitivityPolicyType
     */
    readonly EntityInformationSensitivityPolicy: "_EntitySensitivityPolicyType";
    /**
     * Code: _ExternallyDefinedActCodes
     */
    readonly ExternallyDefinedActCodes: "_ExternallyDefinedActCodes";
    /**
     * Code: _FDALabelData
     */
    readonly FDALabelData: "_FDALabelData";
    /**
     * Code: _GeneticObservationType
     */
    readonly GeneticObservationType: "_GeneticObservationType";
    /**
     * Code: _HCPCS
     */
    readonly HCPCS: "_HCPCS";
    /**
     * Code: _HCPCSAccommodationCode
     */
    readonly HCPCSAccommodationCode: "_HCPCSAccommodationCode";
    /**
     * Code: _HL7AccommodationCode
     */
    readonly HL7AccommodationCode: "_HL7AccommodationCode";
    /**
     * Code: _HL7DefinedActCodes
     */
    readonly HL7DefinedActCodes: "_HL7DefinedActCodes";
    /**
     * Code: _HL7TriggerEventCode
     */
    readonly HL7TriggerEventCode: "_HL7TriggerEventCode";
    /**
     * Code: _ICD10PCS
     */
    readonly ICD10PCS: "_ICD10PCS";
    /**
     * Code: _ICD9PCS
     */
    readonly ICD9PCS: "_ICD9PCS";
    /**
     * Code: _ImmunizationObservationType
     */
    readonly ImmunizationObservationType: "_ImmunizationObservationType";
    /**
     * Code: _IndividualCaseSafetyReportCriteria
     */
    readonly IndividualCaseSafetyReportCriteria: "_IndividualCaseSafetyReportCriteria";
    /**
     * Code: _IndividualCaseSafetyReportProductCharacteristic
     */
    readonly IndividualCaseSafetyReportProductCharacteristic: "_IndividualCaseSafetyReportProductCharacteristic";
    /**
     * Code: _IndividualCaseSafetyReportType
     */
    readonly IndividualCaseSafetyReportType: "_IndividualCaseSafetyReportType";
    /**
     * Code: _InformationSensitivityPolicy
     */
    readonly InformationSensitivityPolicy: "_InformationSensitivityPolicy";
    /**
     * Code: _InteractionDetectedIssueCode
     */
    readonly InteractionDetectedIssueCode: "_InteractionDetectedIssueCode";
    /**
     * Code: _InvoiceElementAdjudicated
     */
    readonly InvoiceElementAdjudicated: "_InvoiceElementAdjudicated";
    /**
     * Code: _InvoiceElementPaid
     */
    readonly InvoiceElementPaid: "_InvoiceElementPaid";
    /**
     * Code: _InvoiceElementSubmitted
     */
    readonly InvoiceElementSubmitted: "_InvoiceElementSubmitted";
    /**
     * Code: _LOINCObservationActContextAgeType
     */
    readonly LOINCObservationActContextAgeType: "_LOINCObservationActContextAgeType";
    /**
     * Code: _MedicationObservationType
     */
    readonly MedicationObservationType: "_MedicationObservationType";
    /**
     * Code: _ObservationActAgeGroupType
     */
    readonly ObservationActAgeGroupType: "_ObservationActAgeGroupType";
    /**
     * Code: _ObservationAllergyTestCode
     */
    readonly ObservationAllergyTest: "_ObservationAllergyTestCode";
    /**
     * Code: _ObservationAllergyTestType
     */
    readonly ObservationAllergyTestType: "_ObservationAllergyTestType";
    /**
     * Code: _ObservationCausalityAssessmentType
     */
    readonly ObservationCausalityAssessment: "_ObservationCausalityAssessmentType";
    /**
     * Code: _ObservationDiagnosisTypes
     */
    readonly ObservationDiagnosisTypes: "_ObservationDiagnosisTypes";
    /**
     * Code: _ObservationDosageDefinitionPreconditionType
     */
    readonly ObservationDosageDefinitionPreconditionType: "_ObservationDosageDefinitionPreconditionType";
    /**
     * Code: _ObservationGenomicFamilyHistoryType
     */
    readonly ObservationGenomicFamilyHistoryType: "_ObservationGenomicFamilyHistoryType";
    /**
     * Code: _ObservationIndicationType
     */
    readonly ObservationIndicationType: "_ObservationIndicationType";
    /**
     * Code: _ObservationIssueTriggerCodedObservationType
     */
    readonly ObservationIssueTriggerCodedObservationType: "_ObservationIssueTriggerCodedObservationType";
    /**
     * Code: _ObservationIssueTriggerMeasuredObservationType
     */
    readonly ObservationIssueTriggerMeasuredObservationType: "_ObservationIssueTriggerMeasuredObservationType";
    /**
     * Code: _ObservationQualityMeasureAttribute
     */
    readonly ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute";
    /**
     * Code: _ObservationQueryMatchType
     */
    readonly ObservationQueryMatchType: "_ObservationQueryMatchType";
    /**
     * Code: _ObservationSequenceType
     */
    readonly ObservationSequenceType: "_ObservationSequenceType";
    /**
     * Code: _ObservationSeriesType
     */
    readonly ObservationSeriesType: "_ObservationSeriesType";
    /**
     * Code: _ObservationType
     */
    readonly ObservationType: "_ObservationType";
    /**
     * Code: _ObservationVisionPrescriptionType
     */
    readonly ObservationVisionPrescriptionType: "_ObservationVisionPrescriptionType";
    /**
     * Code: _PatientCharacteristicObservationType
     */
    readonly PatientCharacteristicObservationType: "_PatientCharacteristicObservationType";
    /**
     * Code: _PatientImmunizationRelatedObservationType
     */
    readonly PatientImmunizationRelatedObservationType: "_PatientImmunizationRelatedObservationType";
    /**
     * Code: _PopulationInclusionObservationType
     */
    readonly PopulationInclusionObservationType: "_PopulationInclusionObservationType";
    /**
     * Code: _PreferenceObservationType
     */
    readonly PreferenceObservationType: "_PreferenceObservationType";
    /**
     * Code: _ROIOverlayShape
     */
    readonly ROIOverlayShape: "_ROIOverlayShape";
    /**
     * Code: _RoleInformationSensitivityPolicy
     */
    readonly RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy";
    /**
     * Code: _SimpleMeasurableClinicalObservationType
     */
    readonly SimpleMeasurableClinicalObservationType: "_SimpleMeasurableClinicalObservationType";
    /**
     * Code: _SubstanceAdministrationActCode
     */
    readonly SubstanceAdministrationActCode: "_SubstanceAdministrationActCode";
    /**
     * Code: _SupplyDetectedIssueCode
     */
    readonly SupplyDetectedIssueCode: "_SupplyDetectedIssueCode";
    /**
     * Code: _TimingDetectedIssueCode
     */
    readonly TimingDetectedIssueCode: "_TimingDetectedIssueCode";
    /**
     * Code: 1
     */
    readonly TherapyAppropriate: "1";
    /**
     * Code: 10
     */
    readonly ProvidedPatientEducation: "10";
    /**
     * Code: 11
     */
    readonly AddedConcurrentTherapy: "11";
    /**
     * Code: 12
     */
    readonly TemporarilySuspendedConcurrentTherapy: "12";
    /**
     * Code: 13
     */
    readonly StoppedConcurrentTherapy: "13";
    /**
     * Code: 14
     */
    readonly SupplyAppropriate: "14";
    /**
     * Code: 15
     */
    readonly Replacement: "15";
    /**
     * Code: 16
     */
    readonly VacationSupply: "16";
    /**
     * Code: 17
     */
    readonly WeekendSupply: "17";
    /**
     * Code: 18
     */
    readonly LeaveOfAbsence: "18";
    /**
     * Code: 19
     */
    readonly ConsultedSupplier: "19";
    /**
     * Code: 2
     */
    readonly AssessedPatient: "2";
    /**
     * Code: 20
     */
    readonly AdditionalQuantityOnSeparateDispense: "20";
    /**
     * Code: 21
     */
    readonly AuthorizationConfirmed: "21";
    /**
     * Code: 21611-9
     */
    readonly AgePatientQnEst: "21611-9";
    /**
     * Code: 21612-7
     */
    readonly AgePatientQnReported: "21612-7";
    /**
     * Code: 22
     */
    readonly AppropriateIndicationOrDiagnosis: "22";
    /**
     * Code: 23
     */
    readonly PriorTherapyDocumented: "23";
    /**
     * Code: 29553-5
     */
    readonly AgePatientQnCalc: "29553-5";
    /**
     * Code: 3
     */
    readonly PatientExplanation: "3";
    /**
     * Code: 30525-0
     */
    readonly AgePatientQnDefinition: "30525-0";
    /**
     * Code: 30972-4
     */
    readonly AgeAtOnsetOfAdverseEvent: "30972-4";
    /**
     * Code: 4
     */
    readonly ConsultedOtherSource: "4";
    /**
     * Code: 42CFRPart2
     */
    readonly VAL42CFRPart2: "42CFRPart2";
    /**
     * Code: 42CFRPart2CD
     */
    readonly VAL42CFRPart2ConsentDirective: "42CFRPart2CD";
    /**
     * Code: 5
     */
    readonly ConsultedPrescriber: "5";
    /**
     * Code: 6
     */
    readonly PrescriberDeclinedChange: "6";
    /**
     * Code: 7
     */
    readonly InteractingTherapyNoLongerActivePlanned: "7";
    /**
     * Code: 8
     */
    readonly OtherActionTaken: "8";
    /**
     * Code: 9
     */
    readonly InstitutedOngoingMonitoringProgram: "9";
    /**
     * Code: a) HIPAAConsent
     */
    readonly HIPAAConsent: "a) HIPAAConsent";
    /**
     * Code: AA
     */
    readonly AdjudicatedWithAdjustments: "AA";
    /**
     * Code: AALC
     */
    readonly AccreditedAssistedLivingCare: "AALC";
    /**
     * Code: AAMC
     */
    readonly AccreditedAmbulatoryCare: "AAMC";
    /**
     * Code: ABHC
     */
    readonly AccreditedBehavioralHealthCare: "ABHC";
    /**
     * Code: ABUSE
     */
    readonly CommonlyAbusedMisusedAlert: "ABUSE";
    /**
     * Code: ACAC
     */
    readonly AccreditedCriticalAccessHospitalCare: "ACAC";
    /**
     * Code: ACADR
     */
    readonly AdverseDrugReactionAccess: "ACADR";
    /**
     * Code: ACALL
     */
    readonly AllAccess: "ACALL";
    /**
     * Code: ACALLG
     */
    readonly AllergyAccess: "ACALLG";
    /**
     * Code: ACCESSCONSCHEME
     */
    readonly AccessControlScheme: "ACCESSCONSCHEME";
    /**
     * Code: ACCONS
     */
    readonly InformationalConsentAccess: "ACCONS";
    /**
     * Code: ACCTRECEIVABLE
     */
    readonly AccountReceivable: "ACCTRECEIVABLE";
    /**
     * Code: ACDEMO
     */
    readonly DemographicsAccess: "ACDEMO";
    /**
     * Code: ACDI
     */
    readonly DiagnosticImagingAccess: "ACDI";
    /**
     * Code: ACH
     */
    readonly AutomatedClearingHouse: "ACH";
    /**
     * Code: ACHC
     */
    readonly AccreditedHospitalCare: "ACHC";
    /**
     * Code: ACID
     */
    readonly Acidification: "ACID";
    /**
     * Code: ACIMMUN
     */
    readonly ImmunizationAccess: "ACIMMUN";
    /**
     * Code: ACLAB
     */
    readonly LabTestResultAccess: "ACLAB";
    /**
     * Code: ACMED
     */
    readonly MedicationAccess: "ACMED";
    /**
     * Code: ACMEDC
     */
    readonly MedicalConditionAccess: "ACMEDC";
    /**
     * Code: ACMEN
     */
    readonly MentalHealthAccess: "ACMEN";
    /**
     * Code: ACOBS
     */
    readonly CommonObservationsAccess: "ACOBS";
    /**
     * Code: ACOCOMPT
     */
    readonly AccountableCareOrganizationCompartment: "ACOCOMPT";
    /**
     * Code: ACPOLPRG
     */
    readonly PolicyOrProgramInformationAccess: "ACPOLPRG";
    /**
     * Code: ACPROV
     */
    readonly ProviderInformationAccess: "ACPROV";
    /**
     * Code: ACPSERV
     */
    readonly ProfessionalServiceAccess: "ACPSERV";
    /**
     * Code: ACSUBSTAB
     */
    readonly SubstanceAbuseAccess: "ACSUBSTAB";
    /**
     * Code: ActTrustPolicyType
     */
    readonly TrustPolicy: "ActTrustPolicyType";
    /**
     * Code: ACU
     */
    readonly ShortTermAcute: "ACU";
    /**
     * Code: ACUTE
     */
    readonly InpatientAcute: "ACUTE";
    /**
     * Code: ADALRT
     */
    readonly AdultAlert: "ADALRT";
    /**
     * Code: ADCNPPELAT
     */
    readonly AdjudNullifiedPriorPeriodElectronicAmount: "ADCNPPELAT";
    /**
     * Code: ADCNPPELCT
     */
    readonly AdjudNullifiedPriorPeriodElectronicCount: "ADCNPPELCT";
    /**
     * Code: ADCNPPMNAT
     */
    readonly AdjudNullifiedPriorPeriodManualAmount: "ADCNPPMNAT";
    /**
     * Code: ADCNPPMNCT
     */
    readonly AdjudNullifiedPriorPeriodManualCount: "ADCNPPMNCT";
    /**
     * Code: ADCNSPELAT
     */
    readonly AdjudNullifiedSamePeriodElectronicAmount: "ADCNSPELAT";
    /**
     * Code: ADCNSPELCT
     */
    readonly AdjudNullifiedSamePeriodElectronicCount: "ADCNSPELCT";
    /**
     * Code: ADCNSPMNAT
     */
    readonly AdjudNullifiedSamePeriodManualAmount: "ADCNSPMNAT";
    /**
     * Code: ADCNSPMNCT
     */
    readonly AdjudNullifiedSamePeriodManualCount: "ADCNSPMNCT";
    /**
     * Code: ADMDX
     */
    readonly AdmittingDiagnosis: "ADMDX";
    /**
     * Code: ADNFPPELAT
     */
    readonly AdjudNullifiedPriorPeriodElectronicAmountADNFPPELAT: "ADNFPPELAT";
    /**
     * Code: ADNFPPELCT
     */
    readonly AdjudNullifiedPriorPeriodElectronicCountADNFPPELCT: "ADNFPPELCT";
    /**
     * Code: ADNFPPMNAT
     */
    readonly AdjudNullifiedPriorPeriodManualAmountADNFPPMNAT: "ADNFPPMNAT";
    /**
     * Code: ADNFPPMNCT
     */
    readonly AdjudNullifiedPriorPeriodManualCountADNFPPMNCT: "ADNFPPMNCT";
    /**
     * Code: ADNFSPELAT
     */
    readonly AdjudNullifiedSamePeriodElectronicAmountADNFSPELAT: "ADNFSPELAT";
    /**
     * Code: ADNFSPELCT
     */
    readonly AdjudNullifiedSamePeriodElectronicCountADNFSPELCT: "ADNFSPELCT";
    /**
     * Code: ADNFSPMNAT
     */
    readonly AdjudNullifiedSamePeriodManualAmountADNFSPMNAT: "ADNFSPMNAT";
    /**
     * Code: ADNFSPMNCT
     */
    readonly AdjudNullifiedSamePeriodManualCountADNFSPMNCT: "ADNFSPMNCT";
    /**
     * Code: ADNPPPELAT
     */
    readonly AdjudNonPayeePayablePriorPeriodElectronicAmount: "ADNPPPELAT";
    /**
     * Code: ADNPPPELCT
     */
    readonly AdjudNonPayeePayablePriorPeriodElectronicCount: "ADNPPPELCT";
    /**
     * Code: ADNPPPMNAT
     */
    readonly AdjudNonPayeePayablePriorPeriodManualAmount: "ADNPPPMNAT";
    /**
     * Code: ADNPPPMNCT
     */
    readonly AdjudNonPayeePayablePriorPeriodManualCount: "ADNPPPMNCT";
    /**
     * Code: ADNPSPELAT
     */
    readonly AdjudNonPayeePayableSamePeriodElectronicAmount: "ADNPSPELAT";
    /**
     * Code: ADNPSPELCT
     */
    readonly AdjudNonPayeePayableSamePeriodElectronicCount: "ADNPSPELCT";
    /**
     * Code: ADNPSPMNAT
     */
    readonly AdjudNonPayeePayableSamePeriodManualAmount: "ADNPSPMNAT";
    /**
     * Code: ADNPSPMNCT
     */
    readonly AdjudNonPayeePayableSamePeriodManualCount: "ADNPSPMNCT";
    /**
     * Code: ADOL
     */
    readonly AdolescentInformationSensitivity: "ADOL";
    /**
     * Code: ADPPPPELAT
     */
    readonly AdjudPayeePayablePriorPeriodElectronicAmount: "ADPPPPELAT";
    /**
     * Code: ADPPPPELCT
     */
    readonly AdjudPayeePayablePriorPeriodElectronicCount: "ADPPPPELCT";
    /**
     * Code: ADPPPPMNAT
     */
    readonly AdjudPayeePayablePriorPeriodManualAmout: "ADPPPPMNAT";
    /**
     * Code: ADPPPPMNCT
     */
    readonly AdjudPayeePayablePriorPeriodManualCount: "ADPPPPMNCT";
    /**
     * Code: ADPPSPELAT
     */
    readonly AdjudPayeePayableSamePeriodElectronicAmount: "ADPPSPELAT";
    /**
     * Code: ADPPSPELCT
     */
    readonly AdjudPayeePayableSamePeriodElectronicCount: "ADPPSPELCT";
    /**
     * Code: ADPPSPMNAT
     */
    readonly AdjudPayeePayableSamePeriodManualAmount: "ADPPSPMNAT";
    /**
     * Code: ADPPSPMNCT
     */
    readonly AdjudPayeePayableSamePeriodManualCount: "ADPPSPMNCT";
    /**
     * Code: ADRFPPELAT
     */
    readonly AdjudRefusedPriorPeriodElectronicAmount: "ADRFPPELAT";
    /**
     * Code: ADRFPPELCT
     */
    readonly AdjudRefusedPriorPeriodElectronicCount: "ADRFPPELCT";
    /**
     * Code: ADRFPPMNAT
     */
    readonly AdjudRefusedPriorPeriodManualAmount: "ADRFPPMNAT";
    /**
     * Code: ADRFPPMNCT
     */
    readonly AdjudRefusedPriorPeriodManualCount: "ADRFPPMNCT";
    /**
     * Code: ADRFSPELAT
     */
    readonly AdjudRefusedSamePeriodElectronicAmount: "ADRFSPELAT";
    /**
     * Code: ADRFSPELCT
     */
    readonly AdjudRefusedSamePeriodElectronicCount: "ADRFSPELCT";
    /**
     * Code: ADRFSPMNAT
     */
    readonly AdjudRefusedSamePeriodManualAmount: "ADRFSPMNAT";
    /**
     * Code: ADRFSPMNCT
     */
    readonly AdjudRefusedSamePeriodManualCount: "ADRFSPMNCT";
    /**
     * Code: ADVERSE_REACTION
     */
    readonly AdverseReaction: "ADVERSE_REACTION";
    /**
     * Code: AE
     */
    readonly AmericanExpress: "AE";
    /**
     * Code: AFOOT
     */
    readonly PedestrianTransport: "AFOOT";
    /**
     * Code: AFTHRS
     */
    readonly NonNormalHours: "AFTHRS";
    /**
     * Code: AGE
     */
    readonly AgeAlert: "AGE";
    /**
     * Code: AGGREGATE
     */
    readonly AggregateMeasureObservation: "AGGREGATE";
    /**
     * Code: AHOC
     */
    readonly AccreditedHomeCare: "AHOC";
    /**
     * Code: AIRTRNS
     */
    readonly AirborneTransmission: "AIRTRNS";
    /**
     * Code: ALC
     */
    readonly AlternativeLevelOfCare: "ALC";
    /**
     * Code: ALEC
     */
    readonly AlternateElectronic: "ALEC";
    /**
     * Code: ALG
     */
    readonly Allergy: "ALG";
    /**
     * Code: ALGY
     */
    readonly AllergyAlert: "ALGY";
    /**
     * Code: ALK
     */
    readonly Alkalization: "ALK";
    /**
     * Code: ALLCAT
     */
    readonly AllCategories: "ALLCAT";
    /**
     * Code: ALLDONE
     */
    readonly AlreadyPerformed: "ALLDONE";
    /**
     * Code: ALLERLE
     */
    readonly AllergyListEntry: "ALLERLE";
    /**
     * Code: ALLERLREV
     */
    readonly AllergyListReview: "ALLERLREV";
    /**
     * Code: ALLGCAT
     */
    readonly AllergyCategory: "ALLGCAT";
    /**
     * Code: ALRTENDLATE
     */
    readonly EndTooLateAlert: "ALRTENDLATE";
    /**
     * Code: ALRTSTRTLATE
     */
    readonly StartTooLateAlert: "ALRTSTRTLATE";
    /**
     * Code: ALTC
     */
    readonly AccreditedLongTermCare: "ALTC";
    /**
     * Code: AMB
     */
    readonly Ambulatory: "AMB";
    /**
     * Code: AMBAIR
     */
    readonly FixedWingAmbulanceTransport: "AMBAIR";
    /**
     * Code: AMBGRND
     */
    readonly GroundAmbulanceTransport: "AMBGRND";
    /**
     * Code: AMBHELO
     */
    readonly HelicopterAmbulanceTransport: "AMBHELO";
    /**
     * Code: AMBT
     */
    readonly AmbulanceTransport: "AMBT";
    /**
     * Code: Ambulance
     */
    readonly AmbulanceTransportAmbulance: "Ambulance";
    /**
     * Code: ANANTRNS
     */
    readonly AnimalToAnimalTransmission: "ANANTRNS";
    /**
     * Code: ANF
     */
    readonly AdjudicatedWithAdjustmentsAndNoFinancialImpact: "ANF";
    /**
     * Code: ANHUMTRNS
     */
    readonly AnimalToHumanTransmission: "ANHUMTRNS";
    /**
     * Code: ANNDI
     */
    readonly DiagnosticImageNote: "ANNDI";
    /**
     * Code: ANNGEN
     */
    readonly GeneralNote: "ANNGEN";
    /**
     * Code: ANNIMM
     */
    readonly ImmunizationNote: "ANNIMM";
    /**
     * Code: ANNLAB
     */
    readonly LaboratoryNote: "ANNLAB";
    /**
     * Code: ANNMED
     */
    readonly MedicationNote: "ANNMED";
    /**
     * Code: ANNU
     */
    readonly AnnuityPolicy: "ANNU";
    /**
     * Code: ANONY
     */
    readonly Anonymize: "ANONY";
    /**
     * Code: AOD
     */
    readonly AccountingOfDisclosure: "AOD";
    /**
     * Code: AOSC
     */
    readonly AccreditedOfficeBasedSurgeryCare: "AOSC";
    /**
     * Code: AR
     */
    readonly AdjudicatedAsRefused: "AR";
    /**
     * Code: ARCAT
     */
    readonly AdverseDrugReactionCategory: "ARCAT";
    /**
     * Code: ARTBLD
     */
    readonly ActSpecObsArtBldCode: "ARTBLD";
    /**
     * Code: AS
     */
    readonly AdjudicatedAsSubmitted: "AS";
    /**
     * Code: ASSERTION
     */
    readonly Assertion: "ASSERTION";
    /**
     * Code: AUDIT
     */
    readonly Audit: "AUDIT";
    /**
     * Code: AUDTR
     */
    readonly AuditTrail: "AUDTR";
    /**
     * Code: AUTH
     */
    readonly Authorized: "AUTH";
    /**
     * Code: AUTHPOL
     */
    readonly AuthorizationPolicy: "AUTHPOL";
    /**
     * Code: AUTO
     */
    readonly AutoRepeatPermission: "AUTO";
    /**
     * Code: AUTO-HIGH
     */
    readonly AutoHighDilution: "AUTO-HIGH";
    /**
     * Code: AUTO-LOW
     */
    readonly AutoLowDilution: "AUTO-LOW";
    /**
     * Code: AUTOATTCH
     */
    readonly AutoAttachment: "AUTOATTCH";
    /**
     * Code: AUTOPOL
     */
    readonly Automobile: "AUTOPOL";
    /**
     * Code: AVAILABLE
     */
    readonly AvailableVolume: "AVAILABLE";
    /**
     * Code: B
     */
    readonly BusinessInformationSensitivity: "B";
    /**
     * Code: BDYFLDTRNS
     */
    readonly BodyFluidContactTransmission: "BDYFLDTRNS";
    /**
     * Code: BH
     */
    readonly BehavioralHealthInformationSensitivity: "BH";
    /**
     * Code: BLDTRNS
     */
    readonly BloodBorneTransmission: "BLDTRNS";
    /**
     * Code: BLK
     */
    readonly BlockFunding: "BLK";
    /**
     * Code: BONUS
     */
    readonly Bonus: "BONUS";
    /**
     * Code: BOOSTER
     */
    readonly BoosterImmunization: "BOOSTER";
    /**
     * Code: BR
     */
    readonly BreikostGE: "BR";
    /**
     * Code: BUS
     */
    readonly BusinessConstraintViolation: "BUS";
    /**
     * Code: C
     */
    readonly Corrected: "C";
    /**
     * Code: CACC
     */
    readonly CertifiedAnatomicPathologyAndClinicalPathologyCare: "CACC";
    /**
     * Code: CACS
     */
    readonly CertifiedAcuteCoronarySyndromeCare: "CACS";
    /**
     * Code: CAIC
     */
    readonly CertifiedAllergyAndImmunologyCare: "CAIC";
    /**
     * Code: CAMC
     */
    readonly CertifiedAerospaceMedicineCare: "CAMC";
    /**
     * Code: CAMI
     */
    readonly CertifiedAcuteMyocardialInfarctionCare: "CAMI";
    /**
     * Code: CANC
     */
    readonly CertifiedAnesthesiologyCare: "CANC";
    /**
     * Code: CANCAPT
     */
    readonly CancelledAppointment: "CANCAPT";
    /**
     * Code: CANPRG
     */
    readonly WomenQuoteSCancerDetectionProgram: "CANPRG";
    /**
     * Code: CAP
     */
    readonly CapitationFunding: "CAP";
    /**
     * Code: CAPC
     */
    readonly CertifiedAnatomicPathologyCare: "CAPC";
    /**
     * Code: CARD
     */
    readonly Cardiology: "CARD";
    /**
     * Code: CAREGAP
     */
    readonly Caregap: "CAREGAP";
    /**
     * Code: CARELIST
     */
    readonly CarePlan: "CARELIST";
    /**
     * Code: CASESER
     */
    readonly CaseSeriousnessCriteria: "CASESER";
    /**
     * Code: CASH
     */
    readonly Cash: "CASH";
    /**
     * Code: CAST
     */
    readonly CertifiedAsthmaCare: "CAST";
    /**
     * Code: CBAR
     */
    readonly CertifiedBariatricSurgeryCare: "CBAR";
    /**
     * Code: CBGC
     */
    readonly CertifiedClinicalBiochemicalGeneticsCare: "CBGC";
    /**
     * Code: CC
     */
    readonly CreditCardCC: "CC";
    /**
     * Code: CCAD
     */
    readonly CertifiedCoronaryArteryDiseaseCare: "CCAD";
    /**
     * Code: CCAR
     */
    readonly CertifiedCardiacCare: "CCAR";
    /**
     * Code: CCCC
     */
    readonly CertifiedClinicalCytogeneticsCare: "CCCC";
    /**
     * Code: CCGC
     */
    readonly CertifiedClinicalGeneticsMDCare: "CCGC";
    /**
     * Code: CCPC
     */
    readonly CertifiedClinicalPathologyCare: "CCPC";
    /**
     * Code: CCSC
     */
    readonly CertifiedColonAndRectalSurgeryCare: "CCSC";
    /**
     * Code: CDEC
     */
    readonly CertifiedDermatologyCare: "CDEC";
    /**
     * Code: CDEP
     */
    readonly CertifiedDepressionCare: "CDEP";
    /**
     * Code: CDGD
     */
    readonly CertifiedDigestiveGastrointestinalDisordersCare: "CDGD";
    /**
     * Code: CDIA
     */
    readonly CertifiedDiabetesCare: "CDIA";
    /**
     * Code: CDIO
     */
    readonly CaseDiseaseImportedObservation: "CDIO";
    /**
     * Code: CDRC
     */
    readonly CertifiedDiagnosticRadiologyCare: "CDRC";
    /**
     * Code: CDSREV
     */
    readonly ClinicalDecisionSupportInterventionReview: "CDSREV";
    /**
     * Code: CDSSCOMPT
     */
    readonly CDSSystemCompartment: "CDSSCOMPT";
    /**
     * Code: CEL
     */
    readonly CelebrityInformationSensitivity: "CEL";
    /**
     * Code: CEMC
     */
    readonly CertifiedEmergencyMedicineCare: "CEMC";
    /**
     * Code: CEPI
     */
    readonly CertifiedEpilepsyCare: "CEPI";
    /**
     * Code: CFEL
     */
    readonly CertifiedFrailElderlyCare: "CFEL";
    /**
     * Code: CFPC
     */
    readonly CertifiedFamilyPracticeCare: "CFPC";
    /**
     * Code: CFWD
     */
    readonly CarryForwardAdjusment: "CFWD";
    /**
     * Code: CHAR
     */
    readonly CharityProgram: "CHAR";
    /**
     * Code: CHFC
     */
    readonly CertifiedHeartFailureCare: "CHFC";
    /**
     * Code: CHK
     */
    readonly Cheque: "CHK";
    /**
     * Code: CHLDCARE
     */
    readonly DayCareChildCareInteraction: "CHLDCARE";
    /**
     * Code: CHR
     */
    readonly Chronic: "CHR";
    /**
     * Code: CHRG
     */
    readonly StandardCharge: "CHRG";
    /**
     * Code: CHRO
     */
    readonly CertifiedHighRiskObstetricsCare: "CHRO";
    /**
     * Code: CHRON
     */
    readonly ContinuousChronic: "CHRON";
    /**
     * Code: CHYP
     */
    readonly CertifiedHyperlipidemiaCare: "CHYP";
    /**
     * Code: CIMC
     */
    readonly CertifiedInternalMedicineCare: "CIMC";
    /**
     * Code: CIRCLE
     */
    readonly Circle: "CIRCLE";
    /**
     * Code: CLINNOTEE
     */
    readonly ClinicalNoteEntryTask: "CLINNOTEE";
    /**
     * Code: CLINNOTEREV
     */
    readonly ClinicalNoteReviewTask: "CLINNOTEREV";
    /**
     * Code: CLSSRM
     */
    readonly Classroom: "CLSSRM";
    /**
     * Code: CMGC
     */
    readonly CertifiedClinicalMolecularGeneticsCare: "CMGC";
    /**
     * Code: CMIH
     */
    readonly CertifiedMigraineHeadacheCare: "CMIH";
    /**
     * Code: CMPMSRMTH
     */
    readonly CompositeMeasureMethod: "CMPMSRMTH";
    /**
     * Code: CMPMSRSCRWGHT
     */
    readonly ComponentMeasureScoringWeight: "CMPMSRSCRWGHT";
    /**
     * Code: CMSC
     */
    readonly CertifiedMultipleSclerosisCare: "CMSC";
    /**
     * Code: CNEC
     */
    readonly CertifiedNeurologyCare: "CNEC";
    /**
     * Code: CNMC
     */
    readonly CertifiedNuclearMedicineCare: "CNMC";
    /**
     * Code: CNQC
     */
    readonly CertifiedNeurologyWithSpecialQualificationsInChildNeurologyCare: "CNQC";
    /**
     * Code: CNSC
     */
    readonly CertifiedNeurologicalSurgeryCare: "CNSC";
    /**
     * Code: COBSCAT
     */
    readonly CommonObservationCategory: "COBSCAT";
    /**
     * Code: CODE_DEPREC
     */
    readonly CodeHasBeenDeprecated: "CODE_DEPREC";
    /**
     * Code: CODE_INVAL
     */
    readonly CodeIsNotValid: "CODE_INVAL";
    /**
     * Code: COGC
     */
    readonly CertifiedObstetricsAndGynecologyCare: "COGC";
    /**
     * Code: COGN
     */
    readonly CognitiveDisabilityInformationSensitivity: "COGN";
    /**
     * Code: COIN
     */
    readonly Coinsurance: "COIN";
    /**
     * Code: COINS
     */
    readonly CoInsurance: "COINS";
    /**
     * Code: COJR
     */
    readonly CertifiedOrthopedicJointReplacementCare: "COJR";
    /**
     * Code: COL
     */
    readonly CollisionCoveragePolicy: "COL";
    /**
     * Code: COMC
     */
    readonly CertifiedOccupationalMedicineCare: "COMC";
    /**
     * Code: CommonRule
     */
    readonly CommonRule: "CommonRule";
    /**
     * Code: COMPLY
     */
    readonly ComplianceAlert: "COMPLY";
    /**
     * Code: CompoundResearchCD
     */
    readonly CompoundHIPAAResearchAuthorizationAndInformedConsentForResearch: "CompoundResearchCD";
    /**
     * Code: COMPT
     */
    readonly Compartment: "COMPT";
    /**
     * Code: CONC
     */
    readonly CertifiedOncologyCare: "CONC";
    /**
     * Code: COND
     */
    readonly ConditionAlert: "COND";
    /**
     * Code: CONDLIST
     */
    readonly ConditionList: "CONDLIST";
    /**
     * Code: ConfidentialMark
     */
    readonly ConfidentialMark: "ConfidentialMark";
    /**
     * Code: CONSUMPTION
     */
    readonly ConsumptionVolume: "CONSUMPTION";
    /**
     * Code: CONT
     */
    readonly Contract: "CONT";
    /**
     * Code: CONTF
     */
    readonly ContractFunding: "CONTF";
    /**
     * Code: CONTROLLED
     */
    readonly CONTROLLED: "CONTROLLED";
    /**
     * Code: ControlledUnclassifiedInformation
     */
    readonly ControlledUnclassifiedInformation: "ControlledUnclassifiedInformation";
    /**
     * Code: CONVEYNC
     */
    readonly CommonConveyanceInteraction: "CONVEYNC";
    /**
     * Code: COPAY
     */
    readonly COPAY: "COPAY";
    /**
     * Code: COPAYMENT
     */
    readonly PatientCoPay: "COPAYMENT";
    /**
     * Code: COPC
     */
    readonly CertifiedOphthalmologyCare: "COPC";
    /**
     * Code: COPD
     */
    readonly CertifiedChronicObstructivePulmonaryDiseaseCare: "COPD";
    /**
     * Code: COPY
     */
    readonly Copyright: "COPY";
    /**
     * Code: COPYMark
     */
    readonly CopyOfOriginalMark: "COPYMark";
    /**
     * Code: CORT
     */
    readonly CertifiedOrganTransplantCare: "CORT";
    /**
     * Code: COSC
     */
    readonly CertifiedOrthopaedicSurgeryCare: "COSC";
    /**
     * Code: COTC
     */
    readonly CertifiedOtolaryngologyCare: "COTC";
    /**
     * Code: COVGE
     */
    readonly CoverageProblem: "COVGE";
    /**
     * Code: COVMX
     */
    readonly CoverageMaximum: "COVMX";
    /**
     * Code: COVPOL
     */
    readonly BenefitPolicy: "COVPOL";
    /**
     * Code: COVPRD
     */
    readonly CoveragePeriod: "COVPRD";
    /**
     * Code: CP
     */
    readonly ClinicalProductInvoice: "CP";
    /**
     * Code: CPAD
     */
    readonly CertifiedParkinsonsDiseaseCare: "CPAD";
    /**
     * Code: CPEC
     */
    readonly CertifiedPediatricsCare: "CPEC";
    /**
     * Code: CPGC
     */
    readonly CertifiedPhDMedicalGeneticsCare: "CPGC";
    /**
     * Code: CPHC
     */
    readonly CertifiedPublicHealthAndGeneralPreventiveMedicineCare: "CPHC";
    /**
     * Code: CPINV
     */
    readonly ClinicalProductInvoiceCPINV: "CPINV";
    /**
     * Code: CPLYCC
     */
    readonly ComplyWithConfidentialityCode: "CPLYCC";
    /**
     * Code: CPLYCD
     */
    readonly ComplyWithConsentDirective: "CPLYCD";
    /**
     * Code: CPLYCUI
     */
    readonly ComplyWithControlledUnclassifiedInformationPolicy: "CPLYCUI";
    /**
     * Code: CPLYJPP
     */
    readonly ComplyWithJurisdictionalPrivacyPolicy: "CPLYJPP";
    /**
     * Code: CPLYJSP
     */
    readonly ComplyWithJurisdictionalSecurityPolicy: "CPLYJSP";
    /**
     * Code: CPLYOPP
     */
    readonly ComplyWithOrganizationalPrivacyPolicy: "CPLYOPP";
    /**
     * Code: CPLYOSP
     */
    readonly ComplyWithOrganizationalSecurityPolicy: "CPLYOSP";
    /**
     * Code: CPLYPOL
     */
    readonly ComplyWithPolicy: "CPLYPOL";
    /**
     * Code: CPND
     */
    readonly CertifiedPneumoniaDiseaseCare: "CPND";
    /**
     * Code: CPNDDRGING
     */
    readonly CompoundDrugInvoiceGroup: "CPNDDRGING";
    /**
     * Code: CPNDINDING
     */
    readonly CompoundIngredientInvoiceGroup: "CPNDINDING";
    /**
     * Code: CPNDSUPING
     */
    readonly CompoundSupplyInvoiceGroup: "CPNDSUPING";
    /**
     * Code: CPRC
     */
    readonly CertifiedPhysicalMedicineAndRehabilitationCare: "CPRC";
    /**
     * Code: CPSC
     */
    readonly CertifiedPlasticSurgeryCare: "CPSC";
    /**
     * Code: CPST
     */
    readonly CertifiedPrimaryStrokeCenterCare: "CPST";
    /**
     * Code: CPTM
     */
    readonly CPTModifierCodes: "CPTM";
    /**
     * Code: CPYC
     */
    readonly CertifiedPsychiatryCare: "CPYC";
    /**
     * Code: CREACT
     */
    readonly CommonReactionAlert: "CREACT";
    /**
     * Code: CRIME
     */
    readonly CrimeVictimProgram: "CRIME";
    /**
     * Code: CRIT
     */
    readonly Criticality: "CRIT";
    /**
     * Code: CROC
     */
    readonly CertifiedRadiationOncologyCare: "CROC";
    /**
     * Code: CRPC
     */
    readonly CertifiedRadiologicalPhysicsCare: "CRPC";
    /**
     * Code: CRS
     */
    readonly ClinicalRecommendationStatement: "CRS";
    /**
     * Code: CS
     */
    readonly ClinicalServiceInvoice: "CS";
    /**
     * Code: CSDM
     */
    readonly CertifiedStrokeDiseaseManagementCare: "CSDM";
    /**
     * Code: CSIC
     */
    readonly CertifiedSickleCellCare: "CSIC";
    /**
     * Code: CSINV
     */
    readonly ClinicalServiceInvoiceCSINV: "CSINV";
    /**
     * Code: CSLD
     */
    readonly CertifiedSleepDisordersCare: "CSLD";
    /**
     * Code: CSPINV
     */
    readonly ClinicalServiceAndProduct: "CSPINV";
    /**
     * Code: CSPT
     */
    readonly CertifiedSpineTreatmentCare: "CSPT";
    /**
     * Code: CSUC
     */
    readonly CertifiedSurgeryCare: "CSUC";
    /**
     * Code: CTBU
     */
    readonly CertifiedTraumaBurnCenterCare: "CTBU";
    /**
     * Code: CTCOMPT
     */
    readonly CareTeamCompartment: "CTCOMPT";
    /**
     * Code: CTLSUB
     */
    readonly ControlledSubstance: "CTLSUB";
    /**
     * Code: CTMO
     */
    readonly CaseTransmissionModeObservation: "CTMO";
    /**
     * Code: CTSC
     */
    readonly CertifiedThoracicSurgeryCare: "CTSC";
    /**
     * Code: CUI
     */
    readonly CUI: "CUI";
    /**
     * Code: CUIHLTH
     */
    readonly CUIHLTH: "CUIHLTH";
    /**
     * Code: CUIHLTHP
     */
    readonly CUIHLTHCUIHLTHP: "CUIHLTHP";
    /**
     * Code: CUIMark
     */
    readonly CUIMark: "CUIMark";
    /**
     * Code: CUIP
     */
    readonly CUICUIP: "CUIP";
    /**
     * Code: CUIPRVCY
     */
    readonly CUIPRVCY: "CUIPRVCY";
    /**
     * Code: CUIPRVCYP
     */
    readonly CUIPRVCYCUIPRVCYP: "CUIPRVCYP";
    /**
     * Code: CUISP-HLTH
     */
    readonly CUISPHLTH: "CUISP-HLTH";
    /**
     * Code: CUISP-HLTHP
     */
    readonly CUISPHLTHCUISPHLTHP: "CUISP-HLTHP";
    /**
     * Code: CUISP-PRVCY
     */
    readonly CUISPPRVCY: "CUISP-PRVCY";
    /**
     * Code: CUISP-PRVCYP
     */
    readonly CUISPPRVCYCUISPPRVCYP: "CUISP-PRVCYP";
    /**
     * Code: CURC
     */
    readonly CertifiedUrologyCare: "CURC";
    /**
     * Code: CURMEDLIST
     */
    readonly CurrentMedicationList: "CURMEDLIST";
    /**
     * Code: CURRENT
     */
    readonly CurrentVolume: "CURRENT";
    /**
     * Code: CVDC
     */
    readonly CertifiedVascularDiseasesCare: "CVDC";
    /**
     * Code: CVSC
     */
    readonly CertifiedVascularSurgeryCare: "CVSC";
    /**
     * Code: CWMA
     */
    readonly CertifiedWoundManagementCare: "CWMA";
    /**
     * Code: CWOH
     */
    readonly CertifiedWomenQuoteSHealthCare: "CWOH";
    /**
     * Code: DACT
     */
    readonly DrugActionDetectedIssue: "DACT";
    /**
     * Code: DALG
     */
    readonly DrugAllergy: "DALG";
    /**
     * Code: DAY
     */
    readonly Day: "DAY";
    /**
     * Code: DDP
     */
    readonly DirectDeposit: "DDP";
    /**
     * Code: DECLASSIFYLABEL
     */
    readonly DeclassifySecurityLabel: "DECLASSIFYLABEL";
    /**
     * Code: DEDUCT
     */
    readonly DEDUCT: "DEDUCT";
    /**
     * Code: DEDUCTIBLE
     */
    readonly Deductible: "DEDUCTIBLE";
    /**
     * Code: DEF
     */
    readonly Definition: "DEF";
    /**
     * Code: DEFB
     */
    readonly Defibrination: "DEFB";
    /**
     * Code: DEID
     */
    readonly Deidentify: "DEID";
    /**
     * Code: DELAU
     */
    readonly DeleteAfterUse: "DELAU";
    /**
     * Code: DELEPOL
     */
    readonly DelegationPolicy: "DELEPOL";
    /**
     * Code: DeliverToAddresseeOnlyMark
     */
    readonly DeliverOnlyToAddresseeMark: "DeliverToAddresseeOnlyMark";
    /**
     * Code: DEMO
     */
    readonly AllDemographicInformationSensitivity: "DEMO";
    /**
     * Code: DEMOCAT
     */
    readonly DemographicsCategory: "DEMOCAT";
    /**
     * Code: DENEX
     */
    readonly DenominatorExclusions: "DENEX";
    /**
     * Code: DENEXCEP
     */
    readonly DenominatorExceptions: "DENEXCEP";
    /**
     * Code: DENOM
     */
    readonly Denominator: "DENOM";
    /**
     * Code: DENTAL
     */
    readonly DentalCarePolicy: "DENTAL";
    /**
     * Code: DENTPRG
     */
    readonly DentalProgram: "DENTPRG";
    /**
     * Code: DERMTRNS
     */
    readonly TransdermalTransmission: "DERMTRNS";
    /**
     * Code: DF
     */
    readonly DailyFill: "DF";
    /**
     * Code: DIA
     */
    readonly DiagnosisInformationSensitivity: "DIA";
    /**
     * Code: DIAGLISTE
     */
    readonly DiagnosisListEntryTask: "DIAGLISTE";
    /**
     * Code: DIAGLISTREV
     */
    readonly DiagnosisListReviewTask: "DIAGLISTREV";
    /**
     * Code: DICAT
     */
    readonly DiagnosticImageCategory: "DICAT";
    /**
     * Code: DIET
     */
    readonly Diet: "DIET";
    /**
     * Code: DILUTION
     */
    readonly ActSpecObsDilutionCode: "DILUTION";
    /**
     * Code: DINT
     */
    readonly DrugIntolerance: "DINT";
    /**
     * Code: DIS
     */
    readonly DisabilityInsurancePolicy: "DIS";
    /**
     * Code: DISC
     */
    readonly Disclaimer: "DISC";
    /**
     * Code: DISCHINSTE
     */
    readonly DischargeInstructionEntry: "DISCHINSTE";
    /**
     * Code: DISCHSUME
     */
    readonly DischargeSummaryEntryTask: "DISCHSUME";
    /**
     * Code: DISCHSUMREV
     */
    readonly DischargeSummaryReviewTask: "DISCHSUMREV";
    /**
     * Code: DISCMEDLIST
     */
    readonly DischargeMedicationList: "DISCMEDLIST";
    /**
     * Code: DISDX
     */
    readonly DischargeDiagnosis: "DISDX";
    /**
     * Code: DISEASE
     */
    readonly DiseaseSpecificPolicy: "DISEASE";
    /**
     * Code: DISEASEPRG
     */
    readonly PublicHealthProgram: "DISEASEPRG";
    /**
     * Code: DISPLAY
     */
    readonly Display: "DISPLAY";
    /**
     * Code: DM
     */
    readonly DiabetesMellitusDiet: "DM";
    /**
     * Code: DN
     */
    readonly DinerQuoteSClub: "DN";
    /**
     * Code: DNAINT
     */
    readonly DrugNonAllergyIntolerance: "DNAINT";
    /**
     * Code: DNTL
     */
    readonly Dental: "DNTL";
    /**
     * Code: DOB
     */
    readonly DateOfBirthInformationSensitivity: "DOB";
    /**
     * Code: DOCUMENT
     */
    readonly Document: "DOCUMENT";
    /**
     * Code: DOSE
     */
    readonly DosageProblem: "DOSE";
    /**
     * Code: DOSECOND
     */
    readonly DosageConditionAlert: "DOSECOND";
    /**
     * Code: DOSEDUR
     */
    readonly DoseDurationAlert: "DOSEDUR";
    /**
     * Code: DOSEDURH
     */
    readonly DoseDurationHighAlert: "DOSEDURH";
    /**
     * Code: DOSEDURHIND
     */
    readonly DoseDurationHighForIndicationAlert: "DOSEDURHIND";
    /**
     * Code: DOSEDURL
     */
    readonly DoseDurationLowAlert: "DOSEDURL";
    /**
     * Code: DOSEDURLIND
     */
    readonly DoseDurationLowForIndicationAlert: "DOSEDURLIND";
    /**
     * Code: DOSEH
     */
    readonly HighDoseAlert: "DOSEH";
    /**
     * Code: DOSEHIND
     */
    readonly HighDoseForIndicationAlert: "DOSEHIND";
    /**
     * Code: DOSEHINDA
     */
    readonly HighDoseForAgeAlert: "DOSEHINDA";
    /**
     * Code: DOSEHINDSA
     */
    readonly HighDoseForHeightSurfaceAreaAlert: "DOSEHINDSA";
    /**
     * Code: DOSEHINDW
     */
    readonly HighDoseForWeightAlert: "DOSEHINDW";
    /**
     * Code: DOSEIND
     */
    readonly DOSEIND: "DOSEIND";
    /**
     * Code: DOSEIVL
     */
    readonly DoseIntervalAlert: "DOSEIVL";
    /**
     * Code: DOSEIVLIND
     */
    readonly DoseIntervalForIndicationAlert: "DOSEIVLIND";
    /**
     * Code: DOSEL
     */
    readonly LowDoseAlert: "DOSEL";
    /**
     * Code: DOSELIND
     */
    readonly LowDoseForIndicationAlert: "DOSELIND";
    /**
     * Code: DOSELINDA
     */
    readonly LowDoseForAgeAlert: "DOSELINDA";
    /**
     * Code: DOSELINDSA
     */
    readonly LowDoseForHeightSurfaceAreaAlert: "DOSELINDSA";
    /**
     * Code: DOSELINDW
     */
    readonly LowDoseForWeightAlert: "DOSELINDW";
    /**
     * Code: DOWNGRDLABEL
     */
    readonly DowngradeSecurityLabel: "DOWNGRDLABEL";
    /**
     * Code: DRAFTMark
     */
    readonly DraftMark: "DRAFTMark";
    /**
     * Code: DRG
     */
    readonly DrugInteractionAlert: "DRG";
    /**
     * Code: DRGIS
     */
    readonly DrugInformationSensitivity: "DRGIS";
    /**
     * Code: DRGRHB
     */
    readonly DrugRehab: "DRGRHB";
    /**
     * Code: DRIVLABEL
     */
    readonly DeriveSecurityLabel: "DRIVLABEL";
    /**
     * Code: DRUG
     */
    readonly DrugTherapy: "DRUG";
    /**
     * Code: DRUGING
     */
    readonly DrugInvoiceGroup: "DRUGING";
    /**
     * Code: DRUGPOL
     */
    readonly DrugPolicy: "DRUGPOL";
    /**
     * Code: DRUGPRG
     */
    readonly DrugProgram: "DRUGPRG";
    /**
     * Code: DSC
     */
    readonly Discount: "DSC";
    /**
     * Code: DUPTHPCLS
     */
    readonly DuplicateTherapeuticAlassAlert: "DUPTHPCLS";
    /**
     * Code: DUPTHPGEN
     */
    readonly DuplicateGenericAlert: "DUPTHPGEN";
    /**
     * Code: DUPTHPY
     */
    readonly DuplicateTherapyAlert: "DUPTHPY";
    /**
     * Code: DV
     */
    readonly DiscoverCard: "DV";
    /**
     * Code: DVD
     */
    readonly DevelopmentalDisabilityInformationSensitivity: "DVD";
    /**
     * Code: DX
     */
    readonly ObservationDiagnosisTypesDX: "DX";
    /**
     * Code: EALG
     */
    readonly EnvironmentalAllergy: "EALG";
    /**
     * Code: EAP
     */
    readonly EmployeeAssistanceProgram: "EAP";
    /**
     * Code: EDU
     */
    readonly EducationFees: "EDU";
    /**
     * Code: EFORM
     */
    readonly ElectronicFormToFollow: "EFORM";
    /**
     * Code: EHCPOL
     */
    readonly ExtendedHealthcare: "EHCPOL";
    /**
     * Code: EINT
     */
    readonly EnvironmentalIntolerance: "EINT";
    /**
     * Code: ELG
     */
    readonly Eligible: "ELG";
    /**
     * Code: ELLIPSE
     */
    readonly Ellipse: "ELLIPSE";
    /**
     * Code: EM
     */
    readonly EmergencySupply: "EM";
    /**
     * Code: EMAUTH
     */
    readonly EmergencyAuthorizationOverride: "EMAUTH";
    /**
     * Code: EMER
     */
    readonly Emergency: "EMER";
    /**
     * Code: EMOTDIS
     */
    readonly EmotionalDisturbanceInformationSensitivity: "EMOTDIS";
    /**
     * Code: EMP
     */
    readonly EmployeeInformationSensitivity: "EMP";
    /**
     * Code: EMPL
     */
    readonly EmployerInformationSensitivity: "EMPL";
    /**
     * Code: EMRGONLY
     */
    readonly EmergencyOnly: "EMRGONLY";
    /**
     * Code: ENAINT
     */
    readonly EnvironmentalNonAllergyIntolerance: "ENAINT";
    /**
     * Code: ENCRYPT
     */
    readonly Encrypt: "ENCRYPT";
    /**
     * Code: ENCRYPTR
     */
    readonly EncryptAtRest: "ENCRYPTR";
    /**
     * Code: ENCRYPTT
     */
    readonly EncryptInTransit: "ENCRYPTT";
    /**
     * Code: ENCRYPTU
     */
    readonly EncryptInUse: "ENCRYPTU";
    /**
     * Code: ENDC
     */
    readonly EndogenousContent: "ENDC";
    /**
     * Code: ENDLATE
     */
    readonly EndTooLateAlertENDLATE: "ENDLATE";
    /**
     * Code: ENDRENAL
     */
    readonly EndRenalProgram: "ENDRENAL";
    /**
     * Code: ENVTRNS
     */
    readonly EnvironmentalExposureTransmission: "ENVTRNS";
    /**
     * Code: EPYMT
     */
    readonly EarlyPaymentFee: "EPYMT";
    /**
     * Code: ESA
     */
    readonly ExtraordinaryServiceAssessment: "ESA";
    /**
     * Code: ETH
     */
    readonly SubstanceAbuseInformationSensitivity: "ETH";
    /**
     * Code: ETHUD
     */
    readonly AlcoholUseDisorderInformationSensitivity: "ETHUD";
    /**
     * Code: EVNFCTS
     */
    readonly ActSpecObsEvntfctsCode: "EVNFCTS";
    /**
     * Code: EWB
     */
    readonly EmployeeWelfareBenefitPlanPolicy: "EWB";
    /**
     * Code: F
     */
    readonly Final: "F";
    /**
     * Code: FALG
     */
    readonly FoodAllergy: "FALG";
    /**
     * Code: FALLRISK
     */
    readonly FallsRiskAssessmentInstrumentTask: "FALLRISK";
    /**
     * Code: FAST
     */
    readonly Fasting: "FAST";
    /**
     * Code: FAX
     */
    readonly FaxToFollow: "FAX";
    /**
     * Code: FD
     */
    readonly Food: "FD";
    /**
     * Code: FDACOATING
     */
    readonly Coating: "FDACOATING";
    /**
     * Code: FDACOLOR
     */
    readonly Color: "FDACOLOR";
    /**
     * Code: FDAIMPRINTCD
     */
    readonly ImprintCode: "FDAIMPRINTCD";
    /**
     * Code: FDALOGO
     */
    readonly Logo: "FDALOGO";
    /**
     * Code: FDASCORING
     */
    readonly Scoring: "FDASCORING";
    /**
     * Code: FDASHAPE
     */
    readonly Shape: "FDASHAPE";
    /**
     * Code: FDASIZE
     */
    readonly Size: "FDASIZE";
    /**
     * Code: FECTRNS
     */
    readonly FecalOralTransmission: "FECTRNS";
    /**
     * Code: FF
     */
    readonly FirstFill: "FF";
    /**
     * Code: FFC
     */
    readonly FirstFillComplete: "FFC";
    /**
     * Code: FFCS
     */
    readonly FirstFillCompletePartialStrength: "FFCS";
    /**
     * Code: FFP
     */
    readonly FirstFillPartFill: "FFP";
    /**
     * Code: FFPS
     */
    readonly FirstFillPartFillPartialStrength: "FFPS";
    /**
     * Code: FFS
     */
    readonly FeeForService: "FFS";
    /**
     * Code: FFSS
     */
    readonly FirstFillPartialStrength: "FFSS";
    /**
     * Code: FFSTOP
     */
    readonly FeeForServiceTopOff: "FFSTOP";
    /**
     * Code: FIBRIN
     */
    readonly Fibrin: "FIBRIN";
    /**
     * Code: FILT
     */
    readonly Filtration: "FILT";
    /**
     * Code: FINALDT
     */
    readonly FinalizedDateTime: "FINALDT";
    /**
     * Code: FINBILL
     */
    readonly Financial: "FINBILL";
    /**
     * Code: FININV
     */
    readonly FinancialInvoice: "FININV";
    /**
     * Code: FINT
     */
    readonly FoodIntolerance: "FINT";
    /**
     * Code: Fixed-wingAmbulance
     */
    readonly FixedWingAmbulanceTransportFixedWingAmbulance: "Fixed-wingAmbulance";
    /**
     * Code: FLD
     */
    readonly Field: "FLD";
    /**
     * Code: FLEXP
     */
    readonly FlexibleBenefitPlanPolicy: "FLEXP";
    /**
     * Code: FMCOMPT
     */
    readonly FinancialManagementCompartment: "FMCOMPT";
    /**
     * Code: FNAINT
     */
    readonly FoodNonAllergyIntolerance: "FNAINT";
    /**
     * Code: FNLFEE
     */
    readonly FinalFee: "FNLFEE";
    /**
     * Code: FOMTRNS
     */
    readonly FomiteTransmission: "FOMTRNS";
    /**
     * Code: FOOD
     */
    readonly FoodInteractionAlert: "FOOD";
    /**
     * Code: FOODTRNS
     */
    readonly FoodBorneTransmission: "FOODTRNS";
    /**
     * Code: FORM
     */
    readonly PrintOnForm: "FORM";
    /**
     * Code: FORMAT
     */
    readonly InvalidFormat: "FORMAT";
    /**
     * Code: FORMULA
     */
    readonly FormulaDiet: "FORMULA";
    /**
     * Code: FRAMEING
     */
    readonly FrameInvoiceGroup: "FRAMEING";
    /**
     * Code: FRAUD
     */
    readonly PotentialFraud: "FRAUD";
    /**
     * Code: FRSTFEE
     */
    readonly FirstFee: "FRSTFEE";
    /**
     * Code: FS
     */
    readonly FloorStock: "FS";
    /**
     * Code: FST
     */
    readonly FederalSalesTax: "FST";
    /**
     * Code: FULFIL
     */
    readonly FulfillmentAlert: "FULFIL";
    /**
     * Code: GARN
     */
    readonly Garnishee: "GARN";
    /**
     * Code: GDIS
     */
    readonly GeneticDiseaseInformationSensitivity: "GDIS";
    /**
     * Code: GDPRCD
     */
    readonly GDPRConsentDirective: "GDPRCD";
    /**
     * Code: GDPRCONSENT
     */
    readonly GDPRConsent: "GDPRCONSENT";
    /**
     * Code: GDPRResearchCD
     */
    readonly GDPRResearchConsentDirective: "GDPRResearchCD";
    /**
     * Code: GEALRT
     */
    readonly GeriatricAlert: "GEALRT";
    /**
     * Code: GEN
     */
    readonly GeneticAlert: "GEN";
    /**
     * Code: GEND
     */
    readonly GenderAlert: "GEND";
    /**
     * Code: GENDER
     */
    readonly GenderAndSexualOrientationInformationSensitivity: "GENDER";
    /**
     * Code: GENE
     */
    readonly Gene: "GENE";
    /**
     * Code: GENRL
     */
    readonly General: "GENRL";
    /**
     * Code: GF
     */
    readonly GlutenFree: "GF";
    /**
     * Code: GFTH
     */
    readonly GoodFaithIndicator: "GFTH";
    /**
     * Code: GISTIER
     */
    readonly GISTier: "GISTIER";
    /**
     * Code: GOALLIST
     */
    readonly GoalList: "GOALLIST";
    /**
     * Code: GOVEMP
     */
    readonly GovernmentEmployeeHealthProgram: "GOVEMP";
    /**
     * Code: GRADE
     */
    readonly Grade: "GRADE";
    /**
     * Code: GRANTORCHOICE
     */
    readonly GrantorChoice: "GRANTORCHOICE";
    /**
     * Code: GroundAmbulance
     */
    readonly GroundAmbulanceTransportGroundAmbulance: "GroundAmbulance";
    /**
     * Code: GTIN
     */
    readonly GlobalTradeItemNumber: "GTIN";
    /**
     * Code: GUIDE
     */
    readonly Guidance: "GUIDE";
    /**
     * Code: HCPCSA
     */
    readonly HCPCSLevelIIAndCarrierAssigned: "HCPCSA";
    /**
     * Code: HEALTHREC
     */
    readonly HealthRecord: "HEALTHREC";
    /**
     * Code: HELD
     */
    readonly HeldSuspendedAlert: "HELD";
    /**
     * Code: HelicopterAmbulance
     */
    readonly HelicopterAmbulanceTransportHelicopterAmbulance: "HelicopterAmbulance";
    /**
     * Code: HEMOLYSIS
     */
    readonly Hemolysis: "HEMOLYSIS";
    /**
     * Code: HGHT
     */
    readonly HGHT: "HGHT";
    /**
     * Code: HH
     */
    readonly HomeHealth: "HH";
    /**
     * Code: HHOBS
     */
    readonly HouseholdSituationObservation: "HHOBS";
    /**
     * Code: HIP
     */
    readonly HealthInsurancePlanPolicy: "HIP";
    /**
     * Code: HIPAAAuth
     */
    readonly HIPAAAuthorizationForDisclosure: "HIPAAAuth";
    /**
     * Code: HIPAAAuthCD
     */
    readonly HIPAAAuthorizationConsentDirective: "HIPAAAuthCD";
    /**
     * Code: HIPAAConsent
     */
    readonly HIPAAConsentHIPAAConsent: "HIPAAConsent";
    /**
     * Code: HIPAAConsentCD
     */
    readonly HIPAAConsentDirective: "HIPAAConsentCD";
    /**
     * Code: HIPAANOPP
     */
    readonly HIPAANoticeOfPrivacyPractices: "HIPAANOPP";
    /**
     * Code: HIPAAPsyNotes
     */
    readonly HIPAAPsychotherapyNotes: "HIPAAPsyNotes";
    /**
     * Code: HIPAAResearchAuthCD
     */
    readonly HIPAAAuthorizationForDisclosureForResearchConsentDirective: "HIPAAResearchAuthCD";
    /**
     * Code: HIPAAROA
     */
    readonly HIPAARightOfAccess: "HIPAAROA";
    /**
     * Code: HIPAAROAD
     */
    readonly HIPAARightOfAccessDirective: "HIPAAROAD";
    /**
     * Code: HIPAASelfPay
     */
    readonly HIPAASelfPay: "HIPAASelfPay";
    /**
     * Code: HIRISK
     */
    readonly HighRiskPoolProgram: "HIRISK";
    /**
     * Code: HISTMEDLIST
     */
    readonly MedicationHistory: "HISTMEDLIST";
    /**
     * Code: HISTORIC
     */
    readonly RecordRecordedAsHistorical: "HISTORIC";
    /**
     * Code: HIV
     */
    readonly HIVAIDSInformationSensitivity: "HIV";
    /**
     * Code: HIVAIDS
     */
    readonly HIVAIDSProgram: "HIVAIDS";
    /**
     * Code: HLTHCARE
     */
    readonly HealthCareInteractionNotPatientCare: "HLTHCARE";
    /**
     * Code: HMO
     */
    readonly HealthMaintenanceOrganizationPolicy: "HMO";
    /**
     * Code: HOMECARE
     */
    readonly CareGiverInteraction: "HOMECARE";
    /**
     * Code: HOSPPTNT
     */
    readonly HospitalPatientInteraction: "HOSPPTNT";
    /**
     * Code: HOSPVSTR
     */
    readonly HospitalVisitorInteraction: "HOSPVSTR";
    /**
     * Code: HOUSEHLD
     */
    readonly HouseholdInteraction: "HOUSEHLD";
    /**
     * Code: HRCOMPT
     */
    readonly HumanResourceCompartment: "HRCOMPT";
    /**
     * Code: HSAPOL
     */
    readonly HealthSpendingAccount: "HSAPOL";
    /**
     * Code: HST
     */
    readonly HarmonizedSalesTax: "HST";
    /**
     * Code: HUAPRV
     */
    readonly HumanApproval: "HUAPRV";
    /**
     * Code: HUMHUMTRNS
     */
    readonly HumanToHumanTransmission: "HUMHUMTRNS";
    /**
     * Code: I
     */
    readonly Isolation: "I";
    /**
     * Code: ICOL
     */
    readonly InformationCollection: "ICOL";
    /**
     * Code: ICTERUS
     */
    readonly Icterus: "ICTERUS";
    /**
     * Code: ID
     */
    readonly Identified: "ID";
    /**
     * Code: IDS
     */
    readonly IdentifierSensitivity: "IDS";
    /**
     * Code: IDSCL
     */
    readonly InformationDisclosure: "IDSCL";
    /**
     * Code: IDUR
     */
    readonly ImprovementNotation: "IDUR";
    /**
     * Code: ILLEGAL
     */
    readonly Illegal: "ILLEGAL";
    /**
     * Code: IMG
     */
    readonly ImageAttachment: "IMG";
    /**
     * Code: IMMLE
     */
    readonly ImmunizationListEntry: "IMMLE";
    /**
     * Code: IMMLREV
     */
    readonly ImmunizationListReview: "IMMLREV";
    /**
     * Code: IMMUCAT
     */
    readonly ImmunizationCategory: "IMMUCAT";
    /**
     * Code: IMMUNIZ
     */
    readonly Immunization: "IMMUNIZ";
    /**
     * Code: IMP
     */
    readonly InpatientEncounter: "IMP";
    /**
     * Code: IMPLIED
     */
    readonly ImpliedConsent: "IMPLIED";
    /**
     * Code: IMPLIEDD
     */
    readonly ImpliedConsentWithOpportunityToDissent: "IMPLIEDD";
    /**
     * Code: IND
     */
    readonly IndigenousPeoplesHealthProgram: "IND";
    /**
     * Code: IND01
     */
    readonly ImagingStudyRequiringContrast: "IND01";
    /**
     * Code: IND02
     */
    readonly ColonoscopyPrep: "IND02";
    /**
     * Code: IND03
     */
    readonly Prophylaxis: "IND03";
    /**
     * Code: IND04
     */
    readonly SurgicalProphylaxis: "IND04";
    /**
     * Code: IND05
     */
    readonly PregnancyProphylaxis: "IND05";
    /**
     * Code: INDTRNS
     */
    readonly IndeterminateDiseaseTransmissionMode: "INDTRNS";
    /**
     * Code: INFA
     */
    readonly InformationAccess: "INFA";
    /**
     * Code: INFAO
     */
    readonly AccessOnly: "INFAO";
    /**
     * Code: INFASO
     */
    readonly AccessAndSaveOnly: "INFASO";
    /**
     * Code: INFAUT
     */
    readonly AuthorizedInformationTransfer: "INFAUT";
    /**
     * Code: INFCON
     */
    readonly AfterExplicitConsent: "INFCON";
    /**
     * Code: INFCRT
     */
    readonly OnlyOnCourtOrder: "INFCRT";
    /**
     * Code: INFDNG
     */
    readonly OnlyIfDangerToOthers: "INFDNG";
    /**
     * Code: INFEMER
     */
    readonly OnlyInAnEmergency: "INFEMER";
    /**
     * Code: INFOACCESS
     */
    readonly AccessInformation: "INFOACCESS";
    /**
     * Code: INFOCOLLECT
     */
    readonly CollectInformation: "INFOCOLLECT";
    /**
     * Code: INFODEIDENTIFIY
     */
    readonly DeidentifyInformation: "INFODEIDENTIFIY";
    /**
     * Code: INFODISCLOSE
     */
    readonly DiscloseInformation: "INFODISCLOSE";
    /**
     * Code: INFOMASK
     */
    readonly MaskInformation: "INFOMASK";
    /**
     * Code: INFOREADONLY
     */
    readonly ReadOnlyInformation: "INFOREADONLY";
    /**
     * Code: INFOREDACT
     */
    readonly RedactInformation: "INFOREDACT";
    /**
     * Code: INFOREDISCLOSE
     */
    readonly RediscloseInformation: "INFOREDISCLOSE";
    /**
     * Code: INFOREIDENTIFY
     */
    readonly ReidentifyInformation: "INFOREIDENTIFY";
    /**
     * Code: INFOUSE
     */
    readonly UseInformation: "INFOUSE";
    /**
     * Code: INFPWR
     */
    readonly OnlyIfPublicWelfareRisk: "INFPWR";
    /**
     * Code: INFREG
     */
    readonly RegulatoryInformationTransfer: "INFREG";
    /**
     * Code: INITIAL
     */
    readonly InitialVolume: "INITIAL";
    /**
     * Code: INITIMMUNIZ
     */
    readonly InitialImmunization: "INITIMMUNIZ";
    /**
     * Code: INMATE
     */
    readonly InmateInteraction: "INMATE";
    /**
     * Code: INT
     */
    readonly IntoleranceAlert: "INT";
    /**
     * Code: INTDX
     */
    readonly IntermediateDiagnosis: "INTDX";
    /**
     * Code: INTERVAL
     */
    readonly OutsideRequestedTime: "INTERVAL";
    /**
     * Code: INTFR
     */
    readonly ActSpecObsInterferenceCode: "INTFR";
    /**
     * Code: INTIMATE
     */
    readonly IntimateInteraction: "INTIMATE";
    /**
     * Code: INTOLIST
     */
    readonly IntoleranceList: "INTOLIST";
    /**
     * Code: INV
     */
    readonly Investigational: "INV";
    /**
     * Code: INVOICE
     */
    readonly SubmittedInvoice: "INVOICE";
    /**
     * Code: INVTYPE
     */
    readonly InvoiceType: "INVTYPE";
    /**
     * Code: IP
     */
    readonly InPosition: "IP";
    /**
     * Code: IPOP
     */
    readonly InitialPopulation: "IPOP";
    /**
     * Code: IPPOP
     */
    readonly InitialPatientPopulation: "IPPOP";
    /**
     * Code: IRDSCL
     */
    readonly InformationRedisclosure: "IRDSCL";
    /**
     * Code: ISOL
     */
    readonly IsolationAllowance: "ISOL";
    /**
     * Code: ISSUE
     */
    readonly DetectedIssue: "ISSUE";
    /**
     * Code: ITMCNT
     */
    readonly ItemsCounted: "ITMCNT";
    /**
     * Code: JurisCUI
     */
    readonly JurisdictionalControlledUnclassifiedInformationPolicy: "JurisCUI";
    /**
     * Code: JurisDEID
     */
    readonly JurisdictionalDeIdentifiedInformationPolicy: "JurisDEID";
    /**
     * Code: JurisIP
     */
    readonly JurisdictionalInformationPolicy: "JurisIP";
    /**
     * Code: JurisLDS
     */
    readonly JurisdictionalLimitedDataSet: "JurisLDS";
    /**
     * Code: JurisNSI
     */
    readonly JurisdictionalNonSensitiveInformationPolicy: "JurisNSI";
    /**
     * Code: JurisPI
     */
    readonly JurisdictionalPublicInformationPolicy: "JurisPI";
    /**
     * Code: JurisSP-CUI
     */
    readonly JurisdictionalSpecifiedControlledUnclassifiedInformationPolicy: "JurisSP-CUI";
    /**
     * Code: JurisUUI
     */
    readonly JurisdictionalUncontrolledUnclassifiedInformationPolicy: "JurisUUI";
    /**
     * Code: KEY
     */
    readonly Keyword: "KEY";
    /**
     * Code: KEY204
     */
    readonly UnknownKeyIdentifier: "KEY204";
    /**
     * Code: KEY205
     */
    readonly DuplicateKeyIdentifier: "KEY205";
    /**
     * Code: KEY206
     */
    readonly NonMatchingIdentification: "KEY206";
    /**
     * Code: KSUBJ
     */
    readonly KnowledgeSubject: "KSUBJ";
    /**
     * Code: KSUBT
     */
    readonly KnowledgeSubtopic: "KSUBT";
    /**
     * Code: L
     */
    readonly LeftEquipment: "L";
    /**
     * Code: LAB
     */
    readonly LabAlert: "LAB";
    /**
     * Code: LABCAT
     */
    readonly LabTestCategory: "LABCAT";
    /**
     * Code: LABEL
     */
    readonly AssignSecurityLabel: "LABEL";
    /**
     * Code: LABOE
     */
    readonly LaboratoryTestOrderEntryTask: "LABOE";
    /**
     * Code: LABRESULTS
     */
    readonly LabResults: "LABRESULTS";
    /**
     * Code: LABRREV
     */
    readonly LaboratoryResultsReviewTask: "LABRREV";
    /**
     * Code: LACT
     */
    readonly LactationAlert: "LACT";
    /**
     * Code: LACTTRNS
     */
    readonly LactationTransmission: "LACTTRNS";
    /**
     * Code: LATE
     */
    readonly LateInvoice: "LATE";
    /**
     * Code: LAWENF
     */
    readonly LawEnforcementTransport: "LAWENF";
    /**
     * Code: LawEnforcementVehicle
     */
    readonly LawEnforcementTransportLawEnforcementVehicle: "LawEnforcementVehicle";
    /**
     * Code: LDLP
     */
    readonly LDLPrecipitation: "LDLP";
    /**
     * Code: LEN_LONG
     */
    readonly LengthIsTooLong: "LEN_LONG";
    /**
     * Code: LEN_RANGE
     */
    readonly LengthOutOfRange: "LEN_RANGE";
    /**
     * Code: LEN_SHORT
     */
    readonly LengthIsTooShort: "LEN_SHORT";
    /**
     * Code: LENSING
     */
    readonly LensInvoiceGroup: "LENSING";
    /**
     * Code: LF
     */
    readonly LowFat: "LF";
    /**
     * Code: LFEMX
     */
    readonly LifeTimeMaximum: "LFEMX";
    /**
     * Code: LGPC
     */
    readonly LicensedGeneralPhysicianCare: "LGPC";
    /**
     * Code: LIFE
     */
    readonly LifeInsurancePolicy: "LIFE";
    /**
     * Code: LIPEMIA
     */
    readonly Lipemia: "LIPEMIA";
    /**
     * Code: LIVARG
     */
    readonly LivingArrangementInformationSensitivity: "LIVARG";
    /**
     * Code: LOAN
     */
    readonly Loan: "LOAN";
    /**
     * Code: LOC
     */
    readonly Location: "LOC";
    /**
     * Code: LOCIS
     */
    readonly LocationInformationSensitivity: "LOCIS";
    /**
     * Code: LP
     */
    readonly LowProtein: "LP";
    /**
     * Code: LQ
     */
    readonly Liquid: "LQ";
    /**
     * Code: LRCOMPT
     */
    readonly LegitimateRelationshipCompartment: "LRCOMPT";
    /**
     * Code: LS
     */
    readonly LowSodium: "LS";
    /**
     * Code: LTC
     */
    readonly LongTermCarePolicy: "LTC";
    /**
     * Code: LTRMCARE
     */
    readonly LongTermCareFacilityInteraction: "LTRMCARE";
    /**
     * Code: LU
     */
    readonly LimitedUse: "LU";
    /**
     * Code: M
     */
    readonly Missing: "M";
    /**
     * Code: MANDPOL
     */
    readonly MandatoryHealthProgram: "MANDPOL";
    /**
     * Code: MANUAL
     */
    readonly ManualReview: "MANUAL";
    /**
     * Code: MARKUP
     */
    readonly MarkupOrUpCharge: "MARKUP";
    /**
     * Code: MARST
     */
    readonly MaritalStatusInformationSensitivity: "MARST";
    /**
     * Code: MARWLREV
     */
    readonly MedicationAdministrationRecordWorkListReviewTask: "MARWLREV";
    /**
     * Code: MASK
     */
    readonly Mask: "MASK";
    /**
     * Code: MAXOCCURS
     */
    readonly RepetitionsAboveMaximum: "MAXOCCURS";
    /**
     * Code: MC
     */
    readonly MasterCard: "MC";
    /**
     * Code: MCPOL
     */
    readonly ManagedCarePolicy: "MCPOL";
    /**
     * Code: MDHHS-5515
     */
    readonly MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposes: "MDHHS-5515";
    /**
     * Code: MDHHS-5515MMHC
     */
    readonly MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposesMichiganMentalHealthCode: "MDHHS-5515MMHC";
    /**
     * Code: MDHHS-5515Part2
     */
    readonly MichiganConsentToShareBehavioralHealthInformationForCareCoordinationPurposesUS42CFRPart2: "MDHHS-5515Part2";
    /**
     * Code: MDOSE
     */
    readonly MaximumDosageReached: "MDOSE";
    /**
     * Code: MED
     */
    readonly Medical: "MED";
    /**
     * Code: MEDCCAT
     */
    readonly MedicalConditionCategory: "MEDCCAT";
    /**
     * Code: MEDLIST
     */
    readonly MedicationList: "MEDLIST";
    /**
     * Code: MEDOE
     */
    readonly MedicationOrderEntryTask: "MEDOE";
    /**
     * Code: MEDT
     */
    readonly MeasurementEndDate: "MEDT";
    /**
     * Code: MENCAT
     */
    readonly MentalHealthCategory: "MENCAT";
    /**
     * Code: MENTPOL
     */
    readonly MentalHealthPolicy: "MENTPOL";
    /**
     * Code: MENTPRG
     */
    readonly MentalHealthProgram: "MENTPRG";
    /**
     * Code: MH
     */
    readonly MentalHealthInformationSensitivity: "MH";
    /**
     * Code: MICROORGRREV
     */
    readonly MicrobiologyOrganismsResultsReviewTask: "MICROORGRREV";
    /**
     * Code: MICRORREV
     */
    readonly MicrobiologyResultsReviewTask: "MICRORREV";
    /**
     * Code: MICROSENSRREV
     */
    readonly MicrobiologySensitivityTestResultsReviewTask: "MICROSENSRREV";
    /**
     * Code: MILITARY
     */
    readonly MilitaryHealthProgram: "MILITARY";
    /**
     * Code: MINEC
     */
    readonly MinimumNecessary: "MINEC";
    /**
     * Code: MINFREQ
     */
    readonly TooSoonWithinFrequencyBasedOnTheUsage: "MINFREQ";
    /**
     * Code: MINOCCURS
     */
    readonly RepetitionsBelowMinimum: "MINOCCURS";
    /**
     * Code: MISSAPT
     */
    readonly MissedAppointment: "MISSAPT";
    /**
     * Code: MISSCOND
     */
    readonly ConditionalElementMissing: "MISSCOND";
    /**
     * Code: MISSMAND
     */
    readonly MandatoryElementMissing: "MISSMAND";
    /**
     * Code: MLREV
     */
    readonly MedicationListReviewTask: "MLREV";
    /**
     * Code: MODEL
     */
    readonly Model: "MODEL";
    /**
     * Code: MONTH
     */
    readonly Month: "MONTH";
    /**
     * Code: MS
     */
    readonly ManufacturerSample: "MS";
    /**
     * Code: MSD
     */
    readonly MeasurementStartDate: "MSD";
    /**
     * Code: MSRADJ
     */
    readonly RiskAdjustment: "MSRADJ";
    /**
     * Code: MSRAGG
     */
    readonly RateAggregation: "MSRAGG";
    /**
     * Code: MSRIMPROV
     */
    readonly HealthQualityMeasureImprovementNotation: "MSRIMPROV";
    /**
     * Code: MSRJUR
     */
    readonly Jurisdiction: "MSRJUR";
    /**
     * Code: MSROBS
     */
    readonly MeasureObservation: "MSROBS";
    /**
     * Code: MSRPOPL
     */
    readonly MeasurePopulation: "MSRPOPL";
    /**
     * Code: MSRPOPLEX
     */
    readonly MeasurePopulationExclusions: "MSRPOPLEX";
    /**
     * Code: MSRRPTR
     */
    readonly ReporterType: "MSRRPTR";
    /**
     * Code: MSRRPTTIME
     */
    readonly TimeframeForReporting: "MSRRPTTIME";
    /**
     * Code: MSRSCORE
     */
    readonly MeasureScoring: "MSRSCORE";
    /**
     * Code: MSRSET
     */
    readonly HealthQualityMeasureCareSetting: "MSRSET";
    /**
     * Code: MSRTOPIC
     */
    readonly HealthQualityMeasureTopicType: "MSRTOPIC";
    /**
     * Code: MSRTP
     */
    readonly MeasurementPeriod: "MSRTP";
    /**
     * Code: MSRTYPE
     */
    readonly MeasureType: "MSRTYPE";
    /**
     * Code: MST
     */
    readonly MilitarySexualTraumaInformationSensitivity: "MST";
    /**
     * Code: MVA
     */
    readonly MotorVehicleAccident: "MVA";
    /**
     * Code: N
     */
    readonly NormalDiet: "N";
    /**
     * Code: NAINT
     */
    readonly NonAllergyIntolerance: "NAINT";
    /**
     * Code: NAT
     */
    readonly InsufficientAuthorization: "NAT";
    /**
     * Code: NAUTH
     */
    readonly NotAuthorized: "NAUTH";
    /**
     * Code: NELG
     */
    readonly NotEligible: "NELG";
    /**
     * Code: NETAMT
     */
    readonly NetAmount: "NETAMT";
    /**
     * Code: NEUT
     */
    readonly Neutralization: "NEUT";
    /**
     * Code: NF
     */
    readonly NoFat: "NF";
    /**
     * Code: NHP
     */
    readonly NaturalHealthProductAlert: "NHP";
    /**
     * Code: NOAUTH
     */
    readonly NoDisclosureWithoutSubjectAuthorization: "NOAUTH";
    /**
     * Code: NOCOLLECT
     */
    readonly NoCollection: "NOCOLLECT";
    /**
     * Code: NOCONSENT
     */
    readonly NoConsent: "NOCONSENT";
    /**
     * Code: NODSCLCD
     */
    readonly NoDisclosureWithoutConsentDirective: "NODSCLCD";
    /**
     * Code: NODSCLCDS
     */
    readonly NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: "NODSCLCDS";
    /**
     * Code: NODUPS
     */
    readonly DuplicateValuesAreNotPermitted: "NODUPS";
    /**
     * Code: NOI
     */
    readonly NatureOfInjury: "NOI";
    /**
     * Code: NOINTEGRATE
     */
    readonly NoIntegration: "NOINTEGRATE";
    /**
     * Code: NOLIST
     */
    readonly NoUnlistedEntityDisclosure: "NOLIST";
    /**
     * Code: NOMOU
     */
    readonly NoDisclosureWithoutMOU: "NOMOU";
    /**
     * Code: NON
     */
    readonly NonPaymentData: "NON";
    /**
     * Code: NONAC
     */
    readonly InpatientNonAcute: "NONAC";
    /**
     * Code: NONRX
     */
    readonly NonPrescriptionInteractionAlert: "NONRX";
    /**
     * Code: NOORGPOL
     */
    readonly NoDisclosureWithoutOrganizationalAuthorization: "NOORGPOL";
    /**
     * Code: NOPAT
     */
    readonly NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: "NOPAT";
    /**
     * Code: NOPERSIST
     */
    readonly ElementWillNotBePersisted: "NOPERSIST";
    /**
     * Code: NOPERSISTP
     */
    readonly NoCollectionBeyondPurposeOfUse: "NOPERSISTP";
    /**
     * Code: NOPP
     */
    readonly NoticeOfPrivacyPractices: "NOPP";
    /**
     * Code: NORDSCLCD
     */
    readonly NoRedisclosureWithoutConsentDirective: "NORDSCLCD";
    /**
     * Code: NORDSCLCDS
     */
    readonly NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: "NORDSCLCDS";
    /**
     * Code: NORDSCLW
     */
    readonly NoDisclosureWithoutJurisdictionalAuthorization: "NORDSCLW";
    /**
     * Code: NORDSLCD
     */
    readonly NoRedisclosureWithoutConsentDirectiveNORDSLCD: "NORDSLCD";
    /**
     * Code: NORELINK
     */
    readonly NoRelinking: "NORELINK";
    /**
     * Code: NOREUSE
     */
    readonly NoReuseBeyondPurposeOfUse: "NOREUSE";
    /**
     * Code: NOSTRNS
     */
    readonly NosocomialTransmission: "NOSTRNS";
    /**
     * Code: NOTACTN
     */
    readonly NoLongerActionable: "NOTACTN";
    /**
     * Code: NOTEQUIV
     */
    readonly NotEquivalentAlert: "NOTEQUIV";
    /**
     * Code: NOTEQUIVGEN
     */
    readonly NotGenericallyEquivalentAlert: "NOTEQUIVGEN";
    /**
     * Code: NOTEQUIVTHER
     */
    readonly NotTherapeuticallyEquivalentAlert: "NOTEQUIVTHER";
    /**
     * Code: NOVIP
     */
    readonly NoUnauthorizedVIPDisclosure: "NOVIP";
    /**
     * Code: NUMER
     */
    readonly Numerator: "NUMER";
    /**
     * Code: NUMEX
     */
    readonly NumeratorExclusions: "NUMEX";
    /**
     * Code: O
     */
    readonly InProcess: "O";
    /**
     * Code: ObligationPolicy
     */
    readonly ObligationPolicy: "ObligationPolicy";
    /**
     * Code: OBS
     */
    readonly Obstetrics: "OBS";
    /**
     * Code: OBSA
     */
    readonly ObservationAlert: "OBSA";
    /**
     * Code: OBSANTC
     */
    readonly AntigenCount: "OBSANTC";
    /**
     * Code: OBSANTV
     */
    readonly AntigenValidity: "OBSANTV";
    /**
     * Code: OBSENC
     */
    readonly ObservationEncounter: "OBSENC";
    /**
     * Code: OBSOLETE
     */
    readonly ObsoleteRecordReturned: "OBSOLETE";
    /**
     * Code: OE
     */
    readonly OrderEntryTask: "OE";
    /**
     * Code: OHSINV
     */
    readonly OralHealthService: "OHSINV";
    /**
     * Code: OIC
     */
    readonly OptInToPersonalInformationOrEffectCollectionInARegistryOrRepository: "OIC";
    /**
     * Code: OINT
     */
    readonly Intolerance: "OINT";
    /**
     * Code: OIS
     */
    readonly OptInToPersonalInformationOrEffectSharingViaARegistryOrRepository: "OIS";
    /**
     * Code: ONC
     */
    readonly Oncology: "ONC";
    /**
     * Code: ONET
     */
    readonly OneTime: "ONET";
    /**
     * Code: OnFoot
     */
    readonly PedestrianTransportOnFoot: "OnFoot";
    /**
     * Code: OOC
     */
    readonly OptOutOfPersonalInformationOrEffectCollectionInARegistryOrRepository: "OOC";
    /**
     * Code: OOJ
     */
    readonly OutOfJurisdiction: "OOJ";
    /**
     * Code: OOO
     */
    readonly OutOfOffice: "OOO";
    /**
     * Code: OOS
     */
    readonly OptOutOfPersonalInformationOrEffectSharingViaARegistryOrRepository: "OOS";
    /**
     * Code: OPIOIDUD
     */
    readonly OpioidUseDisorderInformationSensitivity: "OPIOIDUD";
    /**
     * Code: OPTIN
     */
    readonly OptIn: "OPTIN";
    /**
     * Code: OPTINR
     */
    readonly OptInWithRestrictions: "OPTINR";
    /**
     * Code: OPTOUT
     */
    readonly OpOut: "OPTOUT";
    /**
     * Code: OPTOUTE
     */
    readonly OptOutWithExceptions: "OPTOUTE";
    /**
     * Code: ORCON
     */
    readonly NoDisclosureWithoutOriginatorAuthorization: "ORCON";
    /**
     * Code: OREV
     */
    readonly OrdersReviewTask: "OREV";
    /**
     * Code: OrgCUI
     */
    readonly OrganizationalBasicControlledUnclassifiedInformationPolicy: "OrgCUI";
    /**
     * Code: OrgDEID
     */
    readonly OrganizationalDeIdentifiedInformatiOnPolicy: "OrgDEID";
    /**
     * Code: OrgIP
     */
    readonly OrganizationalInformationPolicy: "OrgIP";
    /**
     * Code: OrgLDS
     */
    readonly OrganizationalLimitedDataSetInformationPolicy: "OrgLDS";
    /**
     * Code: OrgNSI
     */
    readonly OrganizationalNonSensitiveInformationPolicy: "OrgNSI";
    /**
     * Code: OrgPI
     */
    readonly OrganizationalPublicInformationPolicy: "OrgPI";
    /**
     * Code: OrgSP-CUI
     */
    readonly OrganizationalSpecifiedControlledUnclassifiedInformationPolicy: "OrgSP-CUI";
    /**
     * Code: OrgUUI
     */
    readonly OrganizationalUncontrolledUnclassifiedInformationPolicy: "OrgUUI";
    /**
     * Code: ORTHO
     */
    readonly OrthodonticService: "ORTHO";
    /**
     * Code: OTC
     */
    readonly NonPrescriptionMedicine: "OTC";
    /**
     * Code: P
     */
    readonly Private: "P";
    /**
     * Code: PA
     */
    readonly PreferredAccommodationInvoice: "PA";
    /**
     * Code: PACOMPT
     */
    readonly PatientAdministrationCompartment: "PACOMPT";
    /**
     * Code: PAF
     */
    readonly PhenylalanineFree: "PAF";
    /**
     * Code: PAINV
     */
    readonly PreferredAccommodationInvoicePAINV: "PAINV";
    /**
     * Code: PALL
     */
    readonly Palliative: "PALL";
    /**
     * Code: PAPER
     */
    readonly PaperDocumentationToFollow: "PAPER";
    /**
     * Code: PAR
     */
    readonly Parenteral: "PAR";
    /**
     * Code: PARTRNS
     */
    readonly ParenteralTransmission: "PARTRNS";
    /**
     * Code: PAT_ADV_EVNT
     */
    readonly PatientAdverseEvent: "PAT_ADV_EVNT";
    /**
     * Code: PATDOC
     */
    readonly PatientDocumentationTask: "PATDOC";
    /**
     * Code: PATEDUE
     */
    readonly PatientEducationEntry: "PATEDUE";
    /**
     * Code: PATINFO
     */
    readonly PatientInformationReviewTask: "PATINFO";
    /**
     * Code: PATLOC
     */
    readonly PatientLocation: "PATLOC";
    /**
     * Code: PATPREF
     */
    readonly ViolatesStatedPreferences: "PATPREF";
    /**
     * Code: PATPREFALT
     */
    readonly ViolatesStatedPreferencesAlternateAvailable: "PATPREFALT";
    /**
     * Code: PATREPE
     */
    readonly PathologyReportEntryTask: "PATREPE";
    /**
     * Code: PATREPREV
     */
    readonly PathologyReportReviewTask: "PATREPREV";
    /**
     * Code: PAY
     */
    readonly Payment: "PAY";
    /**
     * Code: PAYEE
     */
    readonly Payee: "PAYEE";
    /**
     * Code: PAYOR
     */
    readonly Payor: "PAYOR";
    /**
     * Code: PBILLACCT
     */
    readonly PatientBillingAccount: "PBILLACCT";
    /**
     * Code: PDCNPPELAT
     */
    readonly PaidNullifiedPriorPeriodElectronicAmount: "PDCNPPELAT";
    /**
     * Code: PDCNPPELCT
     */
    readonly PaidNullifiedPriorPeriodElectronicCount: "PDCNPPELCT";
    /**
     * Code: PDCNPPMNAT
     */
    readonly PaidNullifiedPriorPeriodManualAmount: "PDCNPPMNAT";
    /**
     * Code: PDCNPPMNCT
     */
    readonly PaidNullifiedPriorPeriodManualCount: "PDCNPPMNCT";
    /**
     * Code: PDCNSPELAT
     */
    readonly PaidNullifiedSamePeriodElectronicAmount: "PDCNSPELAT";
    /**
     * Code: PDCNSPELCT
     */
    readonly PaidNullifiedSamePeriodElectronicCount: "PDCNSPELCT";
    /**
     * Code: PDCNSPMNAT
     */
    readonly PaidNullifiedSamePeriodManualAmount: "PDCNSPMNAT";
    /**
     * Code: PDCNSPMNCT
     */
    readonly PaidNullifiedSamePeriodManualCount: "PDCNSPMNCT";
    /**
     * Code: PDNFPPELAT
     */
    readonly PaidNullifiedPriorPeriodElectronicAmountPDNFPPELAT: "PDNFPPELAT";
    /**
     * Code: PDNFPPELCT
     */
    readonly PaidNullifiedPriorPeriodElectronicCountPDNFPPELCT: "PDNFPPELCT";
    /**
     * Code: PDNFPPMNAT
     */
    readonly PaidNullifiedPriorPeriodManualAmountPDNFPPMNAT: "PDNFPPMNAT";
    /**
     * Code: PDNFPPMNCT
     */
    readonly PaidNullifiedPriorPeriodManualCountPDNFPPMNCT: "PDNFPPMNCT";
    /**
     * Code: PDNFSPELAT
     */
    readonly PaidNullifiedSamePeriodElectronicAmountPDNFSPELAT: "PDNFSPELAT";
    /**
     * Code: PDNFSPELCT
     */
    readonly PaidNullifiedSamePeriodElectronicCountPDNFSPELCT: "PDNFSPELCT";
    /**
     * Code: PDNFSPMNAT
     */
    readonly PaidNullifiedSamePeriodManualAmountPDNFSPMNAT: "PDNFSPMNAT";
    /**
     * Code: PDNFSPMNCT
     */
    readonly PaidNullifiedSamePeriodManualCountPDNFSPMNCT: "PDNFSPMNCT";
    /**
     * Code: PDNPPPELAT
     */
    readonly PaidNonPayeePayablePriorPeriodElectronicAmount: "PDNPPPELAT";
    /**
     * Code: PDNPPPELCT
     */
    readonly PaidNonPayeePayablePriorPeriodElectronicCount: "PDNPPPELCT";
    /**
     * Code: PDNPPPMNAT
     */
    readonly PaidNonPayeePayablePriorPeriodManualAmount: "PDNPPPMNAT";
    /**
     * Code: PDNPPPMNCT
     */
    readonly PaidNonPayeePayablePriorPeriodManualCount: "PDNPPPMNCT";
    /**
     * Code: PDNPSPELAT
     */
    readonly PaidNonPayeePayableSamePeriodElectronicAmount: "PDNPSPELAT";
    /**
     * Code: PDNPSPELCT
     */
    readonly PaidNonPayeePayableSamePeriodElectronicCount: "PDNPSPELCT";
    /**
     * Code: PDNPSPMNAT
     */
    readonly PaidNonPayeePayableSamePeriodManualAmount: "PDNPSPMNAT";
    /**
     * Code: PDNPSPMNCT
     */
    readonly PaidNonPayeePayableSamePeriodManualCount: "PDNPSPMNCT";
    /**
     * Code: PDPPPPELAT
     */
    readonly PaidPayeePayablePriorPeriodElectronicAmount: "PDPPPPELAT";
    /**
     * Code: PDPPPPELCT
     */
    readonly PaidPayeePayablePriorPeriodElectronicCount: "PDPPPPELCT";
    /**
     * Code: PDPPPPMNAT
     */
    readonly PaidPayeePayablePriorPeriodManualAmount: "PDPPPPMNAT";
    /**
     * Code: PDPPPPMNCT
     */
    readonly PaidPayeePayablePriorPeriodManualCount: "PDPPPPMNCT";
    /**
     * Code: PDPPSPELAT
     */
    readonly PaidPayeePayableSamePeriodElectronicAmount: "PDPPSPELAT";
    /**
     * Code: PDPPSPELCT
     */
    readonly PaidPayeePayableSamePeriodElectronicCount: "PDPPSPELCT";
    /**
     * Code: PDPPSPMNAT
     */
    readonly PaidPayeePayableSamePeriodManualAmount: "PDPPSPMNAT";
    /**
     * Code: PDPPSPMNCT
     */
    readonly PaidPayeePayableSamePeriodManualCount: "PDPPSPMNCT";
    /**
     * Code: PDS
     */
    readonly PatientDefaultInformationSensitivity: "PDS";
    /**
     * Code: PEALRT
     */
    readonly PediatricAlert: "PEALRT";
    /**
     * Code: PED
     */
    readonly Pediatrics: "PED";
    /**
     * Code: PERFEE
     */
    readonly PeriodicFee: "PERFEE";
    /**
     * Code: PERIOD
     */
    readonly Period: "PERIOD";
    /**
     * Code: PERMBNS
     */
    readonly PerformanceBonus: "PERMBNS";
    /**
     * Code: PersDEID
     */
    readonly PersonalDeIdentifiedInformationPolicy: "PersDEID";
    /**
     * Code: PersIP
     */
    readonly PersonalInformationPolicy: "PersIP";
    /**
     * Code: PERSISTLABEL
     */
    readonly PersistSecurityLabel: "PERSISTLABEL";
    /**
     * Code: PersLDS
     */
    readonly PersonalLimitedDataSetInformationPolicy: "PersLDS";
    /**
     * Code: PersNSI
     */
    readonly PersonalNonSensitiveInformationPolicy: "PersNSI";
    /**
     * Code: PersPI
     */
    readonly PersonalPublicInformationPolicy: "PersPI";
    /**
     * Code: PHAR
     */
    readonly Pharmaceutical: "PHAR";
    /**
     * Code: PHY
     */
    readonly PhysicianRequestedInformationSensitivity: "PHY";
    /**
     * Code: PHYRHB
     */
    readonly PhysicalRehab: "PHYRHB";
    /**
     * Code: PIE
     */
    readonly PublicInsuranceExhausted: "PIE";
    /**
     * Code: PINV
     */
    readonly PaperInvoice: "PINV";
    /**
     * Code: PLACE
     */
    readonly CommonSpaceInteraction: "PLACE";
    /**
     * Code: PLACTRNS
     */
    readonly TransplacentalTransmission: "PLACTRNS";
    /**
     * Code: PLYDOC
     */
    readonly PolyOrdererAlert: "PLYDOC";
    /**
     * Code: PLYPHRM
     */
    readonly PolySupplierAlert: "PLYPHRM";
    /**
     * Code: PNC
     */
    readonly PropertyAndCasualtyInsurancePolicy: "PNC";
    /**
     * Code: POINT
     */
    readonly Point: "POINT";
    /**
     * Code: POLY
     */
    readonly Polyline: "POLY";
    /**
     * Code: POS
     */
    readonly PointOfServicePolicy: "POS";
    /**
     * Code: PPO
     */
    readonly PreferredProviderOrganizationPolicy: "PPO";
    /**
     * Code: PPRD
     */
    readonly PriorPeriodAdjustment: "PPRD";
    /**
     * Code: PRA
     */
    readonly PRA: "PRA";
    /**
     * Code: PRDING
     */
    readonly ProductInvoiceGroup: "PRDING";
    /**
     * Code: PRDMX
     */
    readonly PeriodMaximum: "PRDMX";
    /**
     * Code: PRE
     */
    readonly PreDilution: "PRE";
    /**
     * Code: PREFSTRENGTH
     */
    readonly PreferenceStrength: "PREFSTRENGTH";
    /**
     * Code: PREG
     */
    readonly PregnancyAlert: "PREG";
    /**
     * Code: PREGNANT
     */
    readonly PregnancyInformationSensitivity: "PREGNANT";
    /**
     * Code: PRENC
     */
    readonly PreAdmission: "PRENC";
    /**
     * Code: PREVINEF
     */
    readonly PreviouslyIneffective: "PREVINEF";
    /**
     * Code: PrivacyMark
     */
    readonly PrivacyMark: "PrivacyMark";
    /**
     * Code: PrivateTransport
     */
    readonly PrivateTransport: "PrivateTransport";
    /**
     * Code: PRIVMARK
     */
    readonly PrivacyMarkPRIVMARK: "PRIVMARK";
    /**
     * Code: PRLMN
     */
    readonly Preliminary: "PRLMN";
    /**
     * Code: PRN
     */
    readonly AsNeeded: "PRN";
    /**
     * Code: PROA
     */
    readonly ProfessionalAssociationDeduction: "PROA";
    /**
     * Code: PROBLIST
     */
    readonly ProblemList: "PROBLIST";
    /**
     * Code: PROBLISTE
     */
    readonly ProblemListEntryTask: "PROBLISTE";
    /**
     * Code: PROBLISTREV
     */
    readonly ProblemListReviewTask: "PROBLISTREV";
    /**
     * Code: PROV
     */
    readonly Provider: "PROV";
    /**
     * Code: PRS
     */
    readonly PatientRequestedInformationSensitivity: "PRS";
    /**
     * Code: PRVTRN
     */
    readonly PrivateTransportPRVTRN: "PRVTRN";
    /**
     * Code: PSEUD
     */
    readonly Pseudonymize: "PSEUD";
    /**
     * Code: PST
     */
    readonly ProvincialStateSalesTax: "PST";
    /**
     * Code: PSVCCAT
     */
    readonly ProfessionalServiceCategory: "PSVCCAT";
    /**
     * Code: PSY
     */
    readonly PsychiatryDisorderInformationSensitivity: "PSY";
    /**
     * Code: PSYCH
     */
    readonly Psychiatric: "PSYCH";
    /**
     * Code: PSYTHPN
     */
    readonly PsychotherapyNoteInformationSensitivity: "PSYTHPN";
    /**
     * Code: PTNTCARE
     */
    readonly HealthCareInteractionPatientCare: "PTNTCARE";
    /**
     * Code: PUBLICPOL
     */
    readonly PublicHealthcare: "PUBLICPOL";
    /**
     * Code: PublicTransport
     */
    readonly PublicTransport: "PublicTransport";
    /**
     * Code: PUBTRN
     */
    readonly PublicTransportPUBTRN: "PUBTRN";
    /**
     * Code: PYRDELAY
     */
    readonly DelayedByAPreviousPayor: "PYRDELAY";
    /**
     * Code: R
     */
    readonly ProcessCompleted: "R";
    /**
     * Code: RACE
     */
    readonly RaceInformationSensitivity: "RACE";
    /**
     * Code: RADREPE
     */
    readonly RadiologyReportEntryTask: "RADREPE";
    /**
     * Code: RADREPREV
     */
    readonly RadiologyReportReviewTask: "RADREPREV";
    /**
     * Code: RALG
     */
    readonly RelatedAllergyAlert: "RALG";
    /**
     * Code: RAR
     */
    readonly RelatedPriorReactionAlert: "RAR";
    /**
     * Code: RAT
     */
    readonly Rationale: "RAT";
    /**
     * Code: RD
     */
    readonly ReductionDiet: "RD";
    /**
     * Code: REACT
     */
    readonly ReactionAlert: "REACT";
    /**
     * Code: RECA
     */
    readonly Recalcification: "RECA";
    /**
     * Code: RECOV
     */
    readonly Recovery: "RECOV";
    /**
     * Code: REDACT
     */
    readonly Redact: "REDACT";
    /**
     * Code: RedisclosureProhibitionMark
     */
    readonly ProhibitionAgainstRedisclosureMark: "RedisclosureProhibitionMark";
    /**
     * Code: REF
     */
    readonly Reference: "REF";
    /**
     * Code: REFLEX
     */
    readonly ReflexPermission: "REFLEX";
    /**
     * Code: REFNR
     */
    readonly ReferralNotRequired: "REFNR";
    /**
     * Code: RefrainPolicy
     */
    readonly RefrainPolicy: "RefrainPolicy";
    /**
     * Code: REI
     */
    readonly ReinsurancePolicy: "REI";
    /**
     * Code: REL
     */
    readonly ReligionInformationSensitivity: "REL";
    /**
     * Code: REMLE
     */
    readonly ReminderListEntry: "REMLE";
    /**
     * Code: REMLREV
     */
    readonly ReminderListReview: "REMLREV";
    /**
     * Code: RENT
     */
    readonly Rent: "RENT";
    /**
     * Code: REP_HALF_LIFE
     */
    readonly RepresentativeHalfLife: "REP_HALF_LIFE";
    /**
     * Code: REP_RANGE
     */
    readonly RepetitionsOutOfRange: "REP_RANGE";
    /**
     * Code: REPRESENTATIVE_BEAT
     */
    readonly ECGRepresentativeBeatWaveforms: "REPRESENTATIVE_BEAT";
    /**
     * Code: REPSERV
     */
    readonly RepeatedService: "REPSERV";
    /**
     * Code: RERUN
     */
    readonly RerunDilution: "RERUN";
    /**
     * Code: RESCOMPT
     */
    readonly ResearchProjectCompartment: "RESCOMPT";
    /**
     * Code: RESEARCH
     */
    readonly ResearchInformationAccess: "RESEARCH";
    /**
     * Code: RESTOCK
     */
    readonly RestockingFee: "RESTOCK";
    /**
     * Code: RestrictedConfidentialityMark
     */
    readonly RestrictedConfidentialityMark: "RestrictedConfidentialityMark";
    /**
     * Code: RETIRE
     */
    readonly RetireeHealthProgram: "RETIRE";
    /**
     * Code: RETRO
     */
    readonly RetroAdjustment: "RETRO";
    /**
     * Code: REV
     */
    readonly StandardChargeReversal: "REV";
    /**
     * Code: RF
     */
    readonly Refill: "RF";
    /**
     * Code: RFC
     */
    readonly RefillComplete: "RFC";
    /**
     * Code: RFCS
     */
    readonly RefillCompletePartialStrength: "RFCS";
    /**
     * Code: RFF
     */
    readonly RefillFirstFillThisFacility: "RFF";
    /**
     * Code: RFFS
     */
    readonly RefillPartialStrengthFirstFillThisFacility: "RFFS";
    /**
     * Code: RFP
     */
    readonly RefillPartFill: "RFP";
    /**
     * Code: RFPS
     */
    readonly RefillPartFillPartialStrength: "RFPS";
    /**
     * Code: RFS
     */
    readonly RefillPartialStrength: "RFS";
    /**
     * Code: RHYTHM
     */
    readonly ECGRhythmWaveforms: "RHYTHM";
    /**
     * Code: RINT
     */
    readonly RelatedIntoleranceAlert: "RINT";
    /**
     * Code: RISKASSESS
     */
    readonly RiskAssessmentInstrumentTask: "RISKASSESS";
    /**
     * Code: RISKLIST
     */
    readonly RiskFactors: "RISKLIST";
    /**
     * Code: RMGTCOMPT
     */
    readonly RecordsManagementCompartment: "RMGTCOMPT";
    /**
     * Code: ROIFS
     */
    readonly FullySpecifiedROI: "ROIFS";
    /**
     * Code: ROIPS
     */
    readonly PartiallySpecifiedROI: "ROIPS";
    /**
     * Code: ROST
     */
    readonly RosterFunding: "ROST";
    /**
     * Code: RREACT
     */
    readonly RelatedReactionAlert: "RREACT";
    /**
     * Code: RSDID
     */
    readonly DeIdentifiedInformationAccess: "RSDID";
    /**
     * Code: RSREID
     */
    readonly ReIdentifiableInformationAccess: "RSREID";
    /**
     * Code: RX
     */
    readonly PrescriptionOnlyMedicine: "RX";
    /**
     * Code: RXC
     */
    readonly RxCompoundInvoice: "RXC";
    /**
     * Code: RXCAT
     */
    readonly MedicationCategory: "RXCAT";
    /**
     * Code: RXCINV
     */
    readonly RxCompoundInvoiceRXCINV: "RXCINV";
    /**
     * Code: RXD
     */
    readonly RxDispenseInvoice: "RXD";
    /**
     * Code: RXDINV
     */
    readonly RxDispenseInvoiceRXDINV: "RXDINV";
    /**
     * Code: S
     */
    readonly Suite: "S";
    /**
     * Code: SA
     */
    readonly SpecialAuthorization: "SA";
    /**
     * Code: SAC
     */
    readonly SpecialAccess: "SAC";
    /**
     * Code: SAFNET
     */
    readonly SafetyNetClinicProgram: "SAFNET";
    /**
     * Code: SALE
     */
    readonly Sale: "SALE";
    /**
     * Code: SBBLAT
     */
    readonly SubmittedBilledElectronicAmount: "SBBLAT";
    /**
     * Code: SBBLCT
     */
    readonly SubmittedBilledElectronicCount: "SBBLCT";
    /**
     * Code: SBBLELAT
     */
    readonly SubmittedBilledElectronicAmountSBBLELAT: "SBBLELAT";
    /**
     * Code: SBBLELCT
     */
    readonly SubmittedBilledElectronicCountSBBLELCT: "SBBLELCT";
    /**
     * Code: SBCNAT
     */
    readonly SubmittedNullifiedElectronicAmount: "SBCNAT";
    /**
     * Code: SBCNCT
     */
    readonly SubmittedCancelledElectronicCount: "SBCNCT";
    /**
     * Code: SBFINV
     */
    readonly SessionalOrBlockFeeInvoice: "SBFINV";
    /**
     * Code: SBNFELAT
     */
    readonly SubmittedNullifiedElectronicAmountSBNFELAT: "SBNFELAT";
    /**
     * Code: SBNFELCT
     */
    readonly SubmittedCancelledElectronicCountSBNFELCT: "SBNFELCT";
    /**
     * Code: SBPDAT
     */
    readonly SubmittedPendingElectronicAmount: "SBPDAT";
    /**
     * Code: SBPDCT
     */
    readonly SubmittedPendingElectronicCount: "SBPDCT";
    /**
     * Code: SBPDELAT
     */
    readonly SubmittedPendingElectronicAmountSBPDELAT: "SBPDELAT";
    /**
     * Code: SBPDELCT
     */
    readonly SubmittedPendingElectronicCountSBPDELCT: "SBPDELCT";
    /**
     * Code: SCA
     */
    readonly SickleCellAnemiaInformationSensitivity: "SCA";
    /**
     * Code: SCH
     */
    readonly SchonkostGE: "SCH";
    /**
     * Code: SCHL
     */
    readonly School: "SCHL";
    /**
     * Code: SCHLDIV
     */
    readonly SchoolDivision: "SCHLDIV";
    /**
     * Code: SCHOOL
     */
    readonly SchoolAccident: "SCHOOL";
    /**
     * Code: SCHOOL2
     */
    readonly SchoolInteraction: "SCHOOL2";
    /**
     * Code: SDE
     */
    readonly SupplementalDataElements: "SDE";
    /**
     * Code: SDV
     */
    readonly SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: "SDV";
    /**
     * Code: SECALTINTOBS
     */
    readonly SecurityAlterationIntegrityObservation: "SECALTINTOBS";
    /**
     * Code: SECCATOBS
     */
    readonly SecurityCategoryObservation: "SECCATOBS";
    /**
     * Code: SECCLASSOBS
     */
    readonly SecurityClassificationObservation: "SECCLASSOBS";
    /**
     * Code: SECCONOBS
     */
    readonly SecurityControlObservation: "SECCONOBS";
    /**
     * Code: SECDATINTOBS
     */
    readonly SecurityDataIntegrityObservation: "SECDATINTOBS";
    /**
     * Code: SECINTCONOBS
     */
    readonly SecurityIntegrityConfidenceObservation: "SECINTCONOBS";
    /**
     * Code: SECINTOBS
     */
    readonly SecurityIntegrityObservation: "SECINTOBS";
    /**
     * Code: SECINTPRVABOBS
     */
    readonly SecurityIntegrityProvenanceAssertedByObservation: "SECINTPRVABOBS";
    /**
     * Code: SECINTPRVOBS
     */
    readonly SecurityIntegrityProvenanceObservation: "SECINTPRVOBS";
    /**
     * Code: SECINTPRVRBOBS
     */
    readonly SecurityIntegrityProvenanceReportedByObservation: "SECINTPRVRBOBS";
    /**
     * Code: SECINTSTOBS
     */
    readonly SecurityIntegrityStatusObservation: "SECINTSTOBS";
    /**
     * Code: SECOBS
     */
    readonly SecurityObservationType: "SECOBS";
    /**
     * Code: SECTRSTOBS
     */
    readonly SECTRSTOBS: "SECTRSTOBS";
    /**
     * Code: SecurityLabelMark
     */
    readonly SecurityLabelMark: "SecurityLabelMark";
    /**
     * Code: SecurityPolicy
     */
    readonly SecurityPolicy: "SecurityPolicy";
    /**
     * Code: SENDAPP
     */
    readonly SendingApplication: "SENDAPP";
    /**
     * Code: SESS
     */
    readonly SessionalFunding: "SESS";
    /**
     * Code: SEV
     */
    readonly SeverityObservation: "SEV";
    /**
     * Code: SEX
     */
    readonly SexualityAndReproductiveHealthInformationSensitivity: "SEX";
    /**
     * Code: SEXTRNS
     */
    readonly SexualTransmission: "SEXTRNS";
    /**
     * Code: SICKLE
     */
    readonly SickleCell: "SICKLE";
    /**
     * Code: SO
     */
    readonly ScriptOwing: "SO";
    /**
     * Code: SOCIAL
     */
    readonly SocialServiceProgram: "SOCIAL";
    /**
     * Code: SOCIAL2
     */
    readonly SocialExtendedFamilyInteraction: "SOCIAL2";
    /**
     * Code: SP
     */
    readonly SemiPrivate: "SP";
    /**
     * Code: SPEND
     */
    readonly SpendDown: "SPEND";
    /**
     * Code: SPI
     */
    readonly SpeciallyProtectedInformationSensitivity: "SPI";
    /**
     * Code: SPLCOATING
     */
    readonly CoatingSPLCOATING: "SPLCOATING";
    /**
     * Code: SPLCOLOR
     */
    readonly ColorSPLCOLOR: "SPLCOLOR";
    /**
     * Code: SPLIMAGE
     */
    readonly Image: "SPLIMAGE";
    /**
     * Code: SPLIMPRINT
     */
    readonly Imprint: "SPLIMPRINT";
    /**
     * Code: SPLSCORING
     */
    readonly ScoringSPLSCORING: "SPLSCORING";
    /**
     * Code: SPLSHAPE
     */
    readonly ShapeSPLSHAPE: "SPLSHAPE";
    /**
     * Code: SPLSIZE
     */
    readonly SizeSPLSIZE: "SPLSIZE";
    /**
     * Code: SPLSYMBOL
     */
    readonly Symbol: "SPLSYMBOL";
    /**
     * Code: SPT
     */
    readonly SportingAccident: "SPT";
    /**
     * Code: SREC
     */
    readonly SpecimenReceived: "SREC";
    /**
     * Code: SS
     */
    readonly ShortStay: "SS";
    /**
     * Code: SSP
     */
    readonly SensitiveServiceProviderInformationSensitivity: "SSP";
    /**
     * Code: SSTOR
     */
    readonly SpecimenInStorage: "SSTOR";
    /**
     * Code: STD
     */
    readonly SexuallyTransmittedDiseaseInformationSensitivity: "STD";
    /**
     * Code: STORE
     */
    readonly Storage: "STORE";
    /**
     * Code: STRAN
     */
    readonly SpecimenInTransit: "STRAN";
    /**
     * Code: STRAT
     */
    readonly Stratification: "STRAT";
    /**
     * Code: STRTLATE
     */
    readonly StartTooLateAlertSTRTLATE: "STRTLATE";
    /**
     * Code: SUBPOL
     */
    readonly SubstanceUsePolicy: "SUBPOL";
    /**
     * Code: SUBPRG
     */
    readonly SubstanceUseProgram: "SUBPRG";
    /**
     * Code: SUBSIDFFS
     */
    readonly SubsidizedFeeForServiceProgram: "SUBSIDFFS";
    /**
     * Code: SUBSIDIZ
     */
    readonly SubsidizedHealthProgram: "SUBSIDIZ";
    /**
     * Code: SUBSIDMC
     */
    readonly SubsidizedManagedCareProgram: "SUBSIDMC";
    /**
     * Code: SUBSTNCE
     */
    readonly CommonSubstanceInteraction: "SUBSTNCE";
    /**
     * Code: SUBSUPP
     */
    readonly SubsidizedSupplementalHealthProgram: "SUBSUPP";
    /**
     * Code: SUD
     */
    readonly SubstanceUseDisorderInformationSensitivity: "SUD";
    /**
     * Code: SUPPLEMENT
     */
    readonly NutritionalSupplement: "SUPPLEMENT";
    /**
     * Code: SUPPRESSED
     */
    readonly RecordSuppressed: "SUPPRESSED";
    /**
     * Code: SURG
     */
    readonly Surgical: "SURG";
    /**
     * Code: SURPL
     */
    readonly SurplusLineInsurancePolicy: "SURPL";
    /**
     * Code: T
     */
    readonly TeaOnly: "T";
    /**
     * Code: TB
     */
    readonly TrialBalance: "TB";
    /**
     * Code: TBOO
     */
    readonly Taboo: "TBOO";
    /**
     * Code: TBS
     */
    readonly TrialBalancePartialStrength: "TBS";
    /**
     * Code: TEACHER
     */
    readonly Teacher: "TEACHER";
    /**
     * Code: TF
     */
    readonly TrialFill: "TF";
    /**
     * Code: TFS
     */
    readonly TrialFillPartialStrength: "TFS";
    /**
     * Code: TIME
     */
    readonly TimingDetectedIssue: "TIME";
    /**
     * Code: TIME_ABSOLUTE
     */
    readonly AbsoluteTimeSequence: "TIME_ABSOLUTE";
    /**
     * Code: TIME_RELATIVE
     */
    readonly RelativeTimeSequence: "TIME_RELATIVE";
    /**
     * Code: TIMING
     */
    readonly EventTimingIncorrectAlert: "TIMING";
    /**
     * Code: Title38Section7332
     */
    readonly Title38Section7332: "Title38Section7332";
    /**
     * Code: TLIFE
     */
    readonly TermLifeInsurancePolicy: "TLIFE";
    /**
     * Code: TOOLATE
     */
    readonly RefillTooLateAlert: "TOOLATE";
    /**
     * Code: TOOSOON
     */
    readonly RefillTooSoonAlert: "TOOSOON";
    /**
     * Code: TPROD
     */
    readonly TherapeuticProductAlert: "TPROD";
    /**
     * Code: TRAN
     */
    readonly TransactionFee: "TRAN";
    /**
     * Code: TRANF
     */
    readonly TransmissionFormat: "TRANF";
    /**
     * Code: TRANSFER
     */
    readonly Transfer: "TRANSFER";
    /**
     * Code: TRAVEL
     */
    readonly Travel: "TRAVEL";
    /**
     * Code: TRAVINT
     */
    readonly CommonTravelInteraction: "TRAVINT";
    /**
     * Code: TRNSFTRNS
     */
    readonly TransfusionTransmission: "TRNSFTRNS";
    /**
     * Code: TRSTACCRD
     */
    readonly TrustAccreditation: "TRSTACCRD";
    /**
     * Code: TRSTACCRDOBS
     */
    readonly TrustAccreditationObservation: "TRSTACCRDOBS";
    /**
     * Code: TRSTAGRE
     */
    readonly TrustAgreement: "TRSTAGRE";
    /**
     * Code: TRSTAGREOBS
     */
    readonly TrustAgreementObservation: "TRSTAGREOBS";
    /**
     * Code: TRSTASSUR
     */
    readonly TrustAssurance: "TRSTASSUR";
    /**
     * Code: TRSTCERT
     */
    readonly TrustCertificate: "TRSTCERT";
    /**
     * Code: TRSTCERTOBS
     */
    readonly TrustCertificateObservation: "TRSTCERTOBS";
    /**
     * Code: TRSTFWK
     */
    readonly TrustFramework: "TRSTFWK";
    /**
     * Code: TRSTFWKOBS
     */
    readonly TrustFrameworkObservation: "TRSTFWKOBS";
    /**
     * Code: TRSTLOAOBS
     */
    readonly TrustAssuranceObservation: "TRSTLOAOBS";
    /**
     * Code: TRSTMEC
     */
    readonly TrustMechanism: "TRSTMEC";
    /**
     * Code: TRSTMECOBS
     */
    readonly TrustMechanismObservation: "TRSTMECOBS";
    /**
     * Code: UD
     */
    readonly UnitDose: "UD";
    /**
     * Code: UDE
     */
    readonly UnitDoseEquivalent: "UDE";
    /**
     * Code: UFIL
     */
    readonly Ultrafiltration: "UFIL";
    /**
     * Code: ULIFE
     */
    readonly UniversalLifeInsurancePolicy: "ULIFE";
    /**
     * Code: UMBRL
     */
    readonly UmbrellaLiabilityInsurancePolicy: "UMBRL";
    /**
     * Code: UNINSMOT
     */
    readonly UninsuredMotoristPolicy: "UNINSMOT";
    /**
     * Code: UNITPRICE
     */
    readonly UnitPrice: "UNITPRICE";
    /**
     * Code: UNITQTY
     */
    readonly UnitQuantity: "UNITQTY";
    /**
     * Code: UNRELAT
     */
    readonly UnrelatedService: "UNRELAT";
    /**
     * Code: UNSPSC
     */
    readonly UnitedNationsStandardProductsAndServicesClassification: "UNSPSC";
    /**
     * Code: UPC
     */
    readonly UniversalProductCode: "UPC";
    /**
     * Code: UPGRDLABEL
     */
    readonly UpgradeSecurityLabel: "UPGRDLABEL";
    /**
     * Code: URGENT
     */
    readonly Urgent: "URGENT";
    /**
     * Code: USBroadResearchConsent
     */
    readonly BroadConsentForResearch: "USBroadResearchConsent";
    /**
     * Code: USE
     */
    readonly NoticeOfUse: "USE";
    /**
     * Code: USResearchInformedAssent
     */
    readonly InformedAssentForResearch: "USResearchInformedAssent";
    /**
     * Code: USResearchInformedConsent
     */
    readonly InformedConsentForResearch: "USResearchInformedConsent";
    /**
     * Code: UUI
     */
    readonly U: "UUI";
    /**
     * Code: V
     */
    readonly Visa: "V";
    /**
     * Code: VAC_PROBLEM
     */
    readonly VaccineProductProblem: "VAC_PROBLEM";
    /**
     * Code: VALIDAT
     */
    readonly ValidationIssue: "VALIDAT";
    /**
     * Code: VECTRNS
     */
    readonly VectorBorneTransmission: "VECTRNS";
    /**
     * Code: VERBAUTH
     */
    readonly VerbalAuthorization: "VERBAUTH";
    /**
     * Code: VET
     */
    readonly VeteranHealthProgram: "VET";
    /**
     * Code: VFPAPER
     */
    readonly VerifyPaper: "VFPAPER";
    /**
     * Code: VIO
     */
    readonly ViolenceInformationSensitivity: "VIO";
    /**
     * Code: VIP
     */
    readonly CelebrityInformationSensitivityVIP: "VIP";
    /**
     * Code: VISPOL
     */
    readonly VisionCarePolicy: "VISPOL";
    /**
     * Code: VLI
     */
    readonly LowValinLeucinIsoleucin: "VLI";
    /**
     * Code: VOLUME
     */
    readonly ActSpecObsVolumeCode: "VOLUME";
    /**
     * Code: VR
     */
    readonly Virtual: "VR";
    /**
     * Code: VRFPAPER
     */
    readonly VerifyPaperVRFPAPER: "VRFPAPER";
    /**
     * Code: VRXINV
     */
    readonly VisionDispenseInvoice: "VRXINV";
    /**
     * Code: W
     */
    readonly Ward: "W";
    /**
     * Code: WATTRNS
     */
    readonly WaterBorneTransmission: "WATTRNS";
    /**
     * Code: WCBPOL
     */
    readonly WorkerQuoteSCompensation: "WCBPOL";
    /**
     * Code: WEEK
     */
    readonly Week: "WEEK";
    /**
     * Code: WELLREMLE
     */
    readonly WellnessReminderListEntry: "WELLREMLE";
    /**
     * Code: WELLREMLREV
     */
    readonly WellnessReminderListReview: "WELLREMLREV";
    /**
     * Code: WGHT
     */
    readonly WGHT: "WGHT";
    /**
     * Code: WIATTCH
     */
    readonly WorkInjuryReportAttachment: "WIATTCH";
    /**
     * Code: WORK2
     */
    readonly WorkInteraction: "WORK2";
    /**
     * Code: WPA
     */
    readonly WorkplaceAccident: "WPA";
    /**
     * Code: WRKCOMP
     */
    readonly WorkersCompensationProgram: "WRKCOMP";
    /**
     * Code: X
     */
    readonly ContainerUnavailable: "X";
    /**
     * Code: XRAY
     */
    readonly XRay: "XRAY";
    /**
     * Code: YEAR
     */
    readonly Year: "YEAR";
};
/**
 * A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare type V3ActCodeType = typeof V3ActCodes[keyof typeof V3ActCodes];
//# sourceMappingURL=V3ActCodes.d.ts.map