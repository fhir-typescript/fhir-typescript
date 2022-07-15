// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/participationstatus|4.3.0
/**
 * The Participation status of an appointment.
 */
export const ParticipationstatusCodes = {
    /**
     * accepted: The participant has accepted the appointment.
     */
    Accepted: "accepted",
    /**
     * declined: The participant has declined the appointment and will not participate in the appointment.
     */
    Declined: "declined",
    /**
     * needs-action: The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
     */
    NeedsAction: "needs-action",
    /**
     * tentative: The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
     */
    Tentative: "tentative",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGljaXBhdGlvbnN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9QYXJ0aWNpcGF0aW9uc3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsd0VBQXdFO0FBRXhFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBVTtJQUNwQjs7T0FFRztJQUNILFFBQVEsRUFBRSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsV0FBVyxFQUFFLGNBQWM7SUFDM0I7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztDQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3BhcnRpY2lwYXRpb25zdGF0dXN8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFydGljaXBhdGlvbiBzdGF0dXMgb2YgYW4gYXBwb2ludG1lbnQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFydGljaXBhdGlvbnN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFjY2VwdGVkOiBUaGUgcGFydGljaXBhbnQgaGFzIGFjY2VwdGVkIHRoZSBhcHBvaW50bWVudC5cclxuICAgKi9cclxuICBBY2NlcHRlZDogXCJhY2NlcHRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGRlY2xpbmVkOiBUaGUgcGFydGljaXBhbnQgaGFzIGRlY2xpbmVkIHRoZSBhcHBvaW50bWVudCBhbmQgd2lsbCBub3QgcGFydGljaXBhdGUgaW4gdGhlIGFwcG9pbnRtZW50LlxyXG4gICAqL1xyXG4gIERlY2xpbmVkOiBcImRlY2xpbmVkXCIsXHJcbiAgLyoqXHJcbiAgICogbmVlZHMtYWN0aW9uOiBUaGUgcGFydGljaXBhbnQgbmVlZHMgdG8gaW5kaWNhdGUgaWYgdGhleSBhY2NlcHQgdGhlIGFwcG9pbnRtZW50IGJ5IGNoYW5naW5nIHRoaXMgc3RhdHVzIHRvIG9uZSBvZiB0aGUgb3RoZXIgc3RhdHVzZXMuXHJcbiAgICovXHJcbiAgTmVlZHNBY3Rpb246IFwibmVlZHMtYWN0aW9uXCIsXHJcbiAgLyoqXHJcbiAgICogdGVudGF0aXZlOiBUaGUgcGFydGljaXBhbnQgaGFzICB0ZW50YXRpdmVseSBhY2NlcHRlZCB0aGUgYXBwb2ludG1lbnQuIFRoaXMgY291bGQgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIGJ5IGEgc3lzdGVtIGFuZCByZXF1aXJlcyBmdXJ0aGVyIHByb2Nlc3NpbmcgYmVmb3JlIGl0IGNhbiBiZSBhY2NlcHRlZC4gVGhlcmUgaXMgbm8gY29tbWl0bWVudCB0aGF0IGF0dGVuZGFuY2Ugd2lsbCBvY2N1ci5cclxuICAgKi9cclxuICBUZW50YXRpdmU6IFwidGVudGF0aXZlXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogVGhlIFBhcnRpY2lwYXRpb24gc3RhdHVzIG9mIGFuIGFwcG9pbnRtZW50LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUGFydGljaXBhdGlvbnN0YXR1c0NvZGVUeXBlID0gdHlwZW9mIFBhcnRpY2lwYXRpb25zdGF0dXNDb2Rlc1trZXlvZiB0eXBlb2YgUGFydGljaXBhdGlvbnN0YXR1c0NvZGVzXTtcclxuIl19