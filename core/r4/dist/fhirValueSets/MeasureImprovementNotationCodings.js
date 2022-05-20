// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-improvement-notation|4.0.1
import { Coding } from '../fhir/Coding.js';
/**
 * Observation values that indicate what change in a measurement value or score is indicative of an improvement in the measured item or scored issue.
 */
export const MeasureImprovementNotationCodings = {
    /**
     * decrease: Improvement is indicated as a decrease in the score or measurement (e.g. Lower score indicates better quality).
     */
    DecreasedScoreIndicatesImprovement: new Coding({
        display: "Decreased score indicates improvement",
        code: "decrease",
        system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
    }),
    /**
     * increase: Improvement is indicated as an increase in the score or measurement (e.g. Higher score indicates better quality).
     */
    IncreasedScoreIndicatesImprovement: new Coding({
        display: "Increased score indicates improvement",
        code: "increase",
        system: "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVhc3VyZUltcHJvdmVtZW50Tm90YXRpb25Db2RpbmdzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZmhpclZhbHVlU2V0cy9NZWFzdXJlSW1wcm92ZW1lbnROb3RhdGlvbkNvZGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBRWpGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUUxQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUFHO0lBQy9DOztPQUVHO0lBQ0gsa0NBQWtDLEVBQUUsSUFBSSxNQUFNLENBQUM7UUFDN0MsT0FBTyxFQUFFLHVDQUF1QztRQUNoRCxJQUFJLEVBQUUsVUFBVTtRQUNoQixNQUFNLEVBQUUsb0VBQW9FO0tBQzdFLENBQUM7SUFDRjs7T0FFRztJQUNILGtDQUFrQyxFQUFFLElBQUksTUFBTSxDQUFDO1FBQzdDLE9BQU8sRUFBRSx1Q0FBdUM7UUFDaEQsSUFBSSxFQUFFLFVBQVU7UUFDaEIsTUFBTSxFQUFFLG9FQUFvRTtLQUM3RSxDQUFDO0NBQ00sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDxhdXRvLWdlbmVyYXRlZC8+XHJcbi8vIENvbnRlbnRzIG9mOiBobDcuZmhpci5yNC5jb3JlIHZlcnNpb246IDQuMC4xXHJcbi8vIE1pbmltdW0gVHlwZVNjcmlwdCBWZXJzaW9uOiAzLjdcclxuLy8gRkhJUiBWYWx1ZVNldDogaHR0cDovL2hsNy5vcmcvZmhpci9WYWx1ZVNldC9tZWFzdXJlLWltcHJvdmVtZW50LW5vdGF0aW9ufDQuMC4xXHJcblxyXG5pbXBvcnQgeyBDb2RpbmcgfSBmcm9tICcuLi9maGlyL0NvZGluZy5qcydcclxuXHJcbi8qKlxyXG4gKiBPYnNlcnZhdGlvbiB2YWx1ZXMgdGhhdCBpbmRpY2F0ZSB3aGF0IGNoYW5nZSBpbiBhIG1lYXN1cmVtZW50IHZhbHVlIG9yIHNjb3JlIGlzIGluZGljYXRpdmUgb2YgYW4gaW1wcm92ZW1lbnQgaW4gdGhlIG1lYXN1cmVkIGl0ZW0gb3Igc2NvcmVkIGlzc3VlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1lYXN1cmVJbXByb3ZlbWVudE5vdGF0aW9uQ29kaW5ncyA9IHtcclxuICAvKipcclxuICAgKiBkZWNyZWFzZTogSW1wcm92ZW1lbnQgaXMgaW5kaWNhdGVkIGFzIGEgZGVjcmVhc2UgaW4gdGhlIHNjb3JlIG9yIG1lYXN1cmVtZW50IChlLmcuIExvd2VyIHNjb3JlIGluZGljYXRlcyBiZXR0ZXIgcXVhbGl0eSkuXHJcbiAgICovXHJcbiAgRGVjcmVhc2VkU2NvcmVJbmRpY2F0ZXNJbXByb3ZlbWVudDogbmV3IENvZGluZyh7XHJcbiAgICBkaXNwbGF5OiBcIkRlY3JlYXNlZCBzY29yZSBpbmRpY2F0ZXMgaW1wcm92ZW1lbnRcIixcclxuICAgIGNvZGU6IFwiZGVjcmVhc2VcIixcclxuICAgIHN5c3RlbTogXCJodHRwOi8vdGVybWlub2xvZ3kuaGw3Lm9yZy9Db2RlU3lzdGVtL21lYXN1cmUtaW1wcm92ZW1lbnQtbm90YXRpb25cIixcclxuICB9KSxcclxuICAvKipcclxuICAgKiBpbmNyZWFzZTogSW1wcm92ZW1lbnQgaXMgaW5kaWNhdGVkIGFzIGFuIGluY3JlYXNlIGluIHRoZSBzY29yZSBvciBtZWFzdXJlbWVudCAoZS5nLiBIaWdoZXIgc2NvcmUgaW5kaWNhdGVzIGJldHRlciBxdWFsaXR5KS5cclxuICAgKi9cclxuICBJbmNyZWFzZWRTY29yZUluZGljYXRlc0ltcHJvdmVtZW50OiBuZXcgQ29kaW5nKHtcclxuICAgIGRpc3BsYXk6IFwiSW5jcmVhc2VkIHNjb3JlIGluZGljYXRlcyBpbXByb3ZlbWVudFwiLFxyXG4gICAgY29kZTogXCJpbmNyZWFzZVwiLFxyXG4gICAgc3lzdGVtOiBcImh0dHA6Ly90ZXJtaW5vbG9neS5obDcub3JnL0NvZGVTeXN0ZW0vbWVhc3VyZS1pbXByb3ZlbWVudC1ub3RhdGlvblwiLFxyXG4gIH0pLFxyXG59IGFzIGNvbnN0O1xyXG5cclxuLyoqXHJcbiAqIE9ic2VydmF0aW9uIHZhbHVlcyB0aGF0IGluZGljYXRlIHdoYXQgY2hhbmdlIGluIGEgbWVhc3VyZW1lbnQgdmFsdWUgb3Igc2NvcmUgaXMgaW5kaWNhdGl2ZSBvZiBhbiBpbXByb3ZlbWVudCBpbiB0aGUgbWVhc3VyZWQgaXRlbSBvciBzY29yZWQgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBNZWFzdXJlSW1wcm92ZW1lbnROb3RhdGlvbkNvZGluZ1R5cGUgPSB0eXBlb2YgTWVhc3VyZUltcHJvdmVtZW50Tm90YXRpb25Db2RpbmdzO1xyXG4iXX0=