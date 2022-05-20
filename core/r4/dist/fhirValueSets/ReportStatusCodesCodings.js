// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/report-status-codes|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * The current status of the test report.
 */
export const ReportStatusCodesCodings = {
    /**
     * completed: All test operations have completed.
     */
    Completed: new Coding({
        display: "Completed",
        code: "completed",
        system: "http://hl7.org/fhir/report-status-codes",
    }),
    /**
     * entered-in-error: This test report was entered or created in error.
     */
    EnteredInError: new Coding({
        display: "Entered In Error",
        code: "entered-in-error",
        system: "http://hl7.org/fhir/report-status-codes",
    }),
    /**
     * in-progress: A test operations is currently executing.
     */
    InProgress: new Coding({
        display: "In Progress",
        code: "in-progress",
        system: "http://hl7.org/fhir/report-status-codes",
    }),
    /**
     * stopped: The test script execution was manually stopped.
     */
    Stopped: new Coding({
        display: "Stopped",
        code: "stopped",
        system: "http://hl7.org/fhir/report-status-codes",
    }),
    /**
     * waiting: A test operation is waiting for an external client request.
     */
    Waiting: new Coding({
        display: "Waiting",
        code: "waiting",
        system: "http://hl7.org/fhir/report-status-codes",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0U3RhdHVzQ29kZXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXBvcnRTdGF0dXNDb2Rlc0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsd0VBQXdFO0FBRXhFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHO0lBQ3RDOztPQUVHO0lBQ0gsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsY0FBYyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixNQUFNLEVBQUUseUNBQXlDO0tBQ2xELENBQUM7SUFDRjs7T0FFRztJQUNILFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNyQixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUseUNBQXlDO0tBQ2xELENBQUM7SUFDRjs7T0FFRztJQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNsQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSx5Q0FBeUM7S0FDbEQsQ0FBQztJQUNGOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLHlDQUF5QztLQUNsRCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXBvcnQtc3RhdHVzLWNvZGVzfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHRlc3QgcmVwb3J0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlcG9ydFN0YXR1c0NvZGVzQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV0ZWQ6IEFsbCB0ZXN0IG9wZXJhdGlvbnMgaGF2ZSBjb21wbGV0ZWQuXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxldGVkXCIsXHJcbiAgICBjb2RlOiBcImNvbXBsZXRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LXN0YXR1cy1jb2Rlc1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGVudGVyZWQtaW4tZXJyb3I6IFRoaXMgdGVzdCByZXBvcnQgd2FzIGVudGVyZWQgb3IgY3JlYXRlZCBpbiBlcnJvci5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkVudGVyZWQgSW4gRXJyb3JcIixcclxuICAgIGNvZGU6IFwiZW50ZXJlZC1pbi1lcnJvclwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LXN0YXR1cy1jb2Rlc1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGluLXByb2dyZXNzOiBBIHRlc3Qgb3BlcmF0aW9ucyBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxyXG4gICAqL1xyXG4gIEluUHJvZ3Jlc3M6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJJbiBQcm9ncmVzc1wiLFxyXG4gICAgY29kZTogXCJpbi1wcm9ncmVzc1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LXN0YXR1cy1jb2Rlc1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHN0b3BwZWQ6IFRoZSB0ZXN0IHNjcmlwdCBleGVjdXRpb24gd2FzIG1hbnVhbGx5IHN0b3BwZWQuXHJcbiAgICovXHJcbiAgU3RvcHBlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlN0b3BwZWRcIixcclxuICAgIGNvZGU6IFwic3RvcHBlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LXN0YXR1cy1jb2Rlc1wiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHdhaXRpbmc6IEEgdGVzdCBvcGVyYXRpb24gaXMgd2FpdGluZyBmb3IgYW4gZXh0ZXJuYWwgY2xpZW50IHJlcXVlc3QuXHJcbiAgICovXHJcbiAgV2FpdGluZzogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIldhaXRpbmdcIixcclxuICAgIGNvZGU6IFwid2FpdGluZ1wiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVwb3J0LXN0YXR1cy1jb2Rlc1wiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgdGVzdCByZXBvcnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXBvcnRTdGF0dXNDb2Rlc0NvZGluZ1R5cGUgPSB0eXBlb2YgUmVwb3J0U3RhdHVzQ29kZXNDb2RpbmdzO1xyXG4iXX0=