import { CodingArgs } from '../fhir/Coding.js';
/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 */
export declare type V20003CodingType = {
    /**
     * Code: A01
     */
    ADTACKAdmitVisitNotification: CodingArgs;
    /**
     * Code: A02
     */
    ADTACKTransferAPatient: CodingArgs;
    /**
     * Code: A03
     */
    ADTACKDischargeEndVisit: CodingArgs;
    /**
     * Code: A04
     */
    ADTACKRegisterAPatient: CodingArgs;
    /**
     * Code: A05
     */
    ADTACKPreAdmitAPatient: CodingArgs;
    /**
     * Code: A06
     */
    ADTACKChangeAnOutpatientToAnInpatient: CodingArgs;
    /**
     * Code: A07
     */
    ADTACKChangeAnInpatientToAnOutpatient: CodingArgs;
    /**
     * Code: A08
     */
    ADTACKUpdatePatientInformation: CodingArgs;
    /**
     * Code: A09
     */
    ADTACKPatientDepartingTracking: CodingArgs;
    /**
     * Code: A10
     */
    ADTACKPatientArrivingTracking: CodingArgs;
    /**
     * Code: A11
     */
    ADTACKCancelAdmitVisitNotification: CodingArgs;
    /**
     * Code: A12
     */
    ADTACKCancelTransfer: CodingArgs;
    /**
     * Code: A13
     */
    ADTACKCancelDischargeEndVisit: CodingArgs;
    /**
     * Code: A14
     */
    ADTACKPendingAdmit: CodingArgs;
    /**
     * Code: A15
     */
    ADTACKPendingTransfer: CodingArgs;
    /**
     * Code: A16
     */
    ADTACKPendingDischarge: CodingArgs;
    /**
     * Code: A17
     */
    ADTACKSwapPatients: CodingArgs;
    /**
     * Code: A18
     */
    ADTACKMergePatientInformation: CodingArgs;
    /**
     * Code: A19
     */
    QRYADRPatientQuery: CodingArgs;
    /**
     * Code: A20
     */
    ADTACKBedStatusUpdate: CodingArgs;
    /**
     * Code: A21
     */
    ADTACKPatientGoesOnAQuotationLeaveOfAbsenceQuotation: CodingArgs;
    /**
     * Code: A22
     */
    ADTACKPatientReturnsFromAQuotationLeaveOfAbsenceQuotation: CodingArgs;
    /**
     * Code: A23
     */
    ADTACKDeleteAPatientRecord: CodingArgs;
    /**
     * Code: A24
     */
    ADTACKLinkPatientInformation: CodingArgs;
    /**
     * Code: A25
     */
    ADTACKCancelPendingDischarge: CodingArgs;
    /**
     * Code: A26
     */
    ADTACKCancelPendingTransfer: CodingArgs;
    /**
     * Code: A27
     */
    ADTACKCancelPendingAdmit: CodingArgs;
    /**
     * Code: A28
     */
    ADTACKAddPersonInformation: CodingArgs;
    /**
     * Code: A29
     */
    ADTACKDeletePersonInformation: CodingArgs;
    /**
     * Code: A30
     */
    ADTACKMergePersonInformation: CodingArgs;
    /**
     * Code: A31
     */
    ADTACKUpdatePersonInformation: CodingArgs;
    /**
     * Code: A32
     */
    ADTACKCancelPatientArrivingTracking: CodingArgs;
    /**
     * Code: A33
     */
    ADTACKCancelPatientDepartingTracking: CodingArgs;
    /**
     * Code: A34
     */
    ADTACKMergePatientInformationPatientIDOnly: CodingArgs;
    /**
     * Code: A35
     */
    ADTACKMergePatientInformationAccountNumberOnly: CodingArgs;
    /**
     * Code: A36
     */
    ADTACKMergePatientInformationPatientIDAndAccountNumber: CodingArgs;
    /**
     * Code: A37
     */
    ADTACKUnlinkPatientInformation: CodingArgs;
    /**
     * Code: A38
     */
    ADTACKCancelPreAdmit: CodingArgs;
    /**
     * Code: A39
     */
    ADTACKMergePersonPatientID: CodingArgs;
    /**
     * Code: A40
     */
    ADTACKMergePatientPatientIdentifierList: CodingArgs;
    /**
     * Code: A41
     */
    ADTACKMergeAccountPatientAccountNumber: CodingArgs;
    /**
     * Code: A42
     */
    ADTACKMergeVisitVisitNumber: CodingArgs;
    /**
     * Code: A43
     */
    ADTACKMovePatientInformationPatientIdentifierList: CodingArgs;
    /**
     * Code: A44
     */
    ADTACKMoveAccountInformationPatientAccountNumber: CodingArgs;
    /**
     * Code: A45
     */
    ADTACKMoveVisitInformationVisitNumber: CodingArgs;
    /**
     * Code: A46
     */
    ADTACKChangePatientID: CodingArgs;
    /**
     * Code: A47
     */
    ADTACKChangePatientIdentifierList: CodingArgs;
    /**
     * Code: A48
     */
    ADTACKChangeAlternatePatientID: CodingArgs;
    /**
     * Code: A49
     */
    ADTACKChangePatientAccountNumber: CodingArgs;
    /**
     * Code: A50
     */
    ADTACKChangeVisitNumber: CodingArgs;
    /**
     * Code: A51
     */
    ADTACKChangeAlternateVisitID: CodingArgs;
    /**
     * Code: A52
     */
    ADTACKCancelLeaveOfAbsenceForAPatient: CodingArgs;
    /**
     * Code: A53
     */
    ADTACKCancelPatientReturnsFromALeaveOfAbsence: CodingArgs;
    /**
     * Code: A54
     */
    ADTACKChangeAttendingDoctor: CodingArgs;
    /**
     * Code: A55
     */
    ADTACKCancelChangeAttendingDoctor: CodingArgs;
    /**
     * Code: A60
     */
    ADTACKUpdateAllergyInformation: CodingArgs;
    /**
     * Code: A61
     */
    ADTACKChangeConsultingDoctor: CodingArgs;
    /**
     * Code: A62
     */
    ADTACKCancelChangeConsultingDoctor: CodingArgs;
    /**
     * Code: B01
     */
    PMUACKAddPersonnelRecord: CodingArgs;
    /**
     * Code: B02
     */
    PMUACKUpdatePersonnelRecord: CodingArgs;
    /**
     * Code: B03
     */
    PMUACKDeletePersonnelReCord: CodingArgs;
    /**
     * Code: B04
     */
    PMUACKActivePracticingPerson: CodingArgs;
    /**
     * Code: B05
     */
    PMUACKDeactivatePracticingPerson: CodingArgs;
    /**
     * Code: B06
     */
    PMUACKTerminatePracticingPerson: CodingArgs;
    /**
     * Code: B07
     */
    PMUACKGrantCertificatePermission: CodingArgs;
    /**
     * Code: B08
     */
    PMUACKRevokeCertificatePermission: CodingArgs;
    /**
     * Code: C01
     */
    CRMRegisterAPatientOnAClinicalTrial: CodingArgs;
    /**
     * Code: C02
     */
    CRMCancelAPatientRegistrationOnClinicalTrialForClericalMistakesOnly: CodingArgs;
    /**
     * Code: C03
     */
    CRMCorrectUpdateRegistrationInformation: CodingArgs;
    /**
     * Code: C04
     */
    CRMPatientHasGoneOffAClinicalTrial: CodingArgs;
    /**
     * Code: C05
     */
    CRMPatientEntersPhaseOfClinicalTrial: CodingArgs;
    /**
     * Code: C06
     */
    CRMCancelPatientEnteringAPhaseClericalMistake: CodingArgs;
    /**
     * Code: C07
     */
    CRMCorrectUpdatePhaseInformation: CodingArgs;
    /**
     * Code: C08
     */
    CRMPatientHasGoneOffPhaseOfClinicalTrial: CodingArgs;
    /**
     * Code: C09
     */
    CSUAutomatedTimeIntervalsForReportingLikeMonthly: CodingArgs;
    /**
     * Code: C10
     */
    CSUPatientCompletesTheClinicalTrial: CodingArgs;
    /**
     * Code: C11
     */
    CSUPatientCompletesAPhaseOfTheClinicalTrial: CodingArgs;
    /**
     * Code: C12
     */
    CSUUpdateCorrectionOfPatientOrderResultInformation: CodingArgs;
    /**
     * Code: CNQ
     */
    CancelQuery: CodingArgs;
    /**
     * Code: E01
     */
    SubmitHealthCareServicesInvoice: CodingArgs;
    /**
     * Code: E02
     */
    CancelHealthCareServicesInvoice: CodingArgs;
    /**
     * Code: E03
     */
    HealthCareServicesInvoiceStatus: CodingArgs;
    /**
     * Code: E04
     */
    ReAssessHealthCareServicesInvoiceRequest: CodingArgs;
    /**
     * Code: E10
     */
    EditAdjudicationResults: CodingArgs;
    /**
     * Code: E12
     */
    RequestAdditionalInformation: CodingArgs;
    /**
     * Code: E13
     */
    AdditionalInformationResponse: CodingArgs;
    /**
     * Code: E15
     */
    PaymentRemittanceAdvice: CodingArgs;
    /**
     * Code: E20
     */
    SubmitAuthorizationRequest: CodingArgs;
    /**
     * Code: E21
     */
    CancelAuthorizationRequest: CodingArgs;
    /**
     * Code: E22
     */
    AuthorizationRequestStatus: CodingArgs;
    /**
     * Code: E24
     */
    AuthorizationResponse: CodingArgs;
    /**
     * Code: E30
     */
    SubmitHealthDocumentRelatedToAuthorizationRequest: CodingArgs;
    /**
     * Code: E31
     */
    CancelHealthDocumentRelatedToAuthorizationRequest: CodingArgs;
    /**
     * Code: I01
     */
    RQIRPIRequestForInsuranceInformation: CodingArgs;
    /**
     * Code: I02
     */
    RQIRPLRequestReceiptOfPatientSelectionDisplayList: CodingArgs;
    /**
     * Code: I03
     */
    RQIRPRRequestReceiptOfPatientSelectionList: CodingArgs;
    /**
     * Code: I04
     */
    RQDRPIRequestForPatientDemographicData: CodingArgs;
    /**
     * Code: I05
     */
    RQCRCIRequestForPatientClinicalInformation: CodingArgs;
    /**
     * Code: I06
     */
    RQCRCLRequestReceiptOfClinicalDataListing: CodingArgs;
    /**
     * Code: I07
     */
    PINACKUnsolicitedInsuranceInformation: CodingArgs;
    /**
     * Code: I08
     */
    RQARPARequestForTreatmentAuthorizationInformation: CodingArgs;
    /**
     * Code: I09
     */
    RQARPARequestForModificationToAnAuthorization: CodingArgs;
    /**
     * Code: I10
     */
    RQARPARequestForResubmissionOfAnAuthorization: CodingArgs;
    /**
     * Code: I11
     */
    RQARPARequestForCancellationOfAnAuthorization: CodingArgs;
    /**
     * Code: I12
     */
    REFRRIPatientReferral: CodingArgs;
    /**
     * Code: I13
     */
    REFRRIModifyPatientReferral: CodingArgs;
    /**
     * Code: I14
     */
    REFRRICancelPatientReferral: CodingArgs;
    /**
     * Code: I15
     */
    REFRRIRequestPatientReferralStatus: CodingArgs;
    /**
     * Code: I16
     */
    CollaborativeCareReferral: CodingArgs;
    /**
     * Code: I17
     */
    ModifyCollaborativeCareReferral: CodingArgs;
    /**
     * Code: I18
     */
    CancelCollaborativeCareReferral: CodingArgs;
    /**
     * Code: I19
     */
    CollaborativeCareQueryCollaborativeCareQueryUpdate: CodingArgs;
    /**
     * Code: I20
     */
    AsynchronousCollaborativeCareUpdate: CodingArgs;
    /**
     * Code: I21
     */
    CollaborativeCareMessage: CodingArgs;
    /**
     * Code: I22
     */
    CollaborativeCareFetchCollaborativeCareInformation: CodingArgs;
    /**
     * Code: J01
     */
    QCNACKCancelQueryAcknowledgeMessage: CodingArgs;
    /**
     * Code: J02
     */
    QSXACKCancelSubscriptionAcknowledgeMessage: CodingArgs;
    /**
     * Code: K11
     */
    RSPSegmentPatternResponseInResponseToQBPPowerQ11: CodingArgs;
    /**
     * Code: K13
     */
    RTBTabularResponseInResponseToQBPPowerQ13: CodingArgs;
    /**
     * Code: K15
     */
    RDYDisplayResponseInResponseToQBPPowerQ15: CodingArgs;
    /**
     * Code: K21
     */
    RSPGetPersonDemographicsResponse: CodingArgs;
    /**
     * Code: K22
     */
    RSPFindCandidatesResponse: CodingArgs;
    /**
     * Code: K23
     */
    RSPGetCorrespondingIdentifiersResponse: CodingArgs;
    /**
     * Code: K24
     */
    RSPAllocateIdentifiersResponse: CodingArgs;
    /**
     * Code: K25
     */
    RSPPersonnelInformationBySegmentResponse: CodingArgs;
    /**
     * Code: K31
     */
    RSPDispenseHistoryResponse: CodingArgs;
    /**
     * Code: K32
     */
    FindCandidatesIncludingVisitInformationResponse: CodingArgs;
    /**
     * Code: K33
     */
    GetDonorRecordCandidatesResponseMessage: CodingArgs;
    /**
     * Code: K34
     */
    SegmentPatternResponseMessage: CodingArgs;
    /**
     * Code: M01
     */
    MFNMFKMasterFileNotOtherwiseSpecified: CodingArgs;
    /**
     * Code: M02
     */
    MFNMFKMasterFileStaffPractitioner: CodingArgs;
    /**
     * Code: M03
     */
    MFNMFKMasterFileTestObservation: CodingArgs;
    /**
     * Code: M04
     */
    MFNMFKMasterFilesChargeDescription: CodingArgs;
    /**
     * Code: M05
     */
    MFNMFKPatientLocationMasterFile: CodingArgs;
    /**
     * Code: M06
     */
    MFNMFKClinicalStudyWithPhasesAndSchedulesMasterFile: CodingArgs;
    /**
     * Code: M07
     */
    MFNMFKClinicalStudyWithoutPhasesButWithSchedulesMasterFile: CodingArgs;
    /**
     * Code: M08
     */
    MFNMFKTestObservationNumericMasterFile: CodingArgs;
    /**
     * Code: M09
     */
    MFNMFKTestObservationCategoricalMasterFile: CodingArgs;
    /**
     * Code: M10
     */
    MFNMFKTestObservationBatteriesMasterFile: CodingArgs;
    /**
     * Code: M11
     */
    MFNMFKTestCalculatedObservationsMasterFile: CodingArgs;
    /**
     * Code: M12
     */
    MFNMFKMasterFileNotificationMessage: CodingArgs;
    /**
     * Code: M13
     */
    MFNMFKMasterFileNotificationGeneral: CodingArgs;
    /**
     * Code: M14
     */
    MFNMFKMasterFileNotificationSiteDefined: CodingArgs;
    /**
     * Code: M15
     */
    MFNMFKInventoryItemMasterFileNotification: CodingArgs;
    /**
     * Code: M16
     */
    MFNMFKMasterFileNotificationInventoryItemEnhanced: CodingArgs;
    /**
     * Code: M17
     */
    DRGMasterFileMessage: CodingArgs;
    /**
     * Code: M18
     */
    MFNMFKMasterFileNotificationTestObservationPayer: CodingArgs;
    /**
     * Code: N01
     */
    NMQNMRApplicationManagementQueryMessage: CodingArgs;
    /**
     * Code: N02
     */
    NMDACKApplicationManagementDataMessageUnsolicited: CodingArgs;
    /**
     * Code: O01
     */
    ORMOrderMessageAlsoRDERDSRGVRAS: CodingArgs;
    /**
     * Code: O02
     */
    ORROrderResponseAlsoRRERRDRRGRRA: CodingArgs;
    /**
     * Code: O03
     */
    OMDDietOrder: CodingArgs;
    /**
     * Code: O04
     */
    ORDDietOrderAcknowledgment: CodingArgs;
    /**
     * Code: O05
     */
    OMSStockRequisitionOrder: CodingArgs;
    /**
     * Code: O06
     */
    ORSStockRequisitionAcknowledgment: CodingArgs;
    /**
     * Code: O07
     */
    OMNNonStockRequisitionOrder: CodingArgs;
    /**
     * Code: O08
     */
    ORNNonStockRequisitionAcknowledgment: CodingArgs;
    /**
     * Code: O09
     */
    OMPPharmacyTreatmentOrder: CodingArgs;
    /**
     * Code: O10
     */
    ORPPharmacyTreatmentOrderAcknowledgment: CodingArgs;
    /**
     * Code: O11
     */
    RDEPharmacyTreatmentEncodedOrder: CodingArgs;
    /**
     * Code: O12
     */
    RREPharmacyTreatmentEncodedOrderAcknowledgment: CodingArgs;
    /**
     * Code: O13
     */
    RDSPharmacyTreatmentDispense: CodingArgs;
    /**
     * Code: O14
     */
    RRDPharmacyTreatmentDispenseAcknowledgment: CodingArgs;
    /**
     * Code: O15
     */
    RGVPharmacyTreatmentGive: CodingArgs;
    /**
     * Code: O16
     */
    RRGPharmacyTreatmentGiveAcknowledgment: CodingArgs;
    /**
     * Code: O17
     */
    RASPharmacyTreatmentAdministration: CodingArgs;
    /**
     * Code: O18
     */
    RRAPharmacyTreatmentAdministrationAcknowledgment: CodingArgs;
    /**
     * Code: O19
     */
    OMGGeneralClinicalOrder: CodingArgs;
    /**
     * Code: O20
     */
    ORGORLGeneralClinicalOrderResponse: CodingArgs;
    /**
     * Code: O21
     */
    OMLLaboratoryOrder: CodingArgs;
    /**
     * Code: O22
     */
    ORLGeneralLaboratoryOrderResponseMessageToAnyOML: CodingArgs;
    /**
     * Code: O23
     */
    OMIImagingOrder: CodingArgs;
    /**
     * Code: O24
     */
    ORIImagingOrderResponseMessageToAnyOMI: CodingArgs;
    /**
     * Code: O25
     */
    RDEPharmacyTreatmentRefillAuthorizationRequest: CodingArgs;
    /**
     * Code: O26
     */
    RREPharmacyTreatmentRefillAuthorizationAcknowledgement: CodingArgs;
    /**
     * Code: O27
     */
    OMBBloodProductOrder: CodingArgs;
    /**
     * Code: O28
     */
    ORBBloodProductOrderAcknowledgment: CodingArgs;
    /**
     * Code: O29
     */
    BPSBloodProductDispenseStatus: CodingArgs;
    /**
     * Code: O30
     */
    BRPBloodProductDispenseStatusAcknowledgment: CodingArgs;
    /**
     * Code: O31
     */
    BTSBloodProductTransfusionDisposition: CodingArgs;
    /**
     * Code: O32
     */
    BRTBloodProductTransfusionDispositionAcknowledgment: CodingArgs;
    /**
     * Code: O33
     */
    OMLLaboratoryOrderForMultipleOrdersRelatedToASingleSpecimen: CodingArgs;
    /**
     * Code: O34
     */
    ORLLaboratoryOrderResponseMessageToAMultipleOrderRelatedToSingleSpecimenOML: CodingArgs;
    /**
     * Code: O35
     */
    OMLLaboratoryOrderForMultipleOrdersRelatedToASingleContainerOfASpecimen: CodingArgs;
    /**
     * Code: O36
     */
    ORLLaboratoryOrderResponseMessageToASingleContainerOfASpecimenOML: CodingArgs;
    /**
     * Code: O37
     */
    OPLPopulationLocationBasedLaboratoryOrderMessage: CodingArgs;
    /**
     * Code: O38
     */
    OPRPopulationLocationBasedLaboratoryOrderAcknowledgmentMessage: CodingArgs;
    /**
     * Code: O39
     */
    SpecimenShipmentCentricLaboratoryOrder: CodingArgs;
    /**
     * Code: O40
     */
    SpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessage: CodingArgs;
    /**
     * Code: O41
     */
    DBCCreateDonorRecordMessage: CodingArgs;
    /**
     * Code: O42
     */
    DBUUpdateDonorRecordMessage: CodingArgs;
    /**
     * Code: O43
     */
    GeneralOrderMessageWithDocumentPayloadAcknowledgementMessage: CodingArgs;
    /**
     * Code: O44
     */
    DonorRegistrationMinimalMessage: CodingArgs;
    /**
     * Code: O45
     */
    DonorEligibilityObservationsMessage: CodingArgs;
    /**
     * Code: O46
     */
    DonorEligiblityMessage: CodingArgs;
    /**
     * Code: O47
     */
    DonorRequestToCollectMessage: CodingArgs;
    /**
     * Code: O48
     */
    DonationProcedureMessage: CodingArgs;
    /**
     * Code: O49
     */
    PharmacyTreatmentDispenseRequestMessage: CodingArgs;
    /**
     * Code: O50
     */
    PharmacyTreatmentEncodedOrderAcknowledgment: CodingArgs;
    /**
     * Code: O51
     */
    OSUOrderStatusUpdate: CodingArgs;
    /**
     * Code: O52
     */
    OSUOrderStatusUpdateAcknowledgement: CodingArgs;
    /**
     * Code: O53
     */
    ORLGeneralLaboratoryOrderAcknowledgmentMessagePatientOptional: CodingArgs;
    /**
     * Code: O54
     */
    ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerSpecimenPatientOptional: CodingArgs;
    /**
     * Code: O55
     */
    ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerContainerOfSpecimenPatientOptional: CodingArgs;
    /**
     * Code: O56
     */
    ORLSpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessagePatientOptional: CodingArgs;
    /**
     * Code: O57
     */
    OMQGeneralOrderMessageWithDocumentPayload: CodingArgs;
    /**
     * Code: O58
     */
    ORXGeneralOrderMessageWithDocumentPayloadAcknowledgementMessage: CodingArgs;
    /**
     * Code: O59
     */
    OMLLaboratoryOrderForAdditionalWorkUp: CodingArgs;
    /**
     * Code: P01
     */
    BARACKAddPatientAccounts: CodingArgs;
    /**
     * Code: P02
     */
    BARACKPurgePatientAccounts: CodingArgs;
    /**
     * Code: P03
     */
    DFTACKPostDetailFinancialTransaction: CodingArgs;
    /**
     * Code: P04
     */
    QRYDSPGenerateBillAndARStatements: CodingArgs;
    /**
     * Code: P05
     */
    BARACKUpdateAccount: CodingArgs;
    /**
     * Code: P06
     */
    BARACKEndAccount: CodingArgs;
    /**
     * Code: P07
     */
    PEXUnsolicitedInitialIndividualProductExperienceReport: CodingArgs;
    /**
     * Code: P08
     */
    PEXUnsolicitedUpdateIndividualProductExperienceReport: CodingArgs;
    /**
     * Code: P09
     */
    SURSummaryProductExperienceReport: CodingArgs;
    /**
     * Code: P10
     */
    BARACKTransmitAmbulatoryPaymentClassificationAPC: CodingArgs;
    /**
     * Code: P11
     */
    DFTACKPostDetailFinancialTransactionsNew: CodingArgs;
    /**
     * Code: P12
     */
    BARACKUpdateDiagnosisProcedure: CodingArgs;
    /**
     * Code: PC1
     */
    PPRPCProblemAdd: CodingArgs;
    /**
     * Code: PC2
     */
    PPRPCProblemUpdate: CodingArgs;
    /**
     * Code: PC3
     */
    PPRPCProblemDelete: CodingArgs;
    /**
     * Code: PC4
     */
    QRYPCProblemQuery: CodingArgs;
    /**
     * Code: PC5
     */
    PRRPCProblemResponse: CodingArgs;
    /**
     * Code: PC6
     */
    PGLPCGoalAdd: CodingArgs;
    /**
     * Code: PC7
     */
    PGLPCGoalUpdate: CodingArgs;
    /**
     * Code: PC8
     */
    PGLPCGoalDelete: CodingArgs;
    /**
     * Code: PC9
     */
    QRYPCGoalQuery: CodingArgs;
    /**
     * Code: PCA
     */
    PPVPCGoalResponse: CodingArgs;
    /**
     * Code: PCB
     */
    PPPPCPathwayProblemOrientedAdd: CodingArgs;
    /**
     * Code: PCC
     */
    PPPPCPathwayProblemOrientedUpdate: CodingArgs;
    /**
     * Code: PCD
     */
    PPPPCPathwayProblemOrientedDelete: CodingArgs;
    /**
     * Code: PCE
     */
    QRYPCPathwayProblemOrientedQuery: CodingArgs;
    /**
     * Code: PCF
     */
    PTRPCPathwayProblemOrientedQueryResponse: CodingArgs;
    /**
     * Code: PCG
     */
    PPGPCPathwayGoalOrientedAdd: CodingArgs;
    /**
     * Code: PCH
     */
    PPGPCPathwayGoalOrientedUpdate: CodingArgs;
    /**
     * Code: PCJ
     */
    PPGPCPathwayGoalOrientedDelete: CodingArgs;
    /**
     * Code: PCK
     */
    QRYPCPathwayGoalOrientedQuery: CodingArgs;
    /**
     * Code: PCL
     */
    PPTPCPathwayGoalOrientedQueryResponse: CodingArgs;
    /**
     * Code: Q01
     */
    QRYDSRQuerySentForImmediateResponse: CodingArgs;
    /**
     * Code: Q02
     */
    QRYQCKQuerySentForDeferredResponse: CodingArgs;
    /**
     * Code: Q03
     */
    DSRACKDeferredResponseToAQuery: CodingArgs;
    /**
     * Code: Q04
     */
    EQQEmbeddedQueryLanguageQuery: CodingArgs;
    /**
     * Code: Q05
     */
    UDMACKUnsolicitedDisplayUpdateMessage: CodingArgs;
    /**
     * Code: Q06
     */
    OSQOSRQueryForOrderStatus: CodingArgs;
    /**
     * Code: Q07
     */
    VQQVirtualTableQuery: CodingArgs;
    /**
     * Code: Q08
     */
    SPQStoredProcedureRequest: CodingArgs;
    /**
     * Code: Q09
     */
    RQQEventReplayQuery: CodingArgs;
    /**
     * Code: Q11
     */
    QBPQueryByParameterRequestingAnRSPSegmentPatternResponse: CodingArgs;
    /**
     * Code: Q13
     */
    QBPQueryByParameterRequestingAnRTBTabularResponse: CodingArgs;
    /**
     * Code: Q15
     */
    QBPQueryByParameterRequestingAnRDYDisplayResponse: CodingArgs;
    /**
     * Code: Q16
     */
    QSBCreateSubscription: CodingArgs;
    /**
     * Code: Q17
     */
    QVRQueryForPreviousEvents: CodingArgs;
    /**
     * Code: Q21
     */
    QBPGetPersonDemographics: CodingArgs;
    /**
     * Code: Q22
     */
    QBPFindCandidates: CodingArgs;
    /**
     * Code: Q23
     */
    QBPGetCorrespondingIdentifiers: CodingArgs;
    /**
     * Code: Q24
     */
    QBPAllocateIdentifiers: CodingArgs;
    /**
     * Code: Q25
     */
    QBPPersonnelInformationBySegmentQuery: CodingArgs;
    /**
     * Code: Q26
     */
    RORPharmacyTreatmentOrderResponse: CodingArgs;
    /**
     * Code: Q27
     */
    RARPharmacyTreatmentAdministrationInformation: CodingArgs;
    /**
     * Code: Q28
     */
    RDRPharmacyTreatmentDispenseInformation: CodingArgs;
    /**
     * Code: Q29
     */
    RERPharmacyTreatmentEncodedOrderInformation: CodingArgs;
    /**
     * Code: Q30
     */
    RGRPharmacyTreatmentDoseInformation: CodingArgs;
    /**
     * Code: Q31
     */
    QBPQueryDispenseHistory: CodingArgs;
    /**
     * Code: Q32
     */
    FindCandidatesIncludingVisitInformation: CodingArgs;
    /**
     * Code: Q33
     */
    QBPGetDonorRecordCandidates: CodingArgs;
    /**
     * Code: Q34
     */
    QBPGetDonorRecord: CodingArgs;
    /**
     * Code: R01
     */
    ORUACKUnsolicitedTransmissionOfAnObservationMessage: CodingArgs;
    /**
     * Code: R02
     */
    QRYQueryForResultsOfObservation: CodingArgs;
    /**
     * Code: R03
     */
    QRYDSRDisplayOrientedResultsQueryUnsolUpdateForBackwardCompatibilityOnlyReplacedByQ05: CodingArgs;
    /**
     * Code: R04
     */
    ORFResponseToQueryTransmissionOfRequestedObservation: CodingArgs;
    /**
     * Code: R05
     */
    QRYDSRQueryForDisplayResultsSeeQ01: CodingArgs;
    /**
     * Code: R06
     */
    UDMUnsolicitedUpdateDisplayResultsSeeQ05: CodingArgs;
    /**
     * Code: R07
     */
    EDREnhancedDisplayResponse: CodingArgs;
    /**
     * Code: R08
     */
    TBRTabularDataResponse: CodingArgs;
    /**
     * Code: R09
     */
    ERPEventReplayResponse: CodingArgs;
    /**
     * Code: R0R
     */
    R0RPharmacyPrescriptionOrderQueryResponse: CodingArgs;
    /**
     * Code: R21
     */
    OULUnsolicitedLaboratoryObservation: CodingArgs;
    /**
     * Code: R22
     */
    OULUnsolicitedSpecimenOrientedObservationMessage: CodingArgs;
    /**
     * Code: R23
     */
    OULUnsolicitedSpecimenContainerOrientedObservationMessage: CodingArgs;
    /**
     * Code: R24
     */
    OULUnsolicitedOrderOrientedObservationMessage: CodingArgs;
    /**
     * Code: R25
     */
    OPUUnsolicitedPopulationLocationBasedLaboratoryObservationMessage: CodingArgs;
    /**
     * Code: R26
     */
    OSMUnsolicitedSpecimenShipmentManifestMessage: CodingArgs;
    /**
     * Code: R30
     */
    ORUUnsolicitedPointOfCareObservationMessageWithoutExistingOrderPlaceAnOrder: CodingArgs;
    /**
     * Code: R31
     */
    ORUUnsolicitedNewPointOfCareObservationMessageSearchForAnOrder: CodingArgs;
    /**
     * Code: R32
     */
    ORUUnsolicitedPreOrderedPointOfCareObservation: CodingArgs;
    /**
     * Code: R33
     */
    ORAObservationReportAcknowledgement: CodingArgs;
    /**
     * Code: R40
     */
    ORUUnsolicitedReportAlarm: CodingArgs;
    /**
     * Code: R41
     */
    ObservationReportAlertAcknowledgement: CodingArgs;
    /**
     * Code: R42
     */
    ORUUnsolicitedDeviceEventObservationMessage: CodingArgs;
    /**
     * Code: R43
     */
    ORUUnsolicitedPatientDeviceAssociationObservationMessage: CodingArgs;
    /**
     * Code: RAR
     */
    RARPharmacyAdministrationInformationQueryResponse: CodingArgs;
    /**
     * Code: RDR
     */
    RDRPharmacyDispenseInformationQueryResponse: CodingArgs;
    /**
     * Code: RER
     */
    RERPharmacyEncodedOrderInformationQueryResponse: CodingArgs;
    /**
     * Code: RGR
     */
    RGRPharmacyDoseInformationQueryResponse: CodingArgs;
    /**
     * Code: ROR
     */
    RORPharmacyPrescriptionOrderQueryResponse: CodingArgs;
    /**
     * Code: S01
     */
    SRMSRRRequestNewAppointmentBooking: CodingArgs;
    /**
     * Code: S02
     */
    SRMSRRRequestAppointmentRescheduling: CodingArgs;
    /**
     * Code: S03
     */
    SRMSRRRequestAppointmentModification: CodingArgs;
    /**
     * Code: S04
     */
    SRMSRRRequestAppointmentCancellation: CodingArgs;
    /**
     * Code: S05
     */
    SRMSRRRequestAppointmentDiscontinuation: CodingArgs;
    /**
     * Code: S06
     */
    SRMSRRRequestAppointmentDeletion: CodingArgs;
    /**
     * Code: S07
     */
    SRMSRRRequestAdditionOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S08
     */
    SRMSRRRequestModificationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S09
     */
    SRMSRRRequestCancellationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S10
     */
    SRMSRRRequestDiscontinuationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S11
     */
    SRMSRRRequestDeletionOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S12
     */
    SIUACKNotificationOfNewAppointmentBooking: CodingArgs;
    /**
     * Code: S13
     */
    SIUACKNotificationOfAppointmentRescheduling: CodingArgs;
    /**
     * Code: S14
     */
    SIUACKNotificationOfAppointmentModification: CodingArgs;
    /**
     * Code: S15
     */
    SIUACKNotificationOfAppointmentCancellation: CodingArgs;
    /**
     * Code: S16
     */
    SIUACKNotificationOfAppointmentDiscontinuation: CodingArgs;
    /**
     * Code: S17
     */
    SIUACKNotificationOfAppointmentDeletion: CodingArgs;
    /**
     * Code: S18
     */
    SIUACKNotificationOfAdditionOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S19
     */
    SIUACKNotificationOfModificationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S20
     */
    SIUACKNotificationOfCancellationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S21
     */
    SIUACKNotificationOfDiscontinuationOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S22
     */
    SIUACKNotificationOfDeletionOfServiceResourceOnAppointment: CodingArgs;
    /**
     * Code: S23
     */
    SIUACKNotificationOfBlockedScheduleTimeSlotS: CodingArgs;
    /**
     * Code: S24
     */
    SIUACKNotificationOfOpenedQuotationUnblockedQuotationScheduleTimeSlotS: CodingArgs;
    /**
     * Code: S25
     */
    SQMSQRScheduleQueryMessageAndResponse: CodingArgs;
    /**
     * Code: S26
     */
    SIUACKNotificationThatPatientDidNotShowUpForScheduleAppointment: CodingArgs;
    /**
     * Code: S27
     */
    SIUACKBroadcastNotificationOfScheduledAppointments: CodingArgs;
    /**
     * Code: S28
     */
    SLRSLSRequestNewSterilizationLot: CodingArgs;
    /**
     * Code: S29
     */
    SLRSLSRequestSterilizationLotDeletion: CodingArgs;
    /**
     * Code: S30
     */
    STISTSRequestItem: CodingArgs;
    /**
     * Code: S31
     */
    SDRSDSRequestAntiMicrobialDeviceData: CodingArgs;
    /**
     * Code: S32
     */
    SMDSMSRequestAntiMicrobialDeviceCycleData: CodingArgs;
    /**
     * Code: S33
     */
    STCACKNotificationOfSterilizationConfiguration: CodingArgs;
    /**
     * Code: S34
     */
    SLNACKNotificationOfSterilizationLot: CodingArgs;
    /**
     * Code: S35
     */
    SLNACKNotificationOfSterilizationLotDeletion: CodingArgs;
    /**
     * Code: S36
     */
    SDNACKNotificationOfAntiMicrobialDeviceData: CodingArgs;
    /**
     * Code: S37
     */
    SCNACKNotificationOfAntiMicrobialDeviceCycleData: CodingArgs;
    /**
     * Code: S38
     */
    ContainersPreparedForSpecimenCollection: CodingArgs;
    /**
     * Code: S39
     */
    SpecimenCollectionSuccessful: CodingArgs;
    /**
     * Code: S40
     */
    SpecimenCollectionUnsuccessful: CodingArgs;
    /**
     * Code: S41
     */
    SpecimenDeparted: CodingArgs;
    /**
     * Code: S42
     */
    SpecimenArrived: CodingArgs;
    /**
     * Code: S43
     */
    SpecimenAccepted: CodingArgs;
    /**
     * Code: S44
     */
    SpecimenRejected: CodingArgs;
    /**
     * Code: S45
     */
    SpecimenReIdentified: CodingArgs;
    /**
     * Code: S46
     */
    SpecimenDeIdentified: CodingArgs;
    /**
     * Code: S47
     */
    SpecimenSentToArchive: CodingArgs;
    /**
     * Code: S48
     */
    SpecimenRetrievedFromArchive: CodingArgs;
    /**
     * Code: S49
     */
    SpecimenDisposedOf: CodingArgs;
    /**
     * Code: S50
     */
    SpecimenProcedureStepSuccessfulWithDerivedSpecimenS: CodingArgs;
    /**
     * Code: S51
     */
    SpecimenProcedureStepSuccessfulNoDerivedSpecimenS: CodingArgs;
    /**
     * Code: S52
     */
    SpecimenProcedureStepUnsuccessful: CodingArgs;
    /**
     * Code: T01
     */
    MDMACKOriginalDocumentNotification: CodingArgs;
    /**
     * Code: T02
     */
    MDMACKOriginalDocumentNotificationAndContent: CodingArgs;
    /**
     * Code: T03
     */
    MDMACKDocumentStatusChangeNotification: CodingArgs;
    /**
     * Code: T04
     */
    MDMACKDocumentStatusChangeNotificationAndContent: CodingArgs;
    /**
     * Code: T05
     */
    MDMACKDocumentAddendumNotification: CodingArgs;
    /**
     * Code: T06
     */
    MDMACKDocumentAddendumNotificationAndContent: CodingArgs;
    /**
     * Code: T07
     */
    MDMACKDocumentEditNotification: CodingArgs;
    /**
     * Code: T08
     */
    MDMACKDocumentEditNotificationAndContent: CodingArgs;
    /**
     * Code: T09
     */
    MDMACKDocumentReplacementNotification: CodingArgs;
    /**
     * Code: T10
     */
    MDMACKDocumentReplacementNotificationAndContent: CodingArgs;
    /**
     * Code: T11
     */
    MDMACKDocumentCancelNotification: CodingArgs;
    /**
     * Code: T12
     */
    QRYDOCDocumentQuery: CodingArgs;
    /**
     * Code: U01
     */
    ESUACKAutomatedEquipmentStatusUpdate: CodingArgs;
    /**
     * Code: U02
     */
    ESRACKAutomatedEquipmentStatusRequest: CodingArgs;
    /**
     * Code: U03
     */
    SSUACKSpecimenStatusUpdate: CodingArgs;
    /**
     * Code: U04
     */
    SSRACKSpecimenStatusRequest: CodingArgs;
    /**
     * Code: U05
     */
    INUACKAutomatedEquipmentInventoryUpdate: CodingArgs;
    /**
     * Code: U06
     */
    INRACKAutomatedEquipmentInventoryRequest: CodingArgs;
    /**
     * Code: U07
     */
    EACACKAutomatedEquipmentCommand: CodingArgs;
    /**
     * Code: U08
     */
    EARACKAutomatedEquipmentResponse: CodingArgs;
    /**
     * Code: U09
     */
    EANACKAutomatedEquipmentNotification: CodingArgs;
    /**
     * Code: U10
     */
    TCUACKAutomatedEquipmentTestCodeSettingsUpdate: CodingArgs;
    /**
     * Code: U11
     */
    TCRACKAutomatedEquipmentTestCodeSettingsRequest: CodingArgs;
    /**
     * Code: U12
     */
    LSUACKAutomatedEquipmentLogServiceUpdate: CodingArgs;
    /**
     * Code: U13
     */
    LSRACKAutomatedEquipmentLogServiceRequest: CodingArgs;
    /**
     * Code: U14
     */
    INRACKAutomatedEquipmentInventoryRequestU14: CodingArgs;
    /**
     * Code: V01
     */
    VXQQueryForVaccinationRecord: CodingArgs;
    /**
     * Code: V02
     */
    VXXResponseToVaccinationQueryReturningMultiplePIDMatches: CodingArgs;
    /**
     * Code: V03
     */
    VXRVaccinationRecordResponse: CodingArgs;
    /**
     * Code: V04
     */
    VXUUnsolicitedVaccinationRecordUpdate: CodingArgs;
    /**
     * Code: varies
     */
    MFQMFRMasterFilesQueryUseEventSameAsAskingForEGM05Location: CodingArgs;
    /**
     * Code: Varies
     */
    MFQMFRMasterFilesQueryUseEventSameAsAskingForEGM05LocationVaries: CodingArgs;
    /**
     * Code: W01
     */
    ORUWaveformResultUnsolicitedTransmissionOfRequestedInformation: CodingArgs;
    /**
     * Code: W02
     */
    QRFWaveformResultResponseToQuery: CodingArgs;
    /**
     * Code: X01
     */
    PEXProductExperience: CodingArgs;
};
/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 */
export declare const V20003Codings: V20003CodingType;
//# sourceMappingURL=V20003Codings.d.ts.map