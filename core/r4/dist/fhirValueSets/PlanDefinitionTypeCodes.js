// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/plan-definition-type|4.0.1
/**
 * The type of PlanDefinition.
 */
export const PlanDefinitionTypeCodes = {
    /**
     * clinical-protocol: Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
     */
    ClinicalProtocol: "clinical-protocol",
    /**
     * eca-rule: A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
     */
    ECARule: "eca-rule",
    /**
     * order-set: A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
     */
    OrderSet: "order-set",
    /**
     * workflow-definition: Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
     */
    WorkflowDefinition: "workflow-definition",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbkRlZmluaXRpb25UeXBlQ29kZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1BsYW5EZWZpbml0aW9uVHlwZUNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLHlFQUF5RTtBQUV6RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHO0lBQ3JDOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLFVBQVU7SUFDbkI7O09BRUc7SUFDSCxRQUFRLEVBQUUsV0FBVztJQUNyQjs7T0FFRztJQUNILGtCQUFrQixFQUFFLHFCQUFxQjtDQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3BsYW4tZGVmaW5pdGlvbi10eXBlfDQuMC4xXHJcblxyXG4vKipcclxuICogVGhlIHR5cGUgb2YgUGxhbkRlZmluaXRpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGxhbkRlZmluaXRpb25UeXBlQ29kZXMgPSB7XHJcbiAgLyoqXHJcbiAgICogY2xpbmljYWwtcHJvdG9jb2w6IERlZmluZXMgYSBkZXNpcmVkL3R5cGljYWwgc2VxdWVuY2Ugb2YgY2xpbmljYWwgYWN0aXZpdGllcyBpbmNsdWRpbmcgcHJlY29uZGl0aW9ucywgdHJpZ2dlcnMgYW5kIHRlbXBvcmFsIHJlbGF0aW9uc2hpcHMuXHJcbiAgICovXHJcbiAgQ2xpbmljYWxQcm90b2NvbDogXCJjbGluaWNhbC1wcm90b2NvbFwiLFxyXG4gIC8qKlxyXG4gICAqIGVjYS1ydWxlOiBBIGRlY2lzaW9uIHN1cHBvcnQgcnVsZSBvZiB0aGUgZm9ybSBbb24gRXZlbnRdIGlmIENvbmRpdGlvbiB0aGVuIEFjdGlvbi4gSXQgaXMgaW50ZW5kZWQgdG8gYmUgYSBzaGFyZWFibGUsIGNvbXB1dGFibGUgZGVmaW5pdGlvbiBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGJlIHRha2VuIHdoZW5ldmVyIHNvbWUgY29uZGl0aW9uIGlzIG1ldCBpbiByZXNwb25zZSB0byBhIHBhcnRpY3VsYXIgZXZlbnQgb3IgZXZlbnRzLlxyXG4gICAqL1xyXG4gIEVDQVJ1bGU6IFwiZWNhLXJ1bGVcIixcclxuICAvKipcclxuICAgKiBvcmRlci1zZXQ6IEEgcHJlLWRlZmluZWQgYW5kIGFwcHJvdmVkIGdyb3VwIG9mIG9yZGVycyByZWxhdGVkIHRvIGEgcGFydGljdWxhciBjbGluaWNhbCBjb25kaXRpb24gKGUuZy4gaHlwZXJ0ZW5zaW9uIHRyZWF0bWVudCBhbmQgbW9uaXRvcmluZykgb3Igc3RhZ2Ugb2YgY2FyZSAoZS5nLiBob3NwaXRhbCBhZG1pc3Npb24gdG8gQ29yb25hcnkgQ2FyZSBVbml0KS4gQW4gb3JkZXIgc2V0IGlzIHVzZWQgYXMgYSBjaGVja2xpc3QgZm9yIHRoZSBjbGluaWNpYW4gd2hlbiBtYW5hZ2luZyBhIHBhdGllbnQgd2l0aCBhIHNwZWNpZmljIGNvbmRpdGlvbi4gSXQgaXMgYSBzdHJ1Y3R1cmVkIGNvbGxlY3Rpb24gb2Ygb3JkZXJzIHJlbGV2YW50IHRvIHRoYXQgY29uZGl0aW9uIGFuZCBwcmVzZW50ZWQgdG8gdGhlIGNsaW5pY2lhbiBpbiBhIGNvbXB1dGVyaXplZCBwcm92aWRlciBvcmRlciBlbnRyeSAoQ1BPRSkgc3lzdGVtLlxyXG4gICAqL1xyXG4gIE9yZGVyU2V0OiBcIm9yZGVyLXNldFwiLFxyXG4gIC8qKlxyXG4gICAqIHdvcmtmbG93LWRlZmluaXRpb246IERlZmluZXMgdGhlIHN0ZXBzIGZvciBhIGdyb3VwIG9mIG9uZSBvciBtb3JlIHN5c3RlbXMgaW4gYW4gZXZlbnQgZmxvdyBwcm9jZXNzIGFsb25nIHdpdGggdGhlIHN0ZXAgY29uc3RyYWludHMsIHNlcXVlbmNlLCBwcmUtY29uZGl0aW9ucyBhbmQgZGVjaXNpb24gcG9pbnRzIHRvIGNvbXBsZXRlIGEgcGFydGljdWxhciBvYmplY3RpdmUuXHJcbiAgICovXHJcbiAgV29ya2Zsb3dEZWZpbml0aW9uOiBcIndvcmtmbG93LWRlZmluaXRpb25cIixcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBQbGFuRGVmaW5pdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBsYW5EZWZpbml0aW9uVHlwZUNvZGVUeXBlID0gdHlwZW9mIFBsYW5EZWZpbml0aW9uVHlwZUNvZGVzW2tleW9mIHR5cGVvZiBQbGFuRGVmaW5pdGlvblR5cGVDb2Rlc107XHJcbiJdfQ==