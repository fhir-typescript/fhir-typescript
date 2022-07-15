/**
 * Commonly used classifiers for evidence sets.
 */
export declare const EvidenceClassifierCodes: {
    /**
     * AllocConcealNotStated: Allocation concealment not stated.
     */
    readonly AllocationConcealmentNotStated: "AllocConcealNotStated";
    /**
     * BaselineImbalance: Differences between groups at start of trial may confound or bias the findings.
     */
    readonly BaselineImbalances: "BaselineImbalance";
    /**
     * COVID19HumanResearch: contains human COVID-19 disease in the research data as any variable (population, exposure or outcome).
     */
    readonly COVID19HumanDataInPopulationExposureOrOutcome: "COVID19HumanResearch";
    /**
     * COVID19Relevant: Not about COVID-19 but relevant to COVID-19 management or understanding.
     */
    readonly COVID19RelevantButNotSpecificArticle: "COVID19Relevant";
    /**
     * COVID19Specific: About COVID-19.
     */
    readonly COVID19SpecificArticle: "COVID19Specific";
    /**
     * Diagnosis: about methods to distinguish having or not having a condition.
     */
    readonly ArticleAboutDiagnosis: "Diagnosis";
    /**
     * EarlyTrialTermination: Early trial termination.
     */
    readonly EarlyTrialTermination: "EarlyTrialTermination";
    /**
     * Guideline: for clinical practice guidelines.
     */
    readonly ArticleIncludesGuideline: "Guideline";
    /**
     * NoBlinding: No blinding.
     */
    readonly NoBlinding: "NoBlinding";
    /**
     * NoITT: No intention-to-treat analysis.
     */
    readonly NoIntentionToTreatAnalysis: "NoITT";
    /**
     * NotAssessed: Neither rated as yes nor rated as no.
     */
    readonly NotRatedNotAssessed: "NotAssessed";
    /**
     * NotResearchNotGuideline: for things that are not research reports, research protocols or guidelines.
     */
    readonly ArticleIsNeitherResearchNorGuideline: "NotResearchNotGuideline";
    /**
     * OriginalResearch: such as randomized trial, observational study.
     */
    readonly ArticleIncludesOriginalResearch: "OriginalResearch";
    /**
     * PreliminaryAnalysis: Preliminary analysis.
     */
    readonly PreliminaryAnalysis: "PreliminaryAnalysis";
    /**
     * Preprint: Results presented in preprint (pre-final publication) form.
     */
    readonly PreprintNotFinalPublication: "Preprint";
    /**
     * PreventionAndControl: about preventive care and interventions.
     */
    readonly ArticleAboutPreventionAndControl: "PreventionAndControl";
    /**
     * PrognosisPrediction: about predicting risk for something or risk factors for it.
     */
    readonly ArticleAboutPrognosisOrPrediction: "PrognosisPrediction";
    /**
     * RatedAsCaseControl: classified as case-control study.
     */
    readonly ClassifiedAsCaseControlStudy: "RatedAsCaseControl";
    /**
     * RatedAsComparativeCohort: classified as comparative cohort study (observational).
     */
    readonly ClassifiedAsComparativeCohortStudyObservational: "RatedAsComparativeCohort";
    /**
     * RatedAsControlledTrial: classified as nonrandomized controlled trial (experimental).
     */
    readonly ClassifiedAsNonrandomizedControlledTrialExperimental: "RatedAsControlledTrial";
    /**
     * RatedAsMixedMethods: classified as mixed-methods study.
     */
    readonly ClassifiedAsMixedMethodsStudy: "RatedAsMixedMethods";
    /**
     * RatedAsNo: Rated as no, negative, absent, or exclude.
     */
    readonly RatedAsNoNegativeAbsentOrExclude: "RatedAsNo";
    /**
     * RatedAsOther: classified as other concept (not elsewhere classified).
     */
    readonly ClassifiedAsOtherConceptNotElsewhereClassified: "RatedAsOther";
    /**
     * RatedAsRCT: classified as randomized controlled trial.
     */
    readonly ClassifiedAsRandomizedControlledTrial: "RatedAsRCT";
    /**
     * RatedAsUncontrolledSeries: classified as uncontrolled cohort (case series).
     */
    readonly ClassifiedAsUncontrolledCohortCaseSeries: "RatedAsUncontrolledSeries";
    /**
     * Code: RatedAsYes
     */
    readonly RatedAsYesAffirmativePositivePresentOrInclude: "RatedAsYes";
    /**
     * ResearchProtocol: for research protocols.
     */
    readonly ArticleProvidesProtocolWithoutResults: "ResearchProtocol";
    /**
     * ResearchSynthesis: such as systematic review, meta-analysis, rapid review.
     */
    readonly ArticleIncludesSynthesisOfResearch: "ResearchSynthesis";
    /**
     * RiskOfBias: Risk of bias assessment.
     */
    readonly RiskOfBiasAssessment: "RiskOfBias";
    /**
     * SubgroupAnalysis: Subgroup analysis.
     */
    readonly SubgroupAnalysis: "SubgroupAnalysis";
    /**
     * Treatment: about therapeutic interventions.
     */
    readonly ArticleAboutTreatment: "Treatment";
};
/**
 * Commonly used classifiers for evidence sets.
 */
export declare type EvidenceClassifierCodeType = typeof EvidenceClassifierCodes[keyof typeof EvidenceClassifierCodes];
//# sourceMappingURL=EvidenceClassifierCodes.d.ts.map