// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: MedicationStatement
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWNhdGlvblN0YXRlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJKc29uL01lZGljYXRpb25TdGF0ZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBNZWRpY2F0aW9uU3RhdGVtZW50XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQSByZWNvcmQgb2YgYSBtZWRpY2F0aW9uIHRoYXQgaXMgYmVpbmcgY29uc3VtZWQgYnkgYSBwYXRpZW50LiAgIEEgTWVkaWNhdGlvblN0YXRlbWVudCBtYXkgaW5kaWNhdGUgdGhhdCB0aGUgcGF0aWVudCBtYXkgYmUgdGFraW5nIHRoZSBtZWRpY2F0aW9uIG5vdywgb3IgaGFzIHRha2VuIHRoZSBtZWRpY2F0aW9uIGluIHRoZSBwYXN0IG9yIHdpbGwgYmUgdGFraW5nIHRoZSBtZWRpY2F0aW9uIGluIHRoZSBmdXR1cmUuICBUaGUgc291cmNlIG9mIHRoaXMgaW5mb3JtYXRpb24gY2FuIGJlIHRoZSBwYXRpZW50LCBzaWduaWZpY2FudCBvdGhlciAoc3VjaCBhcyBhIGZhbWlseSBtZW1iZXIgb3Igc3BvdXNlKSwgb3IgYSBjbGluaWNpYW4uICBBIGNvbW1vbiBzY2VuYXJpbyB3aGVyZSB0aGlzIGluZm9ybWF0aW9uIGlzIGNhcHR1cmVkIGlzIGR1cmluZyB0aGUgaGlzdG9yeSB0YWtpbmcgcHJvY2VzcyBkdXJpbmcgYSBwYXRpZW50IHZpc2l0IG9yIHN0YXkuICAgVGhlIG1lZGljYXRpb24gaW5mb3JtYXRpb24gbWF5IGNvbWUgZnJvbSBzb3VyY2VzIHN1Y2ggYXMgdGhlIHBhdGllbnQncyBtZW1vcnksIGZyb20gYSBwcmVzY3JpcHRpb24gYm90dGxlLCAgb3IgZnJvbSBhIGxpc3Qgb2YgbWVkaWNhdGlvbnMgdGhlIHBhdGllbnQsIGNsaW5pY2lhbiBvciBvdGhlciBwYXJ0eSBtYWludGFpbnMgXHJcbiAqIFRoZSBwcmltYXJ5IGRpZmZlcmVuY2UgYmV0d2VlbiBhIG1lZGljYXRpb24gc3RhdGVtZW50IGFuZCBhIG1lZGljYXRpb24gYWRtaW5pc3RyYXRpb24gaXMgdGhhdCB0aGUgbWVkaWNhdGlvbiBhZG1pbmlzdHJhdGlvbiBoYXMgY29tcGxldGUgYWRtaW5pc3RyYXRpb24gaW5mb3JtYXRpb24gYW5kIGlzIGJhc2VkIG9uIGFjdHVhbCBhZG1pbmlzdHJhdGlvbiBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwZXJzb24gd2hvIGFkbWluaXN0ZXJlZCB0aGUgbWVkaWNhdGlvbi4gIEEgbWVkaWNhdGlvbiBzdGF0ZW1lbnQgaXMgb2Z0ZW4sIGlmIG5vdCBhbHdheXMsIGxlc3Mgc3BlY2lmaWMuICBUaGVyZSBpcyBubyByZXF1aXJlZCBkYXRlL3RpbWUgd2hlbiB0aGUgbWVkaWNhdGlvbiB3YXMgYWRtaW5pc3RlcmVkLCBpbiBmYWN0IHdlIG9ubHkga25vdyB0aGF0IGEgc291cmNlIGhhcyByZXBvcnRlZCB0aGUgcGF0aWVudCBpcyB0YWtpbmcgdGhpcyBtZWRpY2F0aW9uLCB3aGVyZSBkZXRhaWxzIHN1Y2ggYXMgdGltZSwgcXVhbnRpdHksIG9yIHJhdGUgb3IgZXZlbiBtZWRpY2F0aW9uIHByb2R1Y3QgbWF5IGJlIGluY29tcGxldGUgb3IgbWlzc2luZyBvciBsZXNzIHByZWNpc2UuICBBcyBzdGF0ZWQgZWFybGllciwgdGhlIG1lZGljYXRpb24gc3RhdGVtZW50IGluZm9ybWF0aW9uIG1heSBjb21lIGZyb20gdGhlIHBhdGllbnQncyBtZW1vcnksIGZyb20gYSBwcmVzY3JpcHRpb24gYm90dGxlIG9yIGZyb20gYSBsaXN0IG9mIG1lZGljYXRpb25zIHRoZSBwYXRpZW50LCBjbGluaWNpYW4gb3Igb3RoZXIgcGFydHkgbWFpbnRhaW5zLiAgTWVkaWNhdGlvbiBhZG1pbmlzdHJhdGlvbiBpcyBtb3JlIGZvcm1hbCBhbmQgaXMgbm90IG1pc3NpbmcgZGV0YWlsZWQgaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGljYXRpb25TdGF0ZW1lbnQgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHsgXHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIk1lZGljYXRpb25TdGF0ZW1lbnRcInxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVybmFsIGlkZW50aWZpZXIgLSBGSElSIHdpbGwgZ2VuZXJhdGUgaXRzIG93biBpbnRlcm5hbCBpZGVudGlmaWVycyAocHJvYmFibHkgVVJMcykgd2hpY2ggZG8gbm90IG5lZWQgdG8gYmUgZXhwbGljaXRseSBtYW5hZ2VkIGJ5IHRoZSByZXNvdXJjZS4gIFRoZSBpZGVudGlmaWVyIGhlcmUgaXMgb25lIHRoYXQgd291bGQgYmUgdXNlZCBieSBhbm90aGVyIG5vbi1GSElSIHN5c3RlbSAtIGZvciBleGFtcGxlIGFuIGF1dG9tYXRlZCBtZWRpY2F0aW9uIHB1bXAgd291bGQgcHJvdmlkZSBhIHJlY29yZCBlYWNoIHRpbWUgaXQgb3BlcmF0ZWQ7IGFuIGFkbWluaXN0cmF0aW9uIHdoaWxlIHRoZSBwYXRpZW50IHdhcyBvZmYgdGhlIHdhcmQgbWlnaHQgYmUgbWFkZSB3aXRoIGEgZGlmZmVyZW50IHN5c3RlbSBhbmQgZW50ZXJlZCBhZnRlciB0aGUgZXZlbnQuICBQYXJ0aWN1bGFybHkgaW1wb3J0YW50IGlmIHRoZXNlIHJlY29yZHMgaGF2ZSB0byBiZSB1cGRhdGVkLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiAoZmhpci5JZGVudGlmaWVyfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgcGxhbiwgcHJvcG9zYWwgb3Igb3JkZXIgdGhhdCBpcyBmdWxmaWxsZWQgaW4gd2hvbGUgb3IgaW4gcGFydCBieSB0aGlzIGV2ZW50LlxyXG4gICAqL1xyXG4gIGJhc2VkT24/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQSBsYXJnZXIgZXZlbnQgb2Ygd2hpY2ggdGhpcyBwYXJ0aWN1bGFyIGV2ZW50IGlzIGEgY29tcG9uZW50IG9yIHN0ZXAuXHJcbiAgICovXHJcbiAgcGFydE9mPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBlbmNvdW50ZXIgb3IgZXBpc29kZSBvZiBjYXJlIHRoYXQgZXN0YWJsaXNoZXMgdGhlIGNvbnRleHQgZm9yIHRoaXMgTWVkaWNhdGlvblN0YXRlbWVudC5cclxuICAgKi9cclxuICBjb250ZXh0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1lZGljYXRpb25TdGF0ZW1lbnQgaXMgYSBzdGF0ZW1lbnQgYXQgYSBwb2ludCBpbiB0aW1lLiAgVGhlIHN0YXR1cyBpcyBvbmx5IHJlcHJlc2VudGF0aXZlIGF0IHRoZSBwb2ludCB3aGVuIGl0IHdhcyBhc3NlcnRlZC4gIFRoZSB2YWx1ZSBzZXQgZm9yIE1lZGljYXRpb25TdGF0ZW1lbnQuc3RhdHVzIGNvbnRhaW5zIGNvZGVzIHRoYXQgYXNzZXJ0IHRoZSBzdGF0dXMgb2YgdGhlIHVzZSBvZiB0aGUgbWVkaWNhdGlvbiBieSB0aGUgcGF0aWVudCAoZm9yIGV4YW1wbGUsIHN0b3BwZWQgb3Igb24gaG9sZCkgYXMgd2VsbCBhcyBjb2RlcyB0aGF0IGFzc2VydCB0aGUgc3RhdHVzIG9mIHRoZSBtZWRpY2F0aW9uIHN0YXRlbWVudCBpdHNlbGYgKGZvciBleGFtcGxlLCBlbnRlcmVkIGluIGVycm9yKS5cclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYWN0aXZlJ3wnY29tcGxldGVkJ3wnZW50ZXJlZC1pbi1lcnJvcid8J2ludGVuZGVkJ3wnb24taG9sZCd8J3N0b3BwZWQnfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lZGljYXRpb25TdGF0ZW1lbnQuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hlcmUgdHlwZSBvZiBtZWRpY2F0aW9uIHN0YXRlbWVudCBhbmQgd2hlcmUgdGhlIG1lZGljYXRpb24gaXMgZXhwZWN0ZWQgdG8gYmUgY29uc3VtZWQgb3IgYWRtaW5pc3RlcmVkLlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElmIG9ubHkgYSBjb2RlIGlzIHNwZWNpZmllZCwgdGhlbiBpdCBuZWVkcyB0byBiZSBhIGNvZGUgZm9yIGEgc3BlY2lmaWMgcHJvZHVjdC4gSWYgbW9yZSBpbmZvcm1hdGlvbiBpcyByZXF1aXJlZCwgdGhlbiB0aGUgdXNlIG9mIHRoZSBtZWRpY2F0aW9uIHJlc291cmNlIGlzIHJlY29tbWVuZGVkLsKgIEZvciBleGFtcGxlIGlmwqB5b3UgcmVxdWlyZcKgZm9ybSBvcsKgbG90IG51bWJlciwgdGhlbiB5b3UgbXVzdMKgcmVmZXJlbmNlIHRoZSBNZWRpY2F0aW9uIHJlc291cmNlLsKgLlxyXG4gICAqL1xyXG4gIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQ/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgb25seSBhIGNvZGUgaXMgc3BlY2lmaWVkLCB0aGVuIGl0IG5lZWRzIHRvIGJlIGEgY29kZSBmb3IgYSBzcGVjaWZpYyBwcm9kdWN0LiBJZiBtb3JlIGluZm9ybWF0aW9uIGlzIHJlcXVpcmVkLCB0aGVuIHRoZSB1c2Ugb2YgdGhlIG1lZGljYXRpb24gcmVzb3VyY2UgaXMgcmVjb21tZW5kZWQuwqAgRm9yIGV4YW1wbGUgaWbCoHlvdSByZXF1aXJlwqBmb3JtIG9ywqBsb3QgbnVtYmVyLCB0aGVuIHlvdSBtdXN0wqByZWZlcmVuY2UgdGhlIE1lZGljYXRpb24gcmVzb3VyY2UuwqAuXHJcbiAgICovXHJcbiAgbWVkaWNhdGlvblJlZmVyZW5jZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZSByZWZsZWN0cyB0aGUgcGVyaW9kIG92ZXIgd2hpY2ggdGhlIHBhdGllbnQgY29uc3VtZWQgdGhlIG1lZGljYXRpb24gYW5kIGlzIGV4cGVjdGVkIHRvIGJlIHBvcHVsYXRlZCBvbiB0aGUgbWFqb3JpdHkgb2YgTWVkaWNhdGlvbiBTdGF0ZW1lbnRzLiBJZiB0aGUgbWVkaWNhdGlvbiBpcyBzdGlsbCBiZWluZyB0YWtlbiBhdCB0aGUgdGltZSB0aGUgc3RhdGVtZW50IGlzIHJlY29yZGVkLCB0aGUgXCJlbmRcIiBkYXRlIHdpbGwgYmUgb21pdHRlZC5cclxuICAgKi9cclxuICBlZmZlY3RpdmVEYXRlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lZGljYXRpb25TdGF0ZW1lbnQuZWZmZWN0aXZlW3hdXHJcbiAgICovXHJcbiAgX2VmZmVjdGl2ZURhdGVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIHJlZmxlY3RzIHRoZSBwZXJpb2Qgb3ZlciB3aGljaCB0aGUgcGF0aWVudCBjb25zdW1lZCB0aGUgbWVkaWNhdGlvbiBhbmQgaXMgZXhwZWN0ZWQgdG8gYmUgcG9wdWxhdGVkIG9uIHRoZSBtYWpvcml0eSBvZiBNZWRpY2F0aW9uIFN0YXRlbWVudHMuIElmIHRoZSBtZWRpY2F0aW9uIGlzIHN0aWxsIGJlaW5nIHRha2VuIGF0IHRoZSB0aW1lIHRoZSBzdGF0ZW1lbnQgaXMgcmVjb3JkZWQsIHRoZSBcImVuZFwiIGRhdGUgd2lsbCBiZSBvbWl0dGVkLlxyXG4gICAqL1xyXG4gIGVmZmVjdGl2ZVBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB3aGVuIHRoZSBtZWRpY2F0aW9uIHN0YXRlbWVudCB3YXMgYXNzZXJ0ZWQgYnkgdGhlIGluZm9ybWF0aW9uIHNvdXJjZS5cclxuICAgKi9cclxuICBkYXRlQXNzZXJ0ZWQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZWRpY2F0aW9uU3RhdGVtZW50LmRhdGVBc3NlcnRlZFxyXG4gICAqL1xyXG4gIF9kYXRlQXNzZXJ0ZWQ/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcnNvbiBvciBvcmdhbml6YXRpb24gdGhhdCBwcm92aWRlZCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHRha2luZyBvZiB0aGlzIG1lZGljYXRpb24uIE5vdGU6IFVzZSBkZXJpdmVkRnJvbSB3aGVuIGEgTWVkaWNhdGlvblN0YXRlbWVudCBpcyBkZXJpdmVkIGZyb20gb3RoZXIgcmVzb3VyY2VzLCBlLmcgQ2xhaW0gb3IgTWVkaWNhdGlvblJlcXVlc3QuXHJcbiAgICovXHJcbiAgaW5mb3JtYXRpb25Tb3VyY2U/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHBlcnNvbiwgYW5pbWFsIG9yIGdyb3VwIHdobyBpcy93YXMgdGFraW5nIHRoZSBtZWRpY2F0aW9uLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogTGlrZWx5IHJlZmVyZW5jZXMgd291bGQgYmUgdG8gTWVkaWNhdGlvblJlcXVlc3QsIE1lZGljYXRpb25EaXNwZW5zZSwgQ2xhaW0sIE9ic2VydmF0aW9uIG9yIFF1ZXN0aW9ubmFpcmVBbnN3ZXJzLiAgVGhlIG1vc3QgY29tbW9uIHVzZSBjYXNlcyBmb3IgZGVyaXZpbmcgYSBNZWRpY2F0aW9uU3RhdGVtZW50IGNvbWVzIGZyb20gY3JlYXRpbmcgYSBNZWRpY2F0aW9uU3RhdGVtZW50IGZyb20gYSBNZWRpY2F0aW9uUmVxdWVzdCBvciBmcm9tIGEgbGFiIG9ic2VydmF0aW9uIG9yIGEgY2xhaW0uICBpdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgYW1vdW50IG9mIGluZm9ybWF0aW9uIHRoYXQgaXMgYXZhaWxhYmxlIHZhcmllcyBmcm9tIHRoZSB0eXBlIHJlc291cmNlIHRoYXQgeW91IGRlcml2ZSB0aGUgTWVkaWNhdGlvblN0YXRlbWVudCBmcm9tLlxyXG4gICAqL1xyXG4gIGRlcml2ZWRGcm9tPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBpcyBsYWJlbGVkIGFzIGEgbW9kaWZpZXIgYmVjYXVzZSBpdCBpbmRpY2F0ZXMgdGhhdCB0aGUgbWVkaWNhdGlvbiB3YXMgbm90IHRha2VuLlxyXG4gICAqL1xyXG4gIHRha2VuOiAnbid8J25hJ3wndW5rJ3wneSd8bnVsbDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVkaWNhdGlvblN0YXRlbWVudC50YWtlblxyXG4gICAqL1xyXG4gIF90YWtlbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgaW5kaWNhdGluZyB3aHkgdGhlIG1lZGljYXRpb24gd2FzIG5vdCB0YWtlbi5cclxuICAgKi9cclxuICByZWFzb25Ob3RUYWtlbj86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGNvdWxkIGJlIGEgZGlhZ25vc2lzIGNvZGUuIElmIGEgZnVsbCBjb25kaXRpb24gcmVjb3JkIGV4aXN0cyBvciBhZGRpdGlvbmFsIGRldGFpbCBpcyBuZWVkZWQsIHVzZSByZWFzb25Gb3JVc2VSZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIGEgcmVmZXJlbmNlIHRvIGEgY29uZGl0aW9uIHRoYXQgaXMgdGhlIHJlYXNvbiB3aHkgdGhlIG1lZGljYXRpb24gaXMgYmVpbmcvd2FzIHRha2VuLiAgSWYgb25seSBhIGNvZGUgZXhpc3RzLCB1c2UgcmVhc29uRm9yVXNlQ29kZS5cclxuICAgKi9cclxuICByZWFzb25SZWZlcmVuY2U/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZXMgZXh0cmEgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG1lZGljYXRpb24gc3RhdGVtZW50IHRoYXQgaXMgbm90IGNvbnZleWVkIGJ5IHRoZSBvdGhlciBhdHRyaWJ1dGVzLlxyXG4gICAqL1xyXG4gIG5vdGU/OiAoZmhpci5Bbm5vdGF0aW9ufG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlcyBpbmNsdWRlZCBpbiB0aGUgZG9zYWdlIG9uIGEgTWVkaWNhdGlvbiBTdGF0ZW1lbnQgcmVmbGVjdCB0aGUgZGF0ZXMgZm9yIGEgZ2l2ZW4gZG9zZS4gIEZvciBleGFtcGxlLCBcImZyb20gTm92ZW1iZXIgMSwgMjAxNiB0byBOb3ZlbWJlciAzLCAyMDE2LCB0YWtlIG9uZSB0YWJsZXQgZGFpbHkgYW5kIGZyb20gTm92ZW1iZXIgNCwgMjAxNiB0byBOb3ZlbWJlciA3LCAyMDE2LCB0YWtlIHR3byB0YWJsZXRzIGRhaWx5LlwiICBJdCBpcyBleHBlY3RlZCB0aGF0IHRoaXMgc3BlY2lmaWNpdHkgbWF5IG9ubHkgYmUgcG9wdWxhdGVkIHdoZXJlIHRoZSBwYXRpZW50IGJyaW5ncyBpbiB0aGVpciBsYWJlbGVkIGNvbnRhaW5lciBvciB3aGVyZSB0aGUgTWVkaWNhdGlvbiBTdGF0ZW1lbnQgaXMgZGVyaXZlZCBmcm9tIGEgTWVkaWNhdGlvblJlcXVlc3QuXHJcbiAgICovXHJcbiAgZG9zYWdlPzogKGZoaXIuRG9zYWdlfG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==