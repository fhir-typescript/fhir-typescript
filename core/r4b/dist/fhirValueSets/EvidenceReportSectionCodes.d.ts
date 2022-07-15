/**
 * Evidence Report Section Type.
 */
export declare const EvidenceReportSectionCodes: {
    /**
     * Assertion: Assertion.
     */
    readonly Assertion: "Assertion";
    /**
     * Certainty-of-Evidence: Certainty of Evidence.
     */
    readonly CertaintyOfEvidence: "Certainty-of-Evidence";
    /**
     * Column-Header: Denotes the header to use for the column for a tabular report.
     */
    readonly ColumnHeader: "Column-Header";
    /**
     * Column-Headers: Denotes a section specifying column headers for a tabular report.
     */
    readonly ColumnHeaders: "Column-Headers";
    /**
     * Control-group-alone-Evidence: Evidence Results for the control exposure only.
     */
    readonly EvidenceResultsForTheControlExposureOnly: "Control-group-alone-Evidence";
    /**
     * Efficacy-outcomes: Outcomes related to efficacy or potential benefits of interventions.
     */
    readonly EfficacyOutcomes: "Efficacy-outcomes";
    /**
     * Evidence: Evidence Results.
     */
    readonly EvidenceResults: "Evidence";
    /**
     * Evidence-Classifier: This section is used for classifiers of the evidence.
     */
    readonly EvidenceClassifierSection: "Evidence-Classifier";
    /**
     * EvidenceVariable: Evidence Variables used.
     */
    readonly EvidenceVariablesUsed: "EvidenceVariable";
    /**
     * EvidenceVariable-exposure: Evidence Variable in variable role Exposure.
     */
    readonly EvidenceVariableInVariableRoleExposure: "EvidenceVariable-exposure";
    /**
     * EvidenceVariable-intended: Evidence Variables intended for interpretation.
     */
    readonly EvidenceVariablesIntendedForInterpretation: "EvidenceVariable-intended";
    /**
     * EvidenceVariable-observed: Evidence Variables as observed in the research data.
     */
    readonly EvidenceVariablesActuallyObserved: "EvidenceVariable-observed";
    /**
     * EvidenceVariable-outcome: Evidence Variable in variable role Outcome (MeasuredVariable).
     */
    readonly EvidenceVariableInVariableRoleOutcomeMeasuredVariable: "EvidenceVariable-outcome";
    /**
     * EvidenceVariable-population: Evidence Variable in variable role Population.
     */
    readonly EvidenceVariableInVariableRolePopulation: "EvidenceVariable-population";
    /**
     * Harms-outcomes: Outcomes related to adverse effects or potential harms of interventions.
     */
    readonly HarmsOutcomes: "Harms-outcomes";
    /**
     * Header: Denotes the header to use for a Text Summary or above a Table.
     */
    readonly Header: "Header";
    /**
     * Intervention-group-alone-Evidence: Evidence Results for the intervention exposure only.
     */
    readonly EvidenceResultsForTheInterventionExposureOnly: "Intervention-group-alone-Evidence";
    /**
     * Intervention-vs-Control-Evidence: Evidence Results for comparison of Intervention and Control.
     */
    readonly EvidenceResultsForComparisonOfInterventionAndControl: "Intervention-vs-Control-Evidence";
    /**
     * Reasons: Reasons.
     */
    readonly Reasons: "Reasons";
    /**
     * References: References.
     */
    readonly References: "References";
    /**
     * Row-Headers: Denotes a section specifying row headers for a tabular report.
     */
    readonly RowHeaders: "Row-Headers";
    /**
     * SampleSize: Sample Size.
     */
    readonly SampleSize: "SampleSize";
    /**
     * SummaryOfBodyOfEvidenceFindings: Summary of Body of Evidence Findings.
     */
    readonly SummaryOfBodyOfEvidenceFindings: "SummaryOfBodyOfEvidenceFindings";
    /**
     * SummaryOfIndividualStudyFindings: Summary of Individual Study Findings.
     */
    readonly SummaryOfIndividualStudyFindings: "SummaryOfIndividualStudyFindings";
    /**
     * Code: Table
     */
    readonly Table: "Table";
    /**
     * Tables: Tables.
     */
    readonly Tables: "Tables";
    /**
     * Text-Summary: Denotes a section specifying text summary for a report.
     */
    readonly TextSummary: "Text-Summary";
    /**
     * Warnings: Warnings.
     */
    readonly Warnings: "Warnings";
};
/**
 * Evidence Report Section Type.
 */
export declare type EvidenceReportSectionCodeType = typeof EvidenceReportSectionCodes[keyof typeof EvidenceReportSectionCodes];
//# sourceMappingURL=EvidenceReportSectionCodes.d.ts.map