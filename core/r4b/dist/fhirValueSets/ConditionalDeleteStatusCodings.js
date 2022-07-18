// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conditional-delete-status|4.3.0
/**
 * A code that indicates how the server supports conditional delete.
 */
export const ConditionalDeleteStatusCodings = {
    /**
     * multiple: Conditional deletes are supported, and multiple resources can be deleted in a single interaction.
     */
    MultipleDeletesSupported: {
        display: "Multiple Deletes Supported",
        code: "multiple",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
    /**
     * not-supported: No support for conditional deletes.
     */
    NotSupported: {
        display: "Not Supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
    /**
     * single: Conditional deletes are supported, but only single resources at a time.
     */
    SingleDeletesSupported: {
        display: "Single Deletes Supported",
        code: "single",
        system: "http://hl7.org/fhir/conditional-delete-status",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9Db25kaXRpb25hbERlbGV0ZVN0YXR1c0NvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBc0I5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILHdCQUF3QixFQUFFO1FBQ3hCLE9BQU8sRUFBRSw0QkFBNEI7UUFDckMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLGVBQWU7UUFDckIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsc0JBQXNCLEVBQUU7UUFDdEIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSwrQ0FBK0M7S0FDeEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb25kaXRpb25hbC1kZWxldGUtc3RhdHVzfDQuMy4wXHJcblxyXG5pbXBvcnQgeyBDb2RpbmdBcmdzIH0gZnJvbSAnLi4vZmhpci9Db2RpbmcuanMnXHJcblxyXG4vKipcclxuICogQSBjb2RlIHRoYXQgaW5kaWNhdGVzIGhvdyB0aGUgc2VydmVyIHN1cHBvcnRzIGNvbmRpdGlvbmFsIGRlbGV0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmRpdGlvbmFsRGVsZXRlU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBtdWx0aXBsZTogQ29uZGl0aW9uYWwgZGVsZXRlcyBhcmUgc3VwcG9ydGVkLCBhbmQgbXVsdGlwbGUgcmVzb3VyY2VzIGNhbiBiZSBkZWxldGVkIGluIGEgc2luZ2xlIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIE11bHRpcGxlRGVsZXRlc1N1cHBvcnRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBub3Qtc3VwcG9ydGVkOiBObyBzdXBwb3J0IGZvciBjb25kaXRpb25hbCBkZWxldGVzLlxyXG4gICAqL1xyXG4gIE5vdFN1cHBvcnRlZDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzaW5nbGU6IENvbmRpdGlvbmFsIGRlbGV0ZXMgYXJlIHN1cHBvcnRlZCwgYnV0IG9ubHkgc2luZ2xlIHJlc291cmNlcyBhdCBhIHRpbWUuXHJcbiAgICovXHJcbiAgU2luZ2xlRGVsZXRlc1N1cHBvcnRlZDogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29kZSB0aGF0IGluZGljYXRlcyBob3cgdGhlIHNlcnZlciBzdXBwb3J0cyBjb25kaXRpb25hbCBkZWxldGUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uZGl0aW9uYWxEZWxldGVTdGF0dXNDb2RpbmdzOkNvbmRpdGlvbmFsRGVsZXRlU3RhdHVzQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBtdWx0aXBsZTogQ29uZGl0aW9uYWwgZGVsZXRlcyBhcmUgc3VwcG9ydGVkLCBhbmQgbXVsdGlwbGUgcmVzb3VyY2VzIGNhbiBiZSBkZWxldGVkIGluIGEgc2luZ2xlIGludGVyYWN0aW9uLlxyXG4gICAqL1xyXG4gIE11bHRpcGxlRGVsZXRlc1N1cHBvcnRlZDoge1xyXG4gICAgZGlzcGxheTogXCJNdWx0aXBsZSBEZWxldGVzIFN1cHBvcnRlZFwiLFxyXG4gICAgY29kZTogXCJtdWx0aXBsZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uZGl0aW9uYWwtZGVsZXRlLXN0YXR1c1wiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogbm90LXN1cHBvcnRlZDogTm8gc3VwcG9ydCBmb3IgY29uZGl0aW9uYWwgZGVsZXRlcy5cclxuICAgKi9cclxuICBOb3RTdXBwb3J0ZWQ6IHtcclxuICAgIGRpc3BsYXk6IFwiTm90IFN1cHBvcnRlZFwiLFxyXG4gICAgY29kZTogXCJub3Qtc3VwcG9ydGVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25kaXRpb25hbC1kZWxldGUtc3RhdHVzXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBzaW5nbGU6IENvbmRpdGlvbmFsIGRlbGV0ZXMgYXJlIHN1cHBvcnRlZCwgYnV0IG9ubHkgc2luZ2xlIHJlc291cmNlcyBhdCBhIHRpbWUuXHJcbiAgICovXHJcbiAgU2luZ2xlRGVsZXRlc1N1cHBvcnRlZDoge1xyXG4gICAgZGlzcGxheTogXCJTaW5nbGUgRGVsZXRlcyBTdXBwb3J0ZWRcIixcclxuICAgIGNvZGU6IFwic2luZ2xlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25kaXRpb25hbC1kZWxldGUtc3RhdHVzXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19