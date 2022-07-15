// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-study-status|3.0.2
/**
 * Codes that convey the current status of the research study
 */
export const ResearchStudyStatusCodes = {
    /**
     * completed: The information sought by the study has been gathered and compiled and no further work is being performed
     */
    Completed: "completed",
    /**
     * draft: The study is undergoing design but the process of selecting study subjects and capturing data has not yet begun.
     */
    Draft: "draft",
    /**
     * entered-in-error: This study never actually existed.  The record is retained for tracking purposes in the event decisions may have been made based on this erroneous information.
     */
    EnteredInError: "entered-in-error",
    /**
     * in-progress: The study is currently being executed
     */
    InProgress: "in-progress",
    /**
     * stopped: The study was terminated prior to the final determination of results
     */
    Stopped: "stopped",
    /**
     * suspended: Execution of the study has been temporarily paused
     */
    Suspended: "suspended",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZWFyY2hTdHVkeVN0YXR1c0NvZGVzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXNlYXJjaFN0dWR5U3RhdHVzQ29kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsMEVBQTBFO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUc7SUFDdEM7O09BRUc7SUFDSCxTQUFTLEVBQUUsV0FBVztJQUN0Qjs7T0FFRztJQUNILEtBQUssRUFBRSxPQUFPO0lBQ2Q7O09BRUc7SUFDSCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDOztPQUVHO0lBQ0gsVUFBVSxFQUFFLGFBQWE7SUFDekI7O09BRUc7SUFDSCxPQUFPLEVBQUUsU0FBUztJQUNsQjs7T0FFRztJQUNILFNBQVMsRUFBRSxXQUFXO0NBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXNlYXJjaC1zdHVkeS1zdGF0dXN8My4wLjJcclxuXHJcbi8qKlxyXG4gKiBDb2RlcyB0aGF0IGNvbnZleSB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIHJlc2VhcmNoIHN0dWR5XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVzZWFyY2hTdHVkeVN0YXR1c0NvZGVzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXRlZDogVGhlIGluZm9ybWF0aW9uIHNvdWdodCBieSB0aGUgc3R1ZHkgaGFzIGJlZW4gZ2F0aGVyZWQgYW5kIGNvbXBpbGVkIGFuZCBubyBmdXJ0aGVyIHdvcmsgaXMgYmVpbmcgcGVyZm9ybWVkXHJcbiAgICovXHJcbiAgQ29tcGxldGVkOiBcImNvbXBsZXRlZFwiLFxyXG4gIC8qKlxyXG4gICAqIGRyYWZ0OiBUaGUgc3R1ZHkgaXMgdW5kZXJnb2luZyBkZXNpZ24gYnV0IHRoZSBwcm9jZXNzIG9mIHNlbGVjdGluZyBzdHVkeSBzdWJqZWN0cyBhbmQgY2FwdHVyaW5nIGRhdGEgaGFzIG5vdCB5ZXQgYmVndW4uXHJcbiAgICovXHJcbiAgRHJhZnQ6IFwiZHJhZnRcIixcclxuICAvKipcclxuICAgKiBlbnRlcmVkLWluLWVycm9yOiBUaGlzIHN0dWR5IG5ldmVyIGFjdHVhbGx5IGV4aXN0ZWQuICBUaGUgcmVjb3JkIGlzIHJldGFpbmVkIGZvciB0cmFja2luZyBwdXJwb3NlcyBpbiB0aGUgZXZlbnQgZGVjaXNpb25zIG1heSBoYXZlIGJlZW4gbWFkZSBiYXNlZCBvbiB0aGlzIGVycm9uZW91cyBpbmZvcm1hdGlvbi5cclxuICAgKi9cclxuICBFbnRlcmVkSW5FcnJvcjogXCJlbnRlcmVkLWluLWVycm9yXCIsXHJcbiAgLyoqXHJcbiAgICogaW4tcHJvZ3Jlc3M6IFRoZSBzdHVkeSBpcyBjdXJyZW50bHkgYmVpbmcgZXhlY3V0ZWRcclxuICAgKi9cclxuICBJblByb2dyZXNzOiBcImluLXByb2dyZXNzXCIsXHJcbiAgLyoqXHJcbiAgICogc3RvcHBlZDogVGhlIHN0dWR5IHdhcyB0ZXJtaW5hdGVkIHByaW9yIHRvIHRoZSBmaW5hbCBkZXRlcm1pbmF0aW9uIG9mIHJlc3VsdHNcclxuICAgKi9cclxuICBTdG9wcGVkOiBcInN0b3BwZWRcIixcclxuICAvKipcclxuICAgKiBzdXNwZW5kZWQ6IEV4ZWN1dGlvbiBvZiB0aGUgc3R1ZHkgaGFzIGJlZW4gdGVtcG9yYXJpbHkgcGF1c2VkXHJcbiAgICovXHJcbiAgU3VzcGVuZGVkOiBcInN1c3BlbmRlZFwiLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIENvZGVzIHRoYXQgY29udmV5IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgcmVzZWFyY2ggc3R1ZHlcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlc2VhcmNoU3R1ZHlTdGF0dXNDb2RlVHlwZSA9IHR5cGVvZiBSZXNlYXJjaFN0dWR5U3RhdHVzQ29kZXNba2V5b2YgdHlwZW9mIFJlc2VhcmNoU3R1ZHlTdGF0dXNDb2Rlc107XHJcbiJdfQ==