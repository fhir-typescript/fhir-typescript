// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Goal
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJKc29uL0dvYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnIzLmNvcmUgdmVyc2lvbjogMy4wLjJcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBHb2FsXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIHdoYXQgc2hvdWxkIGJlIGRvbmUgYnkgd2hlbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR29hbFRhcmdldCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcmFtZXRlciB3aG9zZSB2YWx1ZSBpcyBiZWluZyB0cmFja2VkLCBlLmcuIGJvZHkgd2VpZ2h0LCBibG9vZCBwcmVzc3VyZSwgb3IgaGVtb2dsb2JpbiBBMWMgbGV2ZWwuXHJcbiAgICovXHJcbiAgbWVhc3VyZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdGFyZ2V0IHZhbHVlIG9mIHRoZSBmb2N1cyB0byBiZSBhY2hpZXZlZCB0byBzaWduaWZ5IHRoZSBmdWxmaWxsbWVudCBvZiB0aGUgZ29hbCwgZS5nLiAxNTAgcG91bmRzLCA3LjAlLiBFaXRoZXIgdGhlIGhpZ2ggb3IgbG93IG9yIGJvdGggdmFsdWVzIG9mIHRoZSByYW5nZSBjYW4gYmUgc3BlY2lmaWVkLiBXaGVuIGEgbG93IHZhbHVlIGlzIG1pc3NpbmcsIGl0IGluZGljYXRlcyB0aGF0IHRoZSBnb2FsIGlzIGFjaGlldmVkIGF0IGFueSBmb2N1cyB2YWx1ZSBhdCBvciBiZWxvdyB0aGUgaGlnaCB2YWx1ZS4gU2ltaWxhcmx5LCBpZiB0aGUgaGlnaCB2YWx1ZSBpcyBtaXNzaW5nLCBpdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ29hbCBpcyBhY2hpZXZlZCBhdCBhbnkgZm9jdXMgdmFsdWUgYXQgb3IgYWJvdmUgdGhlIGxvdyB2YWx1ZS5cclxuICAgKi9cclxuICBkZXRhaWxRdWFudGl0eT86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSB0YXJnZXQgdmFsdWUgb2YgdGhlIGZvY3VzIHRvIGJlIGFjaGlldmVkIHRvIHNpZ25pZnkgdGhlIGZ1bGZpbGxtZW50IG9mIHRoZSBnb2FsLCBlLmcuIDE1MCBwb3VuZHMsIDcuMCUuIEVpdGhlciB0aGUgaGlnaCBvciBsb3cgb3IgYm90aCB2YWx1ZXMgb2YgdGhlIHJhbmdlIGNhbiBiZSBzcGVjaWZpZWQuIFdoZW4gYSBsb3cgdmFsdWUgaXMgbWlzc2luZywgaXQgaW5kaWNhdGVzIHRoYXQgdGhlIGdvYWwgaXMgYWNoaWV2ZWQgYXQgYW55IGZvY3VzIHZhbHVlIGF0IG9yIGJlbG93IHRoZSBoaWdoIHZhbHVlLiBTaW1pbGFybHksIGlmIHRoZSBoaWdoIHZhbHVlIGlzIG1pc3NpbmcsIGl0IGluZGljYXRlcyB0aGF0IHRoZSBnb2FsIGlzIGFjaGlldmVkIGF0IGFueSBmb2N1cyB2YWx1ZSBhdCBvciBhYm92ZSB0aGUgbG93IHZhbHVlLlxyXG4gICAqL1xyXG4gIGRldGFpbFJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRhcmdldCB2YWx1ZSBvZiB0aGUgZm9jdXMgdG8gYmUgYWNoaWV2ZWQgdG8gc2lnbmlmeSB0aGUgZnVsZmlsbG1lbnQgb2YgdGhlIGdvYWwsIGUuZy4gMTUwIHBvdW5kcywgNy4wJS4gRWl0aGVyIHRoZSBoaWdoIG9yIGxvdyBvciBib3RoIHZhbHVlcyBvZiB0aGUgcmFuZ2UgY2FuIGJlIHNwZWNpZmllZC4gV2hlbiBhIGxvdyB2YWx1ZSBpcyBtaXNzaW5nLCBpdCBpbmRpY2F0ZXMgdGhhdCB0aGUgZ29hbCBpcyBhY2hpZXZlZCBhdCBhbnkgZm9jdXMgdmFsdWUgYXQgb3IgYmVsb3cgdGhlIGhpZ2ggdmFsdWUuIFNpbWlsYXJseSwgaWYgdGhlIGhpZ2ggdmFsdWUgaXMgbWlzc2luZywgaXQgaW5kaWNhdGVzIHRoYXQgdGhlIGdvYWwgaXMgYWNoaWV2ZWQgYXQgYW55IGZvY3VzIHZhbHVlIGF0IG9yIGFib3ZlIHRoZSBsb3cgdmFsdWUuXHJcbiAgICovXHJcbiAgZGV0YWlsQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBlaXRoZXIgdGhlIGRhdGUgb3IgdGhlIGR1cmF0aW9uIGFmdGVyIHN0YXJ0IGJ5IHdoaWNoIHRoZSBnb2FsIHNob3VsZCBiZSBtZXQuXHJcbiAgICovXHJcbiAgZHVlRGF0ZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEdvYWwudGFyZ2V0LmR1ZVt4XVxyXG4gICAqL1xyXG4gIF9kdWVEYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBlaXRoZXIgdGhlIGRhdGUgb3IgdGhlIGR1cmF0aW9uIGFmdGVyIHN0YXJ0IGJ5IHdoaWNoIHRoZSBnb2FsIHNob3VsZCBiZSBtZXQuXHJcbiAgICovXHJcbiAgZHVlRHVyYXRpb24/OiBmaGlyLkR1cmF0aW9ufHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlc2NyaWJlcyB0aGUgaW50ZW5kZWQgb2JqZWN0aXZlKHMpIGZvciBhIHBhdGllbnQsIGdyb3VwIG9yIG9yZ2FuaXphdGlvbiBjYXJlLCBmb3IgZXhhbXBsZSwgd2VpZ2h0IGxvc3MsIHJlc3RvcmluZyBhbiBhY3Rpdml0eSBvZiBkYWlseSBsaXZpbmcsIG9idGFpbmluZyBoZXJkIGltbXVuaXR5IHZpYSBpbW11bml6YXRpb24sIG1lZXRpbmcgYSBwcm9jZXNzIGltcHJvdmVtZW50IG9iamVjdGl2ZSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBHb2FsIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7IFxyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJHb2FsXCJ8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGlzIHJlY29yZHMgaWRlbnRpZmllcnMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY2FyZSBwbGFuIHRoYXQgYXJlIGRlZmluZWQgYnkgYnVzaW5lc3MgcHJvY2Vzc2VzIGFuZC9vciB1c2VkIHRvIHJlZmVyIHRvIGl0IHdoZW4gYSBkaXJlY3QgVVJMIHJlZmVyZW5jZSB0byB0aGUgcmVzb3VyY2UgaXRzZWxmIGlzIG5vdCBhcHByb3ByaWF0ZSAoZS5nLiBpbiBDREEgZG9jdW1lbnRzLCBvciBpbiB3cml0dGVuIC8gcHJpbnRlZCBkb2N1bWVudGF0aW9uKS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogKGZoaXIuSWRlbnRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYWNjZXB0ZWQnfCdhY2hpZXZlZCd8J2FoZWFkLW9mLXRhcmdldCd8J2JlaGluZC10YXJnZXQnfCdjYW5jZWxsZWQnfCdlbnRlcmVkLWluLWVycm9yJ3wnaW4tcHJvZ3Jlc3MnfCdvbi1ob2xkJ3wnb24tdGFyZ2V0J3wncGxhbm5lZCd8J3Byb3Bvc2VkJ3wncmVqZWN0ZWQnfCdzdXN0YWluaW5nJ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHb2FsLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGEgY2F0ZWdvcnkgdGhlIGdvYWwgZmFsbHMgd2l0aGluLlxyXG4gICAqL1xyXG4gIGNhdGVnb3J5PzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuc2lvbnMgYXJlIGF2YWlsYWJsZSB0byB0cmFjayBwcmlvcml0aWVzIGFzIGVzdGFibGlzaGVkIGJ5IGVhY2ggcGFydGljaXBhbnQgKGkuZS4gUHJpb3JpdHkgZnJvbSB0aGUgcGF0aWVudCdzIHBlcnNwZWN0aXZlLCBkaWZmZXJlbnQgcHJhY3RpdGlvbmVycycgcGVyc3BlY3RpdmVzLCBmYW1pbHkgbWVtYmVyJ3MgcGVyc3BlY3RpdmVzKVxyXG4gICAqIFRoZSBvcmRpbmFsIGV4dGVuc2lvbiBvbiBDb2RpbmcgY2FuIGJlIHVzZWQgdG8gY29udmV5IGEgbnVtZXJpY2FsbHkgY29tcGFyYWJsZSByYW5raW5nIHRvIHByaW9yaXR5LiAgKEtlZXAgaW4gbWluZCB0aGF0IGRpZmZlcmVudCBjb2Rpbmcgc3lzdGVtcyBtYXkgdXNlIGEgXCJsb3cgdmFsdWU9aW1wb3J0YW50XCIuXHJcbiAgICovXHJcbiAgcHJpb3JpdHk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSWYgbm8gY29kZSBpcyBhdmFpbGFibGUsIHVzZSBDb2RlYWJsZUNvbmNlcHQudGV4dC5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbjogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBwYXRpZW50LCBncm91cCBvciBvcmdhbml6YXRpb24gZm9yIHdob20gdGhlIGdvYWwgaXMgYmVpbmcgZXN0YWJsaXNoZWQuXHJcbiAgICovXHJcbiAgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBvciBldmVudCBhZnRlciB3aGljaCB0aGUgZ29hbCBzaG91bGQgYmVnaW4gYmVpbmcgcHVyc3VlZC5cclxuICAgKi9cclxuICBzdGFydERhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHb2FsLnN0YXJ0W3hdXHJcbiAgICovXHJcbiAgX3N0YXJ0RGF0ZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSBvciBldmVudCBhZnRlciB3aGljaCB0aGUgZ29hbCBzaG91bGQgYmVnaW4gYmVpbmcgcHVyc3VlZC5cclxuICAgKi9cclxuICBzdGFydENvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgd2hhdCBzaG91bGQgYmUgZG9uZSBieSB3aGVuLlxyXG4gICAqL1xyXG4gIHRhcmdldD86IGZoaXIuR29hbFRhcmdldHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVG8gc2VlIHRoZSBkYXRlIGZvciBwYXN0IHN0YXR1c2VzLCBxdWVyeSBoaXN0b3J5LlxyXG4gICAqL1xyXG4gIHN0YXR1c0RhdGU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHb2FsLnN0YXR1c0RhdGVcclxuICAgKi9cclxuICBfc3RhdHVzRGF0ZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGlzIHdpbGwgdHlwaWNhbGx5IGJlIGNhcHR1cmVkIGZvciBzdGF0dXNlcyBzdWNoIGFzIHJlamVjdGVkLCBvbi1ob2xkIG9yIGNhbmNlbGxlZCwgYnV0IGNvdWxkIGJlIHByZXNlbnQgZm9yIG90aGVycy5cclxuICAgKi9cclxuICBzdGF0dXNSZWFzb24/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBHb2FsLnN0YXR1c1JlYXNvblxyXG4gICAqL1xyXG4gIF9zdGF0dXNSZWFzb24/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB0aGUgaW5kaXZpZHVhbCByZXBvbnNpYmxlIGZvciBlc3RhYmxpc2hpbmcgdGhlIGdvYWwsIG5vdCBuZWNlc3NhcmlseSB3aG8gcmVjb3JkZWQgaXQuICAoRm9yIHRoYXQsIHVzZSB0aGUgUHJvdmVuYW5jZSByZXNvdXJjZS4pLlxyXG4gICAqL1xyXG4gIGV4cHJlc3NlZEJ5PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpZGVudGlmaWVkIGNvbmRpdGlvbnMgYW5kIG90aGVyIGhlYWx0aCByZWNvcmQgZWxlbWVudHMgdGhhdCBhcmUgaW50ZW5kZWQgdG8gYmUgYWRkcmVzc2VkIGJ5IHRoZSBnb2FsLlxyXG4gICAqL1xyXG4gIGFkZHJlc3Nlcz86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBNYXkgYmUgdXNlZCBmb3IgcHJvZ3Jlc3Mgbm90ZXMsIGNvbmNlcm5zIG9yIG90aGVyIHJlbGF0ZWQgaW5mb3JtYXRpb24gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGRlc2NyaWJlIHRoZSBnb2FsIGl0c2VsZi5cclxuICAgKi9cclxuICBub3RlPzogKGZoaXIuQW5ub3RhdGlvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgbm90IGR1cGxpY2F0ZSB0aGUgZ29hbCBzdGF0dXMuXHJcbiAgICovXHJcbiAgb3V0Y29tZUNvZGU/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGdvYWwgb3V0Y29tZSBpcyBpbmRlcGVuZGVudCBvZiB0aGUgb3V0Y29tZSBvZiB0aGUgcmVsYXRlZCBhY3Rpdml0aWVzLiAgRm9yIGV4YW1wbGUsIGlmIHRoZSBHb2FsIGlzIHRvIGFjaGlldmUgYSB0YXJnZXQgYm9keSB3ZWlnaHQgb2YgMTUwIGxiIGFuZCBhIGNhcmUgcGxhbiBhY3Rpdml0eSBpcyBkZWZpbmVkIHRvIGRpZXQsIHRoZW4gdGhlIGNhcmUgcGxhbuKAmXMgYWN0aXZpdHkgb3V0Y29tZSBjb3VsZCBiZSBjYWxvcmllcyBjb25zdW1lZCB3aGVyZWFzIGdvYWwgb3V0Y29tZSBpcyBhbiBvYnNlcnZhdGlvbiBmb3IgdGhlIGFjdHVhbCBib2R5IHdlaWdodCBtZWFzdXJlZC5cclxuICAgKi9cclxuICBvdXRjb21lUmVmZXJlbmNlPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==