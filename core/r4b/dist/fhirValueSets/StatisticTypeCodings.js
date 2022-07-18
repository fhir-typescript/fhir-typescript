// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/statistic-type|4.3.0
/**
 * The type of a statistic, e.g. relative risk or mean
 */
export const StatisticTypeCodings = {
    /**
     * 0000100: Computed by forming the difference between two means, divided by an estimate of the within-group standard deviation. It is used to provide an estimatation of the effect size between two treatments when the predictor (independent variable) is categorical and the response(dependent) variable is continuous
     */
    StandardizedMeanDifference: {
        display: "Standardized Mean Difference",
        code: "0000100",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * 0000301: The strength of correlation between a set (2 or more) of random variables. The covariance is obtained by forming: cov(x,y)=e([x-e(x)][y-e(y)] where e(x), e(y) is the expected value (mean) of variable x and y respectively. Covariance is symmetric so cov(x,y)=cov(y,x). The covariance is usefull when looking at the variance of the sum of the 2 random variables since: var(x+y) = var(x) +var(y) +2cov(x,y) the covariance cov(x,y) is used to obtain the coefficient of correlation cor(x,y) by normalizing (dividing) cov(x,y) but the product of the standard deviations of x and y.
     */
    Covariance: {
        display: "Covariance",
        code: "0000301",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * 0000424: Difference between the observed risks (proportions of individuals with the outcome of interest) in the two groups. The risk difference is straightforward to interpret: it describes the actual difference in the observed risk of events between experimental and control interventions.
     */
    RiskDifference: {
        display: "Risk Difference",
        code: "0000424",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * 0000457: The mean difference, or difference in means, measures the absolute difference between the mean value in two different groups.
     */
    MeanDifference: {
        display: "Mean Difference",
        code: "0000457",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * 0000565: Generated by a type of data transformation called a regression, which aims to model a response variable by expression the predictor variables as part of a function where variable terms are modified by a number. A regression coefficient is one such number.
     */
    RegressionCoefficient: {
        display: "Regression Coefficient",
        code: "0000565",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * absolute-MedianDiff: Computed by forming the difference between two medians.
     */
    AbsoluteMedianDifference: {
        display: "Absolute Median Difference",
        code: "absolute-MedianDiff",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C16726: The relative frequency of occurrence of something.
     */
    Incidence: {
        display: "Incidence",
        code: "C16726",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C16932: The ratio of the odds of an event occurring in one group to the odds of it occurring in another group, or to a sample-based estimate of that ratio.
     */
    OddsRatio: {
        display: "Odds Ratio",
        code: "C16932",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C17010: The ratio (for a given time period) of the number of occurrences of a disease or event to the number of units at risk in the population.
     */
    Prevalence: {
        display: "Prevalence",
        code: "C17010",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C25463: The number or amount of something
     */
    Count: {
        display: "Count",
        code: "C25463",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C25564: The largest possible quantity or degree.
     */
    Maximum: {
        display: "Maximum",
        code: "C25564",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C25570: The smallest possible quantity.
     */
    Minimum: {
        display: "Minimum",
        code: "C25570",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C28007: The value which has an equal number of values greater and less than it.
     */
    Median: {
        display: "Median",
        code: "C28007",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C44256: Quotient of quantities of the same kind for different components within the same system. [Use for univariate outcomes within an individual.]
     */
    Proportion: {
        display: "Proportion",
        code: "C44256",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C53319: The sum of a set of values divided by the number of values in the set.
     */
    Mean: {
        display: "Mean",
        code: "C53319",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C65171: A distribution-free analog of correlation analysis. Like regression, it can be applied to compare two independent random variables, each at several levels (which may be discrete or continuous). Unlike regression, Spearman's rank correlation works on ranked (relative) data, rather than directly on the data itself.
     */
    SpearmanRankOrderCorrelation: {
        display: "Spearman Rank-Order Correlation ",
        code: "C65171",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C65172: A measure of the correlation of two variables X and Y measured on the same object or organism, that is, a measure of the tendency of the variables to increase or decrease together. It is defined as the sum of the products of the standard scores of the two measures divided by the degrees of freedom.
     */
    PearsonCorrelationCoefficient: {
        display: "Pearson Correlation Coefficient",
        code: "C65172",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C93150: A measure of how often a particular event happens in one group compared to how often it happens in another group, over time. In cancer research, hazard ratios are often used in clinical trials to measure survival at any point in time in a group of patients who have been given a specific treatment compared to a control group given another treatment or a placebo. A hazard ratio of one means that there is no difference in survival between the two groups. A hazard ratio of greater than one or less than one means that survival was better in one of the groups.
     */
    HazardRatio: {
        display: "Hazard Ratio",
        code: "C93150",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * C93152:  A measure of the risk of a certain event happening in one group compared to the risk of the same event happening in another group. In cancer research, risk ratios are used in prospective (forward looking) studies, such as cohort studies and clinical trials. A risk ratio of one means there is no difference between two groups in terms of their risk of cancer, based on whether or not they were exposed to a certain substance or factor, or how they responded to two treatments being compared. A risk ratio of greater than one or of less than one usually means that being exposed to a certain substance or factor either increases (risk ratio greater than one) or decreases (risk ratio less than one) the risk of cancer, or that the treatments being compared do not have the same effects.
     */
    RelativeRisk: {
        display: "Relative Risk",
        code: "C93152",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * descriptive: Descriptive measure reported as narrative.
     */
    Descriptive: {
        display: "Descriptive",
        code: "descriptive",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * predictedRisk: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    PredictedRisk: {
        display: "Predicted Risk",
        code: "predictedRisk",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
    /**
     * rate-ratio: A type of relative effect estimate that compares rates over time (eg events per person-years).
     */
    IncidenceRateRatio: {
        display: "Incidence Rate Ratio",
        code: "rate-ratio",
        system: "http://terminology.hl7.org/CodeSystem/statistic-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlzdGljVHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1N0YXRpc3RpY1R5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQWtHbkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBMkI7SUFDMUQ7O09BRUc7SUFDSCwwQkFBMEIsRUFBRTtRQUMxQixPQUFPLEVBQUUsOEJBQThCO1FBQ3ZDLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILHFCQUFxQixFQUFFO1FBQ3JCLE9BQU8sRUFBRSx3QkFBd0I7UUFDakMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLElBQUksRUFBRSxxQkFBcUI7UUFDM0IsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxNQUFNO1FBQ2YsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCw0QkFBNEIsRUFBRTtRQUM1QixPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUU7UUFDN0IsT0FBTyxFQUFFLGlDQUFpQztRQUMxQyxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsc0RBQXNEO0tBQy9EO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0Q7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N0YXRpc3RpYy10eXBlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgYSBzdGF0aXN0aWMsIGUuZy4gcmVsYXRpdmUgcmlzayBvciBtZWFuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdGF0aXN0aWNUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiAwMDAwMTAwOiBDb21wdXRlZCBieSBmb3JtaW5nIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG1lYW5zLCBkaXZpZGVkIGJ5IGFuIGVzdGltYXRlIG9mIHRoZSB3aXRoaW4tZ3JvdXAgc3RhbmRhcmQgZGV2aWF0aW9uLiBJdCBpcyB1c2VkIHRvIHByb3ZpZGUgYW4gZXN0aW1hdGF0aW9uIG9mIHRoZSBlZmZlY3Qgc2l6ZSBiZXR3ZWVuIHR3byB0cmVhdG1lbnRzIHdoZW4gdGhlIHByZWRpY3RvciAoaW5kZXBlbmRlbnQgdmFyaWFibGUpIGlzIGNhdGVnb3JpY2FsIGFuZCB0aGUgcmVzcG9uc2UoZGVwZW5kZW50KSB2YXJpYWJsZSBpcyBjb250aW51b3VzXHJcbiAgICovXHJcbiAgU3RhbmRhcmRpemVkTWVhbkRpZmZlcmVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMDAwMDMwMTogVGhlIHN0cmVuZ3RoIG9mIGNvcnJlbGF0aW9uIGJldHdlZW4gYSBzZXQgKDIgb3IgbW9yZSkgb2YgcmFuZG9tIHZhcmlhYmxlcy4gVGhlIGNvdmFyaWFuY2UgaXMgb2J0YWluZWQgYnkgZm9ybWluZzogY292KHgseSk9ZShbeC1lKHgpXVt5LWUoeSldIHdoZXJlIGUoeCksIGUoeSkgaXMgdGhlIGV4cGVjdGVkIHZhbHVlIChtZWFuKSBvZiB2YXJpYWJsZSB4IGFuZCB5IHJlc3BlY3RpdmVseS4gQ292YXJpYW5jZSBpcyBzeW1tZXRyaWMgc28gY292KHgseSk9Y292KHkseCkuIFRoZSBjb3ZhcmlhbmNlIGlzIHVzZWZ1bGwgd2hlbiBsb29raW5nIGF0IHRoZSB2YXJpYW5jZSBvZiB0aGUgc3VtIG9mIHRoZSAyIHJhbmRvbSB2YXJpYWJsZXMgc2luY2U6IHZhcih4K3kpID0gdmFyKHgpICt2YXIoeSkgKzJjb3YoeCx5KSB0aGUgY292YXJpYW5jZSBjb3YoeCx5KSBpcyB1c2VkIHRvIG9idGFpbiB0aGUgY29lZmZpY2llbnQgb2YgY29ycmVsYXRpb24gY29yKHgseSkgYnkgbm9ybWFsaXppbmcgKGRpdmlkaW5nKSBjb3YoeCx5KSBidXQgdGhlIHByb2R1Y3Qgb2YgdGhlIHN0YW5kYXJkIGRldmlhdGlvbnMgb2YgeCBhbmQgeS5cclxuICAgKi9cclxuICBDb3ZhcmlhbmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIDAwMDA0MjQ6IERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgb2JzZXJ2ZWQgcmlza3MgKHByb3BvcnRpb25zIG9mIGluZGl2aWR1YWxzIHdpdGggdGhlIG91dGNvbWUgb2YgaW50ZXJlc3QpIGluIHRoZSB0d28gZ3JvdXBzLiBUaGUgcmlzayBkaWZmZXJlbmNlIGlzIHN0cmFpZ2h0Zm9yd2FyZCB0byBpbnRlcnByZXQ6IGl0IGRlc2NyaWJlcyB0aGUgYWN0dWFsIGRpZmZlcmVuY2UgaW4gdGhlIG9ic2VydmVkIHJpc2sgb2YgZXZlbnRzIGJldHdlZW4gZXhwZXJpbWVudGFsIGFuZCBjb250cm9sIGludGVydmVudGlvbnMuXHJcbiAgICovXHJcbiAgUmlza0RpZmZlcmVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogMDAwMDQ1NzogVGhlIG1lYW4gZGlmZmVyZW5jZSwgb3IgZGlmZmVyZW5jZSBpbiBtZWFucywgbWVhc3VyZXMgdGhlIGFic29sdXRlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWVhbiB2YWx1ZSBpbiB0d28gZGlmZmVyZW50IGdyb3Vwcy5cclxuICAgKi9cclxuICBNZWFuRGlmZmVyZW5jZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiAwMDAwNTY1OiBHZW5lcmF0ZWQgYnkgYSB0eXBlIG9mIGRhdGEgdHJhbnNmb3JtYXRpb24gY2FsbGVkIGEgcmVncmVzc2lvbiwgd2hpY2ggYWltcyB0byBtb2RlbCBhIHJlc3BvbnNlIHZhcmlhYmxlIGJ5IGV4cHJlc3Npb24gdGhlIHByZWRpY3RvciB2YXJpYWJsZXMgYXMgcGFydCBvZiBhIGZ1bmN0aW9uIHdoZXJlIHZhcmlhYmxlIHRlcm1zIGFyZSBtb2RpZmllZCBieSBhIG51bWJlci4gQSByZWdyZXNzaW9uIGNvZWZmaWNpZW50IGlzIG9uZSBzdWNoIG51bWJlci5cclxuICAgKi9cclxuICBSZWdyZXNzaW9uQ29lZmZpY2llbnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYWJzb2x1dGUtTWVkaWFuRGlmZjogQ29tcHV0ZWQgYnkgZm9ybWluZyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBtZWRpYW5zLlxyXG4gICAqL1xyXG4gIEFic29sdXRlTWVkaWFuRGlmZmVyZW5jZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDMTY3MjY6IFRoZSByZWxhdGl2ZSBmcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzb21ldGhpbmcuXHJcbiAgICovXHJcbiAgSW5jaWRlbmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEMxNjkzMjogVGhlIHJhdGlvIG9mIHRoZSBvZGRzIG9mIGFuIGV2ZW50IG9jY3VycmluZyBpbiBvbmUgZ3JvdXAgdG8gdGhlIG9kZHMgb2YgaXQgb2NjdXJyaW5nIGluIGFub3RoZXIgZ3JvdXAsIG9yIHRvIGEgc2FtcGxlLWJhc2VkIGVzdGltYXRlIG9mIHRoYXQgcmF0aW8uXHJcbiAgICovXHJcbiAgT2Rkc1JhdGlvOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEMxNzAxMDogVGhlIHJhdGlvIChmb3IgYSBnaXZlbiB0aW1lIHBlcmlvZCkgb2YgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIGRpc2Vhc2Ugb3IgZXZlbnQgdG8gdGhlIG51bWJlciBvZiB1bml0cyBhdCByaXNrIGluIHRoZSBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIFByZXZhbGVuY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQzI1NDYzOiBUaGUgbnVtYmVyIG9yIGFtb3VudCBvZiBzb21ldGhpbmdcclxuICAgKi9cclxuICBDb3VudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDMjU1NjQ6IFRoZSBsYXJnZXN0IHBvc3NpYmxlIHF1YW50aXR5IG9yIGRlZ3JlZS5cclxuICAgKi9cclxuICBNYXhpbXVtOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEMyNTU3MDogVGhlIHNtYWxsZXN0IHBvc3NpYmxlIHF1YW50aXR5LlxyXG4gICAqL1xyXG4gIE1pbmltdW06IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQzI4MDA3OiBUaGUgdmFsdWUgd2hpY2ggaGFzIGFuIGVxdWFsIG51bWJlciBvZiB2YWx1ZXMgZ3JlYXRlciBhbmQgbGVzcyB0aGFuIGl0LlxyXG4gICAqL1xyXG4gIE1lZGlhbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDNDQyNTY6IFF1b3RpZW50IG9mIHF1YW50aXRpZXMgb2YgdGhlIHNhbWUga2luZCBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aGluIHRoZSBzYW1lIHN5c3RlbS4gW1VzZSBmb3IgdW5pdmFyaWF0ZSBvdXRjb21lcyB3aXRoaW4gYW4gaW5kaXZpZHVhbC5dXHJcbiAgICovXHJcbiAgUHJvcG9ydGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDNTMzMTk6IFRoZSBzdW0gb2YgYSBzZXQgb2YgdmFsdWVzIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlIHNldC5cclxuICAgKi9cclxuICBNZWFuOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEM2NTE3MTogQSBkaXN0cmlidXRpb24tZnJlZSBhbmFsb2cgb2YgY29ycmVsYXRpb24gYW5hbHlzaXMuIExpa2UgcmVncmVzc2lvbiwgaXQgY2FuIGJlIGFwcGxpZWQgdG8gY29tcGFyZSB0d28gaW5kZXBlbmRlbnQgcmFuZG9tIHZhcmlhYmxlcywgZWFjaCBhdCBzZXZlcmFsIGxldmVscyAod2hpY2ggbWF5IGJlIGRpc2NyZXRlIG9yIGNvbnRpbnVvdXMpLiBVbmxpa2UgcmVncmVzc2lvbiwgU3BlYXJtYW4ncyByYW5rIGNvcnJlbGF0aW9uIHdvcmtzIG9uIHJhbmtlZCAocmVsYXRpdmUpIGRhdGEsIHJhdGhlciB0aGFuIGRpcmVjdGx5IG9uIHRoZSBkYXRhIGl0c2VsZi5cclxuICAgKi9cclxuICBTcGVhcm1hblJhbmtPcmRlckNvcnJlbGF0aW9uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIEM2NTE3MjogQSBtZWFzdXJlIG9mIHRoZSBjb3JyZWxhdGlvbiBvZiB0d28gdmFyaWFibGVzIFggYW5kIFkgbWVhc3VyZWQgb24gdGhlIHNhbWUgb2JqZWN0IG9yIG9yZ2FuaXNtLCB0aGF0IGlzLCBhIG1lYXN1cmUgb2YgdGhlIHRlbmRlbmN5IG9mIHRoZSB2YXJpYWJsZXMgdG8gaW5jcmVhc2Ugb3IgZGVjcmVhc2UgdG9nZXRoZXIuIEl0IGlzIGRlZmluZWQgYXMgdGhlIHN1bSBvZiB0aGUgcHJvZHVjdHMgb2YgdGhlIHN0YW5kYXJkIHNjb3JlcyBvZiB0aGUgdHdvIG1lYXN1cmVzIGRpdmlkZWQgYnkgdGhlIGRlZ3JlZXMgb2YgZnJlZWRvbS5cclxuICAgKi9cclxuICBQZWFyc29uQ29ycmVsYXRpb25Db2VmZmljaWVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBDOTMxNTA6IEEgbWVhc3VyZSBvZiBob3cgb2Z0ZW4gYSBwYXJ0aWN1bGFyIGV2ZW50IGhhcHBlbnMgaW4gb25lIGdyb3VwIGNvbXBhcmVkIHRvIGhvdyBvZnRlbiBpdCBoYXBwZW5zIGluIGFub3RoZXIgZ3JvdXAsIG92ZXIgdGltZS4gSW4gY2FuY2VyIHJlc2VhcmNoLCBoYXphcmQgcmF0aW9zIGFyZSBvZnRlbiB1c2VkIGluIGNsaW5pY2FsIHRyaWFscyB0byBtZWFzdXJlIHN1cnZpdmFsIGF0IGFueSBwb2ludCBpbiB0aW1lIGluIGEgZ3JvdXAgb2YgcGF0aWVudHMgd2hvIGhhdmUgYmVlbiBnaXZlbiBhIHNwZWNpZmljIHRyZWF0bWVudCBjb21wYXJlZCB0byBhIGNvbnRyb2wgZ3JvdXAgZ2l2ZW4gYW5vdGhlciB0cmVhdG1lbnQgb3IgYSBwbGFjZWJvLiBBIGhhemFyZCByYXRpbyBvZiBvbmUgbWVhbnMgdGhhdCB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGluIHN1cnZpdmFsIGJldHdlZW4gdGhlIHR3byBncm91cHMuIEEgaGF6YXJkIHJhdGlvIG9mIGdyZWF0ZXIgdGhhbiBvbmUgb3IgbGVzcyB0aGFuIG9uZSBtZWFucyB0aGF0IHN1cnZpdmFsIHdhcyBiZXR0ZXIgaW4gb25lIG9mIHRoZSBncm91cHMuXHJcbiAgICovXHJcbiAgSGF6YXJkUmF0aW86IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogQzkzMTUyOiDCoEEgbWVhc3VyZSBvZiB0aGUgcmlzayBvZiBhIGNlcnRhaW4gZXZlbnQgaGFwcGVuaW5nIGluIG9uZSBncm91cCBjb21wYXJlZCB0byB0aGUgcmlzayBvZiB0aGUgc2FtZSBldmVudCBoYXBwZW5pbmcgaW4gYW5vdGhlciBncm91cC4gSW4gY2FuY2VyIHJlc2VhcmNoLCByaXNrIHJhdGlvcyBhcmUgdXNlZCBpbiBwcm9zcGVjdGl2ZSAoZm9yd2FyZCBsb29raW5nKSBzdHVkaWVzLCBzdWNoIGFzIGNvaG9ydCBzdHVkaWVzIGFuZCBjbGluaWNhbCB0cmlhbHMuIEEgcmlzayByYXRpbyBvZiBvbmUgbWVhbnMgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBncm91cHMgaW4gdGVybXMgb2YgdGhlaXIgcmlzayBvZiBjYW5jZXIsIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZXkgd2VyZSBleHBvc2VkIHRvIGEgY2VydGFpbiBzdWJzdGFuY2Ugb3IgZmFjdG9yLCBvciBob3cgdGhleSByZXNwb25kZWQgdG8gdHdvIHRyZWF0bWVudHMgYmVpbmcgY29tcGFyZWQuIEEgcmlzayByYXRpbyBvZiBncmVhdGVyIHRoYW4gb25lIG9yIG9mIGxlc3MgdGhhbiBvbmUgdXN1YWxseSBtZWFucyB0aGF0IGJlaW5nIGV4cG9zZWQgdG8gYSBjZXJ0YWluIHN1YnN0YW5jZSBvciBmYWN0b3IgZWl0aGVyIGluY3JlYXNlcyAocmlzayByYXRpbyBncmVhdGVyIHRoYW4gb25lKSBvciBkZWNyZWFzZXMgKHJpc2sgcmF0aW8gbGVzcyB0aGFuIG9uZSkgdGhlIHJpc2sgb2YgY2FuY2VyLCBvciB0aGF0IHRoZSB0cmVhdG1lbnRzIGJlaW5nIGNvbXBhcmVkIGRvIG5vdCBoYXZlIHRoZSBzYW1lIGVmZmVjdHMuXHJcbiAgICovXHJcbiAgUmVsYXRpdmVSaXNrOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRlc2NyaXB0aXZlOiBEZXNjcmlwdGl2ZSBtZWFzdXJlIHJlcG9ydGVkIGFzIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBEZXNjcmlwdGl2ZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcmVkaWN0ZWRSaXNrOiBBIHNwZWNpYWwgdXNlIGNhc2Ugd2hlcmUgdGhlIHByb3BvcnRpb24gaXMgZGVyaXZlZCBmcm9tIGEgZm9ybXVsYSByYXRoZXIgdGhhbiBkZXJpdmVkIGZyb20gc3VtbWFyeSBldmlkZW5jZS5cclxuICAgKi9cclxuICBQcmVkaWN0ZWRSaXNrOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJhdGUtcmF0aW86IEEgdHlwZSBvZiByZWxhdGl2ZSBlZmZlY3QgZXN0aW1hdGUgdGhhdCBjb21wYXJlcyByYXRlcyBvdmVyIHRpbWUgKGVnIGV2ZW50cyBwZXIgcGVyc29uLXllYXJzKS5cclxuICAgKi9cclxuICBJbmNpZGVuY2VSYXRlUmF0aW86IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBhIHN0YXRpc3RpYywgZS5nLiByZWxhdGl2ZSByaXNrIG9yIG1lYW5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdGF0aXN0aWNUeXBlQ29kaW5nczpTdGF0aXN0aWNUeXBlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiAwMDAwMTAwOiBDb21wdXRlZCBieSBmb3JtaW5nIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG1lYW5zLCBkaXZpZGVkIGJ5IGFuIGVzdGltYXRlIG9mIHRoZSB3aXRoaW4tZ3JvdXAgc3RhbmRhcmQgZGV2aWF0aW9uLiBJdCBpcyB1c2VkIHRvIHByb3ZpZGUgYW4gZXN0aW1hdGF0aW9uIG9mIHRoZSBlZmZlY3Qgc2l6ZSBiZXR3ZWVuIHR3byB0cmVhdG1lbnRzIHdoZW4gdGhlIHByZWRpY3RvciAoaW5kZXBlbmRlbnQgdmFyaWFibGUpIGlzIGNhdGVnb3JpY2FsIGFuZCB0aGUgcmVzcG9uc2UoZGVwZW5kZW50KSB2YXJpYWJsZSBpcyBjb250aW51b3VzXHJcbiAgICovXHJcbiAgU3RhbmRhcmRpemVkTWVhbkRpZmZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiU3RhbmRhcmRpemVkIE1lYW4gRGlmZmVyZW5jZVwiLFxyXG4gICAgY29kZTogXCIwMDAwMTAwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMDAwMDMwMTogVGhlIHN0cmVuZ3RoIG9mIGNvcnJlbGF0aW9uIGJldHdlZW4gYSBzZXQgKDIgb3IgbW9yZSkgb2YgcmFuZG9tIHZhcmlhYmxlcy4gVGhlIGNvdmFyaWFuY2UgaXMgb2J0YWluZWQgYnkgZm9ybWluZzogY292KHgseSk9ZShbeC1lKHgpXVt5LWUoeSldIHdoZXJlIGUoeCksIGUoeSkgaXMgdGhlIGV4cGVjdGVkIHZhbHVlIChtZWFuKSBvZiB2YXJpYWJsZSB4IGFuZCB5IHJlc3BlY3RpdmVseS4gQ292YXJpYW5jZSBpcyBzeW1tZXRyaWMgc28gY292KHgseSk9Y292KHkseCkuIFRoZSBjb3ZhcmlhbmNlIGlzIHVzZWZ1bGwgd2hlbiBsb29raW5nIGF0IHRoZSB2YXJpYW5jZSBvZiB0aGUgc3VtIG9mIHRoZSAyIHJhbmRvbSB2YXJpYWJsZXMgc2luY2U6IHZhcih4K3kpID0gdmFyKHgpICt2YXIoeSkgKzJjb3YoeCx5KSB0aGUgY292YXJpYW5jZSBjb3YoeCx5KSBpcyB1c2VkIHRvIG9idGFpbiB0aGUgY29lZmZpY2llbnQgb2YgY29ycmVsYXRpb24gY29yKHgseSkgYnkgbm9ybWFsaXppbmcgKGRpdmlkaW5nKSBjb3YoeCx5KSBidXQgdGhlIHByb2R1Y3Qgb2YgdGhlIHN0YW5kYXJkIGRldmlhdGlvbnMgb2YgeCBhbmQgeS5cclxuICAgKi9cclxuICBDb3ZhcmlhbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvdmFyaWFuY2VcIixcclxuICAgIGNvZGU6IFwiMDAwMDMwMVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIDAwMDA0MjQ6IERpZmZlcmVuY2UgYmV0d2VlbiB0aGUgb2JzZXJ2ZWQgcmlza3MgKHByb3BvcnRpb25zIG9mIGluZGl2aWR1YWxzIHdpdGggdGhlIG91dGNvbWUgb2YgaW50ZXJlc3QpIGluIHRoZSB0d28gZ3JvdXBzLiBUaGUgcmlzayBkaWZmZXJlbmNlIGlzIHN0cmFpZ2h0Zm9yd2FyZCB0byBpbnRlcnByZXQ6IGl0IGRlc2NyaWJlcyB0aGUgYWN0dWFsIGRpZmZlcmVuY2UgaW4gdGhlIG9ic2VydmVkIHJpc2sgb2YgZXZlbnRzIGJldHdlZW4gZXhwZXJpbWVudGFsIGFuZCBjb250cm9sIGludGVydmVudGlvbnMuXHJcbiAgICovXHJcbiAgUmlza0RpZmZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiUmlzayBEaWZmZXJlbmNlXCIsXHJcbiAgICBjb2RlOiBcIjAwMDA0MjRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiAwMDAwNDU3OiBUaGUgbWVhbiBkaWZmZXJlbmNlLCBvciBkaWZmZXJlbmNlIGluIG1lYW5zLCBtZWFzdXJlcyB0aGUgYWJzb2x1dGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBtZWFuIHZhbHVlIGluIHR3byBkaWZmZXJlbnQgZ3JvdXBzLlxyXG4gICAqL1xyXG4gIE1lYW5EaWZmZXJlbmNlOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1lYW4gRGlmZmVyZW5jZVwiLFxyXG4gICAgY29kZTogXCIwMDAwNDU3XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogMDAwMDU2NTogR2VuZXJhdGVkIGJ5IGEgdHlwZSBvZiBkYXRhIHRyYW5zZm9ybWF0aW9uIGNhbGxlZCBhIHJlZ3Jlc3Npb24sIHdoaWNoIGFpbXMgdG8gbW9kZWwgYSByZXNwb25zZSB2YXJpYWJsZSBieSBleHByZXNzaW9uIHRoZSBwcmVkaWN0b3IgdmFyaWFibGVzIGFzIHBhcnQgb2YgYSBmdW5jdGlvbiB3aGVyZSB2YXJpYWJsZSB0ZXJtcyBhcmUgbW9kaWZpZWQgYnkgYSBudW1iZXIuIEEgcmVncmVzc2lvbiBjb2VmZmljaWVudCBpcyBvbmUgc3VjaCBudW1iZXIuXHJcbiAgICovXHJcbiAgUmVncmVzc2lvbkNvZWZmaWNpZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlZ3Jlc3Npb24gQ29lZmZpY2llbnRcIixcclxuICAgIGNvZGU6IFwiMDAwMDU2NVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGFic29sdXRlLU1lZGlhbkRpZmY6IENvbXB1dGVkIGJ5IGZvcm1pbmcgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gbWVkaWFucy5cclxuICAgKi9cclxuICBBYnNvbHV0ZU1lZGlhbkRpZmZlcmVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiQWJzb2x1dGUgTWVkaWFuIERpZmZlcmVuY2VcIixcclxuICAgIGNvZGU6IFwiYWJzb2x1dGUtTWVkaWFuRGlmZlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEMxNjcyNjogVGhlIHJlbGF0aXZlIGZyZXF1ZW5jeSBvZiBvY2N1cnJlbmNlIG9mIHNvbWV0aGluZy5cclxuICAgKi9cclxuICBJbmNpZGVuY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiSW5jaWRlbmNlXCIsXHJcbiAgICBjb2RlOiBcIkMxNjcyNlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEMxNjkzMjogVGhlIHJhdGlvIG9mIHRoZSBvZGRzIG9mIGFuIGV2ZW50IG9jY3VycmluZyBpbiBvbmUgZ3JvdXAgdG8gdGhlIG9kZHMgb2YgaXQgb2NjdXJyaW5nIGluIGFub3RoZXIgZ3JvdXAsIG9yIHRvIGEgc2FtcGxlLWJhc2VkIGVzdGltYXRlIG9mIHRoYXQgcmF0aW8uXHJcbiAgICovXHJcbiAgT2Rkc1JhdGlvOiB7XHJcbiAgICBkaXNwbGF5OiBcIk9kZHMgUmF0aW9cIixcclxuICAgIGNvZGU6IFwiQzE2OTMyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQzE3MDEwOiBUaGUgcmF0aW8gKGZvciBhIGdpdmVuIHRpbWUgcGVyaW9kKSBvZiB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIGEgZGlzZWFzZSBvciBldmVudCB0byB0aGUgbnVtYmVyIG9mIHVuaXRzIGF0IHJpc2sgaW4gdGhlIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgUHJldmFsZW5jZToge1xyXG4gICAgZGlzcGxheTogXCJQcmV2YWxlbmNlXCIsXHJcbiAgICBjb2RlOiBcIkMxNzAxMFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEMyNTQ2MzogVGhlIG51bWJlciBvciBhbW91bnQgb2Ygc29tZXRoaW5nXHJcbiAgICovXHJcbiAgQ291bnQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ291bnRcIixcclxuICAgIGNvZGU6IFwiQzI1NDYzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQzI1NTY0OiBUaGUgbGFyZ2VzdCBwb3NzaWJsZSBxdWFudGl0eSBvciBkZWdyZWUuXHJcbiAgICovXHJcbiAgTWF4aW11bToge1xyXG4gICAgZGlzcGxheTogXCJNYXhpbXVtXCIsXHJcbiAgICBjb2RlOiBcIkMyNTU2NFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEMyNTU3MDogVGhlIHNtYWxsZXN0IHBvc3NpYmxlIHF1YW50aXR5LlxyXG4gICAqL1xyXG4gIE1pbmltdW06IHtcclxuICAgIGRpc3BsYXk6IFwiTWluaW11bVwiLFxyXG4gICAgY29kZTogXCJDMjU1NzBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDMjgwMDc6IFRoZSB2YWx1ZSB3aGljaCBoYXMgYW4gZXF1YWwgbnVtYmVyIG9mIHZhbHVlcyBncmVhdGVyIGFuZCBsZXNzIHRoYW4gaXQuXHJcbiAgICovXHJcbiAgTWVkaWFuOiB7XHJcbiAgICBkaXNwbGF5OiBcIk1lZGlhblwiLFxyXG4gICAgY29kZTogXCJDMjgwMDdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDNDQyNTY6IFF1b3RpZW50IG9mIHF1YW50aXRpZXMgb2YgdGhlIHNhbWUga2luZCBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aGluIHRoZSBzYW1lIHN5c3RlbS4gW1VzZSBmb3IgdW5pdmFyaWF0ZSBvdXRjb21lcyB3aXRoaW4gYW4gaW5kaXZpZHVhbC5dXHJcbiAgICovXHJcbiAgUHJvcG9ydGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJQcm9wb3J0aW9uXCIsXHJcbiAgICBjb2RlOiBcIkM0NDI1NlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3RhdGlzdGljLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEM1MzMxOTogVGhlIHN1bSBvZiBhIHNldCBvZiB2YWx1ZXMgZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHZhbHVlcyBpbiB0aGUgc2V0LlxyXG4gICAqL1xyXG4gIE1lYW46IHtcclxuICAgIGRpc3BsYXk6IFwiTWVhblwiLFxyXG4gICAgY29kZTogXCJDNTMzMTlcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDNjUxNzE6IEEgZGlzdHJpYnV0aW9uLWZyZWUgYW5hbG9nIG9mIGNvcnJlbGF0aW9uIGFuYWx5c2lzLiBMaWtlIHJlZ3Jlc3Npb24sIGl0IGNhbiBiZSBhcHBsaWVkIHRvIGNvbXBhcmUgdHdvIGluZGVwZW5kZW50IHJhbmRvbSB2YXJpYWJsZXMsIGVhY2ggYXQgc2V2ZXJhbCBsZXZlbHMgKHdoaWNoIG1heSBiZSBkaXNjcmV0ZSBvciBjb250aW51b3VzKS4gVW5saWtlIHJlZ3Jlc3Npb24sIFNwZWFybWFuJ3MgcmFuayBjb3JyZWxhdGlvbiB3b3JrcyBvbiByYW5rZWQgKHJlbGF0aXZlKSBkYXRhLCByYXRoZXIgdGhhbiBkaXJlY3RseSBvbiB0aGUgZGF0YSBpdHNlbGYuXHJcbiAgICovXHJcbiAgU3BlYXJtYW5SYW5rT3JkZXJDb3JyZWxhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJTcGVhcm1hbiBSYW5rLU9yZGVyIENvcnJlbGF0aW9uwqBcIixcclxuICAgIGNvZGU6IFwiQzY1MTcxXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQzY1MTcyOiBBIG1lYXN1cmUgb2YgdGhlIGNvcnJlbGF0aW9uIG9mIHR3byB2YXJpYWJsZXMgWCBhbmQgWSBtZWFzdXJlZCBvbiB0aGUgc2FtZSBvYmplY3Qgb3Igb3JnYW5pc20sIHRoYXQgaXMsIGEgbWVhc3VyZSBvZiB0aGUgdGVuZGVuY3kgb2YgdGhlIHZhcmlhYmxlcyB0byBpbmNyZWFzZSBvciBkZWNyZWFzZSB0b2dldGhlci4gSXQgaXMgZGVmaW5lZCBhcyB0aGUgc3VtIG9mIHRoZSBwcm9kdWN0cyBvZiB0aGUgc3RhbmRhcmQgc2NvcmVzIG9mIHRoZSB0d28gbWVhc3VyZXMgZGl2aWRlZCBieSB0aGUgZGVncmVlcyBvZiBmcmVlZG9tLlxyXG4gICAqL1xyXG4gIFBlYXJzb25Db3JyZWxhdGlvbkNvZWZmaWNpZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlBlYXJzb24gQ29ycmVsYXRpb24gQ29lZmZpY2llbnRcIixcclxuICAgIGNvZGU6IFwiQzY1MTcyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zdGF0aXN0aWMtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQzkzMTUwOiBBIG1lYXN1cmUgb2YgaG93IG9mdGVuIGEgcGFydGljdWxhciBldmVudCBoYXBwZW5zIGluIG9uZSBncm91cCBjb21wYXJlZCB0byBob3cgb2Z0ZW4gaXQgaGFwcGVucyBpbiBhbm90aGVyIGdyb3VwLCBvdmVyIHRpbWUuIEluIGNhbmNlciByZXNlYXJjaCwgaGF6YXJkIHJhdGlvcyBhcmUgb2Z0ZW4gdXNlZCBpbiBjbGluaWNhbCB0cmlhbHMgdG8gbWVhc3VyZSBzdXJ2aXZhbCBhdCBhbnkgcG9pbnQgaW4gdGltZSBpbiBhIGdyb3VwIG9mIHBhdGllbnRzIHdobyBoYXZlIGJlZW4gZ2l2ZW4gYSBzcGVjaWZpYyB0cmVhdG1lbnQgY29tcGFyZWQgdG8gYSBjb250cm9sIGdyb3VwIGdpdmVuIGFub3RoZXIgdHJlYXRtZW50IG9yIGEgcGxhY2Viby4gQSBoYXphcmQgcmF0aW8gb2Ygb25lIG1lYW5zIHRoYXQgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBpbiBzdXJ2aXZhbCBiZXR3ZWVuIHRoZSB0d28gZ3JvdXBzLiBBIGhhemFyZCByYXRpbyBvZiBncmVhdGVyIHRoYW4gb25lIG9yIGxlc3MgdGhhbiBvbmUgbWVhbnMgdGhhdCBzdXJ2aXZhbCB3YXMgYmV0dGVyIGluIG9uZSBvZiB0aGUgZ3JvdXBzLlxyXG4gICAqL1xyXG4gIEhhemFyZFJhdGlvOiB7XHJcbiAgICBkaXNwbGF5OiBcIkhhemFyZCBSYXRpb1wiLFxyXG4gICAgY29kZTogXCJDOTMxNTBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDOTMxNTI6IMKgQSBtZWFzdXJlIG9mIHRoZSByaXNrIG9mIGEgY2VydGFpbiBldmVudCBoYXBwZW5pbmcgaW4gb25lIGdyb3VwIGNvbXBhcmVkIHRvIHRoZSByaXNrIG9mIHRoZSBzYW1lIGV2ZW50IGhhcHBlbmluZyBpbiBhbm90aGVyIGdyb3VwLiBJbiBjYW5jZXIgcmVzZWFyY2gsIHJpc2sgcmF0aW9zIGFyZSB1c2VkIGluIHByb3NwZWN0aXZlIChmb3J3YXJkIGxvb2tpbmcpIHN0dWRpZXMsIHN1Y2ggYXMgY29ob3J0IHN0dWRpZXMgYW5kIGNsaW5pY2FsIHRyaWFscy4gQSByaXNrIHJhdGlvIG9mIG9uZSBtZWFucyB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGdyb3VwcyBpbiB0ZXJtcyBvZiB0aGVpciByaXNrIG9mIGNhbmNlciwgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhleSB3ZXJlIGV4cG9zZWQgdG8gYSBjZXJ0YWluIHN1YnN0YW5jZSBvciBmYWN0b3IsIG9yIGhvdyB0aGV5IHJlc3BvbmRlZCB0byB0d28gdHJlYXRtZW50cyBiZWluZyBjb21wYXJlZC4gQSByaXNrIHJhdGlvIG9mIGdyZWF0ZXIgdGhhbiBvbmUgb3Igb2YgbGVzcyB0aGFuIG9uZSB1c3VhbGx5IG1lYW5zIHRoYXQgYmVpbmcgZXhwb3NlZCB0byBhIGNlcnRhaW4gc3Vic3RhbmNlIG9yIGZhY3RvciBlaXRoZXIgaW5jcmVhc2VzIChyaXNrIHJhdGlvIGdyZWF0ZXIgdGhhbiBvbmUpIG9yIGRlY3JlYXNlcyAocmlzayByYXRpbyBsZXNzIHRoYW4gb25lKSB0aGUgcmlzayBvZiBjYW5jZXIsIG9yIHRoYXQgdGhlIHRyZWF0bWVudHMgYmVpbmcgY29tcGFyZWQgZG8gbm90IGhhdmUgdGhlIHNhbWUgZWZmZWN0cy5cclxuICAgKi9cclxuICBSZWxhdGl2ZVJpc2s6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVsYXRpdmUgUmlza1wiLFxyXG4gICAgY29kZTogXCJDOTMxNTJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkZXNjcmlwdGl2ZTogRGVzY3JpcHRpdmUgbWVhc3VyZSByZXBvcnRlZCBhcyBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgRGVzY3JpcHRpdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiRGVzY3JpcHRpdmVcIixcclxuICAgIGNvZGU6IFwiZGVzY3JpcHRpdmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmVkaWN0ZWRSaXNrOiBBIHNwZWNpYWwgdXNlIGNhc2Ugd2hlcmUgdGhlIHByb3BvcnRpb24gaXMgZGVyaXZlZCBmcm9tIGEgZm9ybXVsYSByYXRoZXIgdGhhbiBkZXJpdmVkIGZyb20gc3VtbWFyeSBldmlkZW5jZS5cclxuICAgKi9cclxuICBQcmVkaWN0ZWRSaXNrOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByZWRpY3RlZCBSaXNrXCIsXHJcbiAgICBjb2RlOiBcInByZWRpY3RlZFJpc2tcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByYXRlLXJhdGlvOiBBIHR5cGUgb2YgcmVsYXRpdmUgZWZmZWN0IGVzdGltYXRlIHRoYXQgY29tcGFyZXMgcmF0ZXMgb3ZlciB0aW1lIChlZyBldmVudHMgcGVyIHBlcnNvbi15ZWFycykuXHJcbiAgICovXHJcbiAgSW5jaWRlbmNlUmF0ZVJhdGlvOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluY2lkZW5jZSBSYXRlIFJhdGlvXCIsXHJcbiAgICBjb2RlOiBcInJhdGUtcmF0aW9cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3N0YXRpc3RpYy10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19