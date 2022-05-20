// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/effect-estimate-type|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Whether the effect estimate is an absolute effect estimate (absolute difference) or a relative effect estimate (relative difference), and the specific type of effect estimate (eg relative risk or median difference).
 */
export const EffectEstimateTypeCodings = {
    /**
     * absolute-ARD: absolute risk difference (a type of absolute effect estimate).
     */
    AbsoluteRiskDifference: new Coding({
        display: "absolute risk difference",
        code: "absolute-ARD",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-MeanDiff: mean difference (a type of absolute effect estimate).
     */
    MeanDifference: new Coding({
        display: "mean difference",
        code: "absolute-MeanDiff",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-MedianDiff: median difference (a type of absolute effect estimate).
     */
    MedianDifference: new Coding({
        display: "median difference",
        code: "absolute-MedianDiff",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * absolute-SMD: standardized mean difference (a type of absolute effect estimate).
     */
    StandardizedMeanDifference: new Coding({
        display: "standardized mean difference",
        code: "absolute-SMD",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-HR: hazard ratio (a type of relative effect estimate).
     */
    HazardRatio: new Coding({
        display: "hazard ratio",
        code: "relative-HR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-OR: odds ratio (a type of relative effect estimate).
     */
    OddsRatio: new Coding({
        display: "odds ratio",
        code: "relative-OR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
    /**
     * relative-RR: relative risk (a type of relative effect estimate).
     */
    RelativeRisk: new Coding({
        display: "relative risk",
        code: "relative-RR",
        system: "http://terminology.hl7.org/CodeSystem/effect-estimate-type",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWZmZWN0RXN0aW1hdGVUeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRWZmZWN0RXN0aW1hdGVUeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx5RUFBeUU7QUFFekUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUc7SUFDdkM7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNqQyxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckUsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILGdCQUFnQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzNCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFLENBQUM7SUFDRjs7T0FFRztJQUNILDBCQUEwQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3JDLE9BQU8sRUFBRSw4QkFBOEI7UUFDdkMsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxXQUFXLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDcEIsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxZQUFZLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDdkIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDREQUE0RDtLQUNyRSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9lZmZlY3QtZXN0aW1hdGUtdHlwZXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogV2hldGhlciB0aGUgZWZmZWN0IGVzdGltYXRlIGlzIGFuIGFic29sdXRlIGVmZmVjdCBlc3RpbWF0ZSAoYWJzb2x1dGUgZGlmZmVyZW5jZSkgb3IgYSByZWxhdGl2ZSBlZmZlY3QgZXN0aW1hdGUgKHJlbGF0aXZlIGRpZmZlcmVuY2UpLCBhbmQgdGhlIHNwZWNpZmljIHR5cGUgb2YgZWZmZWN0IGVzdGltYXRlIChlZyByZWxhdGl2ZSByaXNrIG9yIG1lZGlhbiBkaWZmZXJlbmNlKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFZmZlY3RFc3RpbWF0ZVR5cGVDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFic29sdXRlLUFSRDogYWJzb2x1dGUgcmlzayBkaWZmZXJlbmNlIChhIHR5cGUgb2YgYWJzb2x1dGUgZWZmZWN0IGVzdGltYXRlKS5cclxuICAgKi9cclxuICBBYnNvbHV0ZVJpc2tEaWZmZXJlbmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiYWJzb2x1dGUgcmlzayBkaWZmZXJlbmNlXCIsXHJcbiAgICBjb2RlOiBcImFic29sdXRlLUFSRFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZWZmZWN0LWVzdGltYXRlLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBhYnNvbHV0ZS1NZWFuRGlmZjogbWVhbiBkaWZmZXJlbmNlIChhIHR5cGUgb2YgYWJzb2x1dGUgZWZmZWN0IGVzdGltYXRlKS5cclxuICAgKi9cclxuICBNZWFuRGlmZmVyZW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIm1lYW4gZGlmZmVyZW5jZVwiLFxyXG4gICAgY29kZTogXCJhYnNvbHV0ZS1NZWFuRGlmZlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vZWZmZWN0LWVzdGltYXRlLXR5cGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBhYnNvbHV0ZS1NZWRpYW5EaWZmOiBtZWRpYW4gZGlmZmVyZW5jZSAoYSB0eXBlIG9mIGFic29sdXRlIGVmZmVjdCBlc3RpbWF0ZSkuXHJcbiAgICovXHJcbiAgTWVkaWFuRGlmZmVyZW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIm1lZGlhbiBkaWZmZXJlbmNlXCIsXHJcbiAgICBjb2RlOiBcImFic29sdXRlLU1lZGlhbkRpZmZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2VmZmVjdC1lc3RpbWF0ZS10eXBlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogYWJzb2x1dGUtU01EOiBzdGFuZGFyZGl6ZWQgbWVhbiBkaWZmZXJlbmNlIChhIHR5cGUgb2YgYWJzb2x1dGUgZWZmZWN0IGVzdGltYXRlKS5cclxuICAgKi9cclxuICBTdGFuZGFyZGl6ZWRNZWFuRGlmZmVyZW5jZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcInN0YW5kYXJkaXplZCBtZWFuIGRpZmZlcmVuY2VcIixcclxuICAgIGNvZGU6IFwiYWJzb2x1dGUtU01EXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lZmZlY3QtZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHJlbGF0aXZlLUhSOiBoYXphcmQgcmF0aW8gKGEgdHlwZSBvZiByZWxhdGl2ZSBlZmZlY3QgZXN0aW1hdGUpLlxyXG4gICAqL1xyXG4gIEhhemFyZFJhdGlvOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiaGF6YXJkIHJhdGlvXCIsXHJcbiAgICBjb2RlOiBcInJlbGF0aXZlLUhSXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lZmZlY3QtZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHJlbGF0aXZlLU9SOiBvZGRzIHJhdGlvIChhIHR5cGUgb2YgcmVsYXRpdmUgZWZmZWN0IGVzdGltYXRlKS5cclxuICAgKi9cclxuICBPZGRzUmF0aW86IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJvZGRzIHJhdGlvXCIsXHJcbiAgICBjb2RlOiBcInJlbGF0aXZlLU9SXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lZmZlY3QtZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHJlbGF0aXZlLVJSOiByZWxhdGl2ZSByaXNrIChhIHR5cGUgb2YgcmVsYXRpdmUgZWZmZWN0IGVzdGltYXRlKS5cclxuICAgKi9cclxuICBSZWxhdGl2ZVJpc2s6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJyZWxhdGl2ZSByaXNrXCIsXHJcbiAgICBjb2RlOiBcInJlbGF0aXZlLVJSXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9lZmZlY3QtZXN0aW1hdGUtdHlwZVwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdGhlIGVmZmVjdCBlc3RpbWF0ZSBpcyBhbiBhYnNvbHV0ZSBlZmZlY3QgZXN0aW1hdGUgKGFic29sdXRlIGRpZmZlcmVuY2UpIG9yIGEgcmVsYXRpdmUgZWZmZWN0IGVzdGltYXRlIChyZWxhdGl2ZSBkaWZmZXJlbmNlKSwgYW5kIHRoZSBzcGVjaWZpYyB0eXBlIG9mIGVmZmVjdCBlc3RpbWF0ZSAoZWcgcmVsYXRpdmUgcmlzayBvciBtZWRpYW4gZGlmZmVyZW5jZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFZmZlY3RFc3RpbWF0ZVR5cGVDb2RpbmdUeXBlID0gdHlwZW9mIEVmZmVjdEVzdGltYXRlVHlwZUNvZGluZ3M7XHJcbiJdfQ==