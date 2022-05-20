// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-population|4.0.1
/**
 * The type of population.
 */
export const MeasurePopulationCodes = {
    /**
     * denominator: The lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure.
     */
    Denominator: "denominator",
    /**
     * denominator-exception: Denominator exceptions are conditions that should remove a patient or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures.
     */
    DenominatorException: "denominator-exception",
    /**
     * denominator-exclusion: Denominator exclusion criteria define patients or events that should be removed from the denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams.
     */
    DenominatorExclusion: "denominator-exclusion",
    /**
     * initial-population: The initial population refers to all patients or events to be evaluated by a quality measure involving patients who share a common set of specified characterstics. All patients or events counted (for example, as numerator, as denominator) are drawn from the initial population.
     */
    InitialPopulation: "initial-population",
    /**
     * measure-observation: Defines the individual observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.
     */
    MeasureObservation: "measure-observation",
    /**
     * measure-population: Measure population criteria define the patients or events for which the individual observation for the measure should be taken. Measure populations are used for continuous variable measures rather than numerator and denominator criteria.
     */
    MeasurePopulation: "measure-population",
    /**
     * measure-population-exclusion: Measure population criteria define the patients or events that should be removed from the measure population before determining the outcome of one or more continuous variables defined for the measure observation. Measure population exclusion criteria are used within continuous variable measures to help narrow the measure population.
     */
    MeasurePopulationExclusion: "measure-population-exclusion",
    /**
     * numerator: The upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure.
     */
    Numerator: "numerator",
    /**
     * numerator-exclusion: Numerator exclusion criteria define patients or events to be removed from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures).
     */
    NumeratorExclusion: "numerator-exclusion",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVBvcHVsYXRpb25Db2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVhc3VyZVBvcHVsYXRpb25Db2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx1RUFBdUU7QUFFdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILFdBQVcsRUFBRSxhQUFhO0lBQzFCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsdUJBQXVCO0lBQzdDOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsdUJBQXVCO0lBQzdDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsb0JBQW9CO0lBQ3ZDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUscUJBQXFCO0lBQ3pDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsb0JBQW9CO0lBQ3ZDOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsOEJBQThCO0lBQzFEOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxxQkFBcUI7Q0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLXBvcHVsYXRpb258NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBwb3B1bGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lYXN1cmVQb3B1bGF0aW9uQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogZGVub21pbmF0b3I6IFRoZSBsb3dlciBwb3J0aW9uIG9mIGEgZnJhY3Rpb24gdXNlZCB0byBjYWxjdWxhdGUgYSByYXRlLCBwcm9wb3J0aW9uLCBvciByYXRpby4gVGhlIGRlbm9taW5hdG9yIGNhbiBiZSB0aGUgc2FtZSBhcyB0aGUgaW5pdGlhbCBwb3B1bGF0aW9uLCBvciBhIHN1YnNldCBvZiB0aGUgaW5pdGlhbCBwb3B1bGF0aW9uIHRvIGZ1cnRoZXIgY29uc3RyYWluIHRoZSBwb3B1bGF0aW9uIGZvciB0aGUgcHVycG9zZSBvZiB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBEZW5vbWluYXRvcjogXCJkZW5vbWluYXRvclwiLFxyXG4gIC8qKlxyXG4gICAqIGRlbm9taW5hdG9yLWV4Y2VwdGlvbjogRGVub21pbmF0b3IgZXhjZXB0aW9ucyBhcmUgY29uZGl0aW9ucyB0aGF0IHNob3VsZCByZW1vdmUgYSBwYXRpZW50IG9yIGV2ZW50IGZyb20gdGhlIGRlbm9taW5hdG9yIG9mIGEgbWVhc3VyZSBvbmx5IGlmIHRoZSBudW1lcmF0b3IgY3JpdGVyaWEgYXJlIG5vdCBtZXQuIERlbm9taW5hdG9yIGV4Y2VwdGlvbiBhbGxvd3MgZm9yIGFkanVzdG1lbnQgb2YgdGhlIGNhbGN1bGF0ZWQgc2NvcmUgZm9yIHRob3NlIHByb3ZpZGVycyB3aXRoIGhpZ2hlciByaXNrIHBvcHVsYXRpb25zLiBEZW5vbWluYXRvciBleGNlcHRpb24gY3JpdGVyaWEgYXJlIG9ubHkgdXNlZCBpbiBwcm9wb3J0aW9uIG1lYXN1cmVzLlxyXG4gICAqL1xyXG4gIERlbm9taW5hdG9yRXhjZXB0aW9uOiBcImRlbm9taW5hdG9yLWV4Y2VwdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIGRlbm9taW5hdG9yLWV4Y2x1c2lvbjogRGVub21pbmF0b3IgZXhjbHVzaW9uIGNyaXRlcmlhIGRlZmluZSBwYXRpZW50cyBvciBldmVudHMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBkZW5vbWluYXRvciBiZWZvcmUgZGV0ZXJtaW5pbmcgaWYgbnVtZXJhdG9yIGNyaXRlcmlhIGFyZSBtZXQuIERlbm9taW5hdG9yIGV4Y2x1c2lvbnMgYXJlIHVzZWQgaW4gcHJvcG9ydGlvbiBhbmQgcmF0aW8gbWVhc3VyZXMgdG8gaGVscCBuYXJyb3cgdGhlIGRlbm9taW5hdG9yLiBGb3IgZXhhbXBsZSwgcGF0aWVudHMgd2l0aCBiaWxhdGVyYWwgbG93ZXIgZXh0cmVtaXR5IGFtcHV0YXRpb25zIHdvdWxkIGJlIGxpc3RlZCBhcyBhIGRlbm9taW5hdG9yIGV4Y2x1c2lvbiBmb3IgYSBtZWFzdXJlIHJlcXVpcmluZyBmb290IGV4YW1zLlxyXG4gICAqL1xyXG4gIERlbm9taW5hdG9yRXhjbHVzaW9uOiBcImRlbm9taW5hdG9yLWV4Y2x1c2lvblwiLFxyXG4gIC8qKlxyXG4gICAqIGluaXRpYWwtcG9wdWxhdGlvbjogVGhlIGluaXRpYWwgcG9wdWxhdGlvbiByZWZlcnMgdG8gYWxsIHBhdGllbnRzIG9yIGV2ZW50cyB0byBiZSBldmFsdWF0ZWQgYnkgYSBxdWFsaXR5IG1lYXN1cmUgaW52b2x2aW5nIHBhdGllbnRzIHdobyBzaGFyZSBhIGNvbW1vbiBzZXQgb2Ygc3BlY2lmaWVkIGNoYXJhY3RlcnN0aWNzLiBBbGwgcGF0aWVudHMgb3IgZXZlbnRzIGNvdW50ZWQgKGZvciBleGFtcGxlLCBhcyBudW1lcmF0b3IsIGFzIGRlbm9taW5hdG9yKSBhcmUgZHJhd24gZnJvbSB0aGUgaW5pdGlhbCBwb3B1bGF0aW9uLlxyXG4gICAqL1xyXG4gIEluaXRpYWxQb3B1bGF0aW9uOiBcImluaXRpYWwtcG9wdWxhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIG1lYXN1cmUtb2JzZXJ2YXRpb246IERlZmluZXMgdGhlIGluZGl2aWR1YWwgb2JzZXJ2YXRpb24gdG8gYmUgcGVyZm9ybWVkIGZvciBlYWNoIHBhdGllbnQgb3IgZXZlbnQgaW4gdGhlIG1lYXN1cmUgcG9wdWxhdGlvbi4gTWVhc3VyZSBvYnNlcnZhdGlvbnMgZm9yIGVhY2ggY2FzZSBpbiB0aGUgcG9wdWxhdGlvbiBhcmUgYWdncmVnYXRlZCB0byBkZXRlcm1pbmUgdGhlIG92ZXJhbGwgbWVhc3VyZSBzY29yZSBmb3IgdGhlIHBvcHVsYXRpb24uXHJcbiAgICovXHJcbiAgTWVhc3VyZU9ic2VydmF0aW9uOiBcIm1lYXN1cmUtb2JzZXJ2YXRpb25cIixcclxuICAvKipcclxuICAgKiBtZWFzdXJlLXBvcHVsYXRpb246IE1lYXN1cmUgcG9wdWxhdGlvbiBjcml0ZXJpYSBkZWZpbmUgdGhlIHBhdGllbnRzIG9yIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGluZGl2aWR1YWwgb2JzZXJ2YXRpb24gZm9yIHRoZSBtZWFzdXJlIHNob3VsZCBiZSB0YWtlbi4gTWVhc3VyZSBwb3B1bGF0aW9ucyBhcmUgdXNlZCBmb3IgY29udGludW91cyB2YXJpYWJsZSBtZWFzdXJlcyByYXRoZXIgdGhhbiBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIE1lYXN1cmVQb3B1bGF0aW9uOiBcIm1lYXN1cmUtcG9wdWxhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIG1lYXN1cmUtcG9wdWxhdGlvbi1leGNsdXNpb246IE1lYXN1cmUgcG9wdWxhdGlvbiBjcml0ZXJpYSBkZWZpbmUgdGhlIHBhdGllbnRzIG9yIGV2ZW50cyB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGZyb20gdGhlIG1lYXN1cmUgcG9wdWxhdGlvbiBiZWZvcmUgZGV0ZXJtaW5pbmcgdGhlIG91dGNvbWUgb2Ygb25lIG9yIG1vcmUgY29udGludW91cyB2YXJpYWJsZXMgZGVmaW5lZCBmb3IgdGhlIG1lYXN1cmUgb2JzZXJ2YXRpb24uIE1lYXN1cmUgcG9wdWxhdGlvbiBleGNsdXNpb24gY3JpdGVyaWEgYXJlIHVzZWQgd2l0aGluIGNvbnRpbnVvdXMgdmFyaWFibGUgbWVhc3VyZXMgdG8gaGVscCBuYXJyb3cgdGhlIG1lYXN1cmUgcG9wdWxhdGlvbi5cclxuICAgKi9cclxuICBNZWFzdXJlUG9wdWxhdGlvbkV4Y2x1c2lvbjogXCJtZWFzdXJlLXBvcHVsYXRpb24tZXhjbHVzaW9uXCIsXHJcbiAgLyoqXHJcbiAgICogbnVtZXJhdG9yOiBUaGUgdXBwZXIgcG9ydGlvbiBvZiBhIGZyYWN0aW9uIHVzZWQgdG8gY2FsY3VsYXRlIGEgcmF0ZSwgcHJvcG9ydGlvbiwgb3IgcmF0aW8uIEFsc28gY2FsbGVkIHRoZSBtZWFzdXJlIGZvY3VzLCBpdCBpcyB0aGUgdGFyZ2V0IHByb2Nlc3MsIGNvbmRpdGlvbiwgZXZlbnQsIG9yIG91dGNvbWUuIE51bWVyYXRvciBjcml0ZXJpYSBhcmUgdGhlIHByb2Nlc3NlcyBvciBvdXRjb21lcyBleHBlY3RlZCBmb3IgZWFjaCBwYXRpZW50LCBvciBldmVudCBkZWZpbmVkIGluIHRoZSBkZW5vbWluYXRvci4gQSBudW1lcmF0b3Igc3RhdGVtZW50IGRlc2NyaWJlcyB0aGUgY2xpbmljYWwgYWN0aW9uIHRoYXQgc2F0aXNmaWVzIHRoZSBjb25kaXRpb25zIG9mIHRoZSBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIE51bWVyYXRvcjogXCJudW1lcmF0b3JcIixcclxuICAvKipcclxuICAgKiBudW1lcmF0b3ItZXhjbHVzaW9uOiBOdW1lcmF0b3IgZXhjbHVzaW9uIGNyaXRlcmlhIGRlZmluZSBwYXRpZW50cyBvciBldmVudHMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBudW1lcmF0b3IuIE51bWVyYXRvciBleGNsdXNpb25zIGFyZSB1c2VkIGluIHByb3BvcnRpb24gYW5kIHJhdGlvIG1lYXN1cmVzIHRvIGhlbHAgbmFycm93IHRoZSBudW1lcmF0b3IgKGZvciBpbnZlcnRlZCBtZWFzdXJlcykuXHJcbiAgICovXHJcbiAgTnVtZXJhdG9yRXhjbHVzaW9uOiBcIm51bWVyYXRvci1leGNsdXNpb25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBwb3B1bGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWVhc3VyZVBvcHVsYXRpb25Db2RlVHlwZSA9IHR5cGVvZiBNZWFzdXJlUG9wdWxhdGlvbkNvZGVzW2tleW9mIHR5cGVvZiBNZWFzdXJlUG9wdWxhdGlvbkNvZGVzXTtcclxuIl19