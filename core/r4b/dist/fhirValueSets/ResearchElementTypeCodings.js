// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/research-element-type|4.3.0
/**
 * The possible types of research elements (E.g. Population, Exposure, Outcome).
 */
export const ResearchElementTypeCodings = {
    /**
     * exposure: The element defines an exposure within the population that is being researched.
     */
    Exposure: {
        display: "Exposure",
        code: "exposure",
        system: "http://hl7.org/fhir/research-element-type",
    },
    /**
     * outcome: The element defines an outcome within the population that is being researched.
     */
    Outcome: {
        display: "Outcome",
        code: "outcome",
        system: "http://hl7.org/fhir/research-element-type",
    },
    /**
     * population: The element defines the population that forms the basis for research.
     */
    Population: {
        display: "Population",
        code: "population",
        system: "http://hl7.org/fhir/research-element-type",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzZWFyY2hFbGVtZW50VHlwZUNvZGluZ3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmaGlyVmFsdWVTZXRzL1Jlc2VhcmNoRWxlbWVudFR5cGVDb2RpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixnREFBZ0Q7QUFDaEQsa0NBQWtDO0FBQ2xDLDBFQUEwRTtBQXNCMUU7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUM7SUFDdEU7O09BRUc7SUFDSCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsMkNBQTJDO0tBQ3BEO0lBQ0Q7O09BRUc7SUFDSCxPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsU0FBUztRQUNmLE1BQU0sRUFBRSwyQ0FBMkM7S0FDcEQ7SUFDRDs7T0FFRztJQUNILFVBQVUsRUFBRTtRQUNWLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSwyQ0FBMkM7S0FDcEQ7Q0FDTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0Yi5jb3JlIHZlcnNpb246IDQuMy4wXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXNlYXJjaC1lbGVtZW50LXR5cGV8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9zc2libGUgdHlwZXMgb2YgcmVzZWFyY2ggZWxlbWVudHMgKEUuZy4gUG9wdWxhdGlvbiwgRXhwb3N1cmUsIE91dGNvbWUpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVzZWFyY2hFbGVtZW50VHlwZUNvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogZXhwb3N1cmU6IFRoZSBlbGVtZW50IGRlZmluZXMgYW4gZXhwb3N1cmUgd2l0aGluIHRoZSBwb3B1bGF0aW9uIHRoYXQgaXMgYmVpbmcgcmVzZWFyY2hlZC5cclxuICAgKi9cclxuICBFeHBvc3VyZTogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBvdXRjb21lOiBUaGUgZWxlbWVudCBkZWZpbmVzIGFuIG91dGNvbWUgd2l0aGluIHRoZSBwb3B1bGF0aW9uIHRoYXQgaXMgYmVpbmcgcmVzZWFyY2hlZC5cclxuICAgKi9cclxuICBPdXRjb21lOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHBvcHVsYXRpb246IFRoZSBlbGVtZW50IGRlZmluZXMgdGhlIHBvcHVsYXRpb24gdGhhdCBmb3JtcyB0aGUgYmFzaXMgZm9yIHJlc2VhcmNoLlxyXG4gICAqL1xyXG4gIFBvcHVsYXRpb246IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgcG9zc2libGUgdHlwZXMgb2YgcmVzZWFyY2ggZWxlbWVudHMgKEUuZy4gUG9wdWxhdGlvbiwgRXhwb3N1cmUsIE91dGNvbWUpLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlc2VhcmNoRWxlbWVudFR5cGVDb2RpbmdzOlJlc2VhcmNoRWxlbWVudFR5cGVDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGV4cG9zdXJlOiBUaGUgZWxlbWVudCBkZWZpbmVzIGFuIGV4cG9zdXJlIHdpdGhpbiB0aGUgcG9wdWxhdGlvbiB0aGF0IGlzIGJlaW5nIHJlc2VhcmNoZWQuXHJcbiAgICovXHJcbiAgRXhwb3N1cmU6IHtcclxuICAgIGRpc3BsYXk6IFwiRXhwb3N1cmVcIixcclxuICAgIGNvZGU6IFwiZXhwb3N1cmVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc2VhcmNoLWVsZW1lbnQtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogb3V0Y29tZTogVGhlIGVsZW1lbnQgZGVmaW5lcyBhbiBvdXRjb21lIHdpdGhpbiB0aGUgcG9wdWxhdGlvbiB0aGF0IGlzIGJlaW5nIHJlc2VhcmNoZWQuXHJcbiAgICovXHJcbiAgT3V0Y29tZToge1xyXG4gICAgZGlzcGxheTogXCJPdXRjb21lXCIsXHJcbiAgICBjb2RlOiBcIm91dGNvbWVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc2VhcmNoLWVsZW1lbnQtdHlwZVwiLFxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogcG9wdWxhdGlvbjogVGhlIGVsZW1lbnQgZGVmaW5lcyB0aGUgcG9wdWxhdGlvbiB0aGF0IGZvcm1zIHRoZSBiYXNpcyBmb3IgcmVzZWFyY2guXHJcbiAgICovXHJcbiAgUG9wdWxhdGlvbjoge1xyXG4gICAgZGlzcGxheTogXCJQb3B1bGF0aW9uXCIsXHJcbiAgICBjb2RlOiBcInBvcHVsYXRpb25cIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3Jlc2VhcmNoLWVsZW1lbnQtdHlwZVwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==