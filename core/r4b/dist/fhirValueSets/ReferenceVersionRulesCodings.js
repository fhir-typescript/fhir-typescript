// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/reference-version-rules|4.3.0
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export const ReferenceVersionRulesCodings = {
    /**
     * either: The reference may be either version independent or version specific.
     */
    EitherSpecificOrIndependent: {
        display: "Either Specific or independent",
        code: "either",
        system: "http://hl7.org/fhir/reference-version-rules",
    },
    /**
     * independent: The reference must be version independent.
     */
    VersionIndependent: {
        display: "Version independent",
        code: "independent",
        system: "http://hl7.org/fhir/reference-version-rules",
    },
    /**
     * specific: The reference must be version specific.
     */
    VersionSpecific: {
        display: "Version Specific",
        code: "specific",
        system: "http://hl7.org/fhir/reference-version-rules",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmZXJlbmNlVmVyc2lvblJ1bGVzQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUmVmZXJlbmNlVmVyc2lvblJ1bGVzQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw0RUFBNEU7QUFzQjVFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQW1DO0lBQzFFOztPQUVHO0lBQ0gsMkJBQTJCLEVBQUU7UUFDM0IsT0FBTyxFQUFFLGdDQUFnQztRQUN6QyxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw2Q0FBNkM7S0FDdEQ7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLDZDQUE2QztLQUN0RDtJQUNEOztPQUVHO0lBQ0gsZUFBZSxFQUFFO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNkNBQTZDO0tBQ3REO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVmZXJlbmNlLXZlcnNpb24tcnVsZXN8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIGEgcmVmZXJlbmNlIG5lZWRzIHRvIGJlIHZlcnNpb24gc3BlY2lmaWMgb3IgdmVyc2lvbiBpbmRlcGVuZGVudCwgb3Igd2hldGhlciBlaXRoZXIgY2FuIGJlIHVzZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWZlcmVuY2VWZXJzaW9uUnVsZXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGVpdGhlcjogVGhlIHJlZmVyZW5jZSBtYXkgYmUgZWl0aGVyIHZlcnNpb24gaW5kZXBlbmRlbnQgb3IgdmVyc2lvbiBzcGVjaWZpYy5cclxuICAgKi9cclxuICBFaXRoZXJTcGVjaWZpY09ySW5kZXBlbmRlbnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW5kZXBlbmRlbnQ6IFRoZSByZWZlcmVuY2UgbXVzdCBiZSB2ZXJzaW9uIGluZGVwZW5kZW50LlxyXG4gICAqL1xyXG4gIFZlcnNpb25JbmRlcGVuZGVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzcGVjaWZpYzogVGhlIHJlZmVyZW5jZSBtdXN0IGJlIHZlcnNpb24gc3BlY2lmaWMuXHJcbiAgICovXHJcbiAgVmVyc2lvblNwZWNpZmljOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogV2hldGhlciBhIHJlZmVyZW5jZSBuZWVkcyB0byBiZSB2ZXJzaW9uIHNwZWNpZmljIG9yIHZlcnNpb24gaW5kZXBlbmRlbnQsIG9yIHdoZXRoZXIgZWl0aGVyIGNhbiBiZSB1c2VkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlZmVyZW5jZVZlcnNpb25SdWxlc0NvZGluZ3M6UmVmZXJlbmNlVmVyc2lvblJ1bGVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBlaXRoZXI6IFRoZSByZWZlcmVuY2UgbWF5IGJlIGVpdGhlciB2ZXJzaW9uIGluZGVwZW5kZW50IG9yIHZlcnNpb24gc3BlY2lmaWMuXHJcbiAgICovXHJcbiAgRWl0aGVyU3BlY2lmaWNPckluZGVwZW5kZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIkVpdGhlciBTcGVjaWZpYyBvciBpbmRlcGVuZGVudFwiLFxyXG4gICAgY29kZTogXCJlaXRoZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlZmVyZW5jZS12ZXJzaW9uLXJ1bGVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpbmRlcGVuZGVudDogVGhlIHJlZmVyZW5jZSBtdXN0IGJlIHZlcnNpb24gaW5kZXBlbmRlbnQuXHJcbiAgICovXHJcbiAgVmVyc2lvbkluZGVwZW5kZW50OiB7XHJcbiAgICBkaXNwbGF5OiBcIlZlcnNpb24gaW5kZXBlbmRlbnRcIixcclxuICAgIGNvZGU6IFwiaW5kZXBlbmRlbnRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlZmVyZW5jZS12ZXJzaW9uLXJ1bGVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzcGVjaWZpYzogVGhlIHJlZmVyZW5jZSBtdXN0IGJlIHZlcnNpb24gc3BlY2lmaWMuXHJcbiAgICovXHJcbiAgVmVyc2lvblNwZWNpZmljOiB7XHJcbiAgICBkaXNwbGF5OiBcIlZlcnNpb24gU3BlY2lmaWNcIixcclxuICAgIGNvZGU6IFwic3BlY2lmaWNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlZmVyZW5jZS12ZXJzaW9uLXJ1bGVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19