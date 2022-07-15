// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/remittance-outcome|4.3.0
/**
 * The outcome of the processing.
 */
export const RemittanceOutcomeCodings = {
    /**
     * complete: The processing completed without errors.
     */
    Complete: {
        display: "Complete",
        code: "complete",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * error: The processing identified errors.
     */
    Error: {
        display: "Error",
        code: "error",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * partial: No errors have been detected and some of the adjudication has been performed.
     */
    Partial: {
        display: "Partial",
        code: "partial",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
    /**
     * queued: The Claim/Pre-authorization/Pre-determination has been received but processing has not begun.
     */
    Queued: {
        display: "Queued",
        code: "queued",
        system: "http://hl7.org/fhir/remittance-outcome",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtaXR0YW5jZU91dGNvbWVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZW1pdHRhbmNlT3V0Y29tZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsdUVBQXVFO0FBMEJ2RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUErQjtJQUNsRTs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLHdDQUF3QztLQUNqRDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsd0NBQXdDO0tBQ2pEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSx3Q0FBd0M7S0FDakQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZW1pdHRhbmNlLW91dGNvbWV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgb3V0Y29tZSBvZiB0aGUgcHJvY2Vzc2luZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlbWl0dGFuY2VPdXRjb21lQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZTogVGhlIHByb2Nlc3NpbmcgY29tcGxldGVkIHdpdGhvdXQgZXJyb3JzLlxyXG4gICAqL1xyXG4gIENvbXBsZXRlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVycm9yOiBUaGUgcHJvY2Vzc2luZyBpZGVudGlmaWVkIGVycm9ycy5cclxuICAgKi9cclxuICBFcnJvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwYXJ0aWFsOiBObyBlcnJvcnMgaGF2ZSBiZWVuIGRldGVjdGVkIGFuZCBzb21lIG9mIHRoZSBhZGp1ZGljYXRpb24gaGFzIGJlZW4gcGVyZm9ybWVkLlxyXG4gICAqL1xyXG4gIFBhcnRpYWw6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcXVldWVkOiBUaGUgQ2xhaW0vUHJlLWF1dGhvcml6YXRpb24vUHJlLWRldGVybWluYXRpb24gaGFzIGJlZW4gcmVjZWl2ZWQgYnV0IHByb2Nlc3NpbmcgaGFzIG5vdCBiZWd1bi5cclxuICAgKi9cclxuICBRdWV1ZWQ6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgb3V0Y29tZSBvZiB0aGUgcHJvY2Vzc2luZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZW1pdHRhbmNlT3V0Y29tZUNvZGluZ3M6UmVtaXR0YW5jZU91dGNvbWVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlOiBUaGUgcHJvY2Vzc2luZyBjb21wbGV0ZWQgd2l0aG91dCBlcnJvcnMuXHJcbiAgICovXHJcbiAgQ29tcGxldGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVcIixcclxuICAgIGNvZGU6IFwiY29tcGxldGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlbWl0dGFuY2Utb3V0Y29tZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZXJyb3I6IFRoZSBwcm9jZXNzaW5nIGlkZW50aWZpZWQgZXJyb3JzLlxyXG4gICAqL1xyXG4gIEVycm9yOiB7XHJcbiAgICBkaXNwbGF5OiBcIkVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZW1pdHRhbmNlLW91dGNvbWVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBhcnRpYWw6IE5vIGVycm9ycyBoYXZlIGJlZW4gZGV0ZWN0ZWQgYW5kIHNvbWUgb2YgdGhlIGFkanVkaWNhdGlvbiBoYXMgYmVlbiBwZXJmb3JtZWQuXHJcbiAgICovXHJcbiAgUGFydGlhbDoge1xyXG4gICAgZGlzcGxheTogXCJQYXJ0aWFsXCIsXHJcbiAgICBjb2RlOiBcInBhcnRpYWxcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlbWl0dGFuY2Utb3V0Y29tZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcXVldWVkOiBUaGUgQ2xhaW0vUHJlLWF1dGhvcml6YXRpb24vUHJlLWRldGVybWluYXRpb24gaGFzIGJlZW4gcmVjZWl2ZWQgYnV0IHByb2Nlc3NpbmcgaGFzIG5vdCBiZWd1bi5cclxuICAgKi9cclxuICBRdWV1ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiUXVldWVkXCIsXHJcbiAgICBjb2RlOiBcInF1ZXVlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVtaXR0YW5jZS1vdXRjb21lXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19