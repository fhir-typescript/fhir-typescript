// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/v3-ActPriority|2016-11-11
/**
 *  A set of codes (e.g., for routine, emergency), specifying the urgency under which the Act happened, can happen, is happening, is intended to happen, or is requested/demanded to happen.
 */
export const V3ActPriorityCodes = {
    /**
     * A: As soon as possible, next highest priority after stat.
     */
    ASAP: "A",
    /**
     * CR: Filler should contact the placer as soon as results are available, even for preliminary results.  (Was "C" in HL7 version 2.3's reporting priority.)
     */
    CallbackResults: "CR",
    /**
     * CS: Filler should contact the placer (or target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    CallbackForScheduling: "CS",
    /**
     * CSP: Filler should contact the placer to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    CallbackPlacerForScheduling: "CSP",
    /**
     * CSR: Filler should contact the service recipient (target) to schedule the service.  (Was "C" in HL7 version 2.3's TQ-priority component.)
     */
    ContactRecipientForScheduling: "CSR",
    /**
     * EL: Beneficial to the patient but not essential for survival.
     */
    Elective: "EL",
    /**
     * EM: An unforeseen combination of circumstances or the resulting state that calls for immediate action.
     */
    Emergency: "EM",
    /**
     * P: Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.
     */
    Preop: "P",
    /**
     * PRN: An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.
     */
    AsNeeded: "PRN",
    /**
     * R: Routine service, do at usual work hours.
     */
    Routine: "R",
    /**
     * RR: A report should be prepared and sent as quickly as possible.
     */
    RushReporting: "RR",
    /**
     * S: With highest priority (e.g., emergency).
     */
    Stat: "S",
    /**
     * T: It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).
     */
    TimingCritical: "T",
    /**
     * UD: Drug is to be used as directed by the prescriber.
     */
    UseAsDirected: "UD",
    /**
     * UR: Calls for prompt action.
     */
    Urgent: "UR",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjNBY3RQcmlvcml0eUNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9WM0FjdFByaW9yaXR5Q29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsd0VBQXdFO0FBRXhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUc7SUFDaEM7O09BRUc7SUFDSCxJQUFJLEVBQUUsR0FBRztJQUNUOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUk7SUFDckI7O09BRUc7SUFDSCxxQkFBcUIsRUFBRSxJQUFJO0lBQzNCOztPQUVHO0lBQ0gsMkJBQTJCLEVBQUUsS0FBSztJQUNsQzs7T0FFRztJQUNILDZCQUE2QixFQUFFLEtBQUs7SUFDcEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsSUFBSTtJQUNkOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUk7SUFDZjs7T0FFRztJQUNILEtBQUssRUFBRSxHQUFHO0lBQ1Y7O09BRUc7SUFDSCxRQUFRLEVBQUUsS0FBSztJQUNmOztPQUVHO0lBQ0gsT0FBTyxFQUFFLEdBQUc7SUFDWjs7T0FFRztJQUNILGFBQWEsRUFBRSxJQUFJO0lBQ25COztPQUVHO0lBQ0gsSUFBSSxFQUFFLEdBQUc7SUFDVDs7T0FFRztJQUNILGNBQWMsRUFBRSxHQUFHO0lBQ25COztPQUVHO0lBQ0gsYUFBYSxFQUFFLElBQUk7SUFDbkI7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSTtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvdjMtQWN0UHJpb3JpdHl8MjAxNi0xMS0xMVxyXG5cclxuLyoqXHJcbiAqICBBIHNldCBvZiBjb2RlcyAoZS5nLiwgZm9yIHJvdXRpbmUsIGVtZXJnZW5jeSksIHNwZWNpZnlpbmcgdGhlIHVyZ2VuY3kgdW5kZXIgd2hpY2ggdGhlIEFjdCBoYXBwZW5lZCwgY2FuIGhhcHBlbiwgaXMgaGFwcGVuaW5nLCBpcyBpbnRlbmRlZCB0byBoYXBwZW4sIG9yIGlzIHJlcXVlc3RlZC9kZW1hbmRlZCB0byBoYXBwZW4uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVjNBY3RQcmlvcml0eUNvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIEE6IEFzIHNvb24gYXMgcG9zc2libGUsIG5leHQgaGlnaGVzdCBwcmlvcml0eSBhZnRlciBzdGF0LlxyXG4gICAqL1xyXG4gIEFTQVA6IFwiQVwiLFxyXG4gIC8qKlxyXG4gICAqIENSOiBGaWxsZXIgc2hvdWxkIGNvbnRhY3QgdGhlIHBsYWNlciBhcyBzb29uIGFzIHJlc3VsdHMgYXJlIGF2YWlsYWJsZSwgZXZlbiBmb3IgcHJlbGltaW5hcnkgcmVzdWx0cy4gIChXYXMgXCJDXCIgaW4gSEw3IHZlcnNpb24gMi4zJ3MgcmVwb3J0aW5nIHByaW9yaXR5LilcclxuICAgKi9cclxuICBDYWxsYmFja1Jlc3VsdHM6IFwiQ1JcIixcclxuICAvKipcclxuICAgKiBDUzogRmlsbGVyIHNob3VsZCBjb250YWN0IHRoZSBwbGFjZXIgKG9yIHRhcmdldCkgdG8gc2NoZWR1bGUgdGhlIHNlcnZpY2UuICAoV2FzIFwiQ1wiIGluIEhMNyB2ZXJzaW9uIDIuMydzIFRRLXByaW9yaXR5IGNvbXBvbmVudC4pXHJcbiAgICovXHJcbiAgQ2FsbGJhY2tGb3JTY2hlZHVsaW5nOiBcIkNTXCIsXHJcbiAgLyoqXHJcbiAgICogQ1NQOiBGaWxsZXIgc2hvdWxkIGNvbnRhY3QgdGhlIHBsYWNlciB0byBzY2hlZHVsZSB0aGUgc2VydmljZS4gIChXYXMgXCJDXCIgaW4gSEw3IHZlcnNpb24gMi4zJ3MgVFEtcHJpb3JpdHkgY29tcG9uZW50LilcclxuICAgKi9cclxuICBDYWxsYmFja1BsYWNlckZvclNjaGVkdWxpbmc6IFwiQ1NQXCIsXHJcbiAgLyoqXHJcbiAgICogQ1NSOiBGaWxsZXIgc2hvdWxkIGNvbnRhY3QgdGhlIHNlcnZpY2UgcmVjaXBpZW50ICh0YXJnZXQpIHRvIHNjaGVkdWxlIHRoZSBzZXJ2aWNlLiAgKFdhcyBcIkNcIiBpbiBITDcgdmVyc2lvbiAyLjMncyBUUS1wcmlvcml0eSBjb21wb25lbnQuKVxyXG4gICAqL1xyXG4gIENvbnRhY3RSZWNpcGllbnRGb3JTY2hlZHVsaW5nOiBcIkNTUlwiLFxyXG4gIC8qKlxyXG4gICAqIEVMOiBCZW5lZmljaWFsIHRvIHRoZSBwYXRpZW50IGJ1dCBub3QgZXNzZW50aWFsIGZvciBzdXJ2aXZhbC5cclxuICAgKi9cclxuICBFbGVjdGl2ZTogXCJFTFwiLFxyXG4gIC8qKlxyXG4gICAqIEVNOiBBbiB1bmZvcmVzZWVuIGNvbWJpbmF0aW9uIG9mIGNpcmN1bXN0YW5jZXMgb3IgdGhlIHJlc3VsdGluZyBzdGF0ZSB0aGF0IGNhbGxzIGZvciBpbW1lZGlhdGUgYWN0aW9uLlxyXG4gICAqL1xyXG4gIEVtZXJnZW5jeTogXCJFTVwiLFxyXG4gIC8qKlxyXG4gICAqIFA6IFVzZWQgdG8gaW5kaWNhdGUgdGhhdCBhIHNlcnZpY2UgaXMgdG8gYmUgcGVyZm9ybWVkIHByaW9yIHRvIGEgc2NoZWR1bGVkIHN1cmdlcnkuICBXaGVuIG9yZGVyaW5nIGEgc2VydmljZSBhbmQgdXNpbmcgdGhlIHByZS1vcCBwcmlvcml0eSwgYSBjaGVjayBpcyBkb25lIHRvIHNlZSB0aGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IGJlIGFsbG93ZWQgZm9yIHBlcmZvcm1hbmNlIG9mIHRoZSBzZXJ2aWNlLiAgV2hlbiB0aGUgb3JkZXIgaXMgcGxhY2VkLCBhIG1lc3NhZ2UgY2FuIGJlIGdlbmVyYXRlZCBpbmRpY2F0aW5nIHRoZSB0aW1lIG5lZWRlZCBmb3IgdGhlIHNlcnZpY2Ugc28gdGhhdCBpdCBpcyBub3Qgb3JkZXJlZCBpbiBjb25mbGljdCB3aXRoIGEgc2NoZWR1bGVkIG9wZXJhdGlvbi5cclxuICAgKi9cclxuICBQcmVvcDogXCJQXCIsXHJcbiAgLyoqXHJcbiAgICogUFJOOiBBbiBcImFzIG5lZWRlZFwiIG9yZGVyIHNob3VsZCBiZSBhY2NvbXBhbmllZCBieSBhIGRlc2NyaXB0aW9uIG9mIHdoYXQgY29uc3RpdHV0ZXMgYSBuZWVkLiBUaGlzIGRlc2NyaXB0aW9uIGlzIHJlcHJlc2VudGVkIGJ5IGFuIG9ic2VydmF0aW9uIHNlcnZpY2UgcHJlZGljYXRlIGFzIGEgcHJlY29uZGl0aW9uLlxyXG4gICAqL1xyXG4gIEFzTmVlZGVkOiBcIlBSTlwiLFxyXG4gIC8qKlxyXG4gICAqIFI6IFJvdXRpbmUgc2VydmljZSwgZG8gYXQgdXN1YWwgd29yayBob3Vycy5cclxuICAgKi9cclxuICBSb3V0aW5lOiBcIlJcIixcclxuICAvKipcclxuICAgKiBSUjogQSByZXBvcnQgc2hvdWxkIGJlIHByZXBhcmVkIGFuZCBzZW50IGFzIHF1aWNrbHkgYXMgcG9zc2libGUuXHJcbiAgICovXHJcbiAgUnVzaFJlcG9ydGluZzogXCJSUlwiLFxyXG4gIC8qKlxyXG4gICAqIFM6IFdpdGggaGlnaGVzdCBwcmlvcml0eSAoZS5nLiwgZW1lcmdlbmN5KS5cclxuICAgKi9cclxuICBTdGF0OiBcIlNcIixcclxuICAvKipcclxuICAgKiBUOiBJdCBpcyBjcml0aWNhbCB0byBjb21lIGFzIGNsb3NlIGFzIHBvc3NpYmxlIHRvIHRoZSByZXF1ZXN0ZWQgdGltZSAoZS5nLiwgZm9yIGEgdGhyb3VnaCBhbnRpbWljcm9iaWFsIGxldmVsKS5cclxuICAgKi9cclxuICBUaW1pbmdDcml0aWNhbDogXCJUXCIsXHJcbiAgLyoqXHJcbiAgICogVUQ6IERydWcgaXMgdG8gYmUgdXNlZCBhcyBkaXJlY3RlZCBieSB0aGUgcHJlc2NyaWJlci5cclxuICAgKi9cclxuICBVc2VBc0RpcmVjdGVkOiBcIlVEXCIsXHJcbiAgLyoqXHJcbiAgICogVVI6IENhbGxzIGZvciBwcm9tcHQgYWN0aW9uLlxyXG4gICAqL1xyXG4gIFVyZ2VudDogXCJVUlwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqICBBIHNldCBvZiBjb2RlcyAoZS5nLiwgZm9yIHJvdXRpbmUsIGVtZXJnZW5jeSksIHNwZWNpZnlpbmcgdGhlIHVyZ2VuY3kgdW5kZXIgd2hpY2ggdGhlIEFjdCBoYXBwZW5lZCwgY2FuIGhhcHBlbiwgaXMgaGFwcGVuaW5nLCBpcyBpbnRlbmRlZCB0byBoYXBwZW4sIG9yIGlzIHJlcXVlc3RlZC9kZW1hbmRlZCB0byBoYXBwZW4uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWM0FjdFByaW9yaXR5Q29kZVR5cGUgPSB0eXBlb2YgVjNBY3RQcmlvcml0eUNvZGVzW2tleW9mIHR5cGVvZiBWM0FjdFByaW9yaXR5Q29kZXNdO1xyXG4iXX0=