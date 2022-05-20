// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/encounter-status|4.0.1
/**
 * Current state of the encounter.
 */
export const EncounterStatusCodes = {
    /**
     * arrived: The Patient is present for the encounter, however is not currently meeting with a practitioner.
     */
    Arrived: "arrived",
    /**
     * cancelled: The Encounter has ended before it has begun.
     */
    Cancelled: "cancelled",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: "entered-in-error",
    /**
     * finished: The Encounter has ended.
     */
    Finished: "finished",
    /**
     * in-progress: The Encounter has begun and the patient is present / the practitioner and the patient are meeting.
     */
    InProgress: "in-progress",
    /**
     * onleave: The Encounter has begun, but the patient is temporarily on leave.
     */
    OnLeave: "onleave",
    /**
     * planned: The Encounter has not yet started.
     */
    Planned: "planned",
    /**
     * triaged: The patient has been assessed for the priority of their treatment based on the severity of their condition.
     */
    Triaged: "triaged",
    /**
     * unknown: The encounter status is unknown. Note that "unknown" is a value of last resort and every attempt should be made to provide a meaningful value other than "unknown".
     */
    Unknown: "unknown",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5jb3VudGVyU3RhdHVzQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0VuY291bnRlclN0YXR1c0NvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILGNBQWMsRUFBRSxrQkFBa0I7SUFDbEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7SUFDbEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFNBQVM7Q0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VuY291bnRlci1zdGF0dXN8NC4wLjFcclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IHN0YXRlIG9mIHRoZSBlbmNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRW5jb3VudGVyU3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYXJyaXZlZDogVGhlIFBhdGllbnQgaXMgcHJlc2VudCBmb3IgdGhlIGVuY291bnRlciwgaG93ZXZlciBpcyBub3QgY3VycmVudGx5IG1lZXRpbmcgd2l0aCBhIHByYWN0aXRpb25lci5cclxuICAgKi9cclxuICBBcnJpdmVkOiBcImFycml2ZWRcIixcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBFbmNvdW50ZXIgaGFzIGVuZGVkIGJlZm9yZSBpdCBoYXMgYmVndW4uXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiBcImNhbmNlbGxlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgaW5zdGFuY2Ugc2hvdWxkIG5vdCBoYXZlIGJlZW4gcGFydCBvZiB0aGlzIHBhdGllbnQncyBtZWRpY2FsIHJlY29yZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogZmluaXNoZWQ6IFRoZSBFbmNvdW50ZXIgaGFzIGVuZGVkLlxyXG4gICAqL1xyXG4gIEZpbmlzaGVkOiBcImZpbmlzaGVkXCIsXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBFbmNvdW50ZXIgaGFzIGJlZ3VuIGFuZCB0aGUgcGF0aWVudCBpcyBwcmVzZW50IC8gdGhlIHByYWN0aXRpb25lciBhbmQgdGhlIHBhdGllbnQgYXJlIG1lZXRpbmcuXHJcbiAgICovXHJcbiAgSW5Qcm9ncmVzczogXCJpbi1wcm9ncmVzc1wiLFxyXG4gIC8qKlxyXG4gICAqIG9ubGVhdmU6IFRoZSBFbmNvdW50ZXIgaGFzIGJlZ3VuLCBidXQgdGhlIHBhdGllbnQgaXMgdGVtcG9yYXJpbHkgb24gbGVhdmUuXHJcbiAgICovXHJcbiAgT25MZWF2ZTogXCJvbmxlYXZlXCIsXHJcbiAgLyoqXHJcbiAgICogcGxhbm5lZDogVGhlIEVuY291bnRlciBoYXMgbm90IHlldCBzdGFydGVkLlxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IFwicGxhbm5lZFwiLFxyXG4gIC8qKlxyXG4gICAqIHRyaWFnZWQ6IFRoZSBwYXRpZW50IGhhcyBiZWVuIGFzc2Vzc2VkIGZvciB0aGUgcHJpb3JpdHkgb2YgdGhlaXIgdHJlYXRtZW50IGJhc2VkIG9uIHRoZSBzZXZlcml0eSBvZiB0aGVpciBjb25kaXRpb24uXHJcbiAgICovXHJcbiAgVHJpYWdlZDogXCJ0cmlhZ2VkXCIsXHJcbiAgLyoqXHJcbiAgICogdW5rbm93bjogVGhlIGVuY291bnRlciBzdGF0dXMgaXMgdW5rbm93bi4gTm90ZSB0aGF0IFwidW5rbm93blwiIGlzIGEgdmFsdWUgb2YgbGFzdCByZXNvcnQgYW5kIGV2ZXJ5IGF0dGVtcHQgc2hvdWxkIGJlIG1hZGUgdG8gcHJvdmlkZSBhIG1lYW5pbmdmdWwgdmFsdWUgb3RoZXIgdGhhbiBcInVua25vd25cIi5cclxuICAgKi9cclxuICBVbmtub3duOiBcInVua25vd25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IHN0YXRlIG9mIHRoZSBlbmNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbmNvdW50ZXJTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBFbmNvdW50ZXJTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgRW5jb3VudGVyU3RhdHVzQ29kZXNdO1xyXG4iXX0=