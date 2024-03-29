// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/conceptmap-unmapped-mode|4.3.0
/**
 * Defines which action to take if there is no match in the group.
 */
export const ConceptmapUnmappedModeCodings = {
    /**
     * fixed: Use the code explicitly provided in the group.unmapped.
     */
    FixedCode: {
        display: "Fixed Code",
        code: "fixed",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode",
    },
    /**
     * other-map: Use the map identified by the canonical URL in the url element.
     */
    OtherMap: {
        display: "Other Map",
        code: "other-map",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode",
    },
    /**
     * provided: Use the code as provided in the $translate request.
     */
    ProvidedCode: {
        display: "Provided Code",
        code: "provided",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY2VwdG1hcFVubWFwcGVkTW9kZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL0NvbmNlcHRtYXBVbm1hcHBlZE1vZGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDZFQUE2RTtBQXNCN0U7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBb0M7SUFDNUU7O09BRUc7SUFDSCxTQUFTLEVBQUU7UUFDVCxPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsT0FBTztRQUNiLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxXQUFXO1FBQ2pCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7SUFDRDs7T0FFRztJQUNILFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLElBQUksRUFBRSxVQUFVO1FBQ2hCLE1BQU0sRUFBRSw4Q0FBOEM7S0FDdkQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9jb25jZXB0bWFwLXVubWFwcGVkLW1vZGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHdoaWNoIGFjdGlvbiB0byB0YWtlIGlmIHRoZXJlIGlzIG5vIG1hdGNoIGluIHRoZSBncm91cC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbmNlcHRtYXBVbm1hcHBlZE1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGZpeGVkOiBVc2UgdGhlIGNvZGUgZXhwbGljaXRseSBwcm92aWRlZCBpbiB0aGUgZ3JvdXAudW5tYXBwZWQuXHJcbiAgICovXHJcbiAgRml4ZWRDb2RlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIG90aGVyLW1hcDogVXNlIHRoZSBtYXAgaWRlbnRpZmllZCBieSB0aGUgY2Fub25pY2FsIFVSTCBpbiB0aGUgdXJsIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgT3RoZXJNYXA6IENvZGluZ0FyZ3M7XHJcbiAgLyoqXHJcbiAgICogcHJvdmlkZWQ6IFVzZSB0aGUgY29kZSBhcyBwcm92aWRlZCBpbiB0aGUgJHRyYW5zbGF0ZSByZXF1ZXN0LlxyXG4gICAqL1xyXG4gIFByb3ZpZGVkQ29kZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgd2hpY2ggYWN0aW9uIHRvIHRha2UgaWYgdGhlcmUgaXMgbm8gbWF0Y2ggaW4gdGhlIGdyb3VwLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvbmNlcHRtYXBVbm1hcHBlZE1vZGVDb2RpbmdzOkNvbmNlcHRtYXBVbm1hcHBlZE1vZGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGZpeGVkOiBVc2UgdGhlIGNvZGUgZXhwbGljaXRseSBwcm92aWRlZCBpbiB0aGUgZ3JvdXAudW5tYXBwZWQuXHJcbiAgICovXHJcbiAgRml4ZWRDb2RlOiB7XHJcbiAgICBkaXNwbGF5OiBcIkZpeGVkIENvZGVcIixcclxuICAgIGNvZGU6IFwiZml4ZWRcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL2NvbmNlcHRtYXAtdW5tYXBwZWQtbW9kZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3RoZXItbWFwOiBVc2UgdGhlIG1hcCBpZGVudGlmaWVkIGJ5IHRoZSBjYW5vbmljYWwgVVJMIGluIHRoZSB1cmwgZWxlbWVudC5cclxuICAgKi9cclxuICBPdGhlck1hcDoge1xyXG4gICAgZGlzcGxheTogXCJPdGhlciBNYXBcIixcclxuICAgIGNvZGU6IFwib3RoZXItbWFwXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9jb25jZXB0bWFwLXVubWFwcGVkLW1vZGVcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHByb3ZpZGVkOiBVc2UgdGhlIGNvZGUgYXMgcHJvdmlkZWQgaW4gdGhlICR0cmFuc2xhdGUgcmVxdWVzdC5cclxuICAgKi9cclxuICBQcm92aWRlZENvZGU6IHtcclxuICAgIGRpc3BsYXk6IFwiUHJvdmlkZWQgQ29kZVwiLFxyXG4gICAgY29kZTogXCJwcm92aWRlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvY29uY2VwdG1hcC11bm1hcHBlZC1tb2RlXCIsXHJcbiAgfSxcclxufSBhcyBjb25zdDtcclxuIl19