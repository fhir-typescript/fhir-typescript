import { CodingArgs } from '../fhir/Coding.js';
/**
 * A statistic about a statistic, e.g.  Confidence interval or p-value
 */
export declare type AttributeEstimateTypeCodingType = {
    /**
     * 0000037: The standard deviation of the sample-mean's estimate of a population mean. It is calculated by dividing the sample standard deviation (i.e., the sample-based estimate of the standard deviation of the population) by the square root of n , the size (number of observations) of the sample.
     */
    StandardErrorOfTheMean: CodingArgs;
    /**
     * 0000419: A measure of heterogeneity across study computed by summing the squared deviations of each study's estimate from the overall meta-analytic estimate, weighting each study's contribution in the same manner as in the meta-analysis.
     */
    CochranQuoteSQStatistic: CodingArgs;
    /**
     * 0000420: The percentage of total variation across studies that is due to heterogeneity rather than chance. I2 can be readily calculated from basic results obtained from a typical meta-analysis as i2 = 100%×(q - df)/q, where q is cochran's heterogeneity statistic and df the degrees of freedom. Negative values of i2 are put equal to zero so that i2 lies between 0% and 100%. A value of 0% indicates no observed heterogeneity, and larger values show increasing heterogeneity. Unlike cochran's q, it does not inherently depend upon the number of studies considered. A confidence interval for i² is constructed using either i) the iterative non-central chi-squared distribution method of hedges and piggott (2001); or ii) the test-based method of higgins and thompson (2002). The non-central chi-square method is currently the method of choice (higgins, personal communication, 2006) – it is computed if the 'exact' option is selected.
     */
    ISquared: CodingArgs;
    /**
     * 0000421: An estimate of the between-study variance in a random-effects meta-analysis. The square root of this number (i.e. Tau) is the estimated standard deviation of underlying effects across studies.
     */
    TauSquared: CodingArgs;
    /**
     * 0000455: An interval of a posterior distribution which is such that the density at any point inside the interval is greater than the density at any point outside and that the area under the curve for that interval is equal to a prespecified probability level. For any probability level there is generally only one such interval, which is also often known as the highest posterior density region. Unlike the usual confidence interval associated with frequentist inference, here the intervals specify the range within which parameters lie with a certain probability. The bayesian counterparts of the confidence interval used in frequentists statistics.
     */
    CredibleInterval: CodingArgs;
    /**
     * C38013: The difference between the lowest and highest numerical values; the limits or scale of variation.
     */
    Range: CodingArgs;
    /**
     * C44185: The probability of obtaining the results obtained, or more extreme results, if the hypothesis being tested and all other model assumptions are true
     */
    PValue: CodingArgs;
    /**
     * C48918: A measure of the variability in a sample or population. It is calculated as the mean squared deviation (MSD) of the individual values from their common mean. In calculating the MSD, the divisor n is commonly used for a population variance and the divisor n-1 for a sample variance.
     */
    Variance: CodingArgs;
    /**
     * C53245: The difference between the 3d and 1st quartiles is called the interquartile range and it is used as a measure of variability (dispersion).
     */
    InterquartileRange: CodingArgs;
    /**
     * C53322: A measure of the range of values in a set of numbers. Standard deviation is a statistic used as a measure of the dispersion or variation in a distribution, equal to the square root of the arithmetic mean of the squares of the deviations from the arithmetic mean.
     */
    StandardDeviation: CodingArgs;
    /**
     * C53324: A range of values considered compatible with the observed data at the specified confidence level
     */
    ConfidenceInterval: CodingArgs;
};
/**
 * A statistic about a statistic, e.g.  Confidence interval or p-value
 */
export declare const AttributeEstimateTypeCodings: AttributeEstimateTypeCodingType;
//# sourceMappingURL=AttributeEstimateTypeCodings.d.ts.map