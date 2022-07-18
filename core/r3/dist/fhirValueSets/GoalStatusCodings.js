// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-status|3.0.2
/**
 * Indicates whether the goal has been met and is still being targeted
 */
export const GoalStatusCodings = {
    /**
     * accepted: A proposed goal was accepted or acknowledged
     */
    Accepted: {
        display: "Accepted",
        code: "accepted",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * achieved: The goal has been met and no further action is needed
     */
    Achieved: {
        display: "Achieved",
        code: "achieved",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * ahead-of-target: The goal is ahead of the planned timelines
     */
    AheadOfTarget: {
        display: "Ahead of Target",
        code: "ahead-of-target",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * behind-target: The goal is behind the planned timelines
     */
    BehindTarget: {
        display: "Behind Target",
        code: "behind-target",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * cancelled: The previously accepted goal is no longer being sought
     */
    Cancelled: {
        display: "Cancelled",
        code: "cancelled",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * entered-in-error: The goal was entered in error and voided.
     */
    EnteredInError: {
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * in-progress: The goal is being sought but has not yet been reached.  (Also applies if goal was reached in the past but there has been regression and goal is being sought again)
     */
    InProgress: {
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    OnHold: {
        display: "On Hold",
        code: "on-hold",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * on-target: The goal is on schedule for the planned timelines
     */
    OnTarget: {
        display: "On Target",
        code: "on-target",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * planned: A goal is planned for this patient
     */
    Planned: {
        display: "Planned",
        code: "planned",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * proposed: A goal is proposed for this patient
     */
    Proposed: {
        display: "Proposed",
        code: "proposed",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * rejected: A proposed goal was rejected
     */
    Rejected: {
        display: "Rejected",
        code: "rejected",
        system: "http://hl7.org/fhir/goal-status",
    },
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective
     */
    Sustaining: {
        display: "Sustaining",
        code: "sustaining",
        system: "http://hl7.org/fhir/goal-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFN0YXR1c0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0dvYWxTdGF0dXNDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLGdFQUFnRTtBQThEaEU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBd0I7SUFDcEQ7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsY0FBYyxFQUFFO1FBQ2QsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLElBQUksRUFBRSxhQUFhO1FBQ25CLE1BQU0sRUFBRSxpQ0FBaUM7S0FDMUM7SUFDRDs7T0FFRztJQUNILE1BQU0sRUFBRTtRQUNOLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLGlDQUFpQztLQUMxQztJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsaUNBQWlDO0tBQzFDO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9nb2FsLXN0YXR1c3wzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBnb2FsIGhhcyBiZWVuIG1ldCBhbmQgaXMgc3RpbGwgYmVpbmcgdGFyZ2V0ZWRcclxuICovXHJcbmV4cG9ydCB0eXBlIEdvYWxTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBBIHByb3Bvc2VkIGdvYWwgd2FzIGFjY2VwdGVkIG9yIGFja25vd2xlZGdlZFxyXG4gICAqL1xyXG4gIEFjY2VwdGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGFjaGlldmVkOiBUaGUgZ29hbCBoYXMgYmVlbiBtZXQgYW5kIG5vIGZ1cnRoZXIgYWN0aW9uIGlzIG5lZWRlZFxyXG4gICAqL1xyXG4gIEFjaGlldmVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGFoZWFkLW9mLXRhcmdldDogVGhlIGdvYWwgaXMgYWhlYWQgb2YgdGhlIHBsYW5uZWQgdGltZWxpbmVzXHJcbiAgICovXHJcbiAgQWhlYWRPZlRhcmdldDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBiZWhpbmQtdGFyZ2V0OiBUaGUgZ29hbCBpcyBiZWhpbmQgdGhlIHBsYW5uZWQgdGltZWxpbmVzXHJcbiAgICovXHJcbiAgQmVoaW5kVGFyZ2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIHByZXZpb3VzbHkgYWNjZXB0ZWQgZ29hbCBpcyBubyBsb25nZXIgYmVpbmcgc291Z2h0XHJcbiAgICovXHJcbiAgQ2FuY2VsbGVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBnb2FsIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB2b2lkZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBnb2FsIGlzIGJlaW5nIHNvdWdodCBidXQgaGFzIG5vdCB5ZXQgYmVlbiByZWFjaGVkLiAgKEFsc28gYXBwbGllcyBpZiBnb2FsIHdhcyByZWFjaGVkIGluIHRoZSBwYXN0IGJ1dCB0aGVyZSBoYXMgYmVlbiByZWdyZXNzaW9uIGFuZCBnb2FsIGlzIGJlaW5nIHNvdWdodCBhZ2FpbilcclxuICAgKi9cclxuICBJblByb2dyZXNzOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uLWhvbGQ6IFRoZSBnb2FsIHJlbWFpbnMgYSBsb25nIHRlcm0gb2JqZWN0aXZlIGJ1dCBpcyBubyBsb25nZXIgYmVpbmcgYWN0aXZlbHkgcHVyc3VlZCBmb3IgYSB0ZW1wb3JhcnkgcGVyaW9kIG9mIHRpbWUuXHJcbiAgICovXHJcbiAgT25Ib2xkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9uLXRhcmdldDogVGhlIGdvYWwgaXMgb24gc2NoZWR1bGUgZm9yIHRoZSBwbGFubmVkIHRpbWVsaW5lc1xyXG4gICAqL1xyXG4gIE9uVGFyZ2V0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQ6IEEgZ29hbCBpcyBwbGFubmVkIGZvciB0aGlzIHBhdGllbnRcclxuICAgKi9cclxuICBQbGFubmVkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBBIGdvYWwgaXMgcHJvcG9zZWQgZm9yIHRoaXMgcGF0aWVudFxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlamVjdGVkOiBBIHByb3Bvc2VkIGdvYWwgd2FzIHJlamVjdGVkXHJcbiAgICovXHJcbiAgUmVqZWN0ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogc3VzdGFpbmluZzogVGhlIGdvYWwgaGFzIGJlZW4gbWV0LCBidXQgb25nb2luZyBhY3Rpdml0eSBpcyBuZWVkZWQgdG8gc3VzdGFpbiB0aGUgZ29hbCBvYmplY3RpdmVcclxuICAgKi9cclxuICBTdXN0YWluaW5nOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdvYWwgaGFzIGJlZW4gbWV0IGFuZCBpcyBzdGlsbCBiZWluZyB0YXJnZXRlZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEdvYWxTdGF0dXNDb2RpbmdzOkdvYWxTdGF0dXNDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBBIHByb3Bvc2VkIGdvYWwgd2FzIGFjY2VwdGVkIG9yIGFja25vd2xlZGdlZFxyXG4gICAqL1xyXG4gIEFjY2VwdGVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIkFjY2VwdGVkXCIsXHJcbiAgICBjb2RlOiBcImFjY2VwdGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogYWNoaWV2ZWQ6IFRoZSBnb2FsIGhhcyBiZWVuIG1ldCBhbmQgbm8gZnVydGhlciBhY3Rpb24gaXMgbmVlZGVkXHJcbiAgICovXHJcbiAgQWNoaWV2ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQWNoaWV2ZWRcIixcclxuICAgIGNvZGU6IFwiYWNoaWV2ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2dvYWwtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBhaGVhZC1vZi10YXJnZXQ6IFRoZSBnb2FsIGlzIGFoZWFkIG9mIHRoZSBwbGFubmVkIHRpbWVsaW5lc1xyXG4gICAqL1xyXG4gIEFoZWFkT2ZUYXJnZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQWhlYWQgb2YgVGFyZ2V0XCIsXHJcbiAgICBjb2RlOiBcImFoZWFkLW9mLXRhcmdldFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ29hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGJlaGluZC10YXJnZXQ6IFRoZSBnb2FsIGlzIGJlaGluZCB0aGUgcGxhbm5lZCB0aW1lbGluZXNcclxuICAgKi9cclxuICBCZWhpbmRUYXJnZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQmVoaW5kIFRhcmdldFwiLFxyXG4gICAgY29kZTogXCJiZWhpbmQtdGFyZ2V0XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogY2FuY2VsbGVkOiBUaGUgcHJldmlvdXNseSBhY2NlcHRlZCBnb2FsIGlzIG5vIGxvbmdlciBiZWluZyBzb3VnaHRcclxuICAgKi9cclxuICBDYW5jZWxsZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2FuY2VsbGVkXCIsXHJcbiAgICBjb2RlOiBcImNhbmNlbGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ29hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoZSBnb2FsIHdhcyBlbnRlcmVkIGluIGVycm9yIGFuZCB2b2lkZWQuXHJcbiAgICovXHJcbiAgRW50ZXJlZEluRXJyb3I6IHtcclxuICAgIGRpc3BsYXk6IFwiRW50ZXJlZCBJbiBFcnJvclwiLFxyXG4gICAgY29kZTogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBnb2FsIGlzIGJlaW5nIHNvdWdodCBidXQgaGFzIG5vdCB5ZXQgYmVlbiByZWFjaGVkLiAgKEFsc28gYXBwbGllcyBpZiBnb2FsIHdhcyByZWFjaGVkIGluIHRoZSBwYXN0IGJ1dCB0aGVyZSBoYXMgYmVlbiByZWdyZXNzaW9uIGFuZCBnb2FsIGlzIGJlaW5nIHNvdWdodCBhZ2FpbilcclxuICAgKi9cclxuICBJblByb2dyZXNzOiB7XHJcbiAgICBkaXNwbGF5OiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICBjb2RlOiBcImluLXByb2dyZXNzXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb24taG9sZDogVGhlIGdvYWwgcmVtYWlucyBhIGxvbmcgdGVybSBvYmplY3RpdmUgYnV0IGlzIG5vIGxvbmdlciBiZWluZyBhY3RpdmVseSBwdXJzdWVkIGZvciBhIHRlbXBvcmFyeSBwZXJpb2Qgb2YgdGltZS5cclxuICAgKi9cclxuICBPbkhvbGQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gSG9sZFwiLFxyXG4gICAgY29kZTogXCJvbi1ob2xkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb24tdGFyZ2V0OiBUaGUgZ29hbCBpcyBvbiBzY2hlZHVsZSBmb3IgdGhlIHBsYW5uZWQgdGltZWxpbmVzXHJcbiAgICovXHJcbiAgT25UYXJnZXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiT24gVGFyZ2V0XCIsXHJcbiAgICBjb2RlOiBcIm9uLXRhcmdldFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ29hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHBsYW5uZWQ6IEEgZ29hbCBpcyBwbGFubmVkIGZvciB0aGlzIHBhdGllbnRcclxuICAgKi9cclxuICBQbGFubmVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlBsYW5uZWRcIixcclxuICAgIGNvZGU6IFwicGxhbm5lZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ29hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBBIGdvYWwgaXMgcHJvcG9zZWQgZm9yIHRoaXMgcGF0aWVudFxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByb3Bvc2VkXCIsXHJcbiAgICBjb2RlOiBcInByb3Bvc2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9nb2FsLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmVqZWN0ZWQ6IEEgcHJvcG9zZWQgZ29hbCB3YXMgcmVqZWN0ZWRcclxuICAgKi9cclxuICBSZWplY3RlZDoge1xyXG4gICAgZGlzcGxheTogXCJSZWplY3RlZFwiLFxyXG4gICAgY29kZTogXCJyZWplY3RlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvZ29hbC1zdGF0dXNcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN1c3RhaW5pbmc6IFRoZSBnb2FsIGhhcyBiZWVuIG1ldCwgYnV0IG9uZ29pbmcgYWN0aXZpdHkgaXMgbmVlZGVkIHRvIHN1c3RhaW4gdGhlIGdvYWwgb2JqZWN0aXZlXHJcbiAgICovXHJcbiAgU3VzdGFpbmluZzoge1xyXG4gICAgZGlzcGxheTogXCJTdXN0YWluaW5nXCIsXHJcbiAgICBjb2RlOiBcInN1c3RhaW5pbmdcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2dvYWwtc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19