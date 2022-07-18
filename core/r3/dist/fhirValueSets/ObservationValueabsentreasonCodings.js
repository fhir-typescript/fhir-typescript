// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-valueabsentreason|3.0.2
/**
 * This value set defines the set of codes for identifying the reason why the expected result in Observation.value[x] is missing.
 */
export const ObservationValueabsentreasonCodings = {
    /**
     * asked: The source human does not know the value.
     */
    Asked: {
        display: "Asked",
        code: "asked",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * astext: The content of the data is represented in the resource narrative.
     */
    AsText: {
        display: "As Text",
        code: "astext",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    Error: {
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    Masked: {
        display: "Masked",
        code: "masked",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * NaN: NaN, standing for not a number, is a numeric data type value representing an undefined or unrepresentable value.
     */
    NotANumber: {
        display: "Not a Number",
        code: "NaN",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    NotAsked: {
        display: "Not Asked",
        code: "not-asked",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    NotPerformed: {
        display: "Not Performed",
        code: "not-performed",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * temp: There is reason to expect (from the workflow) that the value may become known.
     */
    Temp: {
        display: "Temp",
        code: "temp",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * unknown: The value is not known.
     */
    Unknown: {
        display: "Unknown",
        code: "unknown",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
    /**
     * unsupported: The source system wasn't capable of supporting this element.
     */
    Unsupported: {
        display: "Unsupported",
        code: "unsupported",
        system: "http://hl7.org/fhir/data-absent-reason",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25WYWx1ZWFic2VudHJlYXNvbkNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL09ic2VydmF0aW9uVmFsdWVhYnNlbnRyZWFzb25Db2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGtGQUFrRjtBQWtEbEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBMEM7SUFDeEY7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLElBQUksRUFBRSxLQUFLO1FBQ1gsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsV0FBVyxFQUFFO1FBQ1gsT0FBTyxFQUFFLGFBQWE7UUFDdEIsSUFBSSxFQUFFLGFBQWE7UUFDbkIsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JzZXJ2YXRpb24tdmFsdWVhYnNlbnRyZWFzb258My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIHRoZSBzZXQgb2YgY29kZXMgZm9yIGlkZW50aWZ5aW5nIHRoZSByZWFzb24gd2h5IHRoZSBleHBlY3RlZCByZXN1bHQgaW4gT2JzZXJ2YXRpb24udmFsdWVbeF0gaXMgbWlzc2luZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIE9ic2VydmF0aW9uVmFsdWVhYnNlbnRyZWFzb25Db2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFza2VkOiBUaGUgc291cmNlIGh1bWFuIGRvZXMgbm90IGtub3cgdGhlIHZhbHVlLlxyXG4gICAqL1xyXG4gIEFza2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGFzdGV4dDogVGhlIGNvbnRlbnQgb2YgdGhlIGRhdGEgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHJlc291cmNlIG5hcnJhdGl2ZS5cclxuICAgKi9cclxuICBBc1RleHQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFNvbWUgc3lzdGVtIG9yIHdvcmtmbG93IHByb2Nlc3MgZXJyb3IgbWVhbnMgdGhhdCB0aGUgaW5mb3JtYXRpb24gaXMgbm90IGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBFcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtYXNrZWQ6IFRoZSBpbmZvcm1hdGlvbiBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSwgcHJpdmFjeSBvciByZWxhdGVkIHJlYXNvbnMuXHJcbiAgICovXHJcbiAgTWFza2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIE5hTjogTmFOLCBzdGFuZGluZyBmb3Igbm90IGEgbnVtYmVyLCBpcyBhIG51bWVyaWMgZGF0YSB0eXBlIHZhbHVlIHJlcHJlc2VudGluZyBhbiB1bmRlZmluZWQgb3IgdW5yZXByZXNlbnRhYmxlIHZhbHVlLlxyXG4gICAqL1xyXG4gIE5vdEFOdW1iZXI6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogbm90LWFza2VkOiBUaGUgd29ya2Zsb3cgZGlkbid0IGxlYWQgdG8gdGhpcyB2YWx1ZSBiZWluZyBrbm93bi5cclxuICAgKi9cclxuICBOb3RBc2tlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3QtcGVyZm9ybWVkOiBUaGUgdmFsdWUgaXMgbm90IGF2YWlsYWJsZSBiZWNhdXNlIHRoZSBvYnNlcnZhdGlvbiBwcm9jZWR1cmUgKHRlc3QsIGV0Yy4pIHdhcyBub3QgcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIE5vdFBlcmZvcm1lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB0ZW1wOiBUaGVyZSBpcyByZWFzb24gdG8gZXhwZWN0IChmcm9tIHRoZSB3b3JrZmxvdykgdGhhdCB0aGUgdmFsdWUgbWF5IGJlY29tZSBrbm93bi5cclxuICAgKi9cclxuICBUZW1wOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSB2YWx1ZSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgVW5rbm93bjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1bnN1cHBvcnRlZDogVGhlIHNvdXJjZSBzeXN0ZW0gd2Fzbid0IGNhcGFibGUgb2Ygc3VwcG9ydGluZyB0aGlzIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgVW5zdXBwb3J0ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIHRoZSBzZXQgb2YgY29kZXMgZm9yIGlkZW50aWZ5aW5nIHRoZSByZWFzb24gd2h5IHRoZSBleHBlY3RlZCByZXN1bHQgaW4gT2JzZXJ2YXRpb24udmFsdWVbeF0gaXMgbWlzc2luZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBPYnNlcnZhdGlvblZhbHVlYWJzZW50cmVhc29uQ29kaW5nczpPYnNlcnZhdGlvblZhbHVlYWJzZW50cmVhc29uQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhc2tlZDogVGhlIHNvdXJjZSBodW1hbiBkb2VzIG5vdCBrbm93IHRoZSB2YWx1ZS5cclxuICAgKi9cclxuICBBc2tlZDoge1xyXG4gICAgZGlzcGxheTogXCJBc2tlZFwiLFxyXG4gICAgY29kZTogXCJhc2tlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGF0YS1hYnNlbnQtcmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBhc3RleHQ6IFRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGlzIHJlcHJlc2VudGVkIGluIHRoZSByZXNvdXJjZSBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgQXNUZXh0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkFzIFRleHRcIixcclxuICAgIGNvZGU6IFwiYXN0ZXh0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kYXRhLWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVycm9yOiBTb21lIHN5c3RlbSBvciB3b3JrZmxvdyBwcm9jZXNzIGVycm9yIG1lYW5zIHRoYXQgdGhlIGluZm9ybWF0aW9uIGlzIG5vdCBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAgRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RhdGEtYWJzZW50LXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbWFza2VkOiBUaGUgaW5mb3JtYXRpb24gaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHksIHByaXZhY3kgb3IgcmVsYXRlZCByZWFzb25zLlxyXG4gICAqL1xyXG4gIE1hc2tlZDoge1xyXG4gICAgZGlzcGxheTogXCJNYXNrZWRcIixcclxuICAgIGNvZGU6IFwibWFza2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kYXRhLWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE5hTjogTmFOLCBzdGFuZGluZyBmb3Igbm90IGEgbnVtYmVyLCBpcyBhIG51bWVyaWMgZGF0YSB0eXBlIHZhbHVlIHJlcHJlc2VudGluZyBhbiB1bmRlZmluZWQgb3IgdW5yZXByZXNlbnRhYmxlIHZhbHVlLlxyXG4gICAqL1xyXG4gIE5vdEFOdW1iZXI6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IGEgTnVtYmVyXCIsXHJcbiAgICBjb2RlOiBcIk5hTlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZGF0YS1hYnNlbnQtcmVhc29uXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBub3QtYXNrZWQ6IFRoZSB3b3JrZmxvdyBkaWRuJ3QgbGVhZCB0byB0aGlzIHZhbHVlIGJlaW5nIGtub3duLlxyXG4gICAqL1xyXG4gIE5vdEFza2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBBc2tlZFwiLFxyXG4gICAgY29kZTogXCJub3QtYXNrZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RhdGEtYWJzZW50LXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LXBlcmZvcm1lZDogVGhlIHZhbHVlIGlzIG5vdCBhdmFpbGFibGUgYmVjYXVzZSB0aGUgb2JzZXJ2YXRpb24gcHJvY2VkdXJlICh0ZXN0LCBldGMuKSB3YXMgbm90IHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBOb3RQZXJmb3JtZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IFBlcmZvcm1lZFwiLFxyXG4gICAgY29kZTogXCJub3QtcGVyZm9ybWVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kYXRhLWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHRlbXA6IFRoZXJlIGlzIHJlYXNvbiB0byBleHBlY3QgKGZyb20gdGhlIHdvcmtmbG93KSB0aGF0IHRoZSB2YWx1ZSBtYXkgYmVjb21lIGtub3duLlxyXG4gICAqL1xyXG4gIFRlbXA6IHtcclxuICAgIGRpc3BsYXk6IFwiVGVtcFwiLFxyXG4gICAgY29kZTogXCJ0ZW1wXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kYXRhLWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSB2YWx1ZSBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgVW5rbm93bjoge1xyXG4gICAgZGlzcGxheTogXCJVbmtub3duXCIsXHJcbiAgICBjb2RlOiBcInVua25vd25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2RhdGEtYWJzZW50LXJlYXNvblwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5zdXBwb3J0ZWQ6IFRoZSBzb3VyY2Ugc3lzdGVtIHdhc24ndCBjYXBhYmxlIG9mIHN1cHBvcnRpbmcgdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIFVuc3VwcG9ydGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlVuc3VwcG9ydGVkXCIsXHJcbiAgICBjb2RlOiBcInVuc3VwcG9ydGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9kYXRhLWFic2VudC1yZWFzb25cIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=