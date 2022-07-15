// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose|4.3.0
/**
 * A code specifying the types of information being requested.
 */
export const EligibilityresponsePurposeCodings = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: {
        display: "Coverage auth-requirements",
        code: "auth-requirements",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    },
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: {
        display: "Coverage benefits",
        code: "benefits",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    },
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: {
        display: "Coverage Discovery",
        code: "discovery",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    },
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: {
        display: "Coverage Validation",
        code: "validation",
        system: "http://hl7.org/fhir/eligibilityresponse-purpose",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9FbGlnaWJpbGl0eXJlc3BvbnNlUHVycG9zZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsZ0ZBQWdGO0FBMEJoRjs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUF3QztJQUNwRjs7T0FFRztJQUNILHdCQUF3QixFQUFFO1FBQ3hCLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0lBQ0Q7O09BRUc7SUFDSCxnQkFBZ0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsbUJBQW1CO1FBQzVCLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSxpREFBaUQ7S0FDMUQ7SUFDRDs7T0FFRztJQUNILGlCQUFpQixFQUFFO1FBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGlEQUFpRDtLQUMxRDtJQUNEOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUU7UUFDbEIsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsaURBQWlEO0tBQzFEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZWxpZ2liaWxpdHlyZXNwb25zZS1wdXJwb3NlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHR5cGVzIG9mIGluZm9ybWF0aW9uIGJlaW5nIHJlcXVlc3RlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVsaWdpYmlsaXR5cmVzcG9uc2VQdXJwb3NlQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhdXRoLXJlcXVpcmVtZW50czogVGhlIHByaW9yIGF1dGhvcml6YXRpb24gcmVxdWlyZW1lbnRzIGZvciB0aGUgbGlzdGVkLCBvciBkaXNjb3ZlcmVkIGlmIHNwZWNpZmllZCwgY29udmVyYWdlcyBmb3IgdGhlIGNhdGVnb3JpZXMgb2Ygc2VydmljZSBhbmQvb3Igc3BlY2lmZWQgYmlsaW5nIGNvZGVzIGFyZSByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VBdXRoUmVxdWlyZW1lbnRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGJlbmVmaXRzOiBUaGUgcGxhbiBiZW5lZml0cyBhbmQgb3B0aW9uYWxseSBiZW5lZml0cyBjb25zdW1lZCAgZm9yIHRoZSBsaXN0ZWQsIG9yIGRpc2NvdmVyZWQgaWYgc3BlY2lmaWVkLCBjb252ZXJhZ2VzIGFyZSByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VCZW5lZml0czogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkaXNjb3Zlcnk6IFRoZSBpbnN1cmVyIGlzIHJlcXVlc3RlZCB0byByZXBvcnQgb24gYW55IGNvdmVyYWdlcyB3aGljaCB0aGV5IGFyZSBhd2FyZSBvZiBpbiBhZGRpdGlvbiB0byBhbnkgc3BlY2lmZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VEaXNjb3Zlcnk6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogdmFsaWRhdGlvbjogQSBjaGVjayB0aGF0IHRoZSBzcGVjaWZpZWQgY292ZXJhZ2VzIGFyZSBpbi1mb3JjZSBpcyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VWYWxpZGF0aW9uOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHR5cGVzIG9mIGluZm9ybWF0aW9uIGJlaW5nIHJlcXVlc3RlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFbGlnaWJpbGl0eXJlc3BvbnNlUHVycG9zZUNvZGluZ3M6RWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF1dGgtcmVxdWlyZW1lbnRzOiBUaGUgcHJpb3IgYXV0aG9yaXphdGlvbiByZXF1aXJlbWVudHMgZm9yIHRoZSBsaXN0ZWQsIG9yIGRpc2NvdmVyZWQgaWYgc3BlY2lmaWVkLCBjb252ZXJhZ2VzIGZvciB0aGUgY2F0ZWdvcmllcyBvZiBzZXJ2aWNlIGFuZC9vciBzcGVjaWZlZCBiaWxpbmcgY29kZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUF1dGhSZXF1aXJlbWVudHM6IHtcclxuICAgIGRpc3BsYXk6IFwiQ292ZXJhZ2UgYXV0aC1yZXF1aXJlbWVudHNcIixcclxuICAgIGNvZGU6IFwiYXV0aC1yZXF1aXJlbWVudHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VsaWdpYmlsaXR5cmVzcG9uc2UtcHVycG9zZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdHM6IFRoZSBwbGFuIGJlbmVmaXRzIGFuZCBvcHRpb25hbGx5IGJlbmVmaXRzIGNvbnN1bWVkICBmb3IgdGhlIGxpc3RlZCwgb3IgZGlzY292ZXJlZCBpZiBzcGVjaWZpZWQsIGNvbnZlcmFnZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUJlbmVmaXRzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvdmVyYWdlIGJlbmVmaXRzXCIsXHJcbiAgICBjb2RlOiBcImJlbmVmaXRzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9lbGlnaWJpbGl0eXJlc3BvbnNlLXB1cnBvc2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRpc2NvdmVyeTogVGhlIGluc3VyZXIgaXMgcmVxdWVzdGVkIHRvIHJlcG9ydCBvbiBhbnkgY292ZXJhZ2VzIHdoaWNoIHRoZXkgYXJlIGF3YXJlIG9mIGluIGFkZGl0aW9uIHRvIGFueSBzcGVjaWZlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZURpc2NvdmVyeToge1xyXG4gICAgZGlzcGxheTogXCJDb3ZlcmFnZSBEaXNjb3ZlcnlcIixcclxuICAgIGNvZGU6IFwiZGlzY292ZXJ5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9lbGlnaWJpbGl0eXJlc3BvbnNlLXB1cnBvc2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHZhbGlkYXRpb246IEEgY2hlY2sgdGhhdCB0aGUgc3BlY2lmaWVkIGNvdmVyYWdlcyBhcmUgaW4tZm9yY2UgaXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIENvdmVyYWdlVmFsaWRhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJDb3ZlcmFnZSBWYWxpZGF0aW9uXCIsXHJcbiAgICBjb2RlOiBcInZhbGlkYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VsaWdpYmlsaXR5cmVzcG9uc2UtcHVycG9zZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==