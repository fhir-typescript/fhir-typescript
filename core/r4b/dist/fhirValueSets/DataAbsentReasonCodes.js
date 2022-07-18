// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/data-absent-reason|4.3.0
/**
 * Used to specify why the normally expected content of the data element is missing.
 */
export const DataAbsentReasonCodes = {
    /**
     * as-text: The content of the data is represented in the resource narrative.
     */
    AsText: "as-text",
    /**
     * asked-declined: The source was asked but declined to answer.
     */
    AskedButDeclined: "asked-declined",
    /**
     * asked-unknown: The source was asked but does not know the value.
     */
    AskedButUnknown: "asked-unknown",
    /**
     * error: Some system or workflow process error means that the information is not available.
     */
    Error: "error",
    /**
     * masked: The information is not available due to security, privacy or related reasons.
     */
    Masked: "masked",
    /**
     * negative-infinity: The numeric value is excessively low and unrepresentable due to a floating point processing error.
     */
    NegativeInfinityNINF: "negative-infinity",
    /**
     * not-a-number: The numeric value is undefined or unrepresentable due to a floating point processing error.
     */
    NotANumberNaN: "not-a-number",
    /**
     * not-applicable: There is no proper value for this element (e.g. last menstrual period for a male).
     */
    NotApplicable: "not-applicable",
    /**
     * not-asked: The workflow didn't lead to this value being known.
     */
    NotAsked: "not-asked",
    /**
     * not-performed: The value is not available because the observation procedure (test, etc.) was not performed.
     */
    NotPerformed: "not-performed",
    /**
     * not-permitted: The value is not permitted in this context (e.g. due to profiles, or the base data types).
     */
    NotPermitted: "not-permitted",
    /**
     * positive-infinity: The numeric value is excessively high and unrepresentable due to a floating point processing error.
     */
    PositiveInfinityPINF: "positive-infinity",
    /**
     * temp-unknown: There is reason to expect (from the workflow) that the value may become known.
     */
    TemporarilyUnknown: "temp-unknown",
    /**
     * unknown: The value is expected to exist but is not known.
     */
    Unknown: "unknown",
    /**
     * unsupported: The source system wasn't capable of supporting this element.
     */
    Unsupported: "unsupported",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUFic2VudFJlYXNvbkNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9EYXRhQWJzZW50UmVhc29uQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBRXZFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUc7SUFDbkM7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUztJQUNqQjs7T0FFRztJQUNILGdCQUFnQixFQUFFLGdCQUFnQjtJQUNsQzs7T0FFRztJQUNILGVBQWUsRUFBRSxlQUFlO0lBQ2hDOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsbUJBQW1CO0lBQ3pDOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGNBQWM7SUFDN0I7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxZQUFZLEVBQUUsZUFBZTtJQUM3Qjs7T0FFRztJQUNILFlBQVksRUFBRSxlQUFlO0lBQzdCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsbUJBQW1CO0lBQ3pDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUsY0FBYztJQUNsQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7Q0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZGF0YS1hYnNlbnQtcmVhc29ufDQuMy4wXHJcblxyXG4vKipcclxuICogVXNlZCB0byBzcGVjaWZ5IHdoeSB0aGUgbm9ybWFsbHkgZXhwZWN0ZWQgY29udGVudCBvZiB0aGUgZGF0YSBlbGVtZW50IGlzIG1pc3NpbmcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRGF0YUFic2VudFJlYXNvbkNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFzLXRleHQ6IFRoZSBjb250ZW50IG9mIHRoZSBkYXRhIGlzIHJlcHJlc2VudGVkIGluIHRoZSByZXNvdXJjZSBuYXJyYXRpdmUuXHJcbiAgICovXHJcbiAgQXNUZXh0OiBcImFzLXRleHRcIixcclxuICAvKipcclxuICAgKiBhc2tlZC1kZWNsaW5lZDogVGhlIHNvdXJjZSB3YXMgYXNrZWQgYnV0IGRlY2xpbmVkIHRvIGFuc3dlci5cclxuICAgKi9cclxuICBBc2tlZEJ1dERlY2xpbmVkOiBcImFza2VkLWRlY2xpbmVkXCIsXHJcbiAgLyoqXHJcbiAgICogYXNrZWQtdW5rbm93bjogVGhlIHNvdXJjZSB3YXMgYXNrZWQgYnV0IGRvZXMgbm90IGtub3cgdGhlIHZhbHVlLlxyXG4gICAqL1xyXG4gIEFza2VkQnV0VW5rbm93bjogXCJhc2tlZC11bmtub3duXCIsXHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFNvbWUgc3lzdGVtIG9yIHdvcmtmbG93IHByb2Nlc3MgZXJyb3IgbWVhbnMgdGhhdCB0aGUgaW5mb3JtYXRpb24gaXMgbm90IGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBFcnJvcjogXCJlcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIG1hc2tlZDogVGhlIGluZm9ybWF0aW9uIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5LCBwcml2YWN5IG9yIHJlbGF0ZWQgcmVhc29ucy5cclxuICAgKi9cclxuICBNYXNrZWQ6IFwibWFza2VkXCIsXHJcbiAgLyoqXHJcbiAgICogbmVnYXRpdmUtaW5maW5pdHk6IFRoZSBudW1lcmljIHZhbHVlIGlzIGV4Y2Vzc2l2ZWx5IGxvdyBhbmQgdW5yZXByZXNlbnRhYmxlIGR1ZSB0byBhIGZsb2F0aW5nIHBvaW50IHByb2Nlc3NpbmcgZXJyb3IuXHJcbiAgICovXHJcbiAgTmVnYXRpdmVJbmZpbml0eU5JTkY6IFwibmVnYXRpdmUtaW5maW5pdHlcIixcclxuICAvKipcclxuICAgKiBub3QtYS1udW1iZXI6IFRoZSBudW1lcmljIHZhbHVlIGlzIHVuZGVmaW5lZCBvciB1bnJlcHJlc2VudGFibGUgZHVlIHRvIGEgZmxvYXRpbmcgcG9pbnQgcHJvY2Vzc2luZyBlcnJvci5cclxuICAgKi9cclxuICBOb3RBTnVtYmVyTmFOOiBcIm5vdC1hLW51bWJlclwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1hcHBsaWNhYmxlOiBUaGVyZSBpcyBubyBwcm9wZXIgdmFsdWUgZm9yIHRoaXMgZWxlbWVudCAoZS5nLiBsYXN0IG1lbnN0cnVhbCBwZXJpb2QgZm9yIGEgbWFsZSkuXHJcbiAgICovXHJcbiAgTm90QXBwbGljYWJsZTogXCJub3QtYXBwbGljYWJsZVwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1hc2tlZDogVGhlIHdvcmtmbG93IGRpZG4ndCBsZWFkIHRvIHRoaXMgdmFsdWUgYmVpbmcga25vd24uXHJcbiAgICovXHJcbiAgTm90QXNrZWQ6IFwibm90LWFza2VkXCIsXHJcbiAgLyoqXHJcbiAgICogbm90LXBlcmZvcm1lZDogVGhlIHZhbHVlIGlzIG5vdCBhdmFpbGFibGUgYmVjYXVzZSB0aGUgb2JzZXJ2YXRpb24gcHJvY2VkdXJlICh0ZXN0LCBldGMuKSB3YXMgbm90IHBlcmZvcm1lZC5cclxuICAgKi9cclxuICBOb3RQZXJmb3JtZWQ6IFwibm90LXBlcmZvcm1lZFwiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1wZXJtaXR0ZWQ6IFRoZSB2YWx1ZSBpcyBub3QgcGVybWl0dGVkIGluIHRoaXMgY29udGV4dCAoZS5nLiBkdWUgdG8gcHJvZmlsZXMsIG9yIHRoZSBiYXNlIGRhdGEgdHlwZXMpLlxyXG4gICAqL1xyXG4gIE5vdFBlcm1pdHRlZDogXCJub3QtcGVybWl0dGVkXCIsXHJcbiAgLyoqXHJcbiAgICogcG9zaXRpdmUtaW5maW5pdHk6IFRoZSBudW1lcmljIHZhbHVlIGlzIGV4Y2Vzc2l2ZWx5IGhpZ2ggYW5kIHVucmVwcmVzZW50YWJsZSBkdWUgdG8gYSBmbG9hdGluZyBwb2ludCBwcm9jZXNzaW5nIGVycm9yLlxyXG4gICAqL1xyXG4gIFBvc2l0aXZlSW5maW5pdHlQSU5GOiBcInBvc2l0aXZlLWluZmluaXR5XCIsXHJcbiAgLyoqXHJcbiAgICogdGVtcC11bmtub3duOiBUaGVyZSBpcyByZWFzb24gdG8gZXhwZWN0IChmcm9tIHRoZSB3b3JrZmxvdykgdGhhdCB0aGUgdmFsdWUgbWF5IGJlY29tZSBrbm93bi5cclxuICAgKi9cclxuICBUZW1wb3JhcmlseVVua25vd246IFwidGVtcC11bmtub3duXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIHZhbHVlIGlzIGV4cGVjdGVkIHRvIGV4aXN0IGJ1dCBpcyBub3Qga25vd24uXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbiAgLyoqXHJcbiAgICogdW5zdXBwb3J0ZWQ6IFRoZSBzb3VyY2Ugc3lzdGVtIHdhc24ndCBjYXBhYmxlIG9mIHN1cHBvcnRpbmcgdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIFVuc3VwcG9ydGVkOiBcInVuc3VwcG9ydGVkXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVXNlZCB0byBzcGVjaWZ5IHdoeSB0aGUgbm9ybWFsbHkgZXhwZWN0ZWQgY29udGVudCBvZiB0aGUgZGF0YSBlbGVtZW50IGlzIG1pc3NpbmcuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEYXRhQWJzZW50UmVhc29uQ29kZVR5cGUgPSB0eXBlb2YgRGF0YUFic2VudFJlYXNvbkNvZGVzW2tleW9mIHR5cGVvZiBEYXRhQWJzZW50UmVhc29uQ29kZXNdO1xyXG4iXX0=