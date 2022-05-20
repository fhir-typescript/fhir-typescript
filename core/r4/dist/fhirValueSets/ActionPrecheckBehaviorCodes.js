// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-precheck-behavior|4.0.1
/**
 * Defines selection frequency behavior for an action or group.
 */
export const ActionPrecheckBehaviorCodes = {
    /**
     * no: An action with this behavior is one of the less frequent actions included by the end user, for the particular context in which the action occurs. The system displaying the actions to the end user would typically not "pre-check" such an action.
     */
    No: "no",
    /**
     * yes: An action with this behavior is one of the most frequent action that is, or should be, included by an end user, for the particular context in which the action occurs. The system displaying the action to the end user should consider "pre-checking" such an action as a convenience for the user.
     */
    Yes: "yes",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uUHJlY2hlY2tCZWhhdmlvckNvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9BY3Rpb25QcmVjaGVja0JlaGF2aW9yQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsNkVBQTZFO0FBRTdFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUc7SUFDekM7O09BRUc7SUFDSCxFQUFFLEVBQUUsSUFBSTtJQUNSOztPQUVHO0lBQ0gsR0FBRyxFQUFFLEtBQUs7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L2FjdGlvbi1wcmVjaGVjay1iZWhhdmlvcnw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgc2VsZWN0aW9uIGZyZXF1ZW5jeSBiZWhhdmlvciBmb3IgYW4gYWN0aW9uIG9yIGdyb3VwLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFjdGlvblByZWNoZWNrQmVoYXZpb3JDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBubzogQW4gYWN0aW9uIHdpdGggdGhpcyBiZWhhdmlvciBpcyBvbmUgb2YgdGhlIGxlc3MgZnJlcXVlbnQgYWN0aW9ucyBpbmNsdWRlZCBieSB0aGUgZW5kIHVzZXIsIGZvciB0aGUgcGFydGljdWxhciBjb250ZXh0IGluIHdoaWNoIHRoZSBhY3Rpb24gb2NjdXJzLiBUaGUgc3lzdGVtIGRpc3BsYXlpbmcgdGhlIGFjdGlvbnMgdG8gdGhlIGVuZCB1c2VyIHdvdWxkIHR5cGljYWxseSBub3QgXCJwcmUtY2hlY2tcIiBzdWNoIGFuIGFjdGlvbi5cclxuICAgKi9cclxuICBObzogXCJub1wiLFxyXG4gIC8qKlxyXG4gICAqIHllczogQW4gYWN0aW9uIHdpdGggdGhpcyBiZWhhdmlvciBpcyBvbmUgb2YgdGhlIG1vc3QgZnJlcXVlbnQgYWN0aW9uIHRoYXQgaXMsIG9yIHNob3VsZCBiZSwgaW5jbHVkZWQgYnkgYW4gZW5kIHVzZXIsIGZvciB0aGUgcGFydGljdWxhciBjb250ZXh0IGluIHdoaWNoIHRoZSBhY3Rpb24gb2NjdXJzLiBUaGUgc3lzdGVtIGRpc3BsYXlpbmcgdGhlIGFjdGlvbiB0byB0aGUgZW5kIHVzZXIgc2hvdWxkIGNvbnNpZGVyIFwicHJlLWNoZWNraW5nXCIgc3VjaCBhbiBhY3Rpb24gYXMgYSBjb252ZW5pZW5jZSBmb3IgdGhlIHVzZXIuXHJcbiAgICovXHJcbiAgWWVzOiBcInllc1wiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgc2VsZWN0aW9uIGZyZXF1ZW5jeSBiZWhhdmlvciBmb3IgYW4gYWN0aW9uIG9yIGdyb3VwLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uUHJlY2hlY2tCZWhhdmlvckNvZGVUeXBlID0gdHlwZW9mIEFjdGlvblByZWNoZWNrQmVoYXZpb3JDb2Rlc1trZXlvZiB0eXBlb2YgQWN0aW9uUHJlY2hlY2tCZWhhdmlvckNvZGVzXTtcclxuIl19