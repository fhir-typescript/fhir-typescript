// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-classcodes|4.0.1
/**
 * This is the code specifying the high-level kind of document (e.g. Prescription, Discharge Summary, Report, etc.). Note: Class code for documents comes from LOINC, and is based upon one of the following:The type of service described by the document. It is described at a very high level in Section 7.3 of the LOINC Manual. The type study performed. It was determined by identifying modalities for study reports. The section of the chart where the document is placed. It was determined from the SETs created for Claims Attachment requests.
 */
export const DocumentClassCodings = {
    /**
     * Code: 11369-6
     */
    HistoryOfImmunization: {
        display: "History of Immunization",
        code: "11369-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 11485-0
     */
    AnesthesiaRecords: {
        display: "Anesthesia records",
        code: "11485-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 11486-8
     */
    ChemotherapyRecords: {
        display: "Chemotherapy records",
        code: "11486-8",
        system: "http://loinc.org",
    },
    /**
     * Code: 11488-4
     */
    ConsultNote: {
        display: "Consult Note",
        code: "11488-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 11504-8
     */
    SurgicalOperationNote: {
        display: "Surgical operation note ",
        code: "11504-8",
        system: "http://loinc.org",
    },
    /**
     * Code: 11506-3
     */
    ProviderUnspecifiedProgressNote: {
        display: "Provider-unspecified progress note",
        code: "11506-3",
        system: "http://loinc.org",
    },
    /**
     * Code: 11543-6
     */
    NurseryRecords: {
        display: "Nursery records",
        code: "11543-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 15508-5
     */
    LaborAndDeliveryRecords: {
        display: "Labor and delivery records",
        code: "15508-5",
        system: "http://loinc.org",
    },
    /**
     * Code: 18726-0
     */
    RadiologyStudiesSet: {
        display: "Radiology studies (set)",
        code: "18726-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 18748-4
     */
    DiagnosticImagingStudy: {
        display: "Diagnostic imaging study",
        code: "18748-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 18761-7
     */
    ProviderUnspecifiedTransferSummary: {
        display: "Provider-unspecified transfer summary",
        code: "18761-7",
        system: "http://loinc.org",
    },
    /**
     * Code: 18842-5
     */
    DischargeSummary: {
        display: "Discharge summary",
        code: "18842-5",
        system: "http://loinc.org",
    },
    /**
     * Code: 26436-6
     */
    LaboratoryStudiesSet: {
        display: "Laboratory Studies (set)",
        code: "26436-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 26441-6
     */
    CardiologyStudiesSet: {
        display: "Cardiology studies (set)",
        code: "26441-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 26442-4
     */
    ObstetricalStudiesSet: {
        display: "Obstetrical studies (set)",
        code: "26442-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 27895-2
     */
    GastroenterologyEndoscopyStudiesSet: {
        display: "Gastroenterology endoscopy studies (set)",
        code: "27895-2",
        system: "http://loinc.org",
    },
    /**
     * Code: 27896-0
     */
    PulmonaryStudiesSet: {
        display: "Pulmonary studies (set)",
        code: "27896-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 27897-8
     */
    NeuromuscularElectrophysiologyStudiesSet: {
        display: "Neuromuscular electrophysiology studies (set)",
        code: "27897-8",
        system: "http://loinc.org",
    },
    /**
     * Code: 27898-6
     */
    PathologyStudiesSet: {
        display: "Pathology studies (set)",
        code: "27898-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 28570-0
     */
    ProviderUnspecifiedProcedureNote: {
        display: "Provider-unspecified procedure note",
        code: "28570-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 28619-5
     */
    OphthalmologyOptometryStudiesSet: {
        display: "Ophthalmology/optometry studies (set)",
        code: "28619-5",
        system: "http://loinc.org",
    },
    /**
     * Code: 28634-4
     */
    MiscellaneousStudiesSet: {
        display: "Miscellaneous studies (set)",
        code: "28634-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 29749-9
     */
    DialysisRecords: {
        display: "Dialysis records",
        code: "29749-9",
        system: "http://loinc.org",
    },
    /**
     * Code: 29750-7
     */
    NeonatalIntensiveCareRecords: {
        display: "Neonatal intensive care records",
        code: "29750-7",
        system: "http://loinc.org",
    },
    /**
     * Code: 29751-5
     */
    CriticalCareRecords: {
        display: "Critical care records",
        code: "29751-5",
        system: "http://loinc.org",
    },
    /**
     * Code: 29752-3
     */
    PerioperativeRecords: {
        display: "Perioperative records",
        code: "29752-3",
        system: "http://loinc.org",
    },
    /**
     * Code: 34109-9
     */
    EvaluationAndManagementNote: {
        display: "Evaluation and management note",
        code: "34109-9",
        system: "http://loinc.org",
    },
    /**
     * Code: 34117-2
     */
    ProviderUnspecifiedHistoryAndPhysicalNote: {
        display: "Provider-unspecified, History and physical note",
        code: "34117-2",
        system: "http://loinc.org",
    },
    /**
     * Code: 34121-4
     */
    InterventionalProcedureNote: {
        display: "Interventional procedure note",
        code: "34121-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 34122-2
     */
    PathologyProcedureNote: {
        display: "Pathology procedure note",
        code: "34122-2",
        system: "http://loinc.org",
    },
    /**
     * Code: 34133-9
     */
    SummarizationOfEpisodeNote: {
        display: "Summarization of episode note",
        code: "34133-9",
        system: "http://loinc.org",
    },
    /**
     * Code: 34140-4
     */
    TransferOfCareReferralNote: {
        display: "Transfer of care referral note",
        code: "34140-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 34748-4
     */
    TelephoneEncounterNote: {
        display: "Telephone encounter note",
        code: "34748-4",
        system: "http://loinc.org",
    },
    /**
     * Code: 34775-7
     */
    GeneralSurgeryPreOperativeEvaluationAndManagementNote: {
        display: "General surgery Pre-operative evaluation and management note",
        code: "34775-7",
        system: "http://loinc.org",
    },
    /**
     * Code: 47039-3
     */
    InpatientAdmissionHistoryAndPhysicalNote: {
        display: "Inpatient Admission history and physical note",
        code: "47039-3",
        system: "http://loinc.org",
    },
    /**
     * Code: 47042-7
     */
    CounselingNote: {
        display: "Counseling note",
        code: "47042-7",
        system: "http://loinc.org",
    },
    /**
     * Code: 47045-0
     */
    StudyReportDocument: {
        display: "Study report Document",
        code: "47045-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 47046-8
     */
    SummaryOfDeath: {
        display: "Summary of death",
        code: "47046-8",
        system: "http://loinc.org",
    },
    /**
     * Code: 47049-2
     */
    NonPatientCommunication: {
        display: "Non-patient Communication",
        code: "47049-2",
        system: "http://loinc.org",
    },
    /**
     * Code: 53576-5
     */
    PersonalHealthMonitoringReportDocument: {
        display: "Personal health monitoring report Document",
        code: "53576-5",
        system: "http://loinc.org",
    },
    /**
     * Code: 56445-0
     */
    MedicationSummaryDocument: {
        display: "Medication Summary Document",
        code: "56445-0",
        system: "http://loinc.org",
    },
    /**
     * Code: 56447-6
     */
    PlanOfCareNote: {
        display: "Plan of care note",
        code: "56447-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 57016-8
     */
    PrivacyPolicyAcknowledgmentDocument: {
        display: "Privacy Policy Acknowledgment Document",
        code: "57016-8",
        system: "http://loinc.org",
    },
    /**
     * Code: 57017-6
     */
    PrivacyPolicyOrganizationDocument: {
        display: "Privacy Policy Organization Document",
        code: "57017-6",
        system: "http://loinc.org",
    },
    /**
     * Code: 57133-1
     */
    ReferralNote: {
        display: "Referral note",
        code: "57133-1",
        system: "http://loinc.org",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRDbGFzc0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0RvY3VtZW50Q2xhc3NDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHdFQUF3RTtBQThMeEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCxxQkFBcUIsRUFBRTtRQUNyQixPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQjtJQUNEOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0I7SUFDRDs7T0FFRztJQUNILG1CQUFtQixFQUFFO1FBQ25CLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0JBQWtCO0tBQzNCO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0I7SUFDRDs7T0FFRztJQUNILHFCQUFxQixFQUFFO1FBQ3JCLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0JBQWtCO0tBQzNCO0lBQ0Q7O09BRUc7SUFDSCwrQkFBK0IsRUFBRTtRQUMvQixPQUFPLEVBQUUsb0NBQW9DO1FBQzdDLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGtCQUFrQjtLQUMzQjtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUs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QU0sRUFBRSxrQkFBa0I7S0FDM0I7SUFDRDs7T0FFRztJQUNILGlDQUFpQyxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxzQ0FBc0M7UUFDL0MsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsa0JBQWtCO0tBQzNCO0lBQ0Q7O09BRUc7SUFDSCxZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0I7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2RvY3VtZW50LWNsYXNzY29kZXN8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBjb2RlIHNwZWNpZnlpbmcgdGhlIGhpZ2gtbGV2ZWwga2luZCBvZiBkb2N1bWVudCAoZS5nLiBQcmVzY3JpcHRpb24sIERpc2NoYXJnZSBTdW1tYXJ5LCBSZXBvcnQsIGV0Yy4pLiBOb3RlOiBDbGFzcyBjb2RlIGZvciBkb2N1bWVudHMgY29tZXMgZnJvbSBMT0lOQywgYW5kIGlzIGJhc2VkIHVwb24gb25lIG9mIHRoZSBmb2xsb3dpbmc6VGhlIHR5cGUgb2Ygc2VydmljZSBkZXNjcmliZWQgYnkgdGhlIGRvY3VtZW50LiBJdCBpcyBkZXNjcmliZWQgYXQgYSB2ZXJ5IGhpZ2ggbGV2ZWwgaW4gU2VjdGlvbiA3LjMgb2YgdGhlIExPSU5DIE1hbnVhbC4gVGhlIHR5cGUgc3R1ZHkgcGVyZm9ybWVkLiBJdCB3YXMgZGV0ZXJtaW5lZCBieSBpZGVudGlmeWluZyBtb2RhbGl0aWVzIGZvciBzdHVkeSByZXBvcnRzLiBUaGUgc2VjdGlvbiBvZiB0aGUgY2hhcnQgd2hlcmUgdGhlIGRvY3VtZW50IGlzIHBsYWNlZC4gSXQgd2FzIGRldGVybWluZWQgZnJvbSB0aGUgU0VUcyBjcmVhdGVkIGZvciBDbGFpbXMgQXR0YWNobWVudCByZXF1ZXN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50Q2xhc3NDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExMzY5LTZcclxuICAgKi9cclxuICBIaXN0b3J5T2ZJbW11bml6YXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTE0ODUtMFxyXG4gICAqL1xyXG4gIEFuZXN0aGVzaWFSZWNvcmRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNDg2LThcclxuICAgKi9cclxuICBDaGVtb3RoZXJhcHlSZWNvcmRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNDg4LTRcclxuICAgKi9cclxuICBDb25zdWx0Tm90ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAxMTUwNC04XHJcbiAgICovXHJcbiAgU3VyZ2ljYWxPcGVyYXRpb25Ob3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNTA2LTNcclxuICAgKi9cclxuICBQcm92aWRlclVuc3BlY2lmaWVkUHJvZ3Jlc3NOb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNTQzLTZcclxuICAgKi9cclxuICBOdXJzZXJ5UmVjb3JkczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAxNTUwOC01XHJcbiAgICovXHJcbiAgTGFib3JBbmREZWxpdmVyeVJlY29yZHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTg3MjYtMFxyXG4gICAqL1xyXG4gIFJhZGlvbG9neVN0dWRpZXNTZXQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTg3NDgtNFxyXG4gICAqL1xyXG4gIERpYWdub3N0aWNJbWFnaW5nU3R1ZHk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTg3NjEtN1xyXG4gICAqL1xyXG4gIFByb3ZpZGVyVW5zcGVjaWZpZWRUcmFuc2ZlclN1bW1hcnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTg4NDItNVxyXG4gICAqL1xyXG4gIERpc2NoYXJnZVN1bW1hcnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjY0MzYtNlxyXG4gICAqL1xyXG4gIExhYm9yYXRvcnlTdHVkaWVzU2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI2NDQxLTZcclxuICAgKi9cclxuICBDYXJkaW9sb2d5U3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyNjQ0Mi00XHJcbiAgICovXHJcbiAgT2JzdGV0cmljYWxTdHVkaWVzU2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI3ODk1LTJcclxuICAgKi9cclxuICBHYXN0cm9lbnRlcm9sb2d5RW5kb3Njb3B5U3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyNzg5Ni0wXHJcbiAgICovXHJcbiAgUHVsbW9uYXJ5U3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyNzg5Ny04XHJcbiAgICovXHJcbiAgTmV1cm9tdXNjdWxhckVsZWN0cm9waHlzaW9sb2d5U3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyNzg5OC02XHJcbiAgICovXHJcbiAgUGF0aG9sb2d5U3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyODU3MC0wXHJcbiAgICovXHJcbiAgUHJvdmlkZXJVbnNwZWNpZmllZFByb2NlZHVyZU5vdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjg2MTktNVxyXG4gICAqL1xyXG4gIE9waHRoYWxtb2xvZ3lPcHRvbWV0cnlTdHVkaWVzU2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI4NjM0LTRcclxuICAgKi9cclxuICBNaXNjZWxsYW5lb3VzU3R1ZGllc1NldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAyOTc0OS05XHJcbiAgICovXHJcbiAgRGlhbHlzaXNSZWNvcmRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI5NzUwLTdcclxuICAgKi9cclxuICBOZW9uYXRhbEludGVuc2l2ZUNhcmVSZWNvcmRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI5NzUxLTVcclxuICAgKi9cclxuICBDcml0aWNhbENhcmVSZWNvcmRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI5NzUyLTNcclxuICAgKi9cclxuICBQZXJpb3BlcmF0aXZlUmVjb3JkczogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDEwOS05XHJcbiAgICovXHJcbiAgRXZhbHVhdGlvbkFuZE1hbmFnZW1lbnROb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDM0MTE3LTJcclxuICAgKi9cclxuICBQcm92aWRlclVuc3BlY2lmaWVkSGlzdG9yeUFuZFBoeXNpY2FsTm90ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDEyMS00XHJcbiAgICovXHJcbiAgSW50ZXJ2ZW50aW9uYWxQcm9jZWR1cmVOb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDM0MTIyLTJcclxuICAgKi9cclxuICBQYXRob2xvZ3lQcm9jZWR1cmVOb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDM0MTMzLTlcclxuICAgKi9cclxuICBTdW1tYXJpemF0aW9uT2ZFcGlzb2RlTm90ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDE0MC00XHJcbiAgICovXHJcbiAgVHJhbnNmZXJPZkNhcmVSZWZlcnJhbE5vdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMzQ3NDgtNFxyXG4gICAqL1xyXG4gIFRlbGVwaG9uZUVuY291bnRlck5vdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogMzQ3NzUtN1xyXG4gICAqL1xyXG4gIEdlbmVyYWxTdXJnZXJ5UHJlT3BlcmF0aXZlRXZhbHVhdGlvbkFuZE1hbmFnZW1lbnROb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDQ3MDM5LTNcclxuICAgKi9cclxuICBJbnBhdGllbnRBZG1pc3Npb25IaXN0b3J5QW5kUGh5c2ljYWxOb3RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDQ3MDQyLTdcclxuICAgKi9cclxuICBDb3Vuc2VsaW5nTm90ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiA0NzA0NS0wXHJcbiAgICovXHJcbiAgU3R1ZHlSZXBvcnREb2N1bWVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiA0NzA0Ni04XHJcbiAgICovXHJcbiAgU3VtbWFyeU9mRGVhdGg6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogNDcwNDktMlxyXG4gICAqL1xyXG4gIE5vblBhdGllbnRDb21tdW5pY2F0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDUzNTc2LTVcclxuICAgKi9cclxuICBQZXJzb25hbEhlYWx0aE1vbml0b3JpbmdSZXBvcnREb2N1bWVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiA1NjQ0NS0wXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvblN1bW1hcnlEb2N1bWVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDb2RlOiA1NjQ0Ny02XHJcbiAgICovXHJcbiAgUGxhbk9mQ2FyZU5vdGU6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcwMTYtOFxyXG4gICAqL1xyXG4gIFByaXZhY3lQb2xpY3lBY2tub3dsZWRnbWVudERvY3VtZW50OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDU3MDE3LTZcclxuICAgKi9cclxuICBQcml2YWN5UG9saWN5T3JnYW5pemF0aW9uRG9jdW1lbnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcxMzMtMVxyXG4gICAqL1xyXG4gIFJlZmVycmFsTm90ZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgaXMgdGhlIGNvZGUgc3BlY2lmeWluZyB0aGUgaGlnaC1sZXZlbCBraW5kIG9mIGRvY3VtZW50IChlLmcuIFByZXNjcmlwdGlvbiwgRGlzY2hhcmdlIFN1bW1hcnksIFJlcG9ydCwgZXRjLikuIE5vdGU6IENsYXNzIGNvZGUgZm9yIGRvY3VtZW50cyBjb21lcyBmcm9tIExPSU5DLCBhbmQgaXMgYmFzZWQgdXBvbiBvbmUgb2YgdGhlIGZvbGxvd2luZzpUaGUgdHlwZSBvZiBzZXJ2aWNlIGRlc2NyaWJlZCBieSB0aGUgZG9jdW1lbnQuIEl0IGlzIGRlc2NyaWJlZCBhdCBhIHZlcnkgaGlnaCBsZXZlbCBpbiBTZWN0aW9uIDcuMyBvZiB0aGUgTE9JTkMgTWFudWFsLiBUaGUgdHlwZSBzdHVkeSBwZXJmb3JtZWQuIEl0IHdhcyBkZXRlcm1pbmVkIGJ5IGlkZW50aWZ5aW5nIG1vZGFsaXRpZXMgZm9yIHN0dWR5IHJlcG9ydHMuIFRoZSBzZWN0aW9uIG9mIHRoZSBjaGFydCB3aGVyZSB0aGUgZG9jdW1lbnQgaXMgcGxhY2VkLiBJdCB3YXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBTRVRzIGNyZWF0ZWQgZm9yIENsYWltcyBBdHRhY2htZW50IHJlcXVlc3RzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERvY3VtZW50Q2xhc3NDb2RpbmdzOkRvY3VtZW50Q2xhc3NDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExMzY5LTZcclxuICAgKi9cclxuICBIaXN0b3J5T2ZJbW11bml6YXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiSGlzdG9yeSBvZiBJbW11bml6YXRpb25cIixcclxuICAgIGNvZGU6IFwiMTEzNjktNlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNDg1LTBcclxuICAgKi9cclxuICBBbmVzdGhlc2lhUmVjb3Jkczoge1xyXG4gICAgZGlzcGxheTogXCJBbmVzdGhlc2lhIHJlY29yZHNcIixcclxuICAgIGNvZGU6IFwiMTE0ODUtMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDExNDg2LThcclxuICAgKi9cclxuICBDaGVtb3RoZXJhcHlSZWNvcmRzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNoZW1vdGhlcmFweSByZWNvcmRzXCIsXHJcbiAgICBjb2RlOiBcIjExNDg2LThcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAxMTQ4OC00XHJcbiAgICovXHJcbiAgQ29uc3VsdE5vdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29uc3VsdCBOb3RlXCIsXHJcbiAgICBjb2RlOiBcIjExNDg4LTRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAxMTUwNC04XHJcbiAgICovXHJcbiAgU3VyZ2ljYWxPcGVyYXRpb25Ob3RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN1cmdpY2FsIG9wZXJhdGlvbiBub3RlIFwiLFxyXG4gICAgY29kZTogXCIxMTUwNC04XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTE1MDYtM1xyXG4gICAqL1xyXG4gIFByb3ZpZGVyVW5zcGVjaWZpZWRQcm9ncmVzc05vdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZXItdW5zcGVjaWZpZWQgcHJvZ3Jlc3Mgbm90ZVwiLFxyXG4gICAgY29kZTogXCIxMTUwNi0zXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTE1NDMtNlxyXG4gICAqL1xyXG4gIE51cnNlcnlSZWNvcmRzOiB7XHJcbiAgICBkaXNwbGF5OiBcIk51cnNlcnkgcmVjb3Jkc1wiLFxyXG4gICAgY29kZTogXCIxMTU0My02XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTU1MDgtNVxyXG4gICAqL1xyXG4gIExhYm9yQW5kRGVsaXZlcnlSZWNvcmRzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkxhYm9yIGFuZCBkZWxpdmVyeSByZWNvcmRzXCIsXHJcbiAgICBjb2RlOiBcIjE1NTA4LTVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAxODcyNi0wXHJcbiAgICovXHJcbiAgUmFkaW9sb2d5U3R1ZGllc1NldDoge1xyXG4gICAgZGlzcGxheTogXCJSYWRpb2xvZ3kgc3R1ZGllcyAoc2V0KVwiLFxyXG4gICAgY29kZTogXCIxODcyNi0wXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMTg3NDgtNFxyXG4gICAqL1xyXG4gIERpYWdub3N0aWNJbWFnaW5nU3R1ZHk6IHtcclxuICAgIGRpc3BsYXk6IFwiRGlhZ25vc3RpYyBpbWFnaW5nIHN0dWR5XCIsXHJcbiAgICBjb2RlOiBcIjE4NzQ4LTRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAxODc2MS03XHJcbiAgICovXHJcbiAgUHJvdmlkZXJVbnNwZWNpZmllZFRyYW5zZmVyU3VtbWFyeToge1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlci11bnNwZWNpZmllZCB0cmFuc2ZlciBzdW1tYXJ5XCIsXHJcbiAgICBjb2RlOiBcIjE4NzYxLTdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAxODg0Mi01XHJcbiAgICovXHJcbiAgRGlzY2hhcmdlU3VtbWFyeToge1xyXG4gICAgZGlzcGxheTogXCJEaXNjaGFyZ2Ugc3VtbWFyeVwiLFxyXG4gICAgY29kZTogXCIxODg0Mi01XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjY0MzYtNlxyXG4gICAqL1xyXG4gIExhYm9yYXRvcnlTdHVkaWVzU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkxhYm9yYXRvcnkgU3R1ZGllcyAoc2V0KVwiLFxyXG4gICAgY29kZTogXCIyNjQzNi02XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjY0NDEtNlxyXG4gICAqL1xyXG4gIENhcmRpb2xvZ3lTdHVkaWVzU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhcmRpb2xvZ3kgc3R1ZGllcyAoc2V0KVwiLFxyXG4gICAgY29kZTogXCIyNjQ0MS02XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjY0NDItNFxyXG4gICAqL1xyXG4gIE9ic3RldHJpY2FsU3R1ZGllc1NldDoge1xyXG4gICAgZGlzcGxheTogXCJPYnN0ZXRyaWNhbCBzdHVkaWVzIChzZXQpXCIsXHJcbiAgICBjb2RlOiBcIjI2NDQyLTRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAyNzg5NS0yXHJcbiAgICovXHJcbiAgR2FzdHJvZW50ZXJvbG9neUVuZG9zY29weVN0dWRpZXNTZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiR2FzdHJvZW50ZXJvbG9neSBlbmRvc2NvcHkgc3R1ZGllcyAoc2V0KVwiLFxyXG4gICAgY29kZTogXCIyNzg5NS0yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjc4OTYtMFxyXG4gICAqL1xyXG4gIFB1bG1vbmFyeVN0dWRpZXNTZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUHVsbW9uYXJ5IHN0dWRpZXMgKHNldClcIixcclxuICAgIGNvZGU6IFwiMjc4OTYtMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI3ODk3LThcclxuICAgKi9cclxuICBOZXVyb211c2N1bGFyRWxlY3Ryb3BoeXNpb2xvZ3lTdHVkaWVzU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIk5ldXJvbXVzY3VsYXIgZWxlY3Ryb3BoeXNpb2xvZ3kgc3R1ZGllcyAoc2V0KVwiLFxyXG4gICAgY29kZTogXCIyNzg5Ny04XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjc4OTgtNlxyXG4gICAqL1xyXG4gIFBhdGhvbG9neVN0dWRpZXNTZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUGF0aG9sb2d5IHN0dWRpZXMgKHNldClcIixcclxuICAgIGNvZGU6IFwiMjc4OTgtNlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI4NTcwLTBcclxuICAgKi9cclxuICBQcm92aWRlclVuc3BlY2lmaWVkUHJvY2VkdXJlTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJQcm92aWRlci11bnNwZWNpZmllZCBwcm9jZWR1cmUgbm90ZVwiLFxyXG4gICAgY29kZTogXCIyODU3MC0wXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjg2MTktNVxyXG4gICAqL1xyXG4gIE9waHRoYWxtb2xvZ3lPcHRvbWV0cnlTdHVkaWVzU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIk9waHRoYWxtb2xvZ3kvb3B0b21ldHJ5IHN0dWRpZXMgKHNldClcIixcclxuICAgIGNvZGU6IFwiMjg2MTktNVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI4NjM0LTRcclxuICAgKi9cclxuICBNaXNjZWxsYW5lb3VzU3R1ZGllc1NldDoge1xyXG4gICAgZGlzcGxheTogXCJNaXNjZWxsYW5lb3VzIHN0dWRpZXMgKHNldClcIixcclxuICAgIGNvZGU6IFwiMjg2MzQtNFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDI5NzQ5LTlcclxuICAgKi9cclxuICBEaWFseXNpc1JlY29yZHM6IHtcclxuICAgIGRpc3BsYXk6IFwiRGlhbHlzaXMgcmVjb3Jkc1wiLFxyXG4gICAgY29kZTogXCIyOTc0OS05XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjk3NTAtN1xyXG4gICAqL1xyXG4gIE5lb25hdGFsSW50ZW5zaXZlQ2FyZVJlY29yZHM6IHtcclxuICAgIGRpc3BsYXk6IFwiTmVvbmF0YWwgaW50ZW5zaXZlIGNhcmUgcmVjb3Jkc1wiLFxyXG4gICAgY29kZTogXCIyOTc1MC03XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMjk3NTEtNVxyXG4gICAqL1xyXG4gIENyaXRpY2FsQ2FyZVJlY29yZHM6IHtcclxuICAgIGRpc3BsYXk6IFwiQ3JpdGljYWwgY2FyZSByZWNvcmRzXCIsXHJcbiAgICBjb2RlOiBcIjI5NzUxLTVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAyOTc1Mi0zXHJcbiAgICovXHJcbiAgUGVyaW9wZXJhdGl2ZVJlY29yZHM6IHtcclxuICAgIGRpc3BsYXk6IFwiUGVyaW9wZXJhdGl2ZSByZWNvcmRzXCIsXHJcbiAgICBjb2RlOiBcIjI5NzUyLTNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDEwOS05XHJcbiAgICovXHJcbiAgRXZhbHVhdGlvbkFuZE1hbmFnZW1lbnROb3RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkV2YWx1YXRpb24gYW5kIG1hbmFnZW1lbnQgbm90ZVwiLFxyXG4gICAgY29kZTogXCIzNDEwOS05XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMzQxMTctMlxyXG4gICAqL1xyXG4gIFByb3ZpZGVyVW5zcGVjaWZpZWRIaXN0b3J5QW5kUGh5c2ljYWxOb3RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByb3ZpZGVyLXVuc3BlY2lmaWVkLCBIaXN0b3J5IGFuZCBwaHlzaWNhbCBub3RlXCIsXHJcbiAgICBjb2RlOiBcIjM0MTE3LTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDEyMS00XHJcbiAgICovXHJcbiAgSW50ZXJ2ZW50aW9uYWxQcm9jZWR1cmVOb3RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkludGVydmVudGlvbmFsIHByb2NlZHVyZSBub3RlXCIsXHJcbiAgICBjb2RlOiBcIjM0MTIxLTRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDEyMi0yXHJcbiAgICovXHJcbiAgUGF0aG9sb2d5UHJvY2VkdXJlTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJQYXRob2xvZ3kgcHJvY2VkdXJlIG5vdGVcIixcclxuICAgIGNvZGU6IFwiMzQxMjItMlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDM0MTMzLTlcclxuICAgKi9cclxuICBTdW1tYXJpemF0aW9uT2ZFcGlzb2RlTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJTdW1tYXJpemF0aW9uIG9mIGVwaXNvZGUgbm90ZVwiLFxyXG4gICAgY29kZTogXCIzNDEzMy05XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMzQxNDAtNFxyXG4gICAqL1xyXG4gIFRyYW5zZmVyT2ZDYXJlUmVmZXJyYWxOb3RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlRyYW5zZmVyIG9mIGNhcmUgcmVmZXJyYWwgbm90ZVwiLFxyXG4gICAgY29kZTogXCIzNDE0MC00XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogMzQ3NDgtNFxyXG4gICAqL1xyXG4gIFRlbGVwaG9uZUVuY291bnRlck5vdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiVGVsZXBob25lIGVuY291bnRlciBub3RlXCIsXHJcbiAgICBjb2RlOiBcIjM0NzQ4LTRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiAzNDc3NS03XHJcbiAgICovXHJcbiAgR2VuZXJhbFN1cmdlcnlQcmVPcGVyYXRpdmVFdmFsdWF0aW9uQW5kTWFuYWdlbWVudE5vdGU6IHtcclxuICAgIGRpc3BsYXk6IFwiR2VuZXJhbCBzdXJnZXJ5IFByZS1vcGVyYXRpdmUgZXZhbHVhdGlvbiBhbmQgbWFuYWdlbWVudCBub3RlXCIsXHJcbiAgICBjb2RlOiBcIjM0Nzc1LTdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiA0NzAzOS0zXHJcbiAgICovXHJcbiAgSW5wYXRpZW50QWRtaXNzaW9uSGlzdG9yeUFuZFBoeXNpY2FsTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJJbnBhdGllbnQgQWRtaXNzaW9uIGhpc3RvcnkgYW5kIHBoeXNpY2FsIG5vdGVcIixcclxuICAgIGNvZGU6IFwiNDcwMzktM1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDQ3MDQyLTdcclxuICAgKi9cclxuICBDb3Vuc2VsaW5nTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJDb3Vuc2VsaW5nIG5vdGVcIixcclxuICAgIGNvZGU6IFwiNDcwNDItN1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDQ3MDQ1LTBcclxuICAgKi9cclxuICBTdHVkeVJlcG9ydERvY3VtZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlN0dWR5IHJlcG9ydCBEb2N1bWVudFwiLFxyXG4gICAgY29kZTogXCI0NzA0NS0wXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNDcwNDYtOFxyXG4gICAqL1xyXG4gIFN1bW1hcnlPZkRlYXRoOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN1bW1hcnkgb2YgZGVhdGhcIixcclxuICAgIGNvZGU6IFwiNDcwNDYtOFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDQ3MDQ5LTJcclxuICAgKi9cclxuICBOb25QYXRpZW50Q29tbXVuaWNhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJOb24tcGF0aWVudCBDb21tdW5pY2F0aW9uXCIsXHJcbiAgICBjb2RlOiBcIjQ3MDQ5LTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiA1MzU3Ni01XHJcbiAgICovXHJcbiAgUGVyc29uYWxIZWFsdGhNb25pdG9yaW5nUmVwb3J0RG9jdW1lbnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUGVyc29uYWwgaGVhbHRoIG1vbml0b3JpbmcgcmVwb3J0IERvY3VtZW50XCIsXHJcbiAgICBjb2RlOiBcIjUzNTc2LTVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiA1NjQ0NS0wXHJcbiAgICovXHJcbiAgTWVkaWNhdGlvblN1bW1hcnlEb2N1bWVudDoge1xyXG4gICAgZGlzcGxheTogXCJNZWRpY2F0aW9uIFN1bW1hcnkgRG9jdW1lbnRcIixcclxuICAgIGNvZGU6IFwiNTY0NDUtMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9sb2luYy5vcmdcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IDU2NDQ3LTZcclxuICAgKi9cclxuICBQbGFuT2ZDYXJlTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJQbGFuIG9mIGNhcmUgbm90ZVwiLFxyXG4gICAgY29kZTogXCI1NjQ0Ny02XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcwMTYtOFxyXG4gICAqL1xyXG4gIFByaXZhY3lQb2xpY3lBY2tub3dsZWRnbWVudERvY3VtZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlByaXZhY3kgUG9saWN5IEFja25vd2xlZGdtZW50IERvY3VtZW50XCIsXHJcbiAgICBjb2RlOiBcIjU3MDE2LThcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDb2RlOiA1NzAxNy02XHJcbiAgICovXHJcbiAgUHJpdmFjeVBvbGljeU9yZ2FuaXphdGlvbkRvY3VtZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlByaXZhY3kgUG9saWN5IE9yZ2FuaXphdGlvbiBEb2N1bWVudFwiLFxyXG4gICAgY29kZTogXCI1NzAxNy02XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2xvaW5jLm9yZ1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ29kZTogNTcxMzMtMVxyXG4gICAqL1xyXG4gIFJlZmVycmFsTm90ZToge1xyXG4gICAgZGlzcGxheTogXCJSZWZlcnJhbCBub3RlXCIsXHJcbiAgICBjb2RlOiBcIjU3MTMzLTFcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vbG9pbmMub3JnXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19