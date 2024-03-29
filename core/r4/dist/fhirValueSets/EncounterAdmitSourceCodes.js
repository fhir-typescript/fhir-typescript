// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-admit-source|4.0.1
/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 */
export const EncounterAdmitSourceCodes = {
    /**
     * born: The patient is a newborn and the encounter will track the baby related activities (as opposed to the Mothers encounter - that may be associated using the newborn encounters partof property)
     */
    BornInHospital: "born",
    /**
     * emd: The patient has been transferred from the emergency department within the hospital. This is typically used in the transition to an inpatient encounter
     */
    FromAccidentEmergencyDepartment: "emd",
    /**
     * gp: The patient has been admitted due to a referred from a General Practitioner.
     */
    GeneralPractitionerReferral: "gp",
    /**
     * hosp-trans: The Patient has been transferred from another hospital for this encounter.
     */
    TransferredFromOtherHospital: "hosp-trans",
    /**
     * mp: The patient has been admitted due to a referred from a Specialist (as opposed to a General Practitioner).
     */
    MedicalPractitionerPhysicianReferral: "mp",
    /**
     * nursing: The patient has been transferred from a nursing home.
     */
    FromNursingHome: "nursing",
    /**
     * other: The patient has been admitted from a source otherwise not specified here.
     */
    Other: "other",
    /**
     * outp: The patient has been transferred from an outpatient department within the hospital.
     */
    FromOutpatientDepartment: "outp",
    /**
     * psych: The patient has been transferred from a psychiatric facility.
     */
    FromPsychiatricHospital: "psych",
    /**
     * rehab: The patient has been transferred from a rehabilitation facility or clinic.
     */
    FromRehabilitationFacility: "rehab",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyQWRtaXRTb3VyY2VDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvRW5jb3VudGVyQWRtaXRTb3VyY2VDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQywyRUFBMkU7QUFFM0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRztJQUN2Qzs7T0FFRztJQUNILGNBQWMsRUFBRSxNQUFNO0lBQ3RCOztPQUVHO0lBQ0gsK0JBQStCLEVBQUUsS0FBSztJQUN0Qzs7T0FFRztJQUNILDJCQUEyQixFQUFFLElBQUk7SUFDakM7O09BRUc7SUFDSCw0QkFBNEIsRUFBRSxZQUFZO0lBQzFDOztPQUVHO0lBQ0gsb0NBQW9DLEVBQUUsSUFBSTtJQUMxQzs7T0FFRztJQUNILGVBQWUsRUFBRSxTQUFTO0lBQzFCOztPQUVHO0lBQ0gsS0FBSyxFQUFFLE9BQU87SUFDZDs7T0FFRztJQUNILHdCQUF3QixFQUFFLE1BQU07SUFDaEM7O09BRUc7SUFDSCx1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDOztPQUVHO0lBQ0gsMEJBQTBCLEVBQUUsT0FBTztDQUMzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VuY291bnRlci1hZG1pdC1zb3VyY2V8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHZhbHVlIHNldCBkZWZpbmVzIGEgc2V0IG9mIGNvZGVzIHRoYXQgY2FuIGJlIHVzZWQgdG8gaW5kaWNhdGUgZnJvbSB3aGVyZSB0aGUgcGF0aWVudCBjYW1lIGluLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVuY291bnRlckFkbWl0U291cmNlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYm9ybjogVGhlIHBhdGllbnQgaXMgYSBuZXdib3JuIGFuZCB0aGUgZW5jb3VudGVyIHdpbGwgdHJhY2sgdGhlIGJhYnkgcmVsYXRlZCBhY3Rpdml0aWVzIChhcyBvcHBvc2VkIHRvIHRoZSBNb3RoZXJzIGVuY291bnRlciAtIHRoYXQgbWF5IGJlIGFzc29jaWF0ZWQgdXNpbmcgdGhlIG5ld2Jvcm4gZW5jb3VudGVycyBwYXJ0b2YgcHJvcGVydHkpXHJcbiAgICovXHJcbiAgQm9ybkluSG9zcGl0YWw6IFwiYm9yblwiLFxyXG4gIC8qKlxyXG4gICAqIGVtZDogVGhlIHBhdGllbnQgaGFzIGJlZW4gdHJhbnNmZXJyZWQgZnJvbSB0aGUgZW1lcmdlbmN5IGRlcGFydG1lbnQgd2l0aGluIHRoZSBob3NwaXRhbC4gVGhpcyBpcyB0eXBpY2FsbHkgdXNlZCBpbiB0aGUgdHJhbnNpdGlvbiB0byBhbiBpbnBhdGllbnQgZW5jb3VudGVyXHJcbiAgICovXHJcbiAgRnJvbUFjY2lkZW50RW1lcmdlbmN5RGVwYXJ0bWVudDogXCJlbWRcIixcclxuICAvKipcclxuICAgKiBncDogVGhlIHBhdGllbnQgaGFzIGJlZW4gYWRtaXR0ZWQgZHVlIHRvIGEgcmVmZXJyZWQgZnJvbSBhIEdlbmVyYWwgUHJhY3RpdGlvbmVyLlxyXG4gICAqL1xyXG4gIEdlbmVyYWxQcmFjdGl0aW9uZXJSZWZlcnJhbDogXCJncFwiLFxyXG4gIC8qKlxyXG4gICAqIGhvc3AtdHJhbnM6IFRoZSBQYXRpZW50IGhhcyBiZWVuIHRyYW5zZmVycmVkIGZyb20gYW5vdGhlciBob3NwaXRhbCBmb3IgdGhpcyBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgVHJhbnNmZXJyZWRGcm9tT3RoZXJIb3NwaXRhbDogXCJob3NwLXRyYW5zXCIsXHJcbiAgLyoqXHJcbiAgICogbXA6IFRoZSBwYXRpZW50IGhhcyBiZWVuIGFkbWl0dGVkIGR1ZSB0byBhIHJlZmVycmVkIGZyb20gYSBTcGVjaWFsaXN0IChhcyBvcHBvc2VkIHRvIGEgR2VuZXJhbCBQcmFjdGl0aW9uZXIpLlxyXG4gICAqL1xyXG4gIE1lZGljYWxQcmFjdGl0aW9uZXJQaHlzaWNpYW5SZWZlcnJhbDogXCJtcFwiLFxyXG4gIC8qKlxyXG4gICAqIG51cnNpbmc6IFRoZSBwYXRpZW50IGhhcyBiZWVuIHRyYW5zZmVycmVkIGZyb20gYSBudXJzaW5nIGhvbWUuXHJcbiAgICovXHJcbiAgRnJvbU51cnNpbmdIb21lOiBcIm51cnNpbmdcIixcclxuICAvKipcclxuICAgKiBvdGhlcjogVGhlIHBhdGllbnQgaGFzIGJlZW4gYWRtaXR0ZWQgZnJvbSBhIHNvdXJjZSBvdGhlcndpc2Ugbm90IHNwZWNpZmllZCBoZXJlLlxyXG4gICAqL1xyXG4gIE90aGVyOiBcIm90aGVyXCIsXHJcbiAgLyoqXHJcbiAgICogb3V0cDogVGhlIHBhdGllbnQgaGFzIGJlZW4gdHJhbnNmZXJyZWQgZnJvbSBhbiBvdXRwYXRpZW50IGRlcGFydG1lbnQgd2l0aGluIHRoZSBob3NwaXRhbC5cclxuICAgKi9cclxuICBGcm9tT3V0cGF0aWVudERlcGFydG1lbnQ6IFwib3V0cFwiLFxyXG4gIC8qKlxyXG4gICAqIHBzeWNoOiBUaGUgcGF0aWVudCBoYXMgYmVlbiB0cmFuc2ZlcnJlZCBmcm9tIGEgcHN5Y2hpYXRyaWMgZmFjaWxpdHkuXHJcbiAgICovXHJcbiAgRnJvbVBzeWNoaWF0cmljSG9zcGl0YWw6IFwicHN5Y2hcIixcclxuICAvKipcclxuICAgKiByZWhhYjogVGhlIHBhdGllbnQgaGFzIGJlZW4gdHJhbnNmZXJyZWQgZnJvbSBhIHJlaGFiaWxpdGF0aW9uIGZhY2lsaXR5IG9yIGNsaW5pYy5cclxuICAgKi9cclxuICBGcm9tUmVoYWJpbGl0YXRpb25GYWNpbGl0eTogXCJyZWhhYlwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgdmFsdWUgc2V0IGRlZmluZXMgYSBzZXQgb2YgY29kZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBpbmRpY2F0ZSBmcm9tIHdoZXJlIHRoZSBwYXRpZW50IGNhbWUgaW4uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbmNvdW50ZXJBZG1pdFNvdXJjZUNvZGVUeXBlID0gdHlwZW9mIEVuY291bnRlckFkbWl0U291cmNlQ29kZXNba2V5b2YgdHlwZW9mIEVuY291bnRlckFkbWl0U291cmNlQ29kZXNdO1xyXG4iXX0=