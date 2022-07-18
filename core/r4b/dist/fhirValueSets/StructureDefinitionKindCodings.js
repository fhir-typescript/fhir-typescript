// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/structure-definition-kind|4.3.0
/**
 * Defines the type of structure that a definition is describing.
 */
export const StructureDefinitionKindCodings = {
    /**
     * complex-type: A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.
     */
    ComplexDataType: {
        display: "Complex Data Type",
        code: "complex-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * logical: A pattern or a template that is not intended to be a real resource or complex type.
     */
    Logical: {
        display: "Logical",
        code: "logical",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.
     */
    PrimitiveDataType: {
        display: "Primitive Data Type",
        code: "primitive-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * resource: A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).
     */
    Resource: {
        display: "Resource",
        code: "resource",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdHJ1Y3R1cmVEZWZpbml0aW9uS2luZENvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLGdEQUFnRDtBQUNoRCxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBMEI5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjRiLmNvcmUgdmVyc2lvbjogNC4zLjBcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmR8NC4zLjBcclxuXHJcbmltcG9ydCB7IENvZGluZ0FyZ3MgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSB0eXBlIG9mIHN0cnVjdHVyZSB0aGF0IGEgZGVmaW5pdGlvbiBpcyBkZXNjcmliaW5nLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXgtdHlwZTogQSAgY29tcGxleCBzdHJ1Y3R1cmUgdGhhdCBkZWZpbmVzIGEgc2V0IG9mIGRhdGEgZWxlbWVudHMgdGhhdCBpcyBzdWl0YWJsZSBmb3IgdXNlIGluICdyZXNvdXJjZXMnLiBUaGUgYmFzZSBzcGVjaWZpY2F0aW9uIGRlZmluZXMgYSBudW1iZXIgb2YgY29tcGxleCB0eXBlcywgYW5kIG90aGVyIHNwZWNpZmljYXRpb25zIGNhbiBkZWZpbmUgYWRkaXRpb25hbCB0eXBlcy4gVGhlc2Ugc3RydWN0dXJlcyBkbyBub3QgaGF2ZSBhIG1haW50YWluZWQgaWRlbnRpdHkuXHJcbiAgICovXHJcbiAgQ29tcGxleERhdGFUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGxvZ2ljYWw6IEEgcGF0dGVybiBvciBhIHRlbXBsYXRlIHRoYXQgaXMgbm90IGludGVuZGVkIHRvIGJlIGEgcmVhbCByZXNvdXJjZSBvciBjb21wbGV4IHR5cGUuXHJcbiAgICovXHJcbiAgTG9naWNhbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcmltaXRpdmUtdHlwZTogQSBwcmltaXRpdmUgdHlwZSB0aGF0IGhhcyBhIHZhbHVlIGFuZCBhbiBleHRlbnNpb24uIFRoZXNlIGNhbiBiZSB1c2VkIHRocm91Z2hvdXQgY29tcGxleCBkYXRhdHlwZSwgUmVzb3VyY2UgYW5kIGV4dGVuc2lvbiBkZWZpbml0aW9ucy4gT25seSB0aGUgYmFzZSBzcGVjaWZpY2F0aW9uIGNhbiBkZWZpbmUgcHJpbWl0aXZlIHR5cGVzLlxyXG4gICAqL1xyXG4gIFByaW1pdGl2ZURhdGFUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlc291cmNlOiBBICdyZXNvdXJjZScgLSBhIGRpcmVjdGVkIGFjeWNsaWMgZ3JhcGggb2YgZWxlbWVudHMgdGhhdCBhZ2dyZWdyYXRlcyBvdGhlciB0eXBlcyBpbnRvIGFuIGlkZW50aWZpYWJsZSBlbnRpdHkuIFRoZSBiYXNlIEZISVIgcmVzb3VyY2VzIGFyZSBkZWZpbmVkIGJ5IHRoZSBGSElSIHNwZWNpZmljYXRpb24gaXRzZWxmIGJ1dCBvdGhlciAncmVzb3VyY2VzJyBjYW4gYmUgZGVmaW5lZCBpbiBhZGRpdGlvbmFsIHNwZWNpZmljYXRpb25zICh0aG91Z2ggdGhlc2Ugd2lsbCBub3QgYmUgcmVjb2duaXNlZCBhcyAncmVzb3VyY2VzJyBieSB0aGUgRkhJUiBzcGVjaWZpY2F0aW9uIChpLmUuIHRoZXkgZG8gbm90IGdldCBlbmQtcG9pbnRzIGV0Yywgb3IgYWN0IGFzIHRoZSB0YXJnZXRzIG9mIHJlZmVyZW5jZXMgaW4gRkhJUiBkZWZpbmVkIHJlc291cmNlcyAtIHRob3VnaCBvdGhlciBzcGVjaWZpY2F0aW9zbiBjYW4gdHJlYXQgdGhlbSB0aGlzIHdheSkuXHJcbiAgICovXHJcbiAgUmVzb3VyY2U6IENvZGluZ0FyZ3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSB0eXBlIG9mIHN0cnVjdHVyZSB0aGF0IGEgZGVmaW5pdGlvbiBpcyBkZXNjcmliaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0cnVjdHVyZURlZmluaXRpb25LaW5kQ29kaW5nczpTdHJ1Y3R1cmVEZWZpbml0aW9uS2luZENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxleC10eXBlOiBBICBjb21wbGV4IHN0cnVjdHVyZSB0aGF0IGRlZmluZXMgYSBzZXQgb2YgZGF0YSBlbGVtZW50cyB0aGF0IGlzIHN1aXRhYmxlIGZvciB1c2UgaW4gJ3Jlc291cmNlcycuIFRoZSBiYXNlIHNwZWNpZmljYXRpb24gZGVmaW5lcyBhIG51bWJlciBvZiBjb21wbGV4IHR5cGVzLCBhbmQgb3RoZXIgc3BlY2lmaWNhdGlvbnMgY2FuIGRlZmluZSBhZGRpdGlvbmFsIHR5cGVzLiBUaGVzZSBzdHJ1Y3R1cmVzIGRvIG5vdCBoYXZlIGEgbWFpbnRhaW5lZCBpZGVudGl0eS5cclxuICAgKi9cclxuICBDb21wbGV4RGF0YVR5cGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxleCBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwiY29tcGxleC10eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBsb2dpY2FsOiBBIHBhdHRlcm4gb3IgYSB0ZW1wbGF0ZSB0aGF0IGlzIG5vdCBpbnRlbmRlZCB0byBiZSBhIHJlYWwgcmVzb3VyY2Ugb3IgY29tcGxleCB0eXBlLlxyXG4gICAqL1xyXG4gIExvZ2ljYWw6IHtcclxuICAgIGRpc3BsYXk6IFwiTG9naWNhbFwiLFxyXG4gICAgY29kZTogXCJsb2dpY2FsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmltaXRpdmUtdHlwZTogQSBwcmltaXRpdmUgdHlwZSB0aGF0IGhhcyBhIHZhbHVlIGFuZCBhbiBleHRlbnNpb24uIFRoZXNlIGNhbiBiZSB1c2VkIHRocm91Z2hvdXQgY29tcGxleCBkYXRhdHlwZSwgUmVzb3VyY2UgYW5kIGV4dGVuc2lvbiBkZWZpbml0aW9ucy4gT25seSB0aGUgYmFzZSBzcGVjaWZpY2F0aW9uIGNhbiBkZWZpbmUgcHJpbWl0aXZlIHR5cGVzLlxyXG4gICAqL1xyXG4gIFByaW1pdGl2ZURhdGFUeXBlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByaW1pdGl2ZSBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwicHJpbWl0aXZlLXR5cGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlc291cmNlOiBBICdyZXNvdXJjZScgLSBhIGRpcmVjdGVkIGFjeWNsaWMgZ3JhcGggb2YgZWxlbWVudHMgdGhhdCBhZ2dyZWdyYXRlcyBvdGhlciB0eXBlcyBpbnRvIGFuIGlkZW50aWZpYWJsZSBlbnRpdHkuIFRoZSBiYXNlIEZISVIgcmVzb3VyY2VzIGFyZSBkZWZpbmVkIGJ5IHRoZSBGSElSIHNwZWNpZmljYXRpb24gaXRzZWxmIGJ1dCBvdGhlciAncmVzb3VyY2VzJyBjYW4gYmUgZGVmaW5lZCBpbiBhZGRpdGlvbmFsIHNwZWNpZmljYXRpb25zICh0aG91Z2ggdGhlc2Ugd2lsbCBub3QgYmUgcmVjb2duaXNlZCBhcyAncmVzb3VyY2VzJyBieSB0aGUgRkhJUiBzcGVjaWZpY2F0aW9uIChpLmUuIHRoZXkgZG8gbm90IGdldCBlbmQtcG9pbnRzIGV0Yywgb3IgYWN0IGFzIHRoZSB0YXJnZXRzIG9mIHJlZmVyZW5jZXMgaW4gRkhJUiBkZWZpbmVkIHJlc291cmNlcyAtIHRob3VnaCBvdGhlciBzcGVjaWZpY2F0aW9zbiBjYW4gdHJlYXQgdGhlbSB0aGlzIHdheSkuXHJcbiAgICovXHJcbiAgUmVzb3VyY2U6IHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVzb3VyY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmRcIixcclxuICB9LFxyXG59IGFzIGNvbnN0O1xyXG4iXX0=