import { CodingArgs } from '../fhir/Coding.js';
/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export declare type StatisticModelCodingType = {
    /**
     * adjusted: Used for adjusted analysis, paired with variable element(s)
     */
    AdjustedAnalysis: CodingArgs;
    /**
     * anova: Used for ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    ANOVAANalysisOfVAriance: CodingArgs;
    /**
     * anovaOneWay: Used for one-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    OneWayANOVA: CodingArgs;
    /**
     * anovaThreeWay: Used for 3-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    VAL3WayANOVA: CodingArgs;
    /**
     * anovaTwoWay: Used for 2-way ANOVA without replication method of analysis, may be paired with "value" to express degrees of freedom
     */
    VAL2WayANOVAWithoutReplication: CodingArgs;
    /**
     * anovaTwoWayReplication: Used for 2-way ANOVA with replication method of analysis, may be paired with "value" to express degrees of freedom
     */
    VAL2WayANOVAWithReplication: CodingArgs;
    /**
     * binomialDistributionRegression: Used for Binomial Distribution for Regression, no additional elements needed
     */
    BinomialDistributionForRegression: CodingArgs;
    /**
     * chiSquareTest: Used for Chi-square test, may be paired with "value" to express degrees of freedom
     */
    ChiSquareTest: CodingArgs;
    /**
     * chiSquareTestHomogeneity: Used for Chi-square test for homogeneity, may be paired with "value" to express degrees of freedom
     */
    ChiSquareTestForHomogeneity: CodingArgs;
    /**
     * chiSquareTestTrend: Used for Chi-square test for trend, may be paired with "value" to express degrees of freedom
     */
    ChiSquareTestForTrend: CodingArgs;
    /**
     * coxProportionalHazards: Used for Cox proportional hazards method of analysis, no additional elements needed
     */
    CoxProportionalHazards: CodingArgs;
    /**
     * dersimonianLairdMethod: Used for Dersimonian-Laird method of tau estimation, no additional elements needed
     */
    DersimonianLairdMethod: CodingArgs;
    /**
     * effectsFixed: From a fixed-effects analysis, no additional elements needed
     */
    FixedEffects: CodingArgs;
    /**
     * effectsRandom: From a random-effects analysis, no additional elements needed
     */
    RandomEffects: CodingArgs;
    /**
     * empiricalBayes: Used for Empirical Bayes method of tau estimation, no additional elements needed
     */
    EmpiricalBayesMethod: CodingArgs;
    /**
     * fishersExactTest: Used for Fisher's exact test, may be paired with "value" to express degrees of freedom
     */
    FisherQuoteSExactTest: CodingArgs;
    /**
     * friedmanTest: Used for Friedman test, no additional elements needed
     */
    FriedmanTest: CodingArgs;
    /**
     * glm: Used for GLM (Generalized Linear Model), no additional elements needed
     */
    GLMGeneralizedLinearModel: CodingArgs;
    /**
     * glmGeneralizedLogit: Used for GLM with generalized logit link, no additional elements needed
     */
    GLMWithGeneralizedLogitLink: CodingArgs;
    /**
     * glmIdentity: Used for GLM with identity link, no additional elements needed
     */
    GLMWithIdentityLink: CodingArgs;
    /**
     * glmLog: Used for GLM with log link, no additional elements needed
     */
    GLMWithLogLink: CodingArgs;
    /**
     * glmLogit: Used for GLM with logit link, no additional elements needed
     */
    GLMWithLogitLink: CodingArgs;
    /**
     * glmm: Used for Generalized linear mixed model (GLMM), no additional elements needed
     */
    GeneralizedLinearMixedModelGLMM: CodingArgs;
    /**
     * glmmGeneralizedLogit: Used for GLMM with generalized logit link, no additional elements needed
     */
    GLMMWithGeneralizedLogitLink: CodingArgs;
    /**
     * glmmIdentity: Used for GLMM with identity link, no additional elements needed
     */
    GLMMWithIdentityLink: CodingArgs;
    /**
     * glmmLog: Used for GLMM with log link, no additional elements needed
     */
    GLMMWithLogLink: CodingArgs;
    /**
     * glmmLogit: Used for GLMM with logit link, no additional elements needed
     */
    GLMMWithLogitLink: CodingArgs;
    /**
     * glmmProbit: Used for GLMM with probit link, no additional elements needed
     */
    GLMMWithProbitLink: CodingArgs;
    /**
     * glmProbit: Used for GLM with probit link, no additional elements needed
     */
    GLMWithProbitLink: CodingArgs;
    /**
     * goodmanKruskasGamma: Used for Goodman Kruska’s Gamma, no additional elements needed
     */
    GoodmanKruskaQuoteSGamma: CodingArgs;
    /**
     * hartungKnapp: Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
     */
    HartungKnappAdjustment: CodingArgs;
    /**
     * hedgesMethod: Used for Hedges method of tau estimation, no additional elements needed
     */
    HedgesMethod: CodingArgs;
    /**
     * hunterSchmidt: Used for Hunter-Schmidt method of tau estimation, no additional elements needed
     */
    HunterSchmidtMethod: CodingArgs;
    /**
     * interactionTerm: Used for interaction term, paired with "value" and two or more variable elements
     */
    InteractionTerm: CodingArgs;
    /**
     * inverseVariance: Used for inverse variance method of meta-analysis, no additional elements needed
     */
    InverseVarianceMethod: CodingArgs;
    /**
     * kendallCorrelation: Used for Kendall correlation, no additional elements needed
     */
    KendallCorrelation: CodingArgs;
    /**
     * kruskalWallisTest: Used for Kruskal Wallis test, may be paired with "value" to express degrees of freedom
     */
    KruskalWallisTest: CodingArgs;
    /**
     * linearRegression: Used for linear regression method of analysis, no additional elements needed
     */
    LinearRegression: CodingArgs;
    /**
     * logisticRegression: Used for logistic regression method of analysis, no additional elements needed
     */
    LogisticRegression: CodingArgs;
    /**
     * mannWhitneyUTest: Used for Mann-Whitney U test, no additional elements needed
     */
    MannWhitneyUTest: CodingArgs;
    /**
     * manova: Used for multivariate ANOVA (MANOVA) method of analysis, may be paired with "value" to express degrees of freedom
     */
    MultivariateANOVAMANOVA: CodingArgs;
    /**
     * manteHaenszelMethod: Used for Mantel-Haenszel method, no additional elements needed
     */
    MantelHaenszelMethod: CodingArgs;
    /**
     * maximumLikelihood: Used for Maximum Likelihood method of tau estimation, no additional elements needed
     */
    MaximumLikelihoodMethod: CodingArgs;
    /**
     * mcnemarsTest: Used for McNemar's test, no additional elements needed
     */
    McNemarQuoteSTest: CodingArgs;
    /**
     * metaAnalysis: Used for meta-analysis, no additional elements needed
     */
    MetaAnalysis: CodingArgs;
    /**
     * modifiedHartungKnapp: Modified Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
     */
    ModifiedHartungKnappAdjustment: CodingArgs;
    /**
     * multinomialDistributionRegression: Used for Multinomial Distribution for Regression, no additional elements needed
     */
    MultinomialDistributionForRegression: CodingArgs;
    /**
     * negativeBinomialRegression: Used for Negative Binomial Regression, no additional elements needed
     */
    NegativeBinomialRegression: CodingArgs;
    /**
     * oneSampleTTest: Used for 1-sample t-test, may be paired with "value" to express degrees of freedom
     */
    VAL1SampleTTest: CodingArgs;
    /**
     * oneTailedTest: Used for one-tailed test (1 threshold), no additional elements needed
     */
    OneTailedTest1Threshold: CodingArgs;
    /**
     * pairedTTest: Used for paired t-test, may be paired with "value" to express degrees of freedom
     */
    PairedTTest: CodingArgs;
    /**
     * pauleMandelMethod: Used for Paule-Mandel method of tau estimation, no additional elements needed
     */
    PauleMandelMethod: CodingArgs;
    /**
     * pearsonCorrelation: Used for Pearson correlation, no additional elements needed
     */
    PearsonCorrelation: CodingArgs;
    /**
     * petoMethod: Used for Peto method of meta-analysis, no additional elements needed
     */
    PetoMethod: CodingArgs;
    /**
     * poissonRegression: Used for Poisson Regression, no additional elements needed
     */
    PoissonRegression: CodingArgs;
    /**
     * polynomialRegression: Used for Polynomial regression method of analysis, no additional elements needed
     */
    PolynomialRegression: CodingArgs;
    /**
     * poolGeneralizedLinearMixedModel: Generalized linear mixed model (GLMM) method for pooling in meta-analysis
     */
    GeneralizedLinearMixedModelGLMMPoolGeneralizedLinearMixedModel: CodingArgs;
    /**
     * poolInverseVariance: Inverse variance method for pooling in meta-analysis
     */
    InverseVarianceMethodPoolInverseVariance: CodingArgs;
    /**
     * poolMantelHaenzsel: Mantel-Haenszel method for pooling in meta-analysis
     */
    MantelHaenszelMethodPoolMantelHaenzsel: CodingArgs;
    /**
     * poolPeto: Peto method for pooling in meta-analysis
     */
    PetoMethodPoolPeto: CodingArgs;
    /**
     * restrictedLikelihood: Used for Restricted Maximum Likelihood method of tau estimation, no additional elements needed
     */
    RestrictedMaximumLikelihoodMethod: CodingArgs;
    /**
     * sidikJonkman: Used for Sidik-Jonkman method of tau estimation, no additional elements needed
     */
    SidikJonkmanMethod: CodingArgs;
    /**
     * signTest: Used for sign test, no additional elements needed
     */
    SignTest: CodingArgs;
    /**
     * spearmanCorrelation: Used for Spearman correlation, no additional elements needed
     */
    SpearmanCorrelation: CodingArgs;
    /**
     * tauDersimonianLaird: Dersimonian-Laird method for tau squared
     */
    DersimonianLairdMethodTauDersimonianLaird: CodingArgs;
    /**
     * tauEmpiricalBayes: Empirical Bayes method for tau squared
     */
    EmpiricalBayesMethodTauEmpiricalBayes: CodingArgs;
    /**
     * tauHedges: Hedges method for tau squared
     */
    HedgesMethodTauHedges: CodingArgs;
    /**
     * tauHunterSchmidt: Hunter-Schmidt method for tau squared
     */
    HunterSchmidtMethodTauHunterSchmidt: CodingArgs;
    /**
     * tauMaximumLikelihood: Maximum Likelihood method for tau squared
     */
    MaximumLikelihoodMethodTauMaximumLikelihood: CodingArgs;
    /**
     * tauPauleMandel: Paule-Mandel method for tau squared
     */
    PauleMandelMethodTauPauleMandel: CodingArgs;
    /**
     * tauRestrictedMaximumLikelihood: Restricted Maximum Likelihood method for tau squared
     */
    RestrictedMaximumLikelihoodMethodTauRestrictedMaximumLikelihood: CodingArgs;
    /**
     * tauSidikJonkman: Sidik-Jonkman method for tau squared
     */
    SidikJonkmanMethodTauSidikJonkman: CodingArgs;
    /**
     * twoSampleTTest: Used for 2-sample t-test, may be paired with "value" to express degrees of freedom
     */
    VAL2SampleTTest: CodingArgs;
    /**
     * twoTailedTest: Used for two-tailed test (2 threshold), no additional elements needed
     */
    TwoTailedTest2Thresholds: CodingArgs;
    /**
     * wilcoxonRankSumTest: Used for Wilcoxon rank-sum test, no additional elements needed
     */
    WilcoxonRankSumTest: CodingArgs;
    /**
     * wilcoxonSignedRankTest: Used for Wilcoxon signed-rank test, no additional elements needed
     */
    WilcoxonSignedRankTest: CodingArgs;
    /**
     * zeroCellConstant: Zero-cell adjustment done by adding a constant to all cells of affected studies, paired with "value" to define the constant
     */
    ZeroCellAdjustmentWithConstant: CodingArgs;
    /**
     * zeroCellContinuityCorrection: Zero-cell adjustment done by treatment arm continuity correction, no additional elements needed
     */
    ZeroCellAdjustmentWithContinuityCorrection: CodingArgs;
    /**
     * zTest: Used for z-test, no additional elements needed
     */
    ZTest: CodingArgs;
};
/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export declare const StatisticModelCodings: StatisticModelCodingType;
//# sourceMappingURL=StatisticModelCodings.d.ts.map