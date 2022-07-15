// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-category|3.0.2
/**
 * Observation Category codes.
 */
export const ObservationCategoryCodes = {
    /**
     * exam: Observations generated by physical exam findings including direct observations made by a clinician and use of simple instruments and the result of simple maneuvers performed directly on the patient's body.
     */
    Exam: "exam",
    /**
     * imaging: Observations generated by imaging. The scope includes observations, plain x-ray, ultrasound, CT, MRI, angiography, echocardiography, nuclear medicine.
     */
    Imaging: "imaging",
    /**
     * laboratory: The results of observations generated by laboratories.  Laboratory results are typically generated by laboratories providing analytic services in areas such as chemistry, hematology, serology, histology, cytology, anatomic pathology, microbiology, and/or virology. These observations are based on analysis of specimens obtained from the patient and submitted to the laboratory.
     */
    Laboratory: "laboratory",
    /**
     * procedure: Observations generated by other procedures.  This category includes observations resulting from interventional and non-interventional procedures excluding lab and imaging (e.g. cardiology catheterization, endoscopy, electrodiagnostics, etc.).  Procedure results are typically generated by a clinician to provide more granular information about component observations made during a procedure, such as where a gastroenterologist reports the size of a polyp observed during a colonoscopy.
     */
    Procedure: "procedure",
    /**
     * social-history: The Social History Observations define the patient's occupational, personal (e.g. lifestyle), social, and environmental history and health risk factors, as well as administrative data such as marital status, race, ethnicity and religious affiliation.
     */
    SocialHistory: "social-history",
    /**
     * survey: Assessment tool/survey instrument observations (e.g. Apgar Scores, Montreal Cognitive Assessment (MoCA))
     */
    Survey: "survey",
    /**
     * therapy: Observations generated by non-interventional treatment protocols (e.g. occupational, physical, radiation, nutritional and medication therapy)
     */
    Therapy: "therapy",
    /**
     * vital-signs:  Clinical observations measure the body's basic functions such as such as blood pressure, heart rate, respiratory rate, height, weight, body mass index, head circumference, pulse oximetry, temperature, and body surface area.
     */
    VitalSigns: "vital-signs",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBRXpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxJQUFJLEVBQUUsTUFBTTtJQUNaOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxVQUFVLEVBQUUsYUFBYTtDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L29ic2VydmF0aW9uLWNhdGVnb3J5fDMuMC4yXHJcblxyXG4vKipcclxuICogT2JzZXJ2YXRpb24gQ2F0ZWdvcnkgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGV4YW06IE9ic2VydmF0aW9ucyBnZW5lcmF0ZWQgYnkgcGh5c2ljYWwgZXhhbSBmaW5kaW5ncyBpbmNsdWRpbmcgZGlyZWN0IG9ic2VydmF0aW9ucyBtYWRlIGJ5IGEgY2xpbmljaWFuIGFuZCB1c2Ugb2Ygc2ltcGxlIGluc3RydW1lbnRzIGFuZCB0aGUgcmVzdWx0IG9mIHNpbXBsZSBtYW5ldXZlcnMgcGVyZm9ybWVkIGRpcmVjdGx5IG9uIHRoZSBwYXRpZW50J3MgYm9keS5cclxuICAgKi9cclxuICBFeGFtOiBcImV4YW1cIixcclxuICAvKipcclxuICAgKiBpbWFnaW5nOiBPYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IGltYWdpbmcuIFRoZSBzY29wZSBpbmNsdWRlcyBvYnNlcnZhdGlvbnMsIHBsYWluIHgtcmF5LCB1bHRyYXNvdW5kLCBDVCwgTVJJLCBhbmdpb2dyYXBoeSwgZWNob2NhcmRpb2dyYXBoeSwgbnVjbGVhciBtZWRpY2luZS5cclxuICAgKi9cclxuICBJbWFnaW5nOiBcImltYWdpbmdcIixcclxuICAvKipcclxuICAgKiBsYWJvcmF0b3J5OiBUaGUgcmVzdWx0cyBvZiBvYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IGxhYm9yYXRvcmllcy4gIExhYm9yYXRvcnkgcmVzdWx0cyBhcmUgdHlwaWNhbGx5IGdlbmVyYXRlZCBieSBsYWJvcmF0b3JpZXMgcHJvdmlkaW5nIGFuYWx5dGljIHNlcnZpY2VzIGluIGFyZWFzIHN1Y2ggYXMgY2hlbWlzdHJ5LCBoZW1hdG9sb2d5LCBzZXJvbG9neSwgaGlzdG9sb2d5LCBjeXRvbG9neSwgYW5hdG9taWMgcGF0aG9sb2d5LCBtaWNyb2Jpb2xvZ3ksIGFuZC9vciB2aXJvbG9neS4gVGhlc2Ugb2JzZXJ2YXRpb25zIGFyZSBiYXNlZCBvbiBhbmFseXNpcyBvZiBzcGVjaW1lbnMgb2J0YWluZWQgZnJvbSB0aGUgcGF0aWVudCBhbmQgc3VibWl0dGVkIHRvIHRoZSBsYWJvcmF0b3J5LlxyXG4gICAqL1xyXG4gIExhYm9yYXRvcnk6IFwibGFib3JhdG9yeVwiLFxyXG4gIC8qKlxyXG4gICAqIHByb2NlZHVyZTogT2JzZXJ2YXRpb25zIGdlbmVyYXRlZCBieSBvdGhlciBwcm9jZWR1cmVzLiAgVGhpcyBjYXRlZ29yeSBpbmNsdWRlcyBvYnNlcnZhdGlvbnMgcmVzdWx0aW5nIGZyb20gaW50ZXJ2ZW50aW9uYWwgYW5kIG5vbi1pbnRlcnZlbnRpb25hbCBwcm9jZWR1cmVzIGV4Y2x1ZGluZyBsYWIgYW5kIGltYWdpbmcgKGUuZy4gY2FyZGlvbG9neSBjYXRoZXRlcml6YXRpb24sIGVuZG9zY29weSwgZWxlY3Ryb2RpYWdub3N0aWNzLCBldGMuKS4gIFByb2NlZHVyZSByZXN1bHRzIGFyZSB0eXBpY2FsbHkgZ2VuZXJhdGVkIGJ5IGEgY2xpbmljaWFuIHRvIHByb3ZpZGUgbW9yZSBncmFudWxhciBpbmZvcm1hdGlvbiBhYm91dCBjb21wb25lbnQgb2JzZXJ2YXRpb25zIG1hZGUgZHVyaW5nIGEgcHJvY2VkdXJlLCBzdWNoIGFzIHdoZXJlIGEgZ2FzdHJvZW50ZXJvbG9naXN0IHJlcG9ydHMgdGhlIHNpemUgb2YgYSBwb2x5cCBvYnNlcnZlZCBkdXJpbmcgYSBjb2xvbm9zY29weS5cclxuICAgKi9cclxuICBQcm9jZWR1cmU6IFwicHJvY2VkdXJlXCIsXHJcbiAgLyoqXHJcbiAgICogc29jaWFsLWhpc3Rvcnk6IFRoZSBTb2NpYWwgSGlzdG9yeSBPYnNlcnZhdGlvbnMgZGVmaW5lIHRoZSBwYXRpZW50J3Mgb2NjdXBhdGlvbmFsLCBwZXJzb25hbCAoZS5nLiBsaWZlc3R5bGUpLCBzb2NpYWwsIGFuZCBlbnZpcm9ubWVudGFsIGhpc3RvcnkgYW5kIGhlYWx0aCByaXNrIGZhY3RvcnMsIGFzIHdlbGwgYXMgYWRtaW5pc3RyYXRpdmUgZGF0YSBzdWNoIGFzIG1hcml0YWwgc3RhdHVzLCByYWNlLCBldGhuaWNpdHkgYW5kIHJlbGlnaW91cyBhZmZpbGlhdGlvbi5cclxuICAgKi9cclxuICBTb2NpYWxIaXN0b3J5OiBcInNvY2lhbC1oaXN0b3J5XCIsXHJcbiAgLyoqXHJcbiAgICogc3VydmV5OiBBc3Nlc3NtZW50IHRvb2wvc3VydmV5IGluc3RydW1lbnQgb2JzZXJ2YXRpb25zIChlLmcuIEFwZ2FyIFNjb3JlcywgTW9udHJlYWwgQ29nbml0aXZlIEFzc2Vzc21lbnQgKE1vQ0EpKVxyXG4gICAqL1xyXG4gIFN1cnZleTogXCJzdXJ2ZXlcIixcclxuICAvKipcclxuICAgKiB0aGVyYXB5OiBPYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IG5vbi1pbnRlcnZlbnRpb25hbCB0cmVhdG1lbnQgcHJvdG9jb2xzIChlLmcuIG9jY3VwYXRpb25hbCwgcGh5c2ljYWwsIHJhZGlhdGlvbiwgbnV0cml0aW9uYWwgYW5kIG1lZGljYXRpb24gdGhlcmFweSlcclxuICAgKi9cclxuICBUaGVyYXB5OiBcInRoZXJhcHlcIixcclxuICAvKipcclxuICAgKiB2aXRhbC1zaWduczogIENsaW5pY2FsIG9ic2VydmF0aW9ucyBtZWFzdXJlIHRoZSBib2R5J3MgYmFzaWMgZnVuY3Rpb25zIHN1Y2ggYXMgc3VjaCBhcyBibG9vZCBwcmVzc3VyZSwgaGVhcnQgcmF0ZSwgcmVzcGlyYXRvcnkgcmF0ZSwgaGVpZ2h0LCB3ZWlnaHQsIGJvZHkgbWFzcyBpbmRleCwgaGVhZCBjaXJjdW1mZXJlbmNlLCBwdWxzZSBveGltZXRyeSwgdGVtcGVyYXR1cmUsIGFuZCBib2R5IHN1cmZhY2UgYXJlYS5cclxuICAgKi9cclxuICBWaXRhbFNpZ25zOiBcInZpdGFsLXNpZ25zXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogT2JzZXJ2YXRpb24gQ2F0ZWdvcnkgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPYnNlcnZhdGlvbkNhdGVnb3J5Q29kZVR5cGUgPSB0eXBlb2YgT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzW2tleW9mIHR5cGVvZiBPYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXNdO1xyXG4iXX0=