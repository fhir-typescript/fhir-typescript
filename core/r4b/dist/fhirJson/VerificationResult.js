// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: VerificationResult
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZpY2F0aW9uUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpckpzb24vVmVyaWZpY2F0aW9uUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IFZlcmlmaWNhdGlvblJlc3VsdFxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlySnNvbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBwcmltYXJ5IHNvdXJjZShzKSBpbnZvbHZlZCBpbiB2YWxpZGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWZXJpZmljYXRpb25SZXN1bHRQcmltYXJ5U291cmNlIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gdGhlIHByaW1hcnkgc291cmNlLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUeXBlIG9mIHByaW1hcnkgc291cmNlIChMaWNlbnNlIEJvYXJkOyBQcmltYXJ5IEVkdWNhdGlvbjsgQ29udGludWluZyBFZHVjYXRpb247IFBvc3RhbCBTZXJ2aWNlOyBSZWxhdGlvbnNoaXAgb3duZXI7IFJlZ2lzdHJhdGlvbiBBdXRob3JpdHk7IGxlZ2FsIHNvdXJjZTsgaXNzdWluZyBzb3VyY2U7IGF1dGhvcml0YXRpdmUgc291cmNlKS5cclxuICAgKi9cclxuICB0eXBlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCBmb3IgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBwcmltYXJ5IHNvdXJjZSAobWFudWFsOyBBUEk7IFB1c2gpLlxyXG4gICAqL1xyXG4gIGNvbW11bmljYXRpb25NZXRob2Q/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3RhdHVzIG9mIHRoZSB2YWxpZGF0aW9uIG9mIHRoZSB0YXJnZXQgYWdhaW5zdCB0aGUgcHJpbWFyeSBzb3VyY2UgKHN1Y2Nlc3NmdWw7IGZhaWxlZDsgdW5rbm93bikuXHJcbiAgICovXHJcbiAgdmFsaWRhdGlvblN0YXR1cz86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSB0YXJnZXQgd2FzIHZhbGlkYXRlZCBhZ2FpbnN0IHRoZSBwcmltYXJ5IHNvdXJjZS5cclxuICAgKi9cclxuICB2YWxpZGF0aW9uRGF0ZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFZlcmlmaWNhdGlvblJlc3VsdC5wcmltYXJ5U291cmNlLnZhbGlkYXRpb25EYXRlXHJcbiAgICovXHJcbiAgX3ZhbGlkYXRpb25EYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFiaWxpdHkgb2YgdGhlIHByaW1hcnkgc291cmNlIHRvIHB1c2ggdXBkYXRlcy9hbGVydHMgKHllczsgbm87IHVuZGV0ZXJtaW5lZCkuXHJcbiAgICovXHJcbiAgY2FuUHVzaFVwZGF0ZXM/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVHlwZSBvZiBhbGVydHMvdXBkYXRlcyB0aGUgcHJpbWFyeSBzb3VyY2UgY2FuIHNlbmQgKHNwZWNpZmljIHJlcXVlc3RlZCBjaGFuZ2VzOyBhbnkgY2hhbmdlczsgYXMgZGVmaW5lZCBieSBzb3VyY2UpLlxyXG4gICAqL1xyXG4gIHB1c2hUeXBlQXZhaWxhYmxlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGVudGl0eSBhdHRlc3RpbmcgdG8gaW5mb3JtYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmaWNhdGlvblJlc3VsdEF0dGVzdGF0aW9uIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBUaGUgaW5kaXZpZHVhbCBvciBvcmdhbml6YXRpb24gYXR0ZXN0aW5nIHRvIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIHdobz86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVuIHRoZSB3aG8gaXMgYXNzZXJ0aW5nIG9uIGJlaGFsZiBvZiBhbm90aGVyIChvcmdhbml6YXRpb24gb3IgaW5kaXZpZHVhbCkuXHJcbiAgICovXHJcbiAgb25CZWhhbGZPZj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbWV0aG9kIGJ5IHdoaWNoIGF0dGVzdGVkIGluZm9ybWF0aW9uIHdhcyBzdWJtaXR0ZWQvcmV0cmlldmVkIChtYW51YWw7IEFQSTsgUHVzaCkuXHJcbiAgICovXHJcbiAgY29tbXVuaWNhdGlvbk1ldGhvZD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGUgaW5mb3JtYXRpb24gd2FzIGF0dGVzdGVkIHRvLlxyXG4gICAqL1xyXG4gIGRhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBWZXJpZmljYXRpb25SZXN1bHQuYXR0ZXN0YXRpb24uZGF0ZVxyXG4gICAqL1xyXG4gIF9kYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEEgZGlnaXRhbCBpZGVudGl0eSBjZXJ0aWZpY2F0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGF0dGVzdGF0aW9uIHNvdXJjZS5cclxuICAgKi9cclxuICBzb3VyY2VJZGVudGl0eUNlcnRpZmljYXRlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVmVyaWZpY2F0aW9uUmVzdWx0LmF0dGVzdGF0aW9uLnNvdXJjZUlkZW50aXR5Q2VydGlmaWNhdGVcclxuICAgKi9cclxuICBfc291cmNlSWRlbnRpdHlDZXJ0aWZpY2F0ZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBIGRpZ2l0YWwgaWRlbnRpdHkgY2VydGlmaWNhdGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBwcm94eSBlbnRpdHkgc3VibWl0dGluZyBhdHRlc3RlZCBpbmZvcm1hdGlvbiBvbiBiZWhhbGYgb2YgdGhlIGF0dGVzdGF0aW9uIHNvdXJjZS5cclxuICAgKi9cclxuICBwcm94eUlkZW50aXR5Q2VydGlmaWNhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBWZXJpZmljYXRpb25SZXN1bHQuYXR0ZXN0YXRpb24ucHJveHlJZGVudGl0eUNlcnRpZmljYXRlXHJcbiAgICovXHJcbiAgX3Byb3h5SWRlbnRpdHlDZXJ0aWZpY2F0ZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBTaWduZWQgYXNzZXJ0aW9uIGJ5IHRoZSBwcm94eSBlbnRpdHkgaW5kaWNhdGluZyB0aGF0IHRoZXkgaGF2ZSB0aGUgcmlnaHQgdG8gc3VibWl0IGF0dGVzdGVkIGluZm9ybWF0aW9uIG9uIGJlaGFsZiBvZiB0aGUgYXR0ZXN0YXRpb24gc291cmNlLlxyXG4gICAqL1xyXG4gIHByb3h5U2lnbmF0dXJlPzogZmhpci5TaWduYXR1cmV8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNpZ25lZCBhc3NlcnRpb24gYnkgdGhlIGF0dGVzdGF0aW9uIHNvdXJjZSB0aGF0IHRoZXkgaGF2ZSBhdHRlc3RlZCB0byB0aGUgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgc291cmNlU2lnbmF0dXJlPzogZmhpci5TaWduYXR1cmV8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5mb3JtYXRpb24gYWJvdXQgdGhlIGVudGl0eSB2YWxpZGF0aW5nIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWZXJpZmljYXRpb25SZXN1bHRWYWxpZGF0b3IgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIFJlZmVyZW5jZSB0byB0aGUgb3JnYW5pemF0aW9uIHZhbGlkYXRpbmcgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgb3JnYW5pemF0aW9uOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgZGlnaXRhbCBpZGVudGl0eSBjZXJ0aWZpY2F0ZSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbGlkYXRvci5cclxuICAgKi9cclxuICBpZGVudGl0eUNlcnRpZmljYXRlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVmVyaWZpY2F0aW9uUmVzdWx0LnZhbGlkYXRvci5pZGVudGl0eUNlcnRpZmljYXRlXHJcbiAgICovXHJcbiAgX2lkZW50aXR5Q2VydGlmaWNhdGU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogU2lnbmVkIGFzc2VydGlvbiBieSB0aGUgdmFsaWRhdG9yIHRoYXQgdGhleSBoYXZlIHZhbGlkYXRlZCB0aGUgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgYXR0ZXN0YXRpb25TaWduYXR1cmU/OiBmaGlyLlNpZ25hdHVyZXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgdmFsaWRhdGlvbiByZXF1aXJlbWVudHMsIHNvdXJjZShzKSwgc3RhdHVzIGFuZCBkYXRlcyBmb3Igb25lIG9yIG1vcmUgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFZlcmlmaWNhdGlvblJlc3VsdCBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2UgeyBcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiVmVyaWZpY2F0aW9uUmVzdWx0XCJ8bnVsbDtcclxuICAvKipcclxuICAgKiBBIHJlc291cmNlIHRoYXQgd2FzIHZhbGlkYXRlZC5cclxuICAgKi9cclxuICB0YXJnZXQ/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZoaXJwYXRoIGxvY2F0aW9uKHMpIHdpdGhpbiB0aGUgcmVzb3VyY2UgdGhhdCB3YXMgdmFsaWRhdGVkLlxyXG4gICAqL1xyXG4gIHRhcmdldExvY2F0aW9uPzogKHN0cmluZ3xudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVmVyaWZpY2F0aW9uUmVzdWx0LnRhcmdldExvY2F0aW9uXHJcbiAgICovXHJcbiAgX3RhcmdldExvY2F0aW9uPzooZmhpci5GaGlyRWxlbWVudHxudWxsKVtdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmcmVxdWVuY3kgd2l0aCB3aGljaCB0aGUgdGFyZ2V0IG11c3QgYmUgdmFsaWRhdGVkIChub25lOyBpbml0aWFsOyBwZXJpb2RpYykuXHJcbiAgICovXHJcbiAgbmVlZD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFsaWRhdGlvbiBzdGF0dXMgb2YgdGhlIHRhcmdldCAoYXR0ZXN0ZWQ7IHZhbGlkYXRlZDsgaW4gcHJvY2VzczsgcmVxdWlyZXMgcmV2YWxpZGF0aW9uOyB2YWxpZGF0aW9uIGZhaWxlZDsgcmV2YWxpZGF0aW9uIGZhaWxlZCkuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYXR0ZXN0ZWQnfCdpbi1wcm9jZXNzJ3wncmVxLXJldmFsaWQnfCdyZXZhbC1mYWlsJ3wndmFsLWZhaWwnfCd2YWxpZGF0ZWQnfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IFZlcmlmaWNhdGlvblJlc3VsdC5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIHZhbGlkYXRpb24gc3RhdHVzIHdhcyB1cGRhdGVkLlxyXG4gICAqL1xyXG4gIHN0YXR1c0RhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBWZXJpZmljYXRpb25SZXN1bHQuc3RhdHVzRGF0ZVxyXG4gICAqL1xyXG4gIF9zdGF0dXNEYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFdoYXQgdGhlIHRhcmdldCBpcyB2YWxpZGF0ZWQgYWdhaW5zdCAobm90aGluZzsgcHJpbWFyeSBzb3VyY2U7IG11bHRpcGxlIHNvdXJjZXMpLlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25UeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwcmltYXJ5IHByb2Nlc3MgYnkgd2hpY2ggdGhlIHRhcmdldCBpcyB2YWxpZGF0ZWQgKGVkaXQgY2hlY2s7IHZhbHVlIHNldDsgcHJpbWFyeSBzb3VyY2U7IG11bHRpcGxlIHNvdXJjZXM7IHN0YW5kYWxvbmU7IGluIGNvbnRleHQpLlxyXG4gICAqL1xyXG4gIHZhbGlkYXRpb25Qcm9jZXNzPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZyZXF1ZW5jeSBvZiByZXZhbGlkYXRpb24uXHJcbiAgICovXHJcbiAgZnJlcXVlbmN5PzogZmhpci5UaW1pbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlL3RpbWUgdmFsaWRhdGlvbiB3YXMgbGFzdCBjb21wbGV0ZWQgKGluY2x1ZGluZyBmYWlsZWQgdmFsaWRhdGlvbnMpLlxyXG4gICAqL1xyXG4gIGxhc3RQZXJmb3JtZWQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBWZXJpZmljYXRpb25SZXN1bHQubGFzdFBlcmZvcm1lZFxyXG4gICAqL1xyXG4gIF9sYXN0UGVyZm9ybWVkPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGFyZ2V0IGlzIG5leHQgdmFsaWRhdGVkLCBpZiBhcHByb3ByaWF0ZS5cclxuICAgKi9cclxuICBuZXh0U2NoZWR1bGVkPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogVmVyaWZpY2F0aW9uUmVzdWx0Lm5leHRTY2hlZHVsZWRcclxuICAgKi9cclxuICBfbmV4dFNjaGVkdWxlZD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgcmVzdWx0IGlmIHZhbGlkYXRpb24gZmFpbHMgKGZhdGFsOyB3YXJuaW5nOyByZWNvcmQgb25seTsgbm9uZSkuXHJcbiAgICovXHJcbiAgZmFpbHVyZUFjdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJpbWFyeSBzb3VyY2UocykgaW52b2x2ZWQgaW4gdmFsaWRhdGlvbi5cclxuICAgKi9cclxuICBwcmltYXJ5U291cmNlPzogKGZoaXIuVmVyaWZpY2F0aW9uUmVzdWx0UHJpbWFyeVNvdXJjZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgZW50aXR5IGF0dGVzdGluZyB0byBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBhdHRlc3RhdGlvbj86IGZoaXIuVmVyaWZpY2F0aW9uUmVzdWx0QXR0ZXN0YXRpb258dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBlbnRpdHkgdmFsaWRhdGluZyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICB2YWxpZGF0b3I/OiAoZmhpci5WZXJpZmljYXRpb25SZXN1bHRWYWxpZGF0b3J8bnVsbClbXXx1bmRlZmluZWQ7XHJcbn1cclxuIl19