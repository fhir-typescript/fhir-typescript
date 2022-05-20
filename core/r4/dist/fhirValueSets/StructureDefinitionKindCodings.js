// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/structure-definition-kind|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Defines the type of structure that a definition is describing.
 */
export const StructureDefinitionKindCodings = {
    /**
     * complex-type: A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.
     */
    ComplexDataType: new Coding({
        display: "Complex Data Type",
        code: "complex-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    }),
    /**
     * logical: A pattern or a template that is not intended to be a real resource or complex type.
     */
    Logical: new Coding({
        display: "Logical",
        code: "logical",
        system: "http://hl7.org/fhir/structure-definition-kind",
    }),
    /**
     * primitive-type: A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.
     */
    PrimitiveDataType: new Coding({
        display: "Primitive Data Type",
        code: "primitive-type",
        system: "http://hl7.org/fhir/structure-definition-kind",
    }),
    /**
     * resource: A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).
     */
    Resource: new Coding({
        display: "Resource",
        code: "resource",
        system: "http://hl7.org/fhir/structure-definition-kind",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9TdHJ1Y3R1cmVEZWZpbml0aW9uS2luZENvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBRTlFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHO0lBQzVDOztPQUVHO0lBQ0gsZUFBZSxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzFCLE9BQU8sRUFBRSxtQkFBbUI7UUFDNUIsSUFBSSxFQUFFLGNBQWM7UUFDcEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsK0NBQStDO0tBQ3hELENBQUM7SUFDRjs7T0FFRztJQUNILGlCQUFpQixFQUFFLElBQUksTUFBTSxDQUFDO1FBQzVCLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixNQUFNLEVBQUUsK0NBQStDO0tBQ3hELENBQUM7SUFDRjs7T0FFRztJQUNILFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQztRQUNuQixPQUFPLEVBQUUsVUFBVTtRQUNuQixJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsK0NBQStDO0tBQ3hELENBQUM7Q0FDTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPGF1dG8tZ2VuZXJhdGVkLz5cclxuLy8gQ29udGVudHMgb2Y6IGhsNy5maGlyLnI0LmNvcmUgdmVyc2lvbjogNC4wLjFcclxuLy8gTWluaW11bSBUeXBlU2NyaXB0IFZlcnNpb246IDMuN1xyXG4vLyBGSElSIFZhbHVlU2V0OiBodHRwOi8vaGw3Lm9yZy9maGlyL1ZhbHVlU2V0L3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmR8NC4wLjFcclxuXHJcbmltcG9ydCB7IENvZGluZyB9IGZyb20gJy4uL2ZoaXIvQ29kaW5nLmpzJ1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHR5cGUgb2Ygc3RydWN0dXJlIHRoYXQgYSBkZWZpbml0aW9uIGlzIGRlc2NyaWJpbmcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdzID0ge1xyXG4gIC8qKlxyXG4gICAqIGNvbXBsZXgtdHlwZTogQSAgY29tcGxleCBzdHJ1Y3R1cmUgdGhhdCBkZWZpbmVzIGEgc2V0IG9mIGRhdGEgZWxlbWVudHMgdGhhdCBpcyBzdWl0YWJsZSBmb3IgdXNlIGluICdyZXNvdXJjZXMnLiBUaGUgYmFzZSBzcGVjaWZpY2F0aW9uIGRlZmluZXMgYSBudW1iZXIgb2YgY29tcGxleCB0eXBlcywgYW5kIG90aGVyIHNwZWNpZmljYXRpb25zIGNhbiBkZWZpbmUgYWRkaXRpb25hbCB0eXBlcy4gVGhlc2Ugc3RydWN0dXJlcyBkbyBub3QgaGF2ZSBhIG1haW50YWluZWQgaWRlbnRpdHkuXHJcbiAgICovXHJcbiAgQ29tcGxleERhdGFUeXBlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiQ29tcGxleCBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwiY29tcGxleC10eXBlXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogbG9naWNhbDogQSBwYXR0ZXJuIG9yIGEgdGVtcGxhdGUgdGhhdCBpcyBub3QgaW50ZW5kZWQgdG8gYmUgYSByZWFsIHJlc291cmNlIG9yIGNvbXBsZXggdHlwZS5cclxuICAgKi9cclxuICBMb2dpY2FsOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiTG9naWNhbFwiLFxyXG4gICAgY29kZTogXCJsb2dpY2FsXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9zdHJ1Y3R1cmUtZGVmaW5pdGlvbi1raW5kXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcHJpbWl0aXZlLXR5cGU6IEEgcHJpbWl0aXZlIHR5cGUgdGhhdCBoYXMgYSB2YWx1ZSBhbmQgYW4gZXh0ZW5zaW9uLiBUaGVzZSBjYW4gYmUgdXNlZCB0aHJvdWdob3V0IGNvbXBsZXggZGF0YXR5cGUsIFJlc291cmNlIGFuZCBleHRlbnNpb24gZGVmaW5pdGlvbnMuIE9ubHkgdGhlIGJhc2Ugc3BlY2lmaWNhdGlvbiBjYW4gZGVmaW5lIHByaW1pdGl2ZSB0eXBlcy5cclxuICAgKi9cclxuICBQcmltaXRpdmVEYXRhVHlwZTogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIlByaW1pdGl2ZSBEYXRhIFR5cGVcIixcclxuICAgIGNvZGU6IFwicHJpbWl0aXZlLXR5cGVcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmRcIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiByZXNvdXJjZTogQSAncmVzb3VyY2UnIC0gYSBkaXJlY3RlZCBhY3ljbGljIGdyYXBoIG9mIGVsZW1lbnRzIHRoYXQgYWdncmVncmF0ZXMgb3RoZXIgdHlwZXMgaW50byBhbiBpZGVudGlmaWFibGUgZW50aXR5LiBUaGUgYmFzZSBGSElSIHJlc291cmNlcyBhcmUgZGVmaW5lZCBieSB0aGUgRkhJUiBzcGVjaWZpY2F0aW9uIGl0c2VsZiBidXQgb3RoZXIgJ3Jlc291cmNlcycgY2FuIGJlIGRlZmluZWQgaW4gYWRkaXRpb25hbCBzcGVjaWZpY2F0aW9ucyAodGhvdWdoIHRoZXNlIHdpbGwgbm90IGJlIHJlY29nbmlzZWQgYXMgJ3Jlc291cmNlcycgYnkgdGhlIEZISVIgc3BlY2lmaWNhdGlvbiAoaS5lLiB0aGV5IGRvIG5vdCBnZXQgZW5kLXBvaW50cyBldGMsIG9yIGFjdCBhcyB0aGUgdGFyZ2V0cyBvZiByZWZlcmVuY2VzIGluIEZISVIgZGVmaW5lZCByZXNvdXJjZXMgLSB0aG91Z2ggb3RoZXIgc3BlY2lmaWNhdGlvc24gY2FuIHRyZWF0IHRoZW0gdGhpcyB3YXkpLlxyXG4gICAqL1xyXG4gIFJlc291cmNlOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUmVzb3VyY2VcIixcclxuICAgIGNvZGU6IFwicmVzb3VyY2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vaGw3Lm9yZy9maGlyL3N0cnVjdHVyZS1kZWZpbml0aW9uLWtpbmRcIixcclxuICB9KSxcclxufSBhcyBjb25zdDtcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSB0eXBlIG9mIHN0cnVjdHVyZSB0aGF0IGEgZGVmaW5pdGlvbiBpcyBkZXNjcmliaW5nLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3RydWN0dXJlRGVmaW5pdGlvbktpbmRDb2RpbmdUeXBlID0gdHlwZW9mIFN0cnVjdHVyZURlZmluaXRpb25LaW5kQ29kaW5ncztcclxuIl19