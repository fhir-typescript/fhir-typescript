// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/episode-of-care-status|4.3.0
/**
 * The status of the episode of care.
 */
export const EpisodeOfCareStatusCodings = {
    /**
     * active: This episode of care is current.
     */
    Active: {
        display: "Active",
        code: "active",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * cancelled: The episode of care was cancelled, or withdrawn from service, often selected during the planned stage as the patient may have gone elsewhere, or the circumstances have changed and the organization is unable to provide the care. It indicates that services terminated outside the planned/expected workflow.
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * entered-in-error: This instance should not have been part of this patient's medical record.
     */
    EnteredInError: {
        display: "Entered in Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * finished: This episode of care is finished and the organization is not expecting to be providing further care to the patient. Can also be known as "closed", "completed" or other similar terms.
     */
    Finished: {
        display: "Finished",
        code: "finished",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * onhold: This episode of care is on hold; the organization has limited responsibility for the patient (such as while on respite).
     */
    OnHold: {
        display: "On Hold",
        code: "onhold",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * planned: This episode of care is planned to start at the date specified in the period.start. During this status, an organization may perform assessments to determine if the patient is eligible to receive services, or be organizing to make resources available to provide care services.
     */
    Planned: {
        display: "Planned",
        code: "planned",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
    /**
     * waitlist: This episode has been placed on a waitlist, pending the episode being made active (or cancelled).
     */
    Waitlist: {
        display: "Waitlist",
        code: "waitlist",
        system: "http://hl7.org/fhir/episode-of-care-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXBpc29kZU9mQ2FyZVN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0VwaXNvZGVPZkNhcmVTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDJFQUEyRTtBQXNDM0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILFNBQVMsRUFBRTtRQUNULE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUsNENBQTRDO0tBQ3JEO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsNENBQTRDO0tBQ3JEO0lBQ0Q7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0Q0FBNEM7S0FDckQ7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLDRDQUE0QztLQUNyRDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2VwaXNvZGUtb2YtY2FyZS1zdGF0dXN8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhdHVzIG9mIHRoZSBlcGlzb2RlIG9mIGNhcmUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFcGlzb2RlT2ZDYXJlU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhY3RpdmU6IFRoaXMgZXBpc29kZSBvZiBjYXJlIGlzIGN1cnJlbnQuXHJcbiAgICovXHJcbiAgQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIGVwaXNvZGUgb2YgY2FyZSB3YXMgY2FuY2VsbGVkLCBvciB3aXRoZHJhd24gZnJvbSBzZXJ2aWNlLCBvZnRlbiBzZWxlY3RlZCBkdXJpbmcgdGhlIHBsYW5uZWQgc3RhZ2UgYXMgdGhlIHBhdGllbnQgbWF5IGhhdmUgZ29uZSBlbHNld2hlcmUsIG9yIHRoZSBjaXJjdW1zdGFuY2VzIGhhdmUgY2hhbmdlZCBhbmQgdGhlIG9yZ2FuaXphdGlvbiBpcyB1bmFibGUgdG8gcHJvdmlkZSB0aGUgY2FyZS4gSXQgaW5kaWNhdGVzIHRoYXQgc2VydmljZXMgdGVybWluYXRlZCBvdXRzaWRlIHRoZSBwbGFubmVkL2V4cGVjdGVkIHdvcmtmbG93LlxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIGluc3RhbmNlIHNob3VsZCBub3QgaGF2ZSBiZWVuIHBhcnQgb2YgdGhpcyBwYXRpZW50J3MgbWVkaWNhbCByZWNvcmQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZmluaXNoZWQ6IFRoaXMgZXBpc29kZSBvZiBjYXJlIGlzIGZpbmlzaGVkIGFuZCB0aGUgb3JnYW5pemF0aW9uIGlzIG5vdCBleHBlY3RpbmcgdG8gYmUgcHJvdmlkaW5nIGZ1cnRoZXIgY2FyZSB0byB0aGUgcGF0aWVudC4gQ2FuIGFsc28gYmUga25vd24gYXMgXCJjbG9zZWRcIiwgXCJjb21wbGV0ZWRcIiBvciBvdGhlciBzaW1pbGFyIHRlcm1zLlxyXG4gICAqL1xyXG4gIEZpbmlzaGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uaG9sZDogVGhpcyBlcGlzb2RlIG9mIGNhcmUgaXMgb24gaG9sZDsgdGhlIG9yZ2FuaXphdGlvbiBoYXMgbGltaXRlZCByZXNwb25zaWJpbGl0eSBmb3IgdGhlIHBhdGllbnQgKHN1Y2ggYXMgd2hpbGUgb24gcmVzcGl0ZSkuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQ6IFRoaXMgZXBpc29kZSBvZiBjYXJlIGlzIHBsYW5uZWQgdG8gc3RhcnQgYXQgdGhlIGRhdGUgc3BlY2lmaWVkIGluIHRoZSBwZXJpb2Quc3RhcnQuIER1cmluZyB0aGlzIHN0YXR1cywgYW4gb3JnYW5pemF0aW9uIG1heSBwZXJmb3JtIGFzc2Vzc21lbnRzIHRvIGRldGVybWluZSBpZiB0aGUgcGF0aWVudCBpcyBlbGlnaWJsZSB0byByZWNlaXZlIHNlcnZpY2VzLCBvciBiZSBvcmdhbml6aW5nIHRvIG1ha2UgcmVzb3VyY2VzIGF2YWlsYWJsZSB0byBwcm92aWRlIGNhcmUgc2VydmljZXMuXHJcbiAgICovXHJcbiAgUGxhbm5lZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiB3YWl0bGlzdDogVGhpcyBlcGlzb2RlIGhhcyBiZWVuIHBsYWNlZCBvbiBhIHdhaXRsaXN0LCBwZW5kaW5nIHRoZSBlcGlzb2RlIGJlaW5nIG1hZGUgYWN0aXZlIChvciBjYW5jZWxsZWQpLlxyXG4gICAqL1xyXG4gIFdhaXRsaXN0OiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0YXR1cyBvZiB0aGUgZXBpc29kZSBvZiBjYXJlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVwaXNvZGVPZkNhcmVTdGF0dXNDb2RpbmdzOkVwaXNvZGVPZkNhcmVTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjdGl2ZTogVGhpcyBlcGlzb2RlIG9mIGNhcmUgaXMgY3VycmVudC5cclxuICAgKi9cclxuICBBY3RpdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiQWN0aXZlXCIsXHJcbiAgICBjb2RlOiBcImFjdGl2ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZXBpc29kZS1vZi1jYXJlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgZXBpc29kZSBvZiBjYXJlIHdhcyBjYW5jZWxsZWQsIG9yIHdpdGhkcmF3biBmcm9tIHNlcnZpY2UsIG9mdGVuIHNlbGVjdGVkIGR1cmluZyB0aGUgcGxhbm5lZCBzdGFnZSBhcyB0aGUgcGF0aWVudCBtYXkgaGF2ZSBnb25lIGVsc2V3aGVyZSwgb3IgdGhlIGNpcmN1bXN0YW5jZXMgaGF2ZSBjaGFuZ2VkIGFuZCB0aGUgb3JnYW5pemF0aW9uIGlzIHVuYWJsZSB0byBwcm92aWRlIHRoZSBjYXJlLiBJdCBpbmRpY2F0ZXMgdGhhdCBzZXJ2aWNlcyB0ZXJtaW5hdGVkIG91dHNpZGUgdGhlIHBsYW5uZWQvZXhwZWN0ZWQgd29ya2Zsb3cuXHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkNhbmNlbGxlZFwiLFxyXG4gICAgY29kZTogXCJjYW5jZWxsZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VwaXNvZGUtb2YtY2FyZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgaW5zdGFuY2Ugc2hvdWxkIG5vdCBoYXZlIGJlZW4gcGFydCBvZiB0aGlzIHBhdGllbnQncyBtZWRpY2FsIHJlY29yZC5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjoge1xyXG4gICAgZGlzcGxheTogXCJFbnRlcmVkIGluIEVycm9yXCIsXHJcbiAgICBjb2RlOiBcImVudGVyZWQtaW4tZXJyb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VwaXNvZGUtb2YtY2FyZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGZpbmlzaGVkOiBUaGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBmaW5pc2hlZCBhbmQgdGhlIG9yZ2FuaXphdGlvbiBpcyBub3QgZXhwZWN0aW5nIHRvIGJlIHByb3ZpZGluZyBmdXJ0aGVyIGNhcmUgdG8gdGhlIHBhdGllbnQuIENhbiBhbHNvIGJlIGtub3duIGFzIFwiY2xvc2VkXCIsIFwiY29tcGxldGVkXCIgb3Igb3RoZXIgc2ltaWxhciB0ZXJtcy5cclxuICAgKi9cclxuICBGaW5pc2hlZDoge1xyXG4gICAgZGlzcGxheTogXCJGaW5pc2hlZFwiLFxyXG4gICAgY29kZTogXCJmaW5pc2hlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZXBpc29kZS1vZi1jYXJlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb25ob2xkOiBUaGlzIGVwaXNvZGUgb2YgY2FyZSBpcyBvbiBob2xkOyB0aGUgb3JnYW5pemF0aW9uIGhhcyBsaW1pdGVkIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgcGF0aWVudCAoc3VjaCBhcyB3aGlsZSBvbiByZXNwaXRlKS5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbmhvbGRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VwaXNvZGUtb2YtY2FyZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQ6IFRoaXMgZXBpc29kZSBvZiBjYXJlIGlzIHBsYW5uZWQgdG8gc3RhcnQgYXQgdGhlIGRhdGUgc3BlY2lmaWVkIGluIHRoZSBwZXJpb2Quc3RhcnQuIER1cmluZyB0aGlzIHN0YXR1cywgYW4gb3JnYW5pemF0aW9uIG1heSBwZXJmb3JtIGFzc2Vzc21lbnRzIHRvIGRldGVybWluZSBpZiB0aGUgcGF0aWVudCBpcyBlbGlnaWJsZSB0byByZWNlaXZlIHNlcnZpY2VzLCBvciBiZSBvcmdhbml6aW5nIHRvIG1ha2UgcmVzb3VyY2VzIGF2YWlsYWJsZSB0byBwcm92aWRlIGNhcmUgc2VydmljZXMuXHJcbiAgICovXHJcbiAgUGxhbm5lZDoge1xyXG4gICAgZGlzcGxheTogXCJQbGFubmVkXCIsXHJcbiAgICBjb2RlOiBcInBsYW5uZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VwaXNvZGUtb2YtY2FyZS1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHdhaXRsaXN0OiBUaGlzIGVwaXNvZGUgaGFzIGJlZW4gcGxhY2VkIG9uIGEgd2FpdGxpc3QsIHBlbmRpbmcgdGhlIGVwaXNvZGUgYmVpbmcgbWFkZSBhY3RpdmUgKG9yIGNhbmNlbGxlZCkuXHJcbiAgICovXHJcbiAgV2FpdGxpc3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiV2FpdGxpc3RcIixcclxuICAgIGNvZGU6IFwid2FpdGxpc3RcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2VwaXNvZGUtb2YtY2FyZS1zdGF0dXNcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=