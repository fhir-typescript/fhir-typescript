// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Subscription
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpckpzb24vU3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogU3Vic2NyaXB0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkNoYW5uZWwgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIFRoZSB0eXBlIG9mIGNoYW5uZWwgdG8gc2VuZCBub3RpZmljYXRpb25zIG9uLlxyXG4gICAqL1xyXG4gIHR5cGU6ICdlbWFpbCd8J21lc3NhZ2UnfCdyZXN0LWhvb2snfCdzbXMnfCd3ZWJzb2NrZXQnfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnR5cGVcclxuICAgKi9cclxuICBfdHlwZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBGb3IgcmVzdC1ob29rLCBhbmQgd2Vic29ja2V0LCB0aGUgZW5kLXBvaW50IG11c3QgYmUgYW4gaHR0cDogb3IgaHR0cHM6IFVSTDsgZm9yIGVtYWlsLCBhIG1haWx0bzogdXJsLCBmb3Igc21zLCBhIHRlbDogdXJsLCBhbmQgZm9yIG1lc3NhZ2UgdGhlIGVuZHBvaW50IGNhbiBiZSBpbiBhbnkgZm9ybSBvZiB1cmwgdGhlIHNlcnZlciB1bmRlcnN0YW5kcyAodXN1YWxseSwgaHR0cDogb3IgbWxscDopLiBUaGUgVVJJIGlzIGFsbG93ZWQgdG8gYmUgcmVsYXRpdmU7IGluIHdoaWNoIGNhc2UsIGl0IGlzIHJlbGF0aXZlIHRvIHRoZSBzZXJ2ZXIgZW5kLXBvaW50IChzaW5jZSB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSwgY2xpZW50cyBzaG91bGQgYXZvaWQgdXNpbmcgcmVsYXRpdmUgVVJJcykuXHJcbiAgICovXHJcbiAgZW5kcG9pbnQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC5lbmRwb2ludFxyXG4gICAqL1xyXG4gIF9lbmRwb2ludD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBTZW5kaW5nIHRoZSBwYXlsb2FkIGhhcyBvYnZpb3VzIHNlY3VyaXR5IGltcGxpY2F0aW9ucy4gVGhlIHNlcnZlciBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgdGhhdCB0aGUgY29udGVudCBpcyBhcHByb3ByaWF0ZWx5IHNlY3VyZWQuXHJcbiAgICovXHJcbiAgcGF5bG9hZD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jaGFubmVsLnBheWxvYWRcclxuICAgKi9cclxuICBfcGF5bG9hZD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBFeGFjdGx5IHdoYXQgdGhlc2UgbWVhbiBkZXBlbmQgb24gdGhlIGNoYW5uZWwgdHlwZS4gVGhleSBjYW4gY29udmV5IGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8gdGhlIHJlY2lwaWVudCBhbmQvb3IgbWVldCBzZWN1cml0eSByZXF1aXJlbWVudHM7IGZvciBleGFtcGxlLCBzdXBwb3J0IG9mIG11bHRpcGxlIGhlYWRlcnMgaW4gdGhlIG91dGdvaW5nIG5vdGlmaWNhdGlvbnMgZm9yIHJlc3QtaG9vayB0eXBlIHN1YnNjcmlwdGlvbnMuXHJcbiAgICovXHJcbiAgaGVhZGVyPzogc3RyaW5nW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uY2hhbm5lbC5oZWFkZXJcclxuICAgKi9cclxuICBfaGVhZGVyPzooZmhpci5GaGlyRWxlbWVudHxudWxsKVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN1YnNjcmlwdGlvbiByZXNvdXJjZSBpcyB1c2VkIHRvIGRlZmluZSBhIHB1c2gtYmFzZWQgc3Vic2NyaXB0aW9uIGZyb20gYSBzZXJ2ZXIgdG8gYW5vdGhlciBzeXN0ZW0uIE9uY2UgYSBzdWJzY3JpcHRpb24gaXMgcmVnaXN0ZXJlZCB3aXRoIHRoZSBzZXJ2ZXIsIHRoZSBzZXJ2ZXIgY2hlY2tzIGV2ZXJ5IHJlc291cmNlIHRoYXQgaXMgY3JlYXRlZCBvciB1cGRhdGVkLCBhbmQgaWYgdGhlIHJlc291cmNlIG1hdGNoZXMgdGhlIGdpdmVuIGNyaXRlcmlhLCBpdCBzZW5kcyBhIG1lc3NhZ2Ugb24gdGhlIGRlZmluZWQgXCJjaGFubmVsXCIgc28gdGhhdCBhbm90aGVyIHN5c3RlbSBjYW4gdGFrZSBhbiBhcHByb3ByaWF0ZSBhY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2UgeyBcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiU3Vic2NyaXB0aW9uXCI7XHJcbiAgLyoqXHJcbiAgICogQSBjbGllbnQgY2FuIG9ubHkgc3VibWl0IHN1YnNjcmlwdGlvbiByZXNvdXJjZXMgaW4gdGhlIHJlcXVlc3RlZCBvciBvZmYgc3RhdGUuIE9ubHkgdGhlIHNlcnZlciBjYW4gIG1vdmUgYSBzdWJzY3JpcHRpb24gZnJvbSByZXF1ZXN0ZWQgdG8gYWN0aXZlLCBhbmQgdGhlbiB0byBlcnJvci4gRWl0aGVyIHRoZSBzZXJ2ZXIgb3IgdGhlIGNsaWVudCBjYW4gdHVybiBhIHN1YnNjcmlwdGlvbiBvZmYuXHJcbiAgICogVGhpcyBlbGVtZW50IGlzIGxhYmVsZWQgYXMgYSBtb2RpZmllciBiZWNhdXNlIHRoZSBzdGF0dXMgY29udGFpbnMgY29kZXMgdGhhdCBtYXJrIHRoZSByZXNvdXJjZSBhcyBub3QgY3VycmVudGx5IHZhbGlkLlxyXG4gICAqL1xyXG4gIHN0YXR1czogJ2FjdGl2ZSd8J2Vycm9yJ3wnb2ZmJ3wncmVxdWVzdGVkJ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBDb250YWN0IGRldGFpbHMgZm9yIGEgaHVtYW4gdG8gY29udGFjdCBhYm91dCB0aGUgc3Vic2NyaXB0aW9uLiBUaGUgcHJpbWFyeSB1c2Ugb2YgdGhpcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3IgdHJvdWJsZXNob290aW5nLlxyXG4gICAqL1xyXG4gIGNvbnRhY3Q/OiBmaGlyLkNvbnRhY3RQb2ludFtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc2VydmVyIGlzIHBlcm1pdHRlZCB0byBkZXZpYXRlIGZyb20gdGhpcyB0aW1lIGJ1dCBzaG91bGQgb2JzZXJ2ZSBpdC5cclxuICAgKi9cclxuICBlbmQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uZW5kXHJcbiAgICovXHJcbiAgX2VuZD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIGRlc2NyaXB0aW9uIG9mIHdoeSB0aGlzIHN1YnNjcmlwdGlvbiBpcyBkZWZpbmVkLlxyXG4gICAqL1xyXG4gIHJlYXNvbjogc3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5yZWFzb25cclxuICAgKi9cclxuICBfcmVhc29uPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBydWxlcyBhcmUgc2VhcmNoIGNyaXRlcmlhICh3aXRob3V0IHRoZSBbYmFzZV0gcGFydCkuIExpa2UgQnVuZGxlLmVudHJ5LnJlcXVlc3QudXJsLCBpdCBoYXMgbm8gbGVhZGluZyBcIi9cIi5cclxuICAgKi9cclxuICBjcml0ZXJpYTogc3RyaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFN1YnNjcmlwdGlvbi5jcml0ZXJpYVxyXG4gICAqL1xyXG4gIF9jcml0ZXJpYT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIHJlY29yZCBvZiB0aGUgbGFzdCBlcnJvciB0aGF0IG9jY3VycmVkIHdoZW4gdGhlIHNlcnZlciBwcm9jZXNzZWQgYSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgZXJyb3I/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBTdWJzY3JpcHRpb24uZXJyb3JcclxuICAgKi9cclxuICBfZXJyb3I/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogRGV0YWlscyB3aGVyZSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgd2hlbiByZXNvdXJjZXMgYXJlIHJlY2VpdmVkIHRoYXQgbWVldCB0aGUgY3JpdGVyaWEuXHJcbiAgICovXHJcbiAgY2hhbm5lbDogZmhpci5TdWJzY3JpcHRpb25DaGFubmVsfG51bGw7XHJcbn1cclxuIl19