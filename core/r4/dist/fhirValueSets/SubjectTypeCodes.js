// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/subject-type|4.0.1
/**
 * Possible types of subjects.
 */
export const SubjectTypeCodes = {
    /**
     * Device: A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
     */
    Device: "Device",
    /**
     * Location: Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
     */
    Location: "Location",
    /**
     * Organization: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
     */
    Organization: "Organization",
    /**
     * Patient: Demographics and other administrative information about an individual or animal receiving care or other health-related services.
     */
    Patient: "Patient",
    /**
     * Practitioner: A person who is directly or indirectly involved in the provisioning of healthcare.
     */
    Practitioner: "Practitioner",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3ViamVjdFR5cGVDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvU3ViamVjdFR5cGVDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5Qjs7T0FFRztJQUNILE1BQU0sRUFBRSxRQUFRO0lBQ2hCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxZQUFZLEVBQUUsY0FBYztJQUM1Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsWUFBWSxFQUFFLGNBQWM7Q0FDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9zdWJqZWN0LXR5cGV8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBQb3NzaWJsZSB0eXBlcyBvZiBzdWJqZWN0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdWJqZWN0VHlwZUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIERldmljZTogQSB0eXBlIG9mIGEgbWFudWZhY3R1cmVkIGl0ZW0gdGhhdCBpcyB1c2VkIGluIHRoZSBwcm92aXNpb24gb2YgaGVhbHRoY2FyZSB3aXRob3V0IGJlaW5nIHN1YnN0YW50aWFsbHkgY2hhbmdlZCB0aHJvdWdoIHRoYXQgYWN0aXZpdHkuIFRoZSBkZXZpY2UgbWF5IGJlIGEgbWVkaWNhbCBvciBub24tbWVkaWNhbCBkZXZpY2UuXHJcbiAgICovXHJcbiAgRGV2aWNlOiBcIkRldmljZVwiLFxyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uOiBEZXRhaWxzIGFuZCBwb3NpdGlvbiBpbmZvcm1hdGlvbiBmb3IgYSBwaHlzaWNhbCBwbGFjZSB3aGVyZSBzZXJ2aWNlcyBhcmUgcHJvdmlkZWQgYW5kIHJlc291cmNlcyBhbmQgcGFydGljaXBhbnRzIG1heSBiZSBzdG9yZWQsIGZvdW5kLCBjb250YWluZWQsIG9yIGFjY29tbW9kYXRlZC5cclxuICAgKi9cclxuICBMb2NhdGlvbjogXCJMb2NhdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIE9yZ2FuaXphdGlvbjogQSBmb3JtYWxseSBvciBpbmZvcm1hbGx5IHJlY29nbml6ZWQgZ3JvdXBpbmcgb2YgcGVvcGxlIG9yIG9yZ2FuaXphdGlvbnMgZm9ybWVkIGZvciB0aGUgcHVycG9zZSBvZiBhY2hpZXZpbmcgc29tZSBmb3JtIG9mIGNvbGxlY3RpdmUgYWN0aW9uLiAgSW5jbHVkZXMgY29tcGFuaWVzLCBpbnN0aXR1dGlvbnMsIGNvcnBvcmF0aW9ucywgZGVwYXJ0bWVudHMsIGNvbW11bml0eSBncm91cHMsIGhlYWx0aGNhcmUgcHJhY3RpY2UgZ3JvdXBzLCBwYXllci9pbnN1cmVyLCBldGMuXHJcbiAgICovXHJcbiAgT3JnYW5pemF0aW9uOiBcIk9yZ2FuaXphdGlvblwiLFxyXG4gIC8qKlxyXG4gICAqIFBhdGllbnQ6IERlbW9ncmFwaGljcyBhbmQgb3RoZXIgYWRtaW5pc3RyYXRpdmUgaW5mb3JtYXRpb24gYWJvdXQgYW4gaW5kaXZpZHVhbCBvciBhbmltYWwgcmVjZWl2aW5nIGNhcmUgb3Igb3RoZXIgaGVhbHRoLXJlbGF0ZWQgc2VydmljZXMuXHJcbiAgICovXHJcbiAgUGF0aWVudDogXCJQYXRpZW50XCIsXHJcbiAgLyoqXHJcbiAgICogUHJhY3RpdGlvbmVyOiBBIHBlcnNvbiB3aG8gaXMgZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBpbnZvbHZlZCBpbiB0aGUgcHJvdmlzaW9uaW5nIG9mIGhlYWx0aGNhcmUuXHJcbiAgICovXHJcbiAgUHJhY3RpdGlvbmVyOiBcIlByYWN0aXRpb25lclwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFBvc3NpYmxlIHR5cGVzIG9mIHN1YmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3ViamVjdFR5cGVDb2RlVHlwZSA9IHR5cGVvZiBTdWJqZWN0VHlwZUNvZGVzW2tleW9mIHR5cGVvZiBTdWJqZWN0VHlwZUNvZGVzXTtcclxuIl19