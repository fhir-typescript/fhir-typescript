// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality|1.0.2
/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified Substance.
 */
export const AllergyIntoleranceCriticalityCodes = {
    /**
     * CRITH: The potential clinical impact of a future reaction is estimated as high risk: exposure to substance may result in a life threatening or organ system threatening outcome. Future exposure to the Substance may be considered an absolute contra-indication.
     */
    HighRisk: "CRITH",
    /**
     * CRITL: The potential clinical impact of a future reaction is estimated as low risk: exposure to substance is unlikely to result in a life threatening or organ system threatening outcome. Future exposure to the Substance is considered a relative contra-indication.
     */
    LowRisk: "CRITL",
    /**
     * CRITU: Unable to assess the potential clinical impact with the information available.
     */
    UnableToDetermine: "CRITU",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxvRkFBb0Y7QUFFcEY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxrQ0FBa0MsR0FBRztJQUNoRDs7T0FFRztJQUNILFFBQVEsRUFBRSxPQUFPO0lBQ2pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLE9BQU87SUFDaEI7O09BRUc7SUFDSCxpQkFBaUIsRUFBRSxPQUFPO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvYWxsZXJneS1pbnRvbGVyYW5jZS1jcml0aWNhbGl0eXwxLjAuMlxyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWxsZXJneUludG9sZXJhbmNlQ3JpdGljYWxpdHlDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBDUklUSDogVGhlIHBvdGVudGlhbCBjbGluaWNhbCBpbXBhY3Qgb2YgYSBmdXR1cmUgcmVhY3Rpb24gaXMgZXN0aW1hdGVkIGFzIGhpZ2ggcmlzazogZXhwb3N1cmUgdG8gc3Vic3RhbmNlIG1heSByZXN1bHQgaW4gYSBsaWZlIHRocmVhdGVuaW5nIG9yIG9yZ2FuIHN5c3RlbSB0aHJlYXRlbmluZyBvdXRjb21lLiBGdXR1cmUgZXhwb3N1cmUgdG8gdGhlIFN1YnN0YW5jZSBtYXkgYmUgY29uc2lkZXJlZCBhbiBhYnNvbHV0ZSBjb250cmEtaW5kaWNhdGlvbi5cclxuICAgKi9cclxuICBIaWdoUmlzazogXCJDUklUSFwiLFxyXG4gIC8qKlxyXG4gICAqIENSSVRMOiBUaGUgcG90ZW50aWFsIGNsaW5pY2FsIGltcGFjdCBvZiBhIGZ1dHVyZSByZWFjdGlvbiBpcyBlc3RpbWF0ZWQgYXMgbG93IHJpc2s6IGV4cG9zdXJlIHRvIHN1YnN0YW5jZSBpcyB1bmxpa2VseSB0byByZXN1bHQgaW4gYSBsaWZlIHRocmVhdGVuaW5nIG9yIG9yZ2FuIHN5c3RlbSB0aHJlYXRlbmluZyBvdXRjb21lLiBGdXR1cmUgZXhwb3N1cmUgdG8gdGhlIFN1YnN0YW5jZSBpcyBjb25zaWRlcmVkIGEgcmVsYXRpdmUgY29udHJhLWluZGljYXRpb24uXHJcbiAgICovXHJcbiAgTG93UmlzazogXCJDUklUTFwiLFxyXG4gIC8qKlxyXG4gICAqIENSSVRVOiBVbmFibGUgdG8gYXNzZXNzIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaW1wYWN0IHdpdGggdGhlIGluZm9ybWF0aW9uIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBVbmFibGVUb0RldGVybWluZTogXCJDUklUVVwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEVzdGltYXRlIG9mIHRoZSBwb3RlbnRpYWwgY2xpbmljYWwgaGFybSwgb3Igc2VyaW91c25lc3MsIG9mIGEgcmVhY3Rpb24gdG8gYW4gaWRlbnRpZmllZCBTdWJzdGFuY2UuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbGxlcmd5SW50b2xlcmFuY2VDcml0aWNhbGl0eUNvZGVUeXBlID0gdHlwZW9mIEFsbGVyZ3lJbnRvbGVyYW5jZUNyaXRpY2FsaXR5Q29kZXNba2V5b2YgdHlwZW9mIEFsbGVyZ3lJbnRvbGVyYW5jZUNyaXRpY2FsaXR5Q29kZXNdO1xyXG4iXX0=