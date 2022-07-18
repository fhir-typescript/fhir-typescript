// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/risk-probability|3.0.2
/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 */
export const RiskProbabilityCodings = {
    /**
     * certain: The specified outcome is effectively guaranteed.
     */
    Certain: {
        display: "Certain",
        code: "certain",
        system: "http://hl7.org/fhir/risk-probability",
    },
    /**
     * high: The specified outcome is more likely to occur than not.
     */
    HighLikelihood: {
        display: "High likelihood",
        code: "high",
        system: "http://hl7.org/fhir/risk-probability",
    },
    /**
     * low: The specified outcome is possible but unlikely.
     */
    LowLikelihood: {
        display: "Low likelihood",
        code: "low",
        system: "http://hl7.org/fhir/risk-probability",
    },
    /**
     * moderate: The specified outcome has a reasonable likelihood of occurrence.
     */
    ModerateLikelihood: {
        display: "Moderate likelihood",
        code: "moderate",
        system: "http://hl7.org/fhir/risk-probability",
    },
    /**
     * negligible: The specified outcome is exceptionally unlikely.
     */
    NegligibleLikelihood: {
        display: "Negligible likelihood",
        code: "negligible",
        system: "http://hl7.org/fhir/risk-probability",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlza1Byb2JhYmlsaXR5Q29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUmlza1Byb2JhYmlsaXR5Q29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxxRUFBcUU7QUE4QnJFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTZCO0lBQzlEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLHNDQUFzQztLQUMvQztJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsS0FBSztRQUNYLE1BQU0sRUFBRSxzQ0FBc0M7S0FDL0M7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLHNDQUFzQztLQUMvQztJQUNEOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUU7UUFDcEIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yaXNrLXByb2JhYmlsaXR5fDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZXMgcmVwcmVzZW50aW5nIHRoZSBsaWtlbGlob29kIG9mIGEgcGFydGljdWxhciBvdXRjb21lIGluIGEgcmlzayBhc3Nlc3NtZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmlza1Byb2JhYmlsaXR5Q29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjZXJ0YWluOiBUaGUgc3BlY2lmaWVkIG91dGNvbWUgaXMgZWZmZWN0aXZlbHkgZ3VhcmFudGVlZC5cclxuICAgKi9cclxuICBDZXJ0YWluOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGhpZ2g6IFRoZSBzcGVjaWZpZWQgb3V0Y29tZSBpcyBtb3JlIGxpa2VseSB0byBvY2N1ciB0aGFuIG5vdC5cclxuICAgKi9cclxuICBIaWdoTGlrZWxpaG9vZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBsb3c6IFRoZSBzcGVjaWZpZWQgb3V0Y29tZSBpcyBwb3NzaWJsZSBidXQgdW5saWtlbHkuXHJcbiAgICovXHJcbiAgTG93TGlrZWxpaG9vZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtb2RlcmF0ZTogVGhlIHNwZWNpZmllZCBvdXRjb21lIGhhcyBhIHJlYXNvbmFibGUgbGlrZWxpaG9vZCBvZiBvY2N1cnJlbmNlLlxyXG4gICAqL1xyXG4gIE1vZGVyYXRlTGlrZWxpaG9vZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBuZWdsaWdpYmxlOiBUaGUgc3BlY2lmaWVkIG91dGNvbWUgaXMgZXhjZXB0aW9uYWxseSB1bmxpa2VseS5cclxuICAgKi9cclxuICBOZWdsaWdpYmxlTGlrZWxpaG9vZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIHJlcHJlc2VudGluZyB0aGUgbGlrZWxpaG9vZCBvZiBhIHBhcnRpY3VsYXIgb3V0Y29tZSBpbiBhIHJpc2sgYXNzZXNzbWVudC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSaXNrUHJvYmFiaWxpdHlDb2RpbmdzOlJpc2tQcm9iYWJpbGl0eUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2VydGFpbjogVGhlIHNwZWNpZmllZCBvdXRjb21lIGlzIGVmZmVjdGl2ZWx5IGd1YXJhbnRlZWQuXHJcbiAgICovXHJcbiAgQ2VydGFpbjoge1xyXG4gICAgZGlzcGxheTogXCJDZXJ0YWluXCIsXHJcbiAgICBjb2RlOiBcImNlcnRhaW5cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jpc2stcHJvYmFiaWxpdHlcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGhpZ2g6IFRoZSBzcGVjaWZpZWQgb3V0Y29tZSBpcyBtb3JlIGxpa2VseSB0byBvY2N1ciB0aGFuIG5vdC5cclxuICAgKi9cclxuICBIaWdoTGlrZWxpaG9vZDoge1xyXG4gICAgZGlzcGxheTogXCJIaWdoIGxpa2VsaWhvb2RcIixcclxuICAgIGNvZGU6IFwiaGlnaFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmlzay1wcm9iYWJpbGl0eVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbG93OiBUaGUgc3BlY2lmaWVkIG91dGNvbWUgaXMgcG9zc2libGUgYnV0IHVubGlrZWx5LlxyXG4gICAqL1xyXG4gIExvd0xpa2VsaWhvb2Q6IHtcclxuICAgIGRpc3BsYXk6IFwiTG93IGxpa2VsaWhvb2RcIixcclxuICAgIGNvZGU6IFwibG93XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yaXNrLXByb2JhYmlsaXR5XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBtb2RlcmF0ZTogVGhlIHNwZWNpZmllZCBvdXRjb21lIGhhcyBhIHJlYXNvbmFibGUgbGlrZWxpaG9vZCBvZiBvY2N1cnJlbmNlLlxyXG4gICAqL1xyXG4gIE1vZGVyYXRlTGlrZWxpaG9vZDoge1xyXG4gICAgZGlzcGxheTogXCJNb2RlcmF0ZSBsaWtlbGlob29kXCIsXHJcbiAgICBjb2RlOiBcIm1vZGVyYXRlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yaXNrLXByb2JhYmlsaXR5XCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBuZWdsaWdpYmxlOiBUaGUgc3BlY2lmaWVkIG91dGNvbWUgaXMgZXhjZXB0aW9uYWxseSB1bmxpa2VseS5cclxuICAgKi9cclxuICBOZWdsaWdpYmxlTGlrZWxpaG9vZDoge1xyXG4gICAgZGlzcGxheTogXCJOZWdsaWdpYmxlIGxpa2VsaWhvb2RcIixcclxuICAgIGNvZGU6IFwibmVnbGlnaWJsZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmlzay1wcm9iYWJpbGl0eVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==