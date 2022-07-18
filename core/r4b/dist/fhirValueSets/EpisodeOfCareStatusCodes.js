// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episode-of-care-status|4.3.0
/**
 * The status of the episode of care.
 */
export const EpisodeOfCareStatusCodes = {
    /**
     * active: This episode of care is current.
     */
    Active: "active",
    /**
     * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
     */
    Cancelled: "cancelled",
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: "entered-in-error",
    /**
     * finished: This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.
     */
    Finished: "finished",
    /**
     * onhold: This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).
     */
    OnHold: "onhold",
    /**
     * planned: This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.
     */
    Planned: "planned",
    /**
     * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
     */
    Waitlist: "waitlist",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9FcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsMkVBQTJFO0FBRTNFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxNQUFNLEVBQUUsUUFBUTtJQUNoQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsY0FBYyxFQUFFLGtCQUFrQjtJQUNsQzs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsTUFBTSxFQUFFLFFBQVE7SUFDaEI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0NBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZXBpc29kZS1vZi1jYXJlLXN0YXR1c3w0LjMuMFxyXG5cclxuLyoqXHJcbiAqIFRoZSBzdGF0dXMgb2YgdGhlIGVwaXNvZGUgb2YgY2FyZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogYWN0aXZlOiBUaGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBjdXJyZW50LlxyXG4gICAqL1xyXG4gIEFjdGl2ZTogXCJhY3RpdmVcIixcclxuICAvKipcclxuICAgKiBjYW5jZWxsZWQ6IFRoZSBlcGlzb2RlIG9mIGNhcmUgd2FzIGNhbmNlbGxlZCwgb3Igd2l0aGRyYXduIGZyb20gc2VydmljZSwgb2Z0ZW4gc2VsZWN0ZWQgZHVyaW5nIHRoZSBwbGFubmVkIHN0YWdlIGFzIHRoZSBwYXRpZW50IG1heSBoYXZlIGdvbmUgZWxzZXdoZXJlLCBvciB0aGUgY2lyY3Vtc3RhbmNlcyBoYXZlIGNoYW5nZWQgYW5kIHRoZSBvcmdhbml6YXRpb24gaXMgdW5hYmxlIHRvIHByb3ZpZGUgdGhlIGNhcmUuIEl0IGluZGljYXRlcyB0aGF0IHNlcnZpY2VzIHRlcm1pbmF0ZWQgb3V0c2lkZSB0aGUgcGxhbm5lZC9leHBlY3RlZCB3b3JrZmxvdy5cclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IFwiY2FuY2VsbGVkXCIsXHJcbiAgLyoqXHJcbiAgICogZW50ZXJlZC1pbi1lcnJvcjogVGhpcyBpbnN0YW5jZSBzaG91bGQgbm90IGhhdmUgYmVlbiBwYXJ0IG9mIHRoaXMgcGF0aWVudCdzIG1lZGljYWwgcmVjb3JkLlxyXG4gICAqL1xyXG4gIEVudGVyZWRJbkVycm9yOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAvKipcclxuICAgKiBmaW5pc2hlZDogVGhpcyBlcGlzb2RlIG9mIGNhcmUgaXMgZmluaXNoZWQgYW5kIHRoZSBvcmdhbml6YXRpb24gaXMgbm90IGV4cGVjdGluZyB0byBiZSBwcm92aWRpbmcgZnVydGhlciBjYXJlIHRvIHRoZSBwYXRpZW50LiBDYW4gYWxzbyBiZSBrbm93biBhcyBcImNsb3NlZFwiLCBcImNvbXBsZXRlZFwiIG9yIG90aGVyIHNpbWlsYXIgdGVybXMuXHJcbiAgICovXHJcbiAgRmluaXNoZWQ6IFwiZmluaXNoZWRcIixcclxuICAvKipcclxuICAgKiBvbmhvbGQ6IFRoaXMgZXBpc29kZSBvZiBjYXJlIGlzIG9uIGhvbGQ7IHRoZSBvcmdhbml6YXRpb24gaGFzIGxpbWl0ZWQgcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwYXRpZW50IChzdWNoIGFzIHdoaWxlIG9uIHJlc3BpdGUpLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogXCJvbmhvbGRcIixcclxuICAvKipcclxuICAgKiBwbGFubmVkOiBUaGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBwbGFubmVkIHRvIHN0YXJ0IGF0IHRoZSBkYXRlIHNwZWNpZmllZCBpbiB0aGUgcGVyaW9kLnN0YXJ0LiBEdXJpbmcgdGhpcyBzdGF0dXMsIGFuIG9yZ2FuaXphdGlvbiBtYXkgcGVyZm9ybSBhc3Nlc3NtZW50cyB0byBkZXRlcm1pbmUgaWYgdGhlIHBhdGllbnQgaXMgZWxpZ2libGUgdG8gcmVjZWl2ZSBzZXJ2aWNlcywgb3IgYmUgb3JnYW5pemluZyB0byBtYWtlIHJlc291cmNlcyBhdmFpbGFibGUgdG8gcHJvdmlkZSBjYXJlIHNlcnZpY2VzLlxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IFwicGxhbm5lZFwiLFxyXG4gIC8qKlxyXG4gICAqIHdhaXRsaXN0OiBUaGlzIGVwaXNvZGUgaGFzIGJlZW4gcGxhY2VkIG9uIGEgd2FpdGxpc3QsIHBlbmRpbmcgdGhlIGVwaXNvZGUgYmVpbmcgbWFkZSBhY3RpdmUgKG9yIGNhbmNlbGxlZCkuXHJcbiAgICovXHJcbiAgV2FpdGxpc3Q6IFwid2FpdGxpc3RcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhdHVzIG9mIHRoZSBlcGlzb2RlIG9mIGNhcmUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZVR5cGUgPSB0eXBlb2YgRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGVzW2tleW9mIHR5cGVvZiBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kZXNdO1xyXG4iXX0=