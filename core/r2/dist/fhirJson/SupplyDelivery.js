// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcGx5RGVsaXZlcnkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlySnNvbi9TdXBwbHlEZWxpdmVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFN1cHBseURlbGl2ZXJ5XHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogUmVjb3JkIG9mIGRlbGl2ZXJ5IG9mIHdoYXQgaXMgc3VwcGxpZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1cHBseURlbGl2ZXJ5IGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7IFxyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJTdXBwbHlEZWxpdmVyeVwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllciBhc3NpZ25lZCBieSB0aGUgZGlzcGVuc2luZyBmYWNpbGl0eSB3aGVuIHRoZSBpdGVtKHMpIGlzIGRpc3BlbnNlZC5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGUgc3BlY2lmeWluZyB0aGUgc3RhdGUgb2YgdGhlIGRpc3BlbnNlIGV2ZW50LlxyXG4gICAqL1xyXG4gIHN0YXR1cz86ICdhYmFuZG9uZWQnfCdjb21wbGV0ZWQnfCdpbi1wcm9ncmVzcyd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdXBwbHlEZWxpdmVyeS5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEEgbGluayB0byBhIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgcGVyc29uIHdob20gdGhlIGRlbGl2ZXJlZCBpdGVtIGlzIGZvci5cclxuICAgKi9cclxuICBwYXRpZW50PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgdHlwZSBvZiBkaXNwZW5zaW5nIGV2ZW50IHRoYXQgaXMgcGVyZm9ybWVkLiBFeGFtcGxlcyBpbmNsdWRlOiBUcmlhbCBGaWxsLCBDb21wbGV0aW9uIG9mIFRyaWFsLCBQYXJ0aWFsIEZpbGwsIEVtZXJnZW5jeSBGaWxsLCBTYW1wbGVzLCBldGMuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIHN1cHBseSB0aGF0IGhhcyBiZWVuIGRpc3BlbnNlZC4gSW5jbHVkZXMgdW5pdCBvZiBtZWFzdXJlLlxyXG4gICAqL1xyXG4gIHF1YW50aXR5PzogZmhpci5RdWFudGl0eXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcyB0aGUgbWVkaWNhdGlvbiwgc3Vic3RhbmNlIG9yIGRldmljZSBiZWluZyBkaXNwZW5zZWQuIFRoaXMgaXMgZWl0aGVyIGEgbGluayB0byBhIHJlc291cmNlIHJlcHJlc2VudGluZyB0aGUgZGV0YWlscyBvZiB0aGUgaXRlbSBvciBhIHNpbXBsZSBhdHRyaWJ1dGUgY2FycnlpbmcgYSBjb2RlIHRoYXQgaWRlbnRpZmllcyB0aGUgaXRlbSBmcm9tIGEga25vd24gbGlzdC5cclxuICAgKi9cclxuICBzdXBwbGllZEl0ZW0/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGluZGl2aWR1YWwgcmVzcG9uc2libGUgZm9yIGRpc3BlbnNpbmcgdGhlIG1lZGljYXRpb24sIHN1cHBsaWVyIG9yIGRldmljZS5cclxuICAgKi9cclxuICBzdXBwbGllcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB0aGUgZGlzcGVuc2UgZXZlbnQgb2NjdXJyZWQuXHJcbiAgICovXHJcbiAgd2hlblByZXBhcmVkPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0aW1lIHRoZSBkaXNwZW5zZWQgaXRlbSB3YXMgc2VudCBvciBoYW5kZWQgdG8gdGhlIHBhdGllbnQgKG9yIGFnZW50KS5cclxuICAgKi9cclxuICB0aW1lPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogU3VwcGx5RGVsaXZlcnkudGltZVxyXG4gICAqL1xyXG4gIF90aW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpY2F0aW9uIG9mIHRoZSBmYWNpbGl0eS9sb2NhdGlvbiB3aGVyZSB0aGUgU3VwcGx5IHdhcyBzaGlwcGVkIHRvLCBhcyBwYXJ0IG9mIHRoZSBkaXNwZW5zZSBldmVudC5cclxuICAgKi9cclxuICBkZXN0aW5hdGlvbj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwZXJzb24gd2hvIHBpY2tlZCB1cCB0aGUgU3VwcGx5LlxyXG4gICAqL1xyXG4gIHJlY2VpdmVyPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==