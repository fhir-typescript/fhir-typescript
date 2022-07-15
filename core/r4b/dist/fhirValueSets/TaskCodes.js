// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-code|4.3.0
/**
 * Codes indicating the type of action that is expected to be performed
 */
export const TaskCodes = {
    /**
     * abort: Abort, cancel or withdraw the focal resource, as appropriate for the type of resource.
     */
    MarkTheFocalResourceAsNoLongerActive: "abort",
    /**
     * approve: Take what actions are needed to transition the focus resource from 'draft' to 'active' or 'in-progress', as appropriate for the resource type.  This may involve additing additional content, approval, validation, etc.
     */
    ActivateApproveTheFocalResource: "approve",
    /**
     * change: Update the focal resource of the owning system to reflect the content specified as the Task.focus
     */
    ChangeTheFocalResource: "change",
    /**
     * fulfill: Act to perform the actions defined in the focus request.  This might result in a 'more assertive' request (order for a plan or proposal, filler order for a placer order), but is intend to eventually result in events.  The degree of fulfillment requested might be limited by Task.restriction.
     */
    FulfillTheFocalRequest: "fulfill",
    /**
     * replace: Replace the focal resource with the specified input resource
     */
    ReplaceTheFocalResourceWithTheInputResource: "replace",
    /**
     * resume: Transition the focal resource from 'suspended' to 'active' or 'in-progress' as appropriate for the resource type.
     */
    ReActivateTheFocalResource: "resume",
    /**
     * suspend: Transition the focal resource from 'active' or 'in-progress' to 'suspended'
     */
    SuspendTheFocalResource: "suspend",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9UYXNrQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOERBQThEO0FBRTlEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCOztPQUVHO0lBQ0gsb0NBQW9DLEVBQUUsT0FBTztJQUM3Qzs7T0FFRztJQUNILCtCQUErQixFQUFFLFNBQVM7SUFDMUM7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxRQUFRO0lBQ2hDOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUUsU0FBUztJQUNqQzs7T0FFRztJQUNILDJDQUEyQyxFQUFFLFNBQVM7SUFDdEQ7O09BRUc7SUFDSCwwQkFBMEIsRUFBRSxRQUFRO0lBQ3BDOztPQUVHO0lBQ0gsdUJBQXVCLEVBQUUsU0FBUztDQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC90YXNrLWNvZGV8NC4zLjBcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIGFjdGlvbiB0aGF0IGlzIGV4cGVjdGVkIHRvIGJlIHBlcmZvcm1lZFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFRhc2tDb2RlcyA9IHtcclxuICAvKipcclxuICAgKiBhYm9ydDogQWJvcnQsIGNhbmNlbCBvciB3aXRoZHJhdyB0aGUgZm9jYWwgcmVzb3VyY2UsIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgdHlwZSBvZiByZXNvdXJjZS5cclxuICAgKi9cclxuICBNYXJrVGhlRm9jYWxSZXNvdXJjZUFzTm9Mb25nZXJBY3RpdmU6IFwiYWJvcnRcIixcclxuICAvKipcclxuICAgKiBhcHByb3ZlOiBUYWtlIHdoYXQgYWN0aW9ucyBhcmUgbmVlZGVkIHRvIHRyYW5zaXRpb24gdGhlIGZvY3VzIHJlc291cmNlIGZyb20gJ2RyYWZ0JyB0byAnYWN0aXZlJyBvciAnaW4tcHJvZ3Jlc3MnLCBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIHJlc291cmNlIHR5cGUuICBUaGlzIG1heSBpbnZvbHZlIGFkZGl0aW5nIGFkZGl0aW9uYWwgY29udGVudCwgYXBwcm92YWwsIHZhbGlkYXRpb24sIGV0Yy5cclxuICAgKi9cclxuICBBY3RpdmF0ZUFwcHJvdmVUaGVGb2NhbFJlc291cmNlOiBcImFwcHJvdmVcIixcclxuICAvKipcclxuICAgKiBjaGFuZ2U6IFVwZGF0ZSB0aGUgZm9jYWwgcmVzb3VyY2Ugb2YgdGhlIG93bmluZyBzeXN0ZW0gdG8gcmVmbGVjdCB0aGUgY29udGVudCBzcGVjaWZpZWQgYXMgdGhlIFRhc2suZm9jdXNcclxuICAgKi9cclxuICBDaGFuZ2VUaGVGb2NhbFJlc291cmNlOiBcImNoYW5nZVwiLFxyXG4gIC8qKlxyXG4gICAqIGZ1bGZpbGw6IEFjdCB0byBwZXJmb3JtIHRoZSBhY3Rpb25zIGRlZmluZWQgaW4gdGhlIGZvY3VzIHJlcXVlc3QuICBUaGlzIG1pZ2h0IHJlc3VsdCBpbiBhICdtb3JlIGFzc2VydGl2ZScgcmVxdWVzdCAob3JkZXIgZm9yIGEgcGxhbiBvciBwcm9wb3NhbCwgZmlsbGVyIG9yZGVyIGZvciBhIHBsYWNlciBvcmRlciksIGJ1dCBpcyBpbnRlbmQgdG8gZXZlbnR1YWxseSByZXN1bHQgaW4gZXZlbnRzLiAgVGhlIGRlZ3JlZSBvZiBmdWxmaWxsbWVudCByZXF1ZXN0ZWQgbWlnaHQgYmUgbGltaXRlZCBieSBUYXNrLnJlc3RyaWN0aW9uLlxyXG4gICAqL1xyXG4gIEZ1bGZpbGxUaGVGb2NhbFJlcXVlc3Q6IFwiZnVsZmlsbFwiLFxyXG4gIC8qKlxyXG4gICAqIHJlcGxhY2U6IFJlcGxhY2UgdGhlIGZvY2FsIHJlc291cmNlIHdpdGggdGhlIHNwZWNpZmllZCBpbnB1dCByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFJlcGxhY2VUaGVGb2NhbFJlc291cmNlV2l0aFRoZUlucHV0UmVzb3VyY2U6IFwicmVwbGFjZVwiLFxyXG4gIC8qKlxyXG4gICAqIHJlc3VtZTogVHJhbnNpdGlvbiB0aGUgZm9jYWwgcmVzb3VyY2UgZnJvbSAnc3VzcGVuZGVkJyB0byAnYWN0aXZlJyBvciAnaW4tcHJvZ3Jlc3MnIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgcmVzb3VyY2UgdHlwZS5cclxuICAgKi9cclxuICBSZUFjdGl2YXRlVGhlRm9jYWxSZXNvdXJjZTogXCJyZXN1bWVcIixcclxuICAvKipcclxuICAgKiBzdXNwZW5kOiBUcmFuc2l0aW9uIHRoZSBmb2NhbCByZXNvdXJjZSBmcm9tICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycgdG8gJ3N1c3BlbmRlZCdcclxuICAgKi9cclxuICBTdXNwZW5kVGhlRm9jYWxSZXNvdXJjZTogXCJzdXNwZW5kXCIsXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogQ29kZXMgaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBhY3Rpb24gdGhhdCBpcyBleHBlY3RlZCB0byBiZSBwZXJmb3JtZWRcclxuICovXHJcbmV4cG9ydCB0eXBlIFRhc2tDb2RlVHlwZSA9IHR5cGVvZiBUYXNrQ29kZXNba2V5b2YgdHlwZW9mIFRhc2tDb2Rlc107XHJcbiJdfQ==