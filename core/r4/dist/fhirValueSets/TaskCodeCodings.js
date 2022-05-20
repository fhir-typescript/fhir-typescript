// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-code|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Codes indicating the type of action that is expected to be performed
 */
export const TaskCodeCodings = {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    MarkTheFocalResourceAsNoLongerActive: new Coding({
        display: "Mark the focal resource as no longer active",
        code: "abort",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    ActivateApproveTheFocalResource: new Coding({
        display: "Activate/approve the focal resource",
        code: "approve",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    ChangeTheFocalResource: new Coding({
        display: "Change the focal resource",
        code: "change",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    FulfillTheFocalRequest: new Coding({
        display: "Fulfill the focal request",
        code: "fulfill",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    ReplaceTheFocalResourceWithTheInputResource: new Coding({
        display: "Replace the focal resource with the input resource",
        code: "replace",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    ReActivateTheFocalResource: new Coding({
        display: "Re-activate the focal resource",
        code: "resume",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    SuspendTheFocalResource: new Coding({
        display: "Suspend the focal resource",
        code: "suspend",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0NvZGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9UYXNrQ29kZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOERBQThEO0FBRTlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRztJQUM3Qjs7T0FFRztJQUNILG9DQUFvQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQy9DLE9BQU8sRUFBRSw2Q0FBNkM7UUFDdEQsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILCtCQUErQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzFDLE9BQU8sRUFBRSxxQ0FBcUM7UUFDOUMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILHNCQUFzQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSwyQkFBMkI7UUFDcEMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILDJDQUEyQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3RELE9BQU8sRUFBRSxvREFBb0Q7UUFDN0QsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILDBCQUEwQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxnQ0FBZ0M7UUFDekMsSUFBSSxFQUFFLFFBQVE7UUFDZCxNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7SUFDRjs7T0FFRztJQUNILHVCQUF1QixFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xDLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25ELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3Rhc2stY29kZXw0LjAuMVxyXG5cclxuaW1wb3J0IHsgQ29kaW5nIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQ29kZXMgaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpcyBleHBlY3RlZCB0byBiZSBwZXJmb3JtZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBUYXNrQ29kZUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJvcnQ6IEFib3J0LCBjYW5jZWwgb3Igd2l0aGRyYXcgdGhlIGZvY2FsIHJlc291cmNlLCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHR5cGUgb2YgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgTWFya1RoZUZvY2FsUmVzb3VyY2VBc05vTG9uZ2VyQWN0aXZlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiTWFyayB0aGUgZm9jYWwgcmVzb3VyY2UgYXMgbm8gbG9uZ2VyIGFjdGl2ZVwiLFxyXG4gICAgY29kZTogXCJhYm9ydFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBhcHByb3ZlOiBUYWtlIHdoYXQgYWN0aW9ucyBhcmUgbmVlZGVkIHRvIHRyYW5zaXRpb24gdGhlIGZvY3VzIHJlc291cmNlIGZyb20gJ2RyYWZ0JyB0byAnYWN0aXZlJyBvciAnaW4tcHJvZ3Jlc3MnLCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHJlc291cmNlIHR5cGUuICBUaGlzIG1heSBpbnZvbHZlIGFkZGl0aW5nIGFkZGl0aW9uYWwgY29udGVudCwgYXBwcm92YWwsIHZhbGlkYXRpb24sIGV0Yy5cclxuICAgKi9cclxuICBBY3RpdmF0ZUFwcHJvdmVUaGVGb2NhbFJlc291cmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQWN0aXZhdGUvYXBwcm92ZSB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwiYXBwcm92ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBjaGFuZ2U6IFVwZGF0ZSB0aGUgZm9jYWwgcmVzb3VyY2Ugb2YgdGhlIG93bmluZyBzeXN0ZW0gdG8gcmVmbGVjdCB0aGUgY29udGVudCBzcGVjaWZpZWQgYXMgdGhlIFRhc2suZm9jdXNcclxuICAgKi9cclxuICBDaGFuZ2VUaGVGb2NhbFJlc291cmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQ2hhbmdlIHRoZSBmb2NhbCByZXNvdXJjZVwiLFxyXG4gICAgY29kZTogXCJjaGFuZ2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL0NvZGVTeXN0ZW0vdGFzay1jb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogZnVsZmlsbDogQWN0IHRvIHBlcmZvcm0gdGhlIGFjdGlvbnMgZGVmaW5lZCBpbiB0aGUgZm9jdXMgcmVxdWVzdC4gIFRoaXMgbWlnaHQgcmVzdWx0IGluIGEgJ21vcmUgYXNzZXJ0aXZlJyByZXF1ZXN0IChvcmRlciBmb3IgYSBwbGFuIG9yIHByb3Bvc2FsLCBmaWxsZXIgb3JkZXIgZm9yIGEgcGxhY2VyIG9yZGVyKSwgYnV0IGlzIGludGVuZCB0byBldmVudHVhbGx5IHJlc3VsdCBpbiBldmVudHMuICBUaGUgZGVncmVlIG9mIGZ1bGZpbGxtZW50IHJlcXVlc3RlZCBtaWdodCBiZSBsaW1pdGVkIGJ5IFRhc2sucmVzdHJpY3Rpb24uXHJcbiAgICovXHJcbiAgRnVsZmlsbFRoZUZvY2FsUmVxdWVzdDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkZ1bGZpbGwgdGhlIGZvY2FsIHJlcXVlc3RcIixcclxuICAgIGNvZGU6IFwiZnVsZmlsbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiByZXBsYWNlOiBSZXBsYWNlIHRoZSBmb2NhbCByZXNvdXJjZSB3aXRoIHRoZSBzcGVjaWZpZWQgaW5wdXQgcmVzb3VyY2VcclxuICAgKi9cclxuICBSZXBsYWNlVGhlRm9jYWxSZXNvdXJjZVdpdGhUaGVJbnB1dFJlc291cmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUmVwbGFjZSB0aGUgZm9jYWwgcmVzb3VyY2Ugd2l0aCB0aGUgaW5wdXQgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVwbGFjZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiByZXN1bWU6IFRyYW5zaXRpb24gdGhlIGZvY2FsIHJlc291cmNlIGZyb20gJ3N1c3BlbmRlZCcgdG8gJ2FjdGl2ZScgb3IgJ2luLXByb2dyZXNzJyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHJlc291cmNlIHR5cGUuXHJcbiAgICovXHJcbiAgUmVBY3RpdmF0ZVRoZUZvY2FsUmVzb3VyY2U6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJSZS1hY3RpdmF0ZSB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVzdW1lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL3Rhc2stY29kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmQ6IFRyYW5zaXRpb24gdGhlIGZvY2FsIHJlc291cmNlIGZyb20gJ2FjdGl2ZScgb3IgJ2luLXByb2dyZXNzJyB0byAnc3VzcGVuZGVkJ1xyXG4gICAqL1xyXG4gIFN1c3BlbmRUaGVGb2NhbFJlc291cmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiU3VzcGVuZCB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwic3VzcGVuZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIGFjdGlvbiB0aGF0IGlzIGV4cGVjdGVkIHRvIGJlIHBlcmZvcm1lZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGFza0NvZGVDb2RpbmdUeXBlID0gdHlwZW9mIFRhc2tDb2RlQ29kaW5ncztcclxuIl19