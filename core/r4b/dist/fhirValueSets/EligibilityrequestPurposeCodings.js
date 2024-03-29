// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/eligibilityrequest-purpose|4.3.0
/**
 * A code specifying the types of information being requested.
 */
export const EligibilityrequestPurposeCodings = {
    /**
     * auth-requirements: The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.
     */
    CoverageAuthRequirements: {
        display: "Coverage auth-requirements",
        code: "auth-requirements",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    },
    /**
     * benefits: The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.
     */
    CoverageBenefits: {
        display: "Coverage benefits",
        code: "benefits",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    },
    /**
     * discovery: The insurer is requested to report on any coverages which they are aware of in addition to any specifed.
     */
    CoverageDiscovery: {
        display: "Coverage Discovery",
        code: "discovery",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    },
    /**
     * validation: A check that the specified coverages are in-force is requested.
     */
    CoverageValidation: {
        display: "Coverage Validation",
        code: "validation",
        system: "http://hl7.org/fhir/eligibilityrequest-purpose",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxpZ2liaWxpdHlyZXF1ZXN0UHVycG9zZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0VsaWdpYmlsaXR5cmVxdWVzdFB1cnBvc2VDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLCtFQUErRTtBQTBCL0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBdUM7SUFDbEY7O09BRUc7SUFDSCx3QkFBd0IsRUFBRTtRQUN4QixPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLElBQUksRUFBRSxtQkFBbUI7UUFDekIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtJQUNEOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsZ0RBQWdEO0tBQ3pEO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxnREFBZ0Q7S0FDekQ7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLGdEQUFnRDtLQUN6RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VsaWdpYmlsaXR5cmVxdWVzdC1wdXJwb3NlfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHNwZWNpZnlpbmcgdGhlIHR5cGVzIG9mIGluZm9ybWF0aW9uIGJlaW5nIHJlcXVlc3RlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVsaWdpYmlsaXR5cmVxdWVzdFB1cnBvc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF1dGgtcmVxdWlyZW1lbnRzOiBUaGUgcHJpb3IgYXV0aG9yaXphdGlvbiByZXF1aXJlbWVudHMgZm9yIHRoZSBsaXN0ZWQsIG9yIGRpc2NvdmVyZWQgaWYgc3BlY2lmaWVkLCBjb252ZXJhZ2VzIGZvciB0aGUgY2F0ZWdvcmllcyBvZiBzZXJ2aWNlIGFuZC9vciBzcGVjaWZlZCBiaWxpbmcgY29kZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUF1dGhSZXF1aXJlbWVudHM6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYmVuZWZpdHM6IFRoZSBwbGFuIGJlbmVmaXRzIGFuZCBvcHRpb25hbGx5IGJlbmVmaXRzIGNvbnN1bWVkICBmb3IgdGhlIGxpc3RlZCwgb3IgZGlzY292ZXJlZCBpZiBzcGVjaWZpZWQsIGNvbnZlcmFnZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUJlbmVmaXRzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRpc2NvdmVyeTogVGhlIGluc3VyZXIgaXMgcmVxdWVzdGVkIHRvIHJlcG9ydCBvbiBhbnkgY292ZXJhZ2VzIHdoaWNoIHRoZXkgYXJlIGF3YXJlIG9mIGluIGFkZGl0aW9uIHRvIGFueSBzcGVjaWZlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZURpc2NvdmVyeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB2YWxpZGF0aW9uOiBBIGNoZWNrIHRoYXQgdGhlIHNwZWNpZmllZCBjb3ZlcmFnZXMgYXJlIGluLWZvcmNlIGlzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZVZhbGlkYXRpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGNvZGUgc3BlY2lmeWluZyB0aGUgdHlwZXMgb2YgaW5mb3JtYXRpb24gYmVpbmcgcmVxdWVzdGVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVsaWdpYmlsaXR5cmVxdWVzdFB1cnBvc2VDb2RpbmdzOkVsaWdpYmlsaXR5cmVxdWVzdFB1cnBvc2VDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF1dGgtcmVxdWlyZW1lbnRzOiBUaGUgcHJpb3IgYXV0aG9yaXphdGlvbiByZXF1aXJlbWVudHMgZm9yIHRoZSBsaXN0ZWQsIG9yIGRpc2NvdmVyZWQgaWYgc3BlY2lmaWVkLCBjb252ZXJhZ2VzIGZvciB0aGUgY2F0ZWdvcmllcyBvZiBzZXJ2aWNlIGFuZC9vciBzcGVjaWZlZCBiaWxpbmcgY29kZXMgYXJlIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICBDb3ZlcmFnZUF1dGhSZXF1aXJlbWVudHM6IHtcclxuICAgIGRpc3BsYXk6IFwiQ292ZXJhZ2UgYXV0aC1yZXF1aXJlbWVudHNcIixcclxuICAgIGNvZGU6IFwiYXV0aC1yZXF1aXJlbWVudHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VsaWdpYmlsaXR5cmVxdWVzdC1wdXJwb3NlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBiZW5lZml0czogVGhlIHBsYW4gYmVuZWZpdHMgYW5kIG9wdGlvbmFsbHkgYmVuZWZpdHMgY29uc3VtZWQgIGZvciB0aGUgbGlzdGVkLCBvciBkaXNjb3ZlcmVkIGlmIHNwZWNpZmllZCwgY29udmVyYWdlcyBhcmUgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIENvdmVyYWdlQmVuZWZpdHM6IHtcclxuICAgIGRpc3BsYXk6IFwiQ292ZXJhZ2UgYmVuZWZpdHNcIixcclxuICAgIGNvZGU6IFwiYmVuZWZpdHNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VsaWdpYmlsaXR5cmVxdWVzdC1wdXJwb3NlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkaXNjb3Zlcnk6IFRoZSBpbnN1cmVyIGlzIHJlcXVlc3RlZCB0byByZXBvcnQgb24gYW55IGNvdmVyYWdlcyB3aGljaCB0aGV5IGFyZSBhd2FyZSBvZiBpbiBhZGRpdGlvbiB0byBhbnkgc3BlY2lmZWQuXHJcbiAgICovXHJcbiAgQ292ZXJhZ2VEaXNjb3Zlcnk6IHtcclxuICAgIGRpc3BsYXk6IFwiQ292ZXJhZ2UgRGlzY292ZXJ5XCIsXHJcbiAgICBjb2RlOiBcImRpc2NvdmVyeVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZWxpZ2liaWxpdHlyZXF1ZXN0LXB1cnBvc2VcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHZhbGlkYXRpb246IEEgY2hlY2sgdGhhdCB0aGUgc3BlY2lmaWVkIGNvdmVyYWdlcyBhcmUgaW4tZm9yY2UgaXMgcmVxdWVzdGVkLlxyXG4gICAqL1xyXG4gIENvdmVyYWdlVmFsaWRhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJDb3ZlcmFnZSBWYWxpZGF0aW9uXCIsXHJcbiAgICBjb2RlOiBcInZhbGlkYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VsaWdpYmlsaXR5cmVxdWVzdC1wdXJwb3NlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19