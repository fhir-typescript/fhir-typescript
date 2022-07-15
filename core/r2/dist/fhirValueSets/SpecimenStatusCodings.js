// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/specimen-status|1.0.2
/**
 * Codes providing the status/availability of a specimen.
 */
export const SpecimenStatusCodings = {
    /**
     * available: The physical specimen is present and in good condition.
     */
    Available: {
        display: "Available",
        code: "available",
        system: "http://hl7.org/fhir/specimen-status",
    },
    /**
     * entered-in-error: The specimen was entered in error and therefore nullified.
     */
    EnteredInError: {
        display: "Entered-in-error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/specimen-status",
    },
    /**
     * unavailable: There is no physical specimen because it is either lost, destroyed or consumed.
     */
    Unavailable: {
        display: "Unavailable",
        code: "unavailable",
        system: "http://hl7.org/fhir/specimen-status",
    },
    /**
     * unsatisfactory: The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    Unsatisfactory: {
        display: "Unsatisfactory",
        code: "unsatisfactory",
        system: "http://hl7.org/fhir/specimen-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY2ltZW5TdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TcGVjaW1lblN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsb0VBQW9FO0FBMEJwRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUE0QjtJQUM1RDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSxxQ0FBcUM7S0FDOUM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUscUNBQXFDO0tBQzlDO0lBQ0Q7O09BRUc7SUFDSCxjQUFjLEVBQUU7UUFDZCxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLHFDQUFxQztLQUM5QztDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3BlY2ltZW4tc3RhdHVzfDEuMC4yXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZXMgcHJvdmlkaW5nIHRoZSBzdGF0dXMvYXZhaWxhYmlsaXR5IG9mIGEgc3BlY2ltZW4uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTcGVjaW1lblN0YXR1c0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYXZhaWxhYmxlOiBUaGUgcGh5c2ljYWwgc3BlY2ltZW4gaXMgcHJlc2VudCBhbmQgaW4gZ29vZCBjb25kaXRpb24uXHJcbiAgICovXHJcbiAgQXZhaWxhYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBzcGVjaW1lbiB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgdGhlcmVmb3JlIG51bGxpZmllZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB1bmF2YWlsYWJsZTogVGhlcmUgaXMgbm8gcGh5c2ljYWwgc3BlY2ltZW4gYmVjYXVzZSBpdCBpcyBlaXRoZXIgbG9zdCwgZGVzdHJveWVkIG9yIGNvbnN1bWVkLlxyXG4gICAqL1xyXG4gIFVuYXZhaWxhYmxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHVuc2F0aXNmYWN0b3J5OiBUaGUgc3BlY2ltZW4gY2Fubm90IGJlIHVzZWQgYmVjYXVzZSBvZiBhIHF1YWxpdHkgaXNzdWUgc3VjaCBhcyBhIGJyb2tlbiBjb250YWluZXIsIGNvbnRhbWluYXRpb24sIG9yIHRvbyBvbGQuXHJcbiAgICovXHJcbiAgVW5zYXRpc2ZhY3Rvcnk6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBwcm92aWRpbmcgdGhlIHN0YXR1cy9hdmFpbGFiaWxpdHkgb2YgYSBzcGVjaW1lbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTcGVjaW1lblN0YXR1c0NvZGluZ3M6U3BlY2ltZW5TdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGF2YWlsYWJsZTogVGhlIHBoeXNpY2FsIHNwZWNpbWVuIGlzIHByZXNlbnQgYW5kIGluIGdvb2QgY29uZGl0aW9uLlxyXG4gICAqL1xyXG4gIEF2YWlsYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJBdmFpbGFibGVcIixcclxuICAgIGNvZGU6IFwiYXZhaWxhYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zcGVjaW1lbi1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBzcGVjaW1lbiB3YXMgZW50ZXJlZCBpbiBlcnJvciBhbmQgdGhlcmVmb3JlIG51bGxpZmllZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3NwZWNpbWVuLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogdW5hdmFpbGFibGU6IFRoZXJlIGlzIG5vIHBoeXNpY2FsIHNwZWNpbWVuIGJlY2F1c2UgaXQgaXMgZWl0aGVyIGxvc3QsIGRlc3Ryb3llZCBvciBjb25zdW1lZC5cclxuICAgKi9cclxuICBVbmF2YWlsYWJsZToge1xyXG4gICAgZGlzcGxheTogXCJVbmF2YWlsYWJsZVwiLFxyXG4gICAgY29kZTogXCJ1bmF2YWlsYWJsZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3BlY2ltZW4tc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB1bnNhdGlzZmFjdG9yeTogVGhlIHNwZWNpbWVuIGNhbm5vdCBiZSB1c2VkIGJlY2F1c2Ugb2YgYSBxdWFsaXR5IGlzc3VlIHN1Y2ggYXMgYSBicm9rZW4gY29udGFpbmVyLCBjb250YW1pbmF0aW9uLCBvciB0b28gb2xkLlxyXG4gICAqL1xyXG4gIFVuc2F0aXNmYWN0b3J5OiB7XHJcbiAgICBkaXNwbGF5OiBcIlVuc2F0aXNmYWN0b3J5XCIsXHJcbiAgICBjb2RlOiBcInVuc2F0aXNmYWN0b3J5XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zcGVjaW1lbi1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=