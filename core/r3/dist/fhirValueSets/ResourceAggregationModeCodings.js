// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-aggregation-mode|3.0.2
/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationModeCodings = {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    Bundled: {
        display: "Bundled",
        code: "bundled",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    },
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    Contained: {
        display: "Contained",
        code: "contained",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    },
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    Referenced: {
        display: "Referenced",
        code: "referenced",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VBZ2dyZWdhdGlvbk1vZGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXNvdXJjZUFnZ3JlZ2F0aW9uTW9kZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBc0I5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcmVzb3VyY2UtYWdncmVnYXRpb24tbW9kZXwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEhvdyByZXNvdXJjZSByZWZlcmVuY2VzIGNhbiBiZSBhZ2dyZWdhdGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVzb3VyY2VBZ2dyZWdhdGlvbk1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1bmRsZWQ6IFRoZSByZXNvdXJjZSB0aGUgcmVmZXJlbmNlIHBvaW50cyB0byB3aWxsIGJlIGZvdW5kIGluIHRoZSBzYW1lIGJ1bmRsZSBhcyB0aGUgcmVzb3VyY2UgdGhhdCBpbmNsdWRlcyB0aGUgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIEJ1bmRsZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY29udGFpbmVkOiBUaGUgcmVmZXJlbmNlIGlzIGEgbG9jYWwgcmVmZXJlbmNlIHRvIGEgY29udGFpbmVkIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIENvbnRhaW5lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWZlcmVuY2VkOiBUaGUgcmVmZXJlbmNlIHRvIGEgcmVzb3VyY2UgdGhhdCBoYXMgdG8gYmUgcmVzb2x2ZWQgZXh0ZXJuYWxseSB0byB0aGUgcmVzb3VyY2UgdGhhdCBpbmNsdWRlcyB0aGUgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIFJlZmVyZW5jZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIb3cgcmVzb3VyY2UgcmVmZXJlbmNlcyBjYW4gYmUgYWdncmVnYXRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXNvdXJjZUFnZ3JlZ2F0aW9uTW9kZUNvZGluZ3M6UmVzb3VyY2VBZ2dyZWdhdGlvbk1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGJ1bmRsZWQ6IFRoZSByZXNvdXJjZSB0aGUgcmVmZXJlbmNlIHBvaW50cyB0byB3aWxsIGJlIGZvdW5kIGluIHRoZSBzYW1lIGJ1bmRsZSBhcyB0aGUgcmVzb3VyY2UgdGhhdCBpbmNsdWRlcyB0aGUgcmVmZXJlbmNlLlxyXG4gICAqL1xyXG4gIEJ1bmRsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQnVuZGxlZFwiLFxyXG4gICAgY29kZTogXCJidW5kbGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXNvdXJjZS1hZ2dyZWdhdGlvbi1tb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb250YWluZWQ6IFRoZSByZWZlcmVuY2UgaXMgYSBsb2NhbCByZWZlcmVuY2UgdG8gYSBjb250YWluZWQgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgQ29udGFpbmVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNvbnRhaW5lZFwiLFxyXG4gICAgY29kZTogXCJjb250YWluZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc291cmNlLWFnZ3JlZ2F0aW9uLW1vZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlZmVyZW5jZWQ6IFRoZSByZWZlcmVuY2UgdG8gYSByZXNvdXJjZSB0aGF0IGhhcyB0byBiZSByZXNvbHZlZCBleHRlcm5hbGx5IHRvIHRoZSByZXNvdXJjZSB0aGF0IGluY2x1ZGVzIHRoZSByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgUmVmZXJlbmNlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWZlcmVuY2VkXCIsXHJcbiAgICBjb2RlOiBcInJlZmVyZW5jZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc291cmNlLWFnZ3JlZ2F0aW9uLW1vZGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=