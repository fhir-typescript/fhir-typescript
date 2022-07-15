// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/plan-definition-type|4.3.0
/**
 * The type of PlanDefinition.
 */
export const PlanDefinitionTypeCodings = {
    /**
     * clinical-protocol: Defines a desired/typical sequence of clinical activities including preconditions, triggers and temporal relationships.
     */
    ClinicalProtocol: {
        display: "Clinical Protocol",
        code: "clinical-protocol",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
    },
    /**
     * eca-rule: A decision support rule of the form [on Event] if Condition then Action. It is intended to be a shareable, computable definition of actions that should be taken whenever some condition is met in response to a particular event or events.
     */
    ECARule: {
        display: "ECA Rule",
        code: "eca-rule",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
    },
    /**
     * order-set: A pre-defined and approved group of orders related to a particular clinical condition (e.g. hypertension treatment and monitoring) or stage of care (e.g. hospital admission to Coronary Care Unit). An order set is used as a checklist for the clinician when managing a patient with a specific condition. It is a structured collection of orders relevant to that condition and presented to the clinician in a computerized provider order entry (CPOE) system.
     */
    OrderSet: {
        display: "Order Set",
        code: "order-set",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
    },
    /**
     * workflow-definition: Defines the steps for a group of one or more systems in an event flow process along with the step constraints, sequence, pre-conditions and decision points to complete a particular objective.
     */
    WorkflowDefinition: {
        display: "Workflow Definition",
        code: "workflow-definition",
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhbkRlZmluaXRpb25UeXBlQ29kaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImZoaXJWYWx1ZVNldHMvUGxhbkRlZmluaXRpb25UeXBlQ29kaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBQ2hELGtDQUFrQztBQUNsQyx5RUFBeUU7QUEwQnpFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQWdDO0lBQ3BFOztPQUVHO0lBQ0gsZ0JBQWdCLEVBQUU7UUFDaEIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILE9BQU8sRUFBRTtRQUNQLE9BQU8sRUFBRSxVQUFVO1FBQ25CLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw0REFBNEQ7S0FDckU7SUFDRDs7T0FFRztJQUNILGtCQUFrQixFQUFFO1FBQ2xCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixNQUFNLEVBQUUsNERBQTREO0tBQ3JFO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNGIuY29yZSB2ZXJzaW9uOiA0LjMuMFxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvcGxhbi1kZWZpbml0aW9uLXR5cGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBQbGFuRGVmaW5pdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBsYW5EZWZpbml0aW9uVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2xpbmljYWwtcHJvdG9jb2w6IERlZmluZXMgYSBkZXNpcmVkL3R5cGljYWwgc2VxdWVuY2Ugb2YgY2xpbmljYWwgYWN0aXZpdGllcyBpbmNsdWRpbmcgcHJlY29uZGl0aW9ucywgdHJpZ2dlcnMgYW5kIHRlbXBvcmFsIHJlbGF0aW9uc2hpcHMuXHJcbiAgICovXHJcbiAgQ2xpbmljYWxQcm90b2NvbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBlY2EtcnVsZTogQSBkZWNpc2lvbiBzdXBwb3J0IHJ1bGUgb2YgdGhlIGZvcm0gW29uIEV2ZW50XSBpZiBDb25kaXRpb24gdGhlbiBBY3Rpb24uIEl0IGlzIGludGVuZGVkIHRvIGJlIGEgc2hhcmVhYmxlLCBjb21wdXRhYmxlIGRlZmluaXRpb24gb2YgYWN0aW9ucyB0aGF0IHNob3VsZCBiZSB0YWtlbiB3aGVuZXZlciBzb21lIGNvbmRpdGlvbiBpcyBtZXQgaW4gcmVzcG9uc2UgdG8gYSBwYXJ0aWN1bGFyIGV2ZW50IG9yIGV2ZW50cy5cclxuICAgKi9cclxuICBFQ0FSdWxlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG9yZGVyLXNldDogQSBwcmUtZGVmaW5lZCBhbmQgYXBwcm92ZWQgZ3JvdXAgb2Ygb3JkZXJzIHJlbGF0ZWQgdG8gYSBwYXJ0aWN1bGFyIGNsaW5pY2FsIGNvbmRpdGlvbiAoZS5nLiBoeXBlcnRlbnNpb24gdHJlYXRtZW50IGFuZCBtb25pdG9yaW5nKSBvciBzdGFnZSBvZiBjYXJlIChlLmcuIGhvc3BpdGFsIGFkbWlzc2lvbiB0byBDb3JvbmFyeSBDYXJlIFVuaXQpLiBBbiBvcmRlciBzZXQgaXMgdXNlZCBhcyBhIGNoZWNrbGlzdCBmb3IgdGhlIGNsaW5pY2lhbiB3aGVuIG1hbmFnaW5nIGEgcGF0aWVudCB3aXRoIGEgc3BlY2lmaWMgY29uZGl0aW9uLiBJdCBpcyBhIHN0cnVjdHVyZWQgY29sbGVjdGlvbiBvZiBvcmRlcnMgcmVsZXZhbnQgdG8gdGhhdCBjb25kaXRpb24gYW5kIHByZXNlbnRlZCB0byB0aGUgY2xpbmljaWFuIGluIGEgY29tcHV0ZXJpemVkIHByb3ZpZGVyIG9yZGVyIGVudHJ5IChDUE9FKSBzeXN0ZW0uXHJcbiAgICovXHJcbiAgT3JkZXJTZXQ6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogd29ya2Zsb3ctZGVmaW5pdGlvbjogRGVmaW5lcyB0aGUgc3RlcHMgZm9yIGEgZ3JvdXAgb2Ygb25lIG9yIG1vcmUgc3lzdGVtcyBpbiBhbiBldmVudCBmbG93IHByb2Nlc3MgYWxvbmcgd2l0aCB0aGUgc3RlcCBjb25zdHJhaW50cywgc2VxdWVuY2UsIHByZS1jb25kaXRpb25zIGFuZCBkZWNpc2lvbiBwb2ludHMgdG8gY29tcGxldGUgYSBwYXJ0aWN1bGFyIG9iamVjdGl2ZS5cclxuICAgKi9cclxuICBXb3JrZmxvd0RlZmluaXRpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiBQbGFuRGVmaW5pdGlvbi5cclxuICovXHJcbmV4cG9ydCBjb25zdCBQbGFuRGVmaW5pdGlvblR5cGVDb2RpbmdzOlBsYW5EZWZpbml0aW9uVHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY2xpbmljYWwtcHJvdG9jb2w6IERlZmluZXMgYSBkZXNpcmVkL3R5cGljYWwgc2VxdWVuY2Ugb2YgY2xpbmljYWwgYWN0aXZpdGllcyBpbmNsdWRpbmcgcHJlY29uZGl0aW9ucywgdHJpZ2dlcnMgYW5kIHRlbXBvcmFsIHJlbGF0aW9uc2hpcHMuXHJcbiAgICovXHJcbiAgQ2xpbmljYWxQcm90b2NvbDoge1xyXG4gICAgZGlzcGxheTogXCJDbGluaWNhbCBQcm90b2NvbFwiLFxyXG4gICAgY29kZTogXCJjbGluaWNhbC1wcm90b2NvbFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vcGxhbi1kZWZpbml0aW9uLXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGVjYS1ydWxlOiBBIGRlY2lzaW9uIHN1cHBvcnQgcnVsZSBvZiB0aGUgZm9ybSBbb24gRXZlbnRdIGlmIENvbmRpdGlvbiB0aGVuIEFjdGlvbi4gSXQgaXMgaW50ZW5kZWQgdG8gYmUgYSBzaGFyZWFibGUsIGNvbXB1dGFibGUgZGVmaW5pdGlvbiBvZiBhY3Rpb25zIHRoYXQgc2hvdWxkIGJlIHRha2VuIHdoZW5ldmVyIHNvbWUgY29uZGl0aW9uIGlzIG1ldCBpbiByZXNwb25zZSB0byBhIHBhcnRpY3VsYXIgZXZlbnQgb3IgZXZlbnRzLlxyXG4gICAqL1xyXG4gIEVDQVJ1bGU6IHtcclxuICAgIGRpc3BsYXk6IFwiRUNBIFJ1bGVcIixcclxuICAgIGNvZGU6IFwiZWNhLXJ1bGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3BsYW4tZGVmaW5pdGlvbi10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBvcmRlci1zZXQ6IEEgcHJlLWRlZmluZWQgYW5kIGFwcHJvdmVkIGdyb3VwIG9mIG9yZGVycyByZWxhdGVkIHRvIGEgcGFydGljdWxhciBjbGluaWNhbCBjb25kaXRpb24gKGUuZy4gaHlwZXJ0ZW5zaW9uIHRyZWF0bWVudCBhbmQgbW9uaXRvcmluZykgb3Igc3RhZ2Ugb2YgY2FyZSAoZS5nLiBob3NwaXRhbCBhZG1pc3Npb24gdG8gQ29yb25hcnkgQ2FyZSBVbml0KS4gQW4gb3JkZXIgc2V0IGlzIHVzZWQgYXMgYSBjaGVja2xpc3QgZm9yIHRoZSBjbGluaWNpYW4gd2hlbiBtYW5hZ2luZyBhIHBhdGllbnQgd2l0aCBhIHNwZWNpZmljIGNvbmRpdGlvbi4gSXQgaXMgYSBzdHJ1Y3R1cmVkIGNvbGxlY3Rpb24gb2Ygb3JkZXJzIHJlbGV2YW50IHRvIHRoYXQgY29uZGl0aW9uIGFuZCBwcmVzZW50ZWQgdG8gdGhlIGNsaW5pY2lhbiBpbiBhIGNvbXB1dGVyaXplZCBwcm92aWRlciBvcmRlciBlbnRyeSAoQ1BPRSkgc3lzdGVtLlxyXG4gICAqL1xyXG4gIE9yZGVyU2V0OiB7XHJcbiAgICBkaXNwbGF5OiBcIk9yZGVyIFNldFwiLFxyXG4gICAgY29kZTogXCJvcmRlci1zZXRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3BsYW4tZGVmaW5pdGlvbi10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiB3b3JrZmxvdy1kZWZpbml0aW9uOiBEZWZpbmVzIHRoZSBzdGVwcyBmb3IgYSBncm91cCBvZiBvbmUgb3IgbW9yZSBzeXN0ZW1zIGluIGFuIGV2ZW50IGZsb3cgcHJvY2VzcyBhbG9uZyB3aXRoIHRoZSBzdGVwIGNvbnN0cmFpbnRzLCBzZXF1ZW5jZSwgcHJlLWNvbmRpdGlvbnMgYW5kIGRlY2lzaW9uIHBvaW50cyB0byBjb21wbGV0ZSBhIHBhcnRpY3VsYXIgb2JqZWN0aXZlLlxyXG4gICAqL1xyXG4gIFdvcmtmbG93RGVmaW5pdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJXb3JrZmxvdyBEZWZpbml0aW9uXCIsXHJcbiAgICBjb2RlOiBcIndvcmtmbG93LWRlZmluaXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL3BsYW4tZGVmaW5pdGlvbi10eXBlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19