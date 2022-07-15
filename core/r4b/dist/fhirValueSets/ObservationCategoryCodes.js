// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-category|4.3.0
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9PYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMseUVBQXlFO0FBRXpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILElBQUksRUFBRSxNQUFNO0lBQ1o7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxhQUFhLEVBQUUsZ0JBQWdCO0lBQy9COztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0NBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L29ic2VydmF0aW9uLWNhdGVnb3J5fDQuMy4wXHJcblxyXG4vKipcclxuICogT2JzZXJ2YXRpb24gQ2F0ZWdvcnkgY29kZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT2JzZXJ2YXRpb25DYXRlZ29yeUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2aXR5OiBPYnNlcnZhdGlvbnMgdGhhdCBtZWFzdXJlIG9yIHJlY29yZCBhbnkgYm9kaWx5IGFjdGl2aXR5IHRoYXQgZW5oYW5jZXMgb3IgbWFpbnRhaW5zIHBoeXNpY2FsIGZpdG5lc3MgYW5kIG92ZXJhbGwgaGVhbHRoIGFuZCB3ZWxsbmVzcy4gIE5vdCB1bmRlciBkaXJlY3Qgc3VwZXJ2aXNpb24gb2YgcHJhY3RpdGlvbmVyIHN1Y2ggYXMgYSBwaHlzaWNhbCB0aGVyYXBpc3QuIChlLmcuLCBsYXBzIHN3dW0sIHN0ZXBzLCBzbGVlcCBkYXRhKVxyXG4gICAqL1xyXG4gIEFjdGl2aXR5OiBcImFjdGl2aXR5XCIsXHJcbiAgLyoqXHJcbiAgICogZXhhbTogT2JzZXJ2YXRpb25zIGdlbmVyYXRlZCBieSBwaHlzaWNhbCBleGFtIGZpbmRpbmdzIGluY2x1ZGluZyBkaXJlY3Qgb2JzZXJ2YXRpb25zIG1hZGUgYnkgYSBjbGluaWNpYW4gYW5kIHVzZSBvZiBzaW1wbGUgaW5zdHJ1bWVudHMgYW5kIHRoZSByZXN1bHQgb2Ygc2ltcGxlIG1hbmV1dmVycyBwZXJmb3JtZWQgZGlyZWN0bHkgb24gdGhlIHBhdGllbnQncyBib2R5LlxyXG4gICAqL1xyXG4gIEV4YW06IFwiZXhhbVwiLFxyXG4gIC8qKlxyXG4gICAqIGltYWdpbmc6IE9ic2VydmF0aW9ucyBnZW5lcmF0ZWQgYnkgaW1hZ2luZy4gVGhlIHNjb3BlIGluY2x1ZGVzIG9ic2VydmF0aW9ucyByZWdhcmRpbmcgcGxhaW4geC1yYXksIHVsdHJhc291bmQsIENULCBNUkksIGFuZ2lvZ3JhcGh5LCBlY2hvY2FyZGlvZ3JhcGh5LCBhbmQgbnVjbGVhciBtZWRpY2luZS5cclxuICAgKi9cclxuICBJbWFnaW5nOiBcImltYWdpbmdcIixcclxuICAvKipcclxuICAgKiBsYWJvcmF0b3J5OiBUaGUgcmVzdWx0cyBvZiBvYnNlcnZhdGlvbnMgZ2VuZXJhdGVkIGJ5IGxhYm9yYXRvcmllcy4gIExhYm9yYXRvcnkgcmVzdWx0cyBhcmUgdHlwaWNhbGx5IGdlbmVyYXRlZCBieSBsYWJvcmF0b3JpZXMgcHJvdmlkaW5nIGFuYWx5dGljIHNlcnZpY2VzIGluIGFyZWFzIHN1Y2ggYXMgY2hlbWlzdHJ5LCBoZW1hdG9sb2d5LCBzZXJvbG9neSwgaGlzdG9sb2d5LCBjeXRvbG9neSwgYW5hdG9taWMgcGF0aG9sb2d5IChpbmNsdWRpbmcgZGlnaXRhbCBwYXRob2xvZ3kpLCBtaWNyb2Jpb2xvZ3ksIGFuZC9vciB2aXJvbG9neS4gVGhlc2Ugb2JzZXJ2YXRpb25zIGFyZSBiYXNlZCBvbiBhbmFseXNpcyBvZiBzcGVjaW1lbnMgb2J0YWluZWQgZnJvbSB0aGUgcGF0aWVudCBhbmQgc3VibWl0dGVkIHRvIHRoZSBsYWJvcmF0b3J5LlxyXG4gICAqL1xyXG4gIExhYm9yYXRvcnk6IFwibGFib3JhdG9yeVwiLFxyXG4gIC8qKlxyXG4gICAqIHByb2NlZHVyZTogT2JzZXJ2YXRpb25zIGdlbmVyYXRlZCBieSBvdGhlciBwcm9jZWR1cmVzLiAgVGhpcyBjYXRlZ29yeSBpbmNsdWRlcyBvYnNlcnZhdGlvbnMgcmVzdWx0aW5nIGZyb20gaW50ZXJ2ZW50aW9uYWwgYW5kIG5vbi1pbnRlcnZlbnRpb25hbCBwcm9jZWR1cmVzIGV4Y2x1ZGluZyBsYWJvcmF0b3J5IGFuZCBpbWFnaW5nIChlLmcuLCBjYXJkaW9sb2d5IGNhdGhldGVyaXphdGlvbiwgZW5kb3Njb3B5LCBlbGVjdHJvZGlhZ25vc3RpY3MsIGV0Yy4pLiAgUHJvY2VkdXJlIHJlc3VsdHMgYXJlIHR5cGljYWxseSBnZW5lcmF0ZWQgYnkgYSBjbGluaWNpYW4gdG8gcHJvdmlkZSBtb3JlIGdyYW51bGFyIGluZm9ybWF0aW9uIGFib3V0IGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgbWFkZSBkdXJpbmcgYSBwcm9jZWR1cmUuICBBbiBleGFtcGxlIHdvdWxkIGJlIHdoZW4gYSBnYXN0cm9lbnRlcm9sb2dpc3QgcmVwb3J0cyB0aGUgc2l6ZSBvZiBhIHBvbHlwIG9ic2VydmVkIGR1cmluZyBhIGNvbG9ub3Njb3B5LlxyXG4gICAqL1xyXG4gIFByb2NlZHVyZTogXCJwcm9jZWR1cmVcIixcclxuICAvKipcclxuICAgKiBzb2NpYWwtaGlzdG9yeTogU29jaWFsIEhpc3RvcnkgT2JzZXJ2YXRpb25zIGRlZmluZSB0aGUgcGF0aWVudCdzIG9jY3VwYXRpb25hbCwgcGVyc29uYWwgKGUuZy4sIGxpZmVzdHlsZSksIHNvY2lhbCwgZmFtaWxpYWwsIGFuZCBlbnZpcm9ubWVudGFsIGhpc3RvcnkgYW5kIGhlYWx0aCByaXNrIGZhY3RvcnMgdGhhdCBtYXkgaW1wYWN0IHRoZSBwYXRpZW50J3MgaGVhbHRoLlxyXG4gICAqL1xyXG4gIFNvY2lhbEhpc3Rvcnk6IFwic29jaWFsLWhpc3RvcnlcIixcclxuICAvKipcclxuICAgKiBzdXJ2ZXk6IEFzc2Vzc21lbnQgdG9vbC9zdXJ2ZXkgaW5zdHJ1bWVudCBvYnNlcnZhdGlvbnMgKGUuZy4sIEFwZ2FyIFNjb3JlcywgTW9udHJlYWwgQ29nbml0aXZlIEFzc2Vzc21lbnQgKE1vQ0EpKS5cclxuICAgKi9cclxuICBTdXJ2ZXk6IFwic3VydmV5XCIsXHJcbiAgLyoqXHJcbiAgICogdGhlcmFweTogT2JzZXJ2YXRpb25zIGdlbmVyYXRlZCBieSBub24taW50ZXJ2ZW50aW9uYWwgdHJlYXRtZW50IHByb3RvY29scyAoZS5nLiBvY2N1cGF0aW9uYWwsIHBoeXNpY2FsLCByYWRpYXRpb24sIG51dHJpdGlvbmFsIGFuZCBtZWRpY2F0aW9uIHRoZXJhcHkpXHJcbiAgICovXHJcbiAgVGhlcmFweTogXCJ0aGVyYXB5XCIsXHJcbiAgLyoqXHJcbiAgICogdml0YWwtc2lnbnM6ICBDbGluaWNhbCBvYnNlcnZhdGlvbnMgbWVhc3VyZSB0aGUgYm9keSdzIGJhc2ljIGZ1bmN0aW9ucyBzdWNoIGFzIGJsb29kIHByZXNzdXJlLCBoZWFydCByYXRlLCByZXNwaXJhdG9yeSByYXRlLCBoZWlnaHQsIHdlaWdodCwgYm9keSBtYXNzIGluZGV4LCBoZWFkIGNpcmN1bWZlcmVuY2UsIHB1bHNlIG94aW1ldHJ5LCB0ZW1wZXJhdHVyZSwgYW5kIGJvZHkgc3VyZmFjZSBhcmVhLlxyXG4gICAqL1xyXG4gIFZpdGFsU2lnbnM6IFwidml0YWwtc2lnbnNcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBPYnNlcnZhdGlvbiBDYXRlZ29yeSBjb2Rlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIE9ic2VydmF0aW9uQ2F0ZWdvcnlDb2RlVHlwZSA9IHR5cGVvZiBPYnNlcnZhdGlvbkNhdGVnb3J5Q29kZXNba2V5b2YgdHlwZW9mIE9ic2VydmF0aW9uQ2F0ZWdvcnlDb2Rlc107XHJcbiJdfQ==