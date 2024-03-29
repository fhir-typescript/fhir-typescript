// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose|4.0.1
/**
 * A code specifying the types of information being requested.
 */
export const EligibilityresponsePurposeCodes = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: "auth-requirements",
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: "benefits",
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: "discovery",
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: "validation",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxnRkFBZ0Y7QUFFaEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRztJQUM3Qzs7T0FFRztJQUNILHdCQUF3QixFQUFFLG1CQUFtQjtJQUM3Qzs7T0FFRztJQUNILGdCQUFnQixFQUFFLFVBQVU7SUFDNUI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxXQUFXO0lBQzlCOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsWUFBWTtDQUN4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VsaWdpYmlsaXR5cmVzcG9uc2UtcHVycG9zZXw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIEEgY29kZSBzcGVjaWZ5aW5nIHRoZSB0eXBlcyBvZiBpbmZvcm1hdGlvbiBiZWluZyByZXF1ZXN0ZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhdXRoLXJlcXVpcmVtZW50czogVGhlIHByaW9yIGF1dGhvcml6YXRpb24gcmVxdWlyZW1lbnRzIGZvciB0aGUgbGlzdGVkLCBvciBkaXNjb3ZlcmVkIGlmIHNwZWNpZmllZCwgY29udmVyYWdlcyBmb3IgdGhlIGNhdGVnb3JpZXMgb2Ygc2VydmljZSBhbmQvb3Igc3BlY2lmZWQgYmlsaW5nIGNvZGVzIGFyZSByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VBdXRoUmVxdWlyZW1lbnRzOiBcImF1dGgtcmVxdWlyZW1lbnRzXCIsXHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdHM6IFRoZSBwbGFuIGJlbmVmaXRzIGFuZCBvcHRpb25hbGx5IGJlbmVmaXRzIGNvbnN1bWVkICBmb3IgdGhlIGxpc3RlZCwgb3IgZGlzY292ZXJlZCBpZiBzcGVjaWZpZWQsIGNvbnZlcmFnZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUJlbmVmaXRzOiBcImJlbmVmaXRzXCIsXHJcbiAgLyoqXHJcbiAgICogZGlzY292ZXJ5OiBUaGUgaW5zdXJlciBpcyByZXF1ZXN0ZWQgdG8gcmVwb3J0IG9uIGFueSBjb3ZlcmFnZXMgd2hpY2ggdGhleSBhcmUgYXdhcmUgb2YgaW4gYWRkaXRpb24gdG8gYW55IHNwZWNpZmVkLlxyXG4gICAqL1xyXG4gIENvdmVyYWdlRGlzY292ZXJ5OiBcImRpc2NvdmVyeVwiLFxyXG4gIC8qKlxyXG4gICAqIHZhbGlkYXRpb246IEEgY2hlY2sgdGhhdCB0aGUgc3BlY2lmaWVkIGNvdmVyYWdlcyBhcmUgaW4tZm9yY2UgaXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIENvdmVyYWdlVmFsaWRhdGlvbjogXCJ2YWxpZGF0aW9uXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHR5cGVzIG9mIGluZm9ybWF0aW9uIGJlaW5nIHJlcXVlc3RlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVsaWdpYmlsaXR5cmVzcG9uc2VQdXJwb3NlQ29kZVR5cGUgPSB0eXBlb2YgRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2Rlc1trZXlvZiB0eXBlb2YgRWxpZ2liaWxpdHlyZXNwb25zZVB1cnBvc2VDb2Rlc107XHJcbiJdfQ==