// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Observation
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlySnNvbi9PYnNlcnZhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFJlc291cmNlOiBPYnNlcnZhdGlvblxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlySnNvbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIE1vc3Qgb2JzZXJ2YXRpb25zIG9ubHkgaGF2ZSBvbmUgZ2VuZXJpYyByZWZlcmVuY2UgcmFuZ2UuIFN5c3RlbXMgTUFZIGNob29zZSB0byByZXN0cmljdCB0byBvbmx5IHN1cHBseWluZyB0aGUgcmVsZXZhbnQgcmVmZXJlbmNlIHJhbmdlIGJhc2VkIG9uIGtub3dsZWRnZSBhYm91dCB0aGUgcGF0aWVudCAoZS5nLiwgc3BlY2lmaWMgdG8gdGhlIHBhdGllbnQncyBhZ2UsIGdlbmRlciwgd2VpZ2h0IGFuZCBvdGhlciBmYWN0b3JzKSwgYnV0IHRoaXMgbWlnaHQgbm90IGJlIHBvc3NpYmxlIG9yIGFwcHJvcHJpYXRlLiBXaGVuZXZlciBtb3JlIHRoYW4gb25lIHJlZmVyZW5jZSByYW5nZSBpcyBzdXBwbGllZCwgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbSBTSE9VTEQgYmUgcHJvdmlkZWQgaW4gdGhlIHJlZmVyZW5jZSByYW5nZSBhbmQvb3IgYWdlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmF0aW9uUmVmZXJlbmNlUmFuZ2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgbG93IGJvdW5kIG9mIHRoZSByZWZlcmVuY2UgcmFuZ2UuICBUaGUgbG93IGJvdW5kIG9mIHRoZSByZWZlcmVuY2UgcmFuZ2UgZW5kcG9pbnQgaXMgaW5jbHVzaXZlIG9mIHRoZSB2YWx1ZSAoZS5nLiAgcmVmZXJlbmNlIHJhbmdlIGlzICZndDs9NSAtICZsdDs9OSkuIElmIHRoZSBsb3cgYm91bmQgaXMgb21pdHRlZCwgIGl0IGlzIGFzc3VtZWQgdG8gYmUgbWVhbmluZ2xlc3MgKGUuZy4gcmVmZXJlbmNlIHJhbmdlIGlzICZsdDs9Mi4zKS5cclxuICAgKi9cclxuICBsb3c/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGhpZ2ggYm91bmQgb2YgdGhlIHJlZmVyZW5jZSByYW5nZS4gIFRoZSBoaWdoIGJvdW5kIG9mIHRoZSByZWZlcmVuY2UgcmFuZ2UgZW5kcG9pbnQgaXMgaW5jbHVzaXZlIG9mIHRoZSB2YWx1ZSAoZS5nLiAgcmVmZXJlbmNlIHJhbmdlIGlzICZndDs9NSAtICZsdDs9OSkuIElmIHRoZSBoaWdoIGJvdW5kIGlzIG9taXR0ZWQsICBpdCBpcyBhc3N1bWVkIHRvIGJlIG1lYW5pbmdsZXNzIChlLmcuIHJlZmVyZW5jZSByYW5nZSBpcyAmZ3Q7PSAyLjMpLlxyXG4gICAqL1xyXG4gIGhpZ2g/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIFNIT1VMRCBiZSBwb3B1bGF0ZWQgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSByYW5nZS4gIElmIHRoaXMgZWxlbWVudCBpcyBub3QgcHJlc2VudCB0aGVuIHRoZSBub3JtYWwgcmFuZ2UgaXMgYXNzdW1lZC5cclxuICAgKi9cclxuICB0eXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgU0hPVUxEIGJlIHBvcHVsYXRlZCBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHJhbmdlLiAgSWYgdGhpcyBlbGVtZW50IGlzIG5vdCBwcmVzZW50IHRoZW4gdGhlIG5vcm1hbCBwb3B1bGF0aW9uIGlzIGFzc3VtZWQuXHJcbiAgICovXHJcbiAgYXBwbGllc1RvPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhZ2UgYXQgd2hpY2ggdGhpcyByZWZlcmVuY2UgcmFuZ2UgaXMgYXBwbGljYWJsZS4gVGhpcyBpcyBhIG5lb25hdGFsIGFnZSAoZS5nLiBudW1iZXIgb2Ygd2Vla3MgYXQgdGVybSkgaWYgdGhlIG1lYW5pbmcgc2F5cyBzby5cclxuICAgKi9cclxuICBhZ2U/OiBmaGlyLlJhbmdlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUZXh0IGJhc2VkIHJlZmVyZW5jZSByYW5nZSBpbiBhbiBvYnNlcnZhdGlvbiB3aGljaCBtYXkgYmUgdXNlZCB3aGVuIGEgcXVhbnRpdGF0aXZlIHJhbmdlIGlzIG5vdCBhcHByb3ByaWF0ZSBmb3IgYW4gb2JzZXJ2YXRpb24uICBBbiBleGFtcGxlIHdvdWxkIGJlIGEgcmVmZXJlbmNlIHZhbHVlIG9mIFwiTmVnYXRpdmVcIiBvciBhIGxpc3Qgb3IgdGFibGUgb2YgXCJub3JtYWxzXCIuXHJcbiAgICovXHJcbiAgdGV4dD86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnJlZmVyZW5jZVJhbmdlLnRleHRcclxuICAgKi9cclxuICBfdGV4dD86Zmhpci5GaGlyRWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvciBhIGRpc2N1c3Npb24gb24gdGhlIHdheXMgT2JzZXJ2YXRpb25zIGNhbiBiZSBhc3NlbWJsZWQgaW4gZ3JvdXBzIHRvZ2V0aGVyIHNlZSBbTm90ZXNdKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhdGlvbkNvbXBvbmVudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogKkFsbCogY29kZS12YWx1ZSBhbmQgIGNvbXBvbmVudC5jb2RlLWNvbXBvbmVudC52YWx1ZSBwYWlycyBuZWVkIHRvIGJlIHRha2VuIGludG8gYWNjb3VudCB0byBjb3JyZWN0bHkgdW5kZXJzdGFuZCB0aGUgbWVhbmluZyBvZiB0aGUgb2JzZXJ2YXRpb24uXHJcbiAgICovXHJcbiAgY29kZTogZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbDtcclxuICAvKipcclxuICAgKiBVc2VkIHdoZW4gb2JzZXJ2YXRpb24gaGFzIGEgc2V0IG9mIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMuIEFuIG9ic2VydmF0aW9uIG1heSBoYXZlIGJvdGggYSB2YWx1ZSAoZS5nLiBhbiAgQXBnYXIgc2NvcmUpICBhbmQgY29tcG9uZW50IG9ic2VydmF0aW9ucyAodGhlIG9ic2VydmF0aW9ucyBmcm9tIHdoaWNoIHRoZSBBcGdhciBzY29yZSB3YXMgZGVyaXZlZCkuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlUXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBVc2VkIHdoZW4gb2JzZXJ2YXRpb24gaGFzIGEgc2V0IG9mIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMuIEFuIG9ic2VydmF0aW9uIG1heSBoYXZlIGJvdGggYSB2YWx1ZSAoZS5nLiBhbiAgQXBnYXIgc2NvcmUpICBhbmQgY29tcG9uZW50IG9ic2VydmF0aW9ucyAodGhlIG9ic2VydmF0aW9ucyBmcm9tIHdoaWNoIHRoZSBBcGdhciBzY29yZSB3YXMgZGVyaXZlZCkuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgd2hlbiBvYnNlcnZhdGlvbiBoYXMgYSBzZXQgb2YgY29tcG9uZW50IG9ic2VydmF0aW9ucy4gQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmUgYm90aCBhIHZhbHVlIChlLmcuIGFuICBBcGdhciBzY29yZSkgIGFuZCBjb21wb25lbnQgb2JzZXJ2YXRpb25zICh0aGUgb2JzZXJ2YXRpb25zIGZyb20gd2hpY2ggdGhlIEFwZ2FyIHNjb3JlIHdhcyBkZXJpdmVkKS4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiBBIENvZGVhYmxlQ29uY2VwdCB3aXRoIGp1c3QgYSB0ZXh0IHdvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBhIHN0cmluZyBpZiB0aGUgZmllbGQgd2FzIHVzdWFsbHkgY29kZWQsIG9yIGlmIHRoZSB0eXBlIGFzc29jaWF0ZWQgd2l0aCB0aGUgT2JzZXJ2YXRpb24uY29kZSBkZWZpbmVzIGEgY29kZWQgdmFsdWUuICBGb3IgYWRkaXRpb25hbCBndWlkYW5jZSwgc2VlIHRoZSBbTm90ZXMgc2VjdGlvbl0ob2JzZXJ2YXRpb24uaHRtbCNub3RlcykgYmVsb3cuXHJcbiAgICovXHJcbiAgdmFsdWVTdHJpbmc/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi5jb21wb25lbnQudmFsdWVbeF1cclxuICAgKi9cclxuICBfdmFsdWVTdHJpbmc/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB3aGVuIG9ic2VydmF0aW9uIGhhcyBhIHNldCBvZiBjb21wb25lbnQgb2JzZXJ2YXRpb25zLiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZSBib3RoIGEgdmFsdWUgKGUuZy4gYW4gIEFwZ2FyIHNjb3JlKSAgYW5kIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgKHRoZSBvYnNlcnZhdGlvbnMgZnJvbSB3aGljaCB0aGUgQXBnYXIgc2NvcmUgd2FzIGRlcml2ZWQpLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZUJvb2xlYW4/OiBib29sZWFufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24uY29tcG9uZW50LnZhbHVlW3hdXHJcbiAgICovXHJcbiAgX3ZhbHVlQm9vbGVhbj86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBVc2VkIHdoZW4gb2JzZXJ2YXRpb24gaGFzIGEgc2V0IG9mIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMuIEFuIG9ic2VydmF0aW9uIG1heSBoYXZlIGJvdGggYSB2YWx1ZSAoZS5nLiBhbiAgQXBnYXIgc2NvcmUpICBhbmQgY29tcG9uZW50IG9ic2VydmF0aW9ucyAodGhlIG9ic2VydmF0aW9ucyBmcm9tIHdoaWNoIHRoZSBBcGdhciBzY29yZSB3YXMgZGVyaXZlZCkuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlSW50ZWdlcj86IG51bWJlcnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbXBvbmVudC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZUludGVnZXI/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB3aGVuIG9ic2VydmF0aW9uIGhhcyBhIHNldCBvZiBjb21wb25lbnQgb2JzZXJ2YXRpb25zLiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZSBib3RoIGEgdmFsdWUgKGUuZy4gYW4gIEFwZ2FyIHNjb3JlKSAgYW5kIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgKHRoZSBvYnNlcnZhdGlvbnMgZnJvbSB3aGljaCB0aGUgQXBnYXIgc2NvcmUgd2FzIGRlcml2ZWQpLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB3aGVuIG9ic2VydmF0aW9uIGhhcyBhIHNldCBvZiBjb21wb25lbnQgb2JzZXJ2YXRpb25zLiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZSBib3RoIGEgdmFsdWUgKGUuZy4gYW4gIEFwZ2FyIHNjb3JlKSAgYW5kIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgKHRoZSBvYnNlcnZhdGlvbnMgZnJvbSB3aGljaCB0aGUgQXBnYXIgc2NvcmUgd2FzIGRlcml2ZWQpLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVJhdGlvPzogZmhpci5SYXRpb3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB3aGVuIG9ic2VydmF0aW9uIGhhcyBhIHNldCBvZiBjb21wb25lbnQgb2JzZXJ2YXRpb25zLiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZSBib3RoIGEgdmFsdWUgKGUuZy4gYW4gIEFwZ2FyIHNjb3JlKSAgYW5kIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgKHRoZSBvYnNlcnZhdGlvbnMgZnJvbSB3aGljaCB0aGUgQXBnYXIgc2NvcmUgd2FzIGRlcml2ZWQpLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVNhbXBsZWREYXRhPzogZmhpci5TYW1wbGVkRGF0YXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB3aGVuIG9ic2VydmF0aW9uIGhhcyBhIHNldCBvZiBjb21wb25lbnQgb2JzZXJ2YXRpb25zLiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZSBib3RoIGEgdmFsdWUgKGUuZy4gYW4gIEFwZ2FyIHNjb3JlKSAgYW5kIGNvbXBvbmVudCBvYnNlcnZhdGlvbnMgKHRoZSBvYnNlcnZhdGlvbnMgZnJvbSB3aGljaCB0aGUgQXBnYXIgc2NvcmUgd2FzIGRlcml2ZWQpLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVRpbWU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi5jb21wb25lbnQudmFsdWVbeF1cclxuICAgKi9cclxuICBfdmFsdWVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgd2hlbiBvYnNlcnZhdGlvbiBoYXMgYSBzZXQgb2YgY29tcG9uZW50IG9ic2VydmF0aW9ucy4gQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmUgYm90aCBhIHZhbHVlIChlLmcuIGFuICBBcGdhciBzY29yZSkgIGFuZCBjb21wb25lbnQgb2JzZXJ2YXRpb25zICh0aGUgb2JzZXJ2YXRpb25zIGZyb20gd2hpY2ggdGhlIEFwZ2FyIHNjb3JlIHdhcyBkZXJpdmVkKS4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiBBIENvZGVhYmxlQ29uY2VwdCB3aXRoIGp1c3QgYSB0ZXh0IHdvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBhIHN0cmluZyBpZiB0aGUgZmllbGQgd2FzIHVzdWFsbHkgY29kZWQsIG9yIGlmIHRoZSB0eXBlIGFzc29jaWF0ZWQgd2l0aCB0aGUgT2JzZXJ2YXRpb24uY29kZSBkZWZpbmVzIGEgY29kZWQgdmFsdWUuICBGb3IgYWRkaXRpb25hbCBndWlkYW5jZSwgc2VlIHRoZSBbTm90ZXMgc2VjdGlvbl0ob2JzZXJ2YXRpb24uaHRtbCNub3RlcykgYmVsb3cuXHJcbiAgICovXHJcbiAgdmFsdWVEYXRlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmNvbXBvbmVudC52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZURhdGVUaW1lPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgd2hlbiBvYnNlcnZhdGlvbiBoYXMgYSBzZXQgb2YgY29tcG9uZW50IG9ic2VydmF0aW9ucy4gQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmUgYm90aCBhIHZhbHVlIChlLmcuIGFuICBBcGdhciBzY29yZSkgIGFuZCBjb21wb25lbnQgb2JzZXJ2YXRpb25zICh0aGUgb2JzZXJ2YXRpb25zIGZyb20gd2hpY2ggdGhlIEFwZ2FyIHNjb3JlIHdhcyBkZXJpdmVkKS4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiBBIENvZGVhYmxlQ29uY2VwdCB3aXRoIGp1c3QgYSB0ZXh0IHdvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBhIHN0cmluZyBpZiB0aGUgZmllbGQgd2FzIHVzdWFsbHkgY29kZWQsIG9yIGlmIHRoZSB0eXBlIGFzc29jaWF0ZWQgd2l0aCB0aGUgT2JzZXJ2YXRpb24uY29kZSBkZWZpbmVzIGEgY29kZWQgdmFsdWUuICBGb3IgYWRkaXRpb25hbCBndWlkYW5jZSwgc2VlIHRoZSBbTm90ZXMgc2VjdGlvbl0ob2JzZXJ2YXRpb24uaHRtbCNub3RlcykgYmVsb3cuXHJcbiAgICovXHJcbiAgdmFsdWVQZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogXCJOdWxsXCIgb3IgZXhjZXB0aW9uYWwgdmFsdWVzIGNhbiBiZSByZXByZXNlbnRlZCB0d28gd2F5cyBpbiBGSElSIE9ic2VydmF0aW9ucy4gIE9uZSB3YXkgaXMgdG8gc2ltcGx5IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFsdWUgc2V0IGFuZCByZXByZXNlbnQgdGhlIGV4Y2VwdGlvbnMgaW4gdGhlIHZhbHVlLiAgRm9yIGV4YW1wbGUsIG1lYXN1cmVtZW50IHZhbHVlcyBmb3IgYSBzZXJvbG9neSB0ZXN0IGNvdWxkIGJlICBcImRldGVjdGVkXCIsIFwibm90IGRldGVjdGVkXCIsIFwiaW5jb25jbHVzaXZlXCIsIG9yICBcInRlc3Qgbm90IGRvbmVcIi4gXHJcbiAgICogVGhlIGFsdGVybmF0ZSB3YXkgaXMgdG8gdXNlIHRoZSB2YWx1ZSBlbGVtZW50IGZvciBhY3R1YWwgb2JzZXJ2YXRpb25zIGFuZCB1c2UgdGhlIGV4cGxpY2l0IGRhdGFBYnNlbnRSZWFzb24gZWxlbWVudCB0byByZWNvcmQgZXhjZXB0aW9uYWwgdmFsdWVzLiAgRm9yIGV4YW1wbGUsIHRoZSBkYXRhQWJzZW50UmVhc29uIGNvZGUgXCJlcnJvclwiIGNvdWxkIGJlIHVzZWQgd2hlbiB0aGUgbWVhc3VyZW1lbnQgd2FzIG5vdCBjb21wbGV0ZWQuICBCZWNhdXNlIG9mIHRoZXNlIG9wdGlvbnMsIHVzZS1jYXNlIGFncmVlbWVudHMgYXJlIHJlcXVpcmVkIHRvIGludGVycHJldCBnZW5lcmFsIG9ic2VydmF0aW9ucyBmb3IgZXhjZXB0aW9uYWwgdmFsdWVzLlxyXG4gICAqL1xyXG4gIGRhdGFBYnNlbnRSZWFzb24/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogSGlzdG9yaWNhbGx5IHVzZWQgZm9yIGxhYm9yYXRvcnkgcmVzdWx0cyAoa25vd24gYXMgJ2Fibm9ybWFsIGZsYWcnICksICBpdHMgdXNlIGV4dGVuZHMgdG8gb3RoZXIgdXNlIGNhc2VzIHdoZXJlIGNvZGVkIGludGVycHJldGF0aW9ucyAgYXJlIHJlbGV2YW50LiAgT2Z0ZW4gcmVwb3J0ZWQgYXMgb25lIG9yIG1vcmUgc2ltcGxlIGNvbXBhY3QgY29kZXMgdGhpcyBlbGVtZW50IGlzIG9mdGVuIHBsYWNlZCBhZGphY2VudCB0byB0aGUgcmVzdWx0IHZhbHVlIGluIHJlcG9ydHMgYW5kIGZsb3cgc2hlZXRzIHRvIHNpZ25hbCB0aGUgbWVhbmluZy9ub3JtYWxjeSBzdGF0dXMgb2YgdGhlIHJlc3VsdC5cclxuICAgKi9cclxuICBpbnRlcnByZXRhdGlvbj86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBNb3N0IG9ic2VydmF0aW9ucyBvbmx5IGhhdmUgb25lIGdlbmVyaWMgcmVmZXJlbmNlIHJhbmdlLiBTeXN0ZW1zIE1BWSBjaG9vc2UgdG8gcmVzdHJpY3QgdG8gb25seSBzdXBwbHlpbmcgdGhlIHJlbGV2YW50IHJlZmVyZW5jZSByYW5nZSBiYXNlZCBvbiBrbm93bGVkZ2UgYWJvdXQgdGhlIHBhdGllbnQgKGUuZy4sIHNwZWNpZmljIHRvIHRoZSBwYXRpZW50J3MgYWdlLCBnZW5kZXIsIHdlaWdodCBhbmQgb3RoZXIgZmFjdG9ycyksIGJ1dCB0aGlzIG1pZ2h0IG5vdCBiZSBwb3NzaWJsZSBvciBhcHByb3ByaWF0ZS4gV2hlbmV2ZXIgbW9yZSB0aGFuIG9uZSByZWZlcmVuY2UgcmFuZ2UgaXMgc3VwcGxpZWQsIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZW0gU0hPVUxEIGJlIHByb3ZpZGVkIGluIHRoZSByZWZlcmVuY2UgcmFuZ2UgYW5kL29yIGFnZSBwcm9wZXJ0aWVzLlxyXG4gICAqL1xyXG4gIHJlZmVyZW5jZVJhbmdlPzogKGZoaXIuT2JzZXJ2YXRpb25SZWZlcmVuY2VSYW5nZXxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1lYXN1cmVtZW50cyBhbmQgc2ltcGxlIGFzc2VydGlvbnMgbWFkZSBhYm91dCBhIHBhdGllbnQsIGRldmljZSBvciBvdGhlciBzdWJqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhdGlvbiBleHRlbmRzIGZoaXIuRG9tYWluUmVzb3VyY2UgeyBcclxuICAvKipcclxuICAgKiBSZXNvdXJjZSBUeXBlIE5hbWVcclxuICAgKi9cclxuICByZXNvdXJjZVR5cGU6IFwiT2JzZXJ2YXRpb25cInxudWxsO1xyXG4gIC8qKlxyXG4gICAqIEEgdW5pcXVlIGlkZW50aWZpZXIgYXNzaWduZWQgdG8gdGhpcyBvYnNlcnZhdGlvbi5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogKGZoaXIuSWRlbnRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBIHBsYW4sIHByb3Bvc2FsIG9yIG9yZGVyIHRoYXQgaXMgZnVsZmlsbGVkIGluIHdob2xlIG9yIGluIHBhcnQgYnkgdGhpcyBldmVudC4gIEZvciBleGFtcGxlLCBhIE1lZGljYXRpb25SZXF1ZXN0IG1heSByZXF1aXJlIGEgcGF0aWVudCB0byBoYXZlIGxhYm9yYXRvcnkgdGVzdCBwZXJmb3JtZWQgYmVmb3JlICBpdCBpcyBkaXNwZW5zZWQuXHJcbiAgICovXHJcbiAgYmFzZWRPbj86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUbyBsaW5rIGFuIE9ic2VydmF0aW9uIHRvIGFuIEVuY291bnRlciB1c2UgYGVuY291bnRlcmAuICBTZWUgdGhlICBbTm90ZXNdKG9ic2VydmF0aW9uLmh0bWwjb2JzZ3JvdXBpbmcpIGJlbG93IGZvciBndWlkYW5jZSBvbiByZWZlcmVuY2luZyBhbm90aGVyIE9ic2VydmF0aW9uLlxyXG4gICAqL1xyXG4gIHBhcnRPZj86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGlzIGVsZW1lbnQgaXMgbGFiZWxlZCBhcyBhIG1vZGlmaWVyIGJlY2F1c2UgdGhlIHN0YXR1cyBjb250YWlucyBjb2RlcyB0aGF0IG1hcmsgdGhlIHJlc291cmNlIGFzIG5vdCBjdXJyZW50bHkgdmFsaWQuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYW1lbmRlZCd8J2NhbmNlbGxlZCd8J2NvcnJlY3RlZCd8J2VudGVyZWQtaW4tZXJyb3InfCdmaW5hbCd8J3ByZWxpbWluYXJ5J3wncmVnaXN0ZXJlZCd8J3Vua25vd24nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLnN0YXR1c1xyXG4gICAqL1xyXG4gIF9zdGF0dXM/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogSW4gYWRkaXRpb24gdG8gdGhlIHJlcXVpcmVkIGNhdGVnb3J5IHZhbHVlc2V0LCB0aGlzIGVsZW1lbnQgYWxsb3dzIHZhcmlvdXMgY2F0ZWdvcml6YXRpb24gc2NoZW1lcyBiYXNlZCBvbiB0aGUgb3duZXLigJlzIGRlZmluaXRpb24gb2YgdGhlIGNhdGVnb3J5IGFuZCBlZmZlY3RpdmVseSBtdWx0aXBsZSBjYXRlZ29yaWVzIGNhbiBiZSB1c2VkIGF0IG9uY2UuICBUaGUgbGV2ZWwgb2YgZ3JhbnVsYXJpdHkgaXMgZGVmaW5lZCBieSB0aGUgY2F0ZWdvcnkgY29uY2VwdHMgaW4gdGhlIHZhbHVlIHNldC5cclxuICAgKi9cclxuICBjYXRlZ29yeT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiAqQWxsKiBjb2RlLXZhbHVlIGFuZCwgaWYgcHJlc2VudCwgY29tcG9uZW50LmNvZGUtY29tcG9uZW50LnZhbHVlIHBhaXJzIG5lZWQgdG8gYmUgdGFrZW4gaW50byBhY2NvdW50IHRvIGNvcnJlY3RseSB1bmRlcnN0YW5kIHRoZSBtZWFuaW5nIG9mIHRoZSBvYnNlcnZhdGlvbi5cclxuICAgKi9cclxuICBjb2RlOiBmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsO1xyXG4gIC8qKlxyXG4gICAqIE9uZSB3b3VsZCBleHBlY3QgdGhpcyBlbGVtZW50IHRvIGJlIGEgY2FyZGluYWxpdHkgb2YgMS4uMS4gVGhlIG9ubHkgY2lyY3Vtc3RhbmNlIGluIHdoaWNoIHRoZSBzdWJqZWN0IGNhbiBiZSBtaXNzaW5nIGlzIHdoZW4gdGhlIG9ic2VydmF0aW9uIGlzIG1hZGUgYnkgYSBkZXZpY2UgdGhhdCBkb2VzIG5vdCBrbm93IHRoZSBwYXRpZW50LiBJbiB0aGlzIGNhc2UsIHRoZSBvYnNlcnZhdGlvbiBTSEFMTCBiZSBtYXRjaGVkIHRvIGEgcGF0aWVudCB0aHJvdWdoIHNvbWUgY29udGV4dC9jaGFubmVsIG1hdGNoaW5nIHRlY2huaXF1ZSwgYW5kIGF0IHRoaXMgcG9pbnQsIHRoZSBvYnNlcnZhdGlvbiBzaG91bGQgYmUgdXBkYXRlZC5cclxuICAgKi9cclxuICBzdWJqZWN0PzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFR5cGljYWxseSwgYW4gb2JzZXJ2YXRpb24gaXMgbWFkZSBhYm91dCB0aGUgc3ViamVjdCAtIGEgcGF0aWVudCwgb3IgZ3JvdXAgb2YgcGF0aWVudHMsIGxvY2F0aW9uLCBvciBkZXZpY2UgLSBhbmQgdGhlIGRpc3RpbmN0aW9uIGJldHdlZW4gdGhlIHN1YmplY3QgYW5kIHdoYXQgaXMgZGlyZWN0bHkgbWVhc3VyZWQgZm9yIGFuIG9ic2VydmF0aW9uIGlzIHNwZWNpZmllZCBpbiB0aGUgb2JzZXJ2YXRpb24gY29kZSBpdHNlbGYgKCBlLmcuLCBcIkJsb29kIEdsdWNvc2VcIikgYW5kIGRvZXMgbm90IG5lZWQgdG8gYmUgcmVwcmVzZW50ZWQgc2VwYXJhdGVseSB1c2luZyB0aGlzIGVsZW1lbnQuICBVc2UgYHNwZWNpbWVuYCBpZiBhIHJlZmVyZW5jZSB0byBhIHNwZWNpbWVuIGlzIHJlcXVpcmVkLiAgSWYgYSBjb2RlIGlzIHJlcXVpcmVkIGluc3RlYWQgb2YgYSByZXNvdXJjZSB1c2UgZWl0aGVyICBgYm9keXNpdGVgIGZvciBib2R5c2l0ZXMgb3IgdGhlIHN0YW5kYXJkIGV4dGVuc2lvbiBbZm9jdXNDb2RlXShleHRlbnNpb24tb2JzZXJ2YXRpb24tZm9jdXNjb2RlLmh0bWwpLlxyXG4gICAqL1xyXG4gIGZvY3VzPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCB0eXBpY2FsbHkgYmUgdGhlIGVuY291bnRlciB0aGUgZXZlbnQgb2NjdXJyZWQgd2l0aGluLCBidXQgc29tZSBldmVudHMgbWF5IGJlIGluaXRpYXRlZCBwcmlvciB0byBvciBhZnRlciB0aGUgb2ZmaWNpYWwgY29tcGxldGlvbiBvZiBhbiBlbmNvdW50ZXIgYnV0IHN0aWxsIGJlIHRpZWQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGVuY291bnRlciAoZS5nLiBwcmUtYWRtaXNzaW9uIGxhYm9yYXRvcnkgdGVzdHMpLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBdCBsZWFzdCBhIGRhdGUgc2hvdWxkIGJlIHByZXNlbnQgdW5sZXNzIHRoaXMgb2JzZXJ2YXRpb24gaXMgYSBoaXN0b3JpY2FsIHJlcG9ydC4gIEZvciByZWNvcmRpbmcgaW1wcmVjaXNlIG9yIFwiZnV6enlcIiB0aW1lcyAoRm9yIGV4YW1wbGUsIGEgYmxvb2QgZ2x1Y29zZSBtZWFzdXJlbWVudCB0YWtlbiBcImFmdGVyIGJyZWFrZmFzdFwiKSB1c2UgdGhlIFtUaW1pbmddKGRhdGF0eXBlcy5odG1sI3RpbWluZykgZGF0YXR5cGUgd2hpY2ggYWxsb3cgdGhlIG1lYXN1cmVtZW50IHRvIGJlIHRpZWQgdG8gcmVndWxhciBsaWZlIGV2ZW50cy5cclxuICAgKi9cclxuICBlZmZlY3RpdmVEYXRlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IE9ic2VydmF0aW9uLmVmZmVjdGl2ZVt4XVxyXG4gICAqL1xyXG4gIF9lZmZlY3RpdmVEYXRlVGltZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBdCBsZWFzdCBhIGRhdGUgc2hvdWxkIGJlIHByZXNlbnQgdW5sZXNzIHRoaXMgb2JzZXJ2YXRpb24gaXMgYSBoaXN0b3JpY2FsIHJlcG9ydC4gIEZvciByZWNvcmRpbmcgaW1wcmVjaXNlIG9yIFwiZnV6enlcIiB0aW1lcyAoRm9yIGV4YW1wbGUsIGEgYmxvb2QgZ2x1Y29zZSBtZWFzdXJlbWVudCB0YWtlbiBcImFmdGVyIGJyZWFrZmFzdFwiKSB1c2UgdGhlIFtUaW1pbmddKGRhdGF0eXBlcy5odG1sI3RpbWluZykgZGF0YXR5cGUgd2hpY2ggYWxsb3cgdGhlIG1lYXN1cmVtZW50IHRvIGJlIHRpZWQgdG8gcmVndWxhciBsaWZlIGV2ZW50cy5cclxuICAgKi9cclxuICBlZmZlY3RpdmVQZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQXQgbGVhc3QgYSBkYXRlIHNob3VsZCBiZSBwcmVzZW50IHVubGVzcyB0aGlzIG9ic2VydmF0aW9uIGlzIGEgaGlzdG9yaWNhbCByZXBvcnQuICBGb3IgcmVjb3JkaW5nIGltcHJlY2lzZSBvciBcImZ1enp5XCIgdGltZXMgKEZvciBleGFtcGxlLCBhIGJsb29kIGdsdWNvc2UgbWVhc3VyZW1lbnQgdGFrZW4gXCJhZnRlciBicmVha2Zhc3RcIikgdXNlIHRoZSBbVGltaW5nXShkYXRhdHlwZXMuaHRtbCN0aW1pbmcpIGRhdGF0eXBlIHdoaWNoIGFsbG93IHRoZSBtZWFzdXJlbWVudCB0byBiZSB0aWVkIHRvIHJlZ3VsYXIgbGlmZSBldmVudHMuXHJcbiAgICovXHJcbiAgZWZmZWN0aXZlVGltaW5nPzogZmhpci5UaW1pbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEF0IGxlYXN0IGEgZGF0ZSBzaG91bGQgYmUgcHJlc2VudCB1bmxlc3MgdGhpcyBvYnNlcnZhdGlvbiBpcyBhIGhpc3RvcmljYWwgcmVwb3J0LiAgRm9yIHJlY29yZGluZyBpbXByZWNpc2Ugb3IgXCJmdXp6eVwiIHRpbWVzIChGb3IgZXhhbXBsZSwgYSBibG9vZCBnbHVjb3NlIG1lYXN1cmVtZW50IHRha2VuIFwiYWZ0ZXIgYnJlYWtmYXN0XCIpIHVzZSB0aGUgW1RpbWluZ10oZGF0YXR5cGVzLmh0bWwjdGltaW5nKSBkYXRhdHlwZSB3aGljaCBhbGxvdyB0aGUgbWVhc3VyZW1lbnQgdG8gYmUgdGllZCB0byByZWd1bGFyIGxpZmUgZXZlbnRzLlxyXG4gICAqL1xyXG4gIGVmZmVjdGl2ZUluc3RhbnQ/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi5lZmZlY3RpdmVbeF1cclxuICAgKi9cclxuICBfZWZmZWN0aXZlSW5zdGFudD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBGb3IgT2JzZXJ2YXRpb25zIHRoYXQgZG9u4oCZdCByZXF1aXJlIHJldmlldyBhbmQgdmVyaWZpY2F0aW9uLCBpdCBtYXkgYmUgdGhlIHNhbWUgYXMgdGhlIFtgbGFzdFVwZGF0ZWRgIF0ocmVzb3VyY2UtZGVmaW5pdGlvbnMuaHRtbCNNZXRhLmxhc3RVcGRhdGVkKSB0aW1lIG9mIHRoZSByZXNvdXJjZSBpdHNlbGYuICBGb3IgT2JzZXJ2YXRpb25zIHRoYXQgZG8gcmVxdWlyZSByZXZpZXcgYW5kIHZlcmlmaWNhdGlvbiBmb3IgY2VydGFpbiB1cGRhdGVzLCBpdCBtaWdodCBub3QgYmUgdGhlIHNhbWUgYXMgdGhlIGBsYXN0VXBkYXRlZGAgdGltZSBvZiB0aGUgcmVzb3VyY2UgaXRzZWxmIGR1ZSB0byBhIG5vbi1jbGluaWNhbGx5IHNpZ25pZmljYW50IHVwZGF0ZSB0aGF0IGRvZXNu4oCZdCByZXF1aXJlIHRoZSBuZXcgdmVyc2lvbiB0byBiZSByZXZpZXdlZCBhbmQgdmVyaWZpZWQgYWdhaW4uXHJcbiAgICovXHJcbiAgaXNzdWVkPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24uaXNzdWVkXHJcbiAgICovXHJcbiAgX2lzc3VlZD86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBXaG8gd2FzIHJlc3BvbnNpYmxlIGZvciBhc3NlcnRpbmcgdGhlIG9ic2VydmVkIHZhbHVlIGFzIFwidHJ1ZVwiLlxyXG4gICAqL1xyXG4gIHBlcmZvcm1lcj86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZTsgMSkgIGEgc2luZ2xlIHZhbHVlIGhlcmUsIDIpICBib3RoIGEgdmFsdWUgYW5kIGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcywgIG9yIDMpICBvbmx5IGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiAgQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlUXVhbnRpdHk/OiBmaGlyLlF1YW50aXR5fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZTsgMSkgIGEgc2luZ2xlIHZhbHVlIGhlcmUsIDIpICBib3RoIGEgdmFsdWUgYW5kIGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcywgIG9yIDMpICBvbmx5IGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiAgQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlQ29kZWFibGVDb25jZXB0PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmF0aW9uIG1heSBoYXZlOyAxKSAgYSBzaW5nbGUgdmFsdWUgaGVyZSwgMikgIGJvdGggYSB2YWx1ZSBhbmQgYSBzZXQgb2YgcmVsYXRlZCBvciBjb21wb25lbnQgdmFsdWVzLCAgb3IgMykgIG9ubHkgYSBzZXQgb2YgcmVsYXRlZCBvciBjb21wb25lbnQgdmFsdWVzLiBJZiBhIHZhbHVlIGlzIHByZXNlbnQsIHRoZSBkYXRhdHlwZSBmb3IgdGhpcyBlbGVtZW50IHNob3VsZCBiZSBkZXRlcm1pbmVkIGJ5IE9ic2VydmF0aW9uLmNvZGUuICBBIENvZGVhYmxlQ29uY2VwdCB3aXRoIGp1c3QgYSB0ZXh0IHdvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBhIHN0cmluZyBpZiB0aGUgZmllbGQgd2FzIHVzdWFsbHkgY29kZWQsIG9yIGlmIHRoZSB0eXBlIGFzc29jaWF0ZWQgd2l0aCB0aGUgT2JzZXJ2YXRpb24uY29kZSBkZWZpbmVzIGEgY29kZWQgdmFsdWUuICBGb3IgYWRkaXRpb25hbCBndWlkYW5jZSwgc2VlIHRoZSBbTm90ZXMgc2VjdGlvbl0ob2JzZXJ2YXRpb24uaHRtbCNub3RlcykgYmVsb3cuXHJcbiAgICovXHJcbiAgdmFsdWVTdHJpbmc/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZVN0cmluZz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZTsgMSkgIGEgc2luZ2xlIHZhbHVlIGhlcmUsIDIpICBib3RoIGEgdmFsdWUgYW5kIGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcywgIG9yIDMpICBvbmx5IGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiAgQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlQm9vbGVhbj86IGJvb2xlYW58dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZUJvb2xlYW4/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZUludGVnZXI/OiBudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZUludGVnZXI/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVJhdGlvPzogZmhpci5SYXRpb3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVNhbXBsZWREYXRhPzogZmhpci5TYW1wbGVkRGF0YXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZVRpbWU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBPYnNlcnZhdGlvbi52YWx1ZVt4XVxyXG4gICAqL1xyXG4gIF92YWx1ZVRpbWU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YXRpb24gbWF5IGhhdmU7IDEpICBhIHNpbmdsZSB2YWx1ZSBoZXJlLCAyKSAgYm90aCBhIHZhbHVlIGFuZCBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMsICBvciAzKSAgb25seSBhIHNldCBvZiByZWxhdGVkIG9yIGNvbXBvbmVudCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgcHJlc2VudCwgdGhlIGRhdGF0eXBlIGZvciB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlIGRldGVybWluZWQgYnkgT2JzZXJ2YXRpb24uY29kZS4gIEEgQ29kZWFibGVDb25jZXB0IHdpdGgganVzdCBhIHRleHQgd291bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIGEgc3RyaW5nIGlmIHRoZSBmaWVsZCB3YXMgdXN1YWxseSBjb2RlZCwgb3IgaWYgdGhlIHR5cGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBPYnNlcnZhdGlvbi5jb2RlIGRlZmluZXMgYSBjb2RlZCB2YWx1ZS4gIEZvciBhZGRpdGlvbmFsIGd1aWRhbmNlLCBzZWUgdGhlIFtOb3RlcyBzZWN0aW9uXShvYnNlcnZhdGlvbi5odG1sI25vdGVzKSBiZWxvdy5cclxuICAgKi9cclxuICB2YWx1ZURhdGVUaW1lPzogc3RyaW5nfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogT2JzZXJ2YXRpb24udmFsdWVbeF1cclxuICAgKi9cclxuICBfdmFsdWVEYXRlVGltZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhdGlvbiBtYXkgaGF2ZTsgMSkgIGEgc2luZ2xlIHZhbHVlIGhlcmUsIDIpICBib3RoIGEgdmFsdWUgYW5kIGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcywgIG9yIDMpICBvbmx5IGEgc2V0IG9mIHJlbGF0ZWQgb3IgY29tcG9uZW50IHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBwcmVzZW50LCB0aGUgZGF0YXR5cGUgZm9yIHRoaXMgZWxlbWVudCBzaG91bGQgYmUgZGV0ZXJtaW5lZCBieSBPYnNlcnZhdGlvbi5jb2RlLiAgQSBDb2RlYWJsZUNvbmNlcHQgd2l0aCBqdXN0IGEgdGV4dCB3b3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgYSBzdHJpbmcgaWYgdGhlIGZpZWxkIHdhcyB1c3VhbGx5IGNvZGVkLCBvciBpZiB0aGUgdHlwZSBhc3NvY2lhdGVkIHdpdGggdGhlIE9ic2VydmF0aW9uLmNvZGUgZGVmaW5lcyBhIGNvZGVkIHZhbHVlLiAgRm9yIGFkZGl0aW9uYWwgZ3VpZGFuY2UsIHNlZSB0aGUgW05vdGVzIHNlY3Rpb25dKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIHZhbHVlUGVyaW9kPzogZmhpci5QZXJpb2R8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE51bGwgb3IgZXhjZXB0aW9uYWwgdmFsdWVzIGNhbiBiZSByZXByZXNlbnRlZCB0d28gd2F5cyBpbiBGSElSIE9ic2VydmF0aW9ucy4gIE9uZSB3YXkgaXMgdG8gc2ltcGx5IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFsdWUgc2V0IGFuZCByZXByZXNlbnQgdGhlIGV4Y2VwdGlvbnMgaW4gdGhlIHZhbHVlLiAgRm9yIGV4YW1wbGUsIG1lYXN1cmVtZW50IHZhbHVlcyBmb3IgYSBzZXJvbG9neSB0ZXN0IGNvdWxkIGJlICBcImRldGVjdGVkXCIsIFwibm90IGRldGVjdGVkXCIsIFwiaW5jb25jbHVzaXZlXCIsIG9yICBcInNwZWNpbWVuIHVuc2F0aXNmYWN0b3J5XCIuICAgXHJcbiAgICogVGhlIGFsdGVybmF0ZSB3YXkgaXMgdG8gdXNlIHRoZSB2YWx1ZSBlbGVtZW50IGZvciBhY3R1YWwgb2JzZXJ2YXRpb25zIGFuZCB1c2UgdGhlIGV4cGxpY2l0IGRhdGFBYnNlbnRSZWFzb24gZWxlbWVudCB0byByZWNvcmQgZXhjZXB0aW9uYWwgdmFsdWVzLiAgRm9yIGV4YW1wbGUsIHRoZSBkYXRhQWJzZW50UmVhc29uIGNvZGUgXCJlcnJvclwiIGNvdWxkIGJlIHVzZWQgd2hlbiB0aGUgbWVhc3VyZW1lbnQgd2FzIG5vdCBjb21wbGV0ZWQuIE5vdGUgdGhhdCBhbiBvYnNlcnZhdGlvbiBtYXkgb25seSBiZSByZXBvcnRlZCBpZiB0aGVyZSBhcmUgdmFsdWVzIHRvIHJlcG9ydC4gRm9yIGV4YW1wbGUgZGlmZmVyZW50aWFsIGNlbGwgY291bnRzIHZhbHVlcyBtYXkgYmUgcmVwb3J0ZWQgb25seSB3aGVuICZndDsgMC4gIEJlY2F1c2Ugb2YgdGhlc2Ugb3B0aW9ucywgdXNlLWNhc2UgYWdyZWVtZW50cyBhcmUgcmVxdWlyZWQgdG8gaW50ZXJwcmV0IGdlbmVyYWwgb2JzZXJ2YXRpb25zIGZvciBudWxsIG9yIGV4Y2VwdGlvbmFsIHZhbHVlcy5cclxuICAgKi9cclxuICBkYXRhQWJzZW50UmVhc29uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEhpc3RvcmljYWxseSB1c2VkIGZvciBsYWJvcmF0b3J5IHJlc3VsdHMgKGtub3duIGFzICdhYm5vcm1hbCBmbGFnJyApLCAgaXRzIHVzZSBleHRlbmRzIHRvIG90aGVyIHVzZSBjYXNlcyB3aGVyZSBjb2RlZCBpbnRlcnByZXRhdGlvbnMgIGFyZSByZWxldmFudC4gIE9mdGVuIHJlcG9ydGVkIGFzIG9uZSBvciBtb3JlIHNpbXBsZSBjb21wYWN0IGNvZGVzIHRoaXMgZWxlbWVudCBpcyBvZnRlbiBwbGFjZWQgYWRqYWNlbnQgdG8gdGhlIHJlc3VsdCB2YWx1ZSBpbiByZXBvcnRzIGFuZCBmbG93IHNoZWV0cyB0byBzaWduYWwgdGhlIG1lYW5pbmcvbm9ybWFsY3kgc3RhdHVzIG9mIHRoZSByZXN1bHQuXHJcbiAgICovXHJcbiAgaW50ZXJwcmV0YXRpb24/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTWF5IGluY2x1ZGUgZ2VuZXJhbCBzdGF0ZW1lbnRzIGFib3V0IHRoZSBvYnNlcnZhdGlvbiwgb3Igc3RhdGVtZW50cyBhYm91dCBzaWduaWZpY2FudCwgdW5leHBlY3RlZCBvciB1bnJlbGlhYmxlIHJlc3VsdHMgdmFsdWVzLCBvciBpbmZvcm1hdGlvbiBhYm91dCBpdHMgc291cmNlIHdoZW4gcmVsZXZhbnQgdG8gaXRzIGludGVycHJldGF0aW9uLlxyXG4gICAqL1xyXG4gIG5vdGU/OiAoZmhpci5Bbm5vdGF0aW9ufG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9ubHkgdXNlZCBpZiBub3QgaW1wbGljaXQgaW4gY29kZSBmb3VuZCBpbiBPYnNlcnZhdGlvbi5jb2RlLiAgSW4gbWFueSBzeXN0ZW1zLCB0aGlzIG1heSBiZSByZXByZXNlbnRlZCBhcyBhIHJlbGF0ZWQgb2JzZXJ2YXRpb24gaW5zdGVhZCBvZiBhbiBpbmxpbmUgY29tcG9uZW50LiAgIFxyXG4gICAqIElmIHRoZSB1c2UgY2FzZSByZXF1aXJlcyBCb2R5U2l0ZSB0byBiZSBoYW5kbGVkIGFzIGEgc2VwYXJhdGUgcmVzb3VyY2UgKGUuZy4gdG8gaWRlbnRpZnkgYW5kIHRyYWNrIHNlcGFyYXRlbHkpIHRoZW4gdXNlIHRoZSBzdGFuZGFyZCBleHRlbnNpb25bIGJvZHlTaXRlXShleHRlbnNpb24tYm9keXNpdGUuaHRtbCkuXHJcbiAgICovXHJcbiAgYm9keVNpdGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogT25seSB1c2VkIGlmIG5vdCBpbXBsaWNpdCBpbiBjb2RlIGZvciBPYnNlcnZhdGlvbi5jb2RlLlxyXG4gICAqL1xyXG4gIG1ldGhvZD86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTaG91bGQgb25seSBiZSB1c2VkIGlmIG5vdCBpbXBsaWNpdCBpbiBjb2RlIGZvdW5kIGluIGBPYnNlcnZhdGlvbi5jb2RlYC4gIE9ic2VydmF0aW9ucyBhcmUgbm90IG1hZGUgb24gc3BlY2ltZW5zIHRoZW1zZWx2ZXM7IHRoZXkgYXJlIG1hZGUgb24gYSBzdWJqZWN0LCBidXQgaW4gbWFueSBjYXNlcyBieSB0aGUgbWVhbnMgb2YgYSBzcGVjaW1lbi4gTm90ZSB0aGF0IGFsdGhvdWdoIHNwZWNpbWVucyBhcmUgb2Z0ZW4gaW52b2x2ZWQsIHRoZXkgYXJlIG5vdCBhbHdheXMgdHJhY2tlZCBhbmQgcmVwb3J0ZWQgZXhwbGljaXRseS4gQWxzbyBub3RlIHRoYXQgb2JzZXJ2YXRpb24gcmVzb3VyY2VzIG1heSBiZSB1c2VkIGluIGNvbnRleHRzIHRoYXQgdHJhY2sgdGhlIHNwZWNpbWVuIGV4cGxpY2l0bHkgKGUuZy4gRGlhZ25vc3RpYyBSZXBvcnQpLlxyXG4gICAqL1xyXG4gIHNwZWNpbWVuPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBtZWFudCB0byByZXByZXNlbnQgYSBkZXZpY2UgaW52b2x2ZWQgaW4gdGhlIHRyYW5zbWlzc2lvbiBvZiB0aGUgcmVzdWx0LCBlLmcuLCBhIGdhdGV3YXkuICBTdWNoIGRldmljZXMgbWF5IGJlIGRvY3VtZW50ZWQgdXNpbmcgdGhlIFByb3ZlbmFuY2UgcmVzb3VyY2Ugd2hlcmUgcmVsZXZhbnQuXHJcbiAgICovXHJcbiAgZGV2aWNlPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE1vc3Qgb2JzZXJ2YXRpb25zIG9ubHkgaGF2ZSBvbmUgZ2VuZXJpYyByZWZlcmVuY2UgcmFuZ2UuIFN5c3RlbXMgTUFZIGNob29zZSB0byByZXN0cmljdCB0byBvbmx5IHN1cHBseWluZyB0aGUgcmVsZXZhbnQgcmVmZXJlbmNlIHJhbmdlIGJhc2VkIG9uIGtub3dsZWRnZSBhYm91dCB0aGUgcGF0aWVudCAoZS5nLiwgc3BlY2lmaWMgdG8gdGhlIHBhdGllbnQncyBhZ2UsIGdlbmRlciwgd2VpZ2h0IGFuZCBvdGhlciBmYWN0b3JzKSwgYnV0IHRoaXMgbWlnaHQgbm90IGJlIHBvc3NpYmxlIG9yIGFwcHJvcHJpYXRlLiBXaGVuZXZlciBtb3JlIHRoYW4gb25lIHJlZmVyZW5jZSByYW5nZSBpcyBzdXBwbGllZCwgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbSBTSE9VTEQgYmUgcHJvdmlkZWQgaW4gdGhlIHJlZmVyZW5jZSByYW5nZSBhbmQvb3IgYWdlIHByb3BlcnRpZXMuXHJcbiAgICovXHJcbiAgcmVmZXJlbmNlUmFuZ2U/OiAoZmhpci5PYnNlcnZhdGlvblJlZmVyZW5jZVJhbmdlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdXNpbmcgdGhpcyBlbGVtZW50LCBhbiBvYnNlcnZhdGlvbiB3aWxsIHR5cGljYWxseSBoYXZlIGVpdGhlciBhIHZhbHVlIG9yIGEgc2V0IG9mIHJlbGF0ZWQgcmVzb3VyY2VzLCBhbHRob3VnaCBib3RoIG1heSBiZSBwcmVzZW50IGluIHNvbWUgY2FzZXMuICBGb3IgYSBkaXNjdXNzaW9uIG9uIHRoZSB3YXlzIE9ic2VydmF0aW9ucyBjYW4gYXNzZW1ibGVkIGluIGdyb3VwcyB0b2dldGhlciwgc2VlIFtOb3Rlc10ob2JzZXJ2YXRpb24uaHRtbCNvYnNncm91cGluZykgYmVsb3cuICBOb3RlIHRoYXQgYSBzeXN0ZW0gbWF5IGNhbGN1bGF0ZSByZXN1bHRzIGZyb20gW1F1ZXN0aW9ubmFpcmVSZXNwb25zZV0ocXVlc3Rpb25uYWlyZXJlc3BvbnNlLmh0bWwpICBpbnRvIGEgZmluYWwgc2NvcmUgYW5kIHJlcHJlc2VudCB0aGUgc2NvcmUgYXMgYW4gT2JzZXJ2YXRpb24uXHJcbiAgICovXHJcbiAgaGFzTWVtYmVyPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFsbCB0aGUgcmVmZXJlbmNlIGNob2ljZXMgdGhhdCBhcmUgbGlzdGVkIGluIHRoaXMgZWxlbWVudCBjYW4gcmVwcmVzZW50IGNsaW5pY2FsIG9ic2VydmF0aW9ucyBhbmQgb3RoZXIgbWVhc3VyZW1lbnRzIHRoYXQgbWF5IGJlIHRoZSBzb3VyY2UgZm9yIGEgZGVyaXZlZCB2YWx1ZS4gIFRoZSBtb3N0IGNvbW1vbiByZWZlcmVuY2Ugd2lsbCBiZSBhbm90aGVyIE9ic2VydmF0aW9uLiAgRm9yIGEgZGlzY3Vzc2lvbiBvbiB0aGUgd2F5cyBPYnNlcnZhdGlvbnMgY2FuIGFzc2VtYmxlZCBpbiBncm91cHMgdG9nZXRoZXIsIHNlZSBbTm90ZXNdKG9ic2VydmF0aW9uLmh0bWwjb2JzZ3JvdXBpbmcpIGJlbG93LlxyXG4gICAqL1xyXG4gIGRlcml2ZWRGcm9tPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBhIGRpc2N1c3Npb24gb24gdGhlIHdheXMgT2JzZXJ2YXRpb25zIGNhbiBiZSBhc3NlbWJsZWQgaW4gZ3JvdXBzIHRvZ2V0aGVyIHNlZSBbTm90ZXNdKG9ic2VydmF0aW9uLmh0bWwjbm90ZXMpIGJlbG93LlxyXG4gICAqL1xyXG4gIGNvbXBvbmVudD86IChmaGlyLk9ic2VydmF0aW9uQ29tcG9uZW50fG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcbiJdfQ==