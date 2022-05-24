import { CodingArgs } from '../fhir/Coding.js';
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare type DocumentClassCodingType = {
    /**
     * Code: 11369-6
     */
    HistoryOfImmunization: CodingArgs;
    /**
     * Code: 11485-0
     */
    AnesthesiaRecords: CodingArgs;
    /**
     * Code: 11486-8
     */
    ChemotherapyRecords: CodingArgs;
    /**
     * Code: 11488-4
     */
    ConsultNote: CodingArgs;
    /**
     * Code: 11504-8
     */
    SurgicalOperationNote: CodingArgs;
    /**
     * Code: 11506-3
     */
    ProviderUnspecifiedProgressNote: CodingArgs;
    /**
     * Code: 11543-6
     */
    NurseryRecords: CodingArgs;
    /**
     * Code: 15508-5
     */
    LaborAndDeliveryRecords: CodingArgs;
    /**
     * Code: 18726-0
     */
    RadiologyStudiesSet: CodingArgs;
    /**
     * Code: 18748-4
     */
    DiagnosticImagingStudy: CodingArgs;
    /**
     * Code: 18761-7
     */
    ProviderUnspecifiedTransferSummary: CodingArgs;
    /**
     * Code: 18842-5
     */
    DischargeSummary: CodingArgs;
    /**
     * Code: 26436-6
     */
    LaboratoryStudiesSet: CodingArgs;
    /**
     * Code: 26441-6
     */
    CardiologyStudiesSet: CodingArgs;
    /**
     * Code: 26442-4
     */
    ObstetricalStudiesSet: CodingArgs;
    /**
     * Code: 27895-2
     */
    GastroenterologyEndoscopyStudiesSet: CodingArgs;
    /**
     * Code: 27896-0
     */
    PulmonaryStudiesSet: CodingArgs;
    /**
     * Code: 27897-8
     */
    NeuromuscularElectrophysiologyStudiesSet: CodingArgs;
    /**
     * Code: 27898-6
     */
    PathologyStudiesSet: CodingArgs;
    /**
     * Code: 28570-0
     */
    ProviderUnspecifiedProcedureNote: CodingArgs;
    /**
     * Code: 28619-5
     */
    OphthalmologyOptometryStudiesSet: CodingArgs;
    /**
     * Code: 28634-4
     */
    MiscellaneousStudiesSet: CodingArgs;
    /**
     * Code: 29749-9
     */
    DialysisRecords: CodingArgs;
    /**
     * Code: 29750-7
     */
    NeonatalIntensiveCareRecords: CodingArgs;
    /**
     * Code: 29751-5
     */
    CriticalCareRecords: CodingArgs;
    /**
     * Code: 29752-3
     */
    PerioperativeRecords: CodingArgs;
    /**
     * Code: 34109-9
     */
    EvaluationAndManagementNote: CodingArgs;
    /**
     * Code: 34117-2
     */
    ProviderUnspecifiedHistoryAndPhysicalNote: CodingArgs;
    /**
     * Code: 34121-4
     */
    InterventionalProcedureNote: CodingArgs;
    /**
     * Code: 34122-2
     */
    PathologyProcedureNote: CodingArgs;
    /**
     * Code: 34133-9
     */
    SummarizationOfEpisodeNote: CodingArgs;
    /**
     * Code: 34140-4
     */
    TransferOfCareReferralNote: CodingArgs;
    /**
     * Code: 34748-4
     */
    TelephoneEncounterNote: CodingArgs;
    /**
     * Code: 34775-7
     */
    GeneralSurgeryPreOperativeEvaluationAndManagementNote: CodingArgs;
    /**
     * Code: 47039-3
     */
    InpatientAdmissionHistoryAndPhysicalNote: CodingArgs;
    /**
     * Code: 47042-7
     */
    CounselingNote: CodingArgs;
    /**
     * Code: 47045-0
     */
    StudyReportDocument: CodingArgs;
    /**
     * Code: 47046-8
     */
    SummaryOfDeath: CodingArgs;
    /**
     * Code: 47049-2
     */
    NonPatientCommunication: CodingArgs;
    /**
     * Code: 53576-5
     */
    PersonalHealthMonitoringReportDocument: CodingArgs;
    /**
     * Code: 56445-0
     */
    MedicationSummaryDocument: CodingArgs;
    /**
     * Code: 56447-6
     */
    PlanOfCareNote: CodingArgs;
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgmentDocument: CodingArgs;
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument: CodingArgs;
    /**
     * Code: 57133-1
     */
    ReferralNote: CodingArgs;
};
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export declare const DocumentClassCodings: DocumentClassCodingType;
//# sourceMappingURL=DocumentClassCodings.d.ts.map