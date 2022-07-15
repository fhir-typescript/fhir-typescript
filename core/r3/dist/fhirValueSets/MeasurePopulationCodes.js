// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-population|3.0.2
/**
 * The type of population
 */
export const MeasurePopulationCodes = {
    /**
     * denominator: The lower portion of a fraction used to calculate a rate, proportion, or ratio. The denominator can be the same as the initial population, or a subset of the initial population to further constrain the population for the purpose of the measure
     */
    Denominator: "denominator",
    /**
     * denominator-exception: Denominator exceptions are conditions that should remove a patient or event from the denominator of a measure only if the numerator criteria are not met. Denominator exception allows for adjustment of the calculated score for those providers with higher risk populations. Denominator exception criteria are only used in proportion measures
     */
    DenominatorException: "denominator-exception",
    /**
     * denominator-exclusion: Denominator exclusion criteria define patients or events that should be removed from the denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator. For example, patients with bilateral lower extremity amputations would be listed as a denominator exclusion for a measure requiring foot exams
     */
    DenominatorExclusion: "denominator-exclusion",
    /**
     * initial-population: The initial population refers to all patients or events to be evaluated by a quality measure involving patients who share a common set of specified characterstics. All patients or events counted (for example, as numerator, as denominator) are drawn from the initial population
     */
    InitialPopulation: "initial-population",
    /**
     * measure-observation: Defines the individual observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population
     */
    MeasureObservation: "measure-observation",
    /**
     * measure-population: Measure population criteria define the patients or events for which the individual observation for the measure should be taken. Measure populations are used for continuous variable measures rather than numerator and denominator criteria
     */
    MeasurePopulation: "measure-population",
    /**
     * measure-population-exclusion: Measure population criteria define the patients or events that should be removed from the measure population before determining the outcome of one or more continuous variables defined for the measure observation. Measure population exclusion criteria are used within continuous variable measures to help narrow the measure population
     */
    MeasurePopulationExclusion: "measure-population-exclusion",
    /**
     * numerator: The upper portion of a fraction used to calculate a rate, proportion, or ratio. Also called the measure focus, it is the target process, condition, event, or outcome. Numerator criteria are the processes or outcomes expected for each patient, or event defined in the denominator. A numerator statement describes the clinical action that satisfies the conditions of the measure
     */
    Numerator: "numerator",
    /**
     * numerator-exclusion: Numerator exclusion criteria define patients or events to be removed from the numerator. Numerator exclusions are used in proportion and ratio measures to help narrow the numerator (for inverted measures)
     */
    NumeratorExclusion: "numerator-exclusion",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZVBvcHVsYXRpb25Db2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTWVhc3VyZVBvcHVsYXRpb25Db2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyx1RUFBdUU7QUFFdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILFdBQVcsRUFBRSxhQUFhO0lBQzFCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsdUJBQXVCO0lBQzdDOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsdUJBQXVCO0lBQzdDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsb0JBQW9CO0lBQ3ZDOztPQUVHO0lBQ0gsa0JBQWtCLEVBQUUscUJBQXFCO0lBQ3pDOztPQUVHO0lBQ0gsaUJBQWlCLEVBQUUsb0JBQW9CO0lBQ3ZDOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsOEJBQThCO0lBQzFEOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxrQkFBa0IsRUFBRSxxQkFBcUI7Q0FDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLXBvcHVsYXRpb258My4wLjJcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBwb3B1bGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTWVhc3VyZVBvcHVsYXRpb25Db2RlcyA9IHtcclxuICAvKipcclxuICAgKiBkZW5vbWluYXRvcjogVGhlIGxvd2VyIHBvcnRpb24gb2YgYSBmcmFjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBhIHJhdGUsIHByb3BvcnRpb24sIG9yIHJhdGlvLiBUaGUgZGVub21pbmF0b3IgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBpbml0aWFsIHBvcHVsYXRpb24sIG9yIGEgc3Vic2V0IG9mIHRoZSBpbml0aWFsIHBvcHVsYXRpb24gdG8gZnVydGhlciBjb25zdHJhaW4gdGhlIHBvcHVsYXRpb24gZm9yIHRoZSBwdXJwb3NlIG9mIHRoZSBtZWFzdXJlXHJcbiAgICovXHJcbiAgRGVub21pbmF0b3I6IFwiZGVub21pbmF0b3JcIixcclxuICAvKipcclxuICAgKiBkZW5vbWluYXRvci1leGNlcHRpb246IERlbm9taW5hdG9yIGV4Y2VwdGlvbnMgYXJlIGNvbmRpdGlvbnMgdGhhdCBzaG91bGQgcmVtb3ZlIGEgcGF0aWVudCBvciBldmVudCBmcm9tIHRoZSBkZW5vbWluYXRvciBvZiBhIG1lYXN1cmUgb25seSBpZiB0aGUgbnVtZXJhdG9yIGNyaXRlcmlhIGFyZSBub3QgbWV0LiBEZW5vbWluYXRvciBleGNlcHRpb24gYWxsb3dzIGZvciBhZGp1c3RtZW50IG9mIHRoZSBjYWxjdWxhdGVkIHNjb3JlIGZvciB0aG9zZSBwcm92aWRlcnMgd2l0aCBoaWdoZXIgcmlzayBwb3B1bGF0aW9ucy4gRGVub21pbmF0b3IgZXhjZXB0aW9uIGNyaXRlcmlhIGFyZSBvbmx5IHVzZWQgaW4gcHJvcG9ydGlvbiBtZWFzdXJlc1xyXG4gICAqL1xyXG4gIERlbm9taW5hdG9yRXhjZXB0aW9uOiBcImRlbm9taW5hdG9yLWV4Y2VwdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIGRlbm9taW5hdG9yLWV4Y2x1c2lvbjogRGVub21pbmF0b3IgZXhjbHVzaW9uIGNyaXRlcmlhIGRlZmluZSBwYXRpZW50cyBvciBldmVudHMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBmcm9tIHRoZSBkZW5vbWluYXRvciBiZWZvcmUgZGV0ZXJtaW5pbmcgaWYgbnVtZXJhdG9yIGNyaXRlcmlhIGFyZSBtZXQuIERlbm9taW5hdG9yIGV4Y2x1c2lvbnMgYXJlIHVzZWQgaW4gcHJvcG9ydGlvbiBhbmQgcmF0aW8gbWVhc3VyZXMgdG8gaGVscCBuYXJyb3cgdGhlIGRlbm9taW5hdG9yLiBGb3IgZXhhbXBsZSwgcGF0aWVudHMgd2l0aCBiaWxhdGVyYWwgbG93ZXIgZXh0cmVtaXR5IGFtcHV0YXRpb25zIHdvdWxkIGJlIGxpc3RlZCBhcyBhIGRlbm9taW5hdG9yIGV4Y2x1c2lvbiBmb3IgYSBtZWFzdXJlIHJlcXVpcmluZyBmb290IGV4YW1zXHJcbiAgICovXHJcbiAgRGVub21pbmF0b3JFeGNsdXNpb246IFwiZGVub21pbmF0b3ItZXhjbHVzaW9uXCIsXHJcbiAgLyoqXHJcbiAgICogaW5pdGlhbC1wb3B1bGF0aW9uOiBUaGUgaW5pdGlhbCBwb3B1bGF0aW9uIHJlZmVycyB0byBhbGwgcGF0aWVudHMgb3IgZXZlbnRzIHRvIGJlIGV2YWx1YXRlZCBieSBhIHF1YWxpdHkgbWVhc3VyZSBpbnZvbHZpbmcgcGF0aWVudHMgd2hvIHNoYXJlIGEgY29tbW9uIHNldCBvZiBzcGVjaWZpZWQgY2hhcmFjdGVyc3RpY3MuIEFsbCBwYXRpZW50cyBvciBldmVudHMgY291bnRlZCAoZm9yIGV4YW1wbGUsIGFzIG51bWVyYXRvciwgYXMgZGVub21pbmF0b3IpIGFyZSBkcmF3biBmcm9tIHRoZSBpbml0aWFsIHBvcHVsYXRpb25cclxuICAgKi9cclxuICBJbml0aWFsUG9wdWxhdGlvbjogXCJpbml0aWFsLXBvcHVsYXRpb25cIixcclxuICAvKipcclxuICAgKiBtZWFzdXJlLW9ic2VydmF0aW9uOiBEZWZpbmVzIHRoZSBpbmRpdmlkdWFsIG9ic2VydmF0aW9uIHRvIGJlIHBlcmZvcm1lZCBmb3IgZWFjaCBwYXRpZW50IG9yIGV2ZW50IGluIHRoZSBtZWFzdXJlIHBvcHVsYXRpb24uIE1lYXN1cmUgb2JzZXJ2YXRpb25zIGZvciBlYWNoIGNhc2UgaW4gdGhlIHBvcHVsYXRpb24gYXJlIGFnZ3JlZ2F0ZWQgdG8gZGV0ZXJtaW5lIHRoZSBvdmVyYWxsIG1lYXN1cmUgc2NvcmUgZm9yIHRoZSBwb3B1bGF0aW9uXHJcbiAgICovXHJcbiAgTWVhc3VyZU9ic2VydmF0aW9uOiBcIm1lYXN1cmUtb2JzZXJ2YXRpb25cIixcclxuICAvKipcclxuICAgKiBtZWFzdXJlLXBvcHVsYXRpb246IE1lYXN1cmUgcG9wdWxhdGlvbiBjcml0ZXJpYSBkZWZpbmUgdGhlIHBhdGllbnRzIG9yIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGluZGl2aWR1YWwgb2JzZXJ2YXRpb24gZm9yIHRoZSBtZWFzdXJlIHNob3VsZCBiZSB0YWtlbi4gTWVhc3VyZSBwb3B1bGF0aW9ucyBhcmUgdXNlZCBmb3IgY29udGludW91cyB2YXJpYWJsZSBtZWFzdXJlcyByYXRoZXIgdGhhbiBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yIGNyaXRlcmlhXHJcbiAgICovXHJcbiAgTWVhc3VyZVBvcHVsYXRpb246IFwibWVhc3VyZS1wb3B1bGF0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogbWVhc3VyZS1wb3B1bGF0aW9uLWV4Y2x1c2lvbjogTWVhc3VyZSBwb3B1bGF0aW9uIGNyaXRlcmlhIGRlZmluZSB0aGUgcGF0aWVudHMgb3IgZXZlbnRzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSB0aGUgbWVhc3VyZSBwb3B1bGF0aW9uIGJlZm9yZSBkZXRlcm1pbmluZyB0aGUgb3V0Y29tZSBvZiBvbmUgb3IgbW9yZSBjb250aW51b3VzIHZhcmlhYmxlcyBkZWZpbmVkIGZvciB0aGUgbWVhc3VyZSBvYnNlcnZhdGlvbi4gTWVhc3VyZSBwb3B1bGF0aW9uIGV4Y2x1c2lvbiBjcml0ZXJpYSBhcmUgdXNlZCB3aXRoaW4gY29udGludW91cyB2YXJpYWJsZSBtZWFzdXJlcyB0byBoZWxwIG5hcnJvdyB0aGUgbWVhc3VyZSBwb3B1bGF0aW9uXHJcbiAgICovXHJcbiAgTWVhc3VyZVBvcHVsYXRpb25FeGNsdXNpb246IFwibWVhc3VyZS1wb3B1bGF0aW9uLWV4Y2x1c2lvblwiLFxyXG4gIC8qKlxyXG4gICAqIG51bWVyYXRvcjogVGhlIHVwcGVyIHBvcnRpb24gb2YgYSBmcmFjdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSBhIHJhdGUsIHByb3BvcnRpb24sIG9yIHJhdGlvLiBBbHNvIGNhbGxlZCB0aGUgbWVhc3VyZSBmb2N1cywgaXQgaXMgdGhlIHRhcmdldCBwcm9jZXNzLCBjb25kaXRpb24sIGV2ZW50LCBvciBvdXRjb21lLiBOdW1lcmF0b3IgY3JpdGVyaWEgYXJlIHRoZSBwcm9jZXNzZXMgb3Igb3V0Y29tZXMgZXhwZWN0ZWQgZm9yIGVhY2ggcGF0aWVudCwgb3IgZXZlbnQgZGVmaW5lZCBpbiB0aGUgZGVub21pbmF0b3IuIEEgbnVtZXJhdG9yIHN0YXRlbWVudCBkZXNjcmliZXMgdGhlIGNsaW5pY2FsIGFjdGlvbiB0aGF0IHNhdGlzZmllcyB0aGUgY29uZGl0aW9ucyBvZiB0aGUgbWVhc3VyZVxyXG4gICAqL1xyXG4gIE51bWVyYXRvcjogXCJudW1lcmF0b3JcIixcclxuICAvKipcclxuICAgKiBudW1lcmF0b3ItZXhjbHVzaW9uOiBOdW1lcmF0b3IgZXhjbHVzaW9uIGNyaXRlcmlhIGRlZmluZSBwYXRpZW50cyBvciBldmVudHMgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBudW1lcmF0b3IuIE51bWVyYXRvciBleGNsdXNpb25zIGFyZSB1c2VkIGluIHByb3BvcnRpb24gYW5kIHJhdGlvIG1lYXN1cmVzIHRvIGhlbHAgbmFycm93IHRoZSBudW1lcmF0b3IgKGZvciBpbnZlcnRlZCBtZWFzdXJlcylcclxuICAgKi9cclxuICBOdW1lcmF0b3JFeGNsdXNpb246IFwibnVtZXJhdG9yLWV4Y2x1c2lvblwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHBvcHVsYXRpb25cclxuICovXHJcbmV4cG9ydCB0eXBlIE1lYXN1cmVQb3B1bGF0aW9uQ29kZVR5cGUgPSB0eXBlb2YgTWVhc3VyZVBvcHVsYXRpb25Db2Rlc1trZXlvZiB0eXBlb2YgTWVhc3VyZVBvcHVsYXRpb25Db2Rlc107XHJcbiJdfQ==