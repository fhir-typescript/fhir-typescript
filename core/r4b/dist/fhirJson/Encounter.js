// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Encounter
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpckpzb24vRW5jb3VudGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgUmVzb3VyY2U6IEVuY291bnRlclxyXG5cclxuaW1wb3J0ICogYXMgZmhpciBmcm9tICcuLi9maGlySnNvbi5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IHN0YXR1cyBpcyBhbHdheXMgZm91bmQgaW4gdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UsIG5vdCB0aGUgc3RhdHVzIGhpc3RvcnkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVuY291bnRlclN0YXR1c0hpc3RvcnkgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQgfCBhcnJpdmVkIHwgdHJpYWdlZCB8IGluLXByb2dyZXNzIHwgb25sZWF2ZSB8IGZpbmlzaGVkIHwgY2FuY2VsbGVkICsuXHJcbiAgICovXHJcbiAgc3RhdHVzOiAnYXJyaXZlZCd8J2NhbmNlbGxlZCd8J2VudGVyZWQtaW4tZXJyb3InfCdmaW5pc2hlZCd8J2luLXByb2dyZXNzJ3wnb25sZWF2ZSd8J3BsYW5uZWQnfCd0cmlhZ2VkJ3wndW5rbm93bid8bnVsbDtcclxuICAvKipcclxuICAgKiBFeHRlbmRlZCBwcm9wZXJ0aWVzIGZvciBwcmltaXRpdmUgZWxlbWVudDogRW5jb3VudGVyLnN0YXR1c0hpc3Rvcnkuc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB0aGF0IHRoZSBlcGlzb2RlIHdhcyBpbiB0aGUgc3BlY2lmaWVkIHN0YXR1cy5cclxuICAgKi9cclxuICBwZXJpb2Q6IGZoaXIuUGVyaW9kfG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgaGlzdG9yeSBwZXJtaXRzIHRoZSB0cmFja2luZyBvZiB0aGUgZW5jb3VudGVycyB0cmFuc2l0aW9ucyB3aXRob3V0IG5lZWRpbmcgdG8gZ28gIHRocm91Z2ggdGhlIHJlc291cmNlIGhpc3RvcnkuICBUaGlzIHdvdWxkIGJlIHVzZWQgZm9yIGEgY2FzZSB3aGVyZSBhbiBhZG1pc3Npb24gc3RhcnRzIG9mIGFzIGFuIGVtZXJnZW5jeSBlbmNvdW50ZXIsIHRoZW4gdHJhbnNpdGlvbnMgaW50byBhbiBpbnBhdGllbnQgc2NlbmFyaW8uIERvaW5nIHRoaXMgYW5kIG5vdCByZXN0YXJ0aW5nIGEgbmV3IGVuY291bnRlciBlbnN1cmVzIHRoYXQgYW55IGxhYi9kaWFnbm9zdGljIHJlc3VsdHMgY2FuIG1vcmUgZWFzaWx5IGZvbGxvdyB0aGUgcGF0aWVudCBhbmQgbm90IHJlcXVpcmUgcmUtcHJvY2Vzc2luZyBhbmQgbm90IGdldCBsb3N0IG9yIGNhbmNlbGxlZCBkdXJpbmcgYSBraW5kIG9mIGRpc2NoYXJnZSBmcm9tIGVtZXJnZW5jeSB0byBpbnBhdGllbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVuY291bnRlckNsYXNzSGlzdG9yeSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogaW5wYXRpZW50IHwgb3V0cGF0aWVudCB8IGFtYnVsYXRvcnkgfCBlbWVyZ2VuY3kgKy5cclxuICAgKi9cclxuICBjbGFzczogZmhpci5Db2Rpbmd8bnVsbDtcclxuICAvKipcclxuICAgKiBUaGUgdGltZSB0aGF0IHRoZSBlcGlzb2RlIHdhcyBpbiB0aGUgc3BlY2lmaWVkIGNsYXNzLlxyXG4gICAqL1xyXG4gIHBlcmlvZDogZmhpci5QZXJpb2R8bnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBsaXN0IG9mIHBlb3BsZSByZXNwb25zaWJsZSBmb3IgcHJvdmlkaW5nIHRoZSBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmNvdW50ZXJQYXJ0aWNpcGFudCBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcnRpY2lwYW50IHR5cGUgaW5kaWNhdGVzIGhvdyBhbiBpbmRpdmlkdWFsIHBhcnRpY2lwYXRlcyBpbiBhbiBlbmNvdW50ZXIuIEl0IGluY2x1ZGVzIG5vbi1wcmFjdGl0aW9uZXIgcGFydGljaXBhbnRzLCBhbmQgZm9yIHByYWN0aXRpb25lcnMgdGhpcyBpcyB0byBkZXNjcmliZSB0aGUgYWN0aW9uIHR5cGUgaW4gdGhlIGNvbnRleHQgb2YgdGhpcyBlbmNvdW50ZXIgKGUuZy4gQWRtaXR0aW5nIERyLCBBdHRlbmRpbmcgRHIsIFRyYW5zbGF0b3IsIENvbnN1bHRpbmcgRHIpLiBUaGlzIGlzIGRpZmZlcmVudCB0byB0aGUgcHJhY3RpdGlvbmVyIHJvbGVzIHdoaWNoIGFyZSBmdW5jdGlvbmFsIHJvbGVzLCBkZXJpdmVkIGZyb20gdGVybXMgb2YgZW1wbG95bWVudCwgZWR1Y2F0aW9uLCBsaWNlbnNpbmcsIGV0Yy5cclxuICAgKi9cclxuICB0eXBlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwZXJpb2Qgb2YgdGltZSB0aGF0IHRoZSBzcGVjaWZpZWQgcGFydGljaXBhbnQgcGFydGljaXBhdGVkIGluIHRoZSBlbmNvdW50ZXIuIFRoZXNlIGNhbiBvdmVybGFwIG9yIGJlIHN1Yi1zZXRzIG9mIHRoZSBvdmVyYWxsIGVuY291bnRlcidzIHBlcmlvZC5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUGVyc29ucyBpbnZvbHZlZCBpbiB0aGUgZW5jb3VudGVyIG90aGVyIHRoYW4gdGhlIHBhdGllbnQuXHJcbiAgICovXHJcbiAgaW5kaXZpZHVhbD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBsaXN0IG9mIGRpYWdub3NpcyByZWxldmFudCB0byB0aGlzIGVuY291bnRlci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW5jb3VudGVyRGlhZ25vc2lzIGV4dGVuZHMgZmhpci5CYWNrYm9uZUVsZW1lbnQgeyBcclxuICAvKipcclxuICAgKiBGb3Igc3lzdGVtcyB0aGF0IG5lZWQgdG8ga25vdyB3aGljaCB3YXMgdGhlIHByaW1hcnkgZGlhZ25vc2lzLCB0aGVzZSB3aWxsIGJlIG1hcmtlZCB3aXRoIHRoZSBzdGFuZGFyZCBleHRlbnNpb24gcHJpbWFyeURpYWdub3NpcyAod2hpY2ggaXMgYSBzZXF1ZW5jZSB2YWx1ZSByYXRoZXIgdGhhbiBhIGZsYWcsIDEgPSBwcmltYXJ5IGRpYWdub3NpcykuXHJcbiAgICovXHJcbiAgY29uZGl0aW9uOiBmaGlyLlJlZmVyZW5jZXxudWxsO1xyXG4gIC8qKlxyXG4gICAqIFJvbGUgdGhhdCB0aGlzIGRpYWdub3NpcyBoYXMgd2l0aGluIHRoZSBlbmNvdW50ZXIgKGUuZy4gYWRtaXNzaW9uLCBiaWxsaW5nLCBkaXNjaGFyZ2Ug4oCmKS5cclxuICAgKi9cclxuICB1c2U/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmFua2luZyBvZiB0aGUgZGlhZ25vc2lzIChmb3IgZWFjaCByb2xlIHR5cGUpLlxyXG4gICAqL1xyXG4gIHJhbms/OiBudW1iZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmNvdW50ZXIuZGlhZ25vc2lzLnJhbmtcclxuICAgKi9cclxuICBfcmFuaz86Zmhpci5GaGlyRWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFuIEVuY291bnRlciBtYXkgY292ZXIgbW9yZSB0aGFuIGp1c3QgdGhlIGlucGF0aWVudCBzdGF5LiBDb250ZXh0cyBzdWNoIGFzIG91dHBhdGllbnRzLCBjb21tdW5pdHkgY2xpbmljcywgYW5kIGFnZWQgY2FyZSBmYWNpbGl0aWVzIGFyZSBhbHNvIGluY2x1ZGVkLlxyXG4gKiBUaGUgZHVyYXRpb24gcmVjb3JkZWQgaW4gdGhlIHBlcmlvZCBvZiB0aGlzIGVuY291bnRlciBjb3ZlcnMgdGhlIGVudGlyZSBzY29wZSBvZiB0aGlzIGhvc3BpdGFsaXphdGlvbiByZWNvcmQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEVuY291bnRlckhvc3BpdGFsaXphdGlvbiBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogUHJlLWFkbWlzc2lvbiBpZGVudGlmaWVyLlxyXG4gICAqL1xyXG4gIHByZUFkbWlzc2lvbklkZW50aWZpZXI/OiBmaGlyLklkZW50aWZpZXJ8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhdGlvbi9vcmdhbml6YXRpb24gZnJvbSB3aGljaCB0aGUgcGF0aWVudCBjYW1lIGJlZm9yZSBhZG1pc3Npb24uXHJcbiAgICovXHJcbiAgb3JpZ2luPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZyb20gd2hlcmUgcGF0aWVudCB3YXMgYWRtaXR0ZWQgKHBoeXNpY2lhbiByZWZlcnJhbCwgdHJhbnNmZXIpLlxyXG4gICAqL1xyXG4gIGFkbWl0U291cmNlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhpcyBob3NwaXRhbGl6YXRpb24gaXMgYSByZWFkbWlzc2lvbiBhbmQgd2h5IGlmIGtub3duLlxyXG4gICAqL1xyXG4gIHJlQWRtaXNzaW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEZvciBleGFtcGxlLCBhIHBhdGllbnQgbWF5IHJlcXVlc3QgYm90aCBhIGRhaXJ5LWZyZWUgYW5kIG51dC1mcmVlIGRpZXQgcHJlZmVyZW5jZSAobm90IG11dHVhbGx5IGV4Y2x1c2l2ZSkuXHJcbiAgICovXHJcbiAgZGlldFByZWZlcmVuY2U/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lhbCBjb3VydGVzaWVzIChWSVAsIGJvYXJkIG1lbWJlcikuXHJcbiAgICovXHJcbiAgc3BlY2lhbENvdXJ0ZXN5PzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFueSBzcGVjaWFsIHJlcXVlc3RzIHRoYXQgaGF2ZSBiZWVuIG1hZGUgZm9yIHRoaXMgaG9zcGl0YWxpemF0aW9uIGVuY291bnRlciwgc3VjaCBhcyB0aGUgcHJvdmlzaW9uIG9mIHNwZWNpZmljIGVxdWlwbWVudCBvciBvdGhlciB0aGluZ3MuXHJcbiAgICovXHJcbiAgc3BlY2lhbEFycmFuZ2VtZW50PzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uL29yZ2FuaXphdGlvbiB0byB3aGljaCB0aGUgcGF0aWVudCBpcyBkaXNjaGFyZ2VkLlxyXG4gICAqL1xyXG4gIGRlc3RpbmF0aW9uPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIENhdGVnb3J5IG9yIGtpbmQgb2YgbG9jYXRpb24gYWZ0ZXIgZGlzY2hhcmdlLlxyXG4gICAqL1xyXG4gIGRpc2NoYXJnZURpc3Bvc2l0aW9uPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVmlydHVhbCBlbmNvdW50ZXJzIGNhbiBiZSByZWNvcmRlZCBpbiB0aGUgRW5jb3VudGVyIGJ5IHNwZWNpZnlpbmcgYSBsb2NhdGlvbiByZWZlcmVuY2UgdG8gYSBsb2NhdGlvbiBvZiB0eXBlIFwia2luZFwiIHN1Y2ggYXMgXCJjbGllbnQncyBob21lXCIgYW5kIGFuIGVuY291bnRlci5jbGFzcyA9IFwidmlydHVhbFwiLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmNvdW50ZXJMb2NhdGlvbiBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogVGhlIGxvY2F0aW9uIHdoZXJlIHRoZSBlbmNvdW50ZXIgdGFrZXMgcGxhY2UuXHJcbiAgICovXHJcbiAgbG9jYXRpb246IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgcGF0aWVudCBpcyBubyBsb25nZXIgYWN0aXZlIGF0IGEgbG9jYXRpb24sIHRoZW4gdGhlIHBlcmlvZCBlbmQgZGF0ZSBpcyBlbnRlcmVkLCBhbmQgdGhlIHN0YXR1cyBtYXkgYmUgY2hhbmdlZCB0byBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgc3RhdHVzPzogJ2FjdGl2ZSd8J2NvbXBsZXRlZCd8J3BsYW5uZWQnfCdyZXNlcnZlZCd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBFbmNvdW50ZXIubG9jYXRpb24uc3RhdHVzXHJcbiAgICovXHJcbiAgX3N0YXR1cz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGlzIGluZm9ybWF0aW9uIGlzIGRlLW5vcm1hbGl6ZWQgZnJvbSB0aGUgTG9jYXRpb24gcmVzb3VyY2UgdG8gc3VwcG9ydCB0aGUgZWFzaWVyIHVuZGVyc3RhbmRpbmcgb2YgdGhlIGVuY291bnRlciByZXNvdXJjZSBhbmQgcHJvY2Vzc2luZyBpbiBtZXNzYWdpbmcgb3IgcXVlcnkuXHJcbiAgICogVGhlcmUgbWF5IGJlIG1hbnkgbGV2ZWxzIGluIHRoZSBoaWVyYWNoeSwgYW5kIHRoaXMgbWF5IG9ubHkgcGljIHNwZWNpZmljIGxldmVscyB0aGF0IGFyZSByZXF1aXJlZCBmb3IgYSBzcGVjaWZpYyB1c2FnZSBzY2VuYXJpby5cclxuICAgKi9cclxuICBwaHlzaWNhbFR5cGU/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGltZSBwZXJpb2QgZHVyaW5nIHdoaWNoIHRoZSBwYXRpZW50IHdhcyBwcmVzZW50IGF0IHRoZSBsb2NhdGlvbi5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbiBpbnRlcmFjdGlvbiBiZXR3ZWVuIGEgcGF0aWVudCBhbmQgaGVhbHRoY2FyZSBwcm92aWRlcihzKSBmb3IgdGhlIHB1cnBvc2Ugb2YgcHJvdmlkaW5nIGhlYWx0aGNhcmUgc2VydmljZShzKSBvciBhc3Nlc3NpbmcgdGhlIGhlYWx0aCBzdGF0dXMgb2YgYSBwYXRpZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBFbmNvdW50ZXIgZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHsgXHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkVuY291bnRlclwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogSWRlbnRpZmllcihzKSBieSB3aGljaCB0aGlzIGVuY291bnRlciBpcyBrbm93bi5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogKGZoaXIuSWRlbnRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBOb3RlIHRoYXQgaW50ZXJuYWwgYnVzaW5lc3MgcnVsZXMgd2lsbCBkZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIHRyYW5zaXRpb25zIHRoYXQgbWF5IG9jY3VyIGJldHdlZW4gc3RhdHVzZXMgKGFuZCBhbHNvIGNsYXNzZXMpLlxyXG4gICAqL1xyXG4gIHN0YXR1czogJ2Fycml2ZWQnfCdjYW5jZWxsZWQnfCdlbnRlcmVkLWluLWVycm9yJ3wnZmluaXNoZWQnfCdpbi1wcm9ncmVzcyd8J29ubGVhdmUnfCdwbGFubmVkJ3wndHJpYWdlZCd8J3Vua25vd24nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IEVuY291bnRlci5zdGF0dXNcclxuICAgKi9cclxuICBfc3RhdHVzPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjdXJyZW50IHN0YXR1cyBpcyBhbHdheXMgZm91bmQgaW4gdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgcmVzb3VyY2UsIG5vdCB0aGUgc3RhdHVzIGhpc3RvcnkuXHJcbiAgICovXHJcbiAgc3RhdHVzSGlzdG9yeT86IChmaGlyLkVuY291bnRlclN0YXR1c0hpc3Rvcnl8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29uY2VwdHMgcmVwcmVzZW50aW5nIGNsYXNzaWZpY2F0aW9uIG9mIHBhdGllbnQgZW5jb3VudGVyIHN1Y2ggYXMgYW1idWxhdG9yeSAob3V0cGF0aWVudCksIGlucGF0aWVudCwgZW1lcmdlbmN5LCBob21lIGhlYWx0aCBvciBvdGhlcnMgZHVlIHRvIGxvY2FsIHZhcmlhdGlvbnMuXHJcbiAgICovXHJcbiAgY2xhc3M6IGZoaXIuQ29kaW5nfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNsYXNzIGhpc3RvcnkgcGVybWl0cyB0aGUgdHJhY2tpbmcgb2YgdGhlIGVuY291bnRlcnMgdHJhbnNpdGlvbnMgd2l0aG91dCBuZWVkaW5nIHRvIGdvICB0aHJvdWdoIHRoZSByZXNvdXJjZSBoaXN0b3J5LiAgVGhpcyB3b3VsZCBiZSB1c2VkIGZvciBhIGNhc2Ugd2hlcmUgYW4gYWRtaXNzaW9uIHN0YXJ0cyBvZiBhcyBhbiBlbWVyZ2VuY3kgZW5jb3VudGVyLCB0aGVuIHRyYW5zaXRpb25zIGludG8gYW4gaW5wYXRpZW50IHNjZW5hcmlvLiBEb2luZyB0aGlzIGFuZCBub3QgcmVzdGFydGluZyBhIG5ldyBlbmNvdW50ZXIgZW5zdXJlcyB0aGF0IGFueSBsYWIvZGlhZ25vc3RpYyByZXN1bHRzIGNhbiBtb3JlIGVhc2lseSBmb2xsb3cgdGhlIHBhdGllbnQgYW5kIG5vdCByZXF1aXJlIHJlLXByb2Nlc3NpbmcgYW5kIG5vdCBnZXQgbG9zdCBvciBjYW5jZWxsZWQgZHVyaW5nIGEga2luZCBvZiBkaXNjaGFyZ2UgZnJvbSBlbWVyZ2VuY3kgdG8gaW5wYXRpZW50LlxyXG4gICAqL1xyXG4gIGNsYXNzSGlzdG9yeT86IChmaGlyLkVuY291bnRlckNsYXNzSGlzdG9yeXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBTaW5jZSB0aGVyZSBhcmUgbWFueSB3YXlzIHRvIGZ1cnRoZXIgY2xhc3NpZnkgZW5jb3VudGVycywgdGhpcyBlbGVtZW50IGlzIDAuLiouXHJcbiAgICovXHJcbiAgdHlwZT86IChmaGlyLkNvZGVhYmxlQ29uY2VwdHxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBCcm9hZCBjYXRlZ29yaXphdGlvbiBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHRvIGJlIHByb3ZpZGVkIChlLmcuIGNhcmRpb2xvZ3kpLlxyXG4gICAqL1xyXG4gIHNlcnZpY2VUeXBlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgdXJnZW5jeSBvZiB0aGUgZW5jb3VudGVyLlxyXG4gICAqL1xyXG4gIHByaW9yaXR5PzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFdoaWxlIHRoZSBlbmNvdW50ZXIgaXMgYWx3YXlzIGFib3V0IHRoZSBwYXRpZW50LCB0aGUgcGF0aWVudCBtaWdodCBub3QgYWN0dWFsbHkgYmUga25vd24gaW4gYWxsIGNvbnRleHRzIG9mIHVzZSwgYW5kIHRoZXJlIG1heSBiZSBhIGdyb3VwIG9mIHBhdGllbnRzIHRoYXQgY291bGQgYmUgYW5vbnltb3VzIChzdWNoIGFzIGluIGEgZ3JvdXAgdGhlcmFweSBmb3IgQWxjb2hvbGljcyBBbm9ueW1vdXMgLSB3aGVyZSB0aGUgcmVjb3JkaW5nIG9mIHRoZSBlbmNvdW50ZXIgY291bGQgYmUgdXNlZCBmb3IgYmlsbGluZyBvbiB0aGUgbnVtYmVyIG9mIHBlb3BsZS9zdGFmZiBhbmQgbm90IGltcG9ydGFudCB0byB0aGUgY29udGV4dCBvZiB0aGUgc3BlY2lmaWMgcGF0aWVudHMpIG9yIGFsdGVybmF0ZWx5IGluIHZldGVyaW5hcnkgY2FyZSBhIGhlcmQgb2Ygc2hlZXAgcmVjZWl2aW5nIHRyZWF0bWVudCAod2hlcmUgdGhlIGFuaW1hbHMgYXJlIG5vdCBpbmRpdmlkdWFsbHkgdHJhY2tlZCkuXHJcbiAgICovXHJcbiAgc3ViamVjdD86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBXaGVyZSBhIHNwZWNpZmljIGVuY291bnRlciBzaG91bGQgYmUgY2xhc3NpZmllZCBhcyBhIHBhcnQgb2YgYSBzcGVjaWZpYyBlcGlzb2RlKHMpIG9mIGNhcmUgdGhpcyBmaWVsZCBzaG91bGQgYmUgdXNlZC4gVGhpcyBhc3NvY2lhdGlvbiBjYW4gZmFjaWxpdGF0ZSBncm91cGluZyBvZiByZWxhdGVkIGVuY291bnRlcnMgdG9nZXRoZXIgZm9yIGEgc3BlY2lmaWMgcHVycG9zZSwgc3VjaCBhcyBnb3Zlcm5tZW50IHJlcG9ydGluZywgaXNzdWUgdHJhY2tpbmcsIGFzc29jaWF0aW9uIHZpYSBhIGNvbW1vbiBwcm9ibGVtLiAgVGhlIGFzc29jaWF0aW9uIGlzIHJlY29yZGVkIG9uIHRoZSBlbmNvdW50ZXIgYXMgdGhlc2UgYXJlIHR5cGljYWxseSBjcmVhdGVkIGFmdGVyIHRoZSBlcGlzb2RlIG9mIGNhcmUgYW5kIGdyb3VwZWQgb24gZW50cnkgcmF0aGVyIHRoYW4gZWRpdGluZyB0aGUgZXBpc29kZSBvZiBjYXJlIHRvIGFwcGVuZCBhbm90aGVyIGVuY291bnRlciB0byBpdCAodGhlIGVwaXNvZGUgb2YgY2FyZSBjb3VsZCBzcGFuIHllYXJzKS5cclxuICAgKi9cclxuICBlcGlzb2RlT2ZDYXJlPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZXF1ZXN0IHRoaXMgZW5jb3VudGVyIHNhdGlzZmllcyAoZS5nLiBpbmNvbWluZyByZWZlcnJhbCBvciBwcm9jZWR1cmUgcmVxdWVzdCkuXHJcbiAgICovXHJcbiAgYmFzZWRPbj86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBwZW9wbGUgcmVzcG9uc2libGUgZm9yIHByb3ZpZGluZyB0aGUgc2VydmljZS5cclxuICAgKi9cclxuICBwYXJ0aWNpcGFudD86IChmaGlyLkVuY291bnRlclBhcnRpY2lwYW50fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcHBvaW50bWVudCB0aGF0IHNjaGVkdWxlZCB0aGlzIGVuY291bnRlci5cclxuICAgKi9cclxuICBhcHBvaW50bWVudD86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZiBub3QgKHlldCkga25vd24sIHRoZSBlbmQgb2YgdGhlIFBlcmlvZCBtYXkgYmUgb21pdHRlZC5cclxuICAgKi9cclxuICBwZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogTWF5IGRpZmZlciBmcm9tIHRoZSB0aW1lIHRoZSBFbmNvdW50ZXIucGVyaW9kIGxhc3RlZCBiZWNhdXNlIG9mIGxlYXZlIG9mIGFic2VuY2UuXHJcbiAgICovXHJcbiAgbGVuZ3RoPzogZmhpci5EdXJhdGlvbnx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIHN5c3RlbXMgdGhhdCBuZWVkIHRvIGtub3cgd2hpY2ggd2FzIHRoZSBwcmltYXJ5IGRpYWdub3NpcywgdGhlc2Ugd2lsbCBiZSBtYXJrZWQgd2l0aCB0aGUgc3RhbmRhcmQgZXh0ZW5zaW9uIHByaW1hcnlEaWFnbm9zaXMgKHdoaWNoIGlzIGEgc2VxdWVuY2UgdmFsdWUgcmF0aGVyIHRoYW4gYSBmbGFnLCAxID0gcHJpbWFyeSBkaWFnbm9zaXMpLlxyXG4gICAqL1xyXG4gIHJlYXNvbkNvZGU/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRm9yIHN5c3RlbXMgdGhhdCBuZWVkIHRvIGtub3cgd2hpY2ggd2FzIHRoZSBwcmltYXJ5IGRpYWdub3NpcywgdGhlc2Ugd2lsbCBiZSBtYXJrZWQgd2l0aCB0aGUgc3RhbmRhcmQgZXh0ZW5zaW9uIHByaW1hcnlEaWFnbm9zaXMgKHdoaWNoIGlzIGEgc2VxdWVuY2UgdmFsdWUgcmF0aGVyIHRoYW4gYSBmbGFnLCAxID0gcHJpbWFyeSBkaWFnbm9zaXMpLlxyXG4gICAqL1xyXG4gIHJlYXNvblJlZmVyZW5jZT86IChmaGlyLlJlZmVyZW5jZXxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgbGlzdCBvZiBkaWFnbm9zaXMgcmVsZXZhbnQgdG8gdGhpcyBlbmNvdW50ZXIuXHJcbiAgICovXHJcbiAgZGlhZ25vc2lzPzogKGZoaXIuRW5jb3VudGVyRGlhZ25vc2lzfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBiaWxsaW5nIHN5c3RlbSBtYXkgY2hvb3NlIHRvIGFsbG9jYXRlIGJpbGxhYmxlIGl0ZW1zIGFzc29jaWF0ZWQgd2l0aCB0aGUgRW5jb3VudGVyIHRvIGRpZmZlcmVudCByZWZlcmVuY2VkIEFjY291bnRzIGJhc2VkIG9uIGludGVybmFsIGJ1c2luZXNzIHJ1bGVzLlxyXG4gICAqL1xyXG4gIGFjY291bnQ/OiAoZmhpci5SZWZlcmVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQW4gRW5jb3VudGVyIG1heSBjb3ZlciBtb3JlIHRoYW4ganVzdCB0aGUgaW5wYXRpZW50IHN0YXkuIENvbnRleHRzIHN1Y2ggYXMgb3V0cGF0aWVudHMsIGNvbW11bml0eSBjbGluaWNzLCBhbmQgYWdlZCBjYXJlIGZhY2lsaXRpZXMgYXJlIGFsc28gaW5jbHVkZWQuXHJcbiAgICogVGhlIGR1cmF0aW9uIHJlY29yZGVkIGluIHRoZSBwZXJpb2Qgb2YgdGhpcyBlbmNvdW50ZXIgY292ZXJzIHRoZSBlbnRpcmUgc2NvcGUgb2YgdGhpcyBob3NwaXRhbGl6YXRpb24gcmVjb3JkLlxyXG4gICAqL1xyXG4gIGhvc3BpdGFsaXphdGlvbj86IGZoaXIuRW5jb3VudGVySG9zcGl0YWxpemF0aW9ufHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBWaXJ0dWFsIGVuY291bnRlcnMgY2FuIGJlIHJlY29yZGVkIGluIHRoZSBFbmNvdW50ZXIgYnkgc3BlY2lmeWluZyBhIGxvY2F0aW9uIHJlZmVyZW5jZSB0byBhIGxvY2F0aW9uIG9mIHR5cGUgXCJraW5kXCIgc3VjaCBhcyBcImNsaWVudCdzIGhvbWVcIiBhbmQgYW4gZW5jb3VudGVyLmNsYXNzID0gXCJ2aXJ0dWFsXCIuXHJcbiAgICovXHJcbiAgbG9jYXRpb24/OiAoZmhpci5FbmNvdW50ZXJMb2NhdGlvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgb3JnYW5pemF0aW9uIHRoYXQgaXMgcHJpbWFyaWx5IHJlc3BvbnNpYmxlIGZvciB0aGlzIEVuY291bnRlcidzIHNlcnZpY2VzLiBUaGlzIE1BWSBiZSB0aGUgc2FtZSBhcyB0aGUgb3JnYW5pemF0aW9uIG9uIHRoZSBQYXRpZW50IHJlY29yZCwgaG93ZXZlciBpdCBjb3VsZCBiZSBkaWZmZXJlbnQsIHN1Y2ggYXMgaWYgdGhlIGFjdG9yIHBlcmZvcm1pbmcgdGhlIHNlcnZpY2VzIHdhcyBmcm9tIGFuIGV4dGVybmFsIG9yZ2FuaXphdGlvbiAod2hpY2ggbWF5IGJlIGJpbGxlZCBzZXBlcmF0ZWx5KSBmb3IgYW4gZXh0ZXJuYWwgY29uc3VsdGF0aW9uLiAgUmVmZXIgdG8gdGhlIGV4YW1wbGUgYnVuZGxlIHNob3dpbmcgYW4gYWJicmV2aWF0ZWQgc2V0IG9mIEVuY291bnRlcnMgZm9yIGEgY29sb25vc2NvcHkuXHJcbiAgICovXHJcbiAgc2VydmljZVByb3ZpZGVyPzogZmhpci5SZWZlcmVuY2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgYWxzbyB1c2VkIGZvciBhc3NvY2lhdGluZyBhIGNoaWxkJ3MgZW5jb3VudGVyIGJhY2sgdG8gdGhlIG1vdGhlcidzIGVuY291bnRlci5cclxuICAgKiBSZWZlciB0byB0aGUgTm90ZXMgc2VjdGlvbiBpbiB0aGUgUGF0aWVudCByZXNvdXJjZSBmb3IgZnVydGhlciBkZXRhaWxzLlxyXG4gICAqL1xyXG4gIHBhcnRPZj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxufVxyXG4iXX0=