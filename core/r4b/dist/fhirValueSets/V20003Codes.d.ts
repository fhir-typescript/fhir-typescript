/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 */
export declare const V20003Codes: {
    /**
     * Code: A01
     */
    readonly ADTACKAdmitVisitNotification: "A01";
    /**
     * Code: A02
     */
    readonly ADTACKTransferAPatient: "A02";
    /**
     * Code: A03
     */
    readonly ADTACKDischargeEndVisit: "A03";
    /**
     * Code: A04
     */
    readonly ADTACKRegisterAPatient: "A04";
    /**
     * Code: A05
     */
    readonly ADTACKPreAdmitAPatient: "A05";
    /**
     * Code: A06
     */
    readonly ADTACKChangeAnOutpatientToAnInpatient: "A06";
    /**
     * Code: A07
     */
    readonly ADTACKChangeAnInpatientToAnOutpatient: "A07";
    /**
     * Code: A08
     */
    readonly ADTACKUpdatePatientInformation: "A08";
    /**
     * Code: A09
     */
    readonly ADTACKPatientDepartingTracking: "A09";
    /**
     * Code: A10
     */
    readonly ADTACKPatientArrivingTracking: "A10";
    /**
     * Code: A11
     */
    readonly ADTACKCancelAdmitVisitNotification: "A11";
    /**
     * Code: A12
     */
    readonly ADTACKCancelTransfer: "A12";
    /**
     * Code: A13
     */
    readonly ADTACKCancelDischargeEndVisit: "A13";
    /**
     * Code: A14
     */
    readonly ADTACKPendingAdmit: "A14";
    /**
     * Code: A15
     */
    readonly ADTACKPendingTransfer: "A15";
    /**
     * Code: A16
     */
    readonly ADTACKPendingDischarge: "A16";
    /**
     * Code: A17
     */
    readonly ADTACKSwapPatients: "A17";
    /**
     * Code: A18
     */
    readonly ADTACKMergePatientInformation: "A18";
    /**
     * Code: A19
     */
    readonly QRYADRPatientQuery: "A19";
    /**
     * Code: A20
     */
    readonly ADTACKBedStatusUpdate: "A20";
    /**
     * Code: A21
     */
    readonly ADTACKPatientGoesOnAQuotationLeaveOfAbsenceQuotation: "A21";
    /**
     * Code: A22
     */
    readonly ADTACKPatientReturnsFromAQuotationLeaveOfAbsenceQuotation: "A22";
    /**
     * Code: A23
     */
    readonly ADTACKDeleteAPatientRecord: "A23";
    /**
     * Code: A24
     */
    readonly ADTACKLinkPatientInformation: "A24";
    /**
     * Code: A25
     */
    readonly ADTACKCancelPendingDischarge: "A25";
    /**
     * Code: A26
     */
    readonly ADTACKCancelPendingTransfer: "A26";
    /**
     * Code: A27
     */
    readonly ADTACKCancelPendingAdmit: "A27";
    /**
     * Code: A28
     */
    readonly ADTACKAddPersonInformation: "A28";
    /**
     * Code: A29
     */
    readonly ADTACKDeletePersonInformation: "A29";
    /**
     * Code: A30
     */
    readonly ADTACKMergePersonInformation: "A30";
    /**
     * Code: A31
     */
    readonly ADTACKUpdatePersonInformation: "A31";
    /**
     * Code: A32
     */
    readonly ADTACKCancelPatientArrivingTracking: "A32";
    /**
     * Code: A33
     */
    readonly ADTACKCancelPatientDepartingTracking: "A33";
    /**
     * Code: A34
     */
    readonly ADTACKMergePatientInformationPatientIDOnly: "A34";
    /**
     * Code: A35
     */
    readonly ADTACKMergePatientInformationAccountNumberOnly: "A35";
    /**
     * Code: A36
     */
    readonly ADTACKMergePatientInformationPatientIDAndAccountNumber: "A36";
    /**
     * Code: A37
     */
    readonly ADTACKUnlinkPatientInformation: "A37";
    /**
     * Code: A38
     */
    readonly ADTACKCancelPreAdmit: "A38";
    /**
     * Code: A39
     */
    readonly ADTACKMergePersonPatientID: "A39";
    /**
     * Code: A40
     */
    readonly ADTACKMergePatientPatientIdentifierList: "A40";
    /**
     * Code: A41
     */
    readonly ADTACKMergeAccountPatientAccountNumber: "A41";
    /**
     * Code: A42
     */
    readonly ADTACKMergeVisitVisitNumber: "A42";
    /**
     * Code: A43
     */
    readonly ADTACKMovePatientInformationPatientIdentifierList: "A43";
    /**
     * Code: A44
     */
    readonly ADTACKMoveAccountInformationPatientAccountNumber: "A44";
    /**
     * Code: A45
     */
    readonly ADTACKMoveVisitInformationVisitNumber: "A45";
    /**
     * Code: A46
     */
    readonly ADTACKChangePatientID: "A46";
    /**
     * Code: A47
     */
    readonly ADTACKChangePatientIdentifierList: "A47";
    /**
     * Code: A48
     */
    readonly ADTACKChangeAlternatePatientID: "A48";
    /**
     * Code: A49
     */
    readonly ADTACKChangePatientAccountNumber: "A49";
    /**
     * Code: A50
     */
    readonly ADTACKChangeVisitNumber: "A50";
    /**
     * Code: A51
     */
    readonly ADTACKChangeAlternateVisitID: "A51";
    /**
     * Code: A52
     */
    readonly ADTACKCancelLeaveOfAbsenceForAPatient: "A52";
    /**
     * Code: A53
     */
    readonly ADTACKCancelPatientReturnsFromALeaveOfAbsence: "A53";
    /**
     * Code: A54
     */
    readonly ADTACKChangeAttendingDoctor: "A54";
    /**
     * Code: A55
     */
    readonly ADTACKCancelChangeAttendingDoctor: "A55";
    /**
     * Code: A60
     */
    readonly ADTACKUpdateAllergyInformation: "A60";
    /**
     * Code: A61
     */
    readonly ADTACKChangeConsultingDoctor: "A61";
    /**
     * Code: A62
     */
    readonly ADTACKCancelChangeConsultingDoctor: "A62";
    /**
     * Code: B01
     */
    readonly PMUACKAddPersonnelRecord: "B01";
    /**
     * Code: B02
     */
    readonly PMUACKUpdatePersonnelRecord: "B02";
    /**
     * Code: B03
     */
    readonly PMUACKDeletePersonnelReCord: "B03";
    /**
     * Code: B04
     */
    readonly PMUACKActivePracticingPerson: "B04";
    /**
     * Code: B05
     */
    readonly PMUACKDeactivatePracticingPerson: "B05";
    /**
     * Code: B06
     */
    readonly PMUACKTerminatePracticingPerson: "B06";
    /**
     * Code: B07
     */
    readonly PMUACKGrantCertificatePermission: "B07";
    /**
     * Code: B08
     */
    readonly PMUACKRevokeCertificatePermission: "B08";
    /**
     * Code: C01
     */
    readonly CRMRegisterAPatientOnAClinicalTrial: "C01";
    /**
     * Code: C02
     */
    readonly CRMCancelAPatientRegistrationOnClinicalTrialForClericalMistakesOnly: "C02";
    /**
     * Code: C03
     */
    readonly CRMCorrectUpdateRegistrationInformation: "C03";
    /**
     * Code: C04
     */
    readonly CRMPatientHasGoneOffAClinicalTrial: "C04";
    /**
     * Code: C05
     */
    readonly CRMPatientEntersPhaseOfClinicalTrial: "C05";
    /**
     * Code: C06
     */
    readonly CRMCancelPatientEnteringAPhaseClericalMistake: "C06";
    /**
     * Code: C07
     */
    readonly CRMCorrectUpdatePhaseInformation: "C07";
    /**
     * Code: C08
     */
    readonly CRMPatientHasGoneOffPhaseOfClinicalTrial: "C08";
    /**
     * Code: C09
     */
    readonly CSUAutomatedTimeIntervalsForReportingLikeMonthly: "C09";
    /**
     * Code: C10
     */
    readonly CSUPatientCompletesTheClinicalTrial: "C10";
    /**
     * Code: C11
     */
    readonly CSUPatientCompletesAPhaseOfTheClinicalTrial: "C11";
    /**
     * Code: C12
     */
    readonly CSUUpdateCorrectionOfPatientOrderResultInformation: "C12";
    /**
     * Code: CNQ
     */
    readonly CancelQuery: "CNQ";
    /**
     * Code: E01
     */
    readonly SubmitHealthCareServicesInvoice: "E01";
    /**
     * Code: E02
     */
    readonly CancelHealthCareServicesInvoice: "E02";
    /**
     * Code: E03
     */
    readonly HealthCareServicesInvoiceStatus: "E03";
    /**
     * Code: E04
     */
    readonly ReAssessHealthCareServicesInvoiceRequest: "E04";
    /**
     * Code: E10
     */
    readonly EditAdjudicationResults: "E10";
    /**
     * Code: E12
     */
    readonly RequestAdditionalInformation: "E12";
    /**
     * Code: E13
     */
    readonly AdditionalInformationResponse: "E13";
    /**
     * Code: E15
     */
    readonly PaymentRemittanceAdvice: "E15";
    /**
     * Code: E20
     */
    readonly SubmitAuthorizationRequest: "E20";
    /**
     * Code: E21
     */
    readonly CancelAuthorizationRequest: "E21";
    /**
     * Code: E22
     */
    readonly AuthorizationRequestStatus: "E22";
    /**
     * Code: E24
     */
    readonly AuthorizationResponse: "E24";
    /**
     * Code: E30
     */
    readonly SubmitHealthDocumentRelatedToAuthorizationRequest: "E30";
    /**
     * Code: E31
     */
    readonly CancelHealthDocumentRelatedToAuthorizationRequest: "E31";
    /**
     * Code: I01
     */
    readonly RQIRPIRequestForInsuranceInformation: "I01";
    /**
     * Code: I02
     */
    readonly RQIRPLRequestReceiptOfPatientSelectionDisplayList: "I02";
    /**
     * Code: I03
     */
    readonly RQIRPRRequestReceiptOfPatientSelectionList: "I03";
    /**
     * Code: I04
     */
    readonly RQDRPIRequestForPatientDemographicData: "I04";
    /**
     * Code: I05
     */
    readonly RQCRCIRequestForPatientClinicalInformation: "I05";
    /**
     * Code: I06
     */
    readonly RQCRCLRequestReceiptOfClinicalDataListing: "I06";
    /**
     * Code: I07
     */
    readonly PINACKUnsolicitedInsuranceInformation: "I07";
    /**
     * Code: I08
     */
    readonly RQARPARequestForTreatmentAuthorizationInformation: "I08";
    /**
     * Code: I09
     */
    readonly RQARPARequestForModificationToAnAuthorization: "I09";
    /**
     * Code: I10
     */
    readonly RQARPARequestForResubmissionOfAnAuthorization: "I10";
    /**
     * Code: I11
     */
    readonly RQARPARequestForCancellationOfAnAuthorization: "I11";
    /**
     * Code: I12
     */
    readonly REFRRIPatientReferral: "I12";
    /**
     * Code: I13
     */
    readonly REFRRIModifyPatientReferral: "I13";
    /**
     * Code: I14
     */
    readonly REFRRICancelPatientReferral: "I14";
    /**
     * Code: I15
     */
    readonly REFRRIRequestPatientReferralStatus: "I15";
    /**
     * Code: I16
     */
    readonly CollaborativeCareReferral: "I16";
    /**
     * Code: I17
     */
    readonly ModifyCollaborativeCareReferral: "I17";
    /**
     * Code: I18
     */
    readonly CancelCollaborativeCareReferral: "I18";
    /**
     * Code: I19
     */
    readonly CollaborativeCareQueryCollaborativeCareQueryUpdate: "I19";
    /**
     * Code: I20
     */
    readonly AsynchronousCollaborativeCareUpdate: "I20";
    /**
     * Code: I21
     */
    readonly CollaborativeCareMessage: "I21";
    /**
     * Code: I22
     */
    readonly CollaborativeCareFetchCollaborativeCareInformation: "I22";
    /**
     * Code: J01
     */
    readonly QCNACKCancelQueryAcknowledgeMessage: "J01";
    /**
     * Code: J02
     */
    readonly QSXACKCancelSubscriptionAcknowledgeMessage: "J02";
    /**
     * Code: K11
     */
    readonly RSPSegmentPatternResponseInResponseToQBPPowerQ11: "K11";
    /**
     * Code: K13
     */
    readonly RTBTabularResponseInResponseToQBPPowerQ13: "K13";
    /**
     * Code: K15
     */
    readonly RDYDisplayResponseInResponseToQBPPowerQ15: "K15";
    /**
     * Code: K21
     */
    readonly RSPGetPersonDemographicsResponse: "K21";
    /**
     * Code: K22
     */
    readonly RSPFindCandidatesResponse: "K22";
    /**
     * Code: K23
     */
    readonly RSPGetCorrespondingIdentifiersResponse: "K23";
    /**
     * Code: K24
     */
    readonly RSPAllocateIdentifiersResponse: "K24";
    /**
     * Code: K25
     */
    readonly RSPPersonnelInformationBySegmentResponse: "K25";
    /**
     * Code: K31
     */
    readonly RSPDispenseHistoryResponse: "K31";
    /**
     * Code: K32
     */
    readonly FindCandidatesIncludingVisitInformationResponse: "K32";
    /**
     * Code: K33
     */
    readonly GetDonorRecordCandidatesResponseMessage: "K33";
    /**
     * Code: K34
     */
    readonly SegmentPatternResponseMessage: "K34";
    /**
     * Code: M01
     */
    readonly MFNMFKMasterFileNotOtherwiseSpecified: "M01";
    /**
     * Code: M02
     */
    readonly MFNMFKMasterFileStaffPractitioner: "M02";
    /**
     * Code: M03
     */
    readonly MFNMFKMasterFileTestObservation: "M03";
    /**
     * Code: M04
     */
    readonly MFNMFKMasterFilesChargeDescription: "M04";
    /**
     * Code: M05
     */
    readonly MFNMFKPatientLocationMasterFile: "M05";
    /**
     * Code: M06
     */
    readonly MFNMFKClinicalStudyWithPhasesAndSchedulesMasterFile: "M06";
    /**
     * Code: M07
     */
    readonly MFNMFKClinicalStudyWithoutPhasesButWithSchedulesMasterFile: "M07";
    /**
     * Code: M08
     */
    readonly MFNMFKTestObservationNumericMasterFile: "M08";
    /**
     * Code: M09
     */
    readonly MFNMFKTestObservationCategoricalMasterFile: "M09";
    /**
     * Code: M10
     */
    readonly MFNMFKTestObservationBatteriesMasterFile: "M10";
    /**
     * Code: M11
     */
    readonly MFNMFKTestCalculatedObservationsMasterFile: "M11";
    /**
     * Code: M12
     */
    readonly MFNMFKMasterFileNotificationMessage: "M12";
    /**
     * Code: M13
     */
    readonly MFNMFKMasterFileNotificationGeneral: "M13";
    /**
     * Code: M14
     */
    readonly MFNMFKMasterFileNotificationSiteDefined: "M14";
    /**
     * Code: M15
     */
    readonly MFNMFKInventoryItemMasterFileNotification: "M15";
    /**
     * Code: M16
     */
    readonly MFNMFKMasterFileNotificationInventoryItemEnhanced: "M16";
    /**
     * Code: M17
     */
    readonly DRGMasterFileMessage: "M17";
    /**
     * Code: M18
     */
    readonly MFNMFKMasterFileNotificationTestObservationPayer: "M18";
    /**
     * Code: N01
     */
    readonly NMQNMRApplicationManagementQueryMessage: "N01";
    /**
     * Code: N02
     */
    readonly NMDACKApplicationManagementDataMessageUnsolicited: "N02";
    /**
     * Code: O01
     */
    readonly ORMOrderMessageAlsoRDERDSRGVRAS: "O01";
    /**
     * Code: O02
     */
    readonly ORROrderResponseAlsoRRERRDRRGRRA: "O02";
    /**
     * Code: O03
     */
    readonly OMDDietOrder: "O03";
    /**
     * Code: O04
     */
    readonly ORDDietOrderAcknowledgment: "O04";
    /**
     * Code: O05
     */
    readonly OMSStockRequisitionOrder: "O05";
    /**
     * Code: O06
     */
    readonly ORSStockRequisitionAcknowledgment: "O06";
    /**
     * Code: O07
     */
    readonly OMNNonStockRequisitionOrder: "O07";
    /**
     * Code: O08
     */
    readonly ORNNonStockRequisitionAcknowledgment: "O08";
    /**
     * Code: O09
     */
    readonly OMPPharmacyTreatmentOrder: "O09";
    /**
     * Code: O10
     */
    readonly ORPPharmacyTreatmentOrderAcknowledgment: "O10";
    /**
     * Code: O11
     */
    readonly RDEPharmacyTreatmentEncodedOrder: "O11";
    /**
     * Code: O12
     */
    readonly RREPharmacyTreatmentEncodedOrderAcknowledgment: "O12";
    /**
     * Code: O13
     */
    readonly RDSPharmacyTreatmentDispense: "O13";
    /**
     * Code: O14
     */
    readonly RRDPharmacyTreatmentDispenseAcknowledgment: "O14";
    /**
     * Code: O15
     */
    readonly RGVPharmacyTreatmentGive: "O15";
    /**
     * Code: O16
     */
    readonly RRGPharmacyTreatmentGiveAcknowledgment: "O16";
    /**
     * Code: O17
     */
    readonly RASPharmacyTreatmentAdministration: "O17";
    /**
     * Code: O18
     */
    readonly RRAPharmacyTreatmentAdministrationAcknowledgment: "O18";
    /**
     * Code: O19
     */
    readonly OMGGeneralClinicalOrder: "O19";
    /**
     * Code: O20
     */
    readonly ORGORLGeneralClinicalOrderResponse: "O20";
    /**
     * Code: O21
     */
    readonly OMLLaboratoryOrder: "O21";
    /**
     * Code: O22
     */
    readonly ORLGeneralLaboratoryOrderResponseMessageToAnyOML: "O22";
    /**
     * Code: O23
     */
    readonly OMIImagingOrder: "O23";
    /**
     * Code: O24
     */
    readonly ORIImagingOrderResponseMessageToAnyOMI: "O24";
    /**
     * Code: O25
     */
    readonly RDEPharmacyTreatmentRefillAuthorizationRequest: "O25";
    /**
     * Code: O26
     */
    readonly RREPharmacyTreatmentRefillAuthorizationAcknowledgement: "O26";
    /**
     * Code: O27
     */
    readonly OMBBloodProductOrder: "O27";
    /**
     * Code: O28
     */
    readonly ORBBloodProductOrderAcknowledgment: "O28";
    /**
     * Code: O29
     */
    readonly BPSBloodProductDispenseStatus: "O29";
    /**
     * Code: O30
     */
    readonly BRPBloodProductDispenseStatusAcknowledgment: "O30";
    /**
     * Code: O31
     */
    readonly BTSBloodProductTransfusionDisposition: "O31";
    /**
     * Code: O32
     */
    readonly BRTBloodProductTransfusionDispositionAcknowledgment: "O32";
    /**
     * Code: O33
     */
    readonly OMLLaboratoryOrderForMultipleOrdersRelatedToASingleSpecimen: "O33";
    /**
     * Code: O34
     */
    readonly ORLLaboratoryOrderResponseMessageToAMultipleOrderRelatedToSingleSpecimenOML: "O34";
    /**
     * Code: O35
     */
    readonly OMLLaboratoryOrderForMultipleOrdersRelatedToASingleContainerOfASpecimen: "O35";
    /**
     * Code: O36
     */
    readonly ORLLaboratoryOrderResponseMessageToASingleContainerOfASpecimenOML: "O36";
    /**
     * Code: O37
     */
    readonly OPLPopulationLocationBasedLaboratoryOrderMessage: "O37";
    /**
     * Code: O38
     */
    readonly OPRPopulationLocationBasedLaboratoryOrderAcknowledgmentMessage: "O38";
    /**
     * Code: O39
     */
    readonly SpecimenShipmentCentricLaboratoryOrder: "O39";
    /**
     * Code: O40
     */
    readonly SpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessage: "O40";
    /**
     * Code: O41
     */
    readonly DBCCreateDonorRecordMessage: "O41";
    /**
     * Code: O42
     */
    readonly DBUUpdateDonorRecordMessage: "O42";
    /**
     * Code: O43
     */
    readonly GeneralOrderMessageWithDocumentPayloadAcknowledgementMessage: "O43";
    /**
     * Code: O44
     */
    readonly DonorRegistrationMinimalMessage: "O44";
    /**
     * Code: O45
     */
    readonly DonorEligibilityObservationsMessage: "O45";
    /**
     * Code: O46
     */
    readonly DonorEligiblityMessage: "O46";
    /**
     * Code: O47
     */
    readonly DonorRequestToCollectMessage: "O47";
    /**
     * Code: O48
     */
    readonly DonationProcedureMessage: "O48";
    /**
     * Code: O49
     */
    readonly PharmacyTreatmentDispenseRequestMessage: "O49";
    /**
     * Code: O50
     */
    readonly PharmacyTreatmentEncodedOrderAcknowledgment: "O50";
    /**
     * Code: O51
     */
    readonly OSUOrderStatusUpdate: "O51";
    /**
     * Code: O52
     */
    readonly OSUOrderStatusUpdateAcknowledgement: "O52";
    /**
     * Code: O53
     */
    readonly ORLGeneralLaboratoryOrderAcknowledgmentMessagePatientOptional: "O53";
    /**
     * Code: O54
     */
    readonly ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerSpecimenPatientOptional: "O54";
    /**
     * Code: O55
     */
    readonly ORLLaboratoryOrderAcknowledgmentMessageMultipleOrderPerContainerOfSpecimenPatientOptional: "O55";
    /**
     * Code: O56
     */
    readonly ORLSpecimenShipmentCentricLaboratoryOrderAcknowledgmentMessagePatientOptional: "O56";
    /**
     * Code: O57
     */
    readonly OMQGeneralOrderMessageWithDocumentPayload: "O57";
    /**
     * Code: O58
     */
    readonly ORXGeneralOrderMessageWithDocumentPayloadAcknowledgementMessage: "O58";
    /**
     * Code: O59
     */
    readonly OMLLaboratoryOrderForAdditionalWorkUp: "O59";
    /**
     * Code: P01
     */
    readonly BARACKAddPatientAccounts: "P01";
    /**
     * Code: P02
     */
    readonly BARACKPurgePatientAccounts: "P02";
    /**
     * Code: P03
     */
    readonly DFTACKPostDetailFinancialTransaction: "P03";
    /**
     * Code: P04
     */
    readonly QRYDSPGenerateBillAndARStatements: "P04";
    /**
     * Code: P05
     */
    readonly BARACKUpdateAccount: "P05";
    /**
     * Code: P06
     */
    readonly BARACKEndAccount: "P06";
    /**
     * Code: P07
     */
    readonly PEXUnsolicitedInitialIndividualProductExperienceReport: "P07";
    /**
     * Code: P08
     */
    readonly PEXUnsolicitedUpdateIndividualProductExperienceReport: "P08";
    /**
     * Code: P09
     */
    readonly SURSummaryProductExperienceReport: "P09";
    /**
     * Code: P10
     */
    readonly BARACKTransmitAmbulatoryPaymentClassificationAPC: "P10";
    /**
     * Code: P11
     */
    readonly DFTACKPostDetailFinancialTransactionsNew: "P11";
    /**
     * Code: P12
     */
    readonly BARACKUpdateDiagnosisProcedure: "P12";
    /**
     * Code: PC1
     */
    readonly PPRPCProblemAdd: "PC1";
    /**
     * Code: PC2
     */
    readonly PPRPCProblemUpdate: "PC2";
    /**
     * Code: PC3
     */
    readonly PPRPCProblemDelete: "PC3";
    /**
     * Code: PC4
     */
    readonly QRYPCProblemQuery: "PC4";
    /**
     * Code: PC5
     */
    readonly PRRPCProblemResponse: "PC5";
    /**
     * Code: PC6
     */
    readonly PGLPCGoalAdd: "PC6";
    /**
     * Code: PC7
     */
    readonly PGLPCGoalUpdate: "PC7";
    /**
     * Code: PC8
     */
    readonly PGLPCGoalDelete: "PC8";
    /**
     * Code: PC9
     */
    readonly QRYPCGoalQuery: "PC9";
    /**
     * Code: PCA
     */
    readonly PPVPCGoalResponse: "PCA";
    /**
     * Code: PCB
     */
    readonly PPPPCPathwayProblemOrientedAdd: "PCB";
    /**
     * Code: PCC
     */
    readonly PPPPCPathwayProblemOrientedUpdate: "PCC";
    /**
     * Code: PCD
     */
    readonly PPPPCPathwayProblemOrientedDelete: "PCD";
    /**
     * Code: PCE
     */
    readonly QRYPCPathwayProblemOrientedQuery: "PCE";
    /**
     * Code: PCF
     */
    readonly PTRPCPathwayProblemOrientedQueryResponse: "PCF";
    /**
     * Code: PCG
     */
    readonly PPGPCPathwayGoalOrientedAdd: "PCG";
    /**
     * Code: PCH
     */
    readonly PPGPCPathwayGoalOrientedUpdate: "PCH";
    /**
     * Code: PCJ
     */
    readonly PPGPCPathwayGoalOrientedDelete: "PCJ";
    /**
     * Code: PCK
     */
    readonly QRYPCPathwayGoalOrientedQuery: "PCK";
    /**
     * Code: PCL
     */
    readonly PPTPCPathwayGoalOrientedQueryResponse: "PCL";
    /**
     * Code: Q01
     */
    readonly QRYDSRQuerySentForImmediateResponse: "Q01";
    /**
     * Code: Q02
     */
    readonly QRYQCKQuerySentForDeferredResponse: "Q02";
    /**
     * Code: Q03
     */
    readonly DSRACKDeferredResponseToAQuery: "Q03";
    /**
     * Code: Q04
     */
    readonly EQQEmbeddedQueryLanguageQuery: "Q04";
    /**
     * Code: Q05
     */
    readonly UDMACKUnsolicitedDisplayUpdateMessage: "Q05";
    /**
     * Code: Q06
     */
    readonly OSQOSRQueryForOrderStatus: "Q06";
    /**
     * Code: Q07
     */
    readonly VQQVirtualTableQuery: "Q07";
    /**
     * Code: Q08
     */
    readonly SPQStoredProcedureRequest: "Q08";
    /**
     * Code: Q09
     */
    readonly RQQEventReplayQuery: "Q09";
    /**
     * Code: Q11
     */
    readonly QBPQueryByParameterRequestingAnRSPSegmentPatternResponse: "Q11";
    /**
     * Code: Q13
     */
    readonly QBPQueryByParameterRequestingAnRTBTabularResponse: "Q13";
    /**
     * Code: Q15
     */
    readonly QBPQueryByParameterRequestingAnRDYDisplayResponse: "Q15";
    /**
     * Code: Q16
     */
    readonly QSBCreateSubscription: "Q16";
    /**
     * Code: Q17
     */
    readonly QVRQueryForPreviousEvents: "Q17";
    /**
     * Code: Q21
     */
    readonly QBPGetPersonDemographics: "Q21";
    /**
     * Code: Q22
     */
    readonly QBPFindCandidates: "Q22";
    /**
     * Code: Q23
     */
    readonly QBPGetCorrespondingIdentifiers: "Q23";
    /**
     * Code: Q24
     */
    readonly QBPAllocateIdentifiers: "Q24";
    /**
     * Code: Q25
     */
    readonly QBPPersonnelInformationBySegmentQuery: "Q25";
    /**
     * Code: Q26
     */
    readonly RORPharmacyTreatmentOrderResponse: "Q26";
    /**
     * Code: Q27
     */
    readonly RARPharmacyTreatmentAdministrationInformation: "Q27";
    /**
     * Code: Q28
     */
    readonly RDRPharmacyTreatmentDispenseInformation: "Q28";
    /**
     * Code: Q29
     */
    readonly RERPharmacyTreatmentEncodedOrderInformation: "Q29";
    /**
     * Code: Q30
     */
    readonly RGRPharmacyTreatmentDoseInformation: "Q30";
    /**
     * Code: Q31
     */
    readonly QBPQueryDispenseHistory: "Q31";
    /**
     * Code: Q32
     */
    readonly FindCandidatesIncludingVisitInformation: "Q32";
    /**
     * Code: Q33
     */
    readonly QBPGetDonorRecordCandidates: "Q33";
    /**
     * Code: Q34
     */
    readonly QBPGetDonorRecord: "Q34";
    /**
     * Code: R01
     */
    readonly ORUACKUnsolicitedTransmissionOfAnObservationMessage: "R01";
    /**
     * Code: R02
     */
    readonly QRYQueryForResultsOfObservation: "R02";
    /**
     * Code: R03
     */
    readonly QRYDSRDisplayOrientedResultsQueryUnsolUpdateForBackwardCompatibilityOnlyReplacedByQ05: "R03";
    /**
     * Code: R04
     */
    readonly ORFResponseToQueryTransmissionOfRequestedObservation: "R04";
    /**
     * Code: R05
     */
    readonly QRYDSRQueryForDisplayResultsSeeQ01: "R05";
    /**
     * Code: R06
     */
    readonly UDMUnsolicitedUpdateDisplayResultsSeeQ05: "R06";
    /**
     * Code: R07
     */
    readonly EDREnhancedDisplayResponse: "R07";
    /**
     * Code: R08
     */
    readonly TBRTabularDataResponse: "R08";
    /**
     * Code: R09
     */
    readonly ERPEventReplayResponse: "R09";
    /**
     * Code: R0R
     */
    readonly R0RPharmacyPrescriptionOrderQueryResponse: "R0R";
    /**
     * Code: R21
     */
    readonly OULUnsolicitedLaboratoryObservation: "R21";
    /**
     * Code: R22
     */
    readonly OULUnsolicitedSpecimenOrientedObservationMessage: "R22";
    /**
     * Code: R23
     */
    readonly OULUnsolicitedSpecimenContainerOrientedObservationMessage: "R23";
    /**
     * Code: R24
     */
    readonly OULUnsolicitedOrderOrientedObservationMessage: "R24";
    /**
     * Code: R25
     */
    readonly OPUUnsolicitedPopulationLocationBasedLaboratoryObservationMessage: "R25";
    /**
     * Code: R26
     */
    readonly OSMUnsolicitedSpecimenShipmentManifestMessage: "R26";
    /**
     * Code: R30
     */
    readonly ORUUnsolicitedPointOfCareObservationMessageWithoutExistingOrderPlaceAnOrder: "R30";
    /**
     * Code: R31
     */
    readonly ORUUnsolicitedNewPointOfCareObservationMessageSearchForAnOrder: "R31";
    /**
     * Code: R32
     */
    readonly ORUUnsolicitedPreOrderedPointOfCareObservation: "R32";
    /**
     * Code: R33
     */
    readonly ORAObservationReportAcknowledgement: "R33";
    /**
     * Code: R40
     */
    readonly ORUUnsolicitedReportAlarm: "R40";
    /**
     * Code: R41
     */
    readonly ObservationReportAlertAcknowledgement: "R41";
    /**
     * Code: R42
     */
    readonly ORUUnsolicitedDeviceEventObservationMessage: "R42";
    /**
     * Code: R43
     */
    readonly ORUUnsolicitedPatientDeviceAssociationObservationMessage: "R43";
    /**
     * Code: RAR
     */
    readonly RARPharmacyAdministrationInformationQueryResponse: "RAR";
    /**
     * Code: RDR
     */
    readonly RDRPharmacyDispenseInformationQueryResponse: "RDR";
    /**
     * Code: RER
     */
    readonly RERPharmacyEncodedOrderInformationQueryResponse: "RER";
    /**
     * Code: RGR
     */
    readonly RGRPharmacyDoseInformationQueryResponse: "RGR";
    /**
     * Code: ROR
     */
    readonly RORPharmacyPrescriptionOrderQueryResponse: "ROR";
    /**
     * Code: S01
     */
    readonly SRMSRRRequestNewAppointmentBooking: "S01";
    /**
     * Code: S02
     */
    readonly SRMSRRRequestAppointmentRescheduling: "S02";
    /**
     * Code: S03
     */
    readonly SRMSRRRequestAppointmentModification: "S03";
    /**
     * Code: S04
     */
    readonly SRMSRRRequestAppointmentCancellation: "S04";
    /**
     * Code: S05
     */
    readonly SRMSRRRequestAppointmentDiscontinuation: "S05";
    /**
     * Code: S06
     */
    readonly SRMSRRRequestAppointmentDeletion: "S06";
    /**
     * Code: S07
     */
    readonly SRMSRRRequestAdditionOfServiceResourceOnAppointment: "S07";
    /**
     * Code: S08
     */
    readonly SRMSRRRequestModificationOfServiceResourceOnAppointment: "S08";
    /**
     * Code: S09
     */
    readonly SRMSRRRequestCancellationOfServiceResourceOnAppointment: "S09";
    /**
     * Code: S10
     */
    readonly SRMSRRRequestDiscontinuationOfServiceResourceOnAppointment: "S10";
    /**
     * Code: S11
     */
    readonly SRMSRRRequestDeletionOfServiceResourceOnAppointment: "S11";
    /**
     * Code: S12
     */
    readonly SIUACKNotificationOfNewAppointmentBooking: "S12";
    /**
     * Code: S13
     */
    readonly SIUACKNotificationOfAppointmentRescheduling: "S13";
    /**
     * Code: S14
     */
    readonly SIUACKNotificationOfAppointmentModification: "S14";
    /**
     * Code: S15
     */
    readonly SIUACKNotificationOfAppointmentCancellation: "S15";
    /**
     * Code: S16
     */
    readonly SIUACKNotificationOfAppointmentDiscontinuation: "S16";
    /**
     * Code: S17
     */
    readonly SIUACKNotificationOfAppointmentDeletion: "S17";
    /**
     * Code: S18
     */
    readonly SIUACKNotificationOfAdditionOfServiceResourceOnAppointment: "S18";
    /**
     * Code: S19
     */
    readonly SIUACKNotificationOfModificationOfServiceResourceOnAppointment: "S19";
    /**
     * Code: S20
     */
    readonly SIUACKNotificationOfCancellationOfServiceResourceOnAppointment: "S20";
    /**
     * Code: S21
     */
    readonly SIUACKNotificationOfDiscontinuationOfServiceResourceOnAppointment: "S21";
    /**
     * Code: S22
     */
    readonly SIUACKNotificationOfDeletionOfServiceResourceOnAppointment: "S22";
    /**
     * Code: S23
     */
    readonly SIUACKNotificationOfBlockedScheduleTimeSlotS: "S23";
    /**
     * Code: S24
     */
    readonly SIUACKNotificationOfOpenedQuotationUnblockedQuotationScheduleTimeSlotS: "S24";
    /**
     * Code: S25
     */
    readonly SQMSQRScheduleQueryMessageAndResponse: "S25";
    /**
     * Code: S26
     */
    readonly SIUACKNotificationThatPatientDidNotShowUpForScheduleAppointment: "S26";
    /**
     * Code: S27
     */
    readonly SIUACKBroadcastNotificationOfScheduledAppointments: "S27";
    /**
     * Code: S28
     */
    readonly SLRSLSRequestNewSterilizationLot: "S28";
    /**
     * Code: S29
     */
    readonly SLRSLSRequestSterilizationLotDeletion: "S29";
    /**
     * Code: S30
     */
    readonly STISTSRequestItem: "S30";
    /**
     * Code: S31
     */
    readonly SDRSDSRequestAntiMicrobialDeviceData: "S31";
    /**
     * Code: S32
     */
    readonly SMDSMSRequestAntiMicrobialDeviceCycleData: "S32";
    /**
     * Code: S33
     */
    readonly STCACKNotificationOfSterilizationConfiguration: "S33";
    /**
     * Code: S34
     */
    readonly SLNACKNotificationOfSterilizationLot: "S34";
    /**
     * Code: S35
     */
    readonly SLNACKNotificationOfSterilizationLotDeletion: "S35";
    /**
     * Code: S36
     */
    readonly SDNACKNotificationOfAntiMicrobialDeviceData: "S36";
    /**
     * Code: S37
     */
    readonly SCNACKNotificationOfAntiMicrobialDeviceCycleData: "S37";
    /**
     * Code: S38
     */
    readonly ContainersPreparedForSpecimenCollection: "S38";
    /**
     * Code: S39
     */
    readonly SpecimenCollectionSuccessful: "S39";
    /**
     * Code: S40
     */
    readonly SpecimenCollectionUnsuccessful: "S40";
    /**
     * Code: S41
     */
    readonly SpecimenDeparted: "S41";
    /**
     * Code: S42
     */
    readonly SpecimenArrived: "S42";
    /**
     * Code: S43
     */
    readonly SpecimenAccepted: "S43";
    /**
     * Code: S44
     */
    readonly SpecimenRejected: "S44";
    /**
     * Code: S45
     */
    readonly SpecimenReIdentified: "S45";
    /**
     * Code: S46
     */
    readonly SpecimenDeIdentified: "S46";
    /**
     * Code: S47
     */
    readonly SpecimenSentToArchive: "S47";
    /**
     * Code: S48
     */
    readonly SpecimenRetrievedFromArchive: "S48";
    /**
     * Code: S49
     */
    readonly SpecimenDisposedOf: "S49";
    /**
     * Code: S50
     */
    readonly SpecimenProcedureStepSuccessfulWithDerivedSpecimenS: "S50";
    /**
     * Code: S51
     */
    readonly SpecimenProcedureStepSuccessfulNoDerivedSpecimenS: "S51";
    /**
     * Code: S52
     */
    readonly SpecimenProcedureStepUnsuccessful: "S52";
    /**
     * Code: T01
     */
    readonly MDMACKOriginalDocumentNotification: "T01";
    /**
     * Code: T02
     */
    readonly MDMACKOriginalDocumentNotificationAndContent: "T02";
    /**
     * Code: T03
     */
    readonly MDMACKDocumentStatusChangeNotification: "T03";
    /**
     * Code: T04
     */
    readonly MDMACKDocumentStatusChangeNotificationAndContent: "T04";
    /**
     * Code: T05
     */
    readonly MDMACKDocumentAddendumNotification: "T05";
    /**
     * Code: T06
     */
    readonly MDMACKDocumentAddendumNotificationAndContent: "T06";
    /**
     * Code: T07
     */
    readonly MDMACKDocumentEditNotification: "T07";
    /**
     * Code: T08
     */
    readonly MDMACKDocumentEditNotificationAndContent: "T08";
    /**
     * Code: T09
     */
    readonly MDMACKDocumentReplacementNotification: "T09";
    /**
     * Code: T10
     */
    readonly MDMACKDocumentReplacementNotificationAndContent: "T10";
    /**
     * Code: T11
     */
    readonly MDMACKDocumentCancelNotification: "T11";
    /**
     * Code: T12
     */
    readonly QRYDOCDocumentQuery: "T12";
    /**
     * Code: U01
     */
    readonly ESUACKAutomatedEquipmentStatusUpdate: "U01";
    /**
     * Code: U02
     */
    readonly ESRACKAutomatedEquipmentStatusRequest: "U02";
    /**
     * Code: U03
     */
    readonly SSUACKSpecimenStatusUpdate: "U03";
    /**
     * Code: U04
     */
    readonly SSRACKSpecimenStatusRequest: "U04";
    /**
     * Code: U05
     */
    readonly INUACKAutomatedEquipmentInventoryUpdate: "U05";
    /**
     * Code: U06
     */
    readonly INRACKAutomatedEquipmentInventoryRequest: "U06";
    /**
     * Code: U07
     */
    readonly EACACKAutomatedEquipmentCommand: "U07";
    /**
     * Code: U08
     */
    readonly EARACKAutomatedEquipmentResponse: "U08";
    /**
     * Code: U09
     */
    readonly EANACKAutomatedEquipmentNotification: "U09";
    /**
     * Code: U10
     */
    readonly TCUACKAutomatedEquipmentTestCodeSettingsUpdate: "U10";
    /**
     * Code: U11
     */
    readonly TCRACKAutomatedEquipmentTestCodeSettingsRequest: "U11";
    /**
     * Code: U12
     */
    readonly LSUACKAutomatedEquipmentLogServiceUpdate: "U12";
    /**
     * Code: U13
     */
    readonly LSRACKAutomatedEquipmentLogServiceRequest: "U13";
    /**
     * Code: U14
     */
    readonly INRACKAutomatedEquipmentInventoryRequestU14: "U14";
    /**
     * Code: V01
     */
    readonly VXQQueryForVaccinationRecord: "V01";
    /**
     * Code: V02
     */
    readonly VXXResponseToVaccinationQueryReturningMultiplePIDMatches: "V02";
    /**
     * Code: V03
     */
    readonly VXRVaccinationRecordResponse: "V03";
    /**
     * Code: V04
     */
    readonly VXUUnsolicitedVaccinationRecordUpdate: "V04";
    /**
     * Code: varies
     */
    readonly MFQMFRMasterFilesQueryUseEventSameAsAskingForEGM05Location: "varies";
    /**
     * Code: Varies
     */
    readonly MFQMFRMasterFilesQueryUseEventSameAsAskingForEGM05LocationVaries: "Varies";
    /**
     * Code: W01
     */
    readonly ORUWaveformResultUnsolicitedTransmissionOfRequestedInformation: "W01";
    /**
     * Code: W02
     */
    readonly QRFWaveformResultResponseToQuery: "W02";
    /**
     * Code: X01
     */
    readonly PEXProductExperience: "X01";
};
/**
 * Concepts specifying the trigger event for Version 2.x interface messages.
 */
export declare type V20003CodeType = typeof V20003Codes[keyof typeof V20003Codes];
//# sourceMappingURL=V20003Codes.d.ts.map