// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-empty-reason|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export const ListEmptyReasonCodings = {
    /**
     * closed: This list has now closed or has ceased to be relevant or useful.
     */
    Closed: new Coding({
        display: "Closed",
        code: "closed",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
    /**
     * nilknown: Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.
     */
    NilKnown: new Coding({
        display: "Nil Known",
        code: "nilknown",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
    /**
     * notasked: The investigation to find out whether there are items for this list has not occurred.
     */
    NotAsked: new Coding({
        display: "Not Asked",
        code: "notasked",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
    /**
     * notstarted: The work to populate this list has not yet begun.
     */
    NotStarted: new Coding({
        display: "Not Started",
        code: "notstarted",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
    /**
     * unavailable: Information to populate this list cannot be obtained; e.g. unconscious patient.
     */
    Unavailable: new Coding({
        display: "Unavailable",
        code: "unavailable",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
    /**
     * withheld: The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.
     */
    InformationWithheld: new Coding({
        display: "Information Withheld",
        code: "withheld",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEVtcHR5UmVhc29uQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvTGlzdEVtcHR5UmVhc29uQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxzRUFBc0U7QUFFdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUc7SUFDcEM7O09BRUc7SUFDSCxNQUFNLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDakIsT0FBTyxFQUFFLFFBQVE7UUFDakIsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUseURBQXlEO0tBQ2xFLENBQUM7SUFDRjs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUseURBQXlEO0tBQ2xFLENBQUM7SUFDRjs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUseURBQXlEO0tBQ2xFLENBQUM7SUFDRjs7T0FFRztJQUNILFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUseURBQXlEO0tBQ2xFLENBQUM7SUFDRjs7T0FFRztJQUNILFdBQVcsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUN0QixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUseURBQXlEO0tBQ2xFLENBQUM7SUFDRjs7T0FFRztJQUNILG1CQUFtQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLHlEQUF5RDtLQUNsRSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9saXN0LWVtcHR5LXJlYXNvbnw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogR2VuZXJhbCByZWFzb25zIGZvciBhIGxpc3QgdG8gYmUgZW1wdHkuIFJlYXNvbnMgYXJlIGVpdGhlciByZWxhdGVkIHRvIGEgc3VtbWFyeSBsaXN0IChpLmUuIHByb2JsZW0gb3IgbWVkaWNhdGlvbiBsaXN0KSBvciB0byBhIHdvcmtmbG93IHJlbGF0ZWQgbGlzdCAoaS5lLiBjb25zdWx0YXRpb24gbGlzdCkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTGlzdEVtcHR5UmVhc29uQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBjbG9zZWQ6IFRoaXMgbGlzdCBoYXMgbm93IGNsb3NlZCBvciBoYXMgY2Vhc2VkIHRvIGJlIHJlbGV2YW50IG9yIHVzZWZ1bC5cclxuICAgKi9cclxuICBDbG9zZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJDbG9zZWRcIixcclxuICAgIGNvZGU6IFwiY2xvc2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9saXN0LWVtcHR5LXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIG5pbGtub3duOiBDbGluaWNhbCBqdWRnbWVudCB0aGF0IHRoZXJlIGFyZSBubyBrbm93biBpdGVtcyBmb3IgdGhpcyBsaXN0IGFmdGVyIHJlYXNvbmFibGUgaW52ZXN0aWdhdGlvbi4gTm90ZSB0aGF0IHRoaXMgYSBwb3NpdGl2ZSBzdGF0ZW1lbnQgYnkgYSBjbGluaWNhbCB1c2VyLCBhbmQgbm90IGEgZGVmYXVsdCBwb3NpdGlvbiBhc3NlcnRlZCBieSBhIGNvbXB1dGVyIHN5c3RlbSBpbiB0aGUgbGFjayBvZiBvdGhlciBpbmZvcm1hdGlvbi4gRXhhbXBsZSB1c2VzOiAgKiBGb3IgYWxsZXJnaWVzOiB0aGUgcGF0aWVudCBvciBwYXRpZW50J3MgYWdlbnQvZ3VhcmRpYW4gaGFzIGFzc2VydGVkIHRoYXQgaGUvc2hlIGlzIG5vdCBhd2FyZSBvZiBhbnkgYWxsZXJnaWVzIChOS0EgLSBuaWwga25vd24gYWxsZXJnaWVzKSAgKiBGb3IgbWVkaWNhdGlvbnM6IHRoZSBwYXRpZW50IG9yIHBhdGllbnQncyBhZ2VudC9ndWFyZGlhbiBoYXMgYXNzZXJ0ZWQgdGhhdCB0aGUgcGF0aWVudCBpcyBrbm93biB0byBiZSB0YWtpbmcgbm8gbWVkaWNhdGlvbnMgICogRm9yIGRpYWdub3NlcywgcHJvYmxlbXMgYW5kIHByb2NlZHVyZXM6IHRoZSBwYXRpZW50IG9yIHBhdGllbnQncyBhZ2VudC9ndWFyZGlhbiBoYXMgYXNzZXJ0ZWQgdGhhdCB0aGVyZSBpcyBubyBrbm93biBldmVudCB0byByZWNvcmQuXHJcbiAgICovXHJcbiAgTmlsS25vd246IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJOaWwgS25vd25cIixcclxuICAgIGNvZGU6IFwibmlsa25vd25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xpc3QtZW1wdHktcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogbm90YXNrZWQ6IFRoZSBpbnZlc3RpZ2F0aW9uIHRvIGZpbmQgb3V0IHdoZXRoZXIgdGhlcmUgYXJlIGl0ZW1zIGZvciB0aGlzIGxpc3QgaGFzIG5vdCBvY2N1cnJlZC5cclxuICAgKi9cclxuICBOb3RBc2tlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBBc2tlZFwiLFxyXG4gICAgY29kZTogXCJub3Rhc2tlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbGlzdC1lbXB0eS1yZWFzb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBub3RzdGFydGVkOiBUaGUgd29yayB0byBwb3B1bGF0ZSB0aGlzIGxpc3QgaGFzIG5vdCB5ZXQgYmVndW4uXHJcbiAgICovXHJcbiAgTm90U3RhcnRlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIk5vdCBTdGFydGVkXCIsXHJcbiAgICBjb2RlOiBcIm5vdHN0YXJ0ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL2xpc3QtZW1wdHktcmVhc29uXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogdW5hdmFpbGFibGU6IEluZm9ybWF0aW9uIHRvIHBvcHVsYXRlIHRoaXMgbGlzdCBjYW5ub3QgYmUgb2J0YWluZWQ7IGUuZy4gdW5jb25zY2lvdXMgcGF0aWVudC5cclxuICAgKi9cclxuICBVbmF2YWlsYWJsZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlVuYXZhaWxhYmxlXCIsXHJcbiAgICBjb2RlOiBcInVuYXZhaWxhYmxlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS9saXN0LWVtcHR5LXJlYXNvblwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHdpdGhoZWxkOiBUaGUgY29udGVudCBvZiB0aGUgbGlzdCB3YXMgbm90IHByb3ZpZGVkIGR1ZSB0byBwcml2YWN5IG9yIGNvbmZpZGVudGlhbGl0eSBjb25jZXJucy4gTm90ZSB0aGF0IGl0IHNob3VsZCBub3QgYmUgYXNzdW1lZCB0aGF0IHRoaXMgbWVhbnMgdGhhdCB0aGUgcGFydGljdWxhciBpbmZvcm1hdGlvbiBpbiBxdWVzdGlvbiB3YXMgd2l0aGhlbGQgZHVlIHRvIGl0cyBjb250ZW50cyAtIGl0IGNhbiBhbHNvIGJlIGEgcG9saWN5IGRlY2lzaW9uLlxyXG4gICAqL1xyXG4gIEluZm9ybWF0aW9uV2l0aGhlbGQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJJbmZvcm1hdGlvbiBXaXRoaGVsZFwiLFxyXG4gICAgY29kZTogXCJ3aXRoaGVsZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbGlzdC1lbXB0eS1yZWFzb25cIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmFsIHJlYXNvbnMgZm9yIGEgbGlzdCB0byBiZSBlbXB0eS4gUmVhc29ucyBhcmUgZWl0aGVyIHJlbGF0ZWQgdG8gYSBzdW1tYXJ5IGxpc3QgKGkuZS4gcHJvYmxlbSBvciBtZWRpY2F0aW9uIGxpc3QpIG9yIHRvIGEgd29ya2Zsb3cgcmVsYXRlZCBsaXN0IChpLmUuIGNvbnN1bHRhdGlvbiBsaXN0KS5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpc3RFbXB0eVJlYXNvbkNvZGluZ1R5cGUgPSB0eXBlb2YgTGlzdEVtcHR5UmVhc29uQ29kaW5ncztcclxuIl19