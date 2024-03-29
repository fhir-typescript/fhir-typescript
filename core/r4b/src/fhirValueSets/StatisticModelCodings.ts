// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/statistic-model-code|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export type StatisticModelCodingType = {
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
}

/**
 * The handling of the variable in statistical analysis for exposures or outcomes.
 */
export const StatisticModelCodings:StatisticModelCodingType = {
  /**
   * adjusted: Used for adjusted analysis, paired with variable element(s)
   */
  AdjustedAnalysis: {
    display: "Adjusted analysis",
    code: "adjusted",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * anova: Used for ANOVA method of analysis, may be paired with "value" to express degrees of freedom
   */
  ANOVAANalysisOfVAriance: {
    display: "ANOVA (ANalysis Of VAriance)",
    code: "anova",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * anovaOneWay: Used for one-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
   */
  OneWayANOVA: {
    display: "one-way ANOVA",
    code: "anovaOneWay",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * anovaThreeWay: Used for 3-way ANOVA method of analysis, may be paired with "value" to express degrees of freedom
   */
  VAL3WayANOVA: {
    display: "3-way ANOVA",
    code: "anovaThreeWay",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * anovaTwoWay: Used for 2-way ANOVA without replication method of analysis, may be paired with "value" to express degrees of freedom
   */
  VAL2WayANOVAWithoutReplication: {
    display: "2-way ANOVA without replication",
    code: "anovaTwoWay",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * anovaTwoWayReplication: Used for 2-way ANOVA with replication method of analysis, may be paired with "value" to express degrees of freedom
   */
  VAL2WayANOVAWithReplication: {
    display: "2-way ANOVA with replication",
    code: "anovaTwoWayReplication",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * binomialDistributionRegression: Used for Binomial Distribution for Regression, no additional elements needed
   */
  BinomialDistributionForRegression: {
    display: "Binomial Distribution for Regression",
    code: "binomialDistributionRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * chiSquareTest: Used for Chi-square test, may be paired with "value" to express degrees of freedom
   */
  ChiSquareTest: {
    display: "Chi-square test",
    code: "chiSquareTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * chiSquareTestHomogeneity: Used for Chi-square test for homogeneity, may be paired with "value" to express degrees of freedom
   */
  ChiSquareTestForHomogeneity: {
    display: "Chi-square test for homogeneity",
    code: "chiSquareTestHomogeneity",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * chiSquareTestTrend: Used for Chi-square test for trend, may be paired with "value" to express degrees of freedom
   */
  ChiSquareTestForTrend: {
    display: "Chi-square test for trend",
    code: "chiSquareTestTrend",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * coxProportionalHazards: Used for Cox proportional hazards method of analysis, no additional elements needed
   */
  CoxProportionalHazards: {
    display: "Cox Proportional Hazards",
    code: "coxProportionalHazards",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * dersimonianLairdMethod: Used for Dersimonian-Laird method of tau estimation, no additional elements needed
   */
  DersimonianLairdMethod: {
    display: "Dersimonian-Laird method",
    code: "dersimonianLairdMethod",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * effectsFixed: From a fixed-effects analysis, no additional elements needed
   */
  FixedEffects: {
    display: "Fixed-effects",
    code: "effectsFixed",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * effectsRandom: From a random-effects analysis, no additional elements needed
   */
  RandomEffects: {
    display: "Random-effects",
    code: "effectsRandom",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * empiricalBayes: Used for Empirical Bayes method of tau estimation, no additional elements needed
   */
  EmpiricalBayesMethod: {
    display: "Empirical Bayes method",
    code: "empiricalBayes",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * fishersExactTest: Used for Fisher's exact test, may be paired with "value" to express degrees of freedom
   */
  FisherQuoteSExactTest: {
    display: "Fisher’s exact test",
    code: "fishersExactTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * friedmanTest: Used for Friedman test, no additional elements needed
   */
  FriedmanTest: {
    display: "Friedman test",
    code: "friedmanTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glm: Used for GLM (Generalized Linear Model), no additional elements needed
   */
  GLMGeneralizedLinearModel: {
    display: "GLM (Generalized Linear Model)",
    code: "glm",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmGeneralizedLogit: Used for GLM with generalized logit link, no additional elements needed
   */
  GLMWithGeneralizedLogitLink: {
    display: "GLM with generalized logit link",
    code: "glmGeneralizedLogit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmIdentity: Used for GLM with identity link, no additional elements needed
   */
  GLMWithIdentityLink: {
    display: "GLM with identity link",
    code: "glmIdentity",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmLog: Used for GLM with log link, no additional elements needed
   */
  GLMWithLogLink: {
    display: "GLM with log link",
    code: "glmLog",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmLogit: Used for GLM with logit link, no additional elements needed
   */
  GLMWithLogitLink: {
    display: "GLM with logit link",
    code: "glmLogit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmm: Used for Generalized linear mixed model (GLMM), no additional elements needed
   */
  GeneralizedLinearMixedModelGLMM: {
    display: "Generalized linear mixed model (GLMM)",
    code: "glmm",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmmGeneralizedLogit: Used for GLMM with generalized logit link, no additional elements needed
   */
  GLMMWithGeneralizedLogitLink: {
    display: "GLMM with generalized logit link",
    code: "glmmGeneralizedLogit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmmIdentity: Used for GLMM with identity link, no additional elements needed
   */
  GLMMWithIdentityLink: {
    display: "GLMM with identity link",
    code: "glmmIdentity",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmmLog: Used for GLMM with log link, no additional elements needed
   */
  GLMMWithLogLink: {
    display: "GLMM with log link",
    code: "glmmLog",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmmLogit: Used for GLMM with logit link, no additional elements needed
   */
  GLMMWithLogitLink: {
    display: "GLMM with logit link",
    code: "glmmLogit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmmProbit: Used for GLMM with probit link, no additional elements needed
   */
  GLMMWithProbitLink: {
    display: "GLMM with probit link",
    code: "glmmProbit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * glmProbit: Used for GLM with probit link, no additional elements needed
   */
  GLMWithProbitLink: {
    display: "GLM with probit link",
    code: "glmProbit",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * goodmanKruskasGamma: Used for Goodman Kruska’s Gamma, no additional elements needed
   */
  GoodmanKruskaQuoteSGamma: {
    display: "Goodman Kruska’s Gamma",
    code: "goodmanKruskasGamma",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * hartungKnapp: Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
   */
  HartungKnappAdjustment: {
    display: "Hartung-Knapp adjustment",
    code: "hartungKnapp",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * hedgesMethod: Used for Hedges method of tau estimation, no additional elements needed
   */
  HedgesMethod: {
    display: "Hedges method",
    code: "hedgesMethod",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * hunterSchmidt: Used for Hunter-Schmidt method of tau estimation, no additional elements needed
   */
  HunterSchmidtMethod: {
    display: "Hunter-Schmidt method",
    code: "hunterSchmidt",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * interactionTerm: Used for interaction term, paired with "value" and two or more variable elements
   */
  InteractionTerm: {
    display: "Interaction term",
    code: "interactionTerm",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * inverseVariance: Used for inverse variance method of meta-analysis, no additional elements needed
   */
  InverseVarianceMethod: {
    display: "Inverse variance method",
    code: "inverseVariance",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * kendallCorrelation: Used for Kendall correlation, no additional elements needed
   */
  KendallCorrelation: {
    display: "Kendall correlation",
    code: "kendallCorrelation",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * kruskalWallisTest: Used for Kruskal Wallis test, may be paired with "value" to express degrees of freedom
   */
  KruskalWallisTest: {
    display: "Kruskal Wallis test",
    code: "kruskalWallisTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * linearRegression: Used for linear regression method of analysis, no additional elements needed
   */
  LinearRegression: {
    display: "Linear Regression",
    code: "linearRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * logisticRegression: Used for logistic regression method of analysis, no additional elements needed
   */
  LogisticRegression: {
    display: "Logistic Regression",
    code: "logisticRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * mannWhitneyUTest: Used for Mann-Whitney U test, no additional elements needed
   */
  MannWhitneyUTest: {
    display: "Mann-Whitney U test",
    code: "mannWhitneyUTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * manova: Used for multivariate ANOVA (MANOVA) method of analysis, may be paired with "value" to express degrees of freedom
   */
  MultivariateANOVAMANOVA: {
    display: "multivariate ANOVA (MANOVA)",
    code: "manova",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * manteHaenszelMethod: Used for Mantel-Haenszel method, no additional elements needed
   */
  MantelHaenszelMethod: {
    display: "Mantel-Haenszel method",
    code: "manteHaenszelMethod",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * maximumLikelihood: Used for Maximum Likelihood method of tau estimation, no additional elements needed
   */
  MaximumLikelihoodMethod: {
    display: "Maximum Likelihood method",
    code: "maximumLikelihood",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * mcnemarsTest: Used for McNemar's test, no additional elements needed
   */
  McNemarQuoteSTest: {
    display: "McNemar’s test",
    code: "mcnemarsTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * metaAnalysis: Used for meta-analysis, no additional elements needed
   */
  MetaAnalysis: {
    display: "Meta-analysis",
    code: "metaAnalysis",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * modifiedHartungKnapp: Modified Hartung-Knapp/Hartung-Knapp-Sidik-Jonkman adjustment used in meta-analysis, no additional elements needed
   */
  ModifiedHartungKnappAdjustment: {
    display: "Modified Hartung-Knapp adjustment",
    code: "modifiedHartungKnapp",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * multinomialDistributionRegression: Used for Multinomial Distribution for Regression, no additional elements needed
   */
  MultinomialDistributionForRegression: {
    display: "Multinomial Distribution for Regression",
    code: "multinomialDistributionRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * negativeBinomialRegression: Used for Negative Binomial Regression, no additional elements needed
   */
  NegativeBinomialRegression: {
    display: "Negative Binomial Regression",
    code: "negativeBinomialRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * oneSampleTTest: Used for 1-sample t-test, may be paired with "value" to express degrees of freedom
   */
  VAL1SampleTTest: {
    display: "1-sample t-test",
    code: "oneSampleTTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * oneTailedTest: Used for one-tailed test (1 threshold), no additional elements needed
   */
  OneTailedTest1Threshold: {
    display: "one-tailed test (1 threshold)",
    code: "oneTailedTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * pairedTTest: Used for paired t-test, may be paired with "value" to express degrees of freedom
   */
  PairedTTest: {
    display: "paired t-test",
    code: "pairedTTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * pauleMandelMethod: Used for Paule-Mandel method of tau estimation, no additional elements needed
   */
  PauleMandelMethod: {
    display: "Paule-Mandel method",
    code: "pauleMandelMethod",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * pearsonCorrelation: Used for Pearson correlation, no additional elements needed
   */
  PearsonCorrelation: {
    display: "Pearson correlation",
    code: "pearsonCorrelation",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * petoMethod: Used for Peto method of meta-analysis, no additional elements needed
   */
  PetoMethod: {
    display: "Peto method",
    code: "petoMethod",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * poissonRegression: Used for Poisson Regression, no additional elements needed
   */
  PoissonRegression: {
    display: "Poisson Regression",
    code: "poissonRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * polynomialRegression: Used for Polynomial regression method of analysis, no additional elements needed
   */
  PolynomialRegression: {
    display: "Polynomial Regression",
    code: "polynomialRegression",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * poolGeneralizedLinearMixedModel: Generalized linear mixed model (GLMM) method for pooling in meta-analysis
   */
  GeneralizedLinearMixedModelGLMMPoolGeneralizedLinearMixedModel: {
    display: "Generalized linear mixed model (GLMM)",
    code: "poolGeneralizedLinearMixedModel",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * poolInverseVariance: Inverse variance method for pooling in meta-analysis
   */
  InverseVarianceMethodPoolInverseVariance: {
    display: "Inverse variance method",
    code: "poolInverseVariance",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * poolMantelHaenzsel: Mantel-Haenszel method for pooling in meta-analysis
   */
  MantelHaenszelMethodPoolMantelHaenzsel: {
    display: "Mantel-Haenszel method",
    code: "poolMantelHaenzsel",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * poolPeto: Peto method for pooling in meta-analysis
   */
  PetoMethodPoolPeto: {
    display: "Peto method",
    code: "poolPeto",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * restrictedLikelihood: Used for Restricted Maximum Likelihood method of tau estimation, no additional elements needed
   */
  RestrictedMaximumLikelihoodMethod: {
    display: "Restricted Maximum Likelihood method",
    code: "restrictedLikelihood",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * sidikJonkman: Used for Sidik-Jonkman method of tau estimation, no additional elements needed
   */
  SidikJonkmanMethod: {
    display: "Sidik-Jonkman method",
    code: "sidikJonkman",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * signTest: Used for sign test, no additional elements needed
   */
  SignTest: {
    display: "sign test",
    code: "signTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * spearmanCorrelation: Used for Spearman correlation, no additional elements needed
   */
  SpearmanCorrelation: {
    display: "Spearman correlation",
    code: "spearmanCorrelation",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauDersimonianLaird: Dersimonian-Laird method for tau squared
   */
  DersimonianLairdMethodTauDersimonianLaird: {
    display: "Dersimonian-Laird method",
    code: "tauDersimonianLaird",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauEmpiricalBayes: Empirical Bayes method for tau squared
   */
  EmpiricalBayesMethodTauEmpiricalBayes: {
    display: "Empirical Bayes method",
    code: "tauEmpiricalBayes",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauHedges: Hedges method for tau squared
   */
  HedgesMethodTauHedges: {
    display: "Hedges method",
    code: "tauHedges",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauHunterSchmidt: Hunter-Schmidt method for tau squared
   */
  HunterSchmidtMethodTauHunterSchmidt: {
    display: "Hunter-Schmidt method",
    code: "tauHunterSchmidt",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauMaximumLikelihood: Maximum Likelihood method for tau squared
   */
  MaximumLikelihoodMethodTauMaximumLikelihood: {
    display: "Maximum Likelihood method",
    code: "tauMaximumLikelihood",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauPauleMandel: Paule-Mandel method for tau squared
   */
  PauleMandelMethodTauPauleMandel: {
    display: "Paule-Mandel method",
    code: "tauPauleMandel",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauRestrictedMaximumLikelihood: Restricted Maximum Likelihood method for tau squared
   */
  RestrictedMaximumLikelihoodMethodTauRestrictedMaximumLikelihood: {
    display: "Restricted Maximum Likelihood method",
    code: "tauRestrictedMaximumLikelihood",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * tauSidikJonkman: Sidik-Jonkman method for tau squared
   */
  SidikJonkmanMethodTauSidikJonkman: {
    display: "Sidik-Jonkman method",
    code: "tauSidikJonkman",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * twoSampleTTest: Used for 2-sample t-test, may be paired with "value" to express degrees of freedom
   */
  VAL2SampleTTest: {
    display: "2-sample t-test",
    code: "twoSampleTTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * twoTailedTest: Used for two-tailed test (2 threshold), no additional elements needed
   */
  TwoTailedTest2Thresholds: {
    display: "two-tailed test (2 thresholds)",
    code: "twoTailedTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * wilcoxonRankSumTest: Used for Wilcoxon rank-sum test, no additional elements needed
   */
  WilcoxonRankSumTest: {
    display: "Wilcoxon rank-sum test",
    code: "wilcoxonRankSumTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * wilcoxonSignedRankTest: Used for Wilcoxon signed-rank test, no additional elements needed
   */
  WilcoxonSignedRankTest: {
    display: "Wilcoxon signed-rank test",
    code: "wilcoxonSignedRankTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * zeroCellConstant: Zero-cell adjustment done by adding a constant to all cells of affected studies, paired with "value" to define the constant
   */
  ZeroCellAdjustmentWithConstant: {
    display: "Zero-cell adjustment with constant",
    code: "zeroCellConstant",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * zeroCellContinuityCorrection: Zero-cell adjustment done by treatment arm continuity correction, no additional elements needed
   */
  ZeroCellAdjustmentWithContinuityCorrection: {
    display: "Zero-cell adjustment with continuity correction",
    code: "zeroCellContinuityCorrection",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
  /**
   * zTest: Used for z-test, no additional elements needed
   */
  ZTest: {
    display: "z-test",
    code: "zTest",
    system: "http://terminology.hl7.org/CodeSystem/statistic-model-code",
  },
} as const;
