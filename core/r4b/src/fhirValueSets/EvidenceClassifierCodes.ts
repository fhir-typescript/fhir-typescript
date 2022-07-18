// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/evidence-classifier-code|4.3.0

/**
 * Commonly used classifiers for evidence sets.
 */
export const EvidenceClassifierCodes = {
  /**
   * AllocConcealNotStated: Allocation concealment not stated.
   */
  AllocationConcealmentNotStated: "AllocConcealNotStated",
  /**
   * BaselineImbalance: Differences between groups at start of trial may confound or bias the findings.
   */
  BaselineImbalances: "BaselineImbalance",
  /**
   * COVID19HumanResearch: contains human COVID-19 disease in the research data as any variable (population, exposure or outcome).
   */
  COVID19HumanDataInPopulationExposureOrOutcome: "COVID19HumanResearch",
  /**
   * COVID19Relevant: Not about COVID-19 but relevant to COVID-19 management or understanding.
   */
  COVID19RelevantButNotSpecificArticle: "COVID19Relevant",
  /**
   * COVID19Specific: About COVID-19.
   */
  COVID19SpecificArticle: "COVID19Specific",
  /**
   * Diagnosis: about methods to distinguish having or not having a condition.
   */
  ArticleAboutDiagnosis: "Diagnosis",
  /**
   * EarlyTrialTermination: Early trial termination.
   */
  EarlyTrialTermination: "EarlyTrialTermination",
  /**
   * Guideline: for clinical practice guidelines.
   */
  ArticleIncludesGuideline: "Guideline",
  /**
   * NoBlinding: No blinding.
   */
  NoBlinding: "NoBlinding",
  /**
   * NoITT: No intention-to-treat analysis.
   */
  NoIntentionToTreatAnalysis: "NoITT",
  /**
   * NotAssessed: Neither rated as yes nor rated as no.
   */
  NotRatedNotAssessed: "NotAssessed",
  /**
   * NotResearchNotGuideline: for things that are not research reports, research protocols or guidelines.
   */
  ArticleIsNeitherResearchNorGuideline: "NotResearchNotGuideline",
  /**
   * OriginalResearch: such as randomized trial, observational study.
   */
  ArticleIncludesOriginalResearch: "OriginalResearch",
  /**
   * PreliminaryAnalysis: Preliminary analysis.
   */
  PreliminaryAnalysis: "PreliminaryAnalysis",
  /**
   * Preprint: Results presented in preprint (pre-final publication) form.
   */
  PreprintNotFinalPublication: "Preprint",
  /**
   * PreventionAndControl: about preventive care and interventions.
   */
  ArticleAboutPreventionAndControl: "PreventionAndControl",
  /**
   * PrognosisPrediction: about predicting risk for something or risk factors for it.
   */
  ArticleAboutPrognosisOrPrediction: "PrognosisPrediction",
  /**
   * RatedAsCaseControl: classified as case-control study.
   */
  ClassifiedAsCaseControlStudy: "RatedAsCaseControl",
  /**
   * RatedAsComparativeCohort: classified as comparative cohort study (observational).
   */
  ClassifiedAsComparativeCohortStudyObservational: "RatedAsComparativeCohort",
  /**
   * RatedAsControlledTrial: classified as nonrandomized controlled trial (experimental).
   */
  ClassifiedAsNonrandomizedControlledTrialExperimental: "RatedAsControlledTrial",
  /**
   * RatedAsMixedMethods: classified as mixed-methods study.
   */
  ClassifiedAsMixedMethodsStudy: "RatedAsMixedMethods",
  /**
   * RatedAsNo: Rated as no, negative, absent, or exclude.
   */
  RatedAsNoNegativeAbsentOrExclude: "RatedAsNo",
  /**
   * RatedAsOther: classified as other concept (not elsewhere classified).
   */
  ClassifiedAsOtherConceptNotElsewhereClassified: "RatedAsOther",
  /**
   * RatedAsRCT: classified as randomized controlled trial.
   */
  ClassifiedAsRandomizedControlledTrial: "RatedAsRCT",
  /**
   * RatedAsUncontrolledSeries: classified as uncontrolled cohort (case series).
   */
  ClassifiedAsUncontrolledCohortCaseSeries: "RatedAsUncontrolledSeries",
  /**
   * Code: RatedAsYes
   */
  RatedAsYesAffirmativePositivePresentOrInclude: "RatedAsYes",
  /**
   * ResearchProtocol: for research protocols.
   */
  ArticleProvidesProtocolWithoutResults: "ResearchProtocol",
  /**
   * ResearchSynthesis: such as systematic review, meta-analysis, rapid review.
   */
  ArticleIncludesSynthesisOfResearch: "ResearchSynthesis",
  /**
   * RiskOfBias: Risk of bias assessment.
   */
  RiskOfBiasAssessment: "RiskOfBias",
  /**
   * SubgroupAnalysis: Subgroup analysis.
   */
  SubgroupAnalysis: "SubgroupAnalysis",
  /**
   * Treatment: about therapeutic interventions.
   */
  ArticleAboutTreatment: "Treatment",
} as const;

/**
 * Commonly used classifiers for evidence sets.
 */
export type EvidenceClassifierCodeType = typeof EvidenceClassifierCodes[keyof typeof EvidenceClassifierCodes];