// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/graph-compartment-rule|3.0.2
/**
 * How a compartment must be linked
 */
export const GraphCompartmentRuleCodings = {
    /**
     * custom: The compartment rule is defined in the accompanying FHIRPath expression
     */
    Custom: {
        display: "Custom",
        code: "custom",
        system: "http://hl7.org/fhir/graph-compartment-rule",
    },
    /**
     * different: The compartment must be different
     */
    Different: {
        display: "Different",
        code: "different",
        system: "http://hl7.org/fhir/graph-compartment-rule",
    },
    /**
     * identical: The compartment must be identical (the same literal reference)
     */
    Identical: {
        display: "Identical",
        code: "identical",
        system: "http://hl7.org/fhir/graph-compartment-rule",
    },
    /**
     * matching: The compartment must be the same - the record must be about the same patient, but the reference may be different
     */
    Matching: {
        display: "Matching",
        code: "matching",
        system: "http://hl7.org/fhir/graph-compartment-rule",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGhDb21wYXJ0bWVudFJ1bGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9HcmFwaENvbXBhcnRtZW50UnVsZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBMEIzRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFrQztJQUN4RTs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZ3JhcGgtY29tcGFydG1lbnQtcnVsZXwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEhvdyBhIGNvbXBhcnRtZW50IG11c3QgYmUgbGlua2VkXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFwaENvbXBhcnRtZW50UnVsZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY3VzdG9tOiBUaGUgY29tcGFydG1lbnQgcnVsZSBpcyBkZWZpbmVkIGluIHRoZSBhY2NvbXBhbnlpbmcgRkhJUlBhdGggZXhwcmVzc2lvblxyXG4gICAqL1xyXG4gIEN1c3RvbTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBkaWZmZXJlbnQ6IFRoZSBjb21wYXJ0bWVudCBtdXN0IGJlIGRpZmZlcmVudFxyXG4gICAqL1xyXG4gIERpZmZlcmVudDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBpZGVudGljYWw6IFRoZSBjb21wYXJ0bWVudCBtdXN0IGJlIGlkZW50aWNhbCAodGhlIHNhbWUgbGl0ZXJhbCByZWZlcmVuY2UpXHJcbiAgICovXHJcbiAgSWRlbnRpY2FsOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG1hdGNoaW5nOiBUaGUgY29tcGFydG1lbnQgbXVzdCBiZSB0aGUgc2FtZSAtIHRoZSByZWNvcmQgbXVzdCBiZSBhYm91dCB0aGUgc2FtZSBwYXRpZW50LCBidXQgdGhlIHJlZmVyZW5jZSBtYXkgYmUgZGlmZmVyZW50XHJcbiAgICovXHJcbiAgTWF0Y2hpbmc6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBIb3cgYSBjb21wYXJ0bWVudCBtdXN0IGJlIGxpbmtlZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdyYXBoQ29tcGFydG1lbnRSdWxlQ29kaW5nczpHcmFwaENvbXBhcnRtZW50UnVsZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY3VzdG9tOiBUaGUgY29tcGFydG1lbnQgcnVsZSBpcyBkZWZpbmVkIGluIHRoZSBhY2NvbXBhbnlpbmcgRkhJUlBhdGggZXhwcmVzc2lvblxyXG4gICAqL1xyXG4gIEN1c3RvbToge1xyXG4gICAgZGlzcGxheTogXCJDdXN0b21cIixcclxuICAgIGNvZGU6IFwiY3VzdG9tXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ncmFwaC1jb21wYXJ0bWVudC1ydWxlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkaWZmZXJlbnQ6IFRoZSBjb21wYXJ0bWVudCBtdXN0IGJlIGRpZmZlcmVudFxyXG4gICAqL1xyXG4gIERpZmZlcmVudDoge1xyXG4gICAgZGlzcGxheTogXCJEaWZmZXJlbnRcIixcclxuICAgIGNvZGU6IFwiZGlmZmVyZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9ncmFwaC1jb21wYXJ0bWVudC1ydWxlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBpZGVudGljYWw6IFRoZSBjb21wYXJ0bWVudCBtdXN0IGJlIGlkZW50aWNhbCAodGhlIHNhbWUgbGl0ZXJhbCByZWZlcmVuY2UpXHJcbiAgICovXHJcbiAgSWRlbnRpY2FsOiB7XHJcbiAgICBkaXNwbGF5OiBcIklkZW50aWNhbFwiLFxyXG4gICAgY29kZTogXCJpZGVudGljYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2dyYXBoLWNvbXBhcnRtZW50LXJ1bGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG1hdGNoaW5nOiBUaGUgY29tcGFydG1lbnQgbXVzdCBiZSB0aGUgc2FtZSAtIHRoZSByZWNvcmQgbXVzdCBiZSBhYm91dCB0aGUgc2FtZSBwYXRpZW50LCBidXQgdGhlIHJlZmVyZW5jZSBtYXkgYmUgZGlmZmVyZW50XHJcbiAgICovXHJcbiAgTWF0Y2hpbmc6IHtcclxuICAgIGRpc3BsYXk6IFwiTWF0Y2hpbmdcIixcclxuICAgIGNvZGU6IFwibWF0Y2hpbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2dyYXBoLWNvbXBhcnRtZW50LXJ1bGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=