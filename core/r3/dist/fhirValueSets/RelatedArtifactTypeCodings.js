// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/related-artifact-type|3.0.2
/**
 * The type of relationship to the related artifact
 */
export const RelatedArtifactTypeCodings = {
    /**
     * citation: Bibliographic citation for papers, references, or other relevant material for the knowledge resource. This is intended to allow for citation of related material, but that was not necessarily specifically prepared in connection with this knowledge resource
     */
    Citation: {
        display: "Citation",
        code: "citation",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * composed-of: The knowledge resource is composed of the given related artifact
     */
    ComposedOf: {
        display: "Composed Of",
        code: "composed-of",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * depends-on: The knowledge resource depends on the given related artifact
     */
    DependsOn: {
        display: "Depends On",
        code: "depends-on",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * derived-from: The knowledge resource is derived from the related artifact. This is intended to capture the relationship in which a particular knowledge resource is based on the content of another artifact, but is modified to capture either a different set of overall requirements, or a more specific set of requirements such as those involved in a particular institution or clinical setting
     */
    DerivedFrom: {
        display: "Derived From",
        code: "derived-from",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * documentation: Additional documentation for the knowledge resource. This would include additional instructions on usage as well as additional information on clinical context or appropriateness
     */
    Documentation: {
        display: "Documentation",
        code: "documentation",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * justification: A summary of the justification for the knowledge resource including supporting evidence, relevant guidelines, or other clinically important information. This information is intended to provide a way to make the justification for the knowledge resource available to the consumer of interventions or results produced by the knowledge resource
     */
    Justification: {
        display: "Justification",
        code: "justification",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * predecessor: The previous version of the knowledge resource
     */
    Predecessor: {
        display: "Predecessor",
        code: "predecessor",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
    /**
     * successor: The next version of the knowledge resource
     */
    Successor: {
        display: "Successor",
        code: "successor",
        system: "http://hl7.org/fhir/related-artifact-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZEFydGlmYWN0VHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1JlbGF0ZWRBcnRpZmFjdFR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQiwrQ0FBK0M7QUFDL0Msa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQTBDMUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsY0FBYztRQUN2QixJQUFJLEVBQUUsY0FBYztRQUNwQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDYixPQUFPLEVBQUUsZUFBZTtRQUN4QixJQUFJLEVBQUUsZUFBZTtRQUNyQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxXQUFXLEVBQUU7UUFDWCxPQUFPLEVBQUUsYUFBYTtRQUN0QixJQUFJLEVBQUUsYUFBYTtRQUNuQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsV0FBVztRQUNwQixJQUFJLEVBQUUsV0FBVztRQUNqQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0NBQ08sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yMy5jb3JlIHZlcnNpb246IDMuMC4yXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZWxhdGVkLWFydGlmYWN0LXR5cGV8My4wLjJcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgdG8gdGhlIHJlbGF0ZWQgYXJ0aWZhY3RcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNpdGF0aW9uOiBCaWJsaW9ncmFwaGljIGNpdGF0aW9uIGZvciBwYXBlcnMsIHJlZmVyZW5jZXMsIG9yIG90aGVyIHJlbGV2YW50IG1hdGVyaWFsIGZvciB0aGUga25vd2xlZGdlIHJlc291cmNlLiBUaGlzIGlzIGludGVuZGVkIHRvIGFsbG93IGZvciBjaXRhdGlvbiBvZiByZWxhdGVkIG1hdGVyaWFsLCBidXQgdGhhdCB3YXMgbm90IG5lY2Vzc2FyaWx5IHNwZWNpZmljYWxseSBwcmVwYXJlZCBpbiBjb25uZWN0aW9uIHdpdGggdGhpcyBrbm93bGVkZ2UgcmVzb3VyY2VcclxuICAgKi9cclxuICBDaXRhdGlvbjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBjb21wb3NlZC1vZjogVGhlIGtub3dsZWRnZSByZXNvdXJjZSBpcyBjb21wb3NlZCBvZiB0aGUgZ2l2ZW4gcmVsYXRlZCBhcnRpZmFjdFxyXG4gICAqL1xyXG4gIENvbXBvc2VkT2Y6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogZGVwZW5kcy1vbjogVGhlIGtub3dsZWRnZSByZXNvdXJjZSBkZXBlbmRzIG9uIHRoZSBnaXZlbiByZWxhdGVkIGFydGlmYWN0XHJcbiAgICovXHJcbiAgRGVwZW5kc09uOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRlcml2ZWQtZnJvbTogVGhlIGtub3dsZWRnZSByZXNvdXJjZSBpcyBkZXJpdmVkIGZyb20gdGhlIHJlbGF0ZWQgYXJ0aWZhY3QuIFRoaXMgaXMgaW50ZW5kZWQgdG8gY2FwdHVyZSB0aGUgcmVsYXRpb25zaGlwIGluIHdoaWNoIGEgcGFydGljdWxhciBrbm93bGVkZ2UgcmVzb3VyY2UgaXMgYmFzZWQgb24gdGhlIGNvbnRlbnQgb2YgYW5vdGhlciBhcnRpZmFjdCwgYnV0IGlzIG1vZGlmaWVkIHRvIGNhcHR1cmUgZWl0aGVyIGEgZGlmZmVyZW50IHNldCBvZiBvdmVyYWxsIHJlcXVpcmVtZW50cywgb3IgYSBtb3JlIHNwZWNpZmljIHNldCBvZiByZXF1aXJlbWVudHMgc3VjaCBhcyB0aG9zZSBpbnZvbHZlZCBpbiBhIHBhcnRpY3VsYXIgaW5zdGl0dXRpb24gb3IgY2xpbmljYWwgc2V0dGluZ1xyXG4gICAqL1xyXG4gIERlcml2ZWRGcm9tOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGRvY3VtZW50YXRpb246IEFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGtub3dsZWRnZSByZXNvdXJjZS4gVGhpcyB3b3VsZCBpbmNsdWRlIGFkZGl0aW9uYWwgaW5zdHJ1Y3Rpb25zIG9uIHVzYWdlIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiBjbGluaWNhbCBjb250ZXh0IG9yIGFwcHJvcHJpYXRlbmVzc1xyXG4gICAqL1xyXG4gIERvY3VtZW50YXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICoganVzdGlmaWNhdGlvbjogQSBzdW1tYXJ5IG9mIHRoZSBqdXN0aWZpY2F0aW9uIGZvciB0aGUga25vd2xlZGdlIHJlc291cmNlIGluY2x1ZGluZyBzdXBwb3J0aW5nIGV2aWRlbmNlLCByZWxldmFudCBndWlkZWxpbmVzLCBvciBvdGhlciBjbGluaWNhbGx5IGltcG9ydGFudCBpbmZvcm1hdGlvbi4gVGhpcyBpbmZvcm1hdGlvbiBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGEgd2F5IHRvIG1ha2UgdGhlIGp1c3RpZmljYXRpb24gZm9yIHRoZSBrbm93bGVkZ2UgcmVzb3VyY2UgYXZhaWxhYmxlIHRvIHRoZSBjb25zdW1lciBvZiBpbnRlcnZlbnRpb25zIG9yIHJlc3VsdHMgcHJvZHVjZWQgYnkgdGhlIGtub3dsZWRnZSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIEp1c3RpZmljYXRpb246IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJlZGVjZXNzb3I6IFRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoZSBrbm93bGVkZ2UgcmVzb3VyY2VcclxuICAgKi9cclxuICBQcmVkZWNlc3NvcjogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBzdWNjZXNzb3I6IFRoZSBuZXh0IHZlcnNpb24gb2YgdGhlIGtub3dsZWRnZSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFN1Y2Nlc3NvcjogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSB0eXBlIG9mIHJlbGF0aW9uc2hpcCB0byB0aGUgcmVsYXRlZCBhcnRpZmFjdFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RpbmdzOlJlbGF0ZWRBcnRpZmFjdFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNpdGF0aW9uOiBCaWJsaW9ncmFwaGljIGNpdGF0aW9uIGZvciBwYXBlcnMsIHJlZmVyZW5jZXMsIG9yIG90aGVyIHJlbGV2YW50IG1hdGVyaWFsIGZvciB0aGUga25vd2xlZGdlIHJlc291cmNlLiBUaGlzIGlzIGludGVuZGVkIHRvIGFsbG93IGZvciBjaXRhdGlvbiBvZiByZWxhdGVkIG1hdGVyaWFsLCBidXQgdGhhdCB3YXMgbm90IG5lY2Vzc2FyaWx5IHNwZWNpZmljYWxseSBwcmVwYXJlZCBpbiBjb25uZWN0aW9uIHdpdGggdGhpcyBrbm93bGVkZ2UgcmVzb3VyY2VcclxuICAgKi9cclxuICBDaXRhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJDaXRhdGlvblwiLFxyXG4gICAgY29kZTogXCJjaXRhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVsYXRlZC1hcnRpZmFjdC10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBjb21wb3NlZC1vZjogVGhlIGtub3dsZWRnZSByZXNvdXJjZSBpcyBjb21wb3NlZCBvZiB0aGUgZ2l2ZW4gcmVsYXRlZCBhcnRpZmFjdFxyXG4gICAqL1xyXG4gIENvbXBvc2VkT2Y6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcG9zZWQgT2ZcIixcclxuICAgIGNvZGU6IFwiY29tcG9zZWQtb2ZcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlbGF0ZWQtYXJ0aWZhY3QtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogZGVwZW5kcy1vbjogVGhlIGtub3dsZWRnZSByZXNvdXJjZSBkZXBlbmRzIG9uIHRoZSBnaXZlbiByZWxhdGVkIGFydGlmYWN0XHJcbiAgICovXHJcbiAgRGVwZW5kc09uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkRlcGVuZHMgT25cIixcclxuICAgIGNvZGU6IFwiZGVwZW5kcy1vblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVsYXRlZC1hcnRpZmFjdC10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBkZXJpdmVkLWZyb206IFRoZSBrbm93bGVkZ2UgcmVzb3VyY2UgaXMgZGVyaXZlZCBmcm9tIHRoZSByZWxhdGVkIGFydGlmYWN0LiBUaGlzIGlzIGludGVuZGVkIHRvIGNhcHR1cmUgdGhlIHJlbGF0aW9uc2hpcCBpbiB3aGljaCBhIHBhcnRpY3VsYXIga25vd2xlZGdlIHJlc291cmNlIGlzIGJhc2VkIG9uIHRoZSBjb250ZW50IG9mIGFub3RoZXIgYXJ0aWZhY3QsIGJ1dCBpcyBtb2RpZmllZCB0byBjYXB0dXJlIGVpdGhlciBhIGRpZmZlcmVudCBzZXQgb2Ygb3ZlcmFsbCByZXF1aXJlbWVudHMsIG9yIGEgbW9yZSBzcGVjaWZpYyBzZXQgb2YgcmVxdWlyZW1lbnRzIHN1Y2ggYXMgdGhvc2UgaW52b2x2ZWQgaW4gYSBwYXJ0aWN1bGFyIGluc3RpdHV0aW9uIG9yIGNsaW5pY2FsIHNldHRpbmdcclxuICAgKi9cclxuICBEZXJpdmVkRnJvbToge1xyXG4gICAgZGlzcGxheTogXCJEZXJpdmVkIEZyb21cIixcclxuICAgIGNvZGU6IFwiZGVyaXZlZC1mcm9tXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZWxhdGVkLWFydGlmYWN0LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGRvY3VtZW50YXRpb246IEFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGtub3dsZWRnZSByZXNvdXJjZS4gVGhpcyB3b3VsZCBpbmNsdWRlIGFkZGl0aW9uYWwgaW5zdHJ1Y3Rpb25zIG9uIHVzYWdlIGFzIHdlbGwgYXMgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvbiBjbGluaWNhbCBjb250ZXh0IG9yIGFwcHJvcHJpYXRlbmVzc1xyXG4gICAqL1xyXG4gIERvY3VtZW50YXRpb246IHtcclxuICAgIGRpc3BsYXk6IFwiRG9jdW1lbnRhdGlvblwiLFxyXG4gICAgY29kZTogXCJkb2N1bWVudGF0aW9uXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZWxhdGVkLWFydGlmYWN0LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIGp1c3RpZmljYXRpb246IEEgc3VtbWFyeSBvZiB0aGUganVzdGlmaWNhdGlvbiBmb3IgdGhlIGtub3dsZWRnZSByZXNvdXJjZSBpbmNsdWRpbmcgc3VwcG9ydGluZyBldmlkZW5jZSwgcmVsZXZhbnQgZ3VpZGVsaW5lcywgb3Igb3RoZXIgY2xpbmljYWxseSBpbXBvcnRhbnQgaW5mb3JtYXRpb24uIFRoaXMgaW5mb3JtYXRpb24gaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhIHdheSB0byBtYWtlIHRoZSBqdXN0aWZpY2F0aW9uIGZvciB0aGUga25vd2xlZGdlIHJlc291cmNlIGF2YWlsYWJsZSB0byB0aGUgY29uc3VtZXIgb2YgaW50ZXJ2ZW50aW9ucyBvciByZXN1bHRzIHByb2R1Y2VkIGJ5IHRoZSBrbm93bGVkZ2UgcmVzb3VyY2VcclxuICAgKi9cclxuICBKdXN0aWZpY2F0aW9uOiB7XHJcbiAgICBkaXNwbGF5OiBcIkp1c3RpZmljYXRpb25cIixcclxuICAgIGNvZGU6IFwianVzdGlmaWNhdGlvblwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVsYXRlZC1hcnRpZmFjdC10eXBlXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmVkZWNlc3NvcjogVGhlIHByZXZpb3VzIHZlcnNpb24gb2YgdGhlIGtub3dsZWRnZSByZXNvdXJjZVxyXG4gICAqL1xyXG4gIFByZWRlY2Vzc29yOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByZWRlY2Vzc29yXCIsXHJcbiAgICBjb2RlOiBcInByZWRlY2Vzc29yXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZWxhdGVkLWFydGlmYWN0LXR5cGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHN1Y2Nlc3NvcjogVGhlIG5leHQgdmVyc2lvbiBvZiB0aGUga25vd2xlZGdlIHJlc291cmNlXHJcbiAgICovXHJcbiAgU3VjY2Vzc29yOiB7XHJcbiAgICBkaXNwbGF5OiBcIlN1Y2Nlc3NvclwiLFxyXG4gICAgY29kZTogXCJzdWNjZXNzb3JcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3JlbGF0ZWQtYXJ0aWZhY3QtdHlwZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==