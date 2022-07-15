// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-status|1.0.2
/**
 * Indicates whether the goal has been met and is still being targeted
 */
export const GoalStatusCodes = {
    /**
     * accepted: A proposed goal was accepted
     */
    Accepted: "accepted",
    /**
     * achieved: The goal has been met and no further action is needed
     */
    Achieved: "achieved",
    /**
     * cancelled: The goal is no longer being sought
     */
    Cancelled: "cancelled",
    /**
     * in-progress: The goal is being sought but has not yet been reached.  (Also applies if goal was reached in the past but there has been regression and goal is being sought again)
     */
    InProgress: "in-progress",
    /**
     * on-hold: The goal remains a long term objective but is no longer being actively pursued for a temporary period of time.
     */
    OnHold: "on-hold",
    /**
     * planned: A goal is planned for this patient
     */
    Planned: "planned",
    /**
     * proposed: A goal is proposed for this patient
     */
    Proposed: "proposed",
    /**
     * rejected: A proposed goal was rejected
     */
    Rejected: "rejected",
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective
     */
    Sustaining: "sustaining",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbFN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Hb2FsU3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsZ0VBQWdFO0FBRWhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0lBQ3RCOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxNQUFNLEVBQUUsU0FBUztJQUNqQjs7T0FFRztJQUNILE9BQU8sRUFBRSxTQUFTO0lBQ2xCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0NBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjIuY29yZSB2ZXJzaW9uOiAxLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvZ29hbC1zdGF0dXN8MS4wLjJcclxuXHJcbi8qKlxyXG4gKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZ29hbCBoYXMgYmVlbiBtZXQgYW5kIGlzIHN0aWxsIGJlaW5nIHRhcmdldGVkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgR29hbFN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBBIHByb3Bvc2VkIGdvYWwgd2FzIGFjY2VwdGVkXHJcbiAgICovXHJcbiAgQWNjZXB0ZWQ6IFwiYWNjZXB0ZWRcIixcclxuICAvKipcclxuICAgKiBhY2hpZXZlZDogVGhlIGdvYWwgaGFzIGJlZW4gbWV0IGFuZCBubyBmdXJ0aGVyIGFjdGlvbiBpcyBuZWVkZWRcclxuICAgKi9cclxuICBBY2hpZXZlZDogXCJhY2hpZXZlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGNhbmNlbGxlZDogVGhlIGdvYWwgaXMgbm8gbG9uZ2VyIGJlaW5nIHNvdWdodFxyXG4gICAqL1xyXG4gIENhbmNlbGxlZDogXCJjYW5jZWxsZWRcIixcclxuICAvKipcclxuICAgKiBpbi1wcm9ncmVzczogVGhlIGdvYWwgaXMgYmVpbmcgc291Z2h0IGJ1dCBoYXMgbm90IHlldCBiZWVuIHJlYWNoZWQuICAoQWxzbyBhcHBsaWVzIGlmIGdvYWwgd2FzIHJlYWNoZWQgaW4gdGhlIHBhc3QgYnV0IHRoZXJlIGhhcyBiZWVuIHJlZ3Jlc3Npb24gYW5kIGdvYWwgaXMgYmVpbmcgc291Z2h0IGFnYWluKVxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAvKipcclxuICAgKiBvbi1ob2xkOiBUaGUgZ29hbCByZW1haW5zIGEgbG9uZyB0ZXJtIG9iamVjdGl2ZSBidXQgaXMgbm8gbG9uZ2VyIGJlaW5nIGFjdGl2ZWx5IHB1cnN1ZWQgZm9yIGEgdGVtcG9yYXJ5IHBlcmlvZCBvZiB0aW1lLlxyXG4gICAqL1xyXG4gIE9uSG9sZDogXCJvbi1ob2xkXCIsXHJcbiAgLyoqXHJcbiAgICogcGxhbm5lZDogQSBnb2FsIGlzIHBsYW5uZWQgZm9yIHRoaXMgcGF0aWVudFxyXG4gICAqL1xyXG4gIFBsYW5uZWQ6IFwicGxhbm5lZFwiLFxyXG4gIC8qKlxyXG4gICAqIHByb3Bvc2VkOiBBIGdvYWwgaXMgcHJvcG9zZWQgZm9yIHRoaXMgcGF0aWVudFxyXG4gICAqL1xyXG4gIFByb3Bvc2VkOiBcInByb3Bvc2VkXCIsXHJcbiAgLyoqXHJcbiAgICogcmVqZWN0ZWQ6IEEgcHJvcG9zZWQgZ29hbCB3YXMgcmVqZWN0ZWRcclxuICAgKi9cclxuICBSZWplY3RlZDogXCJyZWplY3RlZFwiLFxyXG4gIC8qKlxyXG4gICAqIHN1c3RhaW5pbmc6IFRoZSBnb2FsIGhhcyBiZWVuIG1ldCwgYnV0IG9uZ29pbmcgYWN0aXZpdHkgaXMgbmVlZGVkIHRvIHN1c3RhaW4gdGhlIGdvYWwgb2JqZWN0aXZlXHJcbiAgICovXHJcbiAgU3VzdGFpbmluZzogXCJzdXN0YWluaW5nXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGdvYWwgaGFzIGJlZW4gbWV0IGFuZCBpcyBzdGlsbCBiZWluZyB0YXJnZXRlZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR29hbFN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIEdvYWxTdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgR29hbFN0YXR1c0NvZGVzXTtcclxuIl19