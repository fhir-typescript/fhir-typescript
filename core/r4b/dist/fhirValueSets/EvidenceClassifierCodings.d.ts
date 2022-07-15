import { CodingArgs } from '../fhir/Coding.js';
/**
 * Commonly used classifiers for evidence sets.
 */
export declare type EvidenceClassifierCodingType = {
    /**
     * AllocConcealNotStated: Allocation concealment not stated.
     */
    AllocationConcealmentNotStated: CodingArgs;
    /**
     * BaselineImbalance: Differences between groups at start of trial may confound or bias the findings.
     */
    BaselineImbalances: CodingArgs;
    /**
     * COVID19HumanResearch: contains human COVID-19 disease in the research data as any variable (population, exposure or outcome).
     */
    COVID19HumanDataInPopulationExposureOrOutcome: CodingArgs;
    /**
     * COVID19Relevant: Not about COVID-19 but relevant to COVID-19 management or understanding.
     */
    COVID19RelevantButNotSpecificArticle: CodingArgs;
    /**
     * COVID19Specific: About COVID-19.
     */
    COVID19SpecificArticle: CodingArgs;
    /**
     * Diagnosis: about methods to distinguish having or not having a condition.
     */
    ArticleAboutDiagnosis: CodingArgs;
    /**
     * EarlyTrialTermination: Early trial termination.
     */
    EarlyTrialTermination: CodingArgs;
    /**
     * Guideline: for clinical practice guidelines.
     */
    ArticleIncludesGuideline: CodingArgs;
    /**
     * NoBlinding: No blinding.
     */
    NoBlinding: CodingArgs;
    /**
     * NoITT: No intention-to-treat analysis.
     */
    NoIntentionToTreatAnalysis: CodingArgs;
    /**
     * NotAssessed: Neither rated as yes nor rated as no.
     */
    NotRatedNotAssessed: CodingArgs;
    /**
     * NotResearchNotGuideline: for things that are not research reports, research protocols or guidelines.
     */
    ArticleIsNeitherResearchNorGuideline: CodingArgs;
    /**
     * OriginalResearch: such as randomized trial, observational study.
     */
    ArticleIncludesOriginalResearch: CodingArgs;
    /**
     * PreliminaryAnalysis: Preliminary analysis.
     */
    PreliminaryAnalysis: CodingArgs;
    /**
     * Preprint: Results presented in preprint (pre-final publication) form.
     */
    PreprintNotFinalPublication: CodingArgs;
    /**
     * PreventionAndControl: about preventive care and interventions.
     */
    ArticleAboutPreventionAndControl: CodingArgs;
    /**
     * PrognosisPrediction: about predicting risk for something or risk factors for it.
     */
    ArticleAboutPrognosisOrPrediction: CodingArgs;
    /**
     * RatedAsCaseControl: classified as case-control study.
     */
    ClassifiedAsCaseControlStudy: CodingArgs;
    /**
     * RatedAsComparativeCohort: classified as comparative cohort study (observational).
     */
    ClassifiedAsComparativeCohortStudyObservational: CodingArgs;
    /**
     * RatedAsControlledTrial: classified as nonrandomized controlled trial (experimental).
     */
    ClassifiedAsNonrandomizedControlledTrialExperimental: CodingArgs;
    /**
     * RatedAsMixedMethods: classified as mixed-methods study.
     */
    ClassifiedAsMixedMethodsStudy: CodingArgs;
    /**
     * RatedAsNo: Rated as no, negative, absent, or exclude.
     */
    RatedAsNoNegativeAbsentOrExclude: CodingArgs;
    /**
     * RatedAsOther: classified as other concept (not elsewhere classified).
     */
    ClassifiedAsOtherConceptNotElsewhereClassified: CodingArgs;
    /**
     * RatedAsRCT: classified as randomized controlled trial.
     */
    ClassifiedAsRandomizedControlledTrial: CodingArgs;
    /**
     * RatedAsUncontrolledSeries: classified as uncontrolled cohort (case series).
     */
    ClassifiedAsUncontrolledCohortCaseSeries: CodingArgs;
    /**
     * Code: RatedAsYes
     */
    RatedAsYesAffirmativePositivePresentOrInclude: CodingArgs;
    /**
     * ResearchProtocol: for research protocols.
     */
    ArticleProvidesProtocolWithoutResults: CodingArgs;
    /**
     * ResearchSynthesis: such as systematic review, meta-analysis, rapid review.
     */
    ArticleIncludesSynthesisOfResearch: CodingArgs;
    /**
     * RiskOfBias: Risk of bias assessment.
     */
    RiskOfBiasAssessment: CodingArgs;
    /**
     * SubgroupAnalysis: Subgroup analysis.
     */
    SubgroupAnalysis: CodingArgs;
    /**
     * Treatment: about therapeutic interventions.
     */
    ArticleAboutTreatment: CodingArgs;
};
/**
 * Commonly used classifiers for evidence sets.
 */
export declare const EvidenceClassifierCodings: EvidenceClassifierCodingType;
//# sourceMappingURL=EvidenceClassifierCodings.d.ts.map