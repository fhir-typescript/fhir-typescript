// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyRequest
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJKc29uL1N1cHBseVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU3VwcGx5UmVxdWVzdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlySnNvbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFNwZWNpZmljIHBhcmFtZXRlcnMgZm9yIHRoZSBvcmRlcmVkIGl0ZW0uICBGb3IgZXhhbXBsZSwgdGhlIHNpemUgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdXBwbHlSZXF1ZXN0UGFyYW1ldGVyIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBBIGNvZGUgb3Igc3RyaW5nIHRoYXQgaWRlbnRpZmllcyB0aGUgZGV2aWNlIGRldGFpbCBiZWluZyBhc3NlcnRlZC5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhbmdlIG1lYW5zIGRldmljZSBzaG91bGQgaGF2ZSBhIHZhbHVlIHRoYXQgZmFsbHMgc29tZXdoZXJlIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxyXG4gICAqL1xyXG4gIHZhbHVlQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFJhbmdlIG1lYW5zIGRldmljZSBzaG91bGQgaGF2ZSBhIHZhbHVlIHRoYXQgZmFsbHMgc29tZXdoZXJlIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxyXG4gICAqL1xyXG4gIHZhbHVlUXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBSYW5nZSBtZWFucyBkZXZpY2Ugc2hvdWxkIGhhdmUgYSB2YWx1ZSB0aGF0IGZhbGxzIHNvbWV3aGVyZSB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cclxuICAgKi9cclxuICB2YWx1ZVJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFuZ2UgbWVhbnMgZGV2aWNlIHNob3VsZCBoYXZlIGEgdmFsdWUgdGhhdCBmYWxscyBzb21ld2hlcmUgd2l0aGluIHRoZSBzcGVjaWZpZWQgcmFuZ2UuXHJcbiAgICovXHJcbiAgdmFsdWVCb29sZWFuPzogYm9vbGVhbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1cHBseVJlcXVlc3QucGFyYW1ldGVyLnZhbHVlW3hdXHJcbiAgICovXHJcbiAgX3ZhbHVlQm9vbGVhbj86Zmhpci5GaGlyRWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcmVjb3JkIG9mIGEgcmVxdWVzdCBmb3IgYSBtZWRpY2F0aW9uLCBzdWJzdGFuY2Ugb3IgZGV2aWNlIHVzZWQgaW4gdGhlIGhlYWx0aGNhcmUgc2V0dGluZy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VwcGx5UmVxdWVzdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2UgeyBcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiU3VwcGx5UmVxdWVzdFwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGlkZW50aWZpZXIudHlwZSBlbGVtZW50IGlzIHVzZWQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGUgaWRlbnRpZmllcnMgYXNzaWduZWQgYnkgdGhlIHJlcXVlc3Rlci9wbGFjZXIgYW5kIHRoZSBwZXJmb3JtZXIvZmlsbGVyLlxyXG4gICAqL1xyXG4gIGlkZW50aWZpZXI/OiAoZmhpci5JZGVudGlmaWVyfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFN0YXR1cyBvZiB0aGUgc3VwcGx5IHJlcXVlc3QuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogJ2FjdGl2ZSd8J2NhbmNlbGxlZCd8J2NvbXBsZXRlZCd8J2RyYWZ0J3wnZW50ZXJlZC1pbi1lcnJvcid8J3N1c3BlbmRlZCd8J3Vua25vd24nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3VwcGx5UmVxdWVzdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IG9mIHN1cHBseSwgZS5nLiAgY2VudHJhbCwgbm9uLXN0b2NrLCBldGMuIFRoaXMgaXMgdXNlZCB0byBzdXBwb3J0IHdvcmsgZmxvd3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBzdXBwbHkgcHJvY2Vzcy5cclxuICAgKi9cclxuICBjYXRlZ29yeT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaG93IHF1aWNrbHkgdGhpcyBTdXBwbHlSZXF1ZXN0IHNob3VsZCBiZSBhZGRyZXNzZWQgd2l0aCByZXNwZWN0IHRvIG90aGVyIHJlcXVlc3RzLlxyXG4gICAqL1xyXG4gIHByaW9yaXR5PzogJ2FzYXAnfCdyb3V0aW5lJ3wnc3RhdCd8J3VyZ2VudCd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlSZXF1ZXN0LnByaW9yaXR5XHJcbiAgICovXHJcbiAgX3ByaW9yaXR5PzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCB0aGVyZSdzIGEgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcHJlc2NyaXB0aW9uIC0gYW4gaW5zdHJ1Y3Rpb24gdG8gdGFrZSBhIG1lZGljYXRpb24sIGFsb25nIHdpdGggYSAoc29tZXRpbWVzKSBpbXBsaWNpdCBzdXBwbHksIGFuZCBhbiBleHBsaWNpdCByZXF1ZXN0IHRvIHN1cHBseSwgd2l0aCBubyBleHBsaWNpdCBpbnN0cnVjdGlvbnMuXHJcbiAgICovXHJcbiAgaXRlbUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgdGhlcmUncyBhIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHByZXNjcmlwdGlvbiAtIGFuIGluc3RydWN0aW9uIHRvIHRha2UgYSBtZWRpY2F0aW9uLCBhbG9uZyB3aXRoIGEgKHNvbWV0aW1lcykgaW1wbGljaXQgc3VwcGx5LCBhbmQgYW4gZXhwbGljaXQgcmVxdWVzdCB0byBzdXBwbHksIHdpdGggbm8gZXhwbGljaXQgaW5zdHJ1Y3Rpb25zLlxyXG4gICAqL1xyXG4gIGl0ZW1SZWZlcmVuY2U/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIG9yZGVyZWQgb2YgdGhlIGluZGljYXRlZCBpdGVtLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5OiBmaGlyLlF1YW50aXR5fG51bGw7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWMgcGFyYW1ldGVycyBmb3IgdGhlIG9yZGVyZWQgaXRlbS4gIEZvciBleGFtcGxlLCB0aGUgc2l6ZSBvZiB0aGUgaW5kaWNhdGVkIGl0ZW0uXHJcbiAgICovXHJcbiAgcGFyYW1ldGVyPzogKGZoaXIuU3VwcGx5UmVxdWVzdFBhcmFtZXRlcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgb2NjdXJyZW5jZURhdGVUaW1lPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3VwcGx5UmVxdWVzdC5vY2N1cnJlbmNlW3hdXHJcbiAgICovXHJcbiAgX29jY3VycmVuY2VEYXRlVGltZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgb2NjdXJyZW5jZVBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHNob3VsZCBiZSBmdWxmaWxsZWQuXHJcbiAgICovXHJcbiAgb2NjdXJyZW5jZVRpbWluZz86IGZoaXIuVGltaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSByZXF1ZXN0IHdhcyBtYWRlLlxyXG4gICAqL1xyXG4gIGF1dGhvcmVkT24/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlSZXF1ZXN0LmF1dGhvcmVkT25cclxuICAgKi9cclxuICBfYXV0aG9yZWRPbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgZGV2aWNlLCBwcmFjdGl0aW9uZXIsIGV0Yy4gd2hvIGluaXRpYXRlZCB0aGUgcmVxdWVzdC5cclxuICAgKi9cclxuICByZXF1ZXN0ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hvIGlzIGludGVuZGVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXHJcbiAgICovXHJcbiAgc3VwcGxpZXI/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiB3aHkgdGhlIHN1cHBseSBpdGVtIHdhcyByZXF1ZXN0ZWQuXHJcbiAgICovXHJcbiAgcmVhc29uQ29kZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHdoeSB0aGUgc3VwcGx5IGl0ZW0gd2FzIHJlcXVlc3RlZC5cclxuICAgKi9cclxuICByZWFzb25SZWZlcmVuY2U/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHN1cHBseSBpcyBleHBlY3RlZCB0byBjb21lIGZyb20uXHJcbiAgICovXHJcbiAgZGVsaXZlckZyb20/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogV2hlcmUgdGhlIHN1cHBseSBpcyBkZXN0aW5lZCB0byBnby5cclxuICAgKi9cclxuICBkZWxpdmVyVG8/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbn1cclxuIl19