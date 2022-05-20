// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/resource-aggregation-mode|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * How resource references can be aggregated.
 */
export const ResourceAggregationModeCodings = {
    /**
     * bundled: The resource the reference points to will be found in the same bundle as the resource that includes the reference.
     */
    Bundled: new Coding({
        display: "Bundled",
        code: "bundled",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    }),
    /**
     * contained: The reference is a local reference to a contained resource.
     */
    Contained: new Coding({
        display: "Contained",
        code: "contained",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    }),
    /**
     * referenced: The reference to a resource that has to be resolved externally to the resource that includes the reference.
     */
    Referenced: new Coding({
        display: "Referenced",
        code: "referenced",
        system: "http://hl7.org/fhir/resource-aggregation-mode",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb3VyY2VBZ2dyZWdhdGlvbk1vZGVDb2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9SZXNvdXJjZUFnZ3JlZ2F0aW9uTW9kZUNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsOEVBQThFO0FBRTlFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHO0lBQzVDOztPQUVHO0lBQ0gsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDcEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLFdBQVc7UUFDakIsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0lBQ0Y7O09BRUc7SUFDSCxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDckIsT0FBTyxFQUFFLFlBQVk7UUFDckIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLCtDQUErQztLQUN4RCxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9yZXNvdXJjZS1hZ2dyZWdhdGlvbi1tb2RlfDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBIb3cgcmVzb3VyY2UgcmVmZXJlbmNlcyBjYW4gYmUgYWdncmVnYXRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBSZXNvdXJjZUFnZ3JlZ2F0aW9uTW9kZUNvZGluZ3MgPSB7XHJcbiAgLyoqXHJcbiAgICogYnVuZGxlZDogVGhlIHJlc291cmNlIHRoZSByZWZlcmVuY2UgcG9pbnRzIHRvIHdpbGwgYmUgZm91bmQgaW4gdGhlIHNhbWUgYnVuZGxlIGFzIHRoZSByZXNvdXJjZSB0aGF0IGluY2x1ZGVzIHRoZSByZWZlcmVuY2UuXHJcbiAgICovXHJcbiAgQnVuZGxlZDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkJ1bmRsZWRcIixcclxuICAgIGNvZGU6IFwiYnVuZGxlZFwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly9obDcub3JnL2ZoaXIvcmVzb3VyY2UtYWdncmVnYXRpb24tbW9kZVwiLFxyXG4gIH0pLFxyXG4gIC8qKlxyXG4gICAqIGNvbnRhaW5lZDogVGhlIHJlZmVyZW5jZSBpcyBhIGxvY2FsIHJlZmVyZW5jZSB0byBhIGNvbnRhaW5lZCByZXNvdXJjZS5cclxuICAgKi9cclxuICBDb250YWluZWQ6IG5ldyBDb2Rpbmcoe1xyXG4gICAgZGlzcGxheTogXCJDb250YWluZWRcIixcclxuICAgIGNvZGU6IFwiY29udGFpbmVkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXNvdXJjZS1hZ2dyZWdhdGlvbi1tb2RlXCIsXHJcbiAgfSksXHJcbiAgLyoqXHJcbiAgICogcmVmZXJlbmNlZDogVGhlIHJlZmVyZW5jZSB0byBhIHJlc291cmNlIHRoYXQgaGFzIHRvIGJlIHJlc29sdmVkIGV4dGVybmFsbHkgdG8gdGhlIHJlc291cmNlIHRoYXQgaW5jbHVkZXMgdGhlIHJlZmVyZW5jZS5cclxuICAgKi9cclxuICBSZWZlcmVuY2VkOiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiUmVmZXJlbmNlZFwiLFxyXG4gICAgY29kZTogXCJyZWZlcmVuY2VkXCIsXHJcbiAgICBzeXN0ZW06IFwiaHR0cDovL2hsNy5vcmcvZmhpci9yZXNvdXJjZS1hZ2dyZWdhdGlvbi1tb2RlXCIsXHJcbiAgfSksXHJcbn0gYXMgY29uc3Q7XHJcblxyXG4vKipcclxuICogSG93IHJlc291cmNlIHJlZmVyZW5jZXMgY2FuIGJlIGFnZ3JlZ2F0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvdXJjZUFnZ3JlZ2F0aW9uTW9kZUNvZGluZ1R5cGUgPSB0eXBlb2YgUmVzb3VyY2VBZ2dyZWdhdGlvbk1vZGVDb2RpbmdzO1xyXG4iXX0=