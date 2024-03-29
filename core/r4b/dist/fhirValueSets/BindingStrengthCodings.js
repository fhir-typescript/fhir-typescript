// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/binding-strength|4.3.0
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export const BindingStrengthCodings = {
    /**
     * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
     */
    Example: {
        display: "Example",
        code: "example",
        system: "http://hl7.org/fhir/binding-strength",
    },
    /**
     * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
     */
    Extensible: {
        display: "Extensible",
        code: "extensible",
        system: "http://hl7.org/fhir/binding-strength",
    },
    /**
     * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
     */
    Preferred: {
        display: "Preferred",
        code: "preferred",
        system: "http://hl7.org/fhir/binding-strength",
    },
    /**
     * required: To be conformant, the concept in this element SHALL be from the specified value set.
     */
    Required: {
        display: "Required",
        code: "required",
        system: "http://hl7.org/fhir/binding-strength",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmluZGluZ1N0cmVuZ3RoQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQmluZGluZ1N0cmVuZ3RoQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxxRUFBcUU7QUEwQnJFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTZCO0lBQzlEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsc0NBQXNDO0tBQy9DO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYmluZGluZy1zdHJlbmd0aHw0LjMuMFxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEluZGljYXRpb24gb2YgdGhlIGRlZ3JlZSBvZiBjb25mb3JtYW5jZSBleHBlY3RhdGlvbnMgYXNzb2NpYXRlZCB3aXRoIGEgYmluZGluZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJpbmRpbmdTdHJlbmd0aENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXhhbXBsZTogSW5zdGFuY2VzIGFyZSBub3QgZXhwZWN0ZWQgb3IgZXZlbiBlbmNvdXJhZ2VkIHRvIGRyYXcgZnJvbSB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldC4gIFRoZSB2YWx1ZSBzZXQgbWVyZWx5IHByb3ZpZGVzIGV4YW1wbGVzIG9mIHRoZSB0eXBlcyBvZiBjb25jZXB0cyBpbnRlbmRlZCB0byBiZSBpbmNsdWRlZC5cclxuICAgKi9cclxuICBFeGFtcGxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGV4dGVuc2libGU6IFRvIGJlIGNvbmZvcm1hbnQsIHRoZSBjb25jZXB0IGluIHRoaXMgZWxlbWVudCBTSEFMTCBiZSBmcm9tIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0IGlmIGFueSBvZiB0aGUgY29kZXMgd2l0aGluIHRoZSB2YWx1ZSBzZXQgY2FuIGFwcGx5IHRvIHRoZSBjb25jZXB0IGJlaW5nIGNvbW11bmljYXRlZC4gIElmIHRoZSB2YWx1ZSBzZXQgZG9lcyBub3QgY292ZXIgdGhlIGNvbmNlcHQgKGJhc2VkIG9uIGh1bWFuIHJldmlldyksIGFsdGVybmF0ZSBjb2RpbmdzIChvciwgZGF0YSB0eXBlIGFsbG93aW5nLCB0ZXh0KSBtYXkgYmUgaW5jbHVkZWQgaW5zdGVhZC5cclxuICAgKi9cclxuICBFeHRlbnNpYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByZWZlcnJlZDogSW5zdGFuY2VzIGFyZSBlbmNvdXJhZ2VkIHRvIGRyYXcgZnJvbSB0aGUgc3BlY2lmaWVkIGNvZGVzIGZvciBpbnRlcm9wZXJhYmlsaXR5IHB1cnBvc2VzIGJ1dCBhcmUgbm90IHJlcXVpcmVkIHRvIGRvIHNvIHRvIGJlIGNvbnNpZGVyZWQgY29uZm9ybWFudC5cclxuICAgKi9cclxuICBQcmVmZXJyZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZWQ6IFRvIGJlIGNvbmZvcm1hbnQsIHRoZSBjb25jZXB0IGluIHRoaXMgZWxlbWVudCBTSEFMTCBiZSBmcm9tIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIFJlcXVpcmVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kaWNhdGlvbiBvZiB0aGUgZGVncmVlIG9mIGNvbmZvcm1hbmNlIGV4cGVjdGF0aW9ucyBhc3NvY2lhdGVkIHdpdGggYSBiaW5kaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJpbmRpbmdTdHJlbmd0aENvZGluZ3M6QmluZGluZ1N0cmVuZ3RoQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBleGFtcGxlOiBJbnN0YW5jZXMgYXJlIG5vdCBleHBlY3RlZCBvciBldmVuIGVuY291cmFnZWQgdG8gZHJhdyBmcm9tIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0LiAgVGhlIHZhbHVlIHNldCBtZXJlbHkgcHJvdmlkZXMgZXhhbXBsZXMgb2YgdGhlIHR5cGVzIG9mIGNvbmNlcHRzIGludGVuZGVkIHRvIGJlIGluY2x1ZGVkLlxyXG4gICAqL1xyXG4gIEV4YW1wbGU6IHtcclxuICAgIGRpc3BsYXk6IFwiRXhhbXBsZVwiLFxyXG4gICAgY29kZTogXCJleGFtcGxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9iaW5kaW5nLXN0cmVuZ3RoXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBleHRlbnNpYmxlOiBUbyBiZSBjb25mb3JtYW50LCB0aGUgY29uY2VwdCBpbiB0aGlzIGVsZW1lbnQgU0hBTEwgYmUgZnJvbSB0aGUgc3BlY2lmaWVkIHZhbHVlIHNldCBpZiBhbnkgb2YgdGhlIGNvZGVzIHdpdGhpbiB0aGUgdmFsdWUgc2V0IGNhbiBhcHBseSB0byB0aGUgY29uY2VwdCBiZWluZyBjb21tdW5pY2F0ZWQuICBJZiB0aGUgdmFsdWUgc2V0IGRvZXMgbm90IGNvdmVyIHRoZSBjb25jZXB0IChiYXNlZCBvbiBodW1hbiByZXZpZXcpLCBhbHRlcm5hdGUgY29kaW5ncyAob3IsIGRhdGEgdHlwZSBhbGxvd2luZywgdGV4dCkgbWF5IGJlIGluY2x1ZGVkIGluc3RlYWQuXHJcbiAgICovXHJcbiAgRXh0ZW5zaWJsZToge1xyXG4gICAgZGlzcGxheTogXCJFeHRlbnNpYmxlXCIsXHJcbiAgICBjb2RlOiBcImV4dGVuc2libGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2JpbmRpbmctc3RyZW5ndGhcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByZWZlcnJlZDogSW5zdGFuY2VzIGFyZSBlbmNvdXJhZ2VkIHRvIGRyYXcgZnJvbSB0aGUgc3BlY2lmaWVkIGNvZGVzIGZvciBpbnRlcm9wZXJhYmlsaXR5IHB1cnBvc2VzIGJ1dCBhcmUgbm90IHJlcXVpcmVkIHRvIGRvIHNvIHRvIGJlIGNvbnNpZGVyZWQgY29uZm9ybWFudC5cclxuICAgKi9cclxuICBQcmVmZXJyZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJlZmVycmVkXCIsXHJcbiAgICBjb2RlOiBcInByZWZlcnJlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvYmluZGluZy1zdHJlbmd0aFwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVxdWlyZWQ6IFRvIGJlIGNvbmZvcm1hbnQsIHRoZSBjb25jZXB0IGluIHRoaXMgZWxlbWVudCBTSEFMTCBiZSBmcm9tIHRoZSBzcGVjaWZpZWQgdmFsdWUgc2V0LlxyXG4gICAqL1xyXG4gIFJlcXVpcmVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlcXVpcmVkXCIsXHJcbiAgICBjb2RlOiBcInJlcXVpcmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9iaW5kaW5nLXN0cmVuZ3RoXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19