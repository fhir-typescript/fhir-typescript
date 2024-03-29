// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/goal-achievement|4.3.0
/**
 * Describes the progression, or lack thereof, towards the goal against the target.
 */
export const GoalAchievementCodes = {
    /**
     * achieved: The goal has been met.
     */
    Achieved: "achieved",
    /**
     * improving: The goal is being sought, and is progressing.
     */
    Improving: "improving",
    /**
     * in-progress: The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).
     */
    InProgress: "in-progress",
    /**
     * no-change: The goal is being sought, but the trend is flat.
     */
    NoChange: "no-change",
    /**
     * no-progress: The goal has not been met and little to no progress towards target.
     */
    NoProgress: "no-progress",
    /**
     * not-achieved: The goal has not been met and there might or might not have been progress towards target.
     */
    NotAchieved: "not-achieved",
    /**
     * not-attainable: The goal is not possible to be met.
     */
    NotAttainable: "not-attainable",
    /**
     * sustaining: The goal has been met, but ongoing activity is needed to sustain the goal objective.
     */
    Sustaining: "sustaining",
    /**
     * worsening: The goal is being sought, but is regressing.
     */
    Worsening: "worsening",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29hbEFjaGlldmVtZW50Q29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0dvYWxBY2hpZXZlbWVudENvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLHFFQUFxRTtBQUVyRTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBQ2xDOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFVBQVU7SUFDcEI7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILFVBQVUsRUFBRSxhQUFhO0lBQ3pCOztPQUVHO0lBQ0gsUUFBUSxFQUFFLFdBQVc7SUFDckI7O09BRUc7SUFDSCxVQUFVLEVBQUUsYUFBYTtJQUN6Qjs7T0FFRztJQUNILFdBQVcsRUFBRSxjQUFjO0lBQzNCOztPQUVHO0lBQ0gsYUFBYSxFQUFFLGdCQUFnQjtJQUMvQjs7T0FFRztJQUNILFVBQVUsRUFBRSxZQUFZO0lBQ3hCOztPQUVHO0lBQ0gsU0FBUyxFQUFFLFdBQVc7Q0FDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9nb2FsLWFjaGlldmVtZW50fDQuMy4wXHJcblxyXG4vKipcclxuICogRGVzY3JpYmVzIHRoZSBwcm9ncmVzc2lvbiwgb3IgbGFjayB0aGVyZW9mLCB0b3dhcmRzIHRoZSBnb2FsIGFnYWluc3QgdGhlIHRhcmdldC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBHb2FsQWNoaWV2ZW1lbnRDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhY2hpZXZlZDogVGhlIGdvYWwgaGFzIGJlZW4gbWV0LlxyXG4gICAqL1xyXG4gIEFjaGlldmVkOiBcImFjaGlldmVkXCIsXHJcbiAgLyoqXHJcbiAgICogaW1wcm92aW5nOiBUaGUgZ29hbCBpcyBiZWluZyBzb3VnaHQsIGFuZCBpcyBwcm9ncmVzc2luZy5cclxuICAgKi9cclxuICBJbXByb3Zpbmc6IFwiaW1wcm92aW5nXCIsXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBnb2FsIGlzIGJlaW5nIHNvdWdodCBidXQgaGFzIG5vdCB5ZXQgYmVlbiByZWFjaGVkLiAoQWxzbyBhcHBsaWVzIGlmIHRoZSBnb2FsIHdhcyByZWFjaGVkIGluIHRoZSBwYXN0IGJ1dCB0aGVyZSBoYXMgYmVlbiByZWdyZXNzaW9uIGFuZCB0aGUgZ29hbCBpcyBhZ2FpbiBiZWluZyBzb3VnaHQpLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IFwiaW4tcHJvZ3Jlc3NcIixcclxuICAvKipcclxuICAgKiBuby1jaGFuZ2U6IFRoZSBnb2FsIGlzIGJlaW5nIHNvdWdodCwgYnV0IHRoZSB0cmVuZCBpcyBmbGF0LlxyXG4gICAqL1xyXG4gIE5vQ2hhbmdlOiBcIm5vLWNoYW5nZVwiLFxyXG4gIC8qKlxyXG4gICAqIG5vLXByb2dyZXNzOiBUaGUgZ29hbCBoYXMgbm90IGJlZW4gbWV0IGFuZCBsaXR0bGUgdG8gbm8gcHJvZ3Jlc3MgdG93YXJkcyB0YXJnZXQuXHJcbiAgICovXHJcbiAgTm9Qcm9ncmVzczogXCJuby1wcm9ncmVzc1wiLFxyXG4gIC8qKlxyXG4gICAqIG5vdC1hY2hpZXZlZDogVGhlIGdvYWwgaGFzIG5vdCBiZWVuIG1ldCBhbmQgdGhlcmUgbWlnaHQgb3IgbWlnaHQgbm90IGhhdmUgYmVlbiBwcm9ncmVzcyB0b3dhcmRzIHRhcmdldC5cclxuICAgKi9cclxuICBOb3RBY2hpZXZlZDogXCJub3QtYWNoaWV2ZWRcIixcclxuICAvKipcclxuICAgKiBub3QtYXR0YWluYWJsZTogVGhlIGdvYWwgaXMgbm90IHBvc3NpYmxlIHRvIGJlIG1ldC5cclxuICAgKi9cclxuICBOb3RBdHRhaW5hYmxlOiBcIm5vdC1hdHRhaW5hYmxlXCIsXHJcbiAgLyoqXHJcbiAgICogc3VzdGFpbmluZzogVGhlIGdvYWwgaGFzIGJlZW4gbWV0LCBidXQgb25nb2luZyBhY3Rpdml0eSBpcyBuZWVkZWQgdG8gc3VzdGFpbiB0aGUgZ29hbCBvYmplY3RpdmUuXHJcbiAgICovXHJcbiAgU3VzdGFpbmluZzogXCJzdXN0YWluaW5nXCIsXHJcbiAgLyoqXHJcbiAgICogd29yc2VuaW5nOiBUaGUgZ29hbCBpcyBiZWluZyBzb3VnaHQsIGJ1dCBpcyByZWdyZXNzaW5nLlxyXG4gICAqL1xyXG4gIFdvcnNlbmluZzogXCJ3b3JzZW5pbmdcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgdGhlIHByb2dyZXNzaW9uLCBvciBsYWNrIHRoZXJlb2YsIHRvd2FyZHMgdGhlIGdvYWwgYWdhaW5zdCB0aGUgdGFyZ2V0LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR29hbEFjaGlldmVtZW50Q29kZVR5cGUgPSB0eXBlb2YgR29hbEFjaGlldmVtZW50Q29kZXNba2V5b2YgdHlwZW9mIEdvYWxBY2hpZXZlbWVudENvZGVzXTtcclxuIl19