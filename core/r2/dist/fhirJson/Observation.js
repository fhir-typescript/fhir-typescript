// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Observation
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlySnNvbi9PYnNlcnZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IE9ic2VydmF0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogS25vd2luZyB3aGF0IHZhbHVlcyBhcmUgY29uc2lkZXJlZCBcIm5vcm1hbFwiIGNhbiBoZWxwIGV2YWx1YXRlIHRoZSBzaWduaWZpY2FuY2Ugb2YgYSBwYXJ0aWN1bGFyIHJlc3VsdC4gTmVlZCB0byBiZSBhYmxlIHRvIHByb3ZpZGUgbXVsdGlwbGUgcmVmZXJlbmNlIHJhbmdlcyBmb3IgZGlmZmVyZW50IGNvbnRleHRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhdGlvblJlZmVyZW5jZVJhbmdlIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGxvdyBib3VuZCBvZiB0aGUgcmVmZXJlbmNlIHJhbmdlLiAgVGhlIGxvdyBib3VuZCBvZiB0aGUgcmVmZXJlbmNlIHJhbmdlIGVuZHBvaW50IGlzIGluY2x1c2l2ZSBvZiB0aGUgdmFsdWUgKGUuZy4gIHJlZmVyZW5jZSByYW5nZSBpcyAmZ3Q7PTUgLSAmbHQ7PTkpLiAgIElmIHRoZSBsb3cgYm91bmQgaXMgb21pdHRlZCwgIGl0IGlzIGFzc3VtZWQgdG8gYmUgbWVhbmluZ2xlc3MgKGUuZy4gcmVmZXJlbmNlIHJhbmdlIGlzICZsdDs9Mi4zKS5cclxuICAgKi9cclxuICBsb3c/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGhpZ2ggYm91bmQgb2YgdGhlIHJlZmVyZW5jZSByYW5nZS4gIFRoZSBoaWdoIGJvdW5kIG9mIHRoZSByZWZlcmVuY2UgcmFuZ2UgZW5kcG9pbnQgaXMgaW5jbHVzaXZlIG9mIHRoZSB2YWx1ZSAoZS5nLiAgcmVmZXJlbmNlIHJhbmdlIGlzICZndDs9NSAtICZsdDs9OSkuICAgSWYgdGhlIGhpZ2ggYm91bmQgaXMgb21pdHRlZCwgIGl0IGlzIGFzc3VtZWQgdG8gYmUgbWVhbmluZ2xlc3MgKGUuZy4gcmVmZXJlbmNlIHJhbmdlIGlzICZndDs9IDIuMykuXHJcbiAgICovXHJcbiAgaGlnaD86IGZoaXIuUXVhbnRpdHl8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5lZWQgdG8gYmUgYWJsZSB0byBzYXkgd2hhdCBraW5kIG9mIHJlZmVyZW5jZSByYW5nZSB0aGlzIGlzIC0gbm9ybWFsLCByZWNvbW1lbmRlZCwgdGhlcmFwZXV0aWMsIG9yIHBlcmhhcHMgd2hhdCBzdGF0ZSB0aGlzIHJlZmVyZW5jZSByYW5nZSBhcHBsaWVzIHRvIChpLmUuIGFnZSwgaG9ybW9uYWwgY3ljbGVzLCBldGMuKS5cclxuICAgKi9cclxuICBtZWFuaW5nPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFNvbWUgYW5hbHl0ZXMgdmFyeSBncmVhdGx5IG92ZXIgYWdlLlxyXG4gICAqL1xyXG4gIGFnZT86IGZoaXIuUmFuZ2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRleHQgYmFzZWQgcmVmZXJlbmNlIHJhbmdlIGluIGFuIG9ic2VydmF0aW9uIHdoaWNoIG1heSBiZSB1c2VkIHdoZW4gYSBxdWFudGl0YXRpdmUgcmFuZ2UgaXMgbm90IGFwcHJvcHJpYXRlIGZvciBhbiBvYnNlcnZhdGlvbi4gIEFuIGV4YW1wbGUgd291bGQgYmUgYSByZWZlcmVuY2UgdmFsdWUgb2YgXCJOZWdhdGl2ZVwiIG9yIGEgbGlzdCBvciB0YWJsZSBvZiAnbm9ybWFscycuXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnJlZmVyZW5jZVJhbmdlLnRleHRcclxuICAgKi9cclxuICBfdGV4dD86Zmhpci5GaGlyRWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE5vcm1hbGx5LCBhbiBvYnNlcnZhdGlvbiB3aWxsIGhhdmUgZWl0aGVyIGEgdmFsdWUgb3IgYSBzZXQgb2YgcmVsYXRlZCBvYnNlcnZhdGlvbnMuIEEgZmV3IG9ic2VydmF0aW9ucyAoZS5nLiBBcGdhciBzY29yZSkgbWF5IGhhdmUgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9ic2VydmF0aW9ucyBvciBzb21ldGltZXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlICBmcm9tIHdoaWNoIHRoZSBtZWFzdXJlIGlzIGRlcml2ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmF0aW9uUmVsYXRlZCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogQSByZWxhdGlvbnNoaXAgdHlwZSBTSE9VTEQgYmUgcHJvdmlkZWQuXHJcbiAgICovXHJcbiAgdHlwZT86ICdkZXJpdmVkLWZyb20nfCdoYXMtbWVtYmVyJ3wnaW50ZXJmZXJlZC1ieSd8J3F1YWxpZmllZC1ieSd8J3JlcGxhY2VzJ3wnc2VxdWVsLXRvJ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnJlbGF0ZWQudHlwZVxyXG4gICAqL1xyXG4gIF90eXBlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvYnNlcnZhdGlvbiBvciBbW1tRdWVzdGlvbm5haXJlUmVzcG9uc2VdXV0gcmVzb3VyY2UgdGhhdCBpcyByZWxhdGVkIHRvIHRoaXMgb2JzZXJ2YXRpb24uXHJcbiAgICovXHJcbiAgdGFyZ2V0OiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcG9uZW50IG9ic2VydmF0aW9ucyBzaGFyZSB0aGUgc2FtZSBhdHRyaWJ1dGVzIGluIHRoZSBPYnNlcnZhdGlvbiByZXNvdXJjZSBhcyB0aGUgcHJpbWFyeSBvYnNlcnZhdGlvbiBhbmQgYXJlIGFsd2F5cyB0cmVhdGVkIGEgcGFydCBvZiBhIHNpbmdsZSBvYnNlcnZhdGlvbiAodGhleSBhcmUgbm90IHNlcGFyYWJsZSkuICAgSG93ZXZlciwgdGhlIHJlZmVyZW5jZSByYW5nZSBmb3IgdGhlIHByaW1hcnkgb2JzZXJ2YXRpb24gdmFsdWUgaXMgbm90IGluaGVyaXRlZCBieSB0aGUgY29tcG9uZW50IHZhbHVlcyBhbmQgaXMgcmVxdWlyZWQgd2hlbiBhcHByb3ByaWF0ZSBmb3IgZWFjaCBjb21wb25lbnQgb2JzZXJ2YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmF0aW9uQ29tcG9uZW50IGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoYXQga2luZCBvZiBvYnNlcnZhdGlvbiBpcyBiZWluZyBtYWRlIGlzIGVzc2VudGlhbCB0byB1bmRlcnN0YW5kaW5nIHRoZSBvYnNlcnZhdGlvbi5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlUXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZVN0cmluZz86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbXBvbmVudC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZVN0cmluZz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZVJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gZXhpc3RzIHRvIGhhdmUgYSB2YWx1ZSwgdGhvdWdoIGl0IG1heSBub3QgaWYgaXQgaXMgaW4gZXJyb3IsIG9yIGl0IHJlcHJlc2VudHMgYSBncm91cCBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgdmFsdWVSYXRpbz86IGZoaXIuUmF0aW98dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlU2FtcGxlZERhdGE/OiBmaGlyLlNhbXBsZWREYXRhfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZUF0dGFjaG1lbnQ/OiBmaGlyLkF0dGFjaG1lbnR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbXBvbmVudC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZVRpbWU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gZXhpc3RzIHRvIGhhdmUgYSB2YWx1ZSwgdGhvdWdoIGl0IG1heSBub3QgaWYgaXQgaXMgaW4gZXJyb3IsIG9yIGl0IHJlcHJlc2VudHMgYSBncm91cCBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgdmFsdWVEYXRlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbXBvbmVudC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZURhdGVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlUGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBtYW55IHJlc3VsdHMgaXQgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBleGNlcHRpb25hbCB2YWx1ZXMgaW4gbWVhc3VyZW1lbnRzLlxyXG4gICAqL1xyXG4gIGRhdGFBYnNlbnRSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogS25vd2luZyB3aGF0IHZhbHVlcyBhcmUgY29uc2lkZXJlZCBcIm5vcm1hbFwiIGNhbiBoZWxwIGV2YWx1YXRlIHRoZSBzaWduaWZpY2FuY2Ugb2YgYSBwYXJ0aWN1bGFyIHJlc3VsdC4gTmVlZCB0byBiZSBhYmxlIHRvIHByb3ZpZGUgbXVsdGlwbGUgcmVmZXJlbmNlIHJhbmdlcyBmb3IgZGlmZmVyZW50IGNvbnRleHRzLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZVJhbmdlPzogKGZoaXIuT2JzZXJ2YXRpb25SZWZlcmVuY2VSYW5nZXxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lYXN1cmVtZW50cyBhbmQgc2ltcGxlIGFzc2VydGlvbnMgbWFkZSBhYm91dCBhIHBhdGllbnQsIGRldmljZSBvciBvdGhlciBzdWJqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2UgeyBcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiT2JzZXJ2YXRpb25cInxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBvYnNlcnZhdGlvbnMgdG8gYmUgZGlzdGluZ3Vpc2hlZCBhbmQgcmVmZXJlbmNlZC5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogKGZoaXIuSWRlbnRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIHRyYWNrIHRoZSBzdGF0dXMgb2YgaW5kaXZpZHVhbCByZXN1bHRzLiBTb21lIHJlc3VsdHMgYXJlIGZpbmFsaXplZCBiZWZvcmUgdGhlIHdob2xlIHJlcG9ydCBpcyBmaW5hbGl6ZWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYW1lbmRlZCd8J2NhbmNlbGxlZCd8J2VudGVyZWQtaW4tZXJyb3InfCdmaW5hbCd8J3ByZWxpbWluYXJ5J3wncmVnaXN0ZXJlZCd8J3Vua25vd24nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQSBjb2RlIHRoYXQgY2xhc3NpZmllcyB0aGUgZ2VuZXJhbCB0eXBlIG9mIG9ic2VydmF0aW9uIGJlaW5nIG1hZGUuICBUaGlzIGlzIHVzZWQgIGZvciBzZWFyY2hpbmcsIHNvcnRpbmcgYW5kIGRpc3BsYXkgcHVycG9zZXMuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogS25vd2luZyB3aGF0IGtpbmQgb2Ygb2JzZXJ2YXRpb24gaXMgYmVpbmcgbWFkZSBpcyBlc3NlbnRpYWwgdG8gdW5kZXJzdGFuZGluZyB0aGUgb2JzZXJ2YXRpb24uXHJcbiAgICovXHJcbiAgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBPYnNlcnZhdGlvbnMgaGF2ZSBubyB2YWx1ZSBpZiB5b3UgZG9uJ3Qga25vdyB3aG8gb3Igd2hhdCB0aGV5J3JlIGFib3V0LlxyXG4gICAqL1xyXG4gIHN1YmplY3Q/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIHNvbWUgb2JzZXJ2YXRpb25zIGl0IG1heSBiZSBpbXBvcnRhbnQgdG8ga25vdyB0aGUgbGluayBiZXR3ZWVuIGFuIG9ic2VydmF0aW9uIGFuZCBhIHBhcnRpY3VsYXIgZW5jb3VudGVyLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoZW4gYW4gb2JzZXJ2YXRpb24gd2FzIGRlZW1lZCB0cnVlIGlzIGltcG9ydGFudCB0byBpdHMgcmVsZXZhbmNlIGFzIHdlbGwgYXMgZGV0ZXJtaW5pbmcgdHJlbmRzLlxyXG4gICAqL1xyXG4gIGVmZmVjdGl2ZURhdGVUaW1lPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24uZWZmZWN0aXZlW3hdXHJcbiAgICovXHJcbiAgX2VmZmVjdGl2ZURhdGVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlbiBhbiBvYnNlcnZhdGlvbiB3YXMgZGVlbWVkIHRydWUgaXMgaW1wb3J0YW50IHRvIGl0cyByZWxldmFuY2UgYXMgd2VsbCBhcyBkZXRlcm1pbmluZyB0cmVuZHMuXHJcbiAgICovXHJcbiAgZWZmZWN0aXZlUGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHRoaXMgb2JzZXJ2YXRpb24gd2FzIG1hZGUgYXZhaWxhYmxlIHRvIHByb3ZpZGVycywgdHlwaWNhbGx5IGFmdGVyIHRoZSByZXN1bHRzIGhhdmUgYmVlbiByZXZpZXdlZCBhbmQgdmVyaWZpZWQuXHJcbiAgICovXHJcbiAgaXNzdWVkPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24uaXNzdWVkXHJcbiAgICovXHJcbiAgX2lzc3VlZD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBNYXkgZ2l2ZSBhIGRlZ3JlZSBvZiBjb25maWRlbmNlIGluIHRoZSBvYnNlcnZhdGlvbiBhbmQgYWxzbyBpbmRpY2F0ZXMgd2hlcmUgZm9sbG93LXVwIHF1ZXN0aW9ucyBzaG91bGQgYmUgZGlyZWN0ZWQuXHJcbiAgICovXHJcbiAgcGVyZm9ybWVyPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlUXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZUNvZGVhYmxlQ29uY2VwdD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZVN0cmluZz86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnZhbHVlW3hdXHJcbiAgICovXHJcbiAgX3ZhbHVlU3RyaW5nPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlUmFuZ2U/OiBmaGlyLlJhbmdlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBleGlzdHMgdG8gaGF2ZSBhIHZhbHVlLCB0aG91Z2ggaXQgbWF5IG5vdCBpZiBpdCBpcyBpbiBlcnJvciwgb3IgaXQgcmVwcmVzZW50cyBhIGdyb3VwIG9mIG9ic2VydmF0aW9ucy5cclxuICAgKi9cclxuICB2YWx1ZVJhdGlvPzogZmhpci5SYXRpb3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gZXhpc3RzIHRvIGhhdmUgYSB2YWx1ZSwgdGhvdWdoIGl0IG1heSBub3QgaWYgaXQgaXMgaW4gZXJyb3IsIG9yIGl0IHJlcHJlc2VudHMgYSBncm91cCBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgdmFsdWVTYW1wbGVkRGF0YT86IGZoaXIuU2FtcGxlZERhdGF8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlQXR0YWNobWVudD86IGZoaXIuQXR0YWNobWVudHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gZXhpc3RzIHRvIGhhdmUgYSB2YWx1ZSwgdGhvdWdoIGl0IG1heSBub3QgaWYgaXQgaXMgaW4gZXJyb3IsIG9yIGl0IHJlcHJlc2VudHMgYSBncm91cCBvZiBvYnNlcnZhdGlvbnMuXHJcbiAgICovXHJcbiAgdmFsdWVUaW1lPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24udmFsdWVbeF1cclxuICAgKi9cclxuICBfdmFsdWVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlRGF0ZVRpbWU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZURhdGVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIGV4aXN0cyB0byBoYXZlIGEgdmFsdWUsIHRob3VnaCBpdCBtYXkgbm90IGlmIGl0IGlzIGluIGVycm9yLCBvciBpdCByZXByZXNlbnRzIGEgZ3JvdXAgb2Ygb2JzZXJ2YXRpb25zLlxyXG4gICAqL1xyXG4gIHZhbHVlUGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBtYW55IHJlc3VsdHMgaXQgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBleGNlcHRpb25hbCB2YWx1ZXMgaW4gbWVhc3VyZW1lbnRzLlxyXG4gICAqL1xyXG4gIGRhdGFBYnNlbnRSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIHNvbWUgcmVzdWx0cywgcGFydGljdWxhcmx5IG51bWVyaWMgcmVzdWx0cywgYW4gaW50ZXJwcmV0YXRpb24gaXMgbmVjZXNzYXJ5IHRvIGZ1bGx5IHVuZGVyc3RhbmQgdGhlIHNpZ25pZmljYW5jZSBvZiBhIHJlc3VsdC5cclxuICAgKi9cclxuICBpbnRlcnByZXRhdGlvbj86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOZWVkIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBmcmVlIHRleHQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBjb21tZW50cz86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbW1lbnRzXHJcbiAgICovXHJcbiAgX2NvbW1lbnRzPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEtub3dpbmcgd2hlcmUgdGhlIG9ic2VydmF0aW9uIGlzIG1hZGUgaXMgaW1wb3J0YW50IGZvciB0cmFja2luZyBpZiBtdWx0aXBsZSBzaXRlcyBhcmUgcG9zc2libGUuXHJcbiAgICovXHJcbiAgYm9keVNpdGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSW4gc29tZSBjYXNlcywgbWV0aG9kIGNhbiBpbXBhY3QgcmVzdWx0cyBhbmQgaXMgdGh1cyB1c2VkIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHJlc3VsdHMgY2FuIGJlIGNvbXBhcmVkIG9yIGRldGVybWluaW5nIHNpZ25pZmljYW5jZSBvZiByZXN1bHRzLlxyXG4gICAqL1xyXG4gIG1ldGhvZD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgc3BlY2ltZW4gdGhhdCB3YXMgdXNlZCB3aGVuIHRoaXMgb2JzZXJ2YXRpb24gd2FzIG1hZGUuXHJcbiAgICovXHJcbiAgc3BlY2ltZW4/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRldmljZSB1c2VkIHRvIGdlbmVyYXRlIHRoZSBvYnNlcnZhdGlvbiBkYXRhLlxyXG4gICAqL1xyXG4gIGRldmljZT86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBLbm93aW5nIHdoYXQgdmFsdWVzIGFyZSBjb25zaWRlcmVkIFwibm9ybWFsXCIgY2FuIGhlbHAgZXZhbHVhdGUgdGhlIHNpZ25pZmljYW5jZSBvZiBhIHBhcnRpY3VsYXIgcmVzdWx0LiBOZWVkIHRvIGJlIGFibGUgdG8gcHJvdmlkZSBtdWx0aXBsZSByZWZlcmVuY2UgcmFuZ2VzIGZvciBkaWZmZXJlbnQgY29udGV4dHMuXHJcbiAgICovXHJcbiAgcmVmZXJlbmNlUmFuZ2U/OiAoZmhpci5PYnNlcnZhdGlvblJlZmVyZW5jZVJhbmdlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vcm1hbGx5LCBhbiBvYnNlcnZhdGlvbiB3aWxsIGhhdmUgZWl0aGVyIGEgdmFsdWUgb3IgYSBzZXQgb2YgcmVsYXRlZCBvYnNlcnZhdGlvbnMuIEEgZmV3IG9ic2VydmF0aW9ucyAoZS5nLiBBcGdhciBzY29yZSkgbWF5IGhhdmUgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9ic2VydmF0aW9ucyBvciBzb21ldGltZXMgUXVlc3Rpb25uYWlyZVJlc3BvbnNlICBmcm9tIHdoaWNoIHRoZSBtZWFzdXJlIGlzIGRlcml2ZWQuXHJcbiAgICovXHJcbiAgcmVsYXRlZD86IChmaGlyLk9ic2VydmF0aW9uUmVsYXRlZHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBDb21wb25lbnQgb2JzZXJ2YXRpb25zIHNoYXJlIHRoZSBzYW1lIGF0dHJpYnV0ZXMgaW4gdGhlIE9ic2VydmF0aW9uIHJlc291cmNlIGFzIHRoZSBwcmltYXJ5IG9ic2VydmF0aW9uIGFuZCBhcmUgYWx3YXlzIHRyZWF0ZWQgYSBwYXJ0IG9mIGEgc2luZ2xlIG9ic2VydmF0aW9uICh0aGV5IGFyZSBub3Qgc2VwYXJhYmxlKS4gICBIb3dldmVyLCB0aGUgcmVmZXJlbmNlIHJhbmdlIGZvciB0aGUgcHJpbWFyeSBvYnNlcnZhdGlvbiB2YWx1ZSBpcyBub3QgaW5oZXJpdGVkIGJ5IHRoZSBjb21wb25lbnQgdmFsdWVzIGFuZCBpcyByZXF1aXJlZCB3aGVuIGFwcHJvcHJpYXRlIGZvciBlYWNoIGNvbXBvbmVudCBvYnNlcnZhdGlvbi5cclxuICAgKi9cclxuICBjb21wb25lbnQ/OiAoZmhpci5PYnNlcnZhdGlvbkNvbXBvbmVudHxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG4iXX0=