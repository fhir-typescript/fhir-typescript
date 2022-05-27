// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/task-code|4.0.1
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFza0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9UYXNrQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOERBQThEO0FBRTlEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHO0lBQ3ZCOztPQUVHO0lBQ0gsb0NBQW9DLEVBQUUsT0FBTztJQUM3Qzs7T0FFRztJQUNILCtCQUErQixFQUFFLFNBQVM7SUFDMUM7O09BRUc7SUFDSCxzQkFBc0IsRUFBRSxRQUFRO0lBQ2hDOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUUsU0FBUztJQUNqQzs7T0FFRztJQUNILDJDQUEyQyxFQUFFLFNBQVM7SUFDdEQ7O09BRUc7SUFDSCwwQkFBMEIsRUFBRSxRQUFRO0lBQ3BDOztPQUVHO0lBQ0gsdUJBQXVCLEVBQUUsU0FBUztDQUMxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3Rhc2stY29kZXw0LjAuMVxyXG5cclxuLyoqXHJcbiAqIENvZGVzIGluZGljYXRpbmcgdGhlIHR5cGUgb2YgYWN0aW9uIHRoYXQgaXMgZXhwZWN0ZWQgdG8gYmUgcGVyZm9ybWVkXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgVGFza0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGFib3J0OiBBYm9ydCwgY2FuY2VsIG9yIHdpdGhkcmF3IHRoZSBmb2NhbCByZXNvdXJjZSwgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSB0eXBlIG9mIHJlc291cmNlLlxyXG4gICAqL1xyXG4gIE1hcmtUaGVGb2NhbFJlc291cmNlQXNOb0xvbmdlckFjdGl2ZTogXCJhYm9ydFwiLFxyXG4gIC8qKlxyXG4gICAqIGFwcHJvdmU6IFRha2Ugd2hhdCBhY3Rpb25zIGFyZSBuZWVkZWQgdG8gdHJhbnNpdGlvbiB0aGUgZm9jdXMgcmVzb3VyY2UgZnJvbSAnZHJhZnQnIHRvICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycsIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgcmVzb3VyY2UgdHlwZS4gIFRoaXMgbWF5IGludm9sdmUgYWRkaXRpbmcgYWRkaXRpb25hbCBjb250ZW50LCBhcHByb3ZhbCwgdmFsaWRhdGlvbiwgZXRjLlxyXG4gICAqL1xyXG4gIEFjdGl2YXRlQXBwcm92ZVRoZUZvY2FsUmVzb3VyY2U6IFwiYXBwcm92ZVwiLFxyXG4gIC8qKlxyXG4gICAqIGNoYW5nZTogVXBkYXRlIHRoZSBmb2NhbCByZXNvdXJjZSBvZiB0aGUgb3duaW5nIHN5c3RlbSB0byByZWZsZWN0IHRoZSBjb250ZW50IHNwZWNpZmllZCBhcyB0aGUgVGFzay5mb2N1c1xyXG4gICAqL1xyXG4gIENoYW5nZVRoZUZvY2FsUmVzb3VyY2U6IFwiY2hhbmdlXCIsXHJcbiAgLyoqXHJcbiAgICogZnVsZmlsbDogQWN0IHRvIHBlcmZvcm0gdGhlIGFjdGlvbnMgZGVmaW5lZCBpbiB0aGUgZm9jdXMgcmVxdWVzdC4gIFRoaXMgbWlnaHQgcmVzdWx0IGluIGEgJ21vcmUgYXNzZXJ0aXZlJyByZXF1ZXN0IChvcmRlciBmb3IgYSBwbGFuIG9yIHByb3Bvc2FsLCBmaWxsZXIgb3JkZXIgZm9yIGEgcGxhY2VyIG9yZGVyKSwgYnV0IGlzIGludGVuZCB0byBldmVudHVhbGx5IHJlc3VsdCBpbiBldmVudHMuICBUaGUgZGVncmVlIG9mIGZ1bGZpbGxtZW50IHJlcXVlc3RlZCBtaWdodCBiZSBsaW1pdGVkIGJ5IFRhc2sucmVzdHJpY3Rpb24uXHJcbiAgICovXHJcbiAgRnVsZmlsbFRoZUZvY2FsUmVxdWVzdDogXCJmdWxmaWxsXCIsXHJcbiAgLyoqXHJcbiAgICogcmVwbGFjZTogUmVwbGFjZSB0aGUgZm9jYWwgcmVzb3VyY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGlucHV0IHJlc291cmNlXHJcbiAgICovXHJcbiAgUmVwbGFjZVRoZUZvY2FsUmVzb3VyY2VXaXRoVGhlSW5wdXRSZXNvdXJjZTogXCJyZXBsYWNlXCIsXHJcbiAgLyoqXHJcbiAgICogcmVzdW1lOiBUcmFuc2l0aW9uIHRoZSBmb2NhbCByZXNvdXJjZSBmcm9tICdzdXNwZW5kZWQnIHRvICdhY3RpdmUnIG9yICdpbi1wcm9ncmVzcycgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSByZXNvdXJjZSB0eXBlLlxyXG4gICAqL1xyXG4gIFJlQWN0aXZhdGVUaGVGb2NhbFJlc291cmNlOiBcInJlc3VtZVwiLFxyXG4gIC8qKlxyXG4gICAqIHN1c3BlbmQ6IFRyYW5zaXRpb24gdGhlIGZvY2FsIHJlc291cmNlIGZyb20gJ2FjdGl2ZScgb3IgJ2luLXByb2dyZXNzJyB0byAnc3VzcGVuZGVkJ1xyXG4gICAqL1xyXG4gIFN1c3BlbmRUaGVGb2NhbFJlc291cmNlOiBcInN1c3BlbmRcIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyBpbmRpY2F0aW5nIHRoZSB0eXBlIG9mIGFjdGlvbiB0aGF0IGlzIGV4cGVjdGVkIHRvIGJlIHBlcmZvcm1lZFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGFza0NvZGVUeXBlID0gdHlwZW9mIFRhc2tDb2Rlc1trZXlvZiB0eXBlb2YgVGFza0NvZGVzXTtcclxuIl19