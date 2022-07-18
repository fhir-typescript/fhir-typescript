// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-report-section|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * Evidence Report Section Type.
 */
export type EvidenceReportSectionCodingType = {
  /**
   * Assertion: Assertion.
   */
  Assertion: CodingArgs;
  /**
   * Certainty-of-Evidence: Certainty of Evidence.
   */
  CertaintyOfEvidence: CodingArgs;
  /**
   * Column-Header: Denotes the header to use for the column for a tabular report.
   */
  ColumnHeader: CodingArgs;
  /**
   * Column-Headers: Denotes a section specifying column headers for a tabular report.
   */
  ColumnHeaders: CodingArgs;
  /**
   * Control-group-alone-Evidence: Evidence Results for the control exposure only.
   */
  EvidenceResultsForTheControlExposureOnly: CodingArgs;
  /**
   * Efficacy-outcomes: Outcomes related to efficacy or potential benefits of interventions.
   */
  EfficacyOutcomes: CodingArgs;
  /**
   * Evidence: Evidence Results.
   */
  EvidenceResults: CodingArgs;
  /**
   * Evidence-Classifier: This section is used for classifiers of the evidence.
   */
  EvidenceClassifierSection: CodingArgs;
  /**
   * EvidenceVariable: Evidence Variables used.
   */
  EvidenceVariablesUsed: CodingArgs;
  /**
   * EvidenceVariable-exposure: Evidence Variable in variable role Exposure.
   */
  EvidenceVariableInVariableRoleExposure: CodingArgs;
  /**
   * EvidenceVariable-intended: Evidence Variables intended for interpretation.
   */
  EvidenceVariablesIntendedForInterpretation: CodingArgs;
  /**
   * EvidenceVariable-observed: Evidence Variables as observed in the research data.
   */
  EvidenceVariablesActuallyObserved: CodingArgs;
  /**
   * EvidenceVariable-outcome: Evidence Variable in variable role Outcome (MeasuredVariable).
   */
  EvidenceVariableInVariableRoleOutcomeMeasuredVariable: CodingArgs;
  /**
   * EvidenceVariable-population: Evidence Variable in variable role Population.
   */
  EvidenceVariableInVariableRolePopulation: CodingArgs;
  /**
   * Harms-outcomes: Outcomes related to adverse effects or potential harms of interventions.
   */
  HarmsOutcomes: CodingArgs;
  /**
   * Header: Denotes the header to use for a Text Summary or above a Table.
   */
  Header: CodingArgs;
  /**
   * Intervention-group-alone-Evidence: Evidence Results for the intervention exposure only.
   */
  EvidenceResultsForTheInterventionExposureOnly: CodingArgs;
  /**
   * Intervention-vs-Control-Evidence: Evidence Results for comparison of Intervention and Control.
   */
  EvidenceResultsForComparisonOfInterventionAndControl: CodingArgs;
  /**
   * Reasons: Reasons.
   */
  Reasons: CodingArgs;
  /**
   * References: References.
   */
  References: CodingArgs;
  /**
   * Row-Headers: Denotes a section specifying row headers for a tabular report.
   */
  RowHeaders: CodingArgs;
  /**
   * SampleSize: Sample Size.
   */
  SampleSize: CodingArgs;
  /**
   * SummaryOfBodyOfEvidenceFindings: Summary of Body of Evidence Findings.
   */
  SummaryOfBodyOfEvidenceFindings: CodingArgs;
  /**
   * SummaryOfIndividualStudyFindings: Summary of Individual Study Findings.
   */
  SummaryOfIndividualStudyFindings: CodingArgs;
  /**
   * Code: Table
   */
  Table: CodingArgs;
  /**
   * Tables: Tables.
   */
  Tables: CodingArgs;
  /**
   * Text-Summary: Denotes a section specifying text summary for a report.
   */
  TextSummary: CodingArgs;
  /**
   * Warnings: Warnings.
   */
  Warnings: CodingArgs;
}

/**
 * Evidence Report Section Type.
 */
export const EvidenceReportSectionCodings:EvidenceReportSectionCodingType = {
  /**
   * Assertion: Assertion.
   */
  Assertion: {
    display: "Assertion",
    code: "Assertion",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Certainty-of-Evidence: Certainty of Evidence.
   */
  CertaintyOfEvidence: {
    display: "Certainty of Evidence",
    code: "Certainty-of-Evidence",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Column-Header: Denotes the header to use for the column for a tabular report.
   */
  ColumnHeader: {
    display: "Column Header",
    code: "Column-Header",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Column-Headers: Denotes a section specifying column headers for a tabular report.
   */
  ColumnHeaders: {
    display: "Column Headers",
    code: "Column-Headers",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Control-group-alone-Evidence: Evidence Results for the control exposure only.
   */
  EvidenceResultsForTheControlExposureOnly: {
    display: "Evidence Results for the control exposure only",
    code: "Control-group-alone-Evidence",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Efficacy-outcomes: Outcomes related to efficacy or potential benefits of interventions.
   */
  EfficacyOutcomes: {
    display: "Efficacy-outcomes",
    code: "Efficacy-outcomes",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Evidence: Evidence Results.
   */
  EvidenceResults: {
    display: "Evidence Results",
    code: "Evidence",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Evidence-Classifier: This section is used for classifiers of the evidence.
   */
  EvidenceClassifierSection: {
    display: "Evidence Classifier section",
    code: "Evidence-Classifier",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable: Evidence Variables used.
   */
  EvidenceVariablesUsed: {
    display: "Evidence Variables used",
    code: "EvidenceVariable",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable-exposure: Evidence Variable in variable role Exposure.
   */
  EvidenceVariableInVariableRoleExposure: {
    display: "Evidence Variable in variable role Exposure",
    code: "EvidenceVariable-exposure",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable-intended: Evidence Variables intended for interpretation.
   */
  EvidenceVariablesIntendedForInterpretation: {
    display: "Evidence Variables intended for interpretation",
    code: "EvidenceVariable-intended",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable-observed: Evidence Variables as observed in the research data.
   */
  EvidenceVariablesActuallyObserved: {
    display: "Evidence Variables actually observed",
    code: "EvidenceVariable-observed",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable-outcome: Evidence Variable in variable role Outcome (MeasuredVariable).
   */
  EvidenceVariableInVariableRoleOutcomeMeasuredVariable: {
    display: "Evidence Variable in variable role Outcome (MeasuredVariable)",
    code: "EvidenceVariable-outcome",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * EvidenceVariable-population: Evidence Variable in variable role Population.
   */
  EvidenceVariableInVariableRolePopulation: {
    display: "Evidence Variable in variable role Population",
    code: "EvidenceVariable-population",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Harms-outcomes: Outcomes related to adverse effects or potential harms of interventions.
   */
  HarmsOutcomes: {
    display: "Harms outcomes",
    code: "Harms-outcomes",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Header: Denotes the header to use for a Text Summary or above a Table.
   */
  Header: {
    display: "Header",
    code: "Header",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Intervention-group-alone-Evidence: Evidence Results for the intervention exposure only.
   */
  EvidenceResultsForTheInterventionExposureOnly: {
    display: "Evidence Results for the intervention exposure only",
    code: "Intervention-group-alone-Evidence",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Intervention-vs-Control-Evidence: Evidence Results for comparison of Intervention and Control.
   */
  EvidenceResultsForComparisonOfInterventionAndControl: {
    display: "Evidence Results for comparison of Intervention and Control",
    code: "Intervention-vs-Control-Evidence",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Reasons: Reasons.
   */
  Reasons: {
    display: "Reasons",
    code: "Reasons",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * References: References.
   */
  References: {
    display: "References",
    code: "References",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Row-Headers: Denotes a section specifying row headers for a tabular report.
   */
  RowHeaders: {
    display: "Row Headers",
    code: "Row-Headers",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * SampleSize: Sample Size.
   */
  SampleSize: {
    display: "Sample Size",
    code: "SampleSize",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * SummaryOfBodyOfEvidenceFindings: Summary of Body of Evidence Findings.
   */
  SummaryOfBodyOfEvidenceFindings: {
    display: "Summary of Body of Evidence Findings",
    code: "SummaryOfBodyOfEvidenceFindings",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * SummaryOfIndividualStudyFindings: Summary of Individual Study Findings.
   */
  SummaryOfIndividualStudyFindings: {
    display: "Summary of Individual Study Findings",
    code: "SummaryOfIndividualStudyFindings",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Code: Table
   */
  Table: {
    display: "Table",
    code: "Table",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Tables: Tables.
   */
  Tables: {
    display: "Tables",
    code: "Tables",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Text-Summary: Denotes a section specifying text summary for a report.
   */
  TextSummary: {
    display: "Text Summary",
    code: "Text-Summary",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
  /**
   * Warnings: Warnings.
   */
  Warnings: {
    display: "Warnings",
    code: "Warnings",
    system: "http://terminology.hl7.org/CodeSystem/evidence-report-section",
  },
} as const;