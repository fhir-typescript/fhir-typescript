// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: MessageDefinition
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZURlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlySnNvbi9NZXNzYWdlRGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IE1lc3NhZ2VEZWZpbml0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogSWRlbnRpZmllcyB0aGUgcmVzb3VyY2UgKG9yIHJlc291cmNlcykgdGhhdCBhcmUgYmVpbmcgYWRkcmVzc2VkIGJ5IHRoZSBldmVudC4gIEZvciBleGFtcGxlLCB0aGUgRW5jb3VudGVyIGZvciBhbiBhZG1pdCBtZXNzYWdlIG9yIHR3byBBY2NvdW50IHJlY29yZHMgZm9yIGEgbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VEZWZpbml0aW9uRm9jdXMgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIE11bHRpcGxlIGZvY3VzZXMgYWRkcmVzc2luZyBkaWZmZXJlbnQgcmVzb3VyY2VzIG1heSBvY2Nhc2lvbmFsbHkgb2NjdXIuICBFLmcuIHRvIGxpbmsgb3IgdW5saW5rIGEgcmVzb3VyY2UgZnJvbSBhIHBhcnRpY3VsYXIgYWNjb3VudCBvciBlbmNvdW50ZXIsIGV0Yy5cclxuICAgKi9cclxuICBjb2RlOiAnQWNjb3VudCd8J0FjdGl2aXR5RGVmaW5pdGlvbid8J0FkdmVyc2VFdmVudCd8J0FsbGVyZ3lJbnRvbGVyYW5jZSd8J0FwcG9pbnRtZW50J3wnQXBwb2ludG1lbnRSZXNwb25zZSd8J0F1ZGl0RXZlbnQnfCdCYXNpYyd8J0JpbmFyeSd8J0JvZHlTaXRlJ3wnQnVuZGxlJ3wnQ2FwYWJpbGl0eVN0YXRlbWVudCd8J0NhcmVQbGFuJ3wnQ2FyZVRlYW0nfCdDaGFyZ2VJdGVtJ3wnQ2xhaW0nfCdDbGFpbVJlc3BvbnNlJ3wnQ2xpbmljYWxJbXByZXNzaW9uJ3wnQ29kZVN5c3RlbSd8J0NvbW11bmljYXRpb24nfCdDb21tdW5pY2F0aW9uUmVxdWVzdCd8J0NvbXBhcnRtZW50RGVmaW5pdGlvbid8J0NvbXBvc2l0aW9uJ3wnQ29uY2VwdE1hcCd8J0NvbmRpdGlvbid8J0NvbnNlbnQnfCdDb250cmFjdCd8J0NvdmVyYWdlJ3wnRGF0YUVsZW1lbnQnfCdEZXRlY3RlZElzc3VlJ3wnRGV2aWNlJ3wnRGV2aWNlQ29tcG9uZW50J3wnRGV2aWNlTWV0cmljJ3wnRGV2aWNlUmVxdWVzdCd8J0RldmljZVVzZVN0YXRlbWVudCd8J0RpYWdub3N0aWNSZXBvcnQnfCdEb2N1bWVudE1hbmlmZXN0J3wnRG9jdW1lbnRSZWZlcmVuY2UnfCdEb21haW5SZXNvdXJjZSd8J0VsaWdpYmlsaXR5UmVxdWVzdCd8J0VsaWdpYmlsaXR5UmVzcG9uc2UnfCdFbmNvdW50ZXInfCdFbmRwb2ludCd8J0Vucm9sbG1lbnRSZXF1ZXN0J3wnRW5yb2xsbWVudFJlc3BvbnNlJ3wnRXBpc29kZU9mQ2FyZSd8J0V4cGFuc2lvblByb2ZpbGUnfCdFeHBsYW5hdGlvbk9mQmVuZWZpdCd8J0ZhbWlseU1lbWJlckhpc3RvcnknfCdGbGFnJ3wnR29hbCd8J0dyYXBoRGVmaW5pdGlvbid8J0dyb3VwJ3wnR3VpZGFuY2VSZXNwb25zZSd8J0hlYWx0aGNhcmVTZXJ2aWNlJ3wnSW1hZ2luZ01hbmlmZXN0J3wnSW1hZ2luZ1N0dWR5J3wnSW1tdW5pemF0aW9uJ3wnSW1tdW5pemF0aW9uUmVjb21tZW5kYXRpb24nfCdJbXBsZW1lbnRhdGlvbkd1aWRlJ3wnTGlicmFyeSd8J0xpbmthZ2UnfCdMaXN0J3wnTG9jYXRpb24nfCdNZWFzdXJlJ3wnTWVhc3VyZVJlcG9ydCd8J01lZGlhJ3wnTWVkaWNhdGlvbid8J01lZGljYXRpb25BZG1pbmlzdHJhdGlvbid8J01lZGljYXRpb25EaXNwZW5zZSd8J01lZGljYXRpb25SZXF1ZXN0J3wnTWVkaWNhdGlvblN0YXRlbWVudCd8J01lc3NhZ2VEZWZpbml0aW9uJ3wnTWVzc2FnZUhlYWRlcid8J05hbWluZ1N5c3RlbSd8J051dHJpdGlvbk9yZGVyJ3wnT2JzZXJ2YXRpb24nfCdPcGVyYXRpb25EZWZpbml0aW9uJ3wnT3BlcmF0aW9uT3V0Y29tZSd8J09yZ2FuaXphdGlvbid8J1BhcmFtZXRlcnMnfCdQYXRpZW50J3wnUGF5bWVudE5vdGljZSd8J1BheW1lbnRSZWNvbmNpbGlhdGlvbid8J1BlcnNvbid8J1BsYW5EZWZpbml0aW9uJ3wnUHJhY3RpdGlvbmVyJ3wnUHJhY3RpdGlvbmVyUm9sZSd8J1Byb2NlZHVyZSd8J1Byb2NlZHVyZVJlcXVlc3QnfCdQcm9jZXNzUmVxdWVzdCd8J1Byb2Nlc3NSZXNwb25zZSd8J1Byb3ZlbmFuY2UnfCdRdWVzdGlvbm5haXJlJ3wnUXVlc3Rpb25uYWlyZVJlc3BvbnNlJ3wnUmVmZXJyYWxSZXF1ZXN0J3wnUmVsYXRlZFBlcnNvbid8J1JlcXVlc3RHcm91cCd8J1Jlc2VhcmNoU3R1ZHknfCdSZXNlYXJjaFN1YmplY3QnfCdSZXNvdXJjZSd8J1Jpc2tBc3Nlc3NtZW50J3wnU2NoZWR1bGUnfCdTZWFyY2hQYXJhbWV0ZXInfCdTZXF1ZW5jZSd8J1NlcnZpY2VEZWZpbml0aW9uJ3wnU2xvdCd8J1NwZWNpbWVuJ3wnU3RydWN0dXJlRGVmaW5pdGlvbid8J1N0cnVjdHVyZU1hcCd8J1N1YnNjcmlwdGlvbid8J1N1YnN0YW5jZSd8J1N1cHBseURlbGl2ZXJ5J3wnU3VwcGx5UmVxdWVzdCd8J1Rhc2snfCdUZXN0UmVwb3J0J3wnVGVzdFNjcmlwdCd8J1ZhbHVlU2V0J3wnVmlzaW9uUHJlc2NyaXB0aW9uJ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi5mb2N1cy5jb2RlXHJcbiAgICovXHJcbiAgX2NvZGU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBzaG91bGQgYmUgcHJlc2VudCBmb3IgbW9zdCBtZXNzYWdlIGRlZmluaXRpb25zLiAgSG93ZXZlciwgaWYgdGhlIG1lc3NhZ2UgZm9jdXMgaXMgb25seSBhIHNpbmdsZSByZXNvdXJjZSBhbmQgdGhlcmUgaXMgbm8gbmVlZCB0byBpbmNsdWRlIHJlZmVyZW5jZWQgcmVzb3VyY2VzIG9yIG90aGVyd2lzZSBlbmZvcmNlIHRoZSBwcmVzZW5jZSBvZiBwYXJ0aWN1bGFyIGVsZW1lbnRzLCBpdCBjYW4gYmUgb21pdHRlZC5cclxuICAgKi9cclxuICBwcm9maWxlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgdGhlIG1pbmltdW0gbnVtYmVyIG9mIHJlc291cmNlcyBvZiB0aGlzIHR5cGUgdGhhdCBtdXN0IGJlIHBvaW50ZWQgdG8gYnkgYSBtZXNzYWdlIGluIG9yZGVyIGZvciBpdCB0byBiZSB2YWxpZCBhZ2FpbnN0IHRoaXMgTWVzc2FnZURlZmluaXRpb24uXHJcbiAgICovXHJcbiAgbWluPzogbnVtYmVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVzc2FnZURlZmluaXRpb24uZm9jdXMubWluXHJcbiAgICovXHJcbiAgX21pbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZXNvdXJjZXMgb2YgdGhpcyB0eXBlIHRoYXQgbXVzdCBiZSBwb2ludGVkIHRvIGJ5IGEgbWVzc2FnZSBpbiBvcmRlciBmb3IgaXQgdG8gYmUgdmFsaWQgYWdhaW5zdCB0aGlzIE1lc3NhZ2VEZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIG1heD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLmZvY3VzLm1heFxyXG4gICAqL1xyXG4gIF9tYXg/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGluZGljYXRlcyBhbiBhcHBsaWNhdGlvbiBsZXZlbCByZXNwb25zZSB0byBcImNsb3NlXCIgYSB0cmFuc2FjdGlvbiBpbXBsaWNpdCBpbiBhIHBhcnRpY3VsYXIgcmVxdWVzdCBtZXNzYWdlLiAgVG8gZGVmaW5lIGEgY29tcGxldGUgd29ya2Zsb3cgc2NlbmFyaW8sIGxvb2sgdG8gdGhlIFtbUGxhbkRlZmluaXRpb25dXSByZXNvdXJjZSB3aGljaCBhbGxvd3MgdGhlIGRlZmluaXRpb24gb2YgY29tcGxleCBvcmNoZXN0cmF0aW9ucywgY29uZGl0aW9uYWxpdHksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZURlZmluaXRpb25BbGxvd2VkUmVzcG9uc2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBtZXNzYWdlIGRlZmluaXRpb24gdGhhdCBtdXN0IGJlIGFkaGVyZWQgdG8gYnkgdGhpcyBzdXBwb3J0ZWQgcmVzcG9uc2UuXHJcbiAgICovXHJcbiAgbWVzc2FnZTogZmhpci5SZWZlcmVuY2V8bnVsbDtcclxuICAvKipcclxuICAgKiBQcm92aWRlcyBhIGRlc2NyaXB0aW9uIG9mIHRoZSBjaXJjdW1zdGFuY2VzIGluIHdoaWNoIHRoaXMgcmVzcG9uc2Ugc2hvdWxkIGJlIHVzZWQgKGFzIG9wcG9zZWQgdG8gb25lIG9mIHRoZSBhbHRlcm5hdGl2ZSByZXNwb25zZXMpLlxyXG4gICAqL1xyXG4gIHNpdHVhdGlvbj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLmFsbG93ZWRSZXNwb25zZS5zaXR1YXRpb25cclxuICAgKi9cclxuICBfc2l0dWF0aW9uPzpmaGlyLkZoaXJFbGVtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGEgbWVzc2FnZSB0aGF0IGNhbiBiZSBzaGFyZWQgYmV0d2VlbiBzeXN0ZW1zLCBpbmNsdWRpbmcgdGhlIHR5cGUgb2YgZXZlbnQgdGhhdCBpbml0aWF0ZXMgdGhlIG1lc3NhZ2UsIHRoZSBjb250ZW50IHRvIGJlIHRyYW5zbWl0dGVkIGFuZCB3aGF0IHJlc3BvbnNlKHMpLCBpZiBhbnksIGFyZSBwZXJtaXR0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2VEZWZpbml0aW9uIGV4dGVuZHMgZmhpci5Eb21haW5SZXNvdXJjZSB7IFxyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIFR5cGUgTmFtZVxyXG4gICAqL1xyXG4gIHJlc291cmNlVHlwZTogXCJNZXNzYWdlRGVmaW5pdGlvblwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogQ2FuIGJlIGEgdXJuOnV1aWQ6IG9yIGEgdXJuOm9pZDosIGJ1dCByZWFsIGh0dHA6IGFkZHJlc3NlcyBhcmUgcHJlZmVycmVkLiAgTXVsdGlwbGUgaW5zdGFuY2VzIG1heSBzaGFyZSB0aGUgc2FtZSB1cmwgaWYgdGhleSBoYXZlIGEgZGlzdGluY3QgdmVyc2lvbi5cclxuICAgKi9cclxuICB1cmw/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi51cmxcclxuICAgKi9cclxuICBfdXJsPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFR5cGljYWxseSwgdGhpcyBpcyB1c2VkIGZvciBpZGVudGlmaWVycyB0aGF0IGNhbiBnbyBpbiBhbiBITDcgVjMgSUkgKGluc3RhbmNlIGlkZW50aWZpZXIpIGRhdGEgdHlwZSwgZS5nLiwgdG8gaWRlbnRpZnkgdGhpcyBtZXNzYWdlIGRlZmluaXRpb24gb3V0c2lkZSBvZiBGSElSLCB3aGVyZSBpdCBpcyBub3QgcG9zc2libGUgdG8gdXNlIHRoZSBsb2dpY2FsIFVSSS5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogZmhpci5JZGVudGlmaWVyfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVyZSBtYXkgYmUgZGlmZmVyZW50IG1lc3NhZ2UgZGVmaW5pdGlvbiBpbnN0YW5jZXMgdGhhdCBoYXZlIHRoZSBzYW1lIGlkZW50aWZpZXIgYnV0IGRpZmZlcmVudCB2ZXJzaW9ucy4gIFRoZSB2ZXJzaW9uIGNhbiBiZSBhcHBlbmRlZCB0byB0aGUgdXJsIGluIGEgcmVmZXJlbmNlIHRvIGFsbG93IGEgcmVmcmVuY2UgdG8gYSBwYXJ0aWN1bGFyIGJ1c2luZXNzIHZlcnNpb24gb2YgdGhlIG1lc3NhZ2UgZGVmaW5pdGlvbiB3aXRoIHRoZSBmb3JtYXQgW3VybF18W3ZlcnNpb25dLlxyXG4gICAqL1xyXG4gIHZlcnNpb24/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi52ZXJzaW9uXHJcbiAgICovXHJcbiAgX3ZlcnNpb24/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgaXMgbm90IGV4cGVjdGVkIHRvIGJlIGdsb2JhbGx5IHVuaXF1ZS4gVGhlIG5hbWUgc2hvdWxkIGJlIGEgc2ltcGxlIGFscGhhLW51bWVyaWMgdHlwZSBuYW1lIHRvIGVuc3VyZSB0aGF0IGl0IGlzIGNvbXB1dGFibGUgZnJpZW5kbHkuXHJcbiAgICovXHJcbiAgbmFtZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLm5hbWVcclxuICAgKi9cclxuICBfbmFtZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGlzIG5hbWUgZG9lcyBub3QgbmVlZCB0byBiZSBtYWNoaW5lLXByb2Nlc3NpbmcgZnJpZW5kbHkgYW5kIG1heSBjb250YWluIHB1bmN0dWF0aW9uLCB3aGl0ZS1zcGFjZSwgZXRjLlxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVzc2FnZURlZmluaXRpb24udGl0bGVcclxuICAgKi9cclxuICBfdGl0bGU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZpbHRlcmluZyBvZiBtZXNzYWdlIGRlZmluaXRpb25zIHRoYXQgYXJlIGFwcHJvcHJpYXRlIGZvciB1c2UgdnMuIG5vdC4gIFxyXG4gICAqIFRoaXMgaXMgbGFiZWxlZCBhcyBcIklzIE1vZGlmaWVyXCIgYmVjYXVzZSBhcHBsaWNhdGlvbnMgc2hvdWxkIG5vdCB1c2UgYSByZXRpcmVkIG1lc3NhZ2UgZGVmaW5pdGlvbiB3aXRob3V0IGR1ZSBjb25zaWRlcmF0aW9uLlxyXG4gICAqL1xyXG4gIHN0YXR1czogJ2FjdGl2ZSd8J2RyYWZ0J3wncmV0aXJlZCd8J3Vua25vd24nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIGZpbHRlcmluZyBvZiBtZXNzYWdlIGRlZmluaXRpb24gdGhhdCBhcmUgYXBwcm9wcmlhdGUgZm9yIHVzZSB2cy4gbm90LiBUaGlzIGlzIGxhYmVsZWQgYXMgXCJJcyBNb2RpZmllclwiIGJlY2F1c2UgYXBwbGljYXRpb25zIHNob3VsZCBub3QgdXNlIGFuIGV4cGVyaW1lbnRhbCBtZXNzYWdlIGRlZmluaXRpb24gaW4gcHJvZHVjdGlvbi5cclxuICAgKi9cclxuICBleHBlcmltZW50YWw/OiBib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVzc2FnZURlZmluaXRpb24uZXhwZXJpbWVudGFsXHJcbiAgICovXHJcbiAgX2V4cGVyaW1lbnRhbD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIHJlc291cmNlIGxhc3QtbW9kaWZpZWQtZGF0ZSwgc2luY2UgdGhlIHJlc291cmNlIG1heSBiZSBhIHNlY29uZGFyeSByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWVzc2FnZSBkZWZpbml0aW9uLiBBZGRpdGlvbmFsIHNwZWNpZmljIGRhdGVzIG1heSBiZSBhZGRlZCBhcyBleHRlbnNpb25zIG9yIGJlIGZvdW5kIGJ5IGNvbnN1bHRpbmcgUHJvdmVuYW5jZXMgYXNzb2NpYXRlZCB3aXRoIHBhc3QgdmVyc2lvbnMgb2YgdGhlIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIGRhdGU6IHN0cmluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi5kYXRlXHJcbiAgICovXHJcbiAgX2RhdGU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVXN1YWxseSBhbiBvcmdhbml6YXRpb24sIGJ1dCBtYXkgYmUgYW4gaW5kaXZpZHVhbC4gVGhlIHB1Ymxpc2hlciAob3Igc3Rld2FyZCkgb2YgdGhlIG1lc3NhZ2UgZGVmaW5pdGlvbiBpcyB0aGUgb3JnYW5pemF0aW9uIG9yIGluZGl2aWR1YWwgcHJpbWFyaWx5IHJlc3BvbnNpYmxlIGZvciB0aGUgbWFpbnRlbmFuY2UgYW5kIHVwa2VlcCBvZiB0aGUgbWVzc2FnZSBkZWZpbml0aW9uLiBUaGlzIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBpbmRpdmlkdWFsIG9yIG9yZ2FuaXphdGlvbiB0aGF0IGRldmVsb3BlZCBhbmQgaW5pdGlhbGx5IGF1dGhvcmVkIHRoZSBjb250ZW50LiBUaGUgcHVibGlzaGVyIGlzIHRoZSBwcmltYXJ5IHBvaW50IG9mIGNvbnRhY3QgZm9yIHF1ZXN0aW9ucyBvciBpc3N1ZXMgd2l0aCB0aGUgbWVzc2FnZSBkZWZpbml0aW9uLiBUaGlzIGl0ZW0gU0hPVUxEIGJlIHBvcHVsYXRlZCB1bmxlc3MgdGhlIGluZm9ybWF0aW9uIGlzIGF2YWlsYWJsZSBmcm9tIGNvbnRleHQuXHJcbiAgICovXHJcbiAgcHVibGlzaGVyPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVzc2FnZURlZmluaXRpb24ucHVibGlzaGVyXHJcbiAgICovXHJcbiAgX3B1Ymxpc2hlcj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBNYXkgYmUgYSB3ZWIgc2l0ZSwgYW4gZW1haWwgYWRkcmVzcywgYSB0ZWxlcGhvbmUgbnVtYmVyLCBldGMuXHJcbiAgICovXHJcbiAgY29udGFjdD86IChmaGlyLkNvbnRhY3REZXRhaWx8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBkZXNjcmlwdGlvbiBjYW4gYmUgdXNlZCB0byBjYXB0dXJlIGRldGFpbHMgc3VjaCBhcyB3aHkgdGhlIG1lc3NhZ2UgZGVmaW5pdGlvbiB3YXMgYnVpbHQsIGNvbW1lbnRzIGFib3V0IG1pc3VzZSwgaW5zdHJ1Y3Rpb25zIGZvciBjbGluaWNhbCB1c2UgYW5kIGludGVycHJldGF0aW9uLCBsaXRlcmF0dXJlIHJlZmVyZW5jZXMsIGV4YW1wbGVzIGZyb20gdGhlIHBhcGVyIHdvcmxkLCBldGMuIEl0IGlzIG5vdCBhIHJlbmRlcmluZyBvZiB0aGUgbWVzc2FnZSBkZWZpbml0aW9uIGFzIGNvbnZleWVkIGluIHRoZSAndGV4dCcgZmllbGQgb2YgdGhlIHJlc291cmNlIGl0c2VsZi4gVGhpcyBpdGVtIFNIT1VMRCBiZSBwb3B1bGF0ZWQgdW5sZXNzIHRoZSBpbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgZnJvbSBjb250ZXh0IChlLmcuIHRoZSBsYW5ndWFnZSBvZiB0aGUgcHJvZmlsZSBpcyBwcmVzdW1lZCB0byBiZSB0aGUgcHJlZG9taW5hbnQgbGFuZ3VhZ2UgaW4gdGhlIHBsYWNlIHRoZSBwcm9maWxlIHdhcyBjcmVhdGVkKS5cclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLmRlc2NyaXB0aW9uXHJcbiAgICovXHJcbiAgX2Rlc2NyaXB0aW9uPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gbXVsdGlwbGUgdXNlQ29udGV4dHMgYXJlIHNwZWNpZmllZCwgdGhlcmUgaXMgbm8gZXhwZWN0YXRpb24gd2hldGhlciBhbGwgb3IgYW55IG9mIHRoZSBjb250ZXh0cyBhcHBseS5cclxuICAgKi9cclxuICB1c2VDb250ZXh0PzogKGZoaXIuVXNhZ2VDb250ZXh0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEl0IG1heSBiZSBwb3NzaWJsZSBmb3IgdGhlIG1lc3NhZ2UgZGVmaW5pdGlvbiB0byBiZSB1c2VkIGluIGp1cmlzZGljdGlvbnMgb3RoZXIgdGhhbiB0aG9zZSBmb3Igd2hpY2ggaXQgd2FzIG9yaWdpbmFsbHkgZGVzaWduZWQgb3IgaW50ZW5kZWQuXHJcbiAgICovXHJcbiAganVyaXNkaWN0aW9uPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZWxlbWVudCBkb2VzIG5vdCBkZXNjcmliZSB0aGUgdXNhZ2Ugb2YgdGhlIG1lc3NhZ2UgZGVmaW5pdGlvbiBJbnN0ZWFkICBpdCBwcm92aWRlcyB0cmFjZWFiaWxpdHkgb2YgJyd3aHknJyB0aGUgcmVzb3VyY2UgaXMgZWl0aGVyIG5lZWRlZCBvciAnJ3doeScnIGl0IGlzIGRlZmluZWQgYXMgaXQgaXMuICBUaGlzIG1heSBiZSB1c2VkIHRvIHBvaW50IHRvIHNvdXJjZSBtYXRlcmlhbHMgb3Igc3BlY2lmaWNhdGlvbnMgdGhhdCBkcm92ZSB0aGUgc3RydWN0dXJlIG9mIHRoaXMgbWVzc2FnZSBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIHB1cnBvc2U/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi5wdXJwb3NlXHJcbiAgICovXHJcbiAgX3B1cnBvc2U/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb3B5cmlnaHQgc3RhdGVtZW50IHJlbGF0aW5nIHRvIHRoZSBtZXNzYWdlIGRlZmluaXRpb24gYW5kL29yIGl0cyBjb250ZW50cy4gQ29weXJpZ2h0IHN0YXRlbWVudHMgYXJlIGdlbmVyYWxseSBsZWdhbCByZXN0cmljdGlvbnMgb24gdGhlIHVzZSBhbmQgcHVibGlzaGluZyBvZiB0aGUgbWVzc2FnZSBkZWZpbml0aW9uLlxyXG4gICAqL1xyXG4gIGNvcHlyaWdodD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE1lc3NhZ2VEZWZpbml0aW9uLmNvcHlyaWdodFxyXG4gICAqL1xyXG4gIF9jb3B5cmlnaHQ/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIE1lc3NhZ2VEZWZpbml0aW9uIHRoYXQgaXMgdGhlIGJhc2lzIGZvciB0aGUgY29udGVudHMgb2YgdGhpcyByZXNvdXJjZS5cclxuICAgKi9cclxuICBiYXNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIElkZW50aWZpZXMgYSBwcm90b2NvbCBvciB3b3JrZmxvdyB0aGF0IHRoaXMgTWVzc2FnZURlZmluaXRpb24gcmVwcmVzZW50cyBhIHN0ZXAgaW4uXHJcbiAgICovXHJcbiAgcGFyZW50PzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEEgTWVzc2FnZURlZmluaXRpb24gdGhhdCBpcyBzdXBlcnNlZGVkIGJ5IHRoaXMgZGVmaW5pdGlvbi5cclxuICAgKi9cclxuICByZXBsYWNlcz86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIGNvZGVkIGlkZW50aWZpZXIgb2YgYSBzdXBwb3J0ZWQgbWVzc2FnaW5nIGV2ZW50LlxyXG4gICAqL1xyXG4gIGV2ZW50OiBmaGlyLkNvZGluZ3xudWxsO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBpbXBhY3Qgb2YgdGhlIGNvbnRlbnQgb2YgdGhlIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiAnQ29uc2VxdWVuY2UnfCdDdXJyZW5jeSd8J05vdGlmaWNhdGlvbid8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBNZXNzYWdlRGVmaW5pdGlvbi5jYXRlZ29yeVxyXG4gICAqL1xyXG4gIF9jYXRlZ29yeT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWVzIHRoZSByZXNvdXJjZSAob3IgcmVzb3VyY2VzKSB0aGF0IGFyZSBiZWluZyBhZGRyZXNzZWQgYnkgdGhlIGV2ZW50LiAgRm9yIGV4YW1wbGUsIHRoZSBFbmNvdW50ZXIgZm9yIGFuIGFkbWl0IG1lc3NhZ2Ugb3IgdHdvIEFjY291bnQgcmVjb3JkcyBmb3IgYSBtZXJnZS5cclxuICAgKi9cclxuICBmb2N1cz86IChmaGlyLk1lc3NhZ2VEZWZpbml0aW9uRm9jdXN8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgYSByZXNwb25zZSBpcyByZXF1aXJlZCBmb3IgdGhpcyBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIHJlc3BvbnNlUmVxdWlyZWQ/OiBib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogTWVzc2FnZURlZmluaXRpb24ucmVzcG9uc2VSZXF1aXJlZFxyXG4gICAqL1xyXG4gIF9yZXNwb25zZVJlcXVpcmVkPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaW5kaWNhdGVzIGFuIGFwcGxpY2F0aW9uIGxldmVsIHJlc3BvbnNlIHRvIFwiY2xvc2VcIiBhIHRyYW5zYWN0aW9uIGltcGxpY2l0IGluIGEgcGFydGljdWxhciByZXF1ZXN0IG1lc3NhZ2UuICBUbyBkZWZpbmUgYSBjb21wbGV0ZSB3b3JrZmxvdyBzY2VuYXJpbywgbG9vayB0byB0aGUgW1tQbGFuRGVmaW5pdGlvbl1dIHJlc291cmNlIHdoaWNoIGFsbG93cyB0aGUgZGVmaW5pdGlvbiBvZiBjb21wbGV4IG9yY2hlc3RyYXRpb25zLCBjb25kaXRpb25hbGl0eSwgZXRjLlxyXG4gICAqL1xyXG4gIGFsbG93ZWRSZXNwb25zZT86IChmaGlyLk1lc3NhZ2VEZWZpbml0aW9uQWxsb3dlZFJlc3BvbnNlfG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==