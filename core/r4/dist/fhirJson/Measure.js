// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Measure
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJKc29uL01lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBNZWFzdXJlXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQSBwb3B1bGF0aW9uIGNyaXRlcmlhIGZvciB0aGUgbWVhc3VyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZUdyb3VwUG9wdWxhdGlvbiBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgb2YgcG9wdWxhdGlvbiBjcml0ZXJpYS5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHBvcHVsYXRpb24gY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLmdyb3VwLnBvcHVsYXRpb24uZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogSW4gdGhlIGNhc2Ugb2YgYSBjb250aW51b3VzLXZhcmlhYmxlIG9yIHJhdGlvIG1lYXN1cmUsIHRoaXMgbWF5IGJlIHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24gdGhhdCBjYWxjdWxhdGVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5kaXZpZHVhbCBvYnNlcnZhdGlvbiBmb3IgZWFjaCBwYXRpZW50IG9yIGV2ZW50IGluIHRoZSBwb3B1bGF0aW9uLiBGb3IgdGhlc2UgdHlwZXMgb2YgbWVhc3VyZXMsIGluZGl2aWR1YWwgb2JzZXJ2YXRpb25zIGFyZSByZXBvcnRlZCBhcyBvYnNlcnZhdGlvbiByZXNvdXJjZXMgaW5jbHVkZWQgaW4gdGhlIGV2YWx1YXRlZFJlc291cmNlcyBidW5kbGUgZm9yIGVhY2ggcGF0aWVudC4gU2VlIHRoZSBNZWFzdXJlUmVwb3J0IHJlc291cmNlIG9yIHRoZSBRdWFsaXR5IFJlcG9ydGluZyB0b3BpYyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBjcml0ZXJpYTogZmhpci5FeHByZXNzaW9ufG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdHJhdGlmaWVycyBhcmUgZGVmaW5lZCBlaXRoZXIgYXMgYSBzaW5nbGUgY3JpdGVyaWEsIG9yIGFzIGEgc2V0IG9mIGNvbXBvbmVudCBjcml0ZXJpYS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVhc3VyZUdyb3VwU3RyYXRpZmllckNvbXBvbmVudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGEgbWVhbmluZyBmb3IgdGhlIHN0cmF0aWZpZXIgY29tcG9uZW50LiBUaGlzIGNhbiBiZSBhcyBzaW1wbGUgYXMgYSB1bmlxdWUgaWRlbnRpZmllciwgb3IgaXQgY2FuIGVzdGFibGlzaCBtZWFuaW5nIGluIGEgYnJvYWRlciBjb250ZXh0IGJ5IGRyYXdpbmcgZnJvbSBhIHRlcm1pbm9sb2d5LCBhbGxvd2luZyBzdHJhdGlmaWVycyB0byBiZSBjb3JyZWxhdGVkIGFjcm9zcyBtZWFzdXJlcy5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBodW1hbiByZWFkYWJsZSBkZXNjcmlwdGlvbiBvZiB0aGlzIHN0cmF0aWZpZXIgY3JpdGVyaWEgY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5ncm91cC5zdHJhdGlmaWVyLmNvbXBvbmVudC5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbiBleHByZXNzaW9uIHRoYXQgc3BlY2lmaWVzIHRoZSBjcml0ZXJpYSBmb3IgdGhpcyBjb21wb25lbnQgb2YgdGhlIHN0cmF0aWZpZXIuIFRoaXMgaXMgdHlwaWNhbGx5IHRoZSBuYW1lIG9mIGFuIGV4cHJlc3Npb24gZGVmaW5lZCB3aXRoaW4gYSByZWZlcmVuY2VkIGxpYnJhcnksIGJ1dCBpdCBtYXkgYWxzbyBiZSBhIHBhdGggdG8gYSBzdHJhdGlmaWVyIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgY3JpdGVyaWE6IGZoaXIuRXhwcmVzc2lvbnxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0cmF0aWZpZXIgY3JpdGVyaWEgZm9yIHRoZSBtZWFzdXJlIHJlcG9ydCwgc3BlY2lmaWVkIGFzIGVpdGhlciB0aGUgbmFtZSBvZiBhIHZhbGlkIENRTCBleHByZXNzaW9uIGRlZmluZWQgd2l0aGluIGEgcmVmZXJlbmNlZCBsaWJyYXJ5IG9yIGEgdmFsaWQgRkhJUiBSZXNvdXJjZSBQYXRoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlR3JvdXBTdHJhdGlmaWVyIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgYSBtZWFuaW5nIGZvciB0aGUgc3RyYXRpZmllci4gVGhpcyBjYW4gYmUgYXMgc2ltcGxlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIsIG9yIGl0IGNhbiBlc3RhYmxpc2ggbWVhbmluZyBpbiBhIGJyb2FkZXIgY29udGV4dCBieSBkcmF3aW5nIGZyb20gYSB0ZXJtaW5vbG9neSwgYWxsb3dpbmcgc3RyYXRpZmllcnMgdG8gYmUgY29ycmVsYXRlZCBhY3Jvc3MgbWVhc3VyZXMuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhpcyBzdHJhdGlmaWVyIGNyaXRlcmlhLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5ncm91cC5zdHJhdGlmaWVyLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFuIGV4cHJlc3Npb24gdGhhdCBzcGVjaWZpZXMgdGhlIGNyaXRlcmlhIGZvciB0aGUgc3RyYXRpZmllci4gVGhpcyBpcyB0eXBpY2FsbHkgdGhlIG5hbWUgb2YgYW4gZXhwcmVzc2lvbiBkZWZpbmVkIHdpdGhpbiBhIHJlZmVyZW5jZWQgbGlicmFyeSwgYnV0IGl0IG1heSBhbHNvIGJlIGEgcGF0aCB0byBhIHN0cmF0aWZpZXIgZWxlbWVudC5cclxuICAgKi9cclxuICBjcml0ZXJpYT86IGZoaXIuRXhwcmVzc2lvbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3RyYXRpZmllcnMgYXJlIGRlZmluZWQgZWl0aGVyIGFzIGEgc2luZ2xlIGNyaXRlcmlhLCBvciBhcyBhIHNldCBvZiBjb21wb25lbnQgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgY29tcG9uZW50PzogKGZoaXIuTWVhc3VyZUdyb3VwU3RyYXRpZmllckNvbXBvbmVudHxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgZ3JvdXAgb2YgcG9wdWxhdGlvbiBjcml0ZXJpYSBmb3IgdGhlIG1lYXN1cmUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVHcm91cCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGEgbWVhbmluZyBmb3IgdGhlIGdyb3VwLiBUaGlzIGNhbiBiZSBhcyBzaW1wbGUgYXMgYSB1bmlxdWUgaWRlbnRpZmllciwgb3IgaXQgY2FuIGVzdGFibGlzaCBtZWFuaW5nIGluIGEgYnJvYWRlciBjb250ZXh0IGJ5IGRyYXdpbmcgZnJvbSBhIHRlcm1pbm9sb2d5LCBhbGxvd2luZyBncm91cHMgdG8gYmUgY29ycmVsYXRlZCBhY3Jvc3MgbWVhc3VyZXMuXHJcbiAgICovXHJcbiAgY29kZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhpcyBwb3B1bGF0aW9uIGdyb3VwLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5ncm91cC5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIHBvcHVsYXRpb24gY3JpdGVyaWEgZm9yIHRoZSBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIHBvcHVsYXRpb24/OiAoZmhpci5NZWFzdXJlR3JvdXBQb3B1bGF0aW9ufG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBzdHJhdGlmaWVyIGNyaXRlcmlhIGZvciB0aGUgbWVhc3VyZSByZXBvcnQsIHNwZWNpZmllZCBhcyBlaXRoZXIgdGhlIG5hbWUgb2YgYSB2YWxpZCBDUUwgZXhwcmVzc2lvbiBkZWZpbmVkIHdpdGhpbiBhIHJlZmVyZW5jZWQgbGlicmFyeSBvciBhIHZhbGlkIEZISVIgUmVzb3VyY2UgUGF0aC5cclxuICAgKi9cclxuICBzdHJhdGlmaWVyPzogKGZoaXIuTWVhc3VyZUdyb3VwU3RyYXRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5vdGUgdGhhdCBzdXBwbGVtZW50YWwgZGF0YSBhcmUgcmVwb3J0ZWQgYXMgb2JzZXJ2YXRpb25zIGZvciBlYWNoIHBhdGllbnQgYW5kIGluY2x1ZGVkIGluIHRoZSBldmFsdWF0ZWRSZXNvdXJjZXMgYnVuZGxlLiBTZWUgdGhlIE1lYXN1cmVSZXBvcnQgcmVzb3VyY2Ugb3IgdGhlIFF1YWxpdHkgUmVwb3J0aW5nIHRvcGljIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlU3VwcGxlbWVudGFsRGF0YSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGEgbWVhbmluZyBmb3IgdGhlIHN1cHBsZW1lbnRhbCBkYXRhLiBUaGlzIGNhbiBiZSBhcyBzaW1wbGUgYXMgYSB1bmlxdWUgaWRlbnRpZmllciwgb3IgaXQgY2FuIGVzdGFibGlzaCBtZWFuaW5nIGluIGEgYnJvYWRlciBjb250ZXh0IGJ5IGRyYXdpbmcgZnJvbSBhIHRlcm1pbm9sb2d5LCBhbGxvd2luZyBzdXBwbGVtZW50YWwgZGF0YSB0byBiZSBjb3JyZWxhdGVkIGFjcm9zcyBtZWFzdXJlcy5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIGluZGljYXRvciBvZiB0aGUgaW50ZW5kZWQgdXNhZ2UgZm9yIHRoZSBzdXBwbGVtZW50YWwgZGF0YSBlbGVtZW50LiBTdXBwbGVtZW50YWwgZGF0YSBpbmRpY2F0ZXMgdGhlIGRhdGEgaXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiByZXF1ZXN0ZWQgdG8gYXVnbWVudCB0aGUgbWVhc3VyZSBpbmZvcm1hdGlvbi4gUmlzayBhZGp1c3RtZW50IGZhY3RvciBpbmRpY2F0ZXMgdGhlIGRhdGEgaXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB1c2VkIHRvIGNhbGN1bGF0ZSByaXNrIGFkanVzdG1lbnQgZmFjdG9ycyB3aGVuIGFwcGx5aW5nIGEgcmlzayBtb2RlbCB0byB0aGUgbWVhc3VyZSBjYWxjdWxhdGlvbi5cclxuICAgKi9cclxuICB1c2FnZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgaHVtYW4gcmVhZGFibGUgZGVzY3JpcHRpb24gb2YgdGhpcyBzdXBwbGVtZW50YWwgZGF0YS5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuc3VwcGxlbWVudGFsRGF0YS5kZXNjcmlwdGlvblxyXG4gICAqL1xyXG4gIF9kZXNjcmlwdGlvbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgY3JpdGVyaWEgZm9yIHRoZSBzdXBwbGVtZW50YWwgZGF0YS4gVGhpcyBpcyB0eXBpY2FsbHkgdGhlIG5hbWUgb2YgYSB2YWxpZCBleHByZXNzaW9uIGRlZmluZWQgd2l0aGluIGEgcmVmZXJlbmNlZCBsaWJyYXJ5LCBidXQgaXQgbWF5IGFsc28gYmUgYSBwYXRoIHRvIGEgc3BlY2lmaWMgZGF0YSBlbGVtZW50LiBUaGUgY3JpdGVyaWEgZGVmaW5lcyB0aGUgZGF0YSB0byBiZSByZXR1cm5lZCBmb3IgdGhpcyBlbGVtZW50LlxyXG4gICAqL1xyXG4gIGNyaXRlcmlhOiBmaGlyLkV4cHJlc3Npb258bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWFzdXJlIHJlc291cmNlIHByb3ZpZGVzIHRoZSBkZWZpbml0aW9uIG9mIGEgcXVhbGl0eSBtZWFzdXJlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7IFxyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJNZWFzdXJlXCJ8bnVsbDtcclxuICAvKipcclxuICAgKiBDYW4gYmUgYSB1cm46dXVpZDogb3IgYSB1cm46b2lkOiBidXQgcmVhbCBodHRwOiBhZGRyZXNzZXMgYXJlIHByZWZlcnJlZC4gIE11bHRpcGxlIGluc3RhbmNlcyBtYXkgc2hhcmUgdGhlIHNhbWUgVVJMIGlmIHRoZXkgaGF2ZSBhIGRpc3RpbmN0IHZlcnNpb24uXHJcbiAgICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjcmVhdGUgYSBuZXcgdmVyc2lvbiBvZiBhIHJlc291cmNlIChzYW1lIHVybCwgbmV3IHZlcnNpb24pIHZzLiBkZWZpbmluZyBhIG5ldyBhcnRpZmFjdCBpcyB1cCB0byB0aGUgYXV0aG9yLiAgQ29uc2lkZXJhdGlvbnMgZm9yIG1ha2luZyB0aGlzIGRlY2lzaW9uIGFyZSBmb3VuZCBpbiBbVGVjaG5pY2FsIGFuZCBCdXNpbmVzcyBWZXJzaW9uc10ocmVzb3VyY2UuaHRtbCN2ZXJzaW9ucykuIFxyXG4gICAqIEluIHNvbWUgY2FzZXMsIHRoZSByZXNvdXJjZSBjYW4gbm8gbG9uZ2VyIGJlIGZvdW5kIGF0IHRoZSBzdGF0ZWQgdXJsLCBidXQgdGhlIHVybCBpdHNlbGYgY2Fubm90IGNoYW5nZS4gSW1wbGVtZW50YXRpb25zIGNhbiB1c2UgdGhlIFttZXRhLnNvdXJjZV0ocmVzb3VyY2UuaHRtbCNtZXRhKSBlbGVtZW50IHRvIGluZGljYXRlIHdoZXJlIHRoZSBjdXJyZW50IG1hc3RlciBzb3VyY2Ugb2YgdGhlIHJlc291cmNlIGNhbiBiZSBmb3VuZC5cclxuICAgKi9cclxuICB1cmw/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLnVybFxyXG4gICAqL1xyXG4gIF91cmw/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVHlwaWNhbGx5LCB0aGlzIGlzIHVzZWQgZm9yIGlkZW50aWZpZXJzIHRoYXQgY2FuIGdvIGluIGFuIEhMNyBWMyBJSSAoaW5zdGFuY2UgaWRlbnRpZmllcikgZGF0YSB0eXBlLCBhbmQgY2FuIHRoZW4gaWRlbnRpZnkgdGhpcyBtZWFzdXJlIG91dHNpZGUgb2YgRkhJUiwgd2hlcmUgaXQgaXMgbm90IHBvc3NpYmxlIHRvIHVzZSB0aGUgbG9naWNhbCBVUkkuXHJcbiAgICovXHJcbiAgaWRlbnRpZmllcj86IChmaGlyLklkZW50aWZpZXJ8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgbWF5IGJlIGRpZmZlcmVudCBtZWFzdXJlIGluc3RhbmNlcyB0aGF0IGhhdmUgdGhlIHNhbWUgaWRlbnRpZmllciBidXQgZGlmZmVyZW50IHZlcnNpb25zLiAgVGhlIHZlcnNpb24gY2FuIGJlIGFwcGVuZGVkIHRvIHRoZSB1cmwgaW4gYSByZWZlcmVuY2UgdG8gYWxsb3cgYSByZWZlcmVuY2UgdG8gYSBwYXJ0aWN1bGFyIGJ1c2luZXNzIHZlcnNpb24gb2YgdGhlIG1lYXN1cmUgd2l0aCB0aGUgZm9ybWF0IFt1cmxdfFt2ZXJzaW9uXS5cclxuICAgKi9cclxuICB2ZXJzaW9uPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS52ZXJzaW9uXHJcbiAgICovXHJcbiAgX3ZlcnNpb24/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgaXMgbm90IGV4cGVjdGVkIHRvIGJlIGdsb2JhbGx5IHVuaXF1ZS4gVGhlIG5hbWUgc2hvdWxkIGJlIGEgc2ltcGxlIGFscGhhbnVtZXJpYyB0eXBlIG5hbWUgdG8gZW5zdXJlIHRoYXQgaXQgaXMgbWFjaGluZS1wcm9jZXNzaW5nIGZyaWVuZGx5LlxyXG4gICAqL1xyXG4gIG5hbWU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGlzIG5hbWUgZG9lcyBub3QgbmVlZCB0byBiZSBtYWNoaW5lLXByb2Nlc3NpbmcgZnJpZW5kbHkgYW5kIG1heSBjb250YWluIHB1bmN0dWF0aW9uLCB3aGl0ZS1zcGFjZSwgZXRjLlxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS50aXRsZVxyXG4gICAqL1xyXG4gIF90aXRsZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbiBleHBsYW5hdG9yeSBvciBhbHRlcm5hdGUgdGl0bGUgZm9yIHRoZSBtZWFzdXJlIGdpdmluZyBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGl0cyBjb250ZW50LlxyXG4gICAqL1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5zdWJ0aXRsZVxyXG4gICAqL1xyXG4gIF9zdWJ0aXRsZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbGxvd3MgZmlsdGVyaW5nIG9mIG1lYXN1cmVzIHRoYXQgYXJlIGFwcHJvcHJpYXRlIGZvciB1c2UgdmVyc3VzIG5vdC5cclxuICAgKi9cclxuICBzdGF0dXM6ICdhY3RpdmUnfCdkcmFmdCd8J3JldGlyZWQnfCd1bmtub3duJ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZpbHRlcmluZyBvZiBtZWFzdXJlcyB0aGF0IGFyZSBhcHByb3ByaWF0ZSBmb3IgdXNlIHZlcnN1cyBub3QuXHJcbiAgICovXHJcbiAgZXhwZXJpbWVudGFsPzogYm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuZXhwZXJpbWVudGFsXHJcbiAgICovXHJcbiAgX2V4cGVyaW1lbnRhbD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgc3ViamVjdCBvZiB0aGUgbWVhc3VyZSBpcyBjcml0aWNhbCBpbiBpbnRlcnByZXRpbmcgdGhlIGNyaXRlcmlhIGRlZmluaXRpb25zLCBhcyB0aGUgbG9naWMgaW4gdGhlIG1lYXN1cmVzIGlzIGV2YWx1YXRlZCB3aXRoIHJlc3BlY3QgdG8gYSBwYXJ0aWN1bGFyIHN1YmplY3QuIFRoaXMgY29ycmVzcG9uZHMgcm91Z2hseSB0byB0aGUgbm90aW9uIG9mIGEgQ29tcGFydG1lbnQgaW4gdGhhdCBpdCBsaW1pdHMgd2hhdCBjb250ZW50IGlzIGF2YWlsYWJsZSBiYXNlZCBvbiBpdHMgcmVsYXRpb25zaGlwIHRvIHRoZSBzdWJqZWN0LiBJbiBDUUwsIHRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIGNvbnRleHQgZGVjbGFyYXRpb24uXHJcbiAgICovXHJcbiAgc3ViamVjdENvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3ViamVjdCBvZiB0aGUgbWVhc3VyZSBpcyBjcml0aWNhbCBpbiBpbnRlcnByZXRpbmcgdGhlIGNyaXRlcmlhIGRlZmluaXRpb25zLCBhcyB0aGUgbG9naWMgaW4gdGhlIG1lYXN1cmVzIGlzIGV2YWx1YXRlZCB3aXRoIHJlc3BlY3QgdG8gYSBwYXJ0aWN1bGFyIHN1YmplY3QuIFRoaXMgY29ycmVzcG9uZHMgcm91Z2hseSB0byB0aGUgbm90aW9uIG9mIGEgQ29tcGFydG1lbnQgaW4gdGhhdCBpdCBsaW1pdHMgd2hhdCBjb250ZW50IGlzIGF2YWlsYWJsZSBiYXNlZCBvbiBpdHMgcmVsYXRpb25zaGlwIHRvIHRoZSBzdWJqZWN0LiBJbiBDUUwsIHRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIGNvbnRleHQgZGVjbGFyYXRpb24uXHJcbiAgICovXHJcbiAgc3ViamVjdFJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIHJlc291cmNlIGxhc3QtbW9kaWZpZWQtZGF0ZSwgc2luY2UgdGhlIHJlc291cmNlIG1heSBiZSBhIHNlY29uZGFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVhc3VyZS4gQWRkaXRpb25hbCBzcGVjaWZpYyBkYXRlcyBtYXkgYmUgYWRkZWQgYXMgZXh0ZW5zaW9ucyBvciBiZSBmb3VuZCBieSBjb25zdWx0aW5nIFByb3ZlbmFuY2VzIGFzc29jaWF0ZWQgd2l0aCBwYXN0IHZlcnNpb25zIG9mIHRoZSByZXNvdXJjZS5cclxuICAgKi9cclxuICBkYXRlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVXN1YWxseSBhbiBvcmdhbml6YXRpb24gYnV0IG1heSBiZSBhbiBpbmRpdmlkdWFsLiBUaGUgcHVibGlzaGVyIChvciBzdGV3YXJkKSBvZiB0aGUgbWVhc3VyZSBpcyB0aGUgb3JnYW5pemF0aW9uIG9yIGluZGl2aWR1YWwgcHJpbWFyaWx5IHJlc3BvbnNpYmxlIGZvciB0aGUgbWFpbnRlbmFuY2UgYW5kIHVwa2VlcCBvZiB0aGUgbWVhc3VyZS4gVGhpcyBpcyBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgaW5kaXZpZHVhbCBvciBvcmdhbml6YXRpb24gdGhhdCBkZXZlbG9wZWQgYW5kIGluaXRpYWxseSBhdXRob3JlZCB0aGUgY29udGVudC4gVGhlIHB1Ymxpc2hlciBpcyB0aGUgcHJpbWFyeSBwb2ludCBvZiBjb250YWN0IGZvciBxdWVzdGlvbnMgb3IgaXNzdWVzIHdpdGggdGhlIG1lYXN1cmUuIFRoaXMgaXRlbSBTSE9VTEQgYmUgcG9wdWxhdGVkIHVubGVzcyB0aGUgaW5mb3JtYXRpb24gaXMgYXZhaWxhYmxlIGZyb20gY29udGV4dC5cclxuICAgKi9cclxuICBwdWJsaXNoZXI/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLnB1Ymxpc2hlclxyXG4gICAqL1xyXG4gIF9wdWJsaXNoZXI/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogTWF5IGJlIGEgd2ViIHNpdGUsIGFuIGVtYWlsIGFkZHJlc3MsIGEgdGVsZXBob25lIG51bWJlciwgZXRjLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiAoZmhpci5Db250YWN0RGV0YWlsfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZGVzY3JpcHRpb24gY2FuIGJlIHVzZWQgdG8gY2FwdHVyZSBkZXRhaWxzIHN1Y2ggYXMgd2h5IHRoZSBtZWFzdXJlIHdhcyBidWlsdCwgY29tbWVudHMgYWJvdXQgbWlzdXNlLCBpbnN0cnVjdGlvbnMgZm9yIGNsaW5pY2FsIHVzZSBhbmQgaW50ZXJwcmV0YXRpb24sIGxpdGVyYXR1cmUgcmVmZXJlbmNlcywgZXhhbXBsZXMgZnJvbSB0aGUgcGFwZXIgd29ybGQsIGV0Yy4gSXQgaXMgbm90IGEgcmVuZGVyaW5nIG9mIHRoZSBtZWFzdXJlIGFzIGNvbnZleWVkIGluIHRoZSAndGV4dCcgZmllbGQgb2YgdGhlIHJlc291cmNlIGl0c2VsZi4gVGhpcyBpdGVtIFNIT1VMRCBiZSBwb3B1bGF0ZWQgdW5sZXNzIHRoZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgZnJvbSBjb250ZXh0IChlLmcuIHRoZSBsYW5ndWFnZSBvZiB0aGUgbWVhc3VyZSBpcyBwcmVzdW1lZCB0byBiZSB0aGUgcHJlZG9taW5hbnQgbGFuZ3VhZ2UgaW4gdGhlIHBsYWNlIHRoZSBtZWFzdXJlIHdhcyBjcmVhdGVkKS5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuZGVzY3JpcHRpb25cclxuICAgKi9cclxuICBfZGVzY3JpcHRpb24/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogV2hlbiBtdWx0aXBsZSB1c2VDb250ZXh0cyBhcmUgc3BlY2lmaWVkLCB0aGVyZSBpcyBubyBleHBlY3RhdGlvbiB0aGF0IGFsbCBvciBhbnkgb2YgdGhlIGNvbnRleHRzIGFwcGx5LlxyXG4gICAqL1xyXG4gIHVzZUNvbnRleHQ/OiAoZmhpci5Vc2FnZUNvbnRleHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSXQgbWF5IGJlIHBvc3NpYmxlIGZvciB0aGUgbWVhc3VyZSB0byBiZSB1c2VkIGluIGp1cmlzZGljdGlvbnMgb3RoZXIgdGhhbiB0aG9zZSBmb3Igd2hpY2ggaXQgd2FzIG9yaWdpbmFsbHkgZGVzaWduZWQgb3IgaW50ZW5kZWQuXHJcbiAgICovXHJcbiAganVyaXNkaWN0aW9uPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBkb2VzIG5vdCBkZXNjcmliZSB0aGUgdXNhZ2Ugb2YgdGhlIG1lYXN1cmUuIEluc3RlYWQsIGl0IHByb3ZpZGVzIHRyYWNlYWJpbGl0eSBvZiAnJ3doeScnIHRoZSByZXNvdXJjZSBpcyBlaXRoZXIgbmVlZGVkIG9yICcnd2h5JycgaXQgaXMgZGVmaW5lZCBhcyBpdCBpcy4gIFRoaXMgbWF5IGJlIHVzZWQgdG8gcG9pbnQgdG8gc291cmNlIG1hdGVyaWFscyBvciBzcGVjaWZpY2F0aW9ucyB0aGF0IGRyb3ZlIHRoZSBzdHJ1Y3R1cmUgb2YgdGhpcyBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIHB1cnBvc2U/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLnB1cnBvc2VcclxuICAgKi9cclxuICBfcHVycG9zZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIGRldGFpbGVkIGRlc2NyaXB0aW9uLCBmcm9tIGEgY2xpbmljYWwgcGVyc3BlY3RpdmUsIG9mIGhvdyB0aGUgbWVhc3VyZSBpcyB1c2VkLlxyXG4gICAqL1xyXG4gIHVzYWdlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS51c2FnZVxyXG4gICAqL1xyXG4gIF91c2FnZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIGNvcHlyaWdodCBzdGF0ZW1lbnQgcmVsYXRpbmcgdG8gdGhlIG1lYXN1cmUgYW5kL29yIGl0cyBjb250ZW50cy4gQ29weXJpZ2h0IHN0YXRlbWVudHMgYXJlIGdlbmVyYWxseSBsZWdhbCByZXN0cmljdGlvbnMgb24gdGhlIHVzZSBhbmQgcHVibGlzaGluZyBvZiB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBjb3B5cmlnaHQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLmNvcHlyaWdodFxyXG4gICAqL1xyXG4gIF9jb3B5cmlnaHQ/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlICdkYXRlJyBlbGVtZW50IG1heSBiZSBtb3JlIHJlY2VudCB0aGFuIHRoZSBhcHByb3ZhbCBkYXRlIGJlY2F1c2Ugb2YgbWlub3IgY2hhbmdlcyBvciBlZGl0b3JpYWwgY29ycmVjdGlvbnMuXHJcbiAgICovXHJcbiAgYXBwcm92YWxEYXRlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5hcHByb3ZhbERhdGVcclxuICAgKi9cclxuICBfYXBwcm92YWxEYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIElmIHNwZWNpZmllZCwgdGhpcyBkYXRlIGZvbGxvd3MgdGhlIG9yaWdpbmFsIGFwcHJvdmFsIGRhdGUuXHJcbiAgICovXHJcbiAgbGFzdFJldmlld0RhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLmxhc3RSZXZpZXdEYXRlXHJcbiAgICovXHJcbiAgX2xhc3RSZXZpZXdEYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlZmZlY3RpdmUgcGVyaW9kIGZvciBhIG1lYXN1cmUgIGRldGVybWluZXMgd2hlbiB0aGUgY29udGVudCBpcyBhcHBsaWNhYmxlIGZvciB1c2FnZSBhbmQgaXMgaW5kZXBlbmRlbnQgb2YgcHVibGljYXRpb24gYW5kIHJldmlldyBkYXRlcy4gRm9yIGV4YW1wbGUsIGEgbWVhc3VyZSBpbnRlbmRlZCB0byBiZSB1c2VkIGZvciB0aGUgeWVhciAyMDE2IG1pZ2h0IGJlIHB1Ymxpc2hlZCBpbiAyMDE1LlxyXG4gICAqL1xyXG4gIGVmZmVjdGl2ZVBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmlwdGl2ZSB0b3BpY3MgcmVsYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgbWVhc3VyZS4gVG9waWNzIHByb3ZpZGUgYSBoaWdoLWxldmVsIGNhdGVnb3JpemF0aW9uIGdyb3VwaW5nIHR5cGVzIG9mIG1lYXN1cmVzIHRoYXQgY2FuIGJlIHVzZWZ1bCBmb3IgZmlsdGVyaW5nIGFuZCBzZWFyY2hpbmcuXHJcbiAgICovXHJcbiAgdG9waWM/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gaW5kaXZpZGl1YWwgb3Igb3JnYW5pemF0aW9uIHByaW1hcmlseSBpbnZvbHZlZCBpbiB0aGUgY3JlYXRpb24gYW5kIG1haW50ZW5hbmNlIG9mIHRoZSBjb250ZW50LlxyXG4gICAqL1xyXG4gIGF1dGhvcj86IChmaGlyLkNvbnRhY3REZXRhaWx8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gaW5kaXZpZHVhbCBvciBvcmdhbml6YXRpb24gcHJpbWFyaWx5IHJlc3BvbnNpYmxlIGZvciBpbnRlcm5hbCBjb2hlcmVuY2Ugb2YgdGhlIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgZWRpdG9yPzogKGZoaXIuQ29udGFjdERldGFpbHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBpbmRpdmlkdWFsIG9yIG9yZ2FuaXphdGlvbiBwcmltYXJpbHkgcmVzcG9uc2libGUgZm9yIHJldmlldyBvZiBzb21lIGFzcGVjdCBvZiB0aGUgY29udGVudC5cclxuICAgKi9cclxuICByZXZpZXdlcj86IChmaGlyLkNvbnRhY3REZXRhaWx8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gaW5kaXZpZHVhbCBvciBvcmdhbml6YXRpb24gcmVzcG9uc2libGUgZm9yIG9mZmljaWFsbHkgZW5kb3JzaW5nIHRoZSBjb250ZW50IGZvciB1c2UgaW4gc29tZSBzZXR0aW5nLlxyXG4gICAqL1xyXG4gIGVuZG9yc2VyPzogKGZoaXIuQ29udGFjdERldGFpbHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFYWNoIHJlbGF0ZWQgYXJ0aWZhY3QgaXMgZWl0aGVyIGFuIGF0dGFjaG1lbnQsIG9yIGEgcmVmZXJlbmNlIHRvIGFub3RoZXIgcmVzb3VyY2UsIGJ1dCBub3QgYm90aC5cclxuICAgKi9cclxuICByZWxhdGVkQXJ0aWZhY3Q/OiAoZmhpci5SZWxhdGVkQXJ0aWZhY3R8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gYSBMaWJyYXJ5IHJlc291cmNlIGNvbnRhaW5pbmcgdGhlIGZvcm1hbCBsb2dpYyB1c2VkIGJ5IHRoZSBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIGxpYnJhcnk/OiAoc3RyaW5nfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLmxpYnJhcnlcclxuICAgKi9cclxuICBfbGlicmFyeT86KGZoaXIuRmhpckVsZW1lbnR8bnVsbClbXTtcclxuICAvKipcclxuICAgKiBOb3RpY2VzIGFuZCBkaXNjbGFpbWVycyByZWdhcmRpbmcgdGhlIHVzZSBvZiB0aGUgbWVhc3VyZSBvciByZWxhdGVkIHRvIGludGVsbGVjdHVhbCBwcm9wZXJ0eSAoc3VjaCBhcyBjb2RlIHN5c3RlbXMpIHJlZmVyZW5jZWQgYnkgdGhlIG1lYXN1cmUuXHJcbiAgICovXHJcbiAgZGlzY2xhaW1lcj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuZGlzY2xhaW1lclxyXG4gICAqL1xyXG4gIF9kaXNjbGFpbWVyPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBob3cgdGhlIGNhbGN1bGF0aW9uIGlzIHBlcmZvcm1lZCBmb3IgdGhlIG1lYXN1cmUsIGluY2x1ZGluZyBwcm9wb3J0aW9uLCByYXRpbywgY29udGludW91cy12YXJpYWJsZSwgYW5kIGNvaG9ydC4gVGhlIHZhbHVlIHNldCBpcyBleHRlbnNpYmxlLCBhbGxvd2luZyBhZGRpdGlvbmFsIG1lYXN1cmUgc2NvcmluZyB0eXBlcyB0byBiZSByZXByZXNlbnRlZC5cclxuICAgKi9cclxuICBzY29yaW5nPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgaXMgYSBjb21wb3NpdGUgbWVhc3VyZSwgdGhlIHNjb3JpbmcgbWV0aG9kIHVzZWQgdG8gY29tYmluZSB0aGUgY29tcG9uZW50IG1lYXN1cmVzIHRvIGRldGVybWluZSB0aGUgY29tcG9zaXRlIHNjb3JlLlxyXG4gICAqL1xyXG4gIGNvbXBvc2l0ZVNjb3Jpbmc/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIG1lYXN1cmUgaXMgdXNlZCB0byBleGFtaW5lIGEgcHJvY2VzcywgYW4gb3V0Y29tZSBvdmVyIHRpbWUsIGEgcGF0aWVudC1yZXBvcnRlZCBvdXRjb21lLCBvciBhIHN0cnVjdHVyZSBtZWFzdXJlIHN1Y2ggYXMgdXRpbGl6YXRpb24uXHJcbiAgICovXHJcbiAgdHlwZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBEZXNjcmliZXMgdGhlIG1ldGhvZCBvZiBhZGp1c3RpbmcgZm9yIGNsaW5pY2FsIHNldmVyaXR5IGFuZCBjb25kaXRpb25zIHByZXNlbnQgYXQgdGhlIHN0YXJ0IG9mIGNhcmUgdGhhdCBjYW4gaW5mbHVlbmNlIHBhdGllbnQgb3V0Y29tZXMgZm9yIG1ha2luZyB2YWxpZCBjb21wYXJpc29ucyBvZiBvdXRjb21lIG1lYXN1cmVzIGFjcm9zcyBwcm92aWRlcnMuIEluZGljYXRlcyB3aGV0aGVyIGEgbWVhc3VyZSBpcyBzdWJqZWN0IHRvIHRoZSBzdGF0aXN0aWNhbCBwcm9jZXNzIGZvciByZWR1Y2luZywgcmVtb3ZpbmcsIG9yIGNsYXJpZnlpbmcgdGhlIGluZmx1ZW5jZXMgb2YgY29uZm91bmRpbmcgZmFjdG9ycyB0byBhbGxvdyBmb3IgbW9yZSB1c2VmdWwgY29tcGFyaXNvbnMuXHJcbiAgICovXHJcbiAgcmlza0FkanVzdG1lbnQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLnJpc2tBZGp1c3RtZW50XHJcbiAgICovXHJcbiAgX3Jpc2tBZGp1c3RtZW50PzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBtZWFzdXJlIHJhdGUgZm9yIGFuIG9yZ2FuaXphdGlvbiBvciBjbGluaWNpYW4gaXMgYmFzZWQgdXBvbiB0aGUgZW50aXRpZXPigJkgYWdncmVnYXRlIGRhdGEgYW5kIHN1bW1hcml6ZXMgdGhlIHBlcmZvcm1hbmNlIG9mIHRoZSBlbnRpdHkgb3ZlciBhIGdpdmVuIHRpbWUgcGVyaW9kIChlLmcuLCBtb250aGx5LCBxdWFydGVybHksIHllYXJseSkuIFRoZSBhZ2dyZWdhdGVkIGRhdGEgYXJlIGRlcml2ZWQgZnJvbSB0aGUgcmVzdWx0cyBvZiBhIHNwZWNpZmljIG1lYXN1cmUgYWxnb3JpdGhtIGFuZCwgaWYgYXBwcm9wcmlhdGUsIHRoZSBhcHBsaWNhdGlvbiBvZiBzcGVjaWZpYyByaXNrIGFkanVzdG1lbnQgbW9kZWxzLiAgQ2FuIGFsc28gYmUgdXNlZCB0byBkZXNjcmliZSBob3cgdG8gcmlzayBhZGp1c3QgdGhlIGRhdGEgYmFzZWQgb24gc3VwcGxlbWVudGFsIGRhdGEgZWxlbWVudHMgZGVzY3JpYmVkIGluIHRoZSBlTWVhc3VyZSAoZS5nLiwgcG5ldW1vbmlhIGhvc3BpdGFsIG1lYXN1cmVzIGFudGliaW90aWMgc2VsZWN0aW9uIGluIHRoZSBJQ1UgdmVyc3VzIG5vbi1JQ1UgYW5kIHRoZW4gdGhlIHJvbGwtdXAgb2YgdGhlIHR3bykuIFRoaXMgY291bGQgYmUgYXBwbGllZCB0byBhZ2dyZWdhdGVkIGNvaG9ydCBtZWFzdXJlIGRlZmluaXRpb25zIChlLmcuLCBDREMncyBhZ2dyZWdhdGUgcmVwb3J0aW5nIGZvciBUQiBhdCB0aGUgc3RhdGUgbGV2ZWwpLlxyXG4gICAqL1xyXG4gIHJhdGVBZ2dyZWdhdGlvbj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUucmF0ZUFnZ3JlZ2F0aW9uXHJcbiAgICovXHJcbiAgX3JhdGVBZ2dyZWdhdGlvbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBQcm92aWRlcyBhIHN1Y2NpbmN0IHN0YXRlbWVudCBvZiB0aGUgbmVlZCBmb3IgdGhlIG1lYXN1cmUuIFVzdWFsbHkgaW5jbHVkZXMgc3RhdGVtZW50cyBwZXJ0YWluaW5nIHRvIGltcG9ydGFuY2UgY3JpdGVyaW9uOiBpbXBhY3QsIGdhcCBpbiBjYXJlLCBhbmQgZXZpZGVuY2UuXHJcbiAgICovXHJcbiAgcmF0aW9uYWxlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVhc3VyZS5yYXRpb25hbGVcclxuICAgKi9cclxuICBfcmF0aW9uYWxlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGEgc3VtbWFyeSBvZiByZWxldmFudCBjbGluaWNhbCBndWlkZWxpbmVzIG9yIG90aGVyIGNsaW5pY2FsIHJlY29tbWVuZGF0aW9ucyBzdXBwb3J0aW5nIHRoZSBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIGNsaW5pY2FsUmVjb21tZW5kYXRpb25TdGF0ZW1lbnQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWFzdXJlLmNsaW5pY2FsUmVjb21tZW5kYXRpb25TdGF0ZW1lbnRcclxuICAgKi9cclxuICBfY2xpbmljYWxSZWNvbW1lbmRhdGlvblN0YXRlbWVudD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiBvbiB3aGV0aGVyIGFuIGluY3JlYXNlIG9yIGRlY3JlYXNlIGluIHNjb3JlIGlzIHRoZSBwcmVmZXJyZWQgcmVzdWx0IChlLmcuLCBhIGhpZ2hlciBzY29yZSBpbmRpY2F0ZXMgYmV0dGVyIHF1YWxpdHkgT1IgYSBsb3dlciBzY29yZSBpbmRpY2F0ZXMgYmV0dGVyIHF1YWxpdHkgT1IgcXVhbGl0eSBpcyB3aXRoaW4gYSByYW5nZSkuXHJcbiAgICovXHJcbiAgaW1wcm92ZW1lbnROb3RhdGlvbj86ICdkZWNyZWFzZSd8J2luY3JlYXNlJ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgYSBkZXNjcmlwdGlvbiBvZiBhbiBpbmRpdmlkdWFsIHRlcm0gdXNlZCB3aXRoaW4gdGhlIG1lYXN1cmUuXHJcbiAgICovXHJcbiAgZGVmaW5pdGlvbj86IChzdHJpbmd8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuZGVmaW5pdGlvblxyXG4gICAqL1xyXG4gIF9kZWZpbml0aW9uPzooZmhpci5GaGlyRWxlbWVudHxudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgZ3VpZGFuY2UgZm9yIHRoZSBtZWFzdXJlIGluY2x1ZGluZyBob3cgaXQgY2FuIGJlIHVzZWQgaW4gYSBjbGluaWNhbCBjb250ZXh0LCBhbmQgdGhlIGludGVudCBvZiB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBndWlkYW5jZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lYXN1cmUuZ3VpZGFuY2VcclxuICAgKi9cclxuICBfZ3VpZGFuY2U/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQSBncm91cCBvZiBwb3B1bGF0aW9uIGNyaXRlcmlhIGZvciB0aGUgbWVhc3VyZS5cclxuICAgKi9cclxuICBncm91cD86IChmaGlyLk1lYXN1cmVHcm91cHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgc3VwcGxlbWVudGFsIGRhdGEgYXJlIHJlcG9ydGVkIGFzIG9ic2VydmF0aW9ucyBmb3IgZWFjaCBwYXRpZW50IGFuZCBpbmNsdWRlZCBpbiB0aGUgZXZhbHVhdGVkUmVzb3VyY2VzIGJ1bmRsZS4gU2VlIHRoZSBNZWFzdXJlUmVwb3J0IHJlc291cmNlIG9yIHRoZSBRdWFsaXR5IFJlcG9ydGluZyB0b3BpYyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBzdXBwbGVtZW50YWxEYXRhPzogKGZoaXIuTWVhc3VyZVN1cHBsZW1lbnRhbERhdGF8bnVsbClbXXx1bmRlZmluZWQ7XHJcbn1cclxuIl19