// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Condition
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpckpzb24vQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBSZXNvdXJjZTogQ29uZGl0aW9uXHJcblxyXG5pbXBvcnQgKiBhcyBmaGlyIGZyb20gJy4uL2ZoaXJKc29uLmpzJztcclxuXHJcblxyXG4vKipcclxuICogQ2xpbmljYWwgc3RhZ2Ugb3IgZ3JhZGUgb2YgYSBjb25kaXRpb24uIE1heSBpbmNsdWRlIGZvcm1hbCBzZXZlcml0eSBhc3Nlc3NtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uZGl0aW9uU3RhZ2UgZXh0ZW5kcyBmaGlyLkJhY2tib25lRWxlbWVudCB7IFxyXG4gIC8qKlxyXG4gICAqIEEgc2ltcGxlIHN1bW1hcnkgb2YgdGhlIHN0YWdlIHN1Y2ggYXMgXCJTdGFnZSAzXCIuIFRoZSBkZXRlcm1pbmF0aW9uIG9mIHRoZSBzdGFnZSBpcyBkaXNlYXNlLXNwZWNpZmljLlxyXG4gICAqL1xyXG4gIHN1bW1hcnk/OiBmaGlyLkNvZGVhYmxlQ29uY2VwdHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHRvIGEgZm9ybWFsIHJlY29yZCBvZiB0aGUgZXZpZGVuY2Ugb24gd2hpY2ggdGhlIHN0YWdpbmcgYXNzZXNzbWVudCBpcyBiYXNlZC5cclxuICAgKi9cclxuICBhc3Nlc3NtZW50PzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBraW5kIG9mIHN0YWdpbmcsIHN1Y2ggYXMgcGF0aG9sb2dpY2FsIG9yIGNsaW5pY2FsIHN0YWdpbmcuXHJcbiAgICovXHJcbiAgdHlwZT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBldmlkZW5jZSBtYXkgYmUgYSBzaW1wbGUgbGlzdCBvZiBjb2RlZCBzeW1wdG9tcy9tYW5pZmVzdGF0aW9ucywgb3IgcmVmZXJlbmNlcyB0byBvYnNlcnZhdGlvbnMgb3IgZm9ybWFsIGFzc2Vzc21lbnRzLCBvciBib3RoLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb25FdmlkZW5jZSBleHRlbmRzIGZoaXIuQmFja2JvbmVFbGVtZW50IHsgXHJcbiAgLyoqXHJcbiAgICogQSBtYW5pZmVzdGF0aW9uIG9yIHN5bXB0b20gdGhhdCBsZWQgdG8gdGhlIHJlY29yZGluZyBvZiB0aGlzIGNvbmRpdGlvbi5cclxuICAgKi9cclxuICBjb2RlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIExpbmtzIHRvIG90aGVyIHJlbGV2YW50IGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgcGF0aG9sb2d5IHJlcG9ydHMuXHJcbiAgICovXHJcbiAgZGV0YWlsPzogKGZoaXIuUmVmZXJlbmNlfG51bGwpW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjbGluaWNhbCBjb25kaXRpb24sIHByb2JsZW0sIGRpYWdub3Npcywgb3Igb3RoZXIgZXZlbnQsIHNpdHVhdGlvbiwgaXNzdWUsIG9yIGNsaW5pY2FsIGNvbmNlcHQgdGhhdCBoYXMgcmlzZW4gdG8gYSBsZXZlbCBvZiBjb25jZXJuLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBDb25kaXRpb24gZXh0ZW5kcyBmaGlyLkRvbWFpblJlc291cmNlIHsgXHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2UgVHlwZSBOYW1lXHJcbiAgICovXHJcbiAgcmVzb3VyY2VUeXBlOiBcIkNvbmRpdGlvblwifG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyBhIGJ1c2luZXNzIGlkZW50aWZpZXIsIG5vdCBhIHJlc291cmNlIGlkZW50aWZpZXIgKHNlZSBbZGlzY3Vzc2lvbl0ocmVzb3VyY2UuaHRtbCNpZGVudGlmaWVycykpLiAgSXQgaXMgYmVzdCBwcmFjdGljZSBmb3IgdGhlIGlkZW50aWZpZXIgdG8gb25seSBhcHBlYXIgb24gYSBzaW5nbGUgcmVzb3VyY2UgaW5zdGFuY2UsIGhvd2V2ZXIgYnVzaW5lc3MgcHJhY3RpY2VzIG1heSBvY2Nhc2lvbmFsbHkgZGljdGF0ZSB0aGF0IG11bHRpcGxlIHJlc291cmNlIGluc3RhbmNlcyB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXIgY2FuIGV4aXN0IC0gcG9zc2libHkgZXZlbiB3aXRoIGRpZmZlcmVudCByZXNvdXJjZSB0eXBlcy4gIEZvciBleGFtcGxlLCBtdWx0aXBsZSBQYXRpZW50IGFuZCBhIFBlcnNvbiByZXNvdXJjZSBpbnN0YW5jZSBtaWdodCBzaGFyZSB0aGUgc2FtZSBzb2NpYWwgaW5zdXJhbmNlIG51bWJlci5cclxuICAgKi9cclxuICBpZGVudGlmaWVyPzogKGZoaXIuSWRlbnRpZmllcnxudWxsKVtdfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGUgZGF0YSB0eXBlIGlzIENvZGVhYmxlQ29uY2VwdCBiZWNhdXNlIGNsaW5pY2FsU3RhdHVzIGhhcyBzb21lIGNsaW5pY2FsIGp1ZGdtZW50IGludm9sdmVkLCBzdWNoIHRoYXQgdGhlcmUgbWlnaHQgbmVlZCB0byBiZSBtb3JlIHNwZWNpZmljaXR5IHRoYW4gdGhlIHJlcXVpcmVkIEZISVIgdmFsdWUgc2V0IGFsbG93cy4gRm9yIGV4YW1wbGUsIGEgU05PTUVEIGNvZGluZyBtaWdodCBhbGxvdyBmb3IgYWRkaXRpb25hbCBzcGVjaWZpY2l0eS5cclxuICAgKi9cclxuICBjbGluaWNhbFN0YXR1cz86ICdhY3RpdmUnfCdpbmFjdGl2ZSd8J3JlY3VycmVuY2UnfCdyZWxhcHNlJ3wncmVtaXNzaW9uJ3wncmVzb2x2ZWQnfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiB2ZXJpZmljYXRpb25TdGF0dXMgaXMgbm90IHJlcXVpcmVkLiAgRm9yIGV4YW1wbGUsIHdoZW4gYSBwYXRpZW50IGhhcyBhYmRvbWluYWwgcGFpbiBpbiB0aGUgRUQsIHRoZXJlIGlzIG5vdCBsaWtlbHkgZ29pbmcgdG8gYmUgYSB2ZXJpZmljYXRpb24gc3RhdHVzLlxyXG4gICAqIFRoZSBkYXRhIHR5cGUgaXMgQ29kZWFibGVDb25jZXB0IGJlY2F1c2UgdmVyaWZpY2F0aW9uU3RhdHVzIGhhcyBzb21lIGNsaW5pY2FsIGp1ZGdtZW50IGludm9sdmVkLCBzdWNoIHRoYXQgdGhlcmUgbWlnaHQgbmVlZCB0byBiZSBtb3JlIHNwZWNpZmljaXR5IHRoYW4gdGhlIHJlcXVpcmVkIEZISVIgdmFsdWUgc2V0IGFsbG93cy4gRm9yIGV4YW1wbGUsIGEgU05PTUVEIGNvZGluZyBtaWdodCBhbGxvdyBmb3IgYWRkaXRpb25hbCBzcGVjaWZpY2l0eS5cclxuICAgKi9cclxuICB2ZXJpZmljYXRpb25TdGF0dXM/OiAnY29uZmlybWVkJ3wnZGlmZmVyZW50aWFsJ3wnZW50ZXJlZC1pbi1lcnJvcid8J3Byb3Zpc2lvbmFsJ3wncmVmdXRlZCd8J3VuY29uZmlybWVkJ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogVGhlIGNhdGVnb3JpemF0aW9uIGlzIG9mdGVuIGhpZ2hseSBjb250ZXh0dWFsIGFuZCBtYXkgYXBwZWFyIHBvb3JseSBkaWZmZXJlbnRpYXRlZCBvciBub3QgdmVyeSB1c2VmdWwgaW4gb3RoZXIgY29udGV4dHMuXHJcbiAgICovXHJcbiAgY2F0ZWdvcnk/OiAoZmhpci5Db2RlYWJsZUNvbmNlcHR8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ29kaW5nIG9mIHRoZSBzZXZlcml0eSB3aXRoIGEgdGVybWlub2xvZ3kgaXMgcHJlZmVycmVkLCB3aGVyZSBwb3NzaWJsZS5cclxuICAgKi9cclxuICBzZXZlcml0eT86IGZoaXIuQ29kZWFibGVDb25jZXB0fHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJZGVudGlmaWNhdGlvbiBvZiB0aGUgY29uZGl0aW9uLCBwcm9ibGVtIG9yIGRpYWdub3Npcy5cclxuICAgKi9cclxuICBjb2RlPzogZmhpci5Db2RlYWJsZUNvbmNlcHR8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIE9ubHkgdXNlZCBpZiBub3QgaW1wbGljaXQgaW4gY29kZSBmb3VuZCBpbiBDb25kaXRpb24uY29kZS4gSWYgdGhlIHVzZSBjYXNlIHJlcXVpcmVzIGF0dHJpYnV0ZXMgZnJvbSB0aGUgQm9keVNpdGUgcmVzb3VyY2UgKGUuZy4gdG8gaWRlbnRpZnkgYW5kIHRyYWNrIHNlcGFyYXRlbHkpIHRoZW4gdXNlIHRoZSBzdGFuZGFyZCBleHRlbnNpb24gW2JvZHlTaXRlXShleHRlbnNpb24tYm9keXNpdGUuaHRtbCkuICBNYXkgYmUgYSBzdW1tYXJ5IGNvZGUsIG9yIGEgcmVmZXJlbmNlIHRvIGEgdmVyeSBwcmVjaXNlIGRlZmluaXRpb24gb2YgdGhlIGxvY2F0aW9uLCBvciBib3RoLlxyXG4gICAqL1xyXG4gIGJvZHlTaXRlPzogKGZoaXIuQ29kZWFibGVDb25jZXB0fG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB0aGUgcGF0aWVudCBvciBncm91cCB3aG8gdGhlIGNvbmRpdGlvbiByZWNvcmQgaXMgYXNzb2NpYXRlZCB3aXRoLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IGZoaXIuUmVmZXJlbmNlfG51bGw7XHJcbiAgLyoqXHJcbiAgICogVGhpcyB3aWxsIHR5cGljYWxseSBiZSB0aGUgZW5jb3VudGVyIHRoZSBldmVudCBvY2N1cnJlZCB3aXRoaW4sIGJ1dCBzb21lIGFjdGl2aXRpZXMgbWF5IGJlIGluaXRpYXRlZCBwcmlvciB0byBvciBhZnRlciB0aGUgb2ZmaWNpYWwgY29tcGxldGlvbiBvZiBhbiBlbmNvdW50ZXIgYnV0IHN0aWxsIGJlIHRpZWQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGVuY291bnRlci4gVGhpcyByZWNvcmQgaW5kaWNhdGVzIHRoZSBlbmNvdW50ZXIgdGhpcyBwYXJ0aWN1bGFyIHJlY29yZCBpcyBhc3NvY2lhdGVkIHdpdGguICBJbiB0aGUgY2FzZSBvZiBhIFwibmV3XCIgZGlhZ25vc2lzIHJlZmxlY3Rpbmcgb25nb2luZy9yZXZpc2VkIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjb25kaXRpb24sIHRoaXMgbWlnaHQgYmUgZGlzdGluY3QgZnJvbSB0aGUgZmlyc3QgZW5jb3VudGVyIGluIHdoaWNoIHRoZSB1bmRlcmx5aW5nIGNvbmRpdGlvbiB3YXMgZmlyc3QgXCJrbm93blwiLlxyXG4gICAqL1xyXG4gIGVuY291bnRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBBZ2UgaXMgZ2VuZXJhbGx5IHVzZWQgd2hlbiB0aGUgcGF0aWVudCByZXBvcnRzIGFuIGFnZSBhdCB3aGljaCB0aGUgQ29uZGl0aW9uIGJlZ2FuIHRvIG9jY3VyLlxyXG4gICAqL1xyXG4gIG9uc2V0RGF0ZVRpbWU/OiBzdHJpbmd8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEV4dGVuZGVkIHByb3BlcnRpZXMgZm9yIHByaW1pdGl2ZSBlbGVtZW50OiBDb25kaXRpb24ub25zZXRbeF1cclxuICAgKi9cclxuICBfb25zZXREYXRlVGltZT86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBBZ2UgaXMgZ2VuZXJhbGx5IHVzZWQgd2hlbiB0aGUgcGF0aWVudCByZXBvcnRzIGFuIGFnZSBhdCB3aGljaCB0aGUgQ29uZGl0aW9uIGJlZ2FuIHRvIG9jY3VyLlxyXG4gICAqL1xyXG4gIG9uc2V0QWdlPzogZmhpci5BZ2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIEFnZSBpcyBnZW5lcmFsbHkgdXNlZCB3aGVuIHRoZSBwYXRpZW50IHJlcG9ydHMgYW4gYWdlIGF0IHdoaWNoIHRoZSBDb25kaXRpb24gYmVnYW4gdG8gb2NjdXIuXHJcbiAgICovXHJcbiAgb25zZXRQZXJpb2Q/OiBmaGlyLlBlcmlvZHx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWdlIGlzIGdlbmVyYWxseSB1c2VkIHdoZW4gdGhlIHBhdGllbnQgcmVwb3J0cyBhbiBhZ2UgYXQgd2hpY2ggdGhlIENvbmRpdGlvbiBiZWdhbiB0byBvY2N1ci5cclxuICAgKi9cclxuICBvbnNldFJhbmdlPzogZmhpci5SYW5nZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWdlIGlzIGdlbmVyYWxseSB1c2VkIHdoZW4gdGhlIHBhdGllbnQgcmVwb3J0cyBhbiBhZ2UgYXQgd2hpY2ggdGhlIENvbmRpdGlvbiBiZWdhbiB0byBvY2N1ci5cclxuICAgKi9cclxuICBvbnNldFN0cmluZz86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbmRpdGlvbi5vbnNldFt4XVxyXG4gICAqL1xyXG4gIF9vbnNldFN0cmluZz86Zmhpci5GaGlyRWxlbWVudDtcclxuICAvKipcclxuICAgKiBUaGVyZSBpcyBubyBleHBsaWNpdCBkaXN0aW5jdGlvbiBiZXR3ZWVuIHJlc29sdXRpb24gYW5kIHJlbWlzc2lvbiBiZWNhdXNlIGluIG1hbnkgY2FzZXMgdGhlIGRpc3RpbmN0aW9uIGlzIG5vdCBjbGVhci4gQWdlIGlzIGdlbmVyYWxseSB1c2VkIHdoZW4gdGhlIHBhdGllbnQgcmVwb3J0cyBhbiBhZ2UgYXQgd2hpY2ggdGhlIENvbmRpdGlvbiBhYmF0ZWQuICBJZiB0aGVyZSBpcyBubyBhYmF0ZW1lbnQgZWxlbWVudCwgaXQgaXMgdW5rbm93biB3aGV0aGVyIHRoZSBjb25kaXRpb24gaGFzIHJlc29sdmVkIG9yIGVudGVyZWQgcmVtaXNzaW9uOyBhcHBsaWNhdGlvbnMgYW5kIHVzZXJzIHNob3VsZCBnZW5lcmFsbHkgYXNzdW1lIHRoYXQgdGhlIGNvbmRpdGlvbiBpcyBzdGlsbCB2YWxpZC4gIFdoZW4gYWJhdGVtZW50U3RyaW5nIGV4aXN0cywgaXQgaW1wbGllcyB0aGUgY29uZGl0aW9uIGlzIGFiYXRlZC5cclxuICAgKi9cclxuICBhYmF0ZW1lbnREYXRlVGltZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbmRpdGlvbi5hYmF0ZW1lbnRbeF1cclxuICAgKi9cclxuICBfYWJhdGVtZW50RGF0ZVRpbWU/OmZoaXIuRmhpckVsZW1lbnQ7XHJcbiAgLyoqXHJcbiAgICogVGhlcmUgaXMgbm8gZXhwbGljaXQgZGlzdGluY3Rpb24gYmV0d2VlbiByZXNvbHV0aW9uIGFuZCByZW1pc3Npb24gYmVjYXVzZSBpbiBtYW55IGNhc2VzIHRoZSBkaXN0aW5jdGlvbiBpcyBub3QgY2xlYXIuIEFnZSBpcyBnZW5lcmFsbHkgdXNlZCB3aGVuIHRoZSBwYXRpZW50IHJlcG9ydHMgYW4gYWdlIGF0IHdoaWNoIHRoZSBDb25kaXRpb24gYWJhdGVkLiAgSWYgdGhlcmUgaXMgbm8gYWJhdGVtZW50IGVsZW1lbnQsIGl0IGlzIHVua25vd24gd2hldGhlciB0aGUgY29uZGl0aW9uIGhhcyByZXNvbHZlZCBvciBlbnRlcmVkIHJlbWlzc2lvbjsgYXBwbGljYXRpb25zIGFuZCB1c2VycyBzaG91bGQgZ2VuZXJhbGx5IGFzc3VtZSB0aGF0IHRoZSBjb25kaXRpb24gaXMgc3RpbGwgdmFsaWQuICBXaGVuIGFiYXRlbWVudFN0cmluZyBleGlzdHMsIGl0IGltcGxpZXMgdGhlIGNvbmRpdGlvbiBpcyBhYmF0ZWQuXHJcbiAgICovXHJcbiAgYWJhdGVtZW50QWdlPzogZmhpci5BZ2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGlzIG5vIGV4cGxpY2l0IGRpc3RpbmN0aW9uIGJldHdlZW4gcmVzb2x1dGlvbiBhbmQgcmVtaXNzaW9uIGJlY2F1c2UgaW4gbWFueSBjYXNlcyB0aGUgZGlzdGluY3Rpb24gaXMgbm90IGNsZWFyLiBBZ2UgaXMgZ2VuZXJhbGx5IHVzZWQgd2hlbiB0aGUgcGF0aWVudCByZXBvcnRzIGFuIGFnZSBhdCB3aGljaCB0aGUgQ29uZGl0aW9uIGFiYXRlZC4gIElmIHRoZXJlIGlzIG5vIGFiYXRlbWVudCBlbGVtZW50LCBpdCBpcyB1bmtub3duIHdoZXRoZXIgdGhlIGNvbmRpdGlvbiBoYXMgcmVzb2x2ZWQgb3IgZW50ZXJlZCByZW1pc3Npb247IGFwcGxpY2F0aW9ucyBhbmQgdXNlcnMgc2hvdWxkIGdlbmVyYWxseSBhc3N1bWUgdGhhdCB0aGUgY29uZGl0aW9uIGlzIHN0aWxsIHZhbGlkLiAgV2hlbiBhYmF0ZW1lbnRTdHJpbmcgZXhpc3RzLCBpdCBpbXBsaWVzIHRoZSBjb25kaXRpb24gaXMgYWJhdGVkLlxyXG4gICAqL1xyXG4gIGFiYXRlbWVudFBlcmlvZD86IGZoaXIuUGVyaW9kfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBUaGVyZSBpcyBubyBleHBsaWNpdCBkaXN0aW5jdGlvbiBiZXR3ZWVuIHJlc29sdXRpb24gYW5kIHJlbWlzc2lvbiBiZWNhdXNlIGluIG1hbnkgY2FzZXMgdGhlIGRpc3RpbmN0aW9uIGlzIG5vdCBjbGVhci4gQWdlIGlzIGdlbmVyYWxseSB1c2VkIHdoZW4gdGhlIHBhdGllbnQgcmVwb3J0cyBhbiBhZ2UgYXQgd2hpY2ggdGhlIENvbmRpdGlvbiBhYmF0ZWQuICBJZiB0aGVyZSBpcyBubyBhYmF0ZW1lbnQgZWxlbWVudCwgaXQgaXMgdW5rbm93biB3aGV0aGVyIHRoZSBjb25kaXRpb24gaGFzIHJlc29sdmVkIG9yIGVudGVyZWQgcmVtaXNzaW9uOyBhcHBsaWNhdGlvbnMgYW5kIHVzZXJzIHNob3VsZCBnZW5lcmFsbHkgYXNzdW1lIHRoYXQgdGhlIGNvbmRpdGlvbiBpcyBzdGlsbCB2YWxpZC4gIFdoZW4gYWJhdGVtZW50U3RyaW5nIGV4aXN0cywgaXQgaW1wbGllcyB0aGUgY29uZGl0aW9uIGlzIGFiYXRlZC5cclxuICAgKi9cclxuICBhYmF0ZW1lbnRSYW5nZT86IGZoaXIuUmFuZ2V8dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGlzIG5vIGV4cGxpY2l0IGRpc3RpbmN0aW9uIGJldHdlZW4gcmVzb2x1dGlvbiBhbmQgcmVtaXNzaW9uIGJlY2F1c2UgaW4gbWFueSBjYXNlcyB0aGUgZGlzdGluY3Rpb24gaXMgbm90IGNsZWFyLiBBZ2UgaXMgZ2VuZXJhbGx5IHVzZWQgd2hlbiB0aGUgcGF0aWVudCByZXBvcnRzIGFuIGFnZSBhdCB3aGljaCB0aGUgQ29uZGl0aW9uIGFiYXRlZC4gIElmIHRoZXJlIGlzIG5vIGFiYXRlbWVudCBlbGVtZW50LCBpdCBpcyB1bmtub3duIHdoZXRoZXIgdGhlIGNvbmRpdGlvbiBoYXMgcmVzb2x2ZWQgb3IgZW50ZXJlZCByZW1pc3Npb247IGFwcGxpY2F0aW9ucyBhbmQgdXNlcnMgc2hvdWxkIGdlbmVyYWxseSBhc3N1bWUgdGhhdCB0aGUgY29uZGl0aW9uIGlzIHN0aWxsIHZhbGlkLiAgV2hlbiBhYmF0ZW1lbnRTdHJpbmcgZXhpc3RzLCBpdCBpbXBsaWVzIHRoZSBjb25kaXRpb24gaXMgYWJhdGVkLlxyXG4gICAqL1xyXG4gIGFiYXRlbWVudFN0cmluZz86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbmRpdGlvbi5hYmF0ZW1lbnRbeF1cclxuICAgKi9cclxuICBfYWJhdGVtZW50U3RyaW5nPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWNvcmRlZERhdGUgcmVwcmVzZW50cyB3aGVuIHRoaXMgcGFydGljdWxhciBDb25kaXRpb24gcmVjb3JkIHdhcyBjcmVhdGVkIGluIHRoZSBzeXN0ZW0sIHdoaWNoIGlzIG9mdGVuIGEgc3lzdGVtLWdlbmVyYXRlZCBkYXRlLlxyXG4gICAqL1xyXG4gIHJlY29yZGVkRGF0ZT86IHN0cmluZ3x1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kZWQgcHJvcGVydGllcyBmb3IgcHJpbWl0aXZlIGVsZW1lbnQ6IENvbmRpdGlvbi5yZWNvcmRlZERhdGVcclxuICAgKi9cclxuICBfcmVjb3JkZWREYXRlPzpmaGlyLkZoaXJFbGVtZW50O1xyXG4gIC8qKlxyXG4gICAqIEluZGl2aWR1YWwgd2hvIHJlY29yZGVkIHRoZSByZWNvcmQgYW5kIHRha2VzIHJlc3BvbnNpYmlsaXR5IGZvciBpdHMgY29udGVudC5cclxuICAgKi9cclxuICByZWNvcmRlcj86IGZoaXIuUmVmZXJlbmNlfHVuZGVmaW5lZDtcclxuICAvKipcclxuICAgKiBJbmRpdmlkdWFsIHdobyBpcyBtYWtpbmcgdGhlIGNvbmRpdGlvbiBzdGF0ZW1lbnQuXHJcbiAgICovXHJcbiAgYXNzZXJ0ZXI/OiBmaGlyLlJlZmVyZW5jZXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQ2xpbmljYWwgc3RhZ2Ugb3IgZ3JhZGUgb2YgYSBjb25kaXRpb24uIE1heSBpbmNsdWRlIGZvcm1hbCBzZXZlcml0eSBhc3Nlc3NtZW50cy5cclxuICAgKi9cclxuICBzdGFnZT86IChmaGlyLkNvbmRpdGlvblN0YWdlfG51bGwpW118dW5kZWZpbmVkO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBldmlkZW5jZSBtYXkgYmUgYSBzaW1wbGUgbGlzdCBvZiBjb2RlZCBzeW1wdG9tcy9tYW5pZmVzdGF0aW9ucywgb3IgcmVmZXJlbmNlcyB0byBvYnNlcnZhdGlvbnMgb3IgZm9ybWFsIGFzc2Vzc21lbnRzLCBvciBib3RoLlxyXG4gICAqL1xyXG4gIGV2aWRlbmNlPzogKGZoaXIuQ29uZGl0aW9uRXZpZGVuY2V8bnVsbClbXXx1bmRlZmluZWQ7XHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgQ29uZGl0aW9uLiBUaGlzIGlzIGEgZ2VuZXJhbCBub3Rlcy9jb21tZW50cyBlbnRyeSAgZm9yIGRlc2NyaXB0aW9uIG9mIHRoZSBDb25kaXRpb24sIGl0cyBkaWFnbm9zaXMgYW5kIHByb2dub3Npcy5cclxuICAgKi9cclxuICBub3RlPzogKGZoaXIuQW5ub3RhdGlvbnxudWxsKVtdfHVuZGVmaW5lZDtcclxufVxyXG4iXX0=