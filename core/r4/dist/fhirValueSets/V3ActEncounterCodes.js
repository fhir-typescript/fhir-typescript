// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v3-ActEncounterCode|2014-03-26
/**
 *  Domain provides codes that qualify the ActEncounterClass (ENC)
 */
export const V3ActEncounterCodes = {
    /**
     * ACUTE: An acute inpatient encounter.
     */
    InpatientAcute: "ACUTE",
    /**
     * AMB: A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
     */
    Ambulatory: "AMB",
    /**
     * EMER: A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
     */
    Emergency: "EMER",
    /**
     * FLD: A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
     */
    Field: "FLD",
    /**
     * HH: Healthcare encounter that takes place in the residence of the patient or a designee
     */
    HomeHealth: "HH",
    /**
     * IMP: A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service.
     */
    InpatientEncounter: "IMP",
    /**
     * NONAC: Any category of inpatient encounter except 'acute'
     */
    InpatientNonAcute: "NONAC",
    /**
     * OBSENC: An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours.
     */
    ObservationEncounter: "OBSENC",
    /**
     * PRENC: A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.
     *
     *
     *                            Usage Note: This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc.
     */
    PreAdmission: "PRENC",
    /**
     * SS: An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
     */
    ShortStay: "SS",
    /**
     * VR: A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
     */
    Virtual: "VR",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNBY3RFbmNvdW50ZXJDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVjNBY3RFbmNvdW50ZXJDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxvRkFBb0Y7QUFFcEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRztJQUNqQzs7T0FFRztJQUNILGNBQWMsRUFBRSxPQUFPO0lBQ3ZCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLEtBQUs7SUFDakI7O09BRUc7SUFDSCxTQUFTLEVBQUUsTUFBTTtJQUNqQjs7T0FFRztJQUNILEtBQUssRUFBRSxLQUFLO0lBQ1o7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSTtJQUNoQjs7T0FFRztJQUNILGtCQUFrQixFQUFFLEtBQUs7SUFDekI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxPQUFPO0lBQzFCOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsUUFBUTtJQUM5Qjs7Ozs7T0FLRztJQUNILFlBQVksRUFBRSxPQUFPO0lBQ3JCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUk7SUFDZjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvVmFsdWVTZXQvdjMtQWN0RW5jb3VudGVyQ29kZXwyMDE0LTAzLTI2XHJcblxyXG4vKipcclxuICogIERvbWFpbiBwcm92aWRlcyBjb2RlcyB0aGF0IHF1YWxpZnkgdGhlIEFjdEVuY291bnRlckNsYXNzIChFTkMpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVjNBY3RFbmNvdW50ZXJDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBBQ1VURTogQW4gYWN1dGUgaW5wYXRpZW50IGVuY291bnRlci5cclxuICAgKi9cclxuICBJbnBhdGllbnRBY3V0ZTogXCJBQ1VURVwiLFxyXG4gIC8qKlxyXG4gICAqIEFNQjogQSBjb21wcmVoZW5zaXZlIHRlcm0gZm9yIGhlYWx0aCBjYXJlIHByb3ZpZGVkIGluIGEgaGVhbHRoY2FyZSBmYWNpbGl0eSAoZS5nLiBhIHByYWN0aXRpb25lcmFUTXMgb2ZmaWNlLCBjbGluaWMgc2V0dGluZywgb3IgaG9zcGl0YWwpIG9uIGEgbm9ucmVzaWRlbnQgYmFzaXMuIFRoZSB0ZXJtIGFtYnVsYXRvcnkgdXN1YWxseSBpbXBsaWVzIHRoYXQgdGhlIHBhdGllbnQgaGFzIGNvbWUgdG8gdGhlIGxvY2F0aW9uIGFuZCBpcyBub3QgYXNzaWduZWQgdG8gYSBiZWQuIFNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyBhbiBvdXRwYXRpZW50IGVuY291bnRlci5cclxuICAgKi9cclxuICBBbWJ1bGF0b3J5OiBcIkFNQlwiLFxyXG4gIC8qKlxyXG4gICAqIEVNRVI6IEEgcGF0aWVudCBlbmNvdW50ZXIgdGhhdCB0YWtlcyBwbGFjZSBhdCBhIGRlZGljYXRlZCBoZWFsdGhjYXJlIHNlcnZpY2UgZGVsaXZlcnkgbG9jYXRpb24gd2hlcmUgdGhlIHBhdGllbnQgcmVjZWl2ZXMgaW1tZWRpYXRlIGV2YWx1YXRpb24gYW5kIHRyZWF0bWVudCwgcHJvdmlkZWQgdW50aWwgdGhlIHBhdGllbnQgY2FuIGJlIGRpc2NoYXJnZWQgb3IgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwYXRpZW50J3MgY2FyZSBpcyB0cmFuc2ZlcnJlZCBlbHNld2hlcmUgKGZvciBleGFtcGxlLCB0aGUgcGF0aWVudCBjb3VsZCBiZSBhZG1pdHRlZCBhcyBhbiBpbnBhdGllbnQgb3IgdHJhbnNmZXJyZWQgdG8gYW5vdGhlciBmYWNpbGl0eS4pXHJcbiAgICovXHJcbiAgRW1lcmdlbmN5OiBcIkVNRVJcIixcclxuICAvKipcclxuICAgKiBGTEQ6IEEgcGF0aWVudCBlbmNvdW50ZXIgdGhhdCB0YWtlcyBwbGFjZSBib3RoIG91dHNpZGUgYSBkZWRpY2F0ZWQgc2VydmljZSBkZWxpdmVyeSBsb2NhdGlvbiBhbmQgb3V0c2lkZSBhIHBhdGllbnQncyByZXNpZGVuY2UuIEV4YW1wbGUgbG9jYXRpb25zIG1pZ2h0IGluY2x1ZGUgYW4gYWNjaWRlbnQgc2l0ZSBhbmQgYXQgYSBzdXBlcm1hcmtldC5cclxuICAgKi9cclxuICBGaWVsZDogXCJGTERcIixcclxuICAvKipcclxuICAgKiBISDogSGVhbHRoY2FyZSBlbmNvdW50ZXIgdGhhdCB0YWtlcyBwbGFjZSBpbiB0aGUgcmVzaWRlbmNlIG9mIHRoZSBwYXRpZW50IG9yIGEgZGVzaWduZWVcclxuICAgKi9cclxuICBIb21lSGVhbHRoOiBcIkhIXCIsXHJcbiAgLyoqXHJcbiAgICogSU1QOiBBIHBhdGllbnQgZW5jb3VudGVyIHdoZXJlIGEgcGF0aWVudCBpcyBhZG1pdHRlZCBieSBhIGhvc3BpdGFsIG9yIGVxdWl2YWxlbnQgZmFjaWxpdHksIGFzc2lnbmVkIHRvIGEgbG9jYXRpb24gd2hlcmUgcGF0aWVudHMgZ2VuZXJhbGx5IHN0YXkgYXQgbGVhc3Qgb3Zlcm5pZ2h0IGFuZCBwcm92aWRlZCB3aXRoIHJvb20sIGJvYXJkLCBhbmQgY29udGludW91cyBudXJzaW5nIHNlcnZpY2UuXHJcbiAgICovXHJcbiAgSW5wYXRpZW50RW5jb3VudGVyOiBcIklNUFwiLFxyXG4gIC8qKlxyXG4gICAqIE5PTkFDOiBBbnkgY2F0ZWdvcnkgb2YgaW5wYXRpZW50IGVuY291bnRlciBleGNlcHQgJ2FjdXRlJ1xyXG4gICAqL1xyXG4gIElucGF0aWVudE5vbkFjdXRlOiBcIk5PTkFDXCIsXHJcbiAgLyoqXHJcbiAgICogT0JTRU5DOiBBbiBlbmNvdW50ZXIgd2hlcmUgdGhlIHBhdGllbnQgdXN1YWxseSB3aWxsIHN0YXJ0IGluIGRpZmZlcmVudCBlbmNvdW50ZXIsIHN1Y2ggYXMgb25lIGluIHRoZSBlbWVyZ2VuY3kgZGVwYXJ0bWVudCAoRU1FUikgYnV0IHRoZW4gdHJhbnNpdGlvbiB0byB0aGlzIHR5cGUgb2YgZW5jb3VudGVyIGJlY2F1c2UgdGhleSByZXF1aXJlIGEgc2lnbmlmaWNhbnQgcGVyaW9kIG9mIHRyZWF0bWVudCBhbmQgbW9uaXRvcmluZyB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhlaXIgY29uZGl0aW9uIHdhcnJhbnRzIGFuIGlucGF0aWVudCBhZG1pc3Npb24gb3IgZGlzY2hhcmdlLiBJbiB0aGUgbWFqb3JpdHkgb2YgY2FzZXMgdGhlIGRlY2lzaW9uIGFib3V0IGFkbWlzc2lvbiBvciBkaXNjaGFyZ2Ugd2lsbCBvY2N1ciB3aXRoaW4gYSB0aW1lIHBlcmlvZCBkZXRlcm1pbmVkIGJ5IGxvY2FsLCByZWdpb25hbCBvciBuYXRpb25hbCByZWd1bGF0aW9uLCBvZnRlbiBiZXR3ZWVuIDI0IGFuZCA0OCBob3Vycy5cclxuICAgKi9cclxuICBPYnNlcnZhdGlvbkVuY291bnRlcjogXCJPQlNFTkNcIixcclxuICAvKipcclxuICAgKiBQUkVOQzogQSBwYXRpZW50IGVuY291bnRlciB3aGVyZSBwYXRpZW50IGlzIHNjaGVkdWxlZCBvciBwbGFubmVkIHRvIHJlY2VpdmUgc2VydmljZSBkZWxpdmVyeSBpbiB0aGUgZnV0dXJlLCBhbmQgdGhlIHBhdGllbnQgaXMgZ2l2ZW4gYSBwcmUtYWRtaXNzaW9uIGFjY291bnQgbnVtYmVyLiBXaGVuIHRoZSBwYXRpZW50IGNvbWVzIGJhY2sgZm9yIHN1YnNlcXVlbnQgc2VydmljZSwgdGhlIHByZS1hZG1pc3Npb24gZW5jb3VudGVyIGlzIHNlbGVjdGVkIGFuZCBpcyBlbmNhcHN1bGF0ZWQgaW50byB0aGUgc2VydmljZSByZWdpc3RyYXRpb24sIGFuZCBhIG5ldyBhY2NvdW50IG51bWJlciBpcyBnZW5lcmF0ZWQuXHJcbiAgICogXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNhZ2UgTm90ZTogVGhpcyBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGFkdmFuY2Ugb2YgZW5jb3VudGVyIHR5cGVzIHN1Y2ggYXMgYW1idWxhdG9yeSwgaW5wYXRpZW50IGVuY291bnRlciwgdmlydHVhbCwgZXRjLlxyXG4gICAqL1xyXG4gIFByZUFkbWlzc2lvbjogXCJQUkVOQ1wiLFxyXG4gIC8qKlxyXG4gICAqIFNTOiBBbiBlbmNvdW50ZXIgd2hlcmUgdGhlIHBhdGllbnQgaXMgYWRtaXR0ZWQgdG8gYSBoZWFsdGggY2FyZSBmYWNpbGl0eSBmb3IgYSBwcmVkZXRlcm1pbmVkIGxlbmd0aCBvZiB0aW1lLCB1c3VhbGx5IGxlc3MgdGhhbiAyNCBob3Vycy5cclxuICAgKi9cclxuICBTaG9ydFN0YXk6IFwiU1NcIixcclxuICAvKipcclxuICAgKiBWUjogQSBwYXRpZW50IGVuY291bnRlciB3aGVyZSB0aGUgcGF0aWVudCBhbmQgdGhlIHByYWN0aXRpb25lcihzKSBhcmUgbm90IGluIHRoZSBzYW1lIHBoeXNpY2FsIGxvY2F0aW9uLiBFeGFtcGxlcyBpbmNsdWRlIHRlbGVwaG9uZSBjb25mZXJlbmNlLCBlbWFpbCBleGNoYW5nZSwgcm9ib3RpYyBzdXJnZXJ5LCBhbmQgdGVsZXZpZGVvIGNvbmZlcmVuY2UuXHJcbiAgICovXHJcbiAgVmlydHVhbDogXCJWUlwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqICBEb21haW4gcHJvdmlkZXMgY29kZXMgdGhhdCBxdWFsaWZ5IHRoZSBBY3RFbmNvdW50ZXJDbGFzcyAoRU5DKVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVjNBY3RFbmNvdW50ZXJDb2RlVHlwZSA9IHR5cGVvZiBWM0FjdEVuY291bnRlckNvZGVzW2tleW9mIHR5cGVvZiBWM0FjdEVuY291bnRlckNvZGVzXTtcclxuIl19