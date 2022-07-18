// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-type|4.3.0
/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export const MeasureTypeCodes = {
    /**
     * composite: A measure that combines multiple component measures in to a single quality measure.
     */
    Composite: "composite",
    /**
     * outcome: A measure that indicates the result of the performance (or non-performance) of a function or process.
     */
    Outcome: "outcome",
    /**
     * patient-reported-outcome: A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
     */
    PatientReportedOutcome: "patient-reported-outcome",
    /**
     * process: A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
     */
    Process: "process",
    /**
     * structure: A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
     */
    Structure: "structure",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVhc3VyZVR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSwwQkFBMEI7SUFDbEQ7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvbWVhc3VyZS10eXBlfDQuMy4wXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgbWVhc3VyZSAoaW5jbHVkZXMgY29kZXMgZnJvbSAyLjE2Ljg0MC4xLjExMzg4My4xLjExLjIwMzY4KS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNZWFzdXJlVHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBvc2l0ZTogQSBtZWFzdXJlIHRoYXQgY29tYmluZXMgbXVsdGlwbGUgY29tcG9uZW50IG1lYXN1cmVzIGluIHRvIGEgc2luZ2xlIHF1YWxpdHkgbWVhc3VyZS5cclxuICAgKi9cclxuICBDb21wb3NpdGU6IFwiY29tcG9zaXRlXCIsXHJcbiAgLyoqXHJcbiAgICogb3V0Y29tZTogQSBtZWFzdXJlIHRoYXQgaW5kaWNhdGVzIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlIChvciBub24tcGVyZm9ybWFuY2UpIG9mIGEgZnVuY3Rpb24gb3IgcHJvY2Vzcy5cclxuICAgKi9cclxuICBPdXRjb21lOiBcIm91dGNvbWVcIixcclxuICAvKipcclxuICAgKiBwYXRpZW50LXJlcG9ydGVkLW91dGNvbWU6IEEgbWVhc3VyZSB0aGF0IGZvY3VzZXMgb24gcGF0aWVudC1yZXBvcnRlZCBpbmZvcm1hdGlvbiBzdWNoIGFzIHBhdGllbnQgZW5nYWdlbWVudCBvciBwYXRpZW50IGV4cGVyaWVuY2UgbWVhc3VyZXMuXHJcbiAgICovXHJcbiAgUGF0aWVudFJlcG9ydGVkT3V0Y29tZTogXCJwYXRpZW50LXJlcG9ydGVkLW91dGNvbWVcIixcclxuICAvKipcclxuICAgKiBwcm9jZXNzOiBBIG1lYXN1cmUgd2hpY2ggZm9jdXNlcyBvbiBhIHByb2Nlc3Mgd2hpY2ggbGVhZHMgdG8gYSBjZXJ0YWluIG91dGNvbWUsIG1lYW5pbmcgdGhhdCBhIHNjaWVudGlmaWMgYmFzaXMgZXhpc3RzIGZvciBiZWxpZXZpbmcgdGhhdCB0aGUgcHJvY2Vzcywgd2hlbiBleGVjdXRlZCB3ZWxsLCB3aWxsIGluY3JlYXNlIHRoZSBwcm9iYWJpbGl0eSBvZiBhY2hpZXZpbmcgYSBkZXNpcmVkIG91dGNvbWUuXHJcbiAgICovXHJcbiAgUHJvY2VzczogXCJwcm9jZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogc3RydWN0dXJlOiBBIG1lYXN1cmUgdGhhdCBmb2N1c2VzIG9uIGEgaGVhbHRoIGNhcmUgcHJvdmlkZXIncyBjYXBhY2l0eSwgc3lzdGVtcywgYW5kIHByb2Nlc3NlcyB0byBwcm92aWRlIGhpZ2gtcXVhbGl0eSBjYXJlLlxyXG4gICAqL1xyXG4gIFN0cnVjdHVyZTogXCJzdHJ1Y3R1cmVcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBtZWFzdXJlIChpbmNsdWRlcyBjb2RlcyBmcm9tIDIuMTYuODQwLjEuMTEzODgzLjEuMTEuMjAzNjgpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVhc3VyZVR5cGVDb2RlVHlwZSA9IHR5cGVvZiBNZWFzdXJlVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBNZWFzdXJlVHlwZUNvZGVzXTtcclxuIl19