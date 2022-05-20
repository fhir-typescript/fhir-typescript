// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-category|4.0.1
/**
 * Observation Category codes.
 */
export const ObservationCategoryCodes = {
    /**
     * activity: Observations that measure or record any bodily activity that enhances or maintains physical fitness and overall health and wellness.  Not under direct supervision of practitioner such as a physical therapist. (e.g., laps swum, steps, sleep data)
     */
    Activity: "activity",
    /**
     * exam: Observations generated by physical exam findings including direct observations made by a clinician and use of simple instruments and the result of simple maneuvers performed directly on the patient's body.
     */
    Exam: "exam",
    /**
     * imaging: Observations generated by imaging. The scope includes observations regarding plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, and nuclear medicine.
     */
    Imaging: "imaging",
    /**
     * laboratory: The results of observations generated by laboratories.  Laboratory results are typically generated by laboratories providing analytic services in areas such as chemistry, hematology, serology, histology, cytology, anatomic pathology (including digital pathology), microbiology, and/or virology. These observations are based on analysis of specimens obtained from the patient and submitted to the laboratory.
     */
    Laboratory: "laboratory",
    /**
     * procedure: Observations generated by other procedures.  This category includes observations resulting from interventional and non-interventional procedures excluding laboratory and imaging (e.g., cardiology catheterization, endoscopy, electrodiagnostics, etc.).  Procedure results are typically generated by a clinician to provide more granular information about component observations made during a procedure.  An example would be when a gastroenterologist reports the size of a polyp observed during a colonoscopy.
     */
    Procedure: "procedure",
    /**
     * social-history: Social History Observations define the patient's occupational, personal (e.g., lifestyle), social, familial, and environmental history and health risk factors that may impact the patient's health.
     */
    SocialHistory: "social-history",
    /**
     * survey: Assessment tool/survey instrument observations (e.g., Apgar Scores, Montreal Cognitive Assessment (MoCA)).
     */
    Survey: "survey",
    /**
     * therapy: Observations generated by non-interventional treatment protocols (e.g. occupational, physical, radiation, nutritional and medication therapy)
     */
    Therapy: "therapy",
    /**
     * vital-signs:  Clinical observations measure the body's basic functions such as blood pressure, heart rate, respiratory rate, height, weight, body mass index, head circumference, pulse oximetry, temperature, and body surface area.
     */
    VitalSigns: "vital-signs",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBRXpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjQuY29yZSB2ZXJzaW9uOiA0LjAuMVxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JzZXJ2YXRpb24tY2F0ZWdvcnl8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBPYnNlcnZhdGlvbiBDYXRlZ29yeSBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBPYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZpdHk6IE9ic2VydmF0aW9ucyB0aGF0IG1lYXN1cmUgb3IgcmVjb3JkIGFueSBib2RpbHkgYWN0aXZpdHkgdGhhdCBlbmhhbmNlcyBvciBtYWludGFpbnMgcGh5c2ljYWwgZml0bmVzcyBhbmQgb3ZlcmFsbCBoZWFsdGggYW5kIHdlbGxuZXNzLiAgTm90IHVuZGVyIGRpcmVjdCBzdXBlcnZpc2lvbiBvZiBwcmFjdGl0aW9uZXIgc3VjaCBhcyBhIHBoeXNpY2FsIHRoZXJhcGlzdC4gKGUuZy4sIGxhcHMgc3d1bSwgc3RlcHMsIHNsZWVwIGRhdGEpXHJcbiAgICovXHJcbiAgQWN0aXZpdHk6IFwiYWN0aXZpdHlcIixcclxuICAvKipcclxuICAgKiBleGFtOiBPYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IHBoeXNpY2FsIGV4YW0gZmluZGluZ3MgaW5jbHVkaW5nIGRpcmVjdCBvYnNlcnZhdGlvbnMgbWFkZSBieSBhIGNsaW5pY2lhbiBhbmQgdXNlIG9mIHNpbXBsZSBpbnN0cnVtZW50cyBhbmQgdGhlIHJlc3VsdCBvZiBzaW1wbGUgbWFuZXV2ZXJzIHBlcmZvcm1lZCBkaXJlY3RseSBvbiB0aGUgcGF0aWVudCdzIGJvZHkuXHJcbiAgICovXHJcbiAgRXhhbTogXCJleGFtXCIsXHJcbiAgLyoqXHJcbiAgICogaW1hZ2luZzogT2JzZXJ2YXRpb25zIGdlbmVyYXRlZCBieSBpbWFnaW5nLiBUaGUgc2NvcGUgaW5jbHVkZXMgb2JzZXJ2YXRpb25zIHJlZ2FyZGluZyBwbGFpbiB4LXJheSwgdWx0cmFzb3VuZCwgQ1QsIE1SSSwgYW5naW9ncmFwaHksIGVjaG9jYXJkaW9ncmFwaHksIGFuZCBudWNsZWFyIG1lZGljaW5lLlxyXG4gICAqL1xyXG4gIEltYWdpbmc6IFwiaW1hZ2luZ1wiLFxyXG4gIC8qKlxyXG4gICAqIGxhYm9yYXRvcnk6IFRoZSByZXN1bHRzIG9mIG9ic2VydmF0aW9ucyBnZW5lcmF0ZWQgYnkgbGFib3JhdG9yaWVzLiAgTGFib3JhdG9yeSByZXN1bHRzIGFyZSB0eXBpY2FsbHkgZ2VuZXJhdGVkIGJ5IGxhYm9yYXRvcmllcyBwcm92aWRpbmcgYW5hbHl0aWMgc2VydmljZXMgaW4gYXJlYXMgc3VjaCBhcyBjaGVtaXN0cnksIGhlbWF0b2xvZ3ksIHNlcm9sb2d5LCBoaXN0b2xvZ3ksIGN5dG9sb2d5LCBhbmF0b21pYyBwYXRob2xvZ3kgKGluY2x1ZGluZyBkaWdpdGFsIHBhdGhvbG9neSksIG1pY3JvYmlvbG9neSwgYW5kL29yIHZpcm9sb2d5LiBUaGVzZSBvYnNlcnZhdGlvbnMgYXJlIGJhc2VkIG9uIGFuYWx5c2lzIG9mIHNwZWNpbWVucyBvYnRhaW5lZCBmcm9tIHRoZSBwYXRpZW50IGFuZCBzdWJtaXR0ZWQgdG8gdGhlIGxhYm9yYXRvcnkuXHJcbiAgICovXHJcbiAgTGFib3JhdG9yeTogXCJsYWJvcmF0b3J5XCIsXHJcbiAgLyoqXHJcbiAgICogcHJvY2VkdXJlOiBPYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IG90aGVyIHByb2NlZHVyZXMuICBUaGlzIGNhdGVnb3J5IGluY2x1ZGVzIG9ic2VydmF0aW9ucyByZXN1bHRpbmcgZnJvbSBpbnRlcnZlbnRpb25hbCBhbmQgbm9uLWludGVydmVudGlvbmFsIHByb2NlZHVyZXMgZXhjbHVkaW5nIGxhYm9yYXRvcnkgYW5kIGltYWdpbmcgKGUuZy4sIGNhcmRpb2xvZ3kgY2F0aGV0ZXJpemF0aW9uLCBlbmRvc2NvcHksIGVsZWN0cm9kaWFnbm9zdGljcywgZXRjLikuICBQcm9jZWR1cmUgcmVzdWx0cyBhcmUgdHlwaWNhbGx5IGdlbmVyYXRlZCBieSBhIGNsaW5pY2lhbiB0byBwcm92aWRlIG1vcmUgZ3JhbnVsYXIgaW5mb3JtYXRpb24gYWJvdXQgY29tcG9uZW50IG9ic2VydmF0aW9ucyBtYWRlIGR1cmluZyBhIHByb2NlZHVyZS4gIEFuIGV4YW1wbGUgd291bGQgYmUgd2hlbiBhIGdhc3Ryb2VudGVyb2xvZ2lzdCByZXBvcnRzIHRoZSBzaXplIG9mIGEgcG9seXAgb2JzZXJ2ZWQgZHVyaW5nIGEgY29sb25vc2NvcHkuXHJcbiAgICovXHJcbiAgUHJvY2VkdXJlOiBcInByb2NlZHVyZVwiLFxyXG4gIC8qKlxyXG4gICAqIHNvY2lhbC1oaXN0b3J5OiBTb2NpYWwgSGlzdG9yeSBPYnNlcnZhdGlvbnMgZGVmaW5lIHRoZSBwYXRpZW50J3Mgb2NjdXBhdGlvbmFsLCBwZXJzb25hbCAoZS5nLiwgbGlmZXN0eWxlKSwgc29jaWFsLCBmYW1pbGlhbCwgYW5kIGVudmlyb25tZW50YWwgaGlzdG9yeSBhbmQgaGVhbHRoIHJpc2sgZmFjdG9ycyB0aGF0IG1heSBpbXBhY3QgdGhlIHBhdGllbnQncyBoZWFsdGguXHJcbiAgICovXHJcbiAgU29jaWFsSGlzdG9yeTogXCJzb2NpYWwtaGlzdG9yeVwiLFxyXG4gIC8qKlxyXG4gICAqIHN1cnZleTogQXNzZXNzbWVudCB0b29sL3N1cnZleSBpbnN0cnVtZW50IG9ic2VydmF0aW9ucyAoZS5nLiwgQXBnYXIgU2NvcmVzLCBNb250cmVhbCBDb2duaXRpdmUgQXNzZXNzbWVudCAoTW9DQSkpLlxyXG4gICAqL1xyXG4gIFN1cnZleTogXCJzdXJ2ZXlcIixcclxuICAvKipcclxuICAgKiB0aGVyYXB5OiBPYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IG5vbi1pbnRlcnZlbnRpb25hbCB0cmVhdG1lbnQgcHJvdG9jb2xzIChlLmcuIG9jY3VwYXRpb25hbCwgcGh5c2ljYWwsIHJhZGlhdGlvbiwgbnV0cml0aW9uYWwgYW5kIG1lZGljYXRpb24gdGhlcmFweSlcclxuICAgKi9cclxuICBUaGVyYXB5OiBcInRoZXJhcHlcIixcclxuICAvKipcclxuICAgKiB2aXRhbC1zaWduczogIENsaW5pY2FsIG9ic2VydmF0aW9ucyBtZWFzdXJlIHRoZSBib2R5J3MgYmFzaWMgZnVuY3Rpb25zIHN1Y2ggYXMgYmxvb2QgcHJlc3N1cmUsIGhlYXJ0IHJhdGUsIHJlc3BpcmF0b3J5IHJhdGUsIGhlaWdodCwgd2VpZ2h0LCBib2R5IG1hc3MgaW5kZXgsIGhlYWQgY2lyY3VtZmVyZW5jZSwgcHVsc2Ugb3hpbWV0cnksIHRlbXBlcmF0dXJlLCBhbmQgYm9keSBzdXJmYWNlIGFyZWEuXHJcbiAgICovXHJcbiAgVml0YWxTaWduczogXCJ2aXRhbC1zaWduc1wiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIE9ic2VydmF0aW9uIENhdGVnb3J5IGNvZGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVUeXBlID0gdHlwZW9mIE9ic2VydmF0aW9uQ2F0ZWdvcnlDb2Rlc1trZXlvZiB0eXBlb2YgT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzXTtcclxuIl19