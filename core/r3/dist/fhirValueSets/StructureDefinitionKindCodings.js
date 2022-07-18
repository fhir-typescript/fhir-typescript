// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/structure-definition-kind|3.0.2
/**
 * Defines the type of structure that a definition is describing.
 */
export const StructureDefinitionKindCodings = {
    /**
     * complex-type: A  complex structure that defines a set of data elements. These can be used throughout Resource and extension definitions, and in logical models.
     */
    ComplexDataType: {
        display: "Complex Data Type",
        code: "complex-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * logical: A conceptual package of data that will be mapped to resources for implementation.
     */
    LogicalModel: {
        display: "Logical Model",
        code: "logical",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout Resource and extension definitions. Only the base specification can define primitive types.
     */
    PrimitiveDataType: {
        display: "Primitive Data Type",
        code: "primitive-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
    /**
     * resource: A resource defined by the FHIR specification.
     */
    Resource: {
        display: "Resource",
        code: "resource",
        system: "http://hl7.org/fhir/structure-definition-kind",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdHJ1Y3R1cmVEZWZpbml0aW9uS2luZENvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBMEI5RTs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFxQztJQUM5RTs7T0FFRztJQUNILGVBQWUsRUFBRTtRQUNmLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFLGVBQWU7UUFDeEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0NBQStDO0tBQ3hEO0lBQ0Q7O09BRUc7SUFDSCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtJQUNEOztPQUVHO0lBQ0gsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RDtDQUNPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8YXV0by1nZW5lcmF0ZWQvPlxyXG4vLyBDb250ZW50cyBvZjogaGw3LmZoaXIucjMuY29yZSB2ZXJzaW9uOiAzLjAuMlxyXG4vLyBNaW5pbXVtIFR5cGVTY3JpcHQgVmVyc2lvbjogMy43XHJcbi8vIEZISVIgVmFsdWVTZXQ6IGh0dHA6Ly9obDcub3JnL2ZoaXIvVmFsdWVTZXQvc3RydWN0dXJlLWRlZmluaXRpb24ta2luZHwzLjAuMlxyXG5cclxuaW1wb3J0IHsgQ29kaW5nQXJncyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHR5cGUgb2Ygc3RydWN0dXJlIHRoYXQgYSBkZWZpbml0aW9uIGlzIGRlc2NyaWJpbmcuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJ1Y3R1cmVEZWZpbml0aW9uS2luZENvZGluZ1R5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogY29tcGxleC10eXBlOiBBICBjb21wbGV4IHN0cnVjdHVyZSB0aGF0IGRlZmluZXMgYSBzZXQgb2YgZGF0YSBlbGVtZW50cy4gVGhlc2UgY2FuIGJlIHVzZWQgdGhyb3VnaG91dCBSZXNvdXJjZSBhbmQgZXh0ZW5zaW9uIGRlZmluaXRpb25zLCBhbmQgaW4gbG9naWNhbCBtb2RlbHMuXHJcbiAgICovXHJcbiAgQ29tcGxleERhdGFUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIGxvZ2ljYWw6IEEgY29uY2VwdHVhbCBwYWNrYWdlIG9mIGRhdGEgdGhhdCB3aWxsIGJlIG1hcHBlZCB0byByZXNvdXJjZXMgZm9yIGltcGxlbWVudGF0aW9uLlxyXG4gICAqL1xyXG4gIExvZ2ljYWxNb2RlbDogQ29kaW5nQXJncztcclxuICAvKipcclxuICAgKiBwcmltaXRpdmUtdHlwZTogQSBwcmltaXRpdmUgdHlwZSB0aGF0IGhhcyBhIHZhbHVlIGFuZCBhbiBleHRlbnNpb24uIFRoZXNlIGNhbiBiZSB1c2VkIHRocm91Z2hvdXQgUmVzb3VyY2UgYW5kIGV4dGVuc2lvbiBkZWZpbml0aW9ucy4gT25seSB0aGUgYmFzZSBzcGVjaWZpY2F0aW9uIGNhbiBkZWZpbmUgcHJpbWl0aXZlIHR5cGVzLlxyXG4gICAqL1xyXG4gIFByaW1pdGl2ZURhdGFUeXBlOiBDb2RpbmdBcmdzO1xyXG4gIC8qKlxyXG4gICAqIHJlc291cmNlOiBBIHJlc291cmNlIGRlZmluZWQgYnkgdGhlIEZISVIgc3BlY2lmaWNhdGlvbi5cclxuICAgKi9cclxuICBSZXNvdXJjZTogQ29kaW5nQXJncztcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHR5cGUgb2Ygc3RydWN0dXJlIHRoYXQgYSBkZWZpbml0aW9uIGlzIGRlc2NyaWJpbmcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdzOlN0cnVjdHVyZURlZmluaXRpb25LaW5kQ29kaW5nVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBjb21wbGV4LXR5cGU6IEEgIGNvbXBsZXggc3RydWN0dXJlIHRoYXQgZGVmaW5lcyBhIHNldCBvZiBkYXRhIGVsZW1lbnRzLiBUaGVzZSBjYW4gYmUgdXNlZCB0aHJvdWdob3V0IFJlc291cmNlIGFuZCBleHRlbnNpb24gZGVmaW5pdGlvbnMsIGFuZCBpbiBsb2dpY2FsIG1vZGVscy5cclxuICAgKi9cclxuICBDb21wbGV4RGF0YVR5cGU6IHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxleCBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwiY29tcGxleC10eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBsb2dpY2FsOiBBIGNvbmNlcHR1YWwgcGFja2FnZSBvZiBkYXRhIHRoYXQgd2lsbCBiZSBtYXBwZWQgdG8gcmVzb3VyY2VzIGZvciBpbXBsZW1lbnRhdGlvbi5cclxuICAgKi9cclxuICBMb2dpY2FsTW9kZWw6IHtcclxuICAgIGRpc3BsYXk6IFwiTG9naWNhbCBNb2RlbFwiLFxyXG4gICAgY29kZTogXCJsb2dpY2FsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBwcmltaXRpdmUtdHlwZTogQSBwcmltaXRpdmUgdHlwZSB0aGF0IGhhcyBhIHZhbHVlIGFuZCBhbiBleHRlbnNpb24uIFRoZXNlIGNhbiBiZSB1c2VkIHRocm91Z2hvdXQgUmVzb3VyY2UgYW5kIGV4dGVuc2lvbiBkZWZpbml0aW9ucy4gT25seSB0aGUgYmFzZSBzcGVjaWZpY2F0aW9uIGNhbiBkZWZpbmUgcHJpbWl0aXZlIHR5cGVzLlxyXG4gICAqL1xyXG4gIFByaW1pdGl2ZURhdGFUeXBlOiB7XHJcbiAgICBkaXNwbGF5OiBcIlByaW1pdGl2ZSBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwicHJpbWl0aXZlLXR5cGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmRcIixcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIHJlc291cmNlOiBBIHJlc291cmNlIGRlZmluZWQgYnkgdGhlIEZISVIgc3BlY2lmaWNhdGlvbi5cclxuICAgKi9cclxuICBSZXNvdXJjZToge1xyXG4gICAgZGlzcGxheTogXCJSZXNvdXJjZVwiLFxyXG4gICAgY29kZTogXCJyZXNvdXJjZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvc3RydWN0dXJlLWRlZmluaXRpb24ta2luZFwiLFxyXG4gIH0sXHJcbn0gYXMgY29uc3Q7XHJcbiJdfQ==