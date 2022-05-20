// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://terminology.hl7.org/ValueSet/v2-0276|2.9
import { Coding } from '../fhir/Coding.js';
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export const V20276Codings = {
    /**
     * Code: CHECKUP
     */
    ARoutineCheckUpSuchAsAnAnnualPhysical: new Coding({
        display: "A routine check-up, such as an annual physical",
        code: "CHECKUP",
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
    }),
    /**
     * Code: EMERGENCY
     */
    EmergencyAppointment: new Coding({
        display: "Emergency appointment",
        code: "EMERGENCY",
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
    }),
    /**
     * Code: FOLLOWUP
     */
    AFollowUpVisitFromAPreviousAppointment: new Coding({
        display: "A follow up visit from a previous appointment",
        code: "FOLLOWUP",
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
    }),
    /**
     * Code: ROUTINE
     */
    RoutineAppointmentDefaultIfNotValued: new Coding({
        display: "Routine appointment - default if not valued",
        code: "ROUTINE",
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
    }),
    /**
     * Code: WALKIN
     */
    APreviouslyUnscheduledWalkInVisit: new Coding({
        display: "A previously unscheduled walk-in visit",
        code: "WALKIN",
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVjIwMjc2Q29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvVjIwMjc2Q29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxpRUFBaUU7QUFFakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFBO0FBRTFDOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQzNCOztPQUVHO0lBQ0gscUNBQXFDLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDaEQsT0FBTyxFQUFFLGdEQUFnRDtRQUN6RCxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsb0JBQW9CLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDL0IsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsK0NBQStDO0tBQ3hELENBQUM7SUFDRjs7T0FFRztJQUNILHNDQUFzQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pELE9BQU8sRUFBRSwrQ0FBK0M7UUFDeEQsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxvQ0FBb0MsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUMvQyxPQUFPLEVBQUUsNkNBQTZDO1FBQ3RELElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxpQ0FBaUMsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUM1QyxPQUFPLEVBQUUsd0NBQXdDO1FBQ2pELElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvVmFsdWVTZXQvdjItMDI3NnwyLjlcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEZISVIgVmFsdWUgc2V0L2NvZGUgc3lzdGVtIGRlZmluaXRpb24gZm9yIEhMNyB2MiB0YWJsZSAwMjc2ICggQXBwb2ludG1lbnQgUmVhc29uIENvZGVzKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFYyMDI3NkNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogQ29kZTogQ0hFQ0tVUFxyXG4gICAqL1xyXG4gIEFSb3V0aW5lQ2hlY2tVcFN1Y2hBc0FuQW5udWFsUGh5c2ljYWw6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJBIHJvdXRpbmUgY2hlY2stdXAsIHN1Y2ggYXMgYW4gYW5udWFsIHBoeXNpY2FsXCIsXHJcbiAgICBjb2RlOiBcIkNIRUNLVVBcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YyLTAyNzZcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBFTUVSR0VOQ1lcclxuICAgKi9cclxuICBFbWVyZ2VuY3lBcHBvaW50bWVudDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkVtZXJnZW5jeSBhcHBvaW50bWVudFwiLFxyXG4gICAgY29kZTogXCJFTUVSR0VOQ1lcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3YyLTAyNzZcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBDb2RlOiBGT0xMT1dVUFxyXG4gICAqL1xyXG4gIEFGb2xsb3dVcFZpc2l0RnJvbUFQcmV2aW91c0FwcG9pbnRtZW50OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQSBmb2xsb3cgdXAgdmlzaXQgZnJvbSBhIHByZXZpb3VzIGFwcG9pbnRtZW50XCIsXHJcbiAgICBjb2RlOiBcIkZPTExPV1VQXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL3Rlcm1pbm9sb2d5LmhsNy5vcmcvQ29kZVN5c3RlbS92Mi0wMjc2XCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogQ29kZTogUk9VVElORVxyXG4gICAqL1xyXG4gIFJvdXRpbmVBcHBvaW50bWVudERlZmF1bHRJZk5vdFZhbHVlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlJvdXRpbmUgYXBwb2ludG1lbnQgLSBkZWZhdWx0IGlmIG5vdCB2YWx1ZWRcIixcclxuICAgIGNvZGU6IFwiUk9VVElORVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjItMDI3NlwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIENvZGU6IFdBTEtJTlxyXG4gICAqL1xyXG4gIEFQcmV2aW91c2x5VW5zY2hlZHVsZWRXYWxrSW5WaXNpdDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkEgcHJldmlvdXNseSB1bnNjaGVkdWxlZCB3YWxrLWluIHZpc2l0XCIsXHJcbiAgICBjb2RlOiBcIldBTEtJTlwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vdjItMDI3NlwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIEZISVIgVmFsdWUgc2V0L2NvZGUgc3lzdGVtIGRlZmluaXRpb24gZm9yIEhMNyB2MiB0YWJsZSAwMjc2ICggQXBwb2ludG1lbnQgUmVhc29uIENvZGVzKVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVjIwMjc2Q29kaW5nVHlwZSA9IHR5cGVvZiBWMjAyNzZDb2RpbmdzO1xyXG4iXX0=