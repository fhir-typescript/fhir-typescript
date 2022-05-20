// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/group-measure|4.0.1
/**
 * Possible group measure aggregates (E.g. Mean, Median).
 */
export const GroupMeasureCodes = {
    /**
     * mean: Aggregated using Mean of participant values.
     */
    Mean: "mean",
    /**
     * mean-of-mean: Aggregated using Mean of study mean values.
     */
    MeanOfStudyMeans: "mean-of-mean",
    /**
     * mean-of-median: Aggregated using Mean of study median values.
     */
    MeanOfStudyMedins: "mean-of-median",
    /**
     * median: Aggregated using Median of participant values.
     */
    Median: "median",
    /**
     * median-of-mean: Aggregated using Median of study mean values.
     */
    MedianOfStudyMeans: "median-of-mean",
    /**
     * median-of-median: Aggregated using Median of study median values.
     */
    MedianOfStudyMedians: "median-of-median",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZWFzdXJlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0dyb3VwTWVhc3VyZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGtFQUFrRTtBQUVsRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHO0lBQy9COztPQUVHO0lBQ0gsSUFBSSxFQUFFLE1BQU07SUFDWjs7T0FFRztJQUNILGdCQUFnQixFQUFFLGNBQWM7SUFDaEM7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxnQkFBZ0I7SUFDbkM7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQzs7T0FFRztJQUNILG9CQUFvQixFQUFFLGtCQUFrQjtDQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2dyb3VwLW1lYXN1cmV8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBncm91cCBtZWFzdXJlIGFnZ3JlZ2F0ZXMgKEUuZy4gTWVhbiwgTWVkaWFuKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBHcm91cE1lYXN1cmVDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBtZWFuOiBBZ2dyZWdhdGVkIHVzaW5nIE1lYW4gb2YgcGFydGljaXBhbnQgdmFsdWVzLlxyXG4gICAqL1xyXG4gIE1lYW46IFwibWVhblwiLFxyXG4gIC8qKlxyXG4gICAqIG1lYW4tb2YtbWVhbjogQWdncmVnYXRlZCB1c2luZyBNZWFuIG9mIHN0dWR5IG1lYW4gdmFsdWVzLlxyXG4gICAqL1xyXG4gIE1lYW5PZlN0dWR5TWVhbnM6IFwibWVhbi1vZi1tZWFuXCIsXHJcbiAgLyoqXHJcbiAgICogbWVhbi1vZi1tZWRpYW46IEFnZ3JlZ2F0ZWQgdXNpbmcgTWVhbiBvZiBzdHVkeSBtZWRpYW4gdmFsdWVzLlxyXG4gICAqL1xyXG4gIE1lYW5PZlN0dWR5TWVkaW5zOiBcIm1lYW4tb2YtbWVkaWFuXCIsXHJcbiAgLyoqXHJcbiAgICogbWVkaWFuOiBBZ2dyZWdhdGVkIHVzaW5nIE1lZGlhbiBvZiBwYXJ0aWNpcGFudCB2YWx1ZXMuXHJcbiAgICovXHJcbiAgTWVkaWFuOiBcIm1lZGlhblwiLFxyXG4gIC8qKlxyXG4gICAqIG1lZGlhbi1vZi1tZWFuOiBBZ2dyZWdhdGVkIHVzaW5nIE1lZGlhbiBvZiBzdHVkeSBtZWFuIHZhbHVlcy5cclxuICAgKi9cclxuICBNZWRpYW5PZlN0dWR5TWVhbnM6IFwibWVkaWFuLW9mLW1lYW5cIixcclxuICAvKipcclxuICAgKiBtZWRpYW4tb2YtbWVkaWFuOiBBZ2dyZWdhdGVkIHVzaW5nIE1lZGlhbiBvZiBzdHVkeSBtZWRpYW4gdmFsdWVzLlxyXG4gICAqL1xyXG4gIE1lZGlhbk9mU3R1ZHlNZWRpYW5zOiBcIm1lZGlhbi1vZi1tZWRpYW5cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSBncm91cCBtZWFzdXJlIGFnZ3JlZ2F0ZXMgKEUuZy4gTWVhbiwgTWVkaWFuKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyb3VwTWVhc3VyZUNvZGVUeXBlID0gdHlwZW9mIEdyb3VwTWVhc3VyZUNvZGVzW2tleW9mIHR5cGVvZiBHcm91cE1lYXN1cmVDb2Rlc107XHJcbiJdfQ==