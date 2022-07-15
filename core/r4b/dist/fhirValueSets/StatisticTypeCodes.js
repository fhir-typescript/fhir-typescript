// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/statistic-type|4.3.0
/**
 * The type of a statistic, e.g. relative risk or mean
 */
export const StatisticTypeCodes = {
    /**
     * 0000100: Computed by forming the difference between two means, divided by an estimate of the within-group standard deviation. It is used to provide an estimatation of the effect size between two treatments when the predictor (independent variable) is categorical and the response(dependent) variable is continuous
     */
    StandardizedMeanDifference: "0000100",
    /**
     * 0000301: The strength of correlation between a set (2 or more) of random variables. The covariance is obtained by forming: cov(x,y)=e([x-e(x)][y-e(y)] where e(x), e(y) is the expected value (mean) of variable x and y respectively. Covariance is symmetric so cov(x,y)=cov(y,x). The covariance is usefull when looking at the variance of the sum of the 2 random variables since: var(x+y) = var(x) +var(y) +2cov(x,y) the covariance cov(x,y) is used to obtain the coefficient of correlation cor(x,y) by normalizing (dividing) cov(x,y) but the product of the standard deviations of x and y.
     */
    Covariance: "0000301",
    /**
     * 0000424: Difference between the observed risks (proportions of individuals with the outcome of interest) in the two groups. The risk difference is straightforward to interpret: it describes the actual difference in the observed risk of events between experimental and control interventions.
     */
    RiskDifference: "0000424",
    /**
     * 0000457: The mean difference, or difference in means, measures the absolute difference between the mean value in two different groups.
     */
    MeanDifference: "0000457",
    /**
     * 0000565: Generated by a type of data transformation called a regression, which aims to model a response variable by expression the predictor variables as part of a function where variable terms are modified by a number. A regression coefficient is one such number.
     */
    RegressionCoefficient: "0000565",
    /**
     * absolute-MedianDiff: Computed by forming the difference between two medians.
     */
    AbsoluteMedianDifference: "absolute-MedianDiff",
    /**
     * C16726: The relative frequency of occurrence of something.
     */
    Incidence: "C16726",
    /**
     * C16932: The ratio of the odds of an event occurring in one group to the odds of it occurring in another group, or to a sample-based estimate of that ratio.
     */
    OddsRatio: "C16932",
    /**
     * C17010: The ratio (for a given time period) of the number of occurrences of a disease or event to the number of units at risk in the population.
     */
    Prevalence: "C17010",
    /**
     * C25463: The number or amount of something
     */
    Count: "C25463",
    /**
     * C25564: The largest possible quantity or degree.
     */
    Maximum: "C25564",
    /**
     * C25570: The smallest possible quantity.
     */
    Minimum: "C25570",
    /**
     * C28007: The value which has an equal number of values greater and less than it.
     */
    Median: "C28007",
    /**
     * C44256: Quotient of quantities of the same kind for different components within the same system. [Use for univariate outcomes within an individual.]
     */
    Proportion: "C44256",
    /**
     * C53319: The sum of a set of values divided by the number of values in the set.
     */
    Mean: "C53319",
    /**
     * C65171: A distribution-free analog of correlation analysis. Like regression, it can be applied to compare two independent random variables, each at several levels (which may be discrete or continuous). Unlike regression, Spearman's rank correlation works on ranked (relative) data, rather than directly on the data itself.
     */
    SpearmanRankOrderCorrelation: "C65171",
    /**
     * C65172: A measure of the correlation of two variables X and Y measured on the same object or organism, that is, a measure of the tendency of the variables to increase or decrease together. It is defined as the sum of the products of the standard scores of the two measures divided by the degrees of freedom.
     */
    PearsonCorrelationCoefficient: "C65172",
    /**
     * C93150: A measure of how often a particular event happens in one group compared to how often it happens in another group, over time. In cancer research, hazard ratios are often used in clinical trials to measure survival at any point in time in a group of patients who have been given a specific treatment compared to a control group given another treatment or a placebo. A hazard ratio of one means that there is no difference in survival between the two groups. A hazard ratio of greater than one or less than one means that survival was better in one of the groups.
     */
    HazardRatio: "C93150",
    /**
     * C93152:  A measure of the risk of a certain event happening in one group compared to the risk of the same event happening in another group. In cancer research, risk ratios are used in prospective (forward looking) studies, such as cohort studies and clinical trials. A risk ratio of one means there is no difference between two groups in terms of their risk of cancer, based on whether or not they were exposed to a certain substance or factor, or how they responded to two treatments being compared. A risk ratio of greater than one or of less than one usually means that being exposed to a certain substance or factor either increases (risk ratio greater than one) or decreases (risk ratio less than one) the risk of cancer, or that the treatments being compared do not have the same effects.
     */
    RelativeRisk: "C93152",
    /**
     * descriptive: Descriptive measure reported as narrative.
     */
    Descriptive: "descriptive",
    /**
     * predictedRisk: A special use case where the proportion is derived from a formula rather than derived from summary evidence.
     */
    PredictedRisk: "predictedRisk",
    /**
     * rate-ratio: A type of relative effect estimate that compares rates over time (eg events per person-years).
     */
    IncidenceRateRatio: "rate-ratio",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlzdGljVHlwZUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdGF0aXN0aWNUeXBlQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsbUVBQW1FO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCwwQkFBMEIsRUFBRSxTQUFTO0lBQ3JDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLFNBQVM7SUFDckI7O09BRUc7SUFDSCxjQUFjLEVBQUUsU0FBUztJQUN6Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxTQUFTO0lBQ3pCOztPQUVHO0lBQ0gscUJBQXFCLEVBQUUsU0FBUztJQUNoQzs7T0FFRztJQUNILHdCQUF3QixFQUFFLHFCQUFxQjtJQUMvQzs7T0FFRztJQUNILFNBQVMsRUFBRSxRQUFRO0lBQ25COztPQUVHO0lBQ0gsU0FBUyxFQUFFLFFBQVE7SUFDbkI7O09BRUc7SUFDSCxVQUFVLEVBQUUsUUFBUTtJQUNwQjs7T0FFRztJQUNILEtBQUssRUFBRSxRQUFRO0lBQ2Y7O09BRUc7SUFDSCxPQUFPLEVBQUUsUUFBUTtJQUNqQjs7T0FFRztJQUNILE9BQU8sRUFBRSxRQUFRO0lBQ2pCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsUUFBUTtJQUNwQjs7T0FFRztJQUNILElBQUksRUFBRSxRQUFRO0lBQ2Q7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxRQUFRO0lBQ3RDOztPQUVHO0lBQ0gsNkJBQTZCLEVBQUUsUUFBUTtJQUN2Qzs7T0FFRztJQUNILFdBQVcsRUFBRSxRQUFRO0lBQ3JCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLFFBQVE7SUFDdEI7O09BRUc7SUFDSCxXQUFXLEVBQUUsYUFBYTtJQUMxQjs7T0FFRztJQUNILGFBQWEsRUFBRSxlQUFlO0lBQzlCOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsWUFBWTtDQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdGF0aXN0aWMtdHlwZXw0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIGEgc3RhdGlzdGljLCBlLmcuIHJlbGF0aXZlIHJpc2sgb3IgbWVhblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY1R5cGVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiAwMDAwMTAwOiBDb21wdXRlZCBieSBmb3JtaW5nIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG1lYW5zLCBkaXZpZGVkIGJ5IGFuIGVzdGltYXRlIG9mIHRoZSB3aXRoaW4tZ3JvdXAgc3RhbmRhcmQgZGV2aWF0aW9uLiBJdCBpcyB1c2VkIHRvIHByb3ZpZGUgYW4gZXN0aW1hdGF0aW9uIG9mIHRoZSBlZmZlY3Qgc2l6ZSBiZXR3ZWVuIHR3byB0cmVhdG1lbnRzIHdoZW4gdGhlIHByZWRpY3RvciAoaW5kZXBlbmRlbnQgdmFyaWFibGUpIGlzIGNhdGVnb3JpY2FsIGFuZCB0aGUgcmVzcG9uc2UoZGVwZW5kZW50KSB2YXJpYWJsZSBpcyBjb250aW51b3VzXHJcbiAgICovXHJcbiAgU3RhbmRhcmRpemVkTWVhbkRpZmZlcmVuY2U6IFwiMDAwMDEwMFwiLFxyXG4gIC8qKlxyXG4gICAqIDAwMDAzMDE6IFRoZSBzdHJlbmd0aCBvZiBjb3JyZWxhdGlvbiBiZXR3ZWVuIGEgc2V0ICgyIG9yIG1vcmUpIG9mIHJhbmRvbSB2YXJpYWJsZXMuIFRoZSBjb3ZhcmlhbmNlIGlzIG9idGFpbmVkIGJ5IGZvcm1pbmc6IGNvdih4LHkpPWUoW3gtZSh4KV1beS1lKHkpXSB3aGVyZSBlKHgpLCBlKHkpIGlzIHRoZSBleHBlY3RlZCB2YWx1ZSAobWVhbikgb2YgdmFyaWFibGUgeCBhbmQgeSByZXNwZWN0aXZlbHkuIENvdmFyaWFuY2UgaXMgc3ltbWV0cmljIHNvIGNvdih4LHkpPWNvdih5LHgpLiBUaGUgY292YXJpYW5jZSBpcyB1c2VmdWxsIHdoZW4gbG9va2luZyBhdCB0aGUgdmFyaWFuY2Ugb2YgdGhlIHN1bSBvZiB0aGUgMiByYW5kb20gdmFyaWFibGVzIHNpbmNlOiB2YXIoeCt5KSA9IHZhcih4KSArdmFyKHkpICsyY292KHgseSkgdGhlIGNvdmFyaWFuY2UgY292KHgseSkgaXMgdXNlZCB0byBvYnRhaW4gdGhlIGNvZWZmaWNpZW50IG9mIGNvcnJlbGF0aW9uIGNvcih4LHkpIGJ5IG5vcm1hbGl6aW5nIChkaXZpZGluZykgY292KHgseSkgYnV0IHRoZSBwcm9kdWN0IG9mIHRoZSBzdGFuZGFyZCBkZXZpYXRpb25zIG9mIHggYW5kIHkuXHJcbiAgICovXHJcbiAgQ292YXJpYW5jZTogXCIwMDAwMzAxXCIsXHJcbiAgLyoqXHJcbiAgICogMDAwMDQyNDogRGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBvYnNlcnZlZCByaXNrcyAocHJvcG9ydGlvbnMgb2YgaW5kaXZpZHVhbHMgd2l0aCB0aGUgb3V0Y29tZSBvZiBpbnRlcmVzdCkgaW4gdGhlIHR3byBncm91cHMuIFRoZSByaXNrIGRpZmZlcmVuY2UgaXMgc3RyYWlnaHRmb3J3YXJkIHRvIGludGVycHJldDogaXQgZGVzY3JpYmVzIHRoZSBhY3R1YWwgZGlmZmVyZW5jZSBpbiB0aGUgb2JzZXJ2ZWQgcmlzayBvZiBldmVudHMgYmV0d2VlbiBleHBlcmltZW50YWwgYW5kIGNvbnRyb2wgaW50ZXJ2ZW50aW9ucy5cclxuICAgKi9cclxuICBSaXNrRGlmZmVyZW5jZTogXCIwMDAwNDI0XCIsXHJcbiAgLyoqXHJcbiAgICogMDAwMDQ1NzogVGhlIG1lYW4gZGlmZmVyZW5jZSwgb3IgZGlmZmVyZW5jZSBpbiBtZWFucywgbWVhc3VyZXMgdGhlIGFic29sdXRlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbWVhbiB2YWx1ZSBpbiB0d28gZGlmZmVyZW50IGdyb3Vwcy5cclxuICAgKi9cclxuICBNZWFuRGlmZmVyZW5jZTogXCIwMDAwNDU3XCIsXHJcbiAgLyoqXHJcbiAgICogMDAwMDU2NTogR2VuZXJhdGVkIGJ5IGEgdHlwZSBvZiBkYXRhIHRyYW5zZm9ybWF0aW9uIGNhbGxlZCBhIHJlZ3Jlc3Npb24sIHdoaWNoIGFpbXMgdG8gbW9kZWwgYSByZXNwb25zZSB2YXJpYWJsZSBieSBleHByZXNzaW9uIHRoZSBwcmVkaWN0b3IgdmFyaWFibGVzIGFzIHBhcnQgb2YgYSBmdW5jdGlvbiB3aGVyZSB2YXJpYWJsZSB0ZXJtcyBhcmUgbW9kaWZpZWQgYnkgYSBudW1iZXIuIEEgcmVncmVzc2lvbiBjb2VmZmljaWVudCBpcyBvbmUgc3VjaCBudW1iZXIuXHJcbiAgICovXHJcbiAgUmVncmVzc2lvbkNvZWZmaWNpZW50OiBcIjAwMDA1NjVcIixcclxuICAvKipcclxuICAgKiBhYnNvbHV0ZS1NZWRpYW5EaWZmOiBDb21wdXRlZCBieSBmb3JtaW5nIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG1lZGlhbnMuXHJcbiAgICovXHJcbiAgQWJzb2x1dGVNZWRpYW5EaWZmZXJlbmNlOiBcImFic29sdXRlLU1lZGlhbkRpZmZcIixcclxuICAvKipcclxuICAgKiBDMTY3MjY6IFRoZSByZWxhdGl2ZSBmcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzb21ldGhpbmcuXHJcbiAgICovXHJcbiAgSW5jaWRlbmNlOiBcIkMxNjcyNlwiLFxyXG4gIC8qKlxyXG4gICAqIEMxNjkzMjogVGhlIHJhdGlvIG9mIHRoZSBvZGRzIG9mIGFuIGV2ZW50IG9jY3VycmluZyBpbiBvbmUgZ3JvdXAgdG8gdGhlIG9kZHMgb2YgaXQgb2NjdXJyaW5nIGluIGFub3RoZXIgZ3JvdXAsIG9yIHRvIGEgc2FtcGxlLWJhc2VkIGVzdGltYXRlIG9mIHRoYXQgcmF0aW8uXHJcbiAgICovXHJcbiAgT2Rkc1JhdGlvOiBcIkMxNjkzMlwiLFxyXG4gIC8qKlxyXG4gICAqIEMxNzAxMDogVGhlIHJhdGlvIChmb3IgYSBnaXZlbiB0aW1lIHBlcmlvZCkgb2YgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIGRpc2Vhc2Ugb3IgZXZlbnQgdG8gdGhlIG51bWJlciBvZiB1bml0cyBhdCByaXNrIGluIHRoZSBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIFByZXZhbGVuY2U6IFwiQzE3MDEwXCIsXHJcbiAgLyoqXHJcbiAgICogQzI1NDYzOiBUaGUgbnVtYmVyIG9yIGFtb3VudCBvZiBzb21ldGhpbmdcclxuICAgKi9cclxuICBDb3VudDogXCJDMjU0NjNcIixcclxuICAvKipcclxuICAgKiBDMjU1NjQ6IFRoZSBsYXJnZXN0IHBvc3NpYmxlIHF1YW50aXR5IG9yIGRlZ3JlZS5cclxuICAgKi9cclxuICBNYXhpbXVtOiBcIkMyNTU2NFwiLFxyXG4gIC8qKlxyXG4gICAqIEMyNTU3MDogVGhlIHNtYWxsZXN0IHBvc3NpYmxlIHF1YW50aXR5LlxyXG4gICAqL1xyXG4gIE1pbmltdW06IFwiQzI1NTcwXCIsXHJcbiAgLyoqXHJcbiAgICogQzI4MDA3OiBUaGUgdmFsdWUgd2hpY2ggaGFzIGFuIGVxdWFsIG51bWJlciBvZiB2YWx1ZXMgZ3JlYXRlciBhbmQgbGVzcyB0aGFuIGl0LlxyXG4gICAqL1xyXG4gIE1lZGlhbjogXCJDMjgwMDdcIixcclxuICAvKipcclxuICAgKiBDNDQyNTY6IFF1b3RpZW50IG9mIHF1YW50aXRpZXMgb2YgdGhlIHNhbWUga2luZCBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aGluIHRoZSBzYW1lIHN5c3RlbS4gW1VzZSBmb3IgdW5pdmFyaWF0ZSBvdXRjb21lcyB3aXRoaW4gYW4gaW5kaXZpZHVhbC5dXHJcbiAgICovXHJcbiAgUHJvcG9ydGlvbjogXCJDNDQyNTZcIixcclxuICAvKipcclxuICAgKiBDNTMzMTk6IFRoZSBzdW0gb2YgYSBzZXQgb2YgdmFsdWVzIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB2YWx1ZXMgaW4gdGhlIHNldC5cclxuICAgKi9cclxuICBNZWFuOiBcIkM1MzMxOVwiLFxyXG4gIC8qKlxyXG4gICAqIEM2NTE3MTogQSBkaXN0cmlidXRpb24tZnJlZSBhbmFsb2cgb2YgY29ycmVsYXRpb24gYW5hbHlzaXMuIExpa2UgcmVncmVzc2lvbiwgaXQgY2FuIGJlIGFwcGxpZWQgdG8gY29tcGFyZSB0d28gaW5kZXBlbmRlbnQgcmFuZG9tIHZhcmlhYmxlcywgZWFjaCBhdCBzZXZlcmFsIGxldmVscyAod2hpY2ggbWF5IGJlIGRpc2NyZXRlIG9yIGNvbnRpbnVvdXMpLiBVbmxpa2UgcmVncmVzc2lvbiwgU3BlYXJtYW4ncyByYW5rIGNvcnJlbGF0aW9uIHdvcmtzIG9uIHJhbmtlZCAocmVsYXRpdmUpIGRhdGEsIHJhdGhlciB0aGFuIGRpcmVjdGx5IG9uIHRoZSBkYXRhIGl0c2VsZi5cclxuICAgKi9cclxuICBTcGVhcm1hblJhbmtPcmRlckNvcnJlbGF0aW9uOiBcIkM2NTE3MVwiLFxyXG4gIC8qKlxyXG4gICAqIEM2NTE3MjogQSBtZWFzdXJlIG9mIHRoZSBjb3JyZWxhdGlvbiBvZiB0d28gdmFyaWFibGVzIFggYW5kIFkgbWVhc3VyZWQgb24gdGhlIHNhbWUgb2JqZWN0IG9yIG9yZ2FuaXNtLCB0aGF0IGlzLCBhIG1lYXN1cmUgb2YgdGhlIHRlbmRlbmN5IG9mIHRoZSB2YXJpYWJsZXMgdG8gaW5jcmVhc2Ugb3IgZGVjcmVhc2UgdG9nZXRoZXIuIEl0IGlzIGRlZmluZWQgYXMgdGhlIHN1bSBvZiB0aGUgcHJvZHVjdHMgb2YgdGhlIHN0YW5kYXJkIHNjb3JlcyBvZiB0aGUgdHdvIG1lYXN1cmVzIGRpdmlkZWQgYnkgdGhlIGRlZ3JlZXMgb2YgZnJlZWRvbS5cclxuICAgKi9cclxuICBQZWFyc29uQ29ycmVsYXRpb25Db2VmZmljaWVudDogXCJDNjUxNzJcIixcclxuICAvKipcclxuICAgKiBDOTMxNTA6IEEgbWVhc3VyZSBvZiBob3cgb2Z0ZW4gYSBwYXJ0aWN1bGFyIGV2ZW50IGhhcHBlbnMgaW4gb25lIGdyb3VwIGNvbXBhcmVkIHRvIGhvdyBvZnRlbiBpdCBoYXBwZW5zIGluIGFub3RoZXIgZ3JvdXAsIG92ZXIgdGltZS4gSW4gY2FuY2VyIHJlc2VhcmNoLCBoYXphcmQgcmF0aW9zIGFyZSBvZnRlbiB1c2VkIGluIGNsaW5pY2FsIHRyaWFscyB0byBtZWFzdXJlIHN1cnZpdmFsIGF0IGFueSBwb2ludCBpbiB0aW1lIGluIGEgZ3JvdXAgb2YgcGF0aWVudHMgd2hvIGhhdmUgYmVlbiBnaXZlbiBhIHNwZWNpZmljIHRyZWF0bWVudCBjb21wYXJlZCB0byBhIGNvbnRyb2wgZ3JvdXAgZ2l2ZW4gYW5vdGhlciB0cmVhdG1lbnQgb3IgYSBwbGFjZWJvLiBBIGhhemFyZCByYXRpbyBvZiBvbmUgbWVhbnMgdGhhdCB0aGVyZSBpcyBubyBkaWZmZXJlbmNlIGluIHN1cnZpdmFsIGJldHdlZW4gdGhlIHR3byBncm91cHMuIEEgaGF6YXJkIHJhdGlvIG9mIGdyZWF0ZXIgdGhhbiBvbmUgb3IgbGVzcyB0aGFuIG9uZSBtZWFucyB0aGF0IHN1cnZpdmFsIHdhcyBiZXR0ZXIgaW4gb25lIG9mIHRoZSBncm91cHMuXHJcbiAgICovXHJcbiAgSGF6YXJkUmF0aW86IFwiQzkzMTUwXCIsXHJcbiAgLyoqXHJcbiAgICogQzkzMTUyOiDCoEEgbWVhc3VyZSBvZiB0aGUgcmlzayBvZiBhIGNlcnRhaW4gZXZlbnQgaGFwcGVuaW5nIGluIG9uZSBncm91cCBjb21wYXJlZCB0byB0aGUgcmlzayBvZiB0aGUgc2FtZSBldmVudCBoYXBwZW5pbmcgaW4gYW5vdGhlciBncm91cC4gSW4gY2FuY2VyIHJlc2VhcmNoLCByaXNrIHJhdGlvcyBhcmUgdXNlZCBpbiBwcm9zcGVjdGl2ZSAoZm9yd2FyZCBsb29raW5nKSBzdHVkaWVzLCBzdWNoIGFzIGNvaG9ydCBzdHVkaWVzIGFuZCBjbGluaWNhbCB0cmlhbHMuIEEgcmlzayByYXRpbyBvZiBvbmUgbWVhbnMgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBncm91cHMgaW4gdGVybXMgb2YgdGhlaXIgcmlzayBvZiBjYW5jZXIsIGJhc2VkIG9uIHdoZXRoZXIgb3Igbm90IHRoZXkgd2VyZSBleHBvc2VkIHRvIGEgY2VydGFpbiBzdWJzdGFuY2Ugb3IgZmFjdG9yLCBvciBob3cgdGhleSByZXNwb25kZWQgdG8gdHdvIHRyZWF0bWVudHMgYmVpbmcgY29tcGFyZWQuIEEgcmlzayByYXRpbyBvZiBncmVhdGVyIHRoYW4gb25lIG9yIG9mIGxlc3MgdGhhbiBvbmUgdXN1YWxseSBtZWFucyB0aGF0IGJlaW5nIGV4cG9zZWQgdG8gYSBjZXJ0YWluIHN1YnN0YW5jZSBvciBmYWN0b3IgZWl0aGVyIGluY3JlYXNlcyAocmlzayByYXRpbyBncmVhdGVyIHRoYW4gb25lKSBvciBkZWNyZWFzZXMgKHJpc2sgcmF0aW8gbGVzcyB0aGFuIG9uZSkgdGhlIHJpc2sgb2YgY2FuY2VyLCBvciB0aGF0IHRoZSB0cmVhdG1lbnRzIGJlaW5nIGNvbXBhcmVkIGRvIG5vdCBoYXZlIHRoZSBzYW1lIGVmZmVjdHMuXHJcbiAgICovXHJcbiAgUmVsYXRpdmVSaXNrOiBcIkM5MzE1MlwiLFxyXG4gIC8qKlxyXG4gICAqIGRlc2NyaXB0aXZlOiBEZXNjcmlwdGl2ZSBtZWFzdXJlIHJlcG9ydGVkIGFzIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBEZXNjcmlwdGl2ZTogXCJkZXNjcmlwdGl2ZVwiLFxyXG4gIC8qKlxyXG4gICAqIHByZWRpY3RlZFJpc2s6IEEgc3BlY2lhbCB1c2UgY2FzZSB3aGVyZSB0aGUgcHJvcG9ydGlvbiBpcyBkZXJpdmVkIGZyb20gYSBmb3JtdWxhIHJhdGhlciB0aGFuIGRlcml2ZWQgZnJvbSBzdW1tYXJ5IGV2aWRlbmNlLlxyXG4gICAqL1xyXG4gIFByZWRpY3RlZFJpc2s6IFwicHJlZGljdGVkUmlza1wiLFxyXG4gIC8qKlxyXG4gICAqIHJhdGUtcmF0aW86IEEgdHlwZSBvZiByZWxhdGl2ZSBlZmZlY3QgZXN0aW1hdGUgdGhhdCBjb21wYXJlcyByYXRlcyBvdmVyIHRpbWUgKGVnIGV2ZW50cyBwZXIgcGVyc29uLXllYXJzKS5cclxuICAgKi9cclxuICBJbmNpZGVuY2VSYXRlUmF0aW86IFwicmF0ZS1yYXRpb1wiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIGEgc3RhdGlzdGljLCBlLmcuIHJlbGF0aXZlIHJpc2sgb3IgbWVhblxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3RhdGlzdGljVHlwZUNvZGVUeXBlID0gdHlwZW9mIFN0YXRpc3RpY1R5cGVDb2Rlc1trZXlvZiB0eXBlb2YgU3RhdGlzdGljVHlwZUNvZGVzXTtcclxuIl19