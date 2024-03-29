// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/immunization-origin|3.0.2
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export const ImmunizationOriginCodings = {
    /**
     * provider: The data for the immunization event originated with another provider.
     */
    OtherProvider: {
        display: "Other Provider",
        code: "provider",
        system: "http://hl7.org/fhir/immunization-origin",
    },
    /**
     * recall: The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    ParentGuardianPatientRecall: {
        display: "Parent/Guardian/Patient Recall",
        code: "recall",
        system: "http://hl7.org/fhir/immunization-origin",
    },
    /**
     * record: The data for the immunization event originated with a written record for the patient.
     */
    WrittenRecord: {
        display: "Written Record",
        code: "record",
        system: "http://hl7.org/fhir/immunization-origin",
    },
    /**
     * school: The data for the immunization event originated with a school record for the patient.
     */
    SchoolRecord: {
        display: "School Record",
        code: "school",
        system: "http://hl7.org/fhir/immunization-origin",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1tdW5pemF0aW9uT3JpZ2luQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvSW1tdW5pemF0aW9uT3JpZ2luQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx3RUFBd0U7QUEwQnhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUseUNBQXlDO0tBQ2xEO0lBQ0Q7O09BRUc7SUFDSCwyQkFBMkIsRUFBRTtRQUMzQixPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtJQUNEOztPQUVHO0lBQ0gsYUFBYSxFQUFFO1FBQ2IsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHlDQUF5QztLQUNsRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvaW1tdW5pemF0aW9uLW9yaWdpbnwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIFRoZSB2YWx1ZSBzZXQgdG8gaW5zdGFudGlhdGUgdGhpcyBhdHRyaWJ1dGUgc2hvdWxkIGJlIGRyYXduIGZyb20gYSB0ZXJtaW5vbG9naWNhbGx5IHJvYnVzdCBjb2RlIHN5c3RlbSB0aGF0IGNvbnNpc3RzIG9mIG9yIGNvbnRhaW5zIGNvbmNlcHRzIHRvIHN1cHBvcnQgZGVzY3JpYmluZyB0aGUgc291cmNlIG9mIHRoZSBkYXRhIHdoZW4gdGhlIHJlcG9ydCBvZiB0aGUgaW1tdW5pemF0aW9uIGV2ZW50IGlzIG5vdCBiYXNlZCBvbiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwZXJzb24sIGVudGl0eSBvciBvcmdhbml6YXRpb24gd2hvIGFkbWluaXN0ZXJlZCB0aGUgdmFjY2luZS4gVGhpcyB2YWx1ZSBzZXQgaXMgcHJvdmlkZWQgYXMgYSBzdWdnZXN0aXZlIGV4YW1wbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJbW11bml6YXRpb25PcmlnaW5Db2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIHByb3ZpZGVyOiBUaGUgZGF0YSBmb3IgdGhlIGltbXVuaXphdGlvbiBldmVudCBvcmlnaW5hdGVkIHdpdGggYW5vdGhlciBwcm92aWRlci5cclxuICAgKi9cclxuICBPdGhlclByb3ZpZGVyOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlY2FsbDogVGhlIGRhdGEgZm9yIHRoZSBpbW11bml6YXRpb24gZXZlbnQgb3JpZ2luYXRlZCBmcm9tIHRoZSByZWNvbGxlY3Rpb24gb2YgdGhlIHBhdGllbnQgb3IgcGFyZW50L2d1YXJkaWFuIG9mIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFBhcmVudEd1YXJkaWFuUGF0aWVudFJlY2FsbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZWNvcmQ6IFRoZSBkYXRhIGZvciB0aGUgaW1tdW5pemF0aW9uIGV2ZW50IG9yaWdpbmF0ZWQgd2l0aCBhIHdyaXR0ZW4gcmVjb3JkIGZvciB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBXcml0dGVuUmVjb3JkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNjaG9vbDogVGhlIGRhdGEgZm9yIHRoZSBpbW11bml6YXRpb24gZXZlbnQgb3JpZ2luYXRlZCB3aXRoIGEgc2Nob29sIHJlY29yZCBmb3IgdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgU2Nob29sUmVjb3JkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHZhbHVlIHNldCB0byBpbnN0YW50aWF0ZSB0aGlzIGF0dHJpYnV0ZSBzaG91bGQgYmUgZHJhd24gZnJvbSBhIHRlcm1pbm9sb2dpY2FsbHkgcm9idXN0IGNvZGUgc3lzdGVtIHRoYXQgY29uc2lzdHMgb2Ygb3IgY29udGFpbnMgY29uY2VwdHMgdG8gc3VwcG9ydCBkZXNjcmliaW5nIHRoZSBzb3VyY2Ugb2YgdGhlIGRhdGEgd2hlbiB0aGUgcmVwb3J0IG9mIHRoZSBpbW11bml6YXRpb24gZXZlbnQgaXMgbm90IGJhc2VkIG9uIGluZm9ybWF0aW9uIGZyb20gdGhlIHBlcnNvbiwgZW50aXR5IG9yIG9yZ2FuaXphdGlvbiB3aG8gYWRtaW5pc3RlcmVkIHRoZSB2YWNjaW5lLiBUaGlzIHZhbHVlIHNldCBpcyBwcm92aWRlZCBhcyBhIHN1Z2dlc3RpdmUgZXhhbXBsZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBJbW11bml6YXRpb25PcmlnaW5Db2RpbmdzOkltbXVuaXphdGlvbk9yaWdpbkNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogcHJvdmlkZXI6IFRoZSBkYXRhIGZvciB0aGUgaW1tdW5pemF0aW9uIGV2ZW50IG9yaWdpbmF0ZWQgd2l0aCBhbm90aGVyIHByb3ZpZGVyLlxyXG4gICAqL1xyXG4gIE90aGVyUHJvdmlkZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiT3RoZXIgUHJvdmlkZXJcIixcclxuICAgIGNvZGU6IFwicHJvdmlkZXJcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ltbXVuaXphdGlvbi1vcmlnaW5cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlY2FsbDogVGhlIGRhdGEgZm9yIHRoZSBpbW11bml6YXRpb24gZXZlbnQgb3JpZ2luYXRlZCBmcm9tIHRoZSByZWNvbGxlY3Rpb24gb2YgdGhlIHBhdGllbnQgb3IgcGFyZW50L2d1YXJkaWFuIG9mIHRoZSBwYXRpZW50LlxyXG4gICAqL1xyXG4gIFBhcmVudEd1YXJkaWFuUGF0aWVudFJlY2FsbDoge1xyXG4gICAgZGlzcGxheTogXCJQYXJlbnQvR3VhcmRpYW4vUGF0aWVudCBSZWNhbGxcIixcclxuICAgIGNvZGU6IFwicmVjYWxsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9pbW11bml6YXRpb24tb3JpZ2luXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiByZWNvcmQ6IFRoZSBkYXRhIGZvciB0aGUgaW1tdW5pemF0aW9uIGV2ZW50IG9yaWdpbmF0ZWQgd2l0aCBhIHdyaXR0ZW4gcmVjb3JkIGZvciB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBXcml0dGVuUmVjb3JkOiB7XHJcbiAgICBkaXNwbGF5OiBcIldyaXR0ZW4gUmVjb3JkXCIsXHJcbiAgICBjb2RlOiBcInJlY29yZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvaW1tdW5pemF0aW9uLW9yaWdpblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2Nob29sOiBUaGUgZGF0YSBmb3IgdGhlIGltbXVuaXphdGlvbiBldmVudCBvcmlnaW5hdGVkIHdpdGggYSBzY2hvb2wgcmVjb3JkIGZvciB0aGUgcGF0aWVudC5cclxuICAgKi9cclxuICBTY2hvb2xSZWNvcmQ6IHtcclxuICAgIGRpc3BsYXk6IFwiU2Nob29sIFJlY29yZFwiLFxyXG4gICAgY29kZTogXCJzY2hvb2xcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2ltbXVuaXphdGlvbi1vcmlnaW5cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=