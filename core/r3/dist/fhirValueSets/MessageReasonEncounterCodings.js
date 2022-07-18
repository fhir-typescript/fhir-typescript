// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/message-reason-encounter|3.0.2
/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 */
export const MessageReasonEncounterCodings = {
    /**
     * absent: The patient has temporarily left the institution.
     */
    Absent: {
        display: "Absent",
        code: "absent",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
    /**
     * admit: The patient has been admitted.
     */
    Admit: {
        display: "Admit",
        code: "admit",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
    /**
     * discharge: The patient has been discharged.
     */
    Discharge: {
        display: "Discharge",
        code: "discharge",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
    /**
     * edit: Encounter details have been updated (e.g. to correct a coding error).
     */
    Edit: {
        display: "Edit",
        code: "edit",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
    /**
     * moved: The patient has been moved to a new location.
     */
    Moved: {
        display: "Moved",
        code: "moved",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
    /**
     * return: The patient has returned from a temporary absence.
     */
    Returned: {
        display: "Returned",
        code: "return",
        system: "http://hl7.org/fhir/message-reasons-encounter",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZVJlYXNvbkVuY291bnRlckNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL01lc3NhZ2VSZWFzb25FbmNvdW50ZXJDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQWtDN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsU0FBUyxFQUFFO1FBQ1QsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLE1BQU07UUFDZixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7SUFDRDs7T0FFRztJQUNILEtBQUssRUFBRTtRQUNMLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZXNzYWdlLXJlYXNvbi1lbmNvdW50ZXJ8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBFeGFtcGxlIE1lc3NhZ2UgUmVhc29ucy4gVGhlc2UgYXJlIHRoZSBzZXQgb2YgY29kZXMgdGhhdCBtaWdodCBiZSB1c2VkIGFuIHVwZGF0aW5nIGFuIGVuY291bnRlciB1c2luZyBhZG1pbi11cGRhdGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZXNzYWdlUmVhc29uRW5jb3VudGVyQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhYnNlbnQ6IFRoZSBwYXRpZW50IGhhcyB0ZW1wb3JhcmlseSBsZWZ0IHRoZSBpbnN0aXR1dGlvbi5cclxuICAgKi9cclxuICBBYnNlbnQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogYWRtaXQ6IFRoZSBwYXRpZW50IGhhcyBiZWVuIGFkbWl0dGVkLlxyXG4gICAqL1xyXG4gIEFkbWl0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRpc2NoYXJnZTogVGhlIHBhdGllbnQgaGFzIGJlZW4gZGlzY2hhcmdlZC5cclxuICAgKi9cclxuICBEaXNjaGFyZ2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZWRpdDogRW5jb3VudGVyIGRldGFpbHMgaGF2ZSBiZWVuIHVwZGF0ZWQgKGUuZy4gdG8gY29ycmVjdCBhIGNvZGluZyBlcnJvcikuXHJcbiAgICovXHJcbiAgRWRpdDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBtb3ZlZDogVGhlIHBhdGllbnQgaGFzIGJlZW4gbW92ZWQgdG8gYSBuZXcgbG9jYXRpb24uXHJcbiAgICovXHJcbiAgTW92ZWQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmV0dXJuOiBUaGUgcGF0aWVudCBoYXMgcmV0dXJuZWQgZnJvbSBhIHRlbXBvcmFyeSBhYnNlbmNlLlxyXG4gICAqL1xyXG4gIFJldHVybmVkOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogRXhhbXBsZSBNZXNzYWdlIFJlYXNvbnMuIFRoZXNlIGFyZSB0aGUgc2V0IG9mIGNvZGVzIHRoYXQgbWlnaHQgYmUgdXNlZCBhbiB1cGRhdGluZyBhbiBlbmNvdW50ZXIgdXNpbmcgYWRtaW4tdXBkYXRlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lc3NhZ2VSZWFzb25FbmNvdW50ZXJDb2RpbmdzOk1lc3NhZ2VSZWFzb25FbmNvdW50ZXJDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGFic2VudDogVGhlIHBhdGllbnQgaGFzIHRlbXBvcmFyaWx5IGxlZnQgdGhlIGluc3RpdHV0aW9uLlxyXG4gICAqL1xyXG4gIEFic2VudDoge1xyXG4gICAgZGlzcGxheTogXCJBYnNlbnRcIixcclxuICAgIGNvZGU6IFwiYWJzZW50XCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9tZXNzYWdlLXJlYXNvbnMtZW5jb3VudGVyXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBhZG1pdDogVGhlIHBhdGllbnQgaGFzIGJlZW4gYWRtaXR0ZWQuXHJcbiAgICovXHJcbiAgQWRtaXQ6IHtcclxuICAgIGRpc3BsYXk6IFwiQWRtaXRcIixcclxuICAgIGNvZGU6IFwiYWRtaXRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtcmVhc29ucy1lbmNvdW50ZXJcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRpc2NoYXJnZTogVGhlIHBhdGllbnQgaGFzIGJlZW4gZGlzY2hhcmdlZC5cclxuICAgKi9cclxuICBEaXNjaGFyZ2U6IHtcclxuICAgIGRpc3BsYXk6IFwiRGlzY2hhcmdlXCIsXHJcbiAgICBjb2RlOiBcImRpc2NoYXJnZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1yZWFzb25zLWVuY291bnRlclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZWRpdDogRW5jb3VudGVyIGRldGFpbHMgaGF2ZSBiZWVuIHVwZGF0ZWQgKGUuZy4gdG8gY29ycmVjdCBhIGNvZGluZyBlcnJvcikuXHJcbiAgICovXHJcbiAgRWRpdDoge1xyXG4gICAgZGlzcGxheTogXCJFZGl0XCIsXHJcbiAgICBjb2RlOiBcImVkaXRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL21lc3NhZ2UtcmVhc29ucy1lbmNvdW50ZXJcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIG1vdmVkOiBUaGUgcGF0aWVudCBoYXMgYmVlbiBtb3ZlZCB0byBhIG5ldyBsb2NhdGlvbi5cclxuICAgKi9cclxuICBNb3ZlZDoge1xyXG4gICAgZGlzcGxheTogXCJNb3ZlZFwiLFxyXG4gICAgY29kZTogXCJtb3ZlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1yZWFzb25zLWVuY291bnRlclwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcmV0dXJuOiBUaGUgcGF0aWVudCBoYXMgcmV0dXJuZWQgZnJvbSBhIHRlbXBvcmFyeSBhYnNlbmNlLlxyXG4gICAqL1xyXG4gIFJldHVybmVkOiB7XHJcbiAgICBkaXNwbGF5OiBcIlJldHVybmVkXCIsXHJcbiAgICBjb2RlOiBcInJldHVyblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvbWVzc2FnZS1yZWFzb25zLWVuY291bnRlclwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==