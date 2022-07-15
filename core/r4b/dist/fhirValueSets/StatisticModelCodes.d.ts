/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export declare const StatisticModelCodes: {
    /**
     * adjusted: Used for adjusted analysis, paired with variable element(s)
     */
    readonly AdjustedAnalysis: "adjusted";
    /**
     * anova: Used for ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly ANOVAANalysisOfVAriance: "anova";
    /**
     * anovaOneWay: Used for one-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly OneWayANOVA: "anovaOneWay";
    /**
     * anovaThreeWay: Used for 3-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly VAL3WayANOVA: "anovaThreeWay";
    /**
     * anovaTwoWay: Used for 2-way ANOVA without replication method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly VAL2WayANOVAWithoutReplication: "anovaTwoWay";
    /**
     * anovaTwoWayReplication: Used for 2-way ANOVA with replication method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly VAL2WayANOVAWithReplication: "anovaTwoWayReplication";
    /**
     * binomialDistributionRegression: Used for Binomial Distribution for Regression, no additional elements needed
     */
    readonly BinomialDistributionForRegression: "binomialDistributionRegression";
    /**
     * chiSquareTest: Used for Chi-square test, may be paired with "value" to express degrees of freedom
     */
    readonly ChiSquareTest: "chiSquareTest";
    /**
     * chiSquareTestHomogeneity: Used for Chi-square test for homogeneity, may be paired with "value" to express degrees of freedom
     */
    readonly ChiSquareTestForHomogeneity: "chiSquareTestHomogeneity";
    /**
     * chiSquareTestTrend: Used for Chi-square test for trend, may be paired with "value" to express degrees of freedom
     */
    readonly ChiSquareTestForTrend: "chiSquareTestTrend";
    /**
     * coxProportionalHazards: Used for Cox proportional hazards method of analysis, no additional elements needed
     */
    readonly CoxProportionalHazards: "coxProportionalHazards";
    /**
     * dersimonianLairdMethod: Used for Dersimonian-Laird method of tau estimation, no additional elements needed
     */
    readonly DersimonianLairdMethod: "dersimonianLairdMethod";
    /**
     * effectsFixed: From a fixed-effects analysis, no additional elements needed
     */
    readonly FixedEffects: "effectsFixed";
    /**
     * effectsRandom: From a random-effects analysis, no additional elements needed
     */
    readonly RandomEffects: "effectsRandom";
    /**
     * empiricalBayes: Used for Empirical Bayes method of tau estimation, no additional elements needed
     */
    readonly EmpiricalBayesMethod: "empiricalBayes";
    /**
     * fishersExactTest: Used for Fisher's exact test, may be paired with "value" to express degrees of freedom
     */
    readonly FisherQuoteSExactTest: "fishersExactTest";
    /**
     * friedmanTest: Used for Friedman test, no additional elements needed
     */
    readonly FriedmanTest: "friedmanTest";
    /**
     * glm: Used for GLM (Generalized Linear Model), no additional elements needed
     */
    readonly GLMGeneralizedLinearModel: "glm";
    /**
     * glmGeneralizedLogit: Used for GLM with generalized logit link, no additional elements needed
     */
    readonly GLMWithGeneralizedLogitLink: "glmGeneralizedLogit";
    /**
     * glmIdentity: Used for GLM with identity link, no additional elements needed
     */
    readonly GLMWithIdentityLink: "glmIdentity";
    /**
     * glmLog: Used for GLM with log link, no additional elements needed
     */
    readonly GLMWithLogLink: "glmLog";
    /**
     * glmLogit: Used for GLM with logit link, no additional elements needed
     */
    readonly GLMWithLogitLink: "glmLogit";
    /**
     * glmm: Used for Generalized linear mixed model (GLMM), no additional elements needed
     */
    readonly GeneralizedLinearMixedModelGLMM: "glmm";
    /**
     * glmmGeneralizedLogit: Used for GLMM with generalized logit link, no additional elements needed
     */
    readonly GLMMWithGeneralizedLogitLink: "glmmGeneralizedLogit";
    /**
     * glmmIdentity: Used for GLMM with identity link, no additional elements needed
     */
    readonly GLMMWithIdentityLink: "glmmIdentity";
    /**
     * glmmLog: Used for GLMM with log link, no additional elements needed
     */
    readonly GLMMWithLogLink: "glmmLog";
    /**
     * glmmLogit: Used for GLMM with logit link, no additional elements needed
     */
    readonly GLMMWithLogitLink: "glmmLogit";
    /**
     * glmmProbit: Used for GLMM with probit link, no additional elements needed
     */
    readonly GLMMWithProbitLink: "glmmProbit";
    /**
     * glmProbit: Used for GLM with probit link, no additional elements needed
     */
    readonly GLMWithProbitLink: "glmProbit";
    /**
     * goodmanKruskasGamma: Used for Goodman Kruska’s Gamma, no additional elements needed
     */
    readonly GoodmanKruskaQuoteSGamma: "goodmanKruskasGamma";
    /**
     * hartungKnapp: Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
     */
    readonly HartungKnappAdjustment: "hartungKnapp";
    /**
     * hedgesMethod: Used for Hedges method of tau estimation, no additional elements needed
     */
    readonly HedgesMethod: "hedgesMethod";
    /**
     * hunterSchmidt: Used for Hunter-Schmidt method of tau estimation, no additional elements needed
     */
    readonly HunterSchmidtMethod: "hunterSchmidt";
    /**
     * interactionTerm: Used for interaction term, paired with "value" and two or more variable elements
     */
    readonly InteractionTerm: "interactionTerm";
    /**
     * inverseVariance: Used for inverse variance method of meta-analysis, no additional elements needed
     */
    readonly InverseVarianceMethod: "inverseVariance";
    /**
     * kendallCorrelation: Used for Kendall correlation, no additional elements needed
     */
    readonly KendallCorrelation: "kendallCorrelation";
    /**
     * kruskalWallisTest: Used for Kruskal Wallis test, may be paired with "value" to express degrees of freedom
     */
    readonly KruskalWallisTest: "kruskalWallisTest";
    /**
     * linearRegression: Used for linear regression method of analysis, no additional elements needed
     */
    readonly LinearRegression: "linearRegression";
    /**
     * logisticRegression: Used for logistic regression method of analysis, no additional elements needed
     */
    readonly LogisticRegression: "logisticRegression";
    /**
     * mannWhitneyUTest: Used for Mann-Whitney U test, no additional elements needed
     */
    readonly MannWhitneyUTest: "mannWhitneyUTest";
    /**
     * manova: Used for multivariate ANOVA (MANOVA) method of analysis, may be paired with "value" to express degrees of freedom
     */
    readonly MultivariateANOVAMANOVA: "manova";
    /**
     * manteHaenszelMethod: Used for Mantel-Haenszel method, no additional elements needed
     */
    readonly MantelHaenszelMethod: "manteHaenszelMethod";
    /**
     * maximumLikelihood: Used for Maximum Likelihood method of tau estimation, no additional elements needed
     */
    readonly MaximumLikelihoodMethod: "maximumLikelihood";
    /**
     * mcnemarsTest: Used for McNemar's test, no additional elements needed
     */
    readonly McNemarQuoteSTest: "mcnemarsTest";
    /**
     * metaAnalysis: Used for meta-analysis, no additional elements needed
     */
    readonly MetaAnalysis: "metaAnalysis";
    /**
     * modifiedHartungKnapp: Modified Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
     */
    readonly ModifiedHartungKnappAdjustment: "modifiedHartungKnapp";
    /**
     * multinomialDistributionRegression: Used for Multinomial Distribution for Regression, no additional elements needed
     */
    readonly MultinomialDistributionForRegression: "multinomialDistributionRegression";
    /**
     * negativeBinomialRegression: Used for Negative Binomial Regression, no additional elements needed
     */
    readonly NegativeBinomialRegression: "negativeBinomialRegression";
    /**
     * oneSampleTTest: Used for 1-sample t-test, may be paired with "value" to express degrees of freedom
     */
    readonly VAL1SampleTTest: "oneSampleTTest";
    /**
     * oneTailedTest: Used for one-tailed test (1 threshold), no additional elements needed
     */
    readonly OneTailedTest1Threshold: "oneTailedTest";
    /**
     * pairedTTest: Used for paired t-test, may be paired with "value" to express degrees of freedom
     */
    readonly PairedTTest: "pairedTTest";
    /**
     * pauleMandelMethod: Used for Paule-Mandel method of tau estimation, no additional elements needed
     */
    readonly PauleMandelMethod: "pauleMandelMethod";
    /**
     * pearsonCorrelation: Used for Pearson correlation, no additional elements needed
     */
    readonly PearsonCorrelation: "pearsonCorrelation";
    /**
     * petoMethod: Used for Peto method of meta-analysis, no additional elements needed
     */
    readonly PetoMethod: "petoMethod";
    /**
     * poissonRegression: Used for Poisson Regression, no additional elements needed
     */
    readonly PoissonRegression: "poissonRegression";
    /**
     * polynomialRegression: Used for Polynomial regression method of analysis, no additional elements needed
     */
    readonly PolynomialRegression: "polynomialRegression";
    /**
     * poolGeneralizedLinearMixedModel: Generalized linear mixed model (GLMM) method for pooling in meta-analysis
     */
    readonly GeneralizedLinearMixedModelGLMMPoolGeneralizedLinearMixedModel: "poolGeneralizedLinearMixedModel";
    /**
     * poolInverseVariance: Inverse variance method for pooling in meta-analysis
     */
    readonly InverseVarianceMethodPoolInverseVariance: "poolInverseVariance";
    /**
     * poolMantelHaenzsel: Mantel-Haenszel method for pooling in meta-analysis
     */
    readonly MantelHaenszelMethodPoolMantelHaenzsel: "poolMantelHaenzsel";
    /**
     * poolPeto: Peto method for pooling in meta-analysis
     */
    readonly PetoMethodPoolPeto: "poolPeto";
    /**
     * restrictedLikelihood: Used for Restricted Maximum Likelihood method of tau estimation, no additional elements needed
     */
    readonly RestrictedMaximumLikelihoodMethod: "restrictedLikelihood";
    /**
     * sidikJonkman: Used for Sidik-Jonkman method of tau estimation, no additional elements needed
     */
    readonly SidikJonkmanMethod: "sidikJonkman";
    /**
     * signTest: Used for sign test, no additional elements needed
     */
    readonly SignTest: "signTest";
    /**
     * spearmanCorrelation: Used for Spearman correlation, no additional elements needed
     */
    readonly SpearmanCorrelation: "spearmanCorrelation";
    /**
     * tauDersimonianLaird: Dersimonian-Laird method for tau squared
     */
    readonly DersimonianLairdMethodTauDersimonianLaird: "tauDersimonianLaird";
    /**
     * tauEmpiricalBayes: Empirical Bayes method for tau squared
     */
    readonly EmpiricalBayesMethodTauEmpiricalBayes: "tauEmpiricalBayes";
    /**
     * tauHedges: Hedges method for tau squared
     */
    readonly HedgesMethodTauHedges: "tauHedges";
    /**
     * tauHunterSchmidt: Hunter-Schmidt method for tau squared
     */
    readonly HunterSchmidtMethodTauHunterSchmidt: "tauHunterSchmidt";
    /**
     * tauMaximumLikelihood: Maximum Likelihood method for tau squared
     */
    readonly MaximumLikelihoodMethodTauMaximumLikelihood: "tauMaximumLikelihood";
    /**
     * tauPauleMandel: Paule-Mandel method for tau squared
     */
    readonly PauleMandelMethodTauPauleMandel: "tauPauleMandel";
    /**
     * tauRestrictedMaximumLikelihood: Restricted Maximum Likelihood method for tau squared
     */
    readonly RestrictedMaximumLikelihoodMethodTauRestrictedMaximumLikelihood: "tauRestrictedMaximumLikelihood";
    /**
     * tauSidikJonkman: Sidik-Jonkman method for tau squared
     */
    readonly SidikJonkmanMethodTauSidikJonkman: "tauSidikJonkman";
    /**
     * twoSampleTTest: Used for 2-sample t-test, may be paired with "value" to express degrees of freedom
     */
    readonly VAL2SampleTTest: "twoSampleTTest";
    /**
     * twoTailedTest: Used for two-tailed test (2 threshold), no additional elements needed
     */
    readonly TwoTailedTest2Thresholds: "twoTailedTest";
    /**
     * wilcoxonRankSumTest: Used for Wilcoxon rank-sum test, no additional elements needed
     */
    readonly WilcoxonRankSumTest: "wilcoxonRankSumTest";
    /**
     * wilcoxonSignedRankTest: Used for Wilcoxon signed-rank test, no additional elements needed
     */
    readonly WilcoxonSignedRankTest: "wilcoxonSignedRankTest";
    /**
     * zeroCellConstant: Zero-cell adjustment done by adding a constant to all cells of affected studies, paired with "value" to define the constant
     */
    readonly ZeroCellAdjustmentWithConstant: "zeroCellConstant";
    /**
     * zeroCellContinuityCorrection: Zero-cell adjustment done by treatment arm continuity correction, no additional elements needed
     */
    readonly ZeroCellAdjustmentWithContinuityCorrection: "zeroCellContinuityCorrection";
    /**
     * zTest: Used for z-test, no additional elements needed
     */
    readonly ZTest: "zTest";
};
/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export declare type StatisticModelCodeType = typeof StatisticModelCodes[keyof typeof StatisticModelCodes];
//# sourceMappingURL=StatisticModelCodes.d.ts.map