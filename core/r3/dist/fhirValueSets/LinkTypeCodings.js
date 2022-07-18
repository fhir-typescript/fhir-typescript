// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/link-type|3.0.2
/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkTypeCodings = {
    /**
     * refer: The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
     */
    Refer: {
        display: "Refer",
        code: "refer",
        system: "http://hl7.org/fhir/link-type",
    },
    /**
     * replaced-by: The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
     */
    ReplacedBy: {
        display: "Replaced-by",
        code: "replaced-by",
        system: "http://hl7.org/fhir/link-type",
    },
    /**
     * replaces: The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
     */
    Replaces: {
        display: "Replaces",
        code: "replaces",
        system: "http://hl7.org/fhir/link-type",
    },
    /**
     * seealso: The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
     */
    SeeAlso: {
        display: "See also",
        code: "seealso",
        system: "http://hl7.org/fhir/link-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua1R5cGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9MaW5rVHlwZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOERBQThEO0FBMEI5RDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBc0I7SUFDaEQ7O09BRUc7SUFDSCxLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSwrQkFBK0I7S0FDeEM7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtCQUErQjtLQUN4QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbGluay10eXBlfDMuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbGluayBiZXR3ZWVuIHRoaXMgcGF0aWVudCByZXNvdXJjZSBhbmQgYW5vdGhlciBwYXRpZW50IHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGlua1R5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIHJlZmVyOiBUaGUgcGF0aWVudCByZXNvdXJjZSBjb250YWluaW5nIHRoaXMgbGluayBpcyBpbiB1c2UgYW5kIHZhbGlkIGJ1dCBub3QgY29uc2lkZXJlZCB0aGUgbWFpbiBzb3VyY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgYSBwYXRpZW50LiBUaGUgbGluayBwb2ludHMgZm9yd2FyZCB0byBhbm90aGVyIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBzaG91bGQgYmUgY29uc3VsdGVkIHRvIHJldHJpZXZlIGFkZGl0aW9uYWwgcGF0aWVudCBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBSZWZlcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXBsYWNlZC1ieTogVGhlIHBhdGllbnQgcmVzb3VyY2UgY29udGFpbmluZyB0aGlzIGxpbmsgbXVzdCBubyBsb25nZXIgYmUgdXNlZC4gVGhlIGxpbmsgcG9pbnRzIGZvcndhcmQgdG8gYW5vdGhlciBwYXRpZW50IHJlc291cmNlIHRoYXQgbXVzdCBiZSB1c2VkIGluIGxpZXUgb2YgdGhlIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBjb250YWlucyB0aGlzIGxpbmsuXHJcbiAgICovXHJcbiAgUmVwbGFjZWRCeTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiByZXBsYWNlczogVGhlIHBhdGllbnQgcmVzb3VyY2UgY29udGFpbmluZyB0aGlzIGxpbmsgaXMgdGhlIGN1cnJlbnQgYWN0aXZlIHBhdGllbnQgcmVjb3JkLiBUaGUgbGluayBwb2ludHMgYmFjayB0byBhbiBpbmFjdGl2ZSBwYXRpZW50IHJlc291cmNlIHRoYXQgaGFzIGJlZW4gbWVyZ2VkIGludG8gdGhpcyByZXNvdXJjZSwgYW5kIHNob3VsZCBiZSBjb25zdWx0ZWQgdG8gcmV0cmlldmUgYWRkaXRpb25hbCByZWZlcmVuY2VkIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIFJlcGxhY2VzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHNlZWFsc286IFRoZSBwYXRpZW50IHJlc291cmNlIGNvbnRhaW5pbmcgdGhpcyBsaW5rIGlzIGluIHVzZSBhbmQgdmFsaWQsIGJ1dCBwb2ludHMgdG8gYW5vdGhlciBwYXRpZW50IHJlc291cmNlIHRoYXQgaXMga25vd24gdG8gY29udGFpbiBkYXRhIGFib3V0IHRoZSBzYW1lIHBlcnNvbi4gRGF0YSBpbiB0aGlzIHJlc291cmNlIG1pZ2h0IG92ZXJsYXAgb3IgY29udHJhZGljdCBpbmZvcm1hdGlvbiBmb3VuZCBpbiB0aGUgb3RoZXIgcGF0aWVudCByZXNvdXJjZS4gVGhpcyBsaW5rIGRvZXMgbm90IGluZGljYXRlIGFueSByZWxhdGl2ZSBpbXBvcnRhbmNlIG9mIHRoZSByZXNvdXJjZXMgY29uY2VybmVkLCBhbmQgYm90aCBzaG91bGQgYmUgcmVnYXJkZWQgYXMgZXF1YWxseSB2YWxpZC5cclxuICAgKi9cclxuICBTZWVBbHNvOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbGluayBiZXR3ZWVuIHRoaXMgcGF0aWVudCByZXNvdXJjZSBhbmQgYW5vdGhlciBwYXRpZW50IHJlc291cmNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IExpbmtUeXBlQ29kaW5nczpMaW5rVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogcmVmZXI6IFRoZSBwYXRpZW50IHJlc291cmNlIGNvbnRhaW5pbmcgdGhpcyBsaW5rIGlzIGluIHVzZSBhbmQgdmFsaWQgYnV0IG5vdCBjb25zaWRlcmVkIHRoZSBtYWluIHNvdXJjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCBhIHBhdGllbnQuIFRoZSBsaW5rIHBvaW50cyBmb3J3YXJkIHRvIGFub3RoZXIgcGF0aWVudCByZXNvdXJjZSB0aGF0IHNob3VsZCBiZSBjb25zdWx0ZWQgdG8gcmV0cmlldmUgYWRkaXRpb25hbCBwYXRpZW50IGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIFJlZmVyOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlZmVyXCIsXHJcbiAgICBjb2RlOiBcInJlZmVyXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9saW5rLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2VkLWJ5OiBUaGUgcGF0aWVudCByZXNvdXJjZSBjb250YWluaW5nIHRoaXMgbGluayBtdXN0IG5vIGxvbmdlciBiZSB1c2VkLiBUaGUgbGluayBwb2ludHMgZm9yd2FyZCB0byBhbm90aGVyIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBtdXN0IGJlIHVzZWQgaW4gbGlldSBvZiB0aGUgcGF0aWVudCByZXNvdXJjZSB0aGF0IGNvbnRhaW5zIHRoaXMgbGluay5cclxuICAgKi9cclxuICBSZXBsYWNlZEJ5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlJlcGxhY2VkLWJ5XCIsXHJcbiAgICBjb2RlOiBcInJlcGxhY2VkLWJ5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9saW5rLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2VzOiBUaGUgcGF0aWVudCByZXNvdXJjZSBjb250YWluaW5nIHRoaXMgbGluayBpcyB0aGUgY3VycmVudCBhY3RpdmUgcGF0aWVudCByZWNvcmQuIFRoZSBsaW5rIHBvaW50cyBiYWNrIHRvIGFuIGluYWN0aXZlIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBoYXMgYmVlbiBtZXJnZWQgaW50byB0aGlzIHJlc291cmNlLCBhbmQgc2hvdWxkIGJlIGNvbnN1bHRlZCB0byByZXRyaWV2ZSBhZGRpdGlvbmFsIHJlZmVyZW5jZWQgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgUmVwbGFjZXM6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVwbGFjZXNcIixcclxuICAgIGNvZGU6IFwicmVwbGFjZXNcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2xpbmstdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc2VlYWxzbzogVGhlIHBhdGllbnQgcmVzb3VyY2UgY29udGFpbmluZyB0aGlzIGxpbmsgaXMgaW4gdXNlIGFuZCB2YWxpZCwgYnV0IHBvaW50cyB0byBhbm90aGVyIHBhdGllbnQgcmVzb3VyY2UgdGhhdCBpcyBrbm93biB0byBjb250YWluIGRhdGEgYWJvdXQgdGhlIHNhbWUgcGVyc29uLiBEYXRhIGluIHRoaXMgcmVzb3VyY2UgbWlnaHQgb3ZlcmxhcCBvciBjb250cmFkaWN0IGluZm9ybWF0aW9uIGZvdW5kIGluIHRoZSBvdGhlciBwYXRpZW50IHJlc291cmNlLiBUaGlzIGxpbmsgZG9lcyBub3QgaW5kaWNhdGUgYW55IHJlbGF0aXZlIGltcG9ydGFuY2Ugb2YgdGhlIHJlc291cmNlcyBjb25jZXJuZWQsIGFuZCBib3RoIHNob3VsZCBiZSByZWdhcmRlZCBhcyBlcXVhbGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIFNlZUFsc286IHtcclxuICAgIGRpc3BsYXk6IFwiU2VlIGFsc29cIixcclxuICAgIGNvZGU6IFwic2VlYWxzb1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbGluay10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19