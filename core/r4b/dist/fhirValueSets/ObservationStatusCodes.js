// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/observation-status|4.3.0
/**
 * Codes providing the status of an observation.
 */
export const ObservationStatusCodes = {
    /**
     * amended: Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.
     */
    Amended: "amended",
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled: "cancelled",
    /**
     * corrected: Subsequent to being Final, the observation has been modified to correct an error in the test result.
     */
    Corrected: "corrected",
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError: "entered-in-error",
    /**
     * final: The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.
     */
    Final: "final",
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    Preliminary: "preliminary",
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    Registered: "registered",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JzZXJ2YXRpb25TdGF0dXNDb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvT2JzZXJ2YXRpb25TdGF0dXNDb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx1RUFBdUU7QUFFdkU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRztJQUNwQzs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7SUFDdEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxLQUFLLEVBQUUsT0FBTztJQUNkOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGFBQWE7SUFDMUI7O09BRUc7SUFDSCxVQUFVLEVBQUUsWUFBWTtJQUN4Qjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0NBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvb2JzZXJ2YXRpb24tc3RhdHVzfDQuMy4wXHJcblxyXG4vKipcclxuICogQ29kZXMgcHJvdmlkaW5nIHRoZSBzdGF0dXMgb2YgYW4gb2JzZXJ2YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgT2JzZXJ2YXRpb25TdGF0dXNDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhbWVuZGVkOiBTdWJzZXF1ZW50IHRvIGJlaW5nIEZpbmFsLCB0aGUgb2JzZXJ2YXRpb24gaGFzIGJlZW4gbW9kaWZpZWQgc3Vic2VxdWVudC4gIFRoaXMgaW5jbHVkZXMgdXBkYXRlcy9uZXcgaW5mb3JtYXRpb24gYW5kIGNvcnJlY3Rpb25zLlxyXG4gICAqL1xyXG4gIEFtZW5kZWQ6IFwiYW1lbmRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIG9ic2VydmF0aW9uIGlzIHVuYXZhaWxhYmxlIGJlY2F1c2UgdGhlIG1lYXN1cmVtZW50IHdhcyBub3Qgc3RhcnRlZCBvciBub3QgY29tcGxldGVkIChhbHNvIHNvbWV0aW1lcyBjYWxsZWQgXCJhYm9ydGVkXCIpLlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBjb3JyZWN0ZWQ6IFN1YnNlcXVlbnQgdG8gYmVpbmcgRmluYWwsIHRoZSBvYnNlcnZhdGlvbiBoYXMgYmVlbiBtb2RpZmllZCB0byBjb3JyZWN0IGFuIGVycm9yIGluIHRoZSB0ZXN0IHJlc3VsdC5cclxuICAgKi9cclxuICBDb3JyZWN0ZWQ6IFwiY29ycmVjdGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhlIG9ic2VydmF0aW9uIGhhcyBiZWVuIHdpdGhkcmF3biBmb2xsb3dpbmcgcHJldmlvdXMgZmluYWwgcmVsZWFzZS4gIFRoaXMgZWxlY3Ryb25pYyByZWNvcmQgc2hvdWxkIG5ldmVyIGhhdmUgZXhpc3RlZCwgdGhvdWdoIGl0IGlzIHBvc3NpYmxlIHRoYXQgcmVhbC13b3JsZCBkZWNpc2lvbnMgd2VyZSBiYXNlZCBvbiBpdC4gKElmIHJlYWwtd29ybGQgYWN0aXZpdHkgaGFzIG9jY3VycmVkLCB0aGUgc3RhdHVzIHNob3VsZCBiZSBcImNhbmNlbGxlZFwiIHJhdGhlciB0aGFuIFwiZW50ZXJlZC1pbi1lcnJvclwiLikuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gIC8qKlxyXG4gICAqIGZpbmFsOiBUaGUgb2JzZXJ2YXRpb24gaXMgY29tcGxldGUgYW5kIHRoZXJlIGFyZSBubyBmdXJ0aGVyIGFjdGlvbnMgbmVlZGVkLiBBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHN1Y2ggXCJyZWxlYXNlZFwiLCBcInNpZ25lZFwiLCBldGMgd291bGQgYmUgcmVwcmVzZW50ZWQgdXNpbmcgW1Byb3ZlbmFuY2VdKHByb3ZlbmFuY2UuaHRtbCkgd2hpY2ggcHJvdmlkZXMgbm90IG9ubHkgdGhlIGFjdCBidXQgYWxzbyB0aGUgYWN0b3JzIGFuZCBkYXRlcyBhbmQgb3RoZXIgcmVsYXRlZCBkYXRhLiBUaGVzZSBhY3Qgc3RhdGVzIHdvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCBhbiBvYnNlcnZhdGlvbiBzdGF0dXMgb2YgYHByZWxpbWluYXJ5YCB1bnRpbCB0aGV5IGFyZSBhbGwgY29tcGxldGVkIGFuZCB0aGVuIGEgc3RhdHVzIG9mIGBmaW5hbGAgd291bGQgYmUgYXBwbGllZC5cclxuICAgKi9cclxuICBGaW5hbDogXCJmaW5hbFwiLFxyXG4gIC8qKlxyXG4gICAqIHByZWxpbWluYXJ5OiBUaGlzIGlzIGFuIGluaXRpYWwgb3IgaW50ZXJpbSBvYnNlcnZhdGlvbjogZGF0YSBtYXkgYmUgaW5jb21wbGV0ZSBvciB1bnZlcmlmaWVkLlxyXG4gICAqL1xyXG4gIFByZWxpbWluYXJ5OiBcInByZWxpbWluYXJ5XCIsXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0ZXJlZDogVGhlIGV4aXN0ZW5jZSBvZiB0aGUgb2JzZXJ2YXRpb24gaXMgcmVnaXN0ZXJlZCwgYnV0IHRoZXJlIGlzIG5vIHJlc3VsdCB5ZXQgYXZhaWxhYmxlLlxyXG4gICAqL1xyXG4gIFJlZ2lzdGVyZWQ6IFwicmVnaXN0ZXJlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHVua25vd246IFRoZSBhdXRob3Jpbmcvc291cmNlIHN5c3RlbSBkb2VzIG5vdCBrbm93IHdoaWNoIG9mIHRoZSBzdGF0dXMgdmFsdWVzIGN1cnJlbnRseSBhcHBsaWVzIGZvciB0aGlzIG9ic2VydmF0aW9uLiBOb3RlOiBUaGlzIGNvbmNlcHQgaXMgbm90IHRvIGJlIHVzZWQgZm9yIFwib3RoZXJcIiAtIG9uZSBvZiB0aGUgbGlzdGVkIHN0YXR1c2VzIGlzIHByZXN1bWVkIHRvIGFwcGx5LCBidXQgdGhlIGF1dGhvcmluZy9zb3VyY2Ugc3lzdGVtIGRvZXMgbm90IGtub3cgd2hpY2guXHJcbiAgICovXHJcbiAgVW5rbm93bjogXCJ1bmtub3duXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgcHJvdmlkaW5nIHRoZSBzdGF0dXMgb2YgYW4gb2JzZXJ2YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBPYnNlcnZhdGlvblN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIE9ic2VydmF0aW9uU3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIE9ic2VydmF0aW9uU3RhdHVzQ29kZXNdO1xyXG4iXX0=