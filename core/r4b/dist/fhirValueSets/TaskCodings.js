// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-code|4.3.0
/**
 * Codes indicating the type of action that is expected to be performed
 */
export const TaskCodings = {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    MarkTheFocalResourceAsNoLongerActive: {
        display: "Mark the focal resource as no longer active",
        code: "abort",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    ActivateApproveTheFocalResource: {
        display: "Activate/approve the focal resource",
        code: "approve",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    ChangeTheFocalResource: {
        display: "Change the focal resource",
        code: "change",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    FulfillTheFocalRequest: {
        display: "Fulfill the focal request",
        code: "fulfill",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    ReplaceTheFocalResourceWithTheInputResource: {
        display: "Replace the focal resource with the input resource",
        code: "replace",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    ReActivateTheFocalResource: {
        display: "Re-activate the focal resource",
        code: "resume",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    SuspendTheFocalResource: {
        display: "Suspend the focal resource",
        code: "suspend",
        system: "http://hl7.org/fhir/CodeSystem/task-code",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0NvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Rhc2tDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDhEQUE4RDtBQXNDOUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQWtCO0lBQ3hDOztPQUVHO0lBQ0gsb0NBQW9DLEVBQUU7UUFDcEMsT0FBTyxFQUFFLDZDQUE2QztRQUN0RCxJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILCtCQUErQixFQUFFO1FBQy9CLE9BQU8sRUFBRSxxQ0FBcUM7UUFDOUMsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCxzQkFBc0IsRUFBRTtRQUN0QixPQUFPLEVBQUUsMkJBQTJCO1FBQ3BDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUU7UUFDdEIsT0FBTyxFQUFFLDJCQUEyQjtRQUNwQyxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7SUFDRDs7T0FFRztJQUNILDJDQUEyQyxFQUFFO1FBQzNDLE9BQU8sRUFBRSxvREFBb0Q7UUFDN0QsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsMENBQTBDO0tBQ25EO0lBQ0Q7O09BRUc7SUFDSCwwQkFBMEIsRUFBRTtRQUMxQixPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDLElBQUksRUFBRSxRQUFRO1FBQ2QsTUFBTSxFQUFFLDBDQUEwQztLQUNuRDtJQUNEOztPQUVHO0lBQ0gsdUJBQXVCLEVBQUU7UUFDdkIsT0FBTyxFQUFFLDRCQUE0QjtRQUNyQyxJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwwQ0FBMEM7S0FDbkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC90YXNrLWNvZGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIGFjdGlvbiB0aGF0IGlzIGV4cGVjdGVkIHRvIGJlIHBlcmZvcm1lZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGFza0NvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogYWJvcnQ6IEFib3J0LCBjYW5jZWwgb3Igd2l0aGRyYXcgdGhlIGZvY2FsIHJlc291cmNlLCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHR5cGUgb2YgcmVzb3VyY2UuXHJcbiAgICovXHJcbiAgTWFya1RoZUZvY2FsUmVzb3VyY2VBc05vTG9uZ2VyQWN0aXZlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGFwcHJvdmU6IFRha2Ugd2hhdCBhY3Rpb25zIGFyZSBuZWVkZWQgdG8gdHJhbnNpdGlvbiB0aGUgZm9jdXMgcmVzb3VyY2UgZnJvbSAnZHJhZnQnIHRvICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycsIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgcmVzb3VyY2UgdHlwZS4gIFRoaXMgbWF5IGludm9sdmUgYWRkaXRpbmcgYWRkaXRpb25hbCBjb250ZW50LCBhcHByb3ZhbCwgdmFsaWRhdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIEFjdGl2YXRlQXBwcm92ZVRoZUZvY2FsUmVzb3VyY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogY2hhbmdlOiBVcGRhdGUgdGhlIGZvY2FsIHJlc291cmNlIG9mIHRoZSBvd25pbmcgc3lzdGVtIHRvIHJlZmxlY3QgdGhlIGNvbnRlbnQgc3BlY2lmaWVkIGFzIHRoZSBUYXNrLmZvY3VzXHJcbiAgICovXHJcbiAgQ2hhbmdlVGhlRm9jYWxSZXNvdXJjZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBmdWxmaWxsOiBBY3QgdG8gcGVyZm9ybSB0aGUgYWN0aW9ucyBkZWZpbmVkIGluIHRoZSBmb2N1cyByZXF1ZXN0LiAgVGhpcyBtaWdodCByZXN1bHQgaW4gYSAnbW9yZSBhc3NlcnRpdmUnIHJlcXVlc3QgKG9yZGVyIGZvciBhIHBsYW4gb3IgcHJvcG9zYWwsIGZpbGxlciBvcmRlciBmb3IgYSBwbGFjZXIgb3JkZXIpLCBidXQgaXMgaW50ZW5kIHRvIGV2ZW50dWFsbHkgcmVzdWx0IGluIGV2ZW50cy4gIFRoZSBkZWdyZWUgb2YgZnVsZmlsbG1lbnQgcmVxdWVzdGVkIG1pZ2h0IGJlIGxpbWl0ZWQgYnkgVGFzay5yZXN0cmljdGlvbi5cclxuICAgKi9cclxuICBGdWxmaWxsVGhlRm9jYWxSZXF1ZXN0OiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2U6IFJlcGxhY2UgdGhlIGZvY2FsIHJlc291cmNlIHdpdGggdGhlIHNwZWNpZmllZCBpbnB1dCByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFJlcGxhY2VUaGVGb2NhbFJlc291cmNlV2l0aFRoZUlucHV0UmVzb3VyY2U6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcmVzdW1lOiBUcmFuc2l0aW9uIHRoZSBmb2NhbCByZXNvdXJjZSBmcm9tICdzdXNwZW5kZWQnIHRvICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSByZXNvdXJjZSB0eXBlLlxyXG4gICAqL1xyXG4gIFJlQWN0aXZhdGVUaGVGb2NhbFJlc291cmNlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmQ6IFRyYW5zaXRpb24gdGhlIGZvY2FsIHJlc291cmNlIGZyb20gJ2FjdGl2ZScgb3IgJ2luLXByb2dyZXNzJyB0byAnc3VzcGVuZGVkJ1xyXG4gICAqL1xyXG4gIFN1c3BlbmRUaGVGb2NhbFJlc291cmNlOiBDb2RpbmdBcmdzO1xyXG59XHJcblxyXG4vKipcclxuICogQ29kZXMgaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpcyBleHBlY3RlZCB0byBiZSBwZXJmb3JtZWRcclxuICovXHJcbmV4cG9ydCBjb25zdCBUYXNrQ29kaW5nczpUYXNrQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBhYm9ydDogQWJvcnQsIGNhbmNlbCBvciB3aXRoZHJhdyB0aGUgZm9jYWwgcmVzb3VyY2UsIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgdHlwZSBvZiByZXNvdXJjZS5cclxuICAgKi9cclxuICBNYXJrVGhlRm9jYWxSZXNvdXJjZUFzTm9Mb25nZXJBY3RpdmU6IHtcclxuICAgIGRpc3BsYXk6IFwiTWFyayB0aGUgZm9jYWwgcmVzb3VyY2UgYXMgbm8gbG9uZ2VyIGFjdGl2ZVwiLFxyXG4gICAgY29kZTogXCJhYm9ydFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGFwcHJvdmU6IFRha2Ugd2hhdCBhY3Rpb25zIGFyZSBuZWVkZWQgdG8gdHJhbnNpdGlvbiB0aGUgZm9jdXMgcmVzb3VyY2UgZnJvbSAnZHJhZnQnIHRvICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycsIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgcmVzb3VyY2UgdHlwZS4gIFRoaXMgbWF5IGludm9sdmUgYWRkaXRpbmcgYWRkaXRpb25hbCBjb250ZW50LCBhcHByb3ZhbCwgdmFsaWRhdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIEFjdGl2YXRlQXBwcm92ZVRoZUZvY2FsUmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiQWN0aXZhdGUvYXBwcm92ZSB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwiYXBwcm92ZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGNoYW5nZTogVXBkYXRlIHRoZSBmb2NhbCByZXNvdXJjZSBvZiB0aGUgb3duaW5nIHN5c3RlbSB0byByZWZsZWN0IHRoZSBjb250ZW50IHNwZWNpZmllZCBhcyB0aGUgVGFzay5mb2N1c1xyXG4gICAqL1xyXG4gIENoYW5nZVRoZUZvY2FsUmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiQ2hhbmdlIHRoZSBmb2NhbCByZXNvdXJjZVwiLFxyXG4gICAgY29kZTogXCJjaGFuZ2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL0NvZGVTeXN0ZW0vdGFzay1jb2RlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBmdWxmaWxsOiBBY3QgdG8gcGVyZm9ybSB0aGUgYWN0aW9ucyBkZWZpbmVkIGluIHRoZSBmb2N1cyByZXF1ZXN0LiAgVGhpcyBtaWdodCByZXN1bHQgaW4gYSAnbW9yZSBhc3NlcnRpdmUnIHJlcXVlc3QgKG9yZGVyIGZvciBhIHBsYW4gb3IgcHJvcG9zYWwsIGZpbGxlciBvcmRlciBmb3IgYSBwbGFjZXIgb3JkZXIpLCBidXQgaXMgaW50ZW5kIHRvIGV2ZW50dWFsbHkgcmVzdWx0IGluIGV2ZW50cy4gIFRoZSBkZWdyZWUgb2YgZnVsZmlsbG1lbnQgcmVxdWVzdGVkIG1pZ2h0IGJlIGxpbWl0ZWQgYnkgVGFzay5yZXN0cmljdGlvbi5cclxuICAgKi9cclxuICBGdWxmaWxsVGhlRm9jYWxSZXF1ZXN0OiB7XHJcbiAgICBkaXNwbGF5OiBcIkZ1bGZpbGwgdGhlIGZvY2FsIHJlcXVlc3RcIixcclxuICAgIGNvZGU6IFwiZnVsZmlsbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2U6IFJlcGxhY2UgdGhlIGZvY2FsIHJlc291cmNlIHdpdGggdGhlIHNwZWNpZmllZCBpbnB1dCByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFJlcGxhY2VUaGVGb2NhbFJlc291cmNlV2l0aFRoZUlucHV0UmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVwbGFjZSB0aGUgZm9jYWwgcmVzb3VyY2Ugd2l0aCB0aGUgaW5wdXQgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVwbGFjZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlc3VtZTogVHJhbnNpdGlvbiB0aGUgZm9jYWwgcmVzb3VyY2UgZnJvbSAnc3VzcGVuZGVkJyB0byAnYWN0aXZlJyBvciAnaW4tcHJvZ3Jlc3MnIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgcmVzb3VyY2UgdHlwZS5cclxuICAgKi9cclxuICBSZUFjdGl2YXRlVGhlRm9jYWxSZXNvdXJjZToge1xyXG4gICAgZGlzcGxheTogXCJSZS1hY3RpdmF0ZSB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVzdW1lXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9Db2RlU3lzdGVtL3Rhc2stY29kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogc3VzcGVuZDogVHJhbnNpdGlvbiB0aGUgZm9jYWwgcmVzb3VyY2UgZnJvbSAnYWN0aXZlJyBvciAnaW4tcHJvZ3Jlc3MnIHRvICdzdXNwZW5kZWQnXHJcbiAgICovXHJcbiAgU3VzcGVuZFRoZUZvY2FsUmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiU3VzcGVuZCB0aGUgZm9jYWwgcmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwic3VzcGVuZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvQ29kZVN5c3RlbS90YXNrLWNvZGVcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=