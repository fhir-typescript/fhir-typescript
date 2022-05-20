// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/synthesis-type|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Types of combining results from a body of evidence (eg. summary data meta-analysis).
 */
export const SynthesisTypeCodings = {
    /**
     * classification: An approach describing a body of evidence by categorically classifying individual studies (eg 3 studies showed beneft and 2 studied found no effect).
     */
    ClassifcationOfResults: new Coding({
        display: "classifcation of results",
        code: "classification",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
    /**
     * combined-NMA: An composite meta-analysis derived from direct comparisons and indirect comparisons in a network meta-analysis.
     */
    CombinedDirectPlusIndirectNetworkMetaAnalysis: new Coding({
        display: "combined direct plus indirect network meta-analysis",
        code: "combined-NMA",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
    /**
     * indirect-NMA: An indirect meta-analysis derived from 2 or more direct comparisons in a network meta-analysis.
     */
    IndirectNetworkMetaAnalysis: new Coding({
        display: "indirect network meta-analysis",
        code: "indirect-NMA",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
    /**
     * IPD-MA: A meta-analysis of the individual participant data from individual studies or data sets.
     */
    IndividualPatientDataMetaAnalysis: new Coding({
        display: "individual patient data meta-analysis",
        code: "IPD-MA",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
    /**
     * range: A range of results across a body of evidence.
     */
    RangeOfResults: new Coding({
        display: "range of results",
        code: "range",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
    /**
     * std-MA: A meta-analysis of the summary data of estimates from individual studies or data sets.
     */
    SummaryDataMetaAnalysis: new Coding({
        display: "summary data meta-analysis",
        code: "std-MA",
        system: "http://terminology.hl7.org/CodeSystem/synthesis-type",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ludGhlc2lzVHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1N5bnRoZXNpc1R5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLG1FQUFtRTtBQUVuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFFMUM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRztJQUNsQzs7T0FFRztJQUNILHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixNQUFNLEVBQUUsc0RBQXNEO0tBQy9ELENBQUM7SUFDRjs7T0FFRztJQUNILDZDQUE2QyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3hELE9BQU8sRUFBRSxxREFBcUQ7UUFDOUQsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLHNEQUFzRDtLQUMvRCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCwyQkFBMkIsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN0QyxPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsaUNBQWlDLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDNUMsT0FBTyxFQUFFLHVDQUF1QztRQUNoRCxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSxzREFBc0Q7S0FDL0QsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsc0RBQXNEO0tBQy9ELENBQUM7SUFDRjs7T0FFRztJQUNILHVCQUF1QixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xDLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsc0RBQXNEO0tBQy9ELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N5bnRoZXNpcy10eXBlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBvZiBjb21iaW5pbmcgcmVzdWx0cyBmcm9tIGEgYm9keSBvZiBldmlkZW5jZSAoZWcuIHN1bW1hcnkgZGF0YSBtZXRhLWFuYWx5c2lzKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTeW50aGVzaXNUeXBlQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBjbGFzc2lmaWNhdGlvbjogQW4gYXBwcm9hY2ggZGVzY3JpYmluZyBhIGJvZHkgb2YgZXZpZGVuY2UgYnkgY2F0ZWdvcmljYWxseSBjbGFzc2lmeWluZyBpbmRpdmlkdWFsIHN0dWRpZXMgKGVnIDMgc3R1ZGllcyBzaG93ZWQgYmVuZWZ0IGFuZCAyIHN0dWRpZWQgZm91bmQgbm8gZWZmZWN0KS5cclxuICAgKi9cclxuICBDbGFzc2lmY2F0aW9uT2ZSZXN1bHRzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiY2xhc3NpZmNhdGlvbiBvZiByZXN1bHRzXCIsXHJcbiAgICBjb2RlOiBcImNsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zeW50aGVzaXMtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGNvbWJpbmVkLU5NQTogQW4gY29tcG9zaXRlIG1ldGEtYW5hbHlzaXMgZGVyaXZlZCBmcm9tIGRpcmVjdCBjb21wYXJpc29ucyBhbmQgaW5kaXJlY3QgY29tcGFyaXNvbnMgaW4gYSBuZXR3b3JrIG1ldGEtYW5hbHlzaXMuXHJcbiAgICovXHJcbiAgQ29tYmluZWREaXJlY3RQbHVzSW5kaXJlY3ROZXR3b3JrTWV0YUFuYWx5c2lzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiY29tYmluZWQgZGlyZWN0IHBsdXMgaW5kaXJlY3QgbmV0d29yayBtZXRhLWFuYWx5c2lzXCIsXHJcbiAgICBjb2RlOiBcImNvbWJpbmVkLU5NQVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3ludGhlc2lzLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBpbmRpcmVjdC1OTUE6IEFuIGluZGlyZWN0IG1ldGEtYW5hbHlzaXMgZGVyaXZlZCBmcm9tIDIgb3IgbW9yZSBkaXJlY3QgY29tcGFyaXNvbnMgaW4gYSBuZXR3b3JrIG1ldGEtYW5hbHlzaXMuXHJcbiAgICovXHJcbiAgSW5kaXJlY3ROZXR3b3JrTWV0YUFuYWx5c2lzOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiaW5kaXJlY3QgbmV0d29yayBtZXRhLWFuYWx5c2lzXCIsXHJcbiAgICBjb2RlOiBcImluZGlyZWN0LU5NQVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3ludGhlc2lzLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBJUEQtTUE6IEEgbWV0YS1hbmFseXNpcyBvZiB0aGUgaW5kaXZpZHVhbCBwYXJ0aWNpcGFudCBkYXRhIGZyb20gaW5kaXZpZHVhbCBzdHVkaWVzIG9yIGRhdGEgc2V0cy5cclxuICAgKi9cclxuICBJbmRpdmlkdWFsUGF0aWVudERhdGFNZXRhQW5hbHlzaXM6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJpbmRpdmlkdWFsIHBhdGllbnQgZGF0YSBtZXRhLWFuYWx5c2lzXCIsXHJcbiAgICBjb2RlOiBcIklQRC1NQVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3ludGhlc2lzLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiByYW5nZTogQSByYW5nZSBvZiByZXN1bHRzIGFjcm9zcyBhIGJvZHkgb2YgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgUmFuZ2VPZlJlc3VsdHM6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJyYW5nZSBvZiByZXN1bHRzXCIsXHJcbiAgICBjb2RlOiBcInJhbmdlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9zeW50aGVzaXMtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHN0ZC1NQTogQSBtZXRhLWFuYWx5c2lzIG9mIHRoZSBzdW1tYXJ5IGRhdGEgb2YgZXN0aW1hdGVzIGZyb20gaW5kaXZpZHVhbCBzdHVkaWVzIG9yIGRhdGEgc2V0cy5cclxuICAgKi9cclxuICBTdW1tYXJ5RGF0YU1ldGFBbmFseXNpczogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInN1bW1hcnkgZGF0YSBtZXRhLWFuYWx5c2lzXCIsXHJcbiAgICBjb2RlOiBcInN0ZC1NQVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vc3ludGhlc2lzLXR5cGVcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUeXBlcyBvZiBjb21iaW5pbmcgcmVzdWx0cyBmcm9tIGEgYm9keSBvZiBldmlkZW5jZSAoZWcuIHN1bW1hcnkgZGF0YSBtZXRhLWFuYWx5c2lzKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5bnRoZXNpc1R5cGVDb2RpbmdUeXBlID0gdHlwZW9mIFN5bnRoZXNpc1R5cGVDb2RpbmdzO1xyXG4iXX0=